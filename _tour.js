/* Orch term 문서 사이트 — Manuscript 가이드 투어(우하단 플로팅 버튼 + standalone player 배선).
   각 페이지 화면 우하단에 "투어/Tour" 플로팅 버튼을 띄우고, 클릭하면 확장 없이 재생되는
   standalone player 번들을 동적 import 하여 그 페이지의 시나리오(tours/<page>-<lang>.json)를
   불러와 스포트라이트+내레이션 투어를 재생한다. 재생 중에는 버튼을 숨기고 onExit 에서 되돌린다.
   TTS 보이스: Windows(및 기타 OS)는 Google 보이스, macOS 는 보이스 미지정(시스템 기본 선택). */
(function () {
  "use strict";

  var path = location.pathname;
  var isEn = /(^|\/)en\//.test(path) ||
    (document.documentElement.lang || "").toLowerCase().slice(0, 2) === "en";
  var base = isEn ? "../" : "./";                 // docs/site 루트까지의 상대 깊이
  var lang = isEn ? "en" : "ko";
  var page = (document.body && document.body.getAttribute("data-page")) || "index";
  var tourUrl = base + "tours/" + page + "-" + lang + ".json";

  var LABEL = isEn ? "Tour" : "투어";
  var PLAYING = isEn ? "Playing…" : "재생 중…";
  var UNAVAILABLE = isEn ? "No tour yet" : "투어 준비 중";

  // ── OS 감지 → TTS 보이스 선택 ──
  var plat = (navigator.userAgentData && navigator.userAgentData.platform) ||
    navigator.platform || navigator.userAgent || "";
  var isMac = /mac/i.test(plat);
  var cfg = { assetBaseUrl: base + "player/", tts: true };
  // Windows(및 기타): 구글 보이스. macOS: 보이스 미지정 → 플레이어가 시스템 기본 보이스 선택.
  if (!isMac) cfg.ttsVoice = isEn ? "Google US English" : "Google 한국의";
  window.__MANUSCRIPT_PLAYER__ = window.__MANUSCRIPT_PLAYER__ || cfg;

  var player = null;

  function setLabel(text) {
    var s = document.querySelector(".tour-fab-label");
    if (s) s.textContent = text;
  }
  function showFab(show) {
    var b = document.querySelector(".tour-fab");
    if (b) b.style.display = show ? "" : "none";
  }

  function inject() {
    if (document.querySelector(".tour-fab")) return;

    var style = document.createElement("style");
    style.textContent =
      ".tour-fab{position:fixed;right:20px;bottom:20px;z-index:2147480000;display:inline-flex;" +
      "align-items:center;gap:8px;height:44px;padding:0 18px 0 15px;border:none;border-radius:999px;" +
      "cursor:pointer;background:var(--accent,#dcab59);color:#1a1206;" +
      "font:600 14px var(--ui,system-ui,sans-serif);" +
      "box-shadow:0 6px 20px rgba(0,0,0,.38),0 0 0 1px rgba(0,0,0,.18);" +
      "transition:transform .15s,filter .15s,opacity .15s}" +
      ".tour-fab:hover{filter:brightness(1.07);transform:translateY(-1px)}" +
      ".tour-fab:active{transform:translateY(0)}" +
      ".tour-fab[disabled]{opacity:.6;cursor:default;filter:none;transform:none}" +
      ".tour-fab svg{width:17px;height:17px}" +
      "@media(max-width:640px){.tour-fab{right:14px;bottom:14px;height:42px;padding:0 16px 0 13px}}";
    document.head.appendChild(style);

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tour-fab";
    btn.setAttribute("aria-label", isEn ? "Play this page's tour" : "이 페이지 투어 재생");
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>' +
      '<span class="tour-fab-label">' + LABEL + "</span>";
    btn.addEventListener("click", onClick);
    document.body.appendChild(btn);
  }

  function onClick() {
    var btn = document.querySelector(".tour-fab");
    if (!btn || btn.disabled) return;
    btn.disabled = true;
    setLabel(PLAYING);

    var restore = function () {
      var b = document.querySelector(".tour-fab");
      if (b) { b.disabled = false; b.style.display = ""; setLabel(LABEL); }
    };

    var ensurePlayer = player
      ? Promise.resolve(player)
      : import(base + "player/manuscript-player.0.1.0.esm.js").then(function (mod) {
          player = mod && (mod.default || mod);
          if (player && typeof player.onExit === "function") player.onExit(restore);
          return player;
        });

    ensurePlayer
      .then(function (p) {
        return fetch(tourUrl).then(function (r) {
          if (!r.ok) throw new Error("scenario " + r.status);
          return r.json();
        }).then(function (scenario) {
          showFab(false);   // 재생 중에는 플로팅 버튼을 숨김(플레이어 컨트롤과 겹침 방지)
          return Promise.resolve(p.load(scenario)).then(function () { return p.play(); });
        });
      })
      .catch(function (err) {
        console.error("[orchterm-tour]", err);
        restore();
        setLabel(UNAVAILABLE);
        setTimeout(function () { setLabel(LABEL); }, 2600);
      });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject);
  else inject();
})();
