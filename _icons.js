// Exact app UI icons harvested verbatim from src/. Single source of truth for the docs site.
// Each entry copied character-for-character from the cited source. DO NOT edit the SVG paths.
const ICONS = {
  // ── Window / titlebar (src/titlebar.ts) ──
  // window-minimize: from src/titlebar.ts (ICON_MIN)
  "window-minimize": '<svg width="10" height="10" viewBox="0 0 10 10"><rect x="0" y="4.5" width="10" height="1" fill="currentColor"/></svg>',
  // window-maximize: from src/titlebar.ts (ICON_MAX)
  "window-maximize": '<svg width="10" height="10" viewBox="0 0 10 10"><rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="currentColor"/></svg>',
  // window-close: from src/titlebar.ts (ICON_CLOSE) — note: update-banner.ts ICON_CLOSE is the same glyph at width/height 7
  "window-close": '<svg width="10" height="10" viewBox="0 0 10 10"><line x1="0" y1="0" x2="10" y2="10" stroke="currentColor"/><line x1="10" y1="0" x2="0" y2="10" stroke="currentColor"/></svg>',
  // menu: from src/titlebar.ts (ICON_MENU) — hamburger
  "menu": '<svg width="12" height="12" viewBox="0 0 12 12"><rect x="0" y="1.5" width="12" height="1.2" fill="currentColor"/><rect x="0" y="5.4" width="12" height="1.2" fill="currentColor"/><rect x="0" y="9.3" width="12" height="1.2" fill="currentColor"/></svg>',
  // contrast: from src/titlebar.ts (ICON_CONTRAST) — half-moon theme cycle (dark→midnight→light)
  "contrast": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" stroke="none"/></svg>',
  // search: from src/titlebar.ts (ICON_COMMAND_SEARCH) — magnifier; byte-identical to src/explorer.ts (ICON_SEARCH).
  //         Size/stroke variants of this same glyph: src/palette.ts (ICON_PALETTE, width 16) and src/workspace/ssh-rail.ts (ICON_MAG, width 12 stroke 1.8).
  "search": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>',

  // ── Statusbar (src/statusbar.ts) ──
  // sidebar: from src/statusbar.ts (explorer open/close toggle) — VS Code style sidebar glyph
  "sidebar": '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 1L1 2v12l1 1h12l1-1V2l-1-1H2zm0 13V2h4v12H2zm5 0V2h7v12H7z"/></svg>',
  // merge: from src/statusbar.ts (merge-all-panes button) — single panel with a tab (fold all panes into tabs)
  "merge": '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><rect x="1.5" y="5" width="13" height="9.5" rx="1"/><path d="M3.5 5V2.5h4V5"/></svg>',

  // ── Pane / split actions (src/workspace/pane-manager.ts) ──
  // add: from src/workspace/pane-manager.ts (ICON_PLUS) — byte-identical to src/workspace/ssh-rail.ts (ICON_PLUS)
  "add": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  // split-vertical: from src/workspace/pane-manager.ts (ICON_SPLIT_V) — byte-identical to src/workspace/index.ts (ICON_SPLIT_V, palette pane.splitRight)
  "split-vertical": '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
  // split-horizontal: from src/workspace/pane-manager.ts (ICON_SPLIT_H) — byte-identical to src/workspace/index.ts (ICON_SPLIT_H, palette pane.splitDown)
  "split-horizontal": '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/></svg>',
  // maximize-pane: from src/workspace/pane-manager.ts (ICON_MAXIMIZE) — corners pointing out
  "maximize-pane": '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M1 4V1h3M11 4V1H8M1 8v3h3M11 8v3H8"/></svg>',
  // restore-pane: from src/workspace/pane-manager.ts (ICON_RESTORE) — corners pointing in
  "restore-pane": '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M4 1v3H1M8 1v3h3M4 11V8H1M8 11V8h3"/></svg>',
  // sidebar-maximize: from src/workspace/index.ts (ICON_SB_MAXIMIZE) — same path as maximize-pane at width 13
  "sidebar-maximize": '<svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M1 4V1h3M11 4V1H8M1 8v3h3M11 8v3H8"/></svg>',
  // sidebar-restore: from src/workspace/index.ts (ICON_SB_RESTORE) — same path as restore-pane at width 13
  "sidebar-restore": '<svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M4 1v3H1M8 1v3h3M4 11V8H1M8 11V8h3"/></svg>',
  // tile: from src/workspace/pane-manager.ts (ICON_TILE) — 2×2 grid with the top-right tile tilted/popping out (tile a pane's tabs into a grid)
  "tile": '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="3" y="4" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1" transform="rotate(18 17 7)"/></svg>',

  // ── Tabs / notifications ──
  // attention: from src/workspace/tab-manager.ts (ICON_BELL) — filled agent/attention bell on a tab
  "attention": '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 17v2H4v-2s0-4 8-5.5S20 13 20 17zm-9-16a4 4 0 0 1 4 4v2h3l1 6v2h-2v2h-2v-2H8v2H6v-2H4v-2l1-6h3V5a4 4 0 0 1 4-4z"/></svg>',
  // bell: from src/notifications.ts (ICON_BELL) — outline bell (notification dropdown trigger)
  "bell": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  // bell-small: from src/spacebar.ts (ICON_BELL) — 12px outline bell blinked before a Space chip / panel tab name
  "bell-small": '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  // notification-close: from src/notifications.ts (ICON_X) — per-card dismiss X (stroke-width 1.4)
  "notification-close": '<svg width="10" height="10" viewBox="0 0 10 10"><line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" stroke-width="1.4"/><line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" stroke-width="1.4"/></svg>',

  // ── Explorer (src/explorer.ts) ──
  // side-right: from src/explorer.ts (ICON_SIDE_RIGHT) — push explorer to right edge (->|)
  "side-right": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="15" y2="12"/><polyline points="11 8 15 12 11 16"/><line x1="20" y1="5" x2="20" y2="19"/></svg>',
  // side-left: from src/explorer.ts (ICON_SIDE_LEFT) — push explorer to left edge (|<-)
  "side-left": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="12" x2="9" y2="12"/><polyline points="13 8 9 12 13 16"/><line x1="4" y1="5" x2="4" y2="19"/></svg>',
  // git-branch: from src/explorer.ts (ICON_BRANCH) — footer branch glyph (3 nodes)
  "git-branch": '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="5" r="2.4"/><circle cx="6" cy="19" r="2.4"/><circle cx="18" cy="8" r="2.4"/><path d="M6 7.4v9.2M18 10.4c0 3.2-4.6 4-8.4 4.4"/></svg>',

  // ── docs 사이트 전용 글리프(앱 src에 1:1 대응 없음 — 실샷 교체로 검증) ──
  // sessions: 사이드바 세션 모드(이어가기) 글리프 — 되감기 화살표 + 시계
  "sessions": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 5.6a9 9 0 1 0 3-3.4M3 1.5v4.2h4.2"/><path d="M12 7.5V12l3 1.9"/></svg>',
  // agents: 오케스트레이션 노드 그래프(_nav.js orchestration 글리프 재사용)
  "agents": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M12 7.2v4.3M12 11.5L6.4 17M12 11.5L17.6 17"/></svg>',

  // ── Editor (src/editor.ts) ──
  // blame: from src/editor.ts (ICON_BLAME) — lines + commit dot (git blame toggle)
  "blame": '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="13" y2="12"/><line x1="4" y1="18" x2="11" y2="18"/><circle cx="18" cy="15" r="3"/></svg>',

  // ── Browser nav (src/browser.ts) ──
  // lock: from src/browser.ts (URL bar lock indicator) — small padlock
  "lock": '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  // external-link: from src/browser.ts (open in system browser button)
  "external-link": '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',

  // ── Cross-file search panel (src/workspace/search-host.ts) ──
  // search-alt: from src/workspace/search-host.ts (search-go button) — compact 16-viewBox magnifier.
  //             Same path appears as the sidebar "search" mode glyph (src/workspace/index.ts, width 15) and palette search.open (width 14).
  "search-alt": '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="7" cy="7" r="4.3"/><path d="M10.2 10.2 14 14"/></svg>',
  // chevron-down: from src/workspace/search-host.ts (sdt-chev, details expander)
  "chevron-down": '<svg class="sdt-chev" viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6.5 8 10l4-3.5"/></svg>',

  // ── Tasks panel (src/workspace/task-host.ts) ──
  // calendar: from src/workspace/task-host.ts (CAL_ICON) — due-date calendar (DUE_ICON is a near-identical 13px variant)
  "calendar": '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="2.2" y="3" width="11.6" height="10.5" rx="1.5"/><path d="M2.2 6.2h11.6M5.2 1.8v2.2M10.8 1.8v2.2"/></svg>',
  // edit: from src/workspace/task-host.ts (EDIT_ICON) — pencil
  "edit": '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><path d="M10.8 2.6l2.6 2.6L6 12.6l-3.1.5.5-3.1z"/><path d="M9.6 3.8l2.6 2.6"/></svg>',
  // copy-alt: from src/workspace/task-host.ts (COPY_ICON) — overlapping squares copy glyph
  "copy-alt": '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"><rect x="5.3" y="5.3" width="8" height="8.4" rx="1.2"/><path d="M3 10.7V3.3a1 1 0 0 1 1-1h6"/></svg>',
  // trash-alt: from src/workspace/task-host.ts (DEL_ICON) — 16-viewBox trash can (task delete)
  "trash-alt": '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4.4h10M6.4 4.4V2.8h3.2v1.6M4.8 4.4l.5 8.8h5.4l.5-8.8"/></svg>',
  // refresh-alt: from src/workspace/task-host.ts (REFRESH_ICON) — 16-viewBox circular arrow
  "refresh-alt": '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12.8 8a4.8 4.8 0 1 1-1.3-3.3"/><path d="M12.6 2.6v3.1H9.5"/></svg>',
  // plus-small: from src/workspace/task-host.ts (PLUS_ICON) — 16-viewBox plus (new-task toggle)
  "plus-small": '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M8 3.4v9.2M3.4 8h9.2"/></svg>',
  // note: from src/workspace/task-host.ts (NOTE_ICON) — document with memo lines
  "note": '<svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M4.4 2.4h4.8L12.2 5.4v7.8a.6.6 0 0 1-.6.6H4.4a.6.6 0 0 1-.6-.6V3a.6.6 0 0 1 .6-.6z"/><path d="M9 2.6v3h3.1"/><path d="M5.9 8.8h4.2M5.9 11h2.8"/></svg>',

  // ── Gateway audit log (src/workspace/gateway-log.ts) ──
  // trash: from src/workspace/gateway-log.ts (ICON_TRASH) — 24-viewBox trash can (delete audit day)
  "trash": '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',

  // ── Command palette & sidebar mode bar (src/workspace/index.ts) ──
  // terminal: from src/workspace/index.ts (ICON_TERMINAL_SM, palette terminal.new) — prompt rect
  "terminal": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3"/><line x1="12" y1="15" x2="17" y2="15"/></svg>',
  // close: from src/workspace/index.ts (ICON_X_SM, palette tab.close) — byte-identical to src/workspace/ssh-rail.ts (ICON_CLOSE)
  "close": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',
  // file: from src/workspace/index.ts (ICON_FILE_SM, palette file.open) — document with folded corner
  "file": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/></svg>',
  // folder: from src/workspace/index.ts (sidebar mode "files" glyph)
  "folder": '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M1.8 4.2c0-.6.4-1 1-1h3l1.3 1.4h6.1c.6 0 1 .4 1 1v6.2c0 .6-.4 1-1 1H2.8c-.6 0-1-.4-1-1z"/></svg>',
  // git: from src/workspace/index.ts (sidebar mode "git" glyph) — 3-node graph; palette git.open is the same path at width 14 stroke 1.4
  "git": '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="4" cy="3.6" r="1.7"/><circle cx="4" cy="12.4" r="1.7"/><circle cx="12" cy="4" r="1.7"/><path d="M4 5.3v5.4M5.7 3.6h2.6A3 3 0 0 1 11.3 6"/></svg>',
  // tasks: from src/workspace/index.ts (sidebar mode "tasks" glyph) — checkbox with check; palette tasks.open is the same path at width 14 stroke 1.4
  "tasks": '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="2.2" y="2.2" width="11.6" height="11.6" rx="2"/><path d="M5 8l2 2 4-4"/></svg>',
  // audit-log: from src/workspace/index.ts (palette gateway.auditLog) — framed list lines
  "audit-log": '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2.5" y="2.5" width="11" height="11" rx="1.5"/><path d="M5 6h6M5 8.5h6M5 11h3.5"/></svg>',
  // settings: from src/workspace/index.ts (palette settings.open) — gear
  "settings": '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="8" cy="8" r="2.2"/><path d="M8 1.6v1.7M8 12.7v1.7M3.4 3.4l1.2 1.2M11.4 11.4l1.2 1.2M1.6 8h1.7M12.7 8h1.7M3.4 12.6l1.2-1.2M11.4 4.6l1.2-1.2"/></svg>',
  // info: from src/workspace/index.ts (palette about.open) — info circle
  "info": '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="8" r="6.2"/><path d="M8 7.4v3.3" stroke-linecap="round"/><circle cx="8" cy="5" r="0.55" fill="currentColor" stroke="none"/></svg>',

  // ── Settings dialog (src/settings-dialog.ts) ──
  // copy: from src/settings-dialog.ts (ICON_COPY) — clipboard copy (24-viewBox)
  "copy": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>',
  // check: from src/settings-dialog.ts (ICON_CHECK) — copy-success checkmark
  "check": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 6"/></svg>',

  // ── Update banner (src/update-banner.ts) ──
  // download: from src/update-banner.ts (ICON_DOWNLOAD) — titlebar update pill download arrow
  "download": '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v11"/><path d="M7 10l5 5 5-5"/><path d="M4 20h16"/></svg>',

  // ── SSH (src/ssh-icons.ts, src/workspace/ssh-rail.ts, src/workspace/ssh-tunnels-overlay.ts) ──
  // ssh: from src/ssh-icons.ts (ICON_SSH) — SSH connection glyph
  "ssh": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v5M15 2v5"/><path d="M6.5 7h11v3.5a5.5 5.5 0 0 1-11 0z"/><path d="M12 16.5V22"/></svg>',
  // vault: from src/ssh-icons.ts (ICON_VAULT) — secrets vault padlock. src/workspace/ssh-rail.ts ICON_VAULT is a near-identical padlock (rect y=10 h=11, path M8 10V7).
  "vault": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  // sftp: from src/workspace/ssh-rail.ts (ICON_SFTP) — folder with down arrow
  "sftp": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 11v6m-2-2 2 2 2-2"/></svg>',
  // tunnel: from src/workspace/ssh-rail.ts (ICON_TUNNEL) — globe/meridians (port-forward tunnels)
  "tunnel": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c0-4 4-7 10-7s10 3 10 7-4 7-10 7S2 16 2 12z"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M8 5.5C8 9 10 12 12 12s4-3 4-6.5"/><path d="M8 18.5C8 15 10 12 12 12s4 3 4 6.5"/></svg>',
  // refresh: from src/workspace/ssh-rail.ts (ICON_REFRESH) — 24-viewBox circular arrow
  "refresh": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.6-6.4M21 3v5h-5"/></svg>',
  // more: from src/workspace/ssh-rail.ts (ICON_MORE) — horizontal 3-dot overflow menu
  "more": '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="5" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="19" cy="12" r="1.2" fill="currentColor"/></svg>',
  // stop: from src/workspace/ssh-tunnels-overlay.ts (ICON_STOP) — filled rounded square (stop tunnel)
  "stop": '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="1.5"/></svg>',

  // ── Terminal (src/terminal.ts) ──
  // scroll-down: from src/terminal.ts (ICON_SCROLL_DOWN) — jump-to-bottom chevron
  "scroll-down": '<svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 5l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};
function paintIcons(root) {
  (root || document).querySelectorAll('[data-icon]').forEach(function (el) {
    var k = el.getAttribute('data-icon');
    if (ICONS[k]) el.innerHTML = ICONS[k];
  });
}
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () { paintIcons(document); });
}

/*
 * ICON NAME -> SOURCE FILE (verbatim harvest map)
 * ------------------------------------------------
 * window-minimize     src/titlebar.ts (ICON_MIN)
 * window-maximize     src/titlebar.ts (ICON_MAX)
 * window-close        src/titlebar.ts (ICON_CLOSE)   [update-banner.ts ICON_CLOSE = same glyph @ 7px]
 * menu                src/titlebar.ts (ICON_MENU)
 * contrast            src/titlebar.ts (ICON_CONTRAST)
 * search              src/titlebar.ts (ICON_COMMAND_SEARCH) == src/explorer.ts (ICON_SEARCH)
 *                     [variants: src/palette.ts ICON_PALETTE w16; src/workspace/ssh-rail.ts ICON_MAG w12]
 * sidebar             src/statusbar.ts (explorer toggle button)
 * merge               src/statusbar.ts (merge-all-panes button)
 * add                 src/workspace/pane-manager.ts (ICON_PLUS) == src/workspace/ssh-rail.ts (ICON_PLUS)
 * split-vertical      src/workspace/pane-manager.ts (ICON_SPLIT_V) == src/workspace/index.ts (ICON_SPLIT_V)
 * split-horizontal    src/workspace/pane-manager.ts (ICON_SPLIT_H) == src/workspace/index.ts (ICON_SPLIT_H)
 * maximize-pane       src/workspace/pane-manager.ts (ICON_MAXIMIZE)
 * restore-pane        src/workspace/pane-manager.ts (ICON_RESTORE)
 * tile                src/workspace/pane-manager.ts (ICON_TILE)
 * sidebar-maximize    src/workspace/index.ts (ICON_SB_MAXIMIZE)  [same path as maximize-pane @ 13px]
 * sidebar-restore     src/workspace/index.ts (ICON_SB_RESTORE)   [same path as restore-pane @ 13px]
 * attention           src/workspace/tab-manager.ts (ICON_BELL, filled)
 * bell                src/notifications.ts (ICON_BELL, outline)
 * bell-small          src/spacebar.ts (ICON_BELL)
 * notification-close  src/notifications.ts (ICON_X)
 * side-right          src/explorer.ts (ICON_SIDE_RIGHT)
 * side-left           src/explorer.ts (ICON_SIDE_LEFT)
 * git-branch          src/explorer.ts (ICON_BRANCH, footer)
 * blame               src/editor.ts (ICON_BLAME)
 * lock                src/browser.ts (URL bar lock)
 * external-link       src/browser.ts (open-in-system button)
 * search-alt          src/workspace/search-host.ts (search-go) [same path: index.ts sidebar search w15, palette search.open w14]
 * chevron-down        src/workspace/search-host.ts (sdt-chev)
 * calendar            src/workspace/task-host.ts (CAL_ICON) [DUE_ICON = 13px near-dup]
 * edit                src/workspace/task-host.ts (EDIT_ICON)
 * copy-alt            src/workspace/task-host.ts (COPY_ICON)
 * trash-alt           src/workspace/task-host.ts (DEL_ICON)
 * refresh-alt         src/workspace/task-host.ts (REFRESH_ICON)
 * plus-small          src/workspace/task-host.ts (PLUS_ICON)
 * note                src/workspace/task-host.ts (NOTE_ICON)
 * trash               src/workspace/gateway-log.ts (ICON_TRASH)
 * terminal            src/workspace/index.ts (ICON_TERMINAL_SM)
 * close               src/workspace/index.ts (ICON_X_SM) == src/workspace/ssh-rail.ts (ICON_CLOSE)
 * file                src/workspace/index.ts (ICON_FILE_SM)
 * folder              src/workspace/index.ts (sidebar mode "files")
 * git                 src/workspace/index.ts (sidebar mode "git") [palette git.open = same path w14]
 * tasks               src/workspace/index.ts (sidebar mode "tasks") [palette tasks.open = same path w14]
 * audit-log           src/workspace/index.ts (palette gateway.auditLog)
 * settings            src/workspace/index.ts (palette settings.open)
 * info                src/workspace/index.ts (palette about.open)
 * copy                src/settings-dialog.ts (ICON_COPY)
 * check               src/settings-dialog.ts (ICON_CHECK)
 * download            src/update-banner.ts (ICON_DOWNLOAD)
 * ssh                 src/ssh-icons.ts (ICON_SSH)
 * vault               src/ssh-icons.ts (ICON_VAULT) [ssh-rail.ts ICON_VAULT = near-dup padlock]
 * sftp                src/workspace/ssh-rail.ts (ICON_SFTP)
 * tunnel              src/workspace/ssh-rail.ts (ICON_TUNNEL)
 * refresh             src/workspace/ssh-rail.ts (ICON_REFRESH)
 * more                src/workspace/ssh-rail.ts (ICON_MORE)
 * stop                src/workspace/ssh-tunnels-overlay.ts (ICON_STOP)
 * scroll-down         src/terminal.ts (ICON_SCROLL_DOWN)
 *
 * NOT inline <svg> (intentionally SKIPPED — asset import / material lib / text glyph):
 *  - orch.dashboard palette icon: orchGlyphMono = import "../assets/orch-term-glyph-mono.svg?raw" (asset). (src/workspace/index.ts)
 *  - about-dialog.ts / titlebar.ts brand: orch-term-wordmark.svg + app-icon.png imported as ?url <img>, not inline.
 *  - file-icons.ts: vscode-material-icons (URL-based) + inline TUX_SVG penguin + orch-term-glyph[-dark/-purple].svg (?url). file-icons.ts not in scan scope.
 *  - Git panel (src/workspace/git-host.ts): the only <svg> is the dynamic commit-graph (built from ${svgW}/${edges}/${nodes} template vars — not a static icon). Refresh = "⟳", push/pull = "↑{ahead}"/"↓{behind}" TEXT glyphs, not SVG.
 *  - Browser nav (src/browser.ts): back "‹", forward "›", reload "⟳" are TEXT button glyphs, not SVG.
 *  - explorer-git.ts and about-dialog.ts: no inline <svg> icons (git status uses letters/dots; about uses <img> assets).
 */
