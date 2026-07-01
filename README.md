# Orch term 문서 사이트 (`docs/site/`)

좌측 사이드바 + 기능별 가이드 페이지로 구성된 **정적 문서 사이트**. 빌드 단계 없음.
로컬 미리보기: `npx serve docs/site` (또는 `docs/site/index.html`을 브라우저로 열기).

## 구성

셸 = 상단바 + 좌측 사이드바(접히는 그룹) + 본문 + 우측 TOC. 다중 페이지(기능별 HTML).

- **공유 자산**
  - `_tokens.css` · `_app.css` — 디자인 토큰 + 앱 컴포넌트 CSS(화면 재현용)
  - `site.css` — 문서 사이트 디자인 시스템(셸 · 히어로 · 스텝 · 스크린샷 프레임 · 콜아웃)
  - `_nav.js` — 공유 사이드바 + 우측 TOC + 모바일 토글 (`<body data-page>`로 활성 표시)
  - `_icons.js` — 앱 UI 아이콘 SVG 세트 (`data-icon`으로 주입)
- **폰트**: 본문·제목 = Pretendard, 코드·단축키 = IBM Plex Mono (CDN, 오프라인 시 시스템 폴백)
- **테마**: 앰버 액센트, 브랜드 아이콘 = `assets/app-icon.png`
- **페이지 그룹**: 시작하기(소개 · 다운로드 · 빠른 시작) / 대형 기능 / 핵심 기능 / 그 외 · 시스템

`index.html` = 홈, 나머지는 기능별 가이드. `stats.html`은 별도 통계 페이지(독립).
디자인 소스(목업)는 [`docs/mock/site/`](../mock/site/)에 보존.

## 다국어 (i18n)

- **`en/`** = 영어판 페이지(한국어판과 1:1). 공유 자산(`_tokens.css`·`_app.css`·`site.css`·`_icons.js`·`_nav.js`·`assets/`)은 복제하지 않고 `../`로 참조한다.
- **`_lang.js`** (모든 페이지 `<head>`에 로드) — ① 한국어판에서 브라우저 언어가 비한국어면 `en/`으로 **페인트 전 리다이렉트**(localStorage `orchterm-lang`의 수동 선택은 존중, 영어판은 자동 리다이렉트 안 함) ② 상단바에 **반대 언어 글자 하나**(한국어→`EN`, 영어→`KO`)를 토글로 주입.
- **`_nav.js`** — `<html lang="en">`이면 사이드바/TOC를 영어 라벨로 렌더(한국어가 기본).
- ⚠️ **한국어판 페이지를 추가·수정하면 `en/` 대응본도 같이 갱신**한다(구조는 동일하게, 텍스트만 영어). `stats.html`은 i18n 제외.

## 공개 배포 (GitHub Pages, 소스 repo는 private 유지)

`.github/workflows/pages.yml`이 `docs/site/` 변경 push 시 **public repo `zendy00/orch-term-pages`**로
미러하고, GitHub Pages가 서빙한다. **최초 1회 수동 준비:**

1. **public repo 생성**: `zendy00/orch-term-pages` (빈 repo, public).
2. **배포 토큰**: fine-grained PAT 발급 →
   - Resource owner `zendy00`, Repository access = only `orch-term-pages`,
   - Permissions: Contents = Read/write, Metadata = Read-only.
   - `orch-term` repo → Settings → Secrets → Actions → 새 시크릿 `PAGES_DEPLOY_TOKEN`.
3. **Pages 켜기**: `orch-term-pages` → Settings → Pages → Source = `Deploy from a branch`, Branch = `main` / root.
4. **첫 배포**: `orch-term`에서 `docs/site/` 변경을 push 하거나 Actions 탭에서 `Deploy site` 수동 실행.

배포 후: `https://zendy00.github.io/orch-term-pages/`.

## 앱 빌드 + 다운로드 릴리스 (`.github/workflows/release.yml`)

버전 태그(`vX.Y.Z`) 푸시 시(또는 Actions에서 수동 실행) **Windows에서 앱을 빌드**해
**`orch-term-pages`의 GitHub Release**에 설치파일을 업로드한다. 가이드의 "다운로드" 버튼은
그 Release의 고정 링크 `releases/latest/download/orchterm-setup.exe`를 가리킨다.

- **트리거**: `git tag vX.Y.Z && git push origin vX.Y.Z` (또는 Actions 탭 → `Release → orch-term-pages` → Run workflow).
- **러너**: `windows-latest` (Tauri 데스크톱 앱은 크로스컴파일 불가). 빌드 ~5–15분.
- **토큰**: 위 `PAGES_DEPLOY_TOKEN`을 그대로 사용(Release 생성/업로드는 Contents 범주).
- **에셋**: NSIS `orchterm-setup.exe`(고정 이름) + MSI `orchterm-x64.msi` + macOS `.dmg`.
- ⚠️ **미서명** — 설치파일은 코드서명되지 않아 Windows SmartScreen "알 수 없는 게시자" 경고가 뜬다.
  공개 배포 시 코드서명 인증서 도입을 권장(후속 과제).

> 빌드 버전은 `src-tauri/tauri.conf.json`의 `version`을 따른다(태그는 정확히 `v<version>`,
> CI가 불일치 시 빌드 실패 — [release-tagging](../rules/release-tagging.md)).
