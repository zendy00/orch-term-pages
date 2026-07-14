/* Orch term 문서 사이트 — 공유 사이드바 내비 + 우측 TOC + 모바일 토글.
   각 페이지는 <body data-page="ssh"> 와 <aside class="side" id="sidebar"></aside>,
   (선택) <aside class="toc" id="toc"></aside> 만 두면 이 스크립트가 채운다.
   내비 글리프는 본문의 '앱 정확 아이콘'(_icons.js)과 분리된 문서 chrome용 라인 글리프다. */
(function () {
  "use strict";

  var G = {
    intro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.2 5.6L20 11l-5.8 2.4L12 19l-2.2-5.6L4 11l5.8-2.4z"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16"/></svg>',
    quickstart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>',
    workstation: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M13 9v11"/></svg>',
    orchestration: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M12 7.2v4.3M12 11.5L6.4 17M12 11.5L17.6 17"/></svg>',
    gateway: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8l4 4-4 4M20 8l-4 4 4 4M14 4l-4 16"/></svg>',
    ssh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="11" rx="2"/><path d="M7 19h10M12 15v4M6.5 8l2.2 1.8L6.5 11.6M11 11.5h4"/></svg>',
    mirror: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 9a5 5 0 0 1 5 5M7 12.5a1.5 1.5 0 0 1 1.5 1.5"/></svg>',
    terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/></svg>',
    "tabs-panes": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M11 4v16M11 12h10"/></svg>',
    spaces: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4.5-8 4.5-8-4.5z"/><path d="M4 12l8 4.5 8-4.5M4 16.5l8 4.5 8-4.5"/></svg>',
    explorer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
    editor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 8l-4 4 4 4M15 8l4 4-4 4"/></svg>',
    browser: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
    "source-control": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="17" cy="8" r="2.4"/><path d="M6 8.4v7.2M17 10.4c0 4-5 2.6-5 6.6"/></svg>',
    notes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h14a1 1 0 0 1 1 1v9l-5 6H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M15 20v-5h5M8 9h8M8 13h5"/></svg>',
    tasks: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 12l2.2 2.2L13 10"/></svg>',
    "task-ai-sharing": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l2 2 4-4"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M16.3 7.2l-5 3M16.3 16.8l-5-3"/></svg>',
    appearance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 6h14M5 12h9M5 18h14"/><circle cx="17" cy="12" r="2.3"/></svg>',
    persistence: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.5" rx="7" ry="2.8"/><path d="M5 5.5v13c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-13M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8"/></svg>',
    "auto-update": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 5v5h-5"/></svg>',
    notifications: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 9a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7"/><path d="M10.5 20a2 2 0 0 0 3 0"/></svg>',
    sessions: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 5.6a9 9 0 1 0 3-3.4M3 1.5v4.2h4.2"/><path d="M12 7.5V12l3 1.9"/></svg>',
    changelog: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3M16 3v3M4.5 7.5h15V19a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 19z"/><path d="M8 12h8M8 16h5"/></svg>'
  };

  var NAV = [
    { title: "시작하기", title_en: "Getting started", count: "00", items: [
      { page: "index",        href: "index.html",       label: "소개 · 한눈에",   en: "Overview" },
      { page: "download",     href: "download.html",    label: "다운로드 · 설치", en: "Download · Install" },
      { page: "quickstart",   href: "quickstart.html",  label: "빠른 시작",       en: "Quick start" }
    ]},
    { title: "대형 기능", title_en: "Flagship features", count: "01", items: [
      { page: "workstation",   href: "workstation.html",  label: "멀티에이전트 워크스테이션", en: "Multi-agent workstation" },
      { page: "orchestration", href: "orchestration.html", label: "에이전트 오케스트레이션",  en: "Agent orchestration" },
      { page: "gateway",       href: "gateway.html",      label: "AI 게이트웨이",            en: "AI gateway" },
      { page: "ssh",           href: "ssh.html",          label: "SSH · SFTP",              en: "SSH · SFTP" },
      { page: "mirror",        href: "mirror.html",       label: "CDP 브라우저 미러",        en: "CDP browser mirror" }
    ]},
    { title: "핵심 기능", title_en: "Core features", count: "02", items: [
      { page: "terminal",        href: "terminal.html",        label: "터미널",          en: "Terminal" },
      { page: "tabs-panes",      href: "tabs-panes.html",      label: "탭 · 패널",       en: "Tabs · Panes" },
      { page: "spaces",          href: "spaces.html",          label: "스페이스",        en: "Spaces" },
      { page: "explorer",        href: "explorer.html",        label: "탐색기",          en: "Explorer" },
      { page: "editor",          href: "editor.html",          label: "코드 에디터",     en: "Code editor" },
      { page: "browser",         href: "browser.html",         label: "인앱 브라우저",   en: "In-app browser" },
      { page: "search",          href: "search.html",          label: "전체 파일 검색",  en: "Full-text search" },
      { page: "source-control",  href: "source-control.html",  label: "소스 컨트롤 (Git)", en: "Source control (Git)" },
      { page: "notes",           href: "notes.html",           label: "메모 · 다이어그램", en: "Notes · Diagrams" },
      { page: "tasks",           href: "tasks.html",           label: "할 일 보드",      en: "Task board" },
      { page: "task-ai-sharing", href: "task-ai-sharing.html", label: "AI 할 일 공유",   en: "AI task sharing" },
      { page: "sessions",        href: "sessions.html",        label: "세션 목록 (이어가기)", en: "Session list (resume)" }
    ]},
    { title: "그 외 · 시스템", title_en: "More · System", count: "03", items: [
      { page: "appearance",   href: "appearance.html",   label: "외관 · 폰트 · 단축키", en: "Appearance · Fonts · Shortcuts" },
      { page: "persistence",  href: "persistence.html",  label: "저장 · 백업",          en: "Storage · Backup" },
      { page: "auto-update",  href: "auto-update.html",  label: "자동 업데이트",        en: "Auto-update" },
      { page: "notifications",href: "notifications.html",label: "완료 배지 · 알림",     en: "Done badges · Notifications" },
      { page: "changelog",    href: "changelog.html",    label: "변경 이력",            en: "Changelog" }
    ]}
  ];

  var chevron = '<svg class="tw" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }

  function isEN() { return (document.documentElement.lang || "").toLowerCase().slice(0, 2) === "en"; }

  function renderSidebar(current) {
    var html = '';
    var EN = isEN();

    NAV.forEach(function (group) {
      var open = group.items.some(function (it) { return it.page === current; }) || true;
      var title = EN && group.title_en ? group.title_en : group.title;
      html += '<details class="side-group"' + (open ? " open" : "") + '>';
      html += '<summary>' + chevron + '<span>' + esc(title) + '</span><span class="gx">' + group.count + '</span></summary>';
      html += '<div class="side-links">';
      group.items.forEach(function (it) {
        var active = it.page === current ? " active" : "";
        var flag = it.flag ? ' flag" data-flag="' + esc(it.flag) : "";
        var label = EN && it.en ? it.en : it.label;
        html += '<a class="side-link' + active + (it.flag ? flag : "") + '" href="' + it.href + '">'
          + '<span class="si">' + (G[it.page] || "") + '</span><span>' + esc(label) + '</span></a>';
      });
      html += '</div></details>';
    });

    html += '<div class="side-foot">© 2026 Orch term</div>';
    return html;
  }

  function buildTOC(content, tocEl) {
    var heads = content.querySelectorAll("h2.sec");
    if (!heads.length) { tocEl.style.display = "none"; return; }
    var html = '<div class="toc-h">' + (isEN() ? "On this page" : "이 페이지") + '</div><nav class="toc-list">';
    heads.forEach(function (h) {
      if (!h.id) h.id = (h.textContent || "").trim().replace(/\s+/g, "-").toLowerCase();
      var label = h.getAttribute("data-toc") || h.textContent.replace(/^[#\s]+/, "").trim();
      html += '<a href="#' + h.id + '">' + esc(label) + "</a>";
    });
    html += "</nav>";
    tocEl.innerHTML = html;

    var links = tocEl.querySelectorAll("a");
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            links.forEach(function (a) { a.classList.remove("active"); });
            var a = byId[e.target.id]; if (a) a.classList.add("active");
          }
        });
      }, { rootMargin: "-80px 0px -70% 0px" });
      heads.forEach(function (h) { obs.observe(h); });
    }
  }

  function init() {
    var current = (document.body.getAttribute("data-page") || "").trim();
    var side = document.getElementById("sidebar");
    if (side) side.innerHTML = renderSidebar(current);

    var toc = document.getElementById("toc");
    var content = document.querySelector(".content");
    if (toc && content) buildTOC(content, toc);

    // 모바일 메뉴 토글 + 스크림
    var toggle = document.querySelector(".menu-toggle");
    if (toggle) toggle.addEventListener("click", function () { document.body.classList.toggle("nav-open"); });
    var scrim = document.querySelector(".scrim");
    if (scrim) scrim.addEventListener("click", function () { document.body.classList.remove("nav-open"); });
    document.querySelectorAll(".side-link").forEach(function (a) {
      a.addEventListener("click", function () { document.body.classList.remove("nav-open"); });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
