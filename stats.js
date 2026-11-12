// Orch term 릴리즈 스탯 — 순수 로직(브라우저·vitest 공용 ES 모듈, DOM 의존 없음).
// GitHub Release의 "latest"는 created_at(태그 커밋 날짜)이 아니라 published_at(게시 시각)
// 기준이어야 한다. 우리 릴리즈는 태그가 전부 같은 커밋을 가리켜 created_at이 동일하므로,
// created_at으로 정렬하는 도구는 최신을 잘못 고른다 — 그 함정을 여기서 바로잡는다.

/** 게시 시각(published_at) 내림차순 정렬(원본 불변). */
export function sortByPublished(releases) {
  return releases.slice().sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
}

/** 최신 릴리즈: draft 제외 + 가장 최근 게시된 안정 릴리즈(없으면 최신 prerelease). */
export function pickLatest(releases) {
  const live = releases.filter((r) => !r.draft);
  if (!live.length) return null;
  const sorted = sortByPublished(live);
  return sorted.find((r) => !r.prerelease) || sorted[0];
}

// 앱 릴리즈 태그(vX.Y.Z, rc 등 접미사 허용). 같은 저장소에 회의 전사 모델·DLL 릴리즈
// (asr-models-ko-N, prerelease)도 있는데, 앱이 회의 첫 사용 때 받아 가는 것이라 설치
// 다운로드가 아니다 — 합계·릴리즈 수·목록에서 모두 뺀다.
const APP_TAG = /^v\d+\.\d+\.\d+/;

/** 앱 릴리즈인가(태그가 vX.Y.Z로 시작). 모델 배포 릴리즈는 false. */
export function isAppRelease(release) {
  return APP_TAG.test(release.tag_name || '');
}

/** 통계 대상 릴리즈: draft·모델 배포 릴리즈 제외. 베타(v<x.y.z>-beta.<n>, prerelease)도 앱 설치라 넣는다
 *  (합계는 `splitDownloads`로 정식/베타를 나눠 보인다). 고정 프리릴리즈 `beta-channel`은 태그가 vX.Y.Z가 아니라 빠진다. */
export function appReleases(releases) {
  return releases.filter((r) => !r.draft && isAppRelease(r));
}

/** 최신 정식판보다 나중에 게시된 베타 중 가장 최근 것(없거나 정식판이 없으면 null — 그땐 pickLatest가 베타로 폴백한다). */
export function pickLatestBeta(releases) {
  const live = sortByPublished(releases.filter((r) => !r.draft));
  const stable = live.find((r) => !r.prerelease);
  if (!stable) return null;
  const beta = live.find((r) => r.prerelease);
  if (!beta) return null;
  return new Date(beta.published_at) > new Date(stable.published_at) ? beta : null;
}

/** 정식·베타 다운로드 합계. */
export function splitDownloads(releases) {
  let stable = 0;
  let beta = 0;
  for (const r of releases) {
    if (r.prerelease) beta += releaseDownloads(r);
    else stable += releaseDownloads(r);
  }
  return { stable, beta };
}

// 실제 설치 파일만 다운로드로 센다(허용 목록). 그 밖은 목록엔 보이되 「미집계」:
// - latest.json: Tauri updater 매니페스트 — 앱이 업데이트를 확인할 때마다 받아가 폴링 노이즈.
// - install.sh: macOS 한 줄 설치 부트스트랩 — 받은 뒤 실제 바이너리를 다시 받아 이중 집계.
// - *.sig: 업데이터 서명 — 업데이트 한 번에 설치 파일과 함께 받아져 이중 집계.
// - *.app.tar.gz는 macOS 자동 업데이트가 받는 설치 묶음이라 센다(Windows 자동 업데이트는 setup.exe를 받아 이미 센다).
const INSTALLER = /\.(?:exe|msi|dmg|app\.tar\.gz|AppImage|deb|rpm)$/i;

/** 이 에셋을 다운로드 통계로 집계하는가(설치 파일만 true). */
export function isCounted(asset) {
  return INSTALLER.test(asset.name || '');
}

/** 다운로드로 집계할 에셋만(설치 파일). */
export function countedAssets(release) {
  return (release.assets || []).filter(isCounted);
}

/** 한 릴리즈의 설치 파일 다운로드 합계. */
export function releaseDownloads(release) {
  return countedAssets(release).reduce((sum, a) => sum + (a.download_count || 0), 0);
}

/** 여러 릴리즈의 다운로드 총합. */
export function totalDownloads(releases) {
  return releases.reduce((sum, r) => sum + releaseDownloads(r), 0);
}

// 목록 표시용 에셋: 집계 대상을 다운로드 순으로 앞에, 미집계 매니페스트(latest.json)는 그 뒤에.
// 카운트엔 안 들어가지만 목록에선 보여 준다(미집계임은 렌더러가 isCounted로 구분 표기).
export function sortedAssets(release) {
  const byDownloads = (a, b) => (b.download_count || 0) - (a.download_count || 0);
  const all = release.assets || [];
  const counted = all.filter(isCounted).sort(byDownloads);
  const uncounted = all.filter((a) => !isCounted(a)).sort(byDownloads);
  return [...counted, ...uncounted];
}

export function fmtInt(n) {
  return Number(n).toLocaleString('en-US');
}

export function fmtBytes(n) {
  if (n < 1024) return `${n} B`;
  const units = ['KB', 'MB', 'GB'];
  let v = n / 1024;
  let i = 0;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i += 1;
  }
  return `${v.toFixed(1)} ${units[i]}`;
}

export function fmtDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toISOString().slice(0, 10);
}
