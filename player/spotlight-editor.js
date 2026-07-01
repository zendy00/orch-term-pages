import { o as D, m as H, O as W, g as C, t as b, u as f, a as _, M as O, V as q, d as z, b as E, e as I } from "./player-entry.js";
const R = "oklch(0.42 0.09 250)", U = 3, j = "#000000", B = 0.55, m = 0, T = 12;
let l = null, o = null, u = null, h = null, v = null, g = null, k = "muted";
function Y(t) {
  l || F(), g = t, y(), A(t), u || (u = D(() => {
    y(), g && A(g);
  }));
}
function x() {
  u == null || u(), u = null, h && (document.removeEventListener("mousedown", h, !0), h = null), v && (document.removeEventListener("keydown", v), v = null), g = null, l && (l.remove(), l = null, o = null);
}
function K() {
  return l !== null;
}
function F() {
  ({ host: l, shadow: o } = H()), l.setAttribute("data-popup", "spotlight-editor"), l.style.cssText = [
    "position: fixed",
    `z-index: ${W + 5}`,
    "pointer-events: auto"
  ].join("; "), o.innerHTML = X(), document.body.appendChild(l), P();
}
function X() {
  return `<style>${N()}</style>
    <div class="card">
      <div class="header">
        <span class="caption">Spotlight</span>
        <div class="header-right">
          <div class="format-painter-wrap">
            <button type="button" class="format-painter-btn" data-action="format-painter-toggle" data-region="format-painter" aria-haspopup="true" aria-expanded="false" aria-label="${b("copy.formatting")}" title="${b("copy.formatting")}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="4.5" y="3" width="15" height="5" rx="1.5"></rect>
                <rect x="6.5" y="8" width="11" height="2.6" rx="0.6"></rect>
                <path d="M11 10.6 v6.4 a1 1 0 0 0 2 0 V10.6"></path>
              </svg>
            </button>
            <div class="format-painter-menu" data-region="format-painter-menu" role="menu" hidden>
              <button type="button" class="batch-btn" role="menuitem" data-action="apply-all-spotlight">${b("apply.all-steps")}</button>
            </div>
          </div>
          <div class="toggle" role="tablist" aria-label="Swatch mode">
            <button type="button" data-action="swatch-mode" data-mode="muted" aria-pressed="true">Muted</button>
            <button type="button" data-action="swatch-mode" data-mode="vibrant" aria-pressed="false">Vibrant</button>
          </div>
        </div>
      </div>

      <div class="row label-row">
        <span class="label">Ring</span>
        <div class="swatches" data-region="ring-swatches"></div>
      </div>
      <div class="row">
        <span class="label">Width</span>
        <div class="slider-wrap">
          <div class="slider-track" data-region="width-track">
            <div class="slider-fill" data-region="width-fill"></div>
            <div class="slider-thumb" data-region="width-thumb"></div>
          </div>
          <span class="slider-value" data-region="width-value">3</span>
        </div>
      </div>

      <div class="divider"></div>

      <div class="row label-row">
        <span class="label">Dim</span>
        <div class="swatches" data-region="dim-swatches"></div>
      </div>
      <div class="row">
        <span class="label">Opacity</span>
        <div class="slider-wrap">
          <div class="slider-track" data-region="opacity-track">
            <div class="slider-fill" data-region="opacity-fill"></div>
            <div class="slider-thumb" data-region="opacity-thumb"></div>
          </div>
          <span class="slider-value" data-region="opacity-value">55%</span>
        </div>
      </div>

      <div class="divider"></div>

      <div class="row footer-row">
        <button type="button" class="reset" data-action="reset">Reset to default</button>
        <button type="button" class="close" data-action="close" aria-label="Close">×</button>
      </div>
    </div>`;
}
function N() {
  return `
    ${z()}
    :host { display: block; font-family: var(--ff-sans); color: var(--c-text); }
    *, *::before, *::after { box-sizing: border-box; }
    .card {
      width: 300px;
      background: var(--c-surface);
      color: var(--c-text);
      border: 1px solid var(--c-border);
      border-radius: var(--r-md);
      box-shadow: var(--shadow-card);
      padding: 12px;
      font-size: var(--fs-body);
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .header { display: flex; align-items: center; justify-content: space-between; }
    /* Format painter — brush button + dropdown (mirrors annotation editor). */
    .header-right { display: inline-flex; align-items: center; gap: 6px; }
    .format-painter-wrap { position: relative; display: inline-flex; }
    .format-painter-btn {
      width: 22px;
      height: 22px;
      padding: 0;
      appearance: none;
      background: transparent;
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      color: var(--c-text-mute);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: border-color 160ms ease, color 160ms ease;
    }
    .format-painter-btn:hover,
    .format-painter-btn[aria-expanded="true"] {
      color: var(--c-text);
      border-color: var(--c-border-strong);
    }
    .format-painter-menu {
      position: absolute;
      top: calc(100% + 6px);
      right: 0;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 96px;
      padding: 6px;
      background: var(--c-surface);
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      box-shadow: var(--shadow-card);
    }
    .format-painter-menu[hidden] { display: none; }
    .batch-btn {
      appearance: none;
      background: var(--c-surface-2);
      border: 1px solid var(--c-border);
      color: var(--c-text-mute);
      font: inherit;
      font-size: 11px;
      padding: 5px 10px;
      border-radius: var(--r-sm);
      cursor: pointer;
      text-align: left;
      white-space: nowrap;
    }
    .batch-btn:hover { background: var(--c-tint); color: var(--c-text); }
    .caption {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-soft);
    }
    .toggle {
      display: inline-flex;
      padding: 2px;
      background: var(--c-surface-2);
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border);
    }
    .toggle button {
      padding: 3px 9px;
      border: 0;
      border-radius: var(--r-xs);
      background: transparent;
      color: var(--c-text-mute);
      font-size: 10px;
      font-weight: 600;
      font-family: var(--ff-sans);
      cursor: pointer;
      letter-spacing: 0.02em;
    }
    .toggle button[aria-pressed="true"] {
      background: var(--c-surface);
      color: var(--c-text);
      box-shadow: var(--shadow-sm);
    }

    .row { display: flex; align-items: center; gap: 14px; }
    .row.label-row { gap: 14px; }
    .label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-soft);
      width: 60px;
      flex-shrink: 0;
    }

    .swatches { display: flex; gap: 4px; flex-wrap: wrap; flex: 1; }
    .sw {
      width: 22px;
      height: 22px;
      border-radius: 999px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      cursor: pointer;
      padding: 0;
      background: transparent;
      transition: transform 0.12s, box-shadow 0.12s;
      overflow: hidden;
      position: relative;
    }
    .sw:hover { transform: scale(1.08); }
    .sw[aria-pressed="true"] {
      border: 2px solid var(--c-text);
      box-shadow: 0 0 0 2px var(--c-surface), 0 0 0 3px var(--c-text);
    }
    .sw.transparent {
      background: var(--c-surface);
      border: 1px solid var(--c-border-strong);
    }
    .sw.transparent svg { position: absolute; inset: 0; display: block; }

    .slider-wrap { flex: 1; height: 28px; display: flex; align-items: center; gap: 10px; }
    .slider-track {
      flex: 1;
      height: 4px;
      border-radius: 999px;
      background: var(--c-border);
      position: relative;
      cursor: pointer;
    }
    .slider-fill {
      position: absolute; left: 0; top: 0; bottom: 0;
      background: var(--c-text);
      border-radius: 999px;
    }
    .slider-thumb {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 14px;
      border-radius: 999px;
      background: var(--c-surface);
      border: 2px solid var(--c-text);
      cursor: grab;
      box-shadow: var(--shadow-sm);
    }
    .slider-thumb:active { cursor: grabbing; }
    .slider-value {
      font-family: var(--ff-mono);
      font-size: 11px;
      font-weight: 500;
      color: var(--c-text);
      font-variant-numeric: tabular-nums;
      min-width: 38px;
      text-align: right;
    }

    .divider { height: 1px; background: var(--c-border); margin: 2px -12px; }

    .footer-row { justify-content: space-between; gap: 8px; }
    .reset {
      appearance: none;
      background: var(--c-surface-2);
      border: 1px solid var(--c-border);
      color: var(--c-text-mute);
      font: inherit;
      font-size: 11px;
      padding: 5px 10px;
      border-radius: var(--r-sm);
      cursor: pointer;
    }
    .reset:hover { background: var(--c-tint); color: var(--c-text); }
    .close {
      appearance: none;
      background: transparent;
      border: 0;
      color: var(--c-text-mute);
      font-size: 18px;
      line-height: 1;
      cursor: pointer;
      padding: 0 4px;
    }
    .close:hover { color: var(--c-text); }
  `;
}
function y() {
  var p;
  if (!o) return;
  const t = ((p = C()) == null ? void 0 : p.spotlight) ?? {}, e = t.stroke ?? R, r = t.strokeWidth ?? U, s = t.dimColor ?? j, i = t.dimOpacity ?? B;
  o.querySelectorAll('[data-action="swatch-mode"]').forEach((S) => {
    S.setAttribute("aria-pressed", String(S.getAttribute("data-mode") === k));
  });
  const a = o.querySelector('[data-region="ring-swatches"]');
  a && (a.innerHTML = M(e, "ring"));
  const n = o.querySelector('[data-region="dim-swatches"]');
  n && (n.innerHTML = M(s, "dim", !0));
  const d = Math.max(0, Math.min(100, (r - m) / (T - m) * 100));
  L("width", d, String(r));
  const c = Math.round(Math.max(0, Math.min(1, i)) * 100);
  L("opacity", c, `${c}%`);
}
function M(t, e, r = !1) {
  const s = k === "muted" ? O : q, i = [];
  if (r) {
    const a = t === "transparent";
    i.push(
      `<button type="button" class="sw transparent" data-slot="${e}" data-color="transparent" aria-pressed="${a}" title="transparent">
        <svg viewBox="0 0 22 22" width="22" height="22" aria-hidden="true">
          <line x1="3" y1="19" x2="19" y2="3" stroke="var(--c-error)" stroke-width="1.5"/>
        </svg>
      </button>`
    );
  }
  for (const { resolved: a } of s) {
    const n = V(a, t);
    i.push(
      `<button type="button" class="sw" data-slot="${e}" data-color="${a}" aria-pressed="${n}" style="background:${a};"></button>`
    );
  }
  return i.join("");
}
function V(t, e) {
  return !t || !e ? !1 : t.replace(/\s+/g, "").toLowerCase() === e.replace(/\s+/g, "").toLowerCase();
}
function L(t, e, r) {
  if (!o) return;
  const s = o.querySelector(`[data-region="${t}-fill"]`), i = o.querySelector(`[data-region="${t}-thumb"]`), a = o.querySelector(`[data-region="${t}-value"]`), n = Math.max(0, Math.min(100, e));
  s && (s.style.width = `${n}%`), i && (i.style.left = `${n}%`), a && (a.textContent = r);
}
function w(t) {
  if (!o) return;
  const e = o.querySelector('[data-region="format-painter-menu"]'), r = o.querySelector('[data-region="format-painter"]');
  e && (t ? e.removeAttribute("hidden") : e.setAttribute("hidden", "")), r == null || r.setAttribute("aria-expanded", String(t));
}
function P() {
  o && (o.addEventListener("click", (t) => {
    var a, n;
    const e = t.target;
    if (!e) return;
    if (e.closest('[data-action="format-painter-toggle"]')) {
      const d = o == null ? void 0 : o.querySelector('[data-region="format-painter-menu"]');
      w((d == null ? void 0 : d.hasAttribute("hidden")) ?? !1);
      return;
    }
    e.closest(".format-painter-wrap") || w(!1);
    const r = e.closest('[data-action="swatch-mode"]');
    if (r) {
      const d = r.getAttribute("data-mode");
      (d === "muted" || d === "vibrant") && (k = d, y());
      return;
    }
    const s = e.closest(".sw");
    if (s) {
      const d = s.getAttribute("data-slot"), c = s.getAttribute("data-color") ?? "";
      d === "ring" ? f({ stroke: c }) : d === "dim" && f({ dimColor: c });
      return;
    }
    const i = (a = e.closest("[data-action]")) == null ? void 0 : a.getAttribute("data-action");
    i === "close" ? x() : i === "reset" ? f({
      stroke: void 0,
      strokeWidth: void 0,
      dimColor: void 0,
      dimOpacity: void 0
    }) : i === "apply-all-spotlight" && (_(((n = C()) == null ? void 0 : n.spotlight) ?? {}), w(!1));
  }), $("width", (t) => {
    const e = Math.round((m + t * (T - m)) * 2) / 2;
    f({ strokeWidth: e });
  }), $("opacity", (t) => {
    f({ dimOpacity: Math.round(t * 100) / 100 });
  }), h = (t) => {
    if (!l || t.composedPath().includes(l)) return;
    const r = t.target;
    r != null && r.closest('[data-manuscript="ui"]') || x();
  }, document.addEventListener("mousedown", h, !0), v = (t) => {
    t.key === "Escape" && x();
  }, document.addEventListener("keydown", v));
}
function $(t, e) {
  if (!o) return;
  const r = o.querySelector(`[data-region="${t}-track"]`), s = o.querySelector(`[data-region="${t}-thumb"]`);
  if (!r || !s) return;
  let i = !1;
  const a = (c) => {
    const p = r.getBoundingClientRect();
    return Math.max(0, Math.min(1, (c - p.left) / p.width));
  }, n = (c) => {
    i && e(a(c.clientX));
  }, d = () => {
    i = !1, document.removeEventListener("mousemove", n, !0), document.removeEventListener("mouseup", d, !0), I();
  };
  s.addEventListener("mousedown", (c) => {
    E(`spotlight-${t}`), i = !0, e(a(c.clientX)), document.addEventListener("mousemove", n, !0), document.addEventListener("mouseup", d, !0), c.preventDefault();
  }), r.addEventListener("mousedown", (c) => {
    const p = c.target;
    p instanceof Element && p.closest(`[data-region="${t}-thumb"]`) || (E(`spotlight-${t}`), e(a(c.clientX)), i = !0, document.addEventListener("mousemove", n, !0), document.addEventListener("mouseup", d, !0));
  });
}
function A(t) {
  if (!l) return;
  const e = t.getBoundingClientRect(), r = 10, s = l.offsetWidth || 300, i = l.offsetHeight || 280;
  let a = e.right - s;
  a < 8 && (a = 8), a + s > window.innerWidth - 8 && (a = window.innerWidth - s - 8);
  let n = e.bottom + r;
  n + i > window.innerHeight - 8 && (n = Math.max(8, e.top - i - r)), l.style.left = `${Math.round(a)}px`, l.style.top = `${Math.round(n)}px`;
}
export {
  x as closeSpotlightEditor,
  K as isSpotlightEditorOpen,
  Y as openSpotlightEditor
};
