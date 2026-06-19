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

// 실제 사용자 다운로드 통계에서 제외할 에셋 이름. latest.json은 Tauri updater 매니페스트라
// 앱이 업데이트를 확인할 때마다 받아가 카운트를 부풀린다 — 설치 다운로드가 아니라 폴링 노이즈다.
const NON_DOWNLOAD_ASSETS = new Set(['latest.json']);

/** 다운로드로 집계할 에셋만(업데이터 매니페스트 제외). */
export function countedAssets(release) {
  return (release.assets || []).filter((a) => !NON_DOWNLOAD_ASSETS.has(a.name));
}

/** 한 릴리즈의 에셋 다운로드 합계(업데이터 매니페스트 제외). */
export function releaseDownloads(release) {
  return countedAssets(release).reduce((sum, a) => sum + (a.download_count || 0), 0);
}

/** 여러 릴리즈의 다운로드 총합. */
export function totalDownloads(releases) {
  return releases.reduce((sum, r) => sum + releaseDownloads(r), 0);
}

/** 다운로드 많은 순으로 정렬한 에셋 목록(업데이터 매니페스트 제외, 원본 불변). */
export function sortedAssets(release) {
  return countedAssets(release).slice().sort((a, b) => (b.download_count || 0) - (a.download_count || 0));
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
