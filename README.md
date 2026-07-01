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

## 가이드 투어 (Manuscript standalone player)

각 페이지 **화면 우하단에 플로팅 "투어/Tour" 버튼**이 떠 있고, 누르면 확장 없이 재생되는
**Manuscript standalone player**가 그 페이지의 시나리오를 불러와 **스포트라이트 + 내레이션** 투어를
재생한다(딤 + 대상 하이라이트 + 골드 어노테이션 라벨 + 하단 컨트롤바). 방문자는 아무 설치가 필요 없다.

- **`player/`** — 자체 호스팅 번들(ESM 3종: `manuscript-player.0.1.0.esm.js` + `player-entry.js` + `spotlight-editor.js`). 한 폴더에 함께 둔다.
- **`tours/<slug>-<lang>.json`** — 페이지·언어별 시나리오 1개(Manuscript schema `0.1.2`). `<slug>` = `<body data-page>` 값, `<lang>` = `ko`/`en`. 스텝마다 3-레이어 셀렉터(`stable-attr`/`text-parent`/`visual-heuristic`) + 골드 텍스트 라벨.
- **`_tour.js`** (모든 페이지 `<head>`가 아닌 본문 끝에서 `_nav.js` 뒤로 로드) — 우하단 FAB 주입, 언어/경로 자동 감지(`en/` 깊이), `tours/<slug>-<lang>.json`을 `fetch` → player를 동적 `import` → `load()`/`play()`. 재생 중엔 FAB 숨김, 종료 시 복귀.
- **색상**: 어노테이션은 사이트 **앰버 액센트(`#dcab59`, = `--accent`)** + 다크 칩(`#1c1e21`)으로 테마와 일치시킨다.
- **TTS 보이스**: `window.__MANUSCRIPT_PLAYER__`에서 **Windows(및 기타 OS)는 Google 보이스**(ko `Google 한국의`, en `Google US English`), **macOS는 보이스 미지정**(시스템 기본 선택).
- ⚠️ **페이지를 추가·수정하면**: ① `<body data-page="<slug>">`가 파일명 슬러그와 일치해야 하고(불일치 시 엉뚱한 투어 로드) ② 본문 끝에 `<script src="…/_tour.js"></script>`가 있어야 하며 ③ `tours/<slug>-ko.json`(+ i18n 대상이면 `-en.json`)을 같이 갱신한다. `stats.html`은 ko 전용.
- **배포**: `player/`·`tours/`가 `docs/site/` 아래에 있으므로 아래 Pages 미러에 **자동 포함**된다(별도 단계 없음).

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

## 검색/AI 크롤러 노출

`docs/site/` 루트에 검색·AI 발견용 파일을 둔다.

- `robots.txt` — OpenAI(`OAI-SearchBot`, `ChatGPT-User`, `GPTBot`), Google(`Googlebot`, `Google-Extended`), Anthropic/Claude(`Claude-SearchBot`, `Claude-User`, `ClaudeBot`) 허용.
- `sitemap.xml` — 한국어·영어 HTML 전체 URL.
- `llms.txt` / `llms-full.txt` — Codex, Claude, Antigravity 같은 AI 코딩 도구가 문서 구조를 빠르게 읽도록 하는 진입 인덱스.
- 각 HTML `<head>` — `meta robots`, `canonical`, `hreflang`을 포함한다.

주의: 현재 배포 URL은 GitHub Project Pages 경로(`https://zendy00.github.io/orch-term-pages/`)다. 표준 `robots.txt`는 호스트 루트(`/robots.txt`) 기준이라, `https://zendy00.github.io/orch-term-pages/robots.txt`는 파일로 접근 가능해도 모든 크롤러의 정책 파일로 보장되지는 않는다. 크롤러 제어를 확실히 하려면 커스텀 도메인을 Pages에 연결하거나 `zendy00.github.io` 사용자 사이트 루트에도 동일한 `robots.txt`를 둔다. `sitemap.xml`, HTML 메타, `llms.txt`는 현재 Project Pages 경로에서도 그대로 유효하다.

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
