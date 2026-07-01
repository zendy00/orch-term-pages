/* Orch term 문서 사이트 — 언어 리다이렉트 + KO/EN 전환 스위처.
   - 한국어(루트) 페이지: 브라우저 언어가 한국어가 아니면 en/ 으로 1회 리다이렉트(수동 선택은 존중).
   - 영어(en/) 페이지: 자동 리다이렉트 안 함(한국어 사용자가 일부러 볼 수 있음).
   - 상단바 .tlinks 에 KO/EN 스위처를 주입하고, 클릭 시 선택을 localStorage 에 영속(자동 리다이렉트 고정). */
(function () {
  "use strict";
  var KEY = "orchterm-lang";
  var path = location.pathname;
  var isEn = /(^|\/)en\//.test(path) || (document.documentElement.lang || "").toLowerCase().slice(0, 2) === "en";

  function file() {
    var f = path.split("/").pop();
    return f && /\.html?$/i.test(f) ? f : "index.html";
  }

  // ── 1) 자동 리다이렉트 (한국어 페이지에서만, 페인트 전) ──
  if (!isEn) {
    try {
      var ov = localStorage.getItem(KEY);
      var goEn;
      if (ov === "en") goEn = true;
      else if (ov === "ko") goEn = false;
      else {
        var langs = navigator.languages && navigator.languages.length
          ? navigator.languages : [navigator.language || navigator.userLanguage || ""];
        var prefersKo = langs.some(function (l) { return /^ko\b/i.test(l); });
        goEn = !prefersKo;
      }
      if (goEn) { location.replace("en/" + file() + location.search + location.hash); return; }
    } catch (e) {}
  }

  // ── 2) 언어 스위처 주입 (반대 언어 글자 하나만 심플하게) ──
  function inject() {
    var bar = document.querySelector(".topbar .tlinks");
    if (!bar || document.querySelector(".lang-switch")) return;

    var style = document.createElement("style");
    style.textContent =
      ".lang-switch{display:inline-flex;align-items:center;padding:6px 9px;font-size:12.5px;font-weight:600;letter-spacing:.04em;color:var(--text-dim);text-decoration:none;border-radius:8px;line-height:1;transition:color .15s,background .15s}" +
      ".lang-switch:hover{color:var(--accent);background:var(--bg-2)}";
    document.head.appendChild(style);

    var target = isEn ? "ko" : "en";
    var a = document.createElement("a");
    a.className = "lang-switch";
    a.href = isEn ? "../" + file() : "en/" + file();
    a.textContent = isEn ? "KO" : "EN";
    a.setAttribute("data-lang", target);
    a.setAttribute("aria-label", isEn ? "View in Korean" : "영어로 보기");
    a.addEventListener("click", function () {
      try { localStorage.setItem(KEY, target); } catch (e) {}
    });
    bar.insertBefore(a, bar.firstChild);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject);
  else inject();
})();
