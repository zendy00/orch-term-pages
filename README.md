# Orch term 랜딩 사이트 (`docs/site/`)

정적 HTML/CSS 랜딩 페이지. 빌드 단계 없음. 로컬 미리보기: `npx serve docs/site`.

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
**`orch-term-pages`의 GitHub Release**에 설치파일을 업로드한다. 랜딩 페이지의 "다운로드" 버튼은
그 Release의 고정 링크 `releases/latest/download/orchterm-setup.exe`를 가리킨다.

- **트리거**: `git tag v0.1.20 && git push origin v0.1.20` (또는 Actions 탭 → `Release → orch-term-pages` → Run workflow).
- **러너**: `windows-latest` (Tauri 데스크톱 앱은 크로스컴파일 불가). 빌드 ~5–15분.
- **토큰**: 위 `PAGES_DEPLOY_TOKEN`을 그대로 사용(Release 생성/업로드는 Contents 범주).
- **에셋**: NSIS `orchterm-setup.exe`(고정 이름) + MSI `orchterm-x64.msi`.
- ⚠️ **미서명** — 설치파일은 코드서명되지 않아 Windows SmartScreen "알 수 없는 게시자" 경고가 뜬다.
  공개 배포 시 코드서명 인증서 도입을 권장(후속 과제).

> 참고: 빌드 버전은 `src-tauri/tauri.conf.json`의 `version`(현재 `0.1.20`)을 따른다
> (`package.json`은 `1.0.0` — 추후 정렬 권장).
