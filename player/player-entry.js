const Ps = {
  async getActiveReplay() {
    return null;
  },
  async setActiveReplay() {
  },
  async clearActiveReplay() {
  }
}, Is = {
  isPrompterOpen: () => !1,
  async openPrompter() {
  },
  async closePrompter() {
  },
  async updatePrompter() {
  }
}, Os = {
  isRecordingArmed: () => !1
}, Rs = {
  async get() {
  },
  async set() {
  },
  async remove() {
  },
  subscribe() {
    return () => {
    };
  }
}, Ns = {
  async saveScenario() {
  },
  async setEphemeralScenario() {
  },
  async clearEphemeralScenario() {
  },
  async getScenarioById() {
    return null;
  },
  async getEphemeralEnvelope() {
    return null;
  }
}, Ds = {
  async tryHandoff() {
    return !1;
  }
};
let Hr = Ps, Wr = Is, Ur = Os, jr = Rs, Vr = Ns, Gr = Ds;
function Yr(e) {
  e.storage && (Hr = e.storage), e.prompter && (Wr = e.prompter), e.recording && (Ur = e.recording), e.prefs && (jr = e.prefs), e.assetUrl && e.assetUrl, e.scenarioStorage && (Vr = e.scenarioStorage), e.handoff && (Gr = e.handoff);
}
function je() {
  return Hr;
}
function le() {
  return Wr;
}
function Bs() {
  return Ur;
}
function F() {
  return jr;
}
function nt() {
  return Vr;
}
function qs() {
  return Gr;
}
const sn = "mn:player:state";
function zs(e) {
  return e !== null && typeof e == "object" && typeof e.scenarioId == "string" && typeof e.stepIndex == "number";
}
const Fs = {
  async getActiveReplay() {
    const e = sessionStorage.getItem(sn);
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return zs(t) ? t : null;
    } catch {
      return null;
    }
  },
  async setActiveReplay(e) {
    sessionStorage.setItem(sn, JSON.stringify(e));
  },
  async clearActiveReplay() {
    sessionStorage.removeItem(sn);
  }
}, St = /* @__PURE__ */ new Map();
function ar(e, t) {
  const n = St.get(e);
  if (n) for (const r of [...n]) r(e, t);
}
const Hs = {
  async get(e) {
    const t = sessionStorage.getItem(`pref:${e}`);
    if (t)
      try {
        return JSON.parse(t);
      } catch {
        return;
      }
  },
  async set(e, t) {
    sessionStorage.setItem(`pref:${e}`, JSON.stringify(t)), ar(e, t);
  },
  async remove(e) {
    sessionStorage.removeItem(`pref:${e}`), ar(e, void 0);
  },
  subscribe(e, t) {
    for (const n of e) {
      let r = St.get(n);
      r || (r = /* @__PURE__ */ new Set(), St.set(n, r)), r.add(t);
    }
    return () => {
      var n;
      for (const r of e) (n = St.get(r)) == null || n.delete(t);
    };
  }
}, Ws = (e) => ({
  resolveUrl(t) {
    return e ? new URL(t, e).href : t;
  }
}), Us = {
  isSupported: () => !1,
  // no detached chrome window in the player → hide the button
  isPrompterOpen: () => !1,
  async openPrompter() {
  },
  async closePrompter() {
  },
  async updatePrompter() {
  }
}, js = {
  isRecordingArmed: () => !1
}, Vs = {
  async saveScenario() {
  },
  async setEphemeralScenario() {
  },
  async clearEphemeralScenario() {
  },
  async getScenarioById() {
    return null;
  },
  async getEphemeralEnvelope() {
    return null;
  }
};
function Gs(e) {
  Yr({
    storage: Fs,
    prefs: Hs,
    assetUrl: Ws(e == null ? void 0 : e.assetBaseUrl),
    prompter: Us,
    recording: js,
    scenarioStorage: Vs
  });
}
let bn = null;
function Ys(e) {
  bn = e;
}
function A(e, t) {
  const n = e.replace(/[.-]/g, "_"), r = Xs();
  let o = "";
  try {
    o = chrome.i18n.getMessage(n, r);
  } catch {
  }
  return o === "" && bn && (o = bn(n, r)), o === "" ? e : o;
}
function Xs(e) {
  return [];
}
const Ks = { message: "Manuscript", description: "Extension name shown in the browser extensions page and in store listings." }, Js = { message: "DOM-aware browser extension for authoring versioned web demos and manuals", description: "Short pitch shown under the name in the browser extensions page and in store listings." }, Zs = { message: "Cancel" }, Qs = { message: "Delete" }, ea = { message: "Overwrite" }, ta = { message: "Close" }, na = { message: "OK" }, ra = { message: 'Delete the scenario "$NAME$"?', placeholders: { name: { content: "$1", example: "Checkout walkthrough" } } }, oa = { message: "Untitled" }, sa = { message: "Got it" }, aa = { message: "Start a new walkthrough" }, ia = { message: "New Manuscript" }, ca = { message: "Need help?" }, la = { message: "Open a web page, then press New Manuscript." }, ua = { message: "Open a JSON file" }, da = { message: "Couldn't read this JSON file. Pick a valid Manuscript export." }, pa = { message: 'A scenario with this id already exists: "$NAME$". Overwrite it?', placeholders: { name: { content: "$1", example: "Checkout walkthrough" } } }, ha = { message: "Previous Manuscripts" }, fa = { message: "Resume" }, ma = { message: "$N$ steps", placeholders: { n: { content: "$1", example: "3" } } }, ga = { message: "Delete $NAME$", placeholders: { name: { content: "$1", example: "Checkout walkthrough" } } }, ba = { message: "↩ Inline" }, _a = { message: "Back to inline popup" }, ya = { message: "No active tab found." }, va = { message: "This page is not supported (chrome://, edge://, new tab, file:// etc.). Open a regular web page and try again." }, xa = { message: "The extension could not connect to this page. Refresh the page (F5) and try again." }, wa = { message: "Unknown error occurred. Check the console." }, ka = { message: "Language" }, Sa = { message: "Manuscript authoring panel" }, $a = { message: "Close panel" }, Aa = { message: "Toggle dark mode" }, Ma = { message: "Untitled walkthrough" }, Ea = { message: "Annotation tools" }, Ta = { message: "Text" }, La = { message: "Shape" }, Ca = { message: "Freedraw" }, Pa = { message: "Replay" }, Ia = { message: "Record screen" }, Oa = { message: "Replay walkthrough" }, Ra = { message: "Open presenter prompter" }, Na = { message: "Export JSON" }, Da = { message: "Export" }, Ba = { message: "With thumbnails · full size" }, qa = { message: "Export without thumbnails" }, za = { message: "Lighter file · -lite" }, Fa = { message: "Undo (Ctrl+Z)" }, Ha = { message: "Redo (Ctrl+Shift+Z)" }, Wa = { message: "Settings" }, Ua = { message: "Settings" }, ja = { message: "Narration voice" }, Va = { message: "Auto (Google preferred)" }, Ga = { message: "Match full URL (query & hash)" }, Ya = { message: "On by default URL matching ignores ?query and #hash. Turn this on for sites that change the page via query or hash (e.g. ?tab=, #/reports) so step navigation and the wrong-page warning work." }, Xa = { message: "Close settings" }, Ka = { message: "Local" }, Ja = { message: "Remote Library" }, Za = { message: "Remote library — coming soon." }, Qa = { message: "Connect a public GitHub repo to load shared manuscripts." }, ei = { message: "+ Add a GitHub source" }, ti = { message: "Add source" }, ni = { message: "Refresh all sources" }, ri = { message: "Remove source" }, oi = { message: "github.com/owner/repo  or  owner/repo/path" }, si = { message: "Add" }, ai = { message: "Invalid URL. Expected github.com/owner/repo or owner/repo." }, ii = { message: "Enter a GitHub URL or owner/repo." }, ci = { message: "Click ↻ refresh to load this source." }, li = { message: "No manuscripts in this folder yet." }, ui = { message: "This folder is empty." }, di = { message: "Back to parent folder" }, pi = { message: "Collapse source" }, hi = { message: "Expand source" }, fi = { message: "Loading" }, mi = { message: "steps" }, gi = { message: "Edits won't be saved" }, bi = { message: "Save to local" }, _i = { message: "External page" }, yi = { message: "Saved to local" }, vi = { message: "Save failed" }, xi = { message: "Copy formatting" }, wi = { message: "This step only" }, ki = { message: "All steps" }, Si = { message: "Before you record" }, $i = { message: "The browser shows two share dialogs. The first captures this tab; the second adds your TTS narration via system audio. Follow the numbered cues in each dialog." }, Ai = { message: "1. Required — allow video capture" }, Mi = { message: "First share dialog — when the current tab appears, click Allow." }, Ei = { message: "When the dialog below shows your current tab, click <strong>Allow</strong>." }, Ti = { message: "2. Optional — allow TTS audio capture" }, Li = { message: "Second share dialog — select a browser window and tick Also share system audio." }, Ci = { message: "<ol><li>Select the <strong>Window</strong> tab at the top.</li><li>Pick a browser window.</li><li>Tick <strong>Also share system audio</strong> — required to capture the TTS voice.</li><li>Click <strong>Share</strong>.</li></ol><p>The video from this dialog isn't used. <strong>If you cancel this dialog the recording still runs, but the TTS voice will be silent in the file.</strong></p>" }, Pi = { message: "Manuscript recorder" }, Ii = { message: "This window is not recorded — it just controls the capture." }, Oi = { message: "Click Start recording — the browser asks which surface to share. Pick your demo window and turn on system audio so the narration is captured." }, Ri = { message: "Allow capture for video + TTS audio" }, Ni = { message: "<ol><li>Select the <strong>Window</strong> tab at the top.</li><li>Choose the browser window running your demo.</li><li>Tick <strong>Share system audio</strong> — required to record the TTS narration.</li><li>Click <strong>Share</strong>.</li></ol>" }, Di = { message: "Start recording" }, Bi = { message: "Stop & save" }, qi = { message: "While recording — Space: pause / resume the demo (recording keeps going) · Esc: stop & save" }, zi = { message: "Ready." }, Fi = { message: "Recording" }, Hi = { message: "⏸ Paused — recording continues" }, Wi = { message: "Scenario playing" }, Ui = { message: "Scenario paused" }, ji = { message: "Saved. You can close this window." }, Vi = { message: `⚠ The narration won't be in the video. Share a Window (not a tab) and turn on "Share system audio". Click Start recording to try again.` }, Gi = { message: "Video quality" }, Yi = { message: "Standard" }, Xi = { message: "5 Mbps · 1080p" }, Ki = { message: "High quality" }, Ji = { message: "25 Mbps · 1080p" }, Zi = { message: "Keep the panel and controls visible (tutorial mode)" }, Qi = { message: "Useful when you're recording a how-to that shows Manuscript's own UI. The default uncluttered recording is best for end-user walkthroughs." }, ec = { message: "Also record my microphone" }, tc = { message: "Adds your voice to the recording so you can narrate live or add extra commentary while the scenario is paused. The browser will ask permission once." }, nc = { message: "While recording — <kbd>Space</kbd> pauses / resumes the scenario (recording keeps going) · <kbd>Esc</kbd> stops and saves" }, rc = { message: "Cancel" }, oc = { message: "Start recording" }, sc = { message: "Recording" }, ac = { message: "Click to resume the scenario" }, ic = { message: "Microphone permission denied — recording continues without your voice." }, cc = { message: "Step name" }, lc = { message: "Step description" }, uc = { message: "Pick element for step $N$", placeholders: { n: { content: "$1", example: "1" } } }, dc = { message: "Pick element with wand" }, pc = { message: "Action — pause replay on this step" }, hc = { message: "Delete step" }, fc = { message: "Auto-advance seconds" }, mc = { message: "Annotation tools" }, gc = { message: "Delete annotation" }, bc = { message: "Inner flow" }, _c = { message: "Sub-elements must be picked on the same page as the primary." }, yc = { message: "Add another element to this step" }, vc = { message: "Pull earlier (0.1s)" }, xc = { message: "Push later (0.1s)" }, wc = { message: "Stable attribute match — selector is healthy" }, kc = { message: "Layer 2 fallback — original attribute not found, matched by text + parent" }, Sc = { message: "Layer 3 fallback — only the visual heuristic still matches; re-pick is recommended" }, $c = { message: "Element not found on this page — re-pick required" }, Ac = { message: "Validate scenario" }, Mc = { message: "Scenario health check" }, Ec = { message: "Standalone player may stop here — the next step is a different origin." }, Tc = { message: "From here on, narration won't autoplay on pages the tour advances to on its own — the browser blocks sound on a page opened without a click. The viewer clicks the page to play its narration. Pages the viewer advances by clicking keep sound. (Affects both the standalone player and the extension.)" }, Lc = { message: "$OK$ healthy · $FALLBACK$ fallback · $BROKEN$ broken · $SKIPPED$ skipped (other pages)", placeholders: { ok: { content: "$1", example: "8" }, fallback: { content: "$2", example: "2" }, broken: { content: "$3", example: "1" }, skipped: { content: "$4", example: "3" } } }, Cc = { message: "$OK$ healthy · $FALLBACK$ fallback · $BROKEN$ broken · $PENDING$ pending", placeholders: { ok: { content: "$1", example: "3" }, fallback: { content: "$2", example: "1" }, broken: { content: "$3", example: "1" }, pending: { content: "$4", example: "5" } } }, Pc = { message: "Start" }, Ic = { message: "Validating…" }, Oc = { message: "Validation complete" }, Rc = { message: "Checking this page · $URL$", placeholders: { url: { content: "$1", example: "https://example.com/" } } }, Nc = { message: "Moving to next page · $URL$", placeholders: { url: { content: "$1", example: "https://example.com/checkout" } } }, Dc = { message: "Pending" }, Bc = { message: "healthy" }, qc = { message: "fallback" }, zc = { message: "broken" }, Fc = { message: "pending" }, Hc = { message: "Go to step" }, Wc = { message: "Re-pick element" }, Uc = { message: "Healthy" }, jc = { message: "Layer 2 fallback" }, Vc = { message: "Layer 3 fallback" }, Gc = { message: "Not found" }, Yc = { message: "Other page" }, Xc = { message: "No element picked" }, Kc = { message: "All resolvable steps on this page check out. " }, Jc = { message: "Close" }, Zc = { message: "Go to $URL$", placeholders: { url: { content: "$1", example: "https://example.com" } } }, Qc = { message: "Insert step here" }, el = { message: "Add step" }, tl = { message: "Step Name" }, nl = { message: "Step counter" }, rl = { message: "Previous (←)" }, ol = { message: "Pause/Play (Space)" }, sl = { message: "Next (→)" }, al = { message: "Finish (→)" }, il = { message: "Exit (Esc)" }, cl = { message: "Open presenter prompter" }, ll = { message: "Presenter prompter" }, ul = { message: "Move controls (drag)" }, dl = { message: "Drag to move" }, pl = { message: "Toggle vertical/horizontal" }, hl = { message: "Toggle narration" }, fl = { message: "Narration (TTS)" }, ml = { message: "Click anywhere to enable sound" }, gl = { message: "Click the demo page to enable sound" }, bl = { message: "Click the highlighted target to continue" }, _l = { message: "Skip" }, yl = { message: "Couldn't find the target" }, vl = { message: "The element this step relies on isn't on the page anymore. Skip this step or stop replay." }, xl = { message: "Skip" }, wl = { message: "Stop replay" }, kl = { message: "Different page" }, Sl = { message: "This walkthrough was recorded on the page below. Open it now?" }, $l = { message: "Navigate" }, Al = { message: "Force replay here" }, Ml = { message: "Cancel" }, El = { message: "Now" }, Tl = { message: "Next" }, Ll = { message: "Steps" }, Cl = { message: "Step $N$", placeholders: { n: { content: "$1", example: "3" } } }, Pl = { message: "Waiting…" }, Il = { message: "Playing" }, Ol = { message: "Paused" }, Rl = { message: "Action step" }, Nl = { message: "Previous" }, Dl = { message: "Pause/Play" }, Bl = { message: "Next" }, ql = { message: "Toggle narration" }, zl = { message: "Narration (TTS)" }, Fl = { message: "Manuscript · Prompter" }, Hl = { message: "Thumbnails need host access. Click the Manuscript icon and press Start again to grant the permission." }, Wl = { message: "This element matches multiple targets — pick something more specific." }, Ul = { message: "Exported ✓" }, jl = { message: "Export failed" }, Vl = { message: "No steps" }, Gl = { message: "This tour can't continue on this page." }, Yl = {
  extension_name: Ks,
  extension_description: Js,
  common_cancel: Zs,
  common_delete: Qs,
  common_overwrite: ea,
  common_close: ta,
  common_ok: na,
  common_delete_confirm: ra,
  common_untitled: oa,
  common_got_it: sa,
  popup_title_start: aa,
  popup_cta_new: ia,
  popup_cta_help: ca,
  popup_cta_help_text: la,
  popup_cta_import: ua,
  popup_import_failed: da,
  popup_import_overwrite_confirm: pa,
  popup_list_heading: ha,
  popup_list_resume_tag: fa,
  popup_list_steps: ma,
  popup_list_delete_aria: ga,
  popup_detach_detached: ba,
  popup_detach_inline_title: _a,
  popup_error_no_tab: ya,
  popup_error_bad_url: va,
  popup_error_inject: xa,
  popup_error_unknown: wa,
  popup_language_label: ka,
  panel_aria_region: Sa,
  panel_close_aria: $a,
  panel_palette_toggle_aria: Aa,
  panel_title_placeholder: Ma,
  panel_tool_label: Ea,
  panel_tool_text: Ta,
  panel_tool_shape: La,
  panel_tool_freedraw: Ca,
  panel_replay_aria: Pa,
  panel_record_aria: Ia,
  panel_replay_title: Oa,
  panel_prompter_aria: Ra,
  panel_export_aria: Na,
  panel_export_menu_full: Da,
  panel_export_menu_full_meta: Ba,
  panel_export_menu_lite: qa,
  panel_export_menu_lite_meta: za,
  panel_undo_aria: Fa,
  panel_redo_aria: Ha,
  panel_settings_aria: Wa,
  panel_settings_title: Ua,
  panel_settings_voice_label: ja,
  panel_settings_voice_auto: Va,
  panel_settings_strict_url_label: Ga,
  panel_settings_strict_url_help: Ya,
  panel_settings_close_aria: Xa,
  popup_tabs_local: Ka,
  popup_tabs_remote: Ja,
  popup_remote_coming_soon: Za,
  popup_remote_empty_copy: Qa,
  popup_remote_add_cta: ei,
  popup_remote_add_cta_aria: ti,
  popup_remote_refresh_all_aria: ni,
  popup_remote_remove_aria: ri,
  popup_remote_add_placeholder: oi,
  popup_remote_add_submit: si,
  popup_remote_add_error_invalid: ai,
  popup_remote_add_error_empty: ii,
  popup_remote_source_never_refreshed: ci,
  popup_remote_source_empty: li,
  popup_remote_folder_empty: ui,
  popup_remote_back_aria: di,
  popup_remote_collapse_aria: pi,
  popup_remote_expand_aria: hi,
  popup_remote_progress: fi,
  popup_remote_steps_suffix: mi,
  panel_ephemeral_warning: gi,
  panel_ephemeral_import: bi,
  panel_ephemeral_bridge_fallback: _i,
  panel_ephemeral_saved: yi,
  panel_ephemeral_save_failed: vi,
  copy_formatting: xi,
  apply_this_step: wi,
  apply_all_steps: ki,
  recording_guide_title: Si,
  recording_guide_subtitle: $i,
  recording_guide_step1_title: Ai,
  recording_guide_step1_alt: Mi,
  recording_guide_step1_desc_html: Ei,
  recording_guide_step2_title: Ti,
  recording_guide_step2_alt: Li,
  recording_guide_step2_desc_html: Ci,
  recorder_title: Pi,
  recorder_not_recorded: Ii,
  recorder_instruction: Oi,
  recorder_share_title: Ri,
  recorder_share_steps_html: Ni,
  recorder_start: Di,
  recorder_stop: Bi,
  recorder_hint: qi,
  recorder_status_ready: zi,
  recorder_status_recording: Fi,
  recorder_status_paused: Hi,
  recorder_scenario_playing: Wi,
  recorder_scenario_paused: Ui,
  recorder_status_saved: ji,
  recorder_warn_no_tts: Vi,
  recorder_quality_label: Gi,
  recorder_quality_standard: Yi,
  recorder_quality_standard_spec: Xi,
  recorder_quality_high: Ki,
  recorder_quality_high_spec: Ji,
  recording_guide_keep_ui_label: Zi,
  recording_guide_keep_ui_hint: Qi,
  recording_guide_mic_label: ec,
  recording_guide_mic_hint: tc,
  recording_guide_keys_info_html: nc,
  recording_guide_cancel: rc,
  recording_guide_start: oc,
  recording_paused_label: sc,
  recording_paused_aria: ac,
  recording_mic_failed: ic,
  step_name_placeholder: cc,
  step_desc_placeholder: lc,
  step_wand_aria: uc,
  step_wand_title: dc,
  step_action_aria: pc,
  step_delete_aria: hc,
  step_timer_aria: fc,
  step_annotations_title: mc,
  step_annotation_delete_aria: gc,
  step_subs_title: bc,
  sub_same_url_required: _c,
  sub_add_aria: yc,
  sub_shift_left: vc,
  sub_shift_right: xc,
  health_layer1: wc,
  health_layer2: kc,
  health_layer3: Sc,
  health_broken: $c,
  panel_validate_aria: Ac,
  validate_modal_title: Mc,
  validate_player_cross_origin_warn: Ec,
  validate_tts_autoplay_warn: Tc,
  validate_summary: Lc,
  validate_summary_running: Cc,
  validate_start: Pc,
  validate_in_progress: Ic,
  validate_complete: Oc,
  validate_checking: Rc,
  validate_navigating_to: Nc,
  validate_status_pending: Dc,
  validate_label_ok: Bc,
  validate_label_fallback: qc,
  validate_label_broken: zc,
  validate_label_pending: Fc,
  validate_row_go: Hc,
  validate_row_repick: Wc,
  validate_status_green: Uc,
  validate_status_yellow: jc,
  validate_status_orange: Vc,
  validate_status_red: Gc,
  validate_status_skipped: Yc,
  validate_status_no_element: Xc,
  validate_no_issues: Kc,
  validate_close: Jc,
  step_link_aria: Zc,
  step_insert_aria: Qc,
  step_add_aria: el,
  step_empty_name: tl,
  replay_counter_aria: nl,
  replay_prev_aria: rl,
  replay_pause_aria: ol,
  replay_next_aria: sl,
  replay_finish_aria: al,
  replay_exit_aria: il,
  replay_prompter_aria: cl,
  replay_prompter_title: ll,
  replay_move_aria: ul,
  replay_move_title: dl,
  replay_orient_aria: pl,
  replay_tts_aria: hl,
  replay_tts_title: fl,
  replay_tts_blocked_hint: ml,
  prompter_tts_blocked_hint: gl,
  replay_action_prompt: bl,
  replay_action_skip: _l,
  replay_notfound_title: yl,
  replay_notfound_body: vl,
  replay_notfound_skip: xl,
  replay_notfound_stop: wl,
  replay_url_mismatch_title: kl,
  replay_url_mismatch_body: Sl,
  replay_url_mismatch_navigate: $l,
  replay_url_mismatch_force: Al,
  replay_url_mismatch_cancel: Ml,
  prompter_now: El,
  prompter_next: Tl,
  prompter_steps: Ll,
  prompter_step_no: Cl,
  prompter_waiting: Pl,
  prompter_playing: Il,
  prompter_paused: Ol,
  prompter_action_step: Rl,
  prompter_prev_aria: Nl,
  prompter_pause_aria: Dl,
  prompter_next_aria: Bl,
  prompter_tts_aria: ql,
  prompter_tts_title: zl,
  prompter_title: Fl,
  permission_thumbnail_needs_host: Hl,
  toast_ambiguous_selector: Wl,
  toast_export_success: Ul,
  toast_export_failed: jl,
  toast_no_steps: Vl,
  player_handoff_unavailable: Gl
}, Xl = { message: "Manuscript", description: "Extension name shown in the browser extensions page and in store listings." }, Kl = { message: "DOM 인식 기반으로 깨지지 않는 웹 시연·매뉴얼을 저작·재생하는 브라우저 확장 프로그램", description: "Short pitch shown under the name in the browser extensions page and in store listings." }, Jl = { message: "취소" }, Zl = { message: "삭제" }, Ql = { message: "덮어쓰기" }, eu = { message: "닫기" }, tu = { message: "확인" }, nu = { message: '"$NAME$" 시나리오를 삭제하시겠습니까?', placeholders: { name: { content: "$1", example: "결제 안내" } } }, ru = { message: "제목 없음" }, ou = { message: "확인" }, su = { message: "새 시연 시작" }, au = { message: "새 매뉴스크립트" }, iu = { message: "도움말" }, cu = { message: "웹 페이지를 연 후 새 매뉴스크립트 버튼을 누르세요." }, lu = { message: "JSON 파일 가져오기" }, uu = { message: "JSON 파일을 읽을 수 없습니다. 매뉴스크립트에서 내보낸 파일인지 확인해 주세요." }, du = { message: '같은 id의 "$NAME$" 시나리오가 이미 있습니다. 덮어쓸까요?', placeholders: { name: { content: "$1", example: "결제 안내" } } }, pu = { message: "이전 매뉴스크립트" }, hu = { message: "이어하기" }, fu = { message: "$N$개 단계", placeholders: { n: { content: "$1", example: "3" } } }, mu = { message: "$NAME$ 삭제", placeholders: { name: { content: "$1", example: "결제 안내" } } }, gu = { message: "↩ 인라인" }, bu = { message: "인라인 팝업으로 돌아가기" }, _u = { message: "활성 탭을 찾을 수 없습니다." }, yu = { message: "이 페이지는 지원하지 않습니다 (chrome://, edge://, 새 탭, file:// 등). 일반 웹 페이지에서 다시 시도해 주세요." }, vu = { message: "이 페이지에 연결할 수 없습니다. F5로 페이지를 새로고침한 뒤 다시 시도하세요." }, xu = { message: "알 수 없는 오류가 발생했습니다. 콘솔을 확인하세요." }, wu = { message: "언어" }, ku = { message: "매뉴스크립트 작성 패널" }, Su = { message: "패널 닫기" }, $u = { message: "다크 모드 전환" }, Au = { message: "제목 없는 시연" }, Mu = { message: "주석 도구" }, Eu = { message: "텍스트" }, Tu = { message: "도형" }, Lu = { message: "자유 그리기" }, Cu = { message: "재생" }, Pu = { message: "화면 녹화" }, Iu = { message: "시연 재생" }, Ou = { message: "발표자 프롬프터 열기" }, Ru = { message: "JSON 내보내기" }, Nu = { message: "전체 내보내기" }, Du = { message: "썸네일 포함 · 원본 크기" }, Bu = { message: "썸네일 없이 내보내기" }, qu = { message: "용량 ↓ · 가벼운 -lite 파일" }, zu = { message: "되돌리기 (Ctrl+Z)" }, Fu = { message: "다시 실행 (Ctrl+Shift+Z)" }, Hu = { message: "설정" }, Wu = { message: "설정" }, Uu = { message: "내레이션 음성" }, ju = { message: "자동 (Google 우선)" }, Vu = { message: "전체 URL 일치 (쿼리·해시)" }, Gu = { message: "기본 URL 일치는 ?쿼리와 #해시를 무시합니다. 쿼리나 해시로 화면이 바뀌는 사이트(예: ?tab=, #/reports)라면 이 옵션을 켜야 단계 이동과 페이지 불일치 경고가 제대로 동작합니다." }, Yu = { message: "설정 닫기" }, Xu = { message: "내 라이브러리" }, Ku = { message: "원격저장소" }, Ju = { message: "원격저장소 라이브러리 — 곧 제공됩니다." }, Zu = { message: "GitHub 공개 리포를 연결해서 공유 시나리오를 불러오세요." }, Qu = { message: "+ GitHub 소스 추가" }, ed = { message: "소스 추가" }, td = { message: "전체 새로고침" }, nd = { message: "소스 제거" }, rd = { message: "github.com/owner/repo 또는 owner/repo/path" }, od = { message: "추가" }, sd = { message: "URL 형식이 올바르지 않습니다. github.com/owner/repo 또는 owner/repo 형식으로 입력해주세요." }, ad = { message: "GitHub URL 또는 owner/repo를 입력해주세요." }, id = { message: "↻ 새로고침을 눌러 이 소스의 시나리오를 불러오세요." }, cd = { message: "이 폴더에는 아직 시나리오가 없습니다." }, ld = { message: "비어있는 폴더입니다." }, ud = { message: "상위 폴더로" }, dd = { message: "접기" }, pd = { message: "펼치기" }, hd = { message: "불러오는 중" }, fd = { message: "단계" }, md = { message: "편집은 저장되지 않습니다" }, gd = { message: "내 라이브러리에 저장" }, bd = { message: "외부 페이지" }, _d = { message: "라이브러리에 저장했습니다" }, yd = { message: "저장에 실패했습니다" }, vd = { message: "서식 복사" }, xd = { message: "이 스텝만" }, wd = { message: "전체 스텝" }, kd = { message: "녹화 시작 전" }, Sd = { message: "브라우저가 share dialog 를 두 번 띄웁니다. 첫 번째는 이 탭을 캡처하고, 두 번째는 시스템 오디오로 TTS 음성을 추가합니다. 각 다이얼로그의 번호 순서대로 진행하세요." }, $d = { message: "1. 영상 녹화를 위한 필수 허용" }, Ad = { message: "첫 번째 share dialog — 현재 탭이 나타나면 허용을 클릭하세요." }, Md = { message: "아래 다이얼로그에 현재 탭이 나타나면 <strong>허용</strong>을 클릭합니다." }, Ed = { message: "2. TTS 녹음을 위한 옵션 허용" }, Td = { message: "두 번째 share dialog — 브라우저 창 선택 + 시스템 오디오 공유 체크." }, Ld = { message: "<ol><li>상단의 <strong>Window(윈도우)</strong> 탭을 선택합니다.</li><li>브라우저 창을 선택합니다.</li><li><strong>시스템 오디오 공유</strong>를 체크합니다 — TTS 음성 녹음 필수.</li><li><strong>공유</strong>를 클릭합니다.</li></ol><p>두 번째 다이얼로그의 영상은 사용되지 않습니다. <strong>이 다이얼로그를 취소해도 녹화는 진행되지만 TTS 음성은 녹음되지 않습니다.</strong></p>" }, Cd = { message: "Manuscript 녹화기" }, Pd = { message: "이 창은 녹화되지 않습니다 — 녹화를 제어하는 창입니다." }, Id = { message: "녹화 시작을 누르면 브라우저가 공유할 화면을 묻습니다. 데모 창을 고르고 시스템 오디오를 켜야 내레이션이 녹음됩니다." }, Od = { message: "영상 + TTS 음성 녹화 허용" }, Rd = { message: "<ol><li>상단의 <strong>창</strong> 탭을 선택합니다.</li><li>데모가 열린 브라우저 창을 고릅니다.</li><li><strong>시스템 오디오 공유</strong>를 체크합니다 — TTS 내레이션 녹음에 필요.</li><li><strong>공유</strong>를 누릅니다.</li></ol>" }, Nd = { message: "녹화 시작" }, Dd = { message: "정지 후 저장" }, Bd = { message: "녹화 중 — Space: 데모 일시정지 / 재개 (녹화는 계속) · Esc: 정지 후 저장" }, qd = { message: "준비됨." }, zd = { message: "녹화 중" }, Fd = { message: "⏸ 일시정지 — 녹화는 계속됩니다" }, Hd = { message: "시나리오 재생 중" }, Wd = { message: "시나리오 일시정지 중" }, Ud = { message: "저장됨. 이 창을 닫아도 됩니다." }, jd = { message: "⚠ 내레이션이 영상에 들어가지 않습니다. 탭이 아니라 '창'을 공유하고 '시스템 오디오 공유'를 켜세요. '녹화 시작'을 다시 눌러 주세요." }, Vd = { message: "영상 화질" }, Gd = { message: "일반 화질" }, Yd = { message: "5 Mbps · 1080p" }, Xd = { message: "고화질" }, Kd = { message: "25 Mbps · 1080p" }, Jd = { message: "패널·컨트롤을 영상에 함께 노출 (튜토리얼 모드)" }, Zd = { message: "Manuscript UI를 직접 보여주는 how-to 녹화에 사용합니다. 일반 워크스루는 기본(자동 숨김)이 더 깔끔합니다." }, Qd = { message: "내 마이크도 함께 녹음" }, ep = { message: "시나리오 일시중지 중에 직접 설명을 더하거나 라이브 보이스 오버를 추가할 수 있도록 마이크 음성을 함께 녹음합니다. 브라우저가 한 번 권한을 요청합니다." }, tp = { message: "녹화 중 — <kbd>Space</kbd> 시나리오 일시중지 / 재개 (녹화는 계속) · <kbd>Esc</kbd> 종료 후 저장" }, np = { message: "취소" }, rp = { message: "녹화 시작" }, op = { message: "녹화 중" }, sp = { message: "클릭하여 시나리오 재개" }, ap = { message: "마이크 권한 거부 — 보이스 없이 녹화를 계속합니다." }, ip = { message: "단계 이름" }, cp = { message: "단계 설명" }, lp = { message: "단계 $N$의 요소 선택", placeholders: { n: { content: "$1", example: "1" } } }, up = { message: "요소 선택" }, dp = { message: "액션 — 이 단계에서 재생을 멈춤" }, pp = { message: "단계 삭제" }, hp = { message: "자동 진행 시간(초)" }, fp = { message: "주석 도구" }, mp = { message: "주석 삭제" }, gp = { message: "내부 흐름" }, bp = { message: "보조 element 는 대표 element 와 같은 페이지에서만 추가할 수 있습니다." }, _p = { message: "이 스텝에 element 추가" }, yp = { message: "0.1초 앞당기기" }, vp = { message: "0.1초 늦추기" }, xp = { message: "기본 selector 정상" }, wp = { message: "Layer 2 fallback — 원본 속성 못 찾음, 텍스트+부모 구조로 매칭" }, kp = { message: "Layer 3 fallback — 시각 휴리스틱만 남음, 재픽 권장" }, Sp = { message: "이 페이지에서 element 못 찾음 — 재픽 필요" }, $p = { message: "시연 검증" }, Ap = { message: "시연 상태 검증" }, Mp = { message: "여기서 standalone player 재생이 멈출 수 있어요 — 다음 단계가 다른 출처(cross-origin)입니다." }, Ep = { message: "여기서부터, 투어가 자동으로 넘어가는 페이지에서는 내레이션이 자동 재생되지 않아요 — 브라우저가 클릭 없이 열린 페이지의 소리를 막기 때문입니다. 보는 사람이 페이지를 클릭하면 그 페이지의 음성이 재생됩니다. 직접 클릭해서 넘긴 페이지는 소리가 이어져요. (standalone player·확장 모두 해당)" }, Tp = { message: "정상 $OK$ · fallback $FALLBACK$ · 깨짐 $BROKEN$ · 다른 페이지 $SKIPPED$", placeholders: { ok: { content: "$1", example: "8" }, fallback: { content: "$2", example: "2" }, broken: { content: "$3", example: "1" }, skipped: { content: "$4", example: "3" } } }, Lp = { message: "정상 $OK$ · fallback $FALLBACK$ · 깨짐 $BROKEN$ · 대기 $PENDING$", placeholders: { ok: { content: "$1", example: "3" }, fallback: { content: "$2", example: "1" }, broken: { content: "$3", example: "1" }, pending: { content: "$4", example: "5" } } }, Cp = { message: "검증 시작" }, Pp = { message: "검증 중…" }, Ip = { message: "검증 완료" }, Op = { message: "이 페이지 검증 중 · $URL$", placeholders: { url: { content: "$1", example: "https://example.com/" } } }, Rp = { message: "다음 페이지로 이동 중 · $URL$", placeholders: { url: { content: "$1", example: "https://example.com/checkout" } } }, Np = { message: "대기" }, Dp = { message: "정상" }, Bp = { message: "fallback" }, qp = { message: "깨짐" }, zp = { message: "대기" }, Fp = { message: "이 스텝 보기" }, Hp = { message: "재픽" }, Wp = { message: "정상" }, Up = { message: "Layer 2 fallback" }, jp = { message: "Layer 3 fallback" }, Vp = { message: "못 찾음" }, Gp = { message: "다른 페이지" }, Yp = { message: "element 미픽" }, Xp = { message: "이 페이지의 step 들은 모두 정상입니다." }, Kp = { message: "닫기" }, Jp = { message: "$URL$로 이동", placeholders: { url: { content: "$1", example: "https://example.com" } } }, Zp = { message: "여기에 단계 삽입" }, Qp = { message: "단계 추가" }, eh = { message: "단계 이름" }, th = { message: "단계 카운터" }, nh = { message: "이전 (←)" }, rh = { message: "일시정지/재생 (Space)" }, oh = { message: "다음 (→)" }, sh = { message: "완료 (→)" }, ah = { message: "종료 (Esc)" }, ih = { message: "발표자 프롬프터 열기" }, ch = { message: "발표자 프롬프터" }, lh = { message: "컨트롤 이동 (드래그)" }, uh = { message: "드래그로 이동" }, dh = { message: "세로/가로 전환" }, ph = { message: "내레이션 켜기/끄기" }, hh = { message: "내레이션 (TTS)" }, fh = { message: "소리를 위해 아무 곳이나 클릭하세요" }, mh = { message: "소리를 위해 재생 화면을 클릭하세요" }, gh = { message: "강조된 대상을 클릭하면 계속 진행됩니다" }, bh = { message: "건너뛰기" }, _h = { message: "대상을 찾을 수 없습니다" }, yh = { message: "이 단계가 가리키는 요소가 페이지에 더 이상 없습니다. 건너뛰거나 재생을 멈출 수 있습니다." }, vh = { message: "건너뛰기" }, xh = { message: "재생 멈추기" }, wh = { message: "다른 페이지" }, kh = { message: "이 시연은 아래 페이지에서 녹화되었습니다. 그곳으로 이동할까요?" }, Sh = { message: "이동" }, $h = { message: "여기서 강제 재생" }, Ah = { message: "취소" }, Mh = { message: "현재" }, Eh = { message: "다음" }, Th = { message: "단계" }, Lh = { message: "단계 $N$", placeholders: { n: { content: "$1", example: "3" } } }, Ch = { message: "대기 중…" }, Ph = { message: "재생 중" }, Ih = { message: "일시정지" }, Oh = { message: "액션 단계" }, Rh = { message: "이전" }, Nh = { message: "일시정지/재생" }, Dh = { message: "다음" }, Bh = { message: "내레이션 켜기/끄기" }, qh = { message: "내레이션 (TTS)" }, zh = { message: "매뉴스크립트 · 프롬프터" }, Fh = { message: "썸네일에 호스트 접근 권한이 필요합니다. 매뉴스크립트 아이콘을 클릭하여 시작을 다시 누르면 권한을 부여할 수 있습니다." }, Hh = { message: "이 요소가 여러 대상과 일치합니다 — 더 구체적인 요소를 선택해 주세요." }, Wh = { message: "내보냄 ✓" }, Uh = { message: "내보내기에 실패했습니다" }, jh = { message: "단계가 없습니다" }, Vh = { message: "이 투어는 여기서 계속할 수 없습니다." }, Gh = {
  extension_name: Xl,
  extension_description: Kl,
  common_cancel: Jl,
  common_delete: Zl,
  common_overwrite: Ql,
  common_close: eu,
  common_ok: tu,
  common_delete_confirm: nu,
  common_untitled: ru,
  common_got_it: ou,
  popup_title_start: su,
  popup_cta_new: au,
  popup_cta_help: iu,
  popup_cta_help_text: cu,
  popup_cta_import: lu,
  popup_import_failed: uu,
  popup_import_overwrite_confirm: du,
  popup_list_heading: pu,
  popup_list_resume_tag: hu,
  popup_list_steps: fu,
  popup_list_delete_aria: mu,
  popup_detach_detached: gu,
  popup_detach_inline_title: bu,
  popup_error_no_tab: _u,
  popup_error_bad_url: yu,
  popup_error_inject: vu,
  popup_error_unknown: xu,
  popup_language_label: wu,
  panel_aria_region: ku,
  panel_close_aria: Su,
  panel_palette_toggle_aria: $u,
  panel_title_placeholder: Au,
  panel_tool_label: Mu,
  panel_tool_text: Eu,
  panel_tool_shape: Tu,
  panel_tool_freedraw: Lu,
  panel_replay_aria: Cu,
  panel_record_aria: Pu,
  panel_replay_title: Iu,
  panel_prompter_aria: Ou,
  panel_export_aria: Ru,
  panel_export_menu_full: Nu,
  panel_export_menu_full_meta: Du,
  panel_export_menu_lite: Bu,
  panel_export_menu_lite_meta: qu,
  panel_undo_aria: zu,
  panel_redo_aria: Fu,
  panel_settings_aria: Hu,
  panel_settings_title: Wu,
  panel_settings_voice_label: Uu,
  panel_settings_voice_auto: ju,
  panel_settings_strict_url_label: Vu,
  panel_settings_strict_url_help: Gu,
  panel_settings_close_aria: Yu,
  popup_tabs_local: Xu,
  popup_tabs_remote: Ku,
  popup_remote_coming_soon: Ju,
  popup_remote_empty_copy: Zu,
  popup_remote_add_cta: Qu,
  popup_remote_add_cta_aria: ed,
  popup_remote_refresh_all_aria: td,
  popup_remote_remove_aria: nd,
  popup_remote_add_placeholder: rd,
  popup_remote_add_submit: od,
  popup_remote_add_error_invalid: sd,
  popup_remote_add_error_empty: ad,
  popup_remote_source_never_refreshed: id,
  popup_remote_source_empty: cd,
  popup_remote_folder_empty: ld,
  popup_remote_back_aria: ud,
  popup_remote_collapse_aria: dd,
  popup_remote_expand_aria: pd,
  popup_remote_progress: hd,
  popup_remote_steps_suffix: fd,
  panel_ephemeral_warning: md,
  panel_ephemeral_import: gd,
  panel_ephemeral_bridge_fallback: bd,
  panel_ephemeral_saved: _d,
  panel_ephemeral_save_failed: yd,
  copy_formatting: vd,
  apply_this_step: xd,
  apply_all_steps: wd,
  recording_guide_title: kd,
  recording_guide_subtitle: Sd,
  recording_guide_step1_title: $d,
  recording_guide_step1_alt: Ad,
  recording_guide_step1_desc_html: Md,
  recording_guide_step2_title: Ed,
  recording_guide_step2_alt: Td,
  recording_guide_step2_desc_html: Ld,
  recorder_title: Cd,
  recorder_not_recorded: Pd,
  recorder_instruction: Id,
  recorder_share_title: Od,
  recorder_share_steps_html: Rd,
  recorder_start: Nd,
  recorder_stop: Dd,
  recorder_hint: Bd,
  recorder_status_ready: qd,
  recorder_status_recording: zd,
  recorder_status_paused: Fd,
  recorder_scenario_playing: Hd,
  recorder_scenario_paused: Wd,
  recorder_status_saved: Ud,
  recorder_warn_no_tts: jd,
  recorder_quality_label: Vd,
  recorder_quality_standard: Gd,
  recorder_quality_standard_spec: Yd,
  recorder_quality_high: Xd,
  recorder_quality_high_spec: Kd,
  recording_guide_keep_ui_label: Jd,
  recording_guide_keep_ui_hint: Zd,
  recording_guide_mic_label: Qd,
  recording_guide_mic_hint: ep,
  recording_guide_keys_info_html: tp,
  recording_guide_cancel: np,
  recording_guide_start: rp,
  recording_paused_label: op,
  recording_paused_aria: sp,
  recording_mic_failed: ap,
  step_name_placeholder: ip,
  step_desc_placeholder: cp,
  step_wand_aria: lp,
  step_wand_title: up,
  step_action_aria: dp,
  step_delete_aria: pp,
  step_timer_aria: hp,
  step_annotations_title: fp,
  step_annotation_delete_aria: mp,
  step_subs_title: gp,
  sub_same_url_required: bp,
  sub_add_aria: _p,
  sub_shift_left: yp,
  sub_shift_right: vp,
  health_layer1: xp,
  health_layer2: wp,
  health_layer3: kp,
  health_broken: Sp,
  panel_validate_aria: $p,
  validate_modal_title: Ap,
  validate_player_cross_origin_warn: Mp,
  validate_tts_autoplay_warn: Ep,
  validate_summary: Tp,
  validate_summary_running: Lp,
  validate_start: Cp,
  validate_in_progress: Pp,
  validate_complete: Ip,
  validate_checking: Op,
  validate_navigating_to: Rp,
  validate_status_pending: Np,
  validate_label_ok: Dp,
  validate_label_fallback: Bp,
  validate_label_broken: qp,
  validate_label_pending: zp,
  validate_row_go: Fp,
  validate_row_repick: Hp,
  validate_status_green: Wp,
  validate_status_yellow: Up,
  validate_status_orange: jp,
  validate_status_red: Vp,
  validate_status_skipped: Gp,
  validate_status_no_element: Yp,
  validate_no_issues: Xp,
  validate_close: Kp,
  step_link_aria: Jp,
  step_insert_aria: Zp,
  step_add_aria: Qp,
  step_empty_name: eh,
  replay_counter_aria: th,
  replay_prev_aria: nh,
  replay_pause_aria: rh,
  replay_next_aria: oh,
  replay_finish_aria: sh,
  replay_exit_aria: ah,
  replay_prompter_aria: ih,
  replay_prompter_title: ch,
  replay_move_aria: lh,
  replay_move_title: uh,
  replay_orient_aria: dh,
  replay_tts_aria: ph,
  replay_tts_title: hh,
  replay_tts_blocked_hint: fh,
  prompter_tts_blocked_hint: mh,
  replay_action_prompt: gh,
  replay_action_skip: bh,
  replay_notfound_title: _h,
  replay_notfound_body: yh,
  replay_notfound_skip: vh,
  replay_notfound_stop: xh,
  replay_url_mismatch_title: wh,
  replay_url_mismatch_body: kh,
  replay_url_mismatch_navigate: Sh,
  replay_url_mismatch_force: $h,
  replay_url_mismatch_cancel: Ah,
  prompter_now: Mh,
  prompter_next: Eh,
  prompter_steps: Th,
  prompter_step_no: Lh,
  prompter_waiting: Ch,
  prompter_playing: Ph,
  prompter_paused: Ih,
  prompter_action_step: Oh,
  prompter_prev_aria: Rh,
  prompter_pause_aria: Nh,
  prompter_next_aria: Dh,
  prompter_tts_aria: Bh,
  prompter_tts_title: qh,
  prompter_title: zh,
  permission_thumbnail_needs_host: Fh,
  toast_ambiguous_selector: Hh,
  toast_export_success: Wh,
  toast_export_failed: Uh,
  toast_no_steps: jh,
  player_handoff_unavailable: Vh
};
function Yh(e, t) {
  let n = e;
  for (let r = 0; r < t.length; r++) {
    const o = `$${r + 1}`;
    n = n.replace(new RegExp(`\\${o}`, "g"), t[r] ?? "");
  }
  return n;
}
function Xh(e) {
  return (t, n) => {
    const r = e[t];
    return r ? Yh(r.message, n) : "";
  };
}
function Kh() {
  const n = (navigator.language || "en").split("-")[0] === "ko" ? Gh : Yl, r = Xh(n);
  Ys(r);
}
const _n = "manuscript:scenario-changed", Jh = 500, x = {
  scenario: null,
  currentStepIndex: 0,
  saveTimer: null,
  ephemeral: !1,
  ephemeralSource: null
};
function Xr() {
  x.ephemeral = !1, x.ephemeralSource = null;
}
function D() {
  return x.scenario;
}
function B() {
  return x.currentStepIndex;
}
function he() {
  return x.scenario ? x.scenario.steps[x.currentStepIndex] ?? null : null;
}
function at(e) {
  return document.addEventListener(_n, e), () => document.removeEventListener(_n, e);
}
function J() {
  document.dispatchEvent(new CustomEvent(_n)), Zh();
}
function fe() {
  x.scenario && (x.scenario.updatedAt = (/* @__PURE__ */ new Date()).toISOString());
}
function Zh() {
  if (!x.scenario) return;
  if (x.ephemeral) {
    nt().setEphemeralScenario(x.scenario, x.ephemeralSource).catch((t) => {
      console.error("[manuscript] ephemeral save failed", t);
    });
    return;
  }
  x.saveTimer !== null && window.clearTimeout(x.saveTimer);
  const e = x.scenario;
  x.saveTimer = window.setTimeout(() => {
    x.saveTimer = null, nt().saveScenario(e).catch((t) => {
      console.error("[manuscript] save failed", t);
    });
  }, Jh);
}
function Kr() {
  if (x.ephemeral) {
    x.scenario && nt().setEphemeralScenario(x.scenario, x.ephemeralSource).catch((e) => {
      console.error("[manuscript] ephemeral flush save failed", e);
    });
    return;
  }
  x.saveTimer !== null && (window.clearTimeout(x.saveTimer), x.saveTimer = null, x.scenario && nt().saveScenario(x.scenario).catch((e) => {
    console.error("[manuscript] flush save failed", e);
  }));
}
const Jr = "0.1.2";
function Qh(e) {
  const t = ef(e) ?? e;
  return t.length > 14 ? `${t.slice(0, 13)}…` : t;
}
function ef(e) {
  return tf(e);
}
function tf(e) {
  const t = e.split(",")[0];
  if (!t) return null;
  const n = t.trim();
  return n && (n.startsWith('"') && n.endsWith('"') || n.startsWith("'") && n.endsWith("'") ? n.slice(1, -1) : n).trim() || null;
}
const nf = 50;
let se = [], Pe = -1, De = null, Rt = !1;
function Zr(e) {
  return typeof structuredClone == "function" ? structuredClone(e) : JSON.parse(JSON.stringify(e));
}
function Qr() {
  var t;
  const e = D();
  return e ? ((t = e.steps[B()]) == null ? void 0 : t.id) ?? null : null;
}
function rf() {
  const e = D();
  if (!e) return;
  const t = se[Pe];
  Pe >= 0 && t && JSON.stringify(t.scenario) === JSON.stringify(e) || (se.length = Pe + 1, se.push({ scenario: Zr(e), stepId: Qr() }), se.length > nf && se.shift(), Pe = se.length - 1);
}
function eo() {
  De = null, Rt = !1;
  const e = D();
  if (!e) {
    se = [], Pe = -1;
    return;
  }
  se = [{ scenario: Zr(e), stepId: Qr() }], Pe = 0;
}
function Nt(e) {
  De !== null && De !== e && it(), De = e, Rt = !1;
}
function it() {
  De !== null && (De = null, Rt && (Rt = !1, rf()));
}
function of(e, t) {
  Kr(), x.scenario = e, x.currentStepIndex = 0, Xr(), J(), eo();
}
function sf() {
  const e = x.ephemeral;
  Kr(), x.scenario = null, x.currentStepIndex = 0, Xr(), e && nt().clearEphemeralScenario(), J(), eo();
}
function Lb(e) {
  const t = he();
  if (!t || !x.scenario) return;
  const r = { ...t.spotlight ?? {}, ...e };
  for (const o of Object.keys(r))
    r[o] === void 0 && delete r[o];
  Object.keys(r).length === 0 ? delete t.spotlight : t.spotlight = r, fe(), J();
}
function Yt(e) {
  x.scenario && (e < 0 || e >= x.scenario.steps.length || e !== x.currentStepIndex && (x.currentStepIndex = e, J()));
}
function Cb(e) {
  if (!x.scenario) return;
  const t = { ...e };
  for (const r of Object.keys(t))
    t[r] === void 0 && delete t[r];
  const n = Object.keys(t).length === 0;
  for (const r of x.scenario.steps)
    n ? delete r.spotlight : r.spotlight = { ...t };
  fe(), J();
}
function to(e) {
  const t = he();
  !t || !x.scenario || (t.annotations = t.annotations.filter((n) => n.id !== e), fe(), J());
}
function T(e, t) {
  const n = he();
  !n || !x.scenario || (n.annotations = n.annotations.map(
    (r) => r.id === e ? { ...r, ...t } : r
  ), fe(), J());
}
function no() {
  var e;
  return ((e = he()) == null ? void 0 : e.annotations) ?? [];
}
function E(e) {
  return no().find((t) => t.id === e);
}
function af(e, t) {
  const n = he();
  !n || !x.scenario || (n.annotations = n.annotations.map(
    (r) => r.kind === e ? { ...r, ...t } : r
  ), fe(), J());
}
function cf(e, t) {
  if (x.scenario) {
    for (const n of x.scenario.steps)
      n.annotations = n.annotations.map(
        (r) => r.kind === e ? { ...r, ...t } : r
      );
    fe(), J();
  }
}
function lf(e, t) {
  if (!x.scenario) return;
  const n = t.trim();
  if (!n) return;
  const r = x.scenario.customColors ?? {}, o = r[e] ?? [];
  o.includes(n) || (x.scenario.customColors = {
    ...r,
    [e]: [...o, n]
  }, fe(), J());
}
function uf(e, t) {
  if (!x.scenario || !x.scenario.customColors) return;
  const n = x.scenario.customColors[e];
  !n || !n.includes(t) || (x.scenario.customColors = {
    ...x.scenario.customColors,
    [e]: n.filter((r) => r !== t)
  }, fe(), J());
}
const yn = "manuscript:mode-changed";
let $t = "idle";
function ro() {
  return $t;
}
function oo(e) {
  if (e === $t) return;
  const t = $t;
  $t = e, document.dispatchEvent(
    new CustomEvent(yn, {
      detail: { prev: t, next: e }
    })
  );
}
function so(e) {
  const t = (n) => e(n.detail);
  return document.addEventListener(yn, t), () => document.removeEventListener(yn, t);
}
const ao = 5e3, df = 3e3, H = {
  scenarios: "manuscript.scenarios",
  lastEdited: "manuscript.lastEdited",
  settings: "manuscript.settings",
  popupMode: "manuscript.popupMode",
  detachedWindowId: "manuscript.detachedWindowId",
  /** Cross-page replay state. action step에서 페이지 navigate된 후 새 content
   * script init이 이 키를 읽어 replay를 이어간다. */
  activeReplay: "manuscript.activeReplay",
  /** Replay controls 가로/세로 orientation. 사용자 토글 후 다음 replay에도 유지. */
  replayControlsOrientation: "manuscript.replayControlsOrientation",
  /**
   * Replay controls pill의 화면 좌표 {left, top} px. 사용자가 드래그로
   * 옮긴 위치를 cross-page navigation 후에도 복원하려고 보관. 미설정
   * 이면 기본 위치(하단 가운데)로 mount.
   */
  replayControlsPosition: "manuscript.replayControlsPosition",
  /**
   * Tab-scoped one-shot panel flag for cross-page navigation. When the
   * user clicks a step-card link icon, panel-navigation writes
   * `{ [tabId]: { scenarioId, stepIndex } }` here and navigates. The
   * next content-script init in the SAME tab consumes (read + remove)
   * the entry and mounts the panel at the saved step. Other tabs see no
   * entry for their tabId and stay quiet.
   */
  pendingPanelByTab: "manuscript.pendingPanelByTab",
  /**
   * Tab-scoped sticky panel state — set when the panel mounts in a tab,
   * cleared when the user presses × in that tab (or the tab closes).
   * Value is `{ [tabId]: scenarioId }`. The content script on the next
   * page in the SAME tab re-mounts the panel; siblings' tabs do nothing.
   * Replaces the prior global `activePanelScenarioId` which leaked the
   * panel to every newly opened tab.
   */
  activePanelByTab: "manuscript.activePanelByTab",
  /**
   * Annotation Ctrl+C clipboard. 페이지 이동 후에도 Ctrl+V가 동작하도록
   * 마지막 copy된 annotation을 영속화. content script init이 읽어 in-memory
   * cache로 복원. 다음 copy로 덮어쓰기 전까지 유지.
   */
  annotationClipboard: "manuscript.annotationClipboard",
  /**
   * Presenter prompter — chrome.windows.create로 띄운 별도 popup window가
   * 표시할 state. content script가 syncControls 시점에 write,
   * popup이 chrome.storage.onChanged로 받아 갱신.
   */
  prompterState: "manuscript.prompterState",
  /**
   * Presenter prompter command bus. Popup이 버튼 클릭으로 명령을 여기에
   * write하면, content script가 onChanged로 받아 처리한 뒤 키를 비운다.
   */
  prompterCommand: "manuscript.prompterCommand",
  /**
   * Prompter chrome window id — background가 관리. content script가 close
   * 요청을 보낼 때 background가 이 id로 chrome.windows.remove.
   */
  prompterWindowId: "manuscript.prompterWindowId",
  /**
   * Prompter window 안 tab의 id. windowId 만으로는 chrome 이 id 를 재사용해
   * 일반 창과 collision 하는 케이스를 거를 수 없어서 함께 저장한다.
   * 검증 시 chrome.tabs.get(prompterTabId) 가 alive 하고 그 tab.windowId 가
   * prompterWindowId 와 일치하는지 확인 — tab.url 은 host_permissions 가
   * 없으면 비어 있어 검증 자료로 못 쓰기 때문에 id 기반으로 한다.
   */
  prompterTabId: "manuscript.prompterTabId",
  /**
   * Prompter popup이 명령을 relay할 대상 content tab id. 사용자가 prompter를
   * 연 시점의 sender.tab.id가 저장됨. popup → background → 이 tab으로
   * chrome.tabs.sendMessage로 forward.
   */
  prompterClientTabId: "manuscript.prompterClientTabId",
  /**
   * TTS narration toggle — controls bar 와 prompter 의 스피커 아이콘이
   * 공유. true 면 step 진입 시 description 을 SpeechSynthesisUtterance 로
   * 읽고, 그 utterance 가 끝난 뒤에 (그리고 step.autoAdvanceMs 가 지난 뒤에)
   * 다음 step 으로 진행. 두 쪽 UI 모두 chrome.storage.onChanged 로 동기화.
   */
  ttsEnabled: "manuscript.ttsEnabled",
  /**
   * User-picked voice name. null/missing → tts.ts auto-picks
   * (Google-prefixed locale voice first, then any locale match, then
   * browser default). Set via prompter's voice dropdown.
   */
  ttsVoiceName: "manuscript.ttsVoiceName",
  /**
   * Transient flag: true while a narration utterance is blocked by the
   * browser autoplay policy ('not-allowed' on a document with no user
   * activation — typically a script-driven cross-origin player resume).
   * The speaking context (content/player) sets it; the controls pill reads
   * the in-memory signal directly, and the detached prompter window reads
   * this key via storage so it can show the "click to enable sound" hint
   * too. Cleared the moment narration starts, stops, or pauses.
   */
  ttsBlocked: "manuscript.ttsBlocked",
  /**
   * Active design-tokens palette. One of the IDs declared in
   * src/styles/tokens.css. Defaults to 'studio' when unset. Toggle
   * lives in the popup header and the floating-panel header (left of
   * the × close button). Subscribed via design-tokens.ts so every
   * shadow host re-applies the new palette live.
   */
  palette: "manuscript.palette",
  /**
   * Remote-library sources + per-source catalog cache. Phase 3.3 of
   * docs/15.REMOTE-LIBRARY-PLAN.md. Single object:
   *   { sources: [...], catalogs: { [sourceId]: { items, lastRefreshed } } }
   * Combined storage so add/remove updates stay atomic and a stray catalog
   * entry can't outlive its source.
   */
  remoteLibrary: "manuscript.remoteLibrary",
  /**
   * Per-source collapsed state in the popup Remote tab. Map of
   * { [sourceId]: true } — only collapsed entries are stored so the
   * default (expanded) doesn't accumulate stale keys after a source
   * is removed. Persisted so users with several repos don't re-collapse
   * on every popup open.
   */
  remoteCollapsed: "manuscript.remoteCollapsed",
  /**
   * Ephemeral scenario slot — single in-flight scenario that must NOT be
   * persisted to the user's `scenarios[]` library. Used by:
   *   - web-bridge: host-page-launched plays (fixes the bug where
   *     bridge-loaded scenarios leaked into the popup's saved list)
   *   - remote library: GitHub-fetched plays (Q5, docs/15.REMOTE-LIBRARY-PLAN.md)
   * The slot survives cross-page navigation so resume works.
   * Cleared on endScenario / replay exit / panel × close.
   */
  ephemeralScenario: "manuscript.ephemeralScenario",
  /**
   * Cross-page selector validation session (v0.4.0). When the author
   * clicks the validate button on a scenario whose steps span multiple
   * URLs, we walk the URL groups one at a time. Between pages the
   * session lives here so the next page's content script can re-open
   * the modal and continue. Cleared once the modal is closed (or after
   * a stale-session timeout on read).
   */
  validationSession: "manuscript.validationSession",
  /**
   * Recording-active flag (window-capture path). Set by the content
   * coordinator between 'recording.armed' and 'recording.ended' so a
   * cross-page navigation re-enters recording mode. Background also clears
   * it when the recorder window is closed, so an orphaned flag can't leave a
   * refreshed tab stuck in recording mode. See src/content/recording/recording.ts.
   */
  recordingActive: "manuscript.recordingActive",
  /**
   * Recorder chrome window id — background tracks it (set on 'recording.open')
   * so chrome.windows.onRemoved can detect the user closing the recorder
   * window and tell the demo tab to leave recording mode.
   */
  recorderWindowId: "manuscript.recorderWindowId",
  /** Demo tab the recorder window is recording — notified on recorder close. */
  recorderClientTabId: "manuscript.recorderClientTabId",
  /**
   * Set when the recorder navigates the demo tab to the scenario's starting
   * page before capture. The freshly-loaded content script sees it, clears
   * it, and emits 'recording.pageReady' so the recorder can start cleanly
   * (the navigation itself stays out of the video).
   */
  recordingPendingArm: "manuscript.recordingPendingArm",
  /**
   * Pre-recording demo-window state ({windowId, state}). The recorder
   * fullscreens the demo window during capture; this stashes the prior
   * state so exitDemoFullscreen can restore it (never back to fullscreen).
   * Set by recording-lifecycle.enterDemoFullscreen, cleared on exit.
   */
  recPrevWindowState: "manuscript.recPrevWindowState"
}, te = 2147483e3, oe = "http://www.w3.org/2000/svg", ir = "manuscript-spotlight-mask", pf = "oklch(0.42 0.09 250)", hf = 3, ff = "rgb(0, 0, 0)", mf = 0.55, Ke = 14;
let ke = null, W = null, z = null, q = null, I = null, ne = null, Je = 0, vn = [], Ie = null;
function io(e) {
  Je++, ke = e, W || yf(), wn(), He(), co(e), Ie || (Ie = at(wn));
}
function xn() {
  Je++, ke = null, lo(), Ie == null || Ie(), Ie = null, W && (W.remove(), W = null, z = null, q = null, I = null, ne = null);
}
function gf(e, t = {}) {
  var a;
  const n = t.durationMs ?? 300;
  if (!ke || !W || n <= 0) {
    io(e), (a = t.onDone) == null || a.call(t);
    return;
  }
  const r = bf();
  Je++;
  const o = Je;
  ke = e, wn(), co(e);
  const s = performance.now();
  function i(c) {
    var d;
    if (o !== Je) return;
    const l = Math.min(1, (c - s) / n), u = _f(l), h = uo(e);
    po({
      x: gt(r.x, h.x, u),
      y: gt(r.y, h.y, u),
      width: gt(r.width, h.width, u),
      height: gt(r.height, h.height, u)
    }), l < 1 ? requestAnimationFrame(i) : (He(), (d = t.onDone) == null || d.call(t));
  }
  requestAnimationFrame(i);
}
function bf() {
  if (!z) return { x: 0, y: 0, width: 0, height: 0 };
  const e = 4, t = Number(z.getAttribute("x") ?? 0) + e, n = Number(z.getAttribute("y") ?? 0) + e, r = Number(z.getAttribute("width") ?? 0) - e * 2, o = Number(z.getAttribute("height") ?? 0) - e * 2;
  return { x: t, y: n, width: r, height: o };
}
function gt(e, t, n) {
  return e + (t - e) * n;
}
function _f(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function co(e) {
  var n;
  lo();
  const t = [window];
  try {
    const r = (n = e.ownerDocument) == null ? void 0 : n.defaultView;
    r && r !== window && t.push(r);
  } catch {
  }
  for (const r of t) {
    const o = He;
    r.addEventListener("scroll", o, !0), vn.push({ target: r, remove: () => r.removeEventListener("scroll", o, !0) });
  }
  window.addEventListener("resize", He);
}
function lo() {
  for (const e of vn) e.remove();
  vn = [], window.removeEventListener("resize", He);
}
function yf() {
  W = document.createElementNS(oe, "svg"), W.setAttribute("data-manuscript", "ui"), W.style.cssText = [
    "position: fixed",
    "top: 0",
    "left: 0",
    "width: 100vw",
    "height: 100vh",
    // svg 전체는 클릭 통과 — ringRect만 pointer-events: stroke 로 활성화.
    "pointer-events: none",
    `z-index: ${te}`
  ].join("; "), W.setAttribute("width", "100%"), W.setAttribute("height", "100%");
  const e = document.createElementNS(oe, "defs"), t = document.createElementNS(oe, "mask");
  t.setAttribute("id", ir);
  const n = document.createElementNS(oe, "rect");
  n.setAttribute("width", "100%"), n.setAttribute("height", "100%"), n.setAttribute("fill", "white"), t.appendChild(n), z = document.createElementNS(oe, "rect"), z.setAttribute("fill", "black"), z.setAttribute("rx", "4"), z.setAttribute("ry", "4"), t.appendChild(z), e.appendChild(t), W.appendChild(e), ne = document.createElementNS(oe, "rect"), ne.setAttribute("width", "100%"), ne.setAttribute("height", "100%"), ne.setAttribute("mask", `url(#${ir})`), W.appendChild(ne), q = document.createElementNS(oe, "rect"), q.setAttribute("fill", "none"), q.setAttribute("rx", "4"), q.setAttribute("ry", "4"), q.style.pointerEvents = "none", W.appendChild(q), I = document.createElementNS(oe, "rect"), I.setAttribute("fill", "none"), I.setAttribute("stroke", "transparent"), I.setAttribute("stroke-width", String(Ke)), I.setAttribute("rx", "4"), I.setAttribute("ry", "4"), I.setAttribute("pointer-events", "stroke"), I.style.cursor = "pointer", I.addEventListener("click", vf), W.appendChild(I), document.body.appendChild(W);
}
function wn() {
  var s;
  if (!q || !ne) return;
  const e = ((s = he()) == null ? void 0 : s.spotlight) ?? {}, t = e.stroke ?? pf, n = e.strokeWidth ?? hf, r = e.dimColor ?? ff, o = e.dimOpacity ?? mf;
  q.setAttribute("stroke", t), q.setAttribute("stroke-width", String(n)), ne.setAttribute("fill", r), ne.setAttribute("fill-opacity", String(Math.max(0, Math.min(1, o)))), He();
}
function vf(e) {
  ro() !== "replay" && (!ke || !I || (e.stopPropagation(), e.preventDefault(), import("./spotlight-editor.js").then((t) => {
    I && t.openSpotlightEditor(I);
  })));
}
function He() {
  ke && po(uo(ke));
}
function uo(e) {
  const t = e.getBoundingClientRect(), n = xf(e);
  return {
    x: t.left + n.x,
    y: t.top + n.y,
    width: t.width,
    height: t.height
  };
}
function po(e) {
  if (!z || !q || !I) return;
  const t = 4, n = e.x - t, r = e.y - t, o = e.width + t * 2, s = e.height + t * 2;
  z.setAttribute("x", String(n)), z.setAttribute("y", String(r)), z.setAttribute("width", String(o)), z.setAttribute("height", String(s));
  const i = Math.max(0, Number(q.getAttribute("stroke-width") ?? 0)), a = n - i / 2, c = r - i / 2, l = o + i, u = s + i;
  q.setAttribute("x", String(a)), q.setAttribute("y", String(c)), q.setAttribute("width", String(l)), q.setAttribute("height", String(u));
  const h = a - Ke / 2, d = c - Ke / 2, p = l + Ke, f = u + Ke;
  I.setAttribute("x", String(h)), I.setAttribute("y", String(d)), I.setAttribute("width", String(p)), I.setAttribute("height", String(f));
}
function xf(e) {
  try {
    const t = e.ownerDocument, n = t == null ? void 0 : t.defaultView;
    if (!n || n === window) return { x: 0, y: 0 };
    const r = n.frameElement;
    if (!r) return { x: 0, y: 0 };
    const o = r.getBoundingClientRect();
    return { x: o.left, y: o.top };
  } catch {
    return { x: 0, y: 0 };
  }
}
function an(e, t, n) {
  if (e && e.length) {
    const [r, o] = t, s = Math.PI / 180 * n, i = Math.cos(s), a = Math.sin(s);
    for (const c of e) {
      const [l, u] = c;
      c[0] = (l - r) * i - (u - o) * a + r, c[1] = (l - r) * a + (u - o) * i + o;
    }
  }
}
function wf(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function kf(e, t, n, r = 1) {
  const o = n, s = Math.max(t, 0.1), i = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, a = [0, 0];
  if (o) for (const l of i) an(l, a, o);
  const c = (function(l, u, h) {
    const d = [];
    for (const b of l) {
      const k = [...b];
      wf(k[0], k[k.length - 1]) || k.push([k[0][0], k[0][1]]), k.length > 2 && d.push(k);
    }
    const p = [];
    u = Math.max(u, 0.1);
    const f = [];
    for (const b of d) for (let k = 0; k < b.length - 1; k++) {
      const R = b[k], P = b[k + 1];
      if (R[1] !== P[1]) {
        const L = Math.min(R[1], P[1]);
        f.push({ ymin: L, ymax: Math.max(R[1], P[1]), x: L === R[1] ? R[0] : P[0], islope: (P[0] - R[0]) / (P[1] - R[1]) });
      }
    }
    if (f.sort(((b, k) => b.ymin < k.ymin ? -1 : b.ymin > k.ymin ? 1 : b.x < k.x ? -1 : b.x > k.x ? 1 : b.ymax === k.ymax ? 0 : (b.ymax - k.ymax) / Math.abs(b.ymax - k.ymax))), !f.length) return p;
    let m = [], g = f[0].ymin, _ = 0;
    for (; m.length || f.length; ) {
      if (f.length) {
        let b = -1;
        for (let k = 0; k < f.length && !(f[k].ymin > g); k++) b = k;
        f.splice(0, b + 1).forEach(((k) => {
          m.push({ s: g, edge: k });
        }));
      }
      if (m = m.filter(((b) => !(b.edge.ymax <= g))), m.sort(((b, k) => b.edge.x === k.edge.x ? 0 : (b.edge.x - k.edge.x) / Math.abs(b.edge.x - k.edge.x))), (h !== 1 || _ % u == 0) && m.length > 1) for (let b = 0; b < m.length; b += 2) {
        const k = b + 1;
        if (k >= m.length) break;
        const R = m[b].edge, P = m[k].edge;
        p.push([[Math.round(R.x), g], [Math.round(P.x), g]]);
      }
      g += h, m.forEach(((b) => {
        b.edge.x = b.edge.x + h * b.edge.islope;
      })), _++;
    }
    return p;
  })(i, s, r);
  if (o) {
    for (const l of i) an(l, a, -o);
    (function(l, u, h) {
      const d = [];
      l.forEach(((p) => d.push(...p))), an(d, u, h);
    })(c, a, -o);
  }
  return c;
}
function ct(e, t) {
  var n;
  const r = t.hachureAngle + 90;
  let o = t.hachureGap;
  o < 0 && (o = 4 * t.strokeWidth), o = Math.round(Math.max(o, 0.1));
  let s = 1;
  return t.roughness >= 1 && (((n = t.randomizer) === null || n === void 0 ? void 0 : n.next()) || Math.random()) > 0.7 && (s = o), kf(e, o, r, s || 1);
}
class Fn {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    return this._fillPolygons(t, n);
  }
  _fillPolygons(t, n) {
    const r = ct(t, n);
    return { type: "fillSketch", ops: this.renderLines(r, n) };
  }
  renderLines(t, n) {
    const r = [];
    for (const o of t) r.push(...this.helper.doubleLineOps(o[0][0], o[0][1], o[1][0], o[1][1], n));
    return r;
  }
}
function Xt(e) {
  const t = e[0], n = e[1];
  return Math.sqrt(Math.pow(t[0] - n[0], 2) + Math.pow(t[1] - n[1], 2));
}
let Sf = class extends Fn {
  fillPolygons(t, n) {
    let r = n.hachureGap;
    r < 0 && (r = 4 * n.strokeWidth), r = Math.max(r, 0.1);
    const o = ct(t, Object.assign({}, n, { hachureGap: r })), s = Math.PI / 180 * n.hachureAngle, i = [], a = 0.5 * r * Math.cos(s), c = 0.5 * r * Math.sin(s);
    for (const [l, u] of o) Xt([l, u]) && i.push([[l[0] - a, l[1] + c], [...u]], [[l[0] + a, l[1] - c], [...u]]);
    return { type: "fillSketch", ops: this.renderLines(i, n) };
  }
};
class $f extends Fn {
  fillPolygons(t, n) {
    const r = this._fillPolygons(t, n), o = Object.assign({}, n, { hachureAngle: n.hachureAngle + 90 }), s = this._fillPolygons(t, o);
    return r.ops = r.ops.concat(s.ops), r;
  }
}
class Af {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    const r = ct(t, n = Object.assign({}, n, { hachureAngle: 0 }));
    return this.dotsOnLines(r, n);
  }
  dotsOnLines(t, n) {
    const r = [];
    let o = n.hachureGap;
    o < 0 && (o = 4 * n.strokeWidth), o = Math.max(o, 0.1);
    let s = n.fillWeight;
    s < 0 && (s = n.strokeWidth / 2);
    const i = o / 4;
    for (const a of t) {
      const c = Xt(a), l = c / o, u = Math.ceil(l) - 1, h = c - u * o, d = (a[0][0] + a[1][0]) / 2 - o / 4, p = Math.min(a[0][1], a[1][1]);
      for (let f = 0; f < u; f++) {
        const m = p + h + f * o, g = d - i + 2 * Math.random() * i, _ = m - i + 2 * Math.random() * i, b = this.helper.ellipse(g, _, s, s, n);
        r.push(...b.ops);
      }
    }
    return { type: "fillSketch", ops: r };
  }
}
class Mf {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    const r = ct(t, n);
    return { type: "fillSketch", ops: this.dashedLine(r, n) };
  }
  dashedLine(t, n) {
    const r = n.dashOffset < 0 ? n.hachureGap < 0 ? 4 * n.strokeWidth : n.hachureGap : n.dashOffset, o = n.dashGap < 0 ? n.hachureGap < 0 ? 4 * n.strokeWidth : n.hachureGap : n.dashGap, s = [];
    return t.forEach(((i) => {
      const a = Xt(i), c = Math.floor(a / (r + o)), l = (a + o - c * (r + o)) / 2;
      let u = i[0], h = i[1];
      u[0] > h[0] && (u = i[1], h = i[0]);
      const d = Math.atan((h[1] - u[1]) / (h[0] - u[0]));
      for (let p = 0; p < c; p++) {
        const f = p * (r + o), m = f + r, g = [u[0] + f * Math.cos(d) + l * Math.cos(d), u[1] + f * Math.sin(d) + l * Math.sin(d)], _ = [u[0] + m * Math.cos(d) + l * Math.cos(d), u[1] + m * Math.sin(d) + l * Math.sin(d)];
        s.push(...this.helper.doubleLineOps(g[0], g[1], _[0], _[1], n));
      }
    })), s;
  }
}
class Ef {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, n) {
    const r = n.hachureGap < 0 ? 4 * n.strokeWidth : n.hachureGap, o = n.zigzagOffset < 0 ? r : n.zigzagOffset, s = ct(t, n = Object.assign({}, n, { hachureGap: r + o }));
    return { type: "fillSketch", ops: this.zigzagLines(s, o, n) };
  }
  zigzagLines(t, n, r) {
    const o = [];
    return t.forEach(((s) => {
      const i = Xt(s), a = Math.round(i / (2 * n));
      let c = s[0], l = s[1];
      c[0] > l[0] && (c = s[1], l = s[0]);
      const u = Math.atan((l[1] - c[1]) / (l[0] - c[0]));
      for (let h = 0; h < a; h++) {
        const d = 2 * h * n, p = 2 * (h + 1) * n, f = Math.sqrt(2 * Math.pow(n, 2)), m = [c[0] + d * Math.cos(u), c[1] + d * Math.sin(u)], g = [c[0] + p * Math.cos(u), c[1] + p * Math.sin(u)], _ = [m[0] + f * Math.cos(u + Math.PI / 4), m[1] + f * Math.sin(u + Math.PI / 4)];
        o.push(...this.helper.doubleLineOps(m[0], m[1], _[0], _[1], r), ...this.helper.doubleLineOps(_[0], _[1], g[0], g[1], r));
      }
    })), o;
  }
}
const j = {};
class Tf {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const Lf = 0, cn = 1, cr = 2, bt = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function ln(e, t) {
  return e.type === t;
}
function Hn(e) {
  const t = [], n = (function(i) {
    const a = new Array();
    for (; i !== ""; ) if (i.match(/^([ \t\r\n,]+)/)) i = i.substr(RegExp.$1.length);
    else if (i.match(/^([aAcChHlLmMqQsStTvVzZ])/)) a[a.length] = { type: Lf, text: RegExp.$1 }, i = i.substr(RegExp.$1.length);
    else {
      if (!i.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      a[a.length] = { type: cn, text: `${parseFloat(RegExp.$1)}` }, i = i.substr(RegExp.$1.length);
    }
    return a[a.length] = { type: cr, text: "" }, a;
  })(e);
  let r = "BOD", o = 0, s = n[o];
  for (; !ln(s, cr); ) {
    let i = 0;
    const a = [];
    if (r === "BOD") {
      if (s.text !== "M" && s.text !== "m") return Hn("M0,0" + e);
      o++, i = bt[s.text], r = s.text;
    } else ln(s, cn) ? i = bt[r] : (o++, i = bt[s.text], r = s.text);
    if (!(o + i < n.length)) throw new Error("Path data ended short");
    for (let c = o; c < o + i; c++) {
      const l = n[c];
      if (!ln(l, cn)) throw new Error("Param not a number: " + r + "," + l.text);
      a[a.length] = +l.text;
    }
    if (typeof bt[r] != "number") throw new Error("Bad segment: " + r);
    {
      const c = { key: r, data: a };
      t.push(c), o += i, s = n[o], r === "M" && (r = "L"), r === "m" && (r = "l");
    }
  }
  return t;
}
function ho(e) {
  let t = 0, n = 0, r = 0, o = 0;
  const s = [];
  for (const { key: i, data: a } of e) switch (i) {
    case "M":
      s.push({ key: "M", data: [...a] }), [t, n] = a, [r, o] = a;
      break;
    case "m":
      t += a[0], n += a[1], s.push({ key: "M", data: [t, n] }), r = t, o = n;
      break;
    case "L":
      s.push({ key: "L", data: [...a] }), [t, n] = a;
      break;
    case "l":
      t += a[0], n += a[1], s.push({ key: "L", data: [t, n] });
      break;
    case "C":
      s.push({ key: "C", data: [...a] }), t = a[4], n = a[5];
      break;
    case "c": {
      const c = a.map(((l, u) => u % 2 ? l + n : l + t));
      s.push({ key: "C", data: c }), t = c[4], n = c[5];
      break;
    }
    case "Q":
      s.push({ key: "Q", data: [...a] }), t = a[2], n = a[3];
      break;
    case "q": {
      const c = a.map(((l, u) => u % 2 ? l + n : l + t));
      s.push({ key: "Q", data: c }), t = c[2], n = c[3];
      break;
    }
    case "A":
      s.push({ key: "A", data: [...a] }), t = a[5], n = a[6];
      break;
    case "a":
      t += a[5], n += a[6], s.push({ key: "A", data: [a[0], a[1], a[2], a[3], a[4], t, n] });
      break;
    case "H":
      s.push({ key: "H", data: [...a] }), t = a[0];
      break;
    case "h":
      t += a[0], s.push({ key: "H", data: [t] });
      break;
    case "V":
      s.push({ key: "V", data: [...a] }), n = a[0];
      break;
    case "v":
      n += a[0], s.push({ key: "V", data: [n] });
      break;
    case "S":
      s.push({ key: "S", data: [...a] }), t = a[2], n = a[3];
      break;
    case "s": {
      const c = a.map(((l, u) => u % 2 ? l + n : l + t));
      s.push({ key: "S", data: c }), t = c[2], n = c[3];
      break;
    }
    case "T":
      s.push({ key: "T", data: [...a] }), t = a[0], n = a[1];
      break;
    case "t":
      t += a[0], n += a[1], s.push({ key: "T", data: [t, n] });
      break;
    case "Z":
    case "z":
      s.push({ key: "Z", data: [] }), t = r, n = o;
  }
  return s;
}
function fo(e) {
  const t = [];
  let n = "", r = 0, o = 0, s = 0, i = 0, a = 0, c = 0;
  for (const { key: l, data: u } of e) {
    switch (l) {
      case "M":
        t.push({ key: "M", data: [...u] }), [r, o] = u, [s, i] = u;
        break;
      case "C":
        t.push({ key: "C", data: [...u] }), r = u[4], o = u[5], a = u[2], c = u[3];
        break;
      case "L":
        t.push({ key: "L", data: [...u] }), [r, o] = u;
        break;
      case "H":
        r = u[0], t.push({ key: "L", data: [r, o] });
        break;
      case "V":
        o = u[0], t.push({ key: "L", data: [r, o] });
        break;
      case "S": {
        let h = 0, d = 0;
        n === "C" || n === "S" ? (h = r + (r - a), d = o + (o - c)) : (h = r, d = o), t.push({ key: "C", data: [h, d, ...u] }), a = u[0], c = u[1], r = u[2], o = u[3];
        break;
      }
      case "T": {
        const [h, d] = u;
        let p = 0, f = 0;
        n === "Q" || n === "T" ? (p = r + (r - a), f = o + (o - c)) : (p = r, f = o);
        const m = r + 2 * (p - r) / 3, g = o + 2 * (f - o) / 3, _ = h + 2 * (p - h) / 3, b = d + 2 * (f - d) / 3;
        t.push({ key: "C", data: [m, g, _, b, h, d] }), a = p, c = f, r = h, o = d;
        break;
      }
      case "Q": {
        const [h, d, p, f] = u, m = r + 2 * (h - r) / 3, g = o + 2 * (d - o) / 3, _ = p + 2 * (h - p) / 3, b = f + 2 * (d - f) / 3;
        t.push({ key: "C", data: [m, g, _, b, p, f] }), a = h, c = d, r = p, o = f;
        break;
      }
      case "A": {
        const h = Math.abs(u[0]), d = Math.abs(u[1]), p = u[2], f = u[3], m = u[4], g = u[5], _ = u[6];
        h === 0 || d === 0 ? (t.push({ key: "C", data: [r, o, g, _, g, _] }), r = g, o = _) : (r !== g || o !== _) && (mo(r, o, g, _, h, d, p, f, m).forEach((function(b) {
          t.push({ key: "C", data: b });
        })), r = g, o = _);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), r = s, o = i;
    }
    n = l;
  }
  return t;
}
function Ye(e, t, n) {
  return [e * Math.cos(n) - t * Math.sin(n), e * Math.sin(n) + t * Math.cos(n)];
}
function mo(e, t, n, r, o, s, i, a, c, l) {
  const u = (h = i, Math.PI * h / 180);
  var h;
  let d = [], p = 0, f = 0, m = 0, g = 0;
  if (l) [p, f, m, g] = l;
  else {
    [e, t] = Ye(e, t, -u), [n, r] = Ye(n, r, -u);
    const Y = (e - n) / 2, N = (t - r) / 2;
    let ee = Y * Y / (o * o) + N * N / (s * s);
    ee > 1 && (ee = Math.sqrt(ee), o *= ee, s *= ee);
    const Ee = o * o, Te = s * s, Ls = Ee * Te - Ee * N * N - Te * Y * Y, Cs = Ee * N * N + Te * Y * Y, sr = (a === c ? -1 : 1) * Math.sqrt(Math.abs(Ls / Cs));
    m = sr * o * N / s + (e + n) / 2, g = sr * -s * Y / o + (t + r) / 2, p = Math.asin(parseFloat(((t - g) / s).toFixed(9))), f = Math.asin(parseFloat(((r - g) / s).toFixed(9))), e < m && (p = Math.PI - p), n < m && (f = Math.PI - f), p < 0 && (p = 2 * Math.PI + p), f < 0 && (f = 2 * Math.PI + f), c && p > f && (p -= 2 * Math.PI), !c && f > p && (f -= 2 * Math.PI);
  }
  let _ = f - p;
  if (Math.abs(_) > 120 * Math.PI / 180) {
    const Y = f, N = n, ee = r;
    f = c && f > p ? p + 120 * Math.PI / 180 * 1 : p + 120 * Math.PI / 180 * -1, d = mo(n = m + o * Math.cos(f), r = g + s * Math.sin(f), N, ee, o, s, i, 0, c, [f, Y, m, g]);
  }
  _ = f - p;
  const b = Math.cos(p), k = Math.sin(p), R = Math.cos(f), P = Math.sin(f), L = Math.tan(_ / 4), G = 4 / 3 * o * L, Q = 4 / 3 * s * L, mt = [e, t], X = [e + G * k, t - Q * b], me = [n + G * P, r - Q * R], or = [n, r];
  if (X[0] = 2 * mt[0] - X[0], X[1] = 2 * mt[1] - X[1], l) return [X, me, or].concat(d);
  {
    d = [X, me, or].concat(d);
    const Y = [];
    for (let N = 0; N < d.length; N += 3) {
      const ee = Ye(d[N][0], d[N][1], u), Ee = Ye(d[N + 1][0], d[N + 1][1], u), Te = Ye(d[N + 2][0], d[N + 2][1], u);
      Y.push([ee[0], ee[1], Ee[0], Ee[1], Te[0], Te[1]]);
    }
    return Y;
  }
}
const Cf = { randOffset: function(e, t) {
  return w(e, t);
}, randOffsetWithRange: function(e, t, n) {
  return Dt(e, t, n);
}, ellipse: function(e, t, n, r, o) {
  const s = bo(n, r, o);
  return kn(e, t, o, s).opset;
}, doubleLineOps: function(e, t, n, r, o) {
  return pe(e, t, n, r, o, !0);
} };
function go(e, t, n, r, o) {
  return { type: "path", ops: pe(e, t, n, r, o) };
}
function At(e, t, n) {
  const r = (e || []).length;
  if (r > 2) {
    const o = [];
    for (let s = 0; s < r - 1; s++) o.push(...pe(e[s][0], e[s][1], e[s + 1][0], e[s + 1][1], n));
    return t && o.push(...pe(e[r - 1][0], e[r - 1][1], e[0][0], e[0][1], n)), { type: "path", ops: o };
  }
  return r === 2 ? go(e[0][0], e[0][1], e[1][0], e[1][1], n) : { type: "path", ops: [] };
}
function Pf(e, t, n, r, o) {
  return (function(s, i) {
    return At(s, !0, i);
  })([[e, t], [e + n, t], [e + n, t + r], [e, t + r]], o);
}
function lr(e, t) {
  if (e.length) {
    const n = typeof e[0][0] == "number" ? [e] : e, r = _t(n[0], 1 * (1 + 0.2 * t.roughness), t), o = t.disableMultiStroke ? [] : _t(n[0], 1.5 * (1 + 0.22 * t.roughness), pr(t));
    for (let s = 1; s < n.length; s++) {
      const i = n[s];
      if (i.length) {
        const a = _t(i, 1 * (1 + 0.2 * t.roughness), t), c = t.disableMultiStroke ? [] : _t(i, 1.5 * (1 + 0.22 * t.roughness), pr(t));
        for (const l of a) l.op !== "move" && r.push(l);
        for (const l of c) l.op !== "move" && o.push(l);
      }
    }
    return { type: "path", ops: r.concat(o) };
  }
  return { type: "path", ops: [] };
}
function bo(e, t, n) {
  const r = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), o = Math.ceil(Math.max(n.curveStepCount, n.curveStepCount / Math.sqrt(200) * r)), s = 2 * Math.PI / o;
  let i = Math.abs(e / 2), a = Math.abs(t / 2);
  const c = 1 - n.curveFitting;
  return i += w(i * c, n), a += w(a * c, n), { increment: s, rx: i, ry: a };
}
function kn(e, t, n, r) {
  const [o, s] = hr(r.increment, e, t, r.rx, r.ry, 1, r.increment * Dt(0.1, Dt(0.4, 1, n), n), n);
  let i = Bt(o, null, n);
  if (!n.disableMultiStroke && n.roughness !== 0) {
    const [a] = hr(r.increment, e, t, r.rx, r.ry, 1.5, 0, n), c = Bt(a, null, n);
    i = i.concat(c);
  }
  return { estimatedPoints: s, opset: { type: "path", ops: i } };
}
function ur(e, t, n, r, o, s, i, a, c) {
  const l = e, u = t;
  let h = Math.abs(n / 2), d = Math.abs(r / 2);
  h += w(0.01 * h, c), d += w(0.01 * d, c);
  let p = o, f = s;
  for (; p < 0; ) p += 2 * Math.PI, f += 2 * Math.PI;
  f - p > 2 * Math.PI && (p = 0, f = 2 * Math.PI);
  const m = 2 * Math.PI / c.curveStepCount, g = Math.min(m / 2, (f - p) / 2), _ = fr(g, l, u, h, d, p, f, 1, c);
  if (!c.disableMultiStroke) {
    const b = fr(g, l, u, h, d, p, f, 1.5, c);
    _.push(...b);
  }
  return i && (a ? _.push(...pe(l, u, l + h * Math.cos(p), u + d * Math.sin(p), c), ...pe(l, u, l + h * Math.cos(f), u + d * Math.sin(f), c)) : _.push({ op: "lineTo", data: [l, u] }, { op: "lineTo", data: [l + h * Math.cos(p), u + d * Math.sin(p)] })), { type: "path", ops: _ };
}
function dr(e, t) {
  const n = fo(ho(Hn(e))), r = [];
  let o = [0, 0], s = [0, 0];
  for (const { key: i, data: a } of n) switch (i) {
    case "M":
      s = [a[0], a[1]], o = [a[0], a[1]];
      break;
    case "L":
      r.push(...pe(s[0], s[1], a[0], a[1], t)), s = [a[0], a[1]];
      break;
    case "C": {
      const [c, l, u, h, d, p] = a;
      r.push(...If(c, l, u, h, d, p, s, t)), s = [d, p];
      break;
    }
    case "Z":
      r.push(...pe(s[0], s[1], o[0], o[1], t)), s = [o[0], o[1]];
  }
  return { type: "path", ops: r };
}
function un(e, t) {
  const n = [];
  for (const r of e) if (r.length) {
    const o = t.maxRandomnessOffset || 0, s = r.length;
    if (s > 2) {
      n.push({ op: "move", data: [r[0][0] + w(o, t), r[0][1] + w(o, t)] });
      for (let i = 1; i < s; i++) n.push({ op: "lineTo", data: [r[i][0] + w(o, t), r[i][1] + w(o, t)] });
    }
  }
  return { type: "fillPath", ops: n };
}
function Le(e, t) {
  return (function(n, r) {
    let o = n.fillStyle || "hachure";
    if (!j[o]) switch (o) {
      case "zigzag":
        j[o] || (j[o] = new Sf(r));
        break;
      case "cross-hatch":
        j[o] || (j[o] = new $f(r));
        break;
      case "dots":
        j[o] || (j[o] = new Af(r));
        break;
      case "dashed":
        j[o] || (j[o] = new Mf(r));
        break;
      case "zigzag-line":
        j[o] || (j[o] = new Ef(r));
        break;
      default:
        o = "hachure", j[o] || (j[o] = new Fn(r));
    }
    return j[o];
  })(t, Cf).fillPolygons(e, t);
}
function pr(e) {
  const t = Object.assign({}, e);
  return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function _o(e) {
  return e.randomizer || (e.randomizer = new Tf(e.seed || 0)), e.randomizer.next();
}
function Dt(e, t, n, r = 1) {
  return n.roughness * r * (_o(n) * (t - e) + e);
}
function w(e, t, n = 1) {
  return Dt(-e, e, t, n);
}
function pe(e, t, n, r, o, s = !1) {
  const i = s ? o.disableMultiStrokeFill : o.disableMultiStroke, a = Sn(e, t, n, r, o, !0, !1);
  if (i) return a;
  const c = Sn(e, t, n, r, o, !0, !0);
  return a.concat(c);
}
function Sn(e, t, n, r, o, s, i) {
  const a = Math.pow(e - n, 2) + Math.pow(t - r, 2), c = Math.sqrt(a);
  let l = 1;
  l = c < 200 ? 1 : c > 500 ? 0.4 : -16668e-7 * c + 1.233334;
  let u = o.maxRandomnessOffset || 0;
  u * u * 100 > a && (u = c / 10);
  const h = u / 2, d = 0.2 + 0.2 * _o(o);
  let p = o.bowing * o.maxRandomnessOffset * (r - t) / 200, f = o.bowing * o.maxRandomnessOffset * (e - n) / 200;
  p = w(p, o, l), f = w(f, o, l);
  const m = [], g = () => w(h, o, l), _ = () => w(u, o, l), b = o.preserveVertices;
  return i ? m.push({ op: "move", data: [e + (b ? 0 : g()), t + (b ? 0 : g())] }) : m.push({ op: "move", data: [e + (b ? 0 : w(u, o, l)), t + (b ? 0 : w(u, o, l))] }), i ? m.push({ op: "bcurveTo", data: [p + e + (n - e) * d + g(), f + t + (r - t) * d + g(), p + e + 2 * (n - e) * d + g(), f + t + 2 * (r - t) * d + g(), n + (b ? 0 : g()), r + (b ? 0 : g())] }) : m.push({ op: "bcurveTo", data: [p + e + (n - e) * d + _(), f + t + (r - t) * d + _(), p + e + 2 * (n - e) * d + _(), f + t + 2 * (r - t) * d + _(), n + (b ? 0 : _()), r + (b ? 0 : _())] }), m;
}
function _t(e, t, n) {
  if (!e.length) return [];
  const r = [];
  r.push([e[0][0] + w(t, n), e[0][1] + w(t, n)]), r.push([e[0][0] + w(t, n), e[0][1] + w(t, n)]);
  for (let o = 1; o < e.length; o++) r.push([e[o][0] + w(t, n), e[o][1] + w(t, n)]), o === e.length - 1 && r.push([e[o][0] + w(t, n), e[o][1] + w(t, n)]);
  return Bt(r, null, n);
}
function Bt(e, t, n) {
  const r = e.length, o = [];
  if (r > 3) {
    const s = [], i = 1 - n.curveTightness;
    o.push({ op: "move", data: [e[1][0], e[1][1]] });
    for (let a = 1; a + 2 < r; a++) {
      const c = e[a];
      s[0] = [c[0], c[1]], s[1] = [c[0] + (i * e[a + 1][0] - i * e[a - 1][0]) / 6, c[1] + (i * e[a + 1][1] - i * e[a - 1][1]) / 6], s[2] = [e[a + 1][0] + (i * e[a][0] - i * e[a + 2][0]) / 6, e[a + 1][1] + (i * e[a][1] - i * e[a + 2][1]) / 6], s[3] = [e[a + 1][0], e[a + 1][1]], o.push({ op: "bcurveTo", data: [s[1][0], s[1][1], s[2][0], s[2][1], s[3][0], s[3][1]] });
    }
  } else r === 3 ? (o.push({ op: "move", data: [e[1][0], e[1][1]] }), o.push({ op: "bcurveTo", data: [e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1]] })) : r === 2 && o.push(...Sn(e[0][0], e[0][1], e[1][0], e[1][1], n, !0, !0));
  return o;
}
function hr(e, t, n, r, o, s, i, a) {
  const c = [], l = [];
  if (a.roughness === 0) {
    e /= 4, l.push([t + r * Math.cos(-e), n + o * Math.sin(-e)]);
    for (let u = 0; u <= 2 * Math.PI; u += e) {
      const h = [t + r * Math.cos(u), n + o * Math.sin(u)];
      c.push(h), l.push(h);
    }
    l.push([t + r * Math.cos(0), n + o * Math.sin(0)]), l.push([t + r * Math.cos(e), n + o * Math.sin(e)]);
  } else {
    const u = w(0.5, a) - Math.PI / 2;
    l.push([w(s, a) + t + 0.9 * r * Math.cos(u - e), w(s, a) + n + 0.9 * o * Math.sin(u - e)]);
    const h = 2 * Math.PI + u - 0.01;
    for (let d = u; d < h; d += e) {
      const p = [w(s, a) + t + r * Math.cos(d), w(s, a) + n + o * Math.sin(d)];
      c.push(p), l.push(p);
    }
    l.push([w(s, a) + t + r * Math.cos(u + 2 * Math.PI + 0.5 * i), w(s, a) + n + o * Math.sin(u + 2 * Math.PI + 0.5 * i)]), l.push([w(s, a) + t + 0.98 * r * Math.cos(u + i), w(s, a) + n + 0.98 * o * Math.sin(u + i)]), l.push([w(s, a) + t + 0.9 * r * Math.cos(u + 0.5 * i), w(s, a) + n + 0.9 * o * Math.sin(u + 0.5 * i)]);
  }
  return [l, c];
}
function fr(e, t, n, r, o, s, i, a, c) {
  const l = s + w(0.1, c), u = [];
  u.push([w(a, c) + t + 0.9 * r * Math.cos(l - e), w(a, c) + n + 0.9 * o * Math.sin(l - e)]);
  for (let h = l; h <= i; h += e) u.push([w(a, c) + t + r * Math.cos(h), w(a, c) + n + o * Math.sin(h)]);
  return u.push([t + r * Math.cos(i), n + o * Math.sin(i)]), u.push([t + r * Math.cos(i), n + o * Math.sin(i)]), Bt(u, null, c);
}
function If(e, t, n, r, o, s, i, a) {
  const c = [], l = [a.maxRandomnessOffset || 1, (a.maxRandomnessOffset || 1) + 0.3];
  let u = [0, 0];
  const h = a.disableMultiStroke ? 1 : 2, d = a.preserveVertices;
  for (let p = 0; p < h; p++) p === 0 ? c.push({ op: "move", data: [i[0], i[1]] }) : c.push({ op: "move", data: [i[0] + (d ? 0 : w(l[0], a)), i[1] + (d ? 0 : w(l[0], a))] }), u = d ? [o, s] : [o + w(l[p], a), s + w(l[p], a)], c.push({ op: "bcurveTo", data: [e + w(l[p], a), t + w(l[p], a), n + w(l[p], a), r + w(l[p], a), u[0], u[1]] });
  return c;
}
function Xe(e) {
  return [...e];
}
function mr(e, t = 0) {
  const n = e.length;
  if (n < 3) throw new Error("A curve must have at least three points.");
  const r = [];
  if (n === 3) r.push(Xe(e[0]), Xe(e[1]), Xe(e[2]), Xe(e[2]));
  else {
    const o = [];
    o.push(e[0], e[0]);
    for (let a = 1; a < e.length; a++) o.push(e[a]), a === e.length - 1 && o.push(e[a]);
    const s = [], i = 1 - t;
    r.push(Xe(o[0]));
    for (let a = 1; a + 2 < o.length; a++) {
      const c = o[a];
      s[0] = [c[0], c[1]], s[1] = [c[0] + (i * o[a + 1][0] - i * o[a - 1][0]) / 6, c[1] + (i * o[a + 1][1] - i * o[a - 1][1]) / 6], s[2] = [o[a + 1][0] + (i * o[a][0] - i * o[a + 2][0]) / 6, o[a + 1][1] + (i * o[a][1] - i * o[a + 2][1]) / 6], s[3] = [o[a + 1][0], o[a + 1][1]], r.push(s[1], s[2], s[3]);
    }
  }
  return r;
}
function Mt(e, t) {
  return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
}
function Of(e, t, n) {
  const r = Mt(t, n);
  if (r === 0) return Mt(e, t);
  let o = ((e[0] - t[0]) * (n[0] - t[0]) + (e[1] - t[1]) * (n[1] - t[1])) / r;
  return o = Math.max(0, Math.min(1, o)), Mt(e, ge(t, n, o));
}
function ge(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n];
}
function $n(e, t, n, r) {
  const o = r || [];
  if ((function(a, c) {
    const l = a[c + 0], u = a[c + 1], h = a[c + 2], d = a[c + 3];
    let p = 3 * u[0] - 2 * l[0] - d[0];
    p *= p;
    let f = 3 * u[1] - 2 * l[1] - d[1];
    f *= f;
    let m = 3 * h[0] - 2 * d[0] - l[0];
    m *= m;
    let g = 3 * h[1] - 2 * d[1] - l[1];
    return g *= g, p < m && (p = m), f < g && (f = g), p + f;
  })(e, t) < n) {
    const a = e[t + 0];
    o.length ? (s = o[o.length - 1], i = a, Math.sqrt(Mt(s, i)) > 1 && o.push(a)) : o.push(a), o.push(e[t + 3]);
  } else {
    const c = e[t + 0], l = e[t + 1], u = e[t + 2], h = e[t + 3], d = ge(c, l, 0.5), p = ge(l, u, 0.5), f = ge(u, h, 0.5), m = ge(d, p, 0.5), g = ge(p, f, 0.5), _ = ge(m, g, 0.5);
    $n([c, d, m, _], 0, n, o), $n([_, g, f, h], 0, n, o);
  }
  var s, i;
  return o;
}
function Rf(e, t) {
  return qt(e, 0, e.length, t);
}
function qt(e, t, n, r, o) {
  const s = o || [], i = e[t], a = e[n - 1];
  let c = 0, l = 1;
  for (let u = t + 1; u < n - 1; ++u) {
    const h = Of(e[u], i, a);
    h > c && (c = h, l = u);
  }
  return Math.sqrt(c) > r ? (qt(e, t, l + 1, r, s), qt(e, l, n, r, s)) : (s.length || s.push(i), s.push(a)), s;
}
function dn(e, t = 0.15, n) {
  const r = [], o = (e.length - 1) / 3;
  for (let s = 0; s < o; s++)
    $n(e, 3 * s, t, r);
  return n && n > 0 ? qt(r, 0, r.length, n) : r;
}
const V = "none";
class zt {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: !1, disableMultiStrokeFill: !1, preserveVertices: !1, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, n, r) {
    return { shape: t, sets: n || [], options: r || this.defaultOptions };
  }
  line(t, n, r, o, s) {
    const i = this._o(s);
    return this._d("line", [go(t, n, r, o, i)], i);
  }
  rectangle(t, n, r, o, s) {
    const i = this._o(s), a = [], c = Pf(t, n, r, o, i);
    if (i.fill) {
      const l = [[t, n], [t + r, n], [t + r, n + o], [t, n + o]];
      i.fillStyle === "solid" ? a.push(un([l], i)) : a.push(Le([l], i));
    }
    return i.stroke !== V && a.push(c), this._d("rectangle", a, i);
  }
  ellipse(t, n, r, o, s) {
    const i = this._o(s), a = [], c = bo(r, o, i), l = kn(t, n, i, c);
    if (i.fill) if (i.fillStyle === "solid") {
      const u = kn(t, n, i, c).opset;
      u.type = "fillPath", a.push(u);
    } else a.push(Le([l.estimatedPoints], i));
    return i.stroke !== V && a.push(l.opset), this._d("ellipse", a, i);
  }
  circle(t, n, r, o) {
    const s = this.ellipse(t, n, r, r, o);
    return s.shape = "circle", s;
  }
  linearPath(t, n) {
    const r = this._o(n);
    return this._d("linearPath", [At(t, !1, r)], r);
  }
  arc(t, n, r, o, s, i, a = !1, c) {
    const l = this._o(c), u = [], h = ur(t, n, r, o, s, i, a, !0, l);
    if (a && l.fill) if (l.fillStyle === "solid") {
      const d = Object.assign({}, l);
      d.disableMultiStroke = !0;
      const p = ur(t, n, r, o, s, i, !0, !1, d);
      p.type = "fillPath", u.push(p);
    } else u.push((function(d, p, f, m, g, _, b) {
      const k = d, R = p;
      let P = Math.abs(f / 2), L = Math.abs(m / 2);
      P += w(0.01 * P, b), L += w(0.01 * L, b);
      let G = g, Q = _;
      for (; G < 0; ) G += 2 * Math.PI, Q += 2 * Math.PI;
      Q - G > 2 * Math.PI && (G = 0, Q = 2 * Math.PI);
      const mt = (Q - G) / b.curveStepCount, X = [];
      for (let me = G; me <= Q; me += mt) X.push([k + P * Math.cos(me), R + L * Math.sin(me)]);
      return X.push([k + P * Math.cos(Q), R + L * Math.sin(Q)]), X.push([k, R]), Le([X], b);
    })(t, n, r, o, s, i, l));
    return l.stroke !== V && u.push(h), this._d("arc", u, l);
  }
  curve(t, n) {
    const r = this._o(n), o = [], s = lr(t, r);
    if (r.fill && r.fill !== V) if (r.fillStyle === "solid") {
      const i = lr(t, Object.assign(Object.assign({}, r), { disableMultiStroke: !0, roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0 }));
      o.push({ type: "fillPath", ops: this._mergedShape(i.ops) });
    } else {
      const i = [], a = t;
      if (a.length) {
        const c = typeof a[0][0] == "number" ? [a] : a;
        for (const l of c) l.length < 3 ? i.push(...l) : l.length === 3 ? i.push(...dn(mr([l[0], l[0], l[1], l[2]]), 10, (1 + r.roughness) / 2)) : i.push(...dn(mr(l), 10, (1 + r.roughness) / 2));
      }
      i.length && o.push(Le([i], r));
    }
    return r.stroke !== V && o.push(s), this._d("curve", o, r);
  }
  polygon(t, n) {
    const r = this._o(n), o = [], s = At(t, !0, r);
    return r.fill && (r.fillStyle === "solid" ? o.push(un([t], r)) : o.push(Le([t], r))), r.stroke !== V && o.push(s), this._d("polygon", o, r);
  }
  path(t, n) {
    const r = this._o(n), o = [];
    if (!t) return this._d("path", o, r);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const s = r.fill && r.fill !== "transparent" && r.fill !== V, i = r.stroke !== V, a = !!(r.simplification && r.simplification < 1), c = (function(u, h, d) {
      const p = fo(ho(Hn(u))), f = [];
      let m = [], g = [0, 0], _ = [];
      const b = () => {
        _.length >= 4 && m.push(...dn(_, h)), _ = [];
      }, k = () => {
        b(), m.length && (f.push(m), m = []);
      };
      for (const { key: P, data: L } of p) switch (P) {
        case "M":
          k(), g = [L[0], L[1]], m.push(g);
          break;
        case "L":
          b(), m.push([L[0], L[1]]);
          break;
        case "C":
          if (!_.length) {
            const G = m.length ? m[m.length - 1] : g;
            _.push([G[0], G[1]]);
          }
          _.push([L[0], L[1]]), _.push([L[2], L[3]]), _.push([L[4], L[5]]);
          break;
        case "Z":
          b(), m.push([g[0], g[1]]);
      }
      if (k(), !d) return f;
      const R = [];
      for (const P of f) {
        const L = Rf(P, d);
        L.length && R.push(L);
      }
      return R;
    })(t, 1, a ? 4 - 4 * (r.simplification || 1) : (1 + r.roughness) / 2), l = dr(t, r);
    if (s) if (r.fillStyle === "solid") if (c.length === 1) {
      const u = dr(t, Object.assign(Object.assign({}, r), { disableMultiStroke: !0, roughness: r.roughness ? r.roughness + r.fillShapeRoughnessGain : 0 }));
      o.push({ type: "fillPath", ops: this._mergedShape(u.ops) });
    } else o.push(un(c, r));
    else o.push(Le(c, r));
    return i && (a ? c.forEach(((u) => {
      o.push(At(u, !1, r));
    })) : o.push(l)), this._d("path", o, r);
  }
  opsToPath(t, n) {
    let r = "";
    for (const o of t.ops) {
      const s = typeof n == "number" && n >= 0 ? o.data.map(((i) => +i.toFixed(n))) : o.data;
      switch (o.op) {
        case "move":
          r += `M${s[0]} ${s[1]} `;
          break;
        case "bcurveTo":
          r += `C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;
          break;
        case "lineTo":
          r += `L${s[0]} ${s[1]} `;
      }
    }
    return r.trim();
  }
  toPaths(t) {
    const n = t.sets || [], r = t.options || this.defaultOptions, o = [];
    for (const s of n) {
      let i = null;
      switch (s.type) {
        case "path":
          i = { d: this.opsToPath(s), stroke: r.stroke, strokeWidth: r.strokeWidth, fill: V };
          break;
        case "fillPath":
          i = { d: this.opsToPath(s), stroke: V, strokeWidth: 0, fill: r.fill || V };
          break;
        case "fillSketch":
          i = this.fillSketch(s, r);
      }
      i && o.push(i);
    }
    return o;
  }
  fillSketch(t, n) {
    let r = n.fillWeight;
    return r < 0 && (r = n.strokeWidth / 2), { d: this.opsToPath(t), stroke: n.fill || V, strokeWidth: r, fill: V };
  }
  _mergedShape(t) {
    return t.filter(((n, r) => r === 0 || n.op !== "move"));
  }
}
class Nf {
  constructor(t, n) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new zt(n);
  }
  draw(t) {
    const n = t.sets || [], r = t.options || this.getDefaultOptions(), o = this.ctx, s = t.options.fixedDecimalPlaceDigits;
    for (const i of n) switch (i.type) {
      case "path":
        o.save(), o.strokeStyle = r.stroke === "none" ? "transparent" : r.stroke, o.lineWidth = r.strokeWidth, r.strokeLineDash && o.setLineDash(r.strokeLineDash), r.strokeLineDashOffset && (o.lineDashOffset = r.strokeLineDashOffset), this._drawToContext(o, i, s), o.restore();
        break;
      case "fillPath": {
        o.save(), o.fillStyle = r.fill || "";
        const a = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(o, i, s, a), o.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(o, i, r);
    }
  }
  fillSketch(t, n, r) {
    let o = r.fillWeight;
    o < 0 && (o = r.strokeWidth / 2), t.save(), r.fillLineDash && t.setLineDash(r.fillLineDash), r.fillLineDashOffset && (t.lineDashOffset = r.fillLineDashOffset), t.strokeStyle = r.fill || "", t.lineWidth = o, this._drawToContext(t, n, r.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, n, r, o = "nonzero") {
    t.beginPath();
    for (const s of n.ops) {
      const i = typeof r == "number" && r >= 0 ? s.data.map(((a) => +a.toFixed(r))) : s.data;
      switch (s.op) {
        case "move":
          t.moveTo(i[0], i[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
          break;
        case "lineTo":
          t.lineTo(i[0], i[1]);
      }
    }
    n.type === "fillPath" ? t.fill(o) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, n, r, o, s) {
    const i = this.gen.line(t, n, r, o, s);
    return this.draw(i), i;
  }
  rectangle(t, n, r, o, s) {
    const i = this.gen.rectangle(t, n, r, o, s);
    return this.draw(i), i;
  }
  ellipse(t, n, r, o, s) {
    const i = this.gen.ellipse(t, n, r, o, s);
    return this.draw(i), i;
  }
  circle(t, n, r, o) {
    const s = this.gen.circle(t, n, r, o);
    return this.draw(s), s;
  }
  linearPath(t, n) {
    const r = this.gen.linearPath(t, n);
    return this.draw(r), r;
  }
  polygon(t, n) {
    const r = this.gen.polygon(t, n);
    return this.draw(r), r;
  }
  arc(t, n, r, o, s, i, a = !1, c) {
    const l = this.gen.arc(t, n, r, o, s, i, a, c);
    return this.draw(l), l;
  }
  curve(t, n) {
    const r = this.gen.curve(t, n);
    return this.draw(r), r;
  }
  path(t, n) {
    const r = this.gen.path(t, n);
    return this.draw(r), r;
  }
}
const yt = "http://www.w3.org/2000/svg";
class Df {
  constructor(t, n) {
    this.svg = t, this.gen = new zt(n);
  }
  draw(t) {
    const n = t.sets || [], r = t.options || this.getDefaultOptions(), o = this.svg.ownerDocument || window.document, s = o.createElementNS(yt, "g"), i = t.options.fixedDecimalPlaceDigits;
    for (const a of n) {
      let c = null;
      switch (a.type) {
        case "path":
          c = o.createElementNS(yt, "path"), c.setAttribute("d", this.opsToPath(a, i)), c.setAttribute("stroke", r.stroke), c.setAttribute("stroke-width", r.strokeWidth + ""), c.setAttribute("fill", "none"), r.strokeLineDash && c.setAttribute("stroke-dasharray", r.strokeLineDash.join(" ").trim()), r.strokeLineDashOffset && c.setAttribute("stroke-dashoffset", `${r.strokeLineDashOffset}`);
          break;
        case "fillPath":
          c = o.createElementNS(yt, "path"), c.setAttribute("d", this.opsToPath(a, i)), c.setAttribute("stroke", "none"), c.setAttribute("stroke-width", "0"), c.setAttribute("fill", r.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || c.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          c = this.fillSketch(o, a, r);
      }
      c && s.appendChild(c);
    }
    return s;
  }
  fillSketch(t, n, r) {
    let o = r.fillWeight;
    o < 0 && (o = r.strokeWidth / 2);
    const s = t.createElementNS(yt, "path");
    return s.setAttribute("d", this.opsToPath(n, r.fixedDecimalPlaceDigits)), s.setAttribute("stroke", r.fill || ""), s.setAttribute("stroke-width", o + ""), s.setAttribute("fill", "none"), r.fillLineDash && s.setAttribute("stroke-dasharray", r.fillLineDash.join(" ").trim()), r.fillLineDashOffset && s.setAttribute("stroke-dashoffset", `${r.fillLineDashOffset}`), s;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, n) {
    return this.gen.opsToPath(t, n);
  }
  line(t, n, r, o, s) {
    const i = this.gen.line(t, n, r, o, s);
    return this.draw(i);
  }
  rectangle(t, n, r, o, s) {
    const i = this.gen.rectangle(t, n, r, o, s);
    return this.draw(i);
  }
  ellipse(t, n, r, o, s) {
    const i = this.gen.ellipse(t, n, r, o, s);
    return this.draw(i);
  }
  circle(t, n, r, o) {
    const s = this.gen.circle(t, n, r, o);
    return this.draw(s);
  }
  linearPath(t, n) {
    const r = this.gen.linearPath(t, n);
    return this.draw(r);
  }
  polygon(t, n) {
    const r = this.gen.polygon(t, n);
    return this.draw(r);
  }
  arc(t, n, r, o, s, i, a = !1, c) {
    const l = this.gen.arc(t, n, r, o, s, i, a, c);
    return this.draw(l);
  }
  curve(t, n) {
    const r = this.gen.curve(t, n);
    return this.draw(r);
  }
  path(t, n) {
    const r = this.gen.path(t, n);
    return this.draw(r);
  }
}
var Bf = { canvas: (e, t) => new Nf(e, t), svg: (e, t) => new Df(e, t), generator: (e) => new zt(e), newSeed: () => zt.newSeed() };
const gr = "data-wp-animations";
function qf() {
  if (document.head.querySelector(`[${gr}]`)) return;
  const e = document.createElement("style");
  e.setAttribute(gr, "true"), e.textContent = `
    @keyframes wp-fade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes wp-slide-left {
      from { transform: translateX(-30px) rotate(0deg); opacity: 0; }
      to { transform: translateX(0) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    @keyframes wp-slide-right {
      from { transform: translateX(30px) rotate(0deg); opacity: 0; }
      to { transform: translateX(0) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    @keyframes wp-slide-up {
      from { transform: translateY(30px) rotate(0deg); opacity: 0; }
      to { transform: translateY(0) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    @keyframes wp-slide-down {
      from { transform: translateY(-30px) rotate(0deg); opacity: 0; }
      to { transform: translateY(0) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    @keyframes wp-bounce {
      0% { transform: scale(0.3) rotate(0deg); opacity: 0; }
      50% { transform: scale(1.1) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
      70% { transform: scale(0.95) rotate(var(--wp-final-rot, 0deg)); }
      100% { transform: scale(1) rotate(var(--wp-final-rot, 0deg)); }
    }
    @keyframes wp-zoom {
      from { transform: scale(0) rotate(0deg); opacity: 0; }
      to { transform: scale(1) rotate(var(--wp-final-rot, 0deg)); opacity: 1; }
    }
    /* rotate effect — 720deg(2회전) 후 final rotate. */
    @keyframes wp-rotate {
      from { transform: rotate(0deg); opacity: 0; }
      to { transform: rotate(calc(720deg + var(--wp-final-rot, 0deg))); opacity: 1; }
    }
  `, document.head.appendChild(e);
}
function rt(e, t, n) {
  if (!t || t.kind === "none" || ro() !== "replay") return;
  const r = Math.max(50, t.durationMs || 400), o = Math.max(0, t.delayMs || 0);
  e.style.transformBox = "fill-box", e.style.transformOrigin = "center", e.style.setProperty("--wp-final-rot", `${n}deg`), e.style.animation = `wp-${t.kind} ${r}ms ease-out ${o}ms backwards`;
  const s = () => {
    e.style.animation = "", e.style.transformBox = "", e.style.transformOrigin = "", e.removeEventListener("animationend", s), e.removeEventListener("animationcancel", s);
  };
  e.addEventListener("animationend", s), e.addEventListener("animationcancel", s);
}
const Ft = "http://www.w3.org/2000/svg", yo = "data-annotation-text", br = "data-annotation-arrow", vo = "data-annotation-shape", _r = "data-annotation-freedraw", M = {
  host: null,
  svg: null,
  roughSvg: null,
  unsubscribe: null,
  unsubscribeMode: null
};
function Wn(e) {
  var t;
  return ((t = e.closest) == null ? void 0 : t.call(e, '[data-manuscript="ui"]')) !== null;
}
function zf(e, t) {
  try {
    const n = Array.from(t.querySelectorAll(e.cssSelector)), r = [];
    for (const o of n)
      if (!Wn(o) && (r.push(o), r.length > 1))
        return null;
    return r[0] ?? null;
  } catch {
    return null;
  }
}
function Ff(e, t) {
  return !e || !e.text ? null : (e.parentSelector ? Array.from(t.querySelectorAll(`${e.parentSelector} ${e.tagName}`)) : Array.from(t.querySelectorAll(e.tagName))).find(
    (r) => !Wn(r) && (r.textContent ?? "").trim().includes(e.text)
  ) ?? null;
}
function Hf(e, t) {
  var a;
  if (!e || typeof t.elementFromPoint != "function") return null;
  const n = t.elementFromPoint(
    e.x + Math.floor(e.width / 2),
    e.y + Math.floor(e.height / 2)
  );
  if (!(n instanceof HTMLElement) || Wn(n)) return null;
  const r = n.getBoundingClientRect();
  if (!(Math.abs(r.width - e.width) < e.width * 0.5 && Math.abs(r.height - e.height) < e.height * 0.5)) return null;
  if (e.nearbyText.length === 0) return n;
  const s = (((a = n.parentElement) == null ? void 0 : a.textContent) ?? "").trim();
  return e.nearbyText.some((c) => s.includes(c)) ? n : null;
}
function xo(e) {
  var t;
  return ((t = An(e)) == null ? void 0 : t.el) ?? null;
}
function An(e) {
  const t = wo(e.framePath);
  if (!t) return null;
  const n = zf(e.layer1, t);
  if (n) return { el: n, layer: 1 };
  const r = Ff(e.layer2, t);
  if (r) return { el: r, layer: 2 };
  const o = Hf(e.layer3, t);
  return o ? { el: o, layer: 3 } : null;
}
function wo(e) {
  if (!e || e.length === 0) return document;
  if (typeof window > "u") return null;
  let t = window;
  for (const n of e) {
    const r = t.frames[n.index];
    if (!r) return null;
    t = r;
  }
  try {
    return t.document;
  } catch {
    return null;
  }
}
function Z() {
  const e = he();
  if (!e || !e.selectors) return null;
  try {
    const t = xo(e.selectors);
    return t ? t.getBoundingClientRect() : null;
  } catch {
    return null;
  }
}
function Wf(e, t) {
  return e.anchorOffset && t ? { x: t.left + e.anchorOffset.x, y: t.top + e.anchorOffset.y } : e.position;
}
function Kt(e, t) {
  return e.boundsAnchorOffset && t ? { x: t.left + e.boundsAnchorOffset.x, y: t.top + e.boundsAnchorOffset.y } : { x: e.bounds.x, y: e.bounds.y };
}
function Uf(e, t) {
  const n = e.fromAnchorOffset && t ? { x: t.left + e.fromAnchorOffset.x, y: t.top + e.fromAnchorOffset.y } : e.from, r = e.toAnchorOffset && t ? { x: t.left + e.toAnchorOffset.x, y: t.top + e.toAnchorOffset.y } : e.to;
  return { from: n, to: r };
}
function Jt(e, t) {
  return e.pointsAnchorOffset && t && e.pointsAnchorOffset.length === e.points.length ? e.pointsAnchorOffset.map((n) => ({
    x: t.left + n.x,
    y: t.top + n.y
  })) : e.points;
}
function jf(e, t) {
  const { svg: n, roughSvg: r } = M;
  if (!n || !r) return;
  const o = Gf(e.id), { from: s, to: i } = Uf(e, t);
  ko(
    e,
    (a) => r.line(s.x, s.y, i.x, i.y, {
      roughness: 1.5,
      bowing: 1,
      seed: o,
      ...a
    })
  ), Vf(e, s, i, o + 1);
}
function Vf(e, t, n, r) {
  const { roughSvg: o } = M;
  if (!o) return;
  const s = Math.atan2(n.y - t.y, n.x - t.x), i = 14 + e.strokeWidth * 2, a = Math.PI / 7, c = n.x - i * Math.cos(s - a), l = n.y - i * Math.sin(s - a), u = n.x - i * Math.cos(s + a), h = n.y - i * Math.sin(s + a), d = `M ${c} ${l} L ${n.x} ${n.y} L ${u} ${h}`;
  ko(
    e,
    (p) => o.path(d, {
      roughness: 1.5,
      bowing: 1,
      seed: r,
      ...p
    })
  );
}
function ko(e, t) {
  const { svg: n } = M;
  if (!n) return;
  const r = t({ stroke: "#ffffff", strokeWidth: e.strokeWidth + 4 });
  r.setAttribute(br, e.id), rt(r, e.entryAnimation, 0), n.appendChild(r);
  const o = t({ stroke: e.color, strokeWidth: e.strokeWidth });
  o.setAttribute(br, e.id), rt(o, e.entryAnimation, 0), n.appendChild(o);
}
function Gf(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++)
    t = t * 31 + e.charCodeAt(n) | 0;
  return Math.abs(t % 1e5);
}
function So(e, t, n) {
  const r = Math.floor(e / 60 % 6), o = e / 60 - Math.floor(e / 60), s = n * (1 - t), i = n * (1 - o * t), a = n * (1 - (1 - o) * t);
  let c = 0, l = 0, u = 0;
  switch (r) {
    case 0:
      c = n, l = a, u = s;
      break;
    case 1:
      c = i, l = n, u = s;
      break;
    case 2:
      c = s, l = n, u = a;
      break;
    case 3:
      c = s, l = i, u = n;
      break;
    case 4:
      c = a, l = s, u = n;
      break;
    case 5:
      c = n, l = s, u = i;
      break;
  }
  return [Math.round(c * 255), Math.round(l * 255), Math.round(u * 255)];
}
function $o(e, t, n) {
  const r = e / 255, o = t / 255, s = n / 255, i = Math.max(r, o, s), a = Math.min(r, o, s), c = i - a;
  let l = 0;
  return c !== 0 && (i === r ? l = (o - s) / c % 6 : i === o ? l = (s - r) / c + 2 : l = (r - o) / c + 4, l *= 60, l < 0 && (l += 360)), { h: l, s: i === 0 ? 0 : c / i, v: i };
}
function Ao(e, t, n) {
  return "#" + [e, t, n].map((r) => r.toString(16).padStart(2, "0")).join("");
}
function Mo(e) {
  let t = e.trim();
  if (!t.startsWith("#")) return { h: 0, s: 1, v: 1 };
  if (t = t.slice(1), t.length === 3 && (t = t.split("").map((s) => s + s).join("")), t.length !== 6) return { h: 0, s: 1, v: 1 };
  const n = parseInt(t.slice(0, 2), 16), r = parseInt(t.slice(2, 4), 16), o = parseInt(t.slice(4, 6), 16);
  return [n, r, o].some((s) => !Number.isFinite(s)) ? { h: 0, s: 1, v: 1 } : $o(n, r, o);
}
function pn(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.min(255, Math.round(t))) : 0;
}
function yr(e, t) {
  let n = !1;
  e.addEventListener("mousedown", (r) => {
    n = !0, t(r), r.preventDefault();
  }), document.addEventListener("mousemove", (r) => {
    n && t(r);
  }), document.addEventListener("mouseup", () => {
    n = !1;
  });
}
async function Yf(e) {
  let t;
  try {
    const n = window.top;
    t = n == null ? void 0 : n.EyeDropper;
  } catch {
  }
  if (t || (t = window.EyeDropper), !t) {
    console.info("[manuscript] EyeDropper API not available");
    return;
  }
  try {
    const n = await new t().open();
    e(n.sRGBHex);
  } catch {
  }
}
const Xf = `/* ─────────────────────────────────────────────────────────────
   Manuscript — Design tokens
   3 palettes (A Ink, B Graphite, C Sepia) + shared accents + type scale
   All colors authored in oklch for perceptual harmony.
   ───────────────────────────────────────────────────────────── */

:root {
  /* Type — Pretendard Variable single family, weight scale */
  --ff-sans: 'Pretendard Variable', Pretendard, -apple-system, 'Apple SD Gothic Neo',
             'Helvetica Neue', Arial, sans-serif;
  --ff-mono: ui-monospace, 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace;
  /* Classical serif — reserved for the brand wordmark. Renaissance Garamond
     reinforces the manuscript/manus-scriptus etymology. */
  --ff-serif: 'EB Garamond', 'Apple Garamond', Garamond, 'Times New Roman', serif;

  /* Scale (px) — Floating panel 작업 모드 기준. compact density.
     Body 14px가 최소; B2B 차분 톤에서 13/14가 표준.                  */
  --fs-display: 28px;  --lh-display: 1.2;  --fw-display: 600;
  --fs-h1:      20px;  --lh-h1:      1.3;  --fw-h1:      600;
  --fs-h2:      16px;  --lh-h2:      1.35; --fw-h2:      600;
  --fs-body:    14px;  --lh-body:    1.5;  --fw-body:    400;
  --fs-strong:  14px;  --lh-strong:  1.5;  --fw-strong:  500;
  --fs-small:   12px;  --lh-small:   1.45; --fw-small:   400;
  --fs-cap:     11px;  --lh-cap:     1.3;  --fw-cap:     600;
  --ls-cap:     0.08em;

  /* Radius + spacing — soft, document-like */
  --r-xs: 4px; --r-sm: 6px; --r-md: 10px; --r-lg: 14px; --r-pill: 999px;
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.04), 0 1px 1px rgb(0 0 0 / 0.03);
  --shadow-md: 0 2px 6px rgb(0 0 0 / 0.06), 0 1px 2px rgb(0 0 0 / 0.04);
  --shadow-lg: 0 12px 28px rgb(0 0 0 / 0.10), 0 4px 8px rgb(0 0 0 / 0.05);
  /* Apple-leaning layered shadow for elevated cards (active step, etc.).
     Per-palette overrides may tune this in tokens.css. */
  --shadow-card: 0 1px 2px rgb(0 0 0 / 0.04),
                 0 4px 10px rgb(0 0 0 / 0.05),
                 0 12px 24px rgb(0 0 0 / 0.06);

  /* ───── Functional accents (shared across all palettes) ───── */
  --c-success: oklch(0.52 0.09 150);
  --c-warning: oklch(0.66 0.10 75);
  --c-error:   oklch(0.52 0.14 27);
  --c-info:    oklch(0.50 0.08 245);

  /* ───── PALETTE A — INK (default) ─────
     Deep navy on warm paper. Most B2B-standard, archival voice. */
  --c-bg:        oklch(0.985 0.005 80);
  --c-surface:   oklch(1     0     0);
  --c-surface-2: oklch(0.965 0.006 80);
  --c-text:      oklch(0.18  0.015 250);
  --c-text-mute: oklch(0.45  0.012 250);
  --c-text-soft: oklch(0.62  0.010 250);
  --c-border:    oklch(0.91  0.008 250);
  --c-border-strong: oklch(0.82 0.012 250);
  --c-primary:   oklch(0.30  0.045 250);
  --c-primary-h: oklch(0.22  0.050 250);
  --c-primary-fg: oklch(0.985 0.003 80);
  --c-tint:      oklch(0.93  0.020 250); /* selected step bg */
  --c-focus:     oklch(0.55  0.10  250); /* focus ring */
}

/* ───── PALETTE B — GRAPHITE ─────
   Near-black on bone. Calmest, monochrome. Maximum trust signal. */
[data-palette="graphite"] {
  --c-bg:        oklch(0.97  0.004 70);
  --c-surface:   oklch(0.995 0.003 70);
  --c-surface-2: oklch(0.94  0.005 70);
  --c-text:      oklch(0.16  0.005 60);
  --c-text-mute: oklch(0.46  0.006 60);
  --c-text-soft: oklch(0.62  0.005 60);
  --c-border:    oklch(0.90  0.006 70);
  --c-border-strong: oklch(0.80 0.008 70);
  --c-primary:   oklch(0.22  0.008 60);
  --c-primary-h: oklch(0.12  0     0);
  --c-primary-fg: oklch(0.98  0.003 70);
  --c-tint:      oklch(0.93  0.006 70);
  --c-focus:     oklch(0.50  0.010 60);
}

/* ───── PALETTE C — SEPIA ─────
   Parchment + oxblood. Strongest manuscript metaphor. */
[data-palette="sepia"] {
  --c-bg:        oklch(0.96  0.013 75);
  --c-surface:   oklch(0.99  0.007 80);
  --c-surface-2: oklch(0.935 0.018 75);
  --c-text:      oklch(0.22  0.020 40);
  --c-text-mute: oklch(0.48  0.022 40);
  --c-text-soft: oklch(0.62  0.018 50);
  --c-border:    oklch(0.88  0.020 65);
  --c-border-strong: oklch(0.78 0.025 60);
  --c-primary:   oklch(0.35  0.085 27);
  --c-primary-h: oklch(0.28  0.090 27);
  --c-primary-fg: oklch(0.985 0.008 80);
  --c-tint:      oklch(0.92  0.025 60);
  --c-focus:     oklch(0.50  0.10  30);
}

/* ───── PALETTE D — STUDIO ─────
   Cool snow + Apple-leaning blue. Subtle borders, depth via shadow.
   chroma stays within doctrine (≤0.09). */
[data-palette="studio"] {
  --c-bg:        oklch(0.985 0.005 240);
  --c-surface:   oklch(1     0     0);
  --c-surface-2: oklch(0.965 0.006 240);
  --c-text:      oklch(0.20  0.020 240);
  --c-text-mute: oklch(0.50  0.015 240);
  --c-text-soft: oklch(0.66  0.010 240);
  --c-border:    oklch(0.92  0.008 240);
  --c-border-strong: oklch(0.84 0.010 240);
  --c-primary:   oklch(0.48  0.085 245);
  --c-primary-h: oklch(0.40  0.090 245);
  --c-primary-fg: oklch(0.99  0.003 240);
  --c-tint:      oklch(0.94  0.025 245);
  --c-focus:     oklch(0.60  0.13  245);

  /* Elevated-card shadow — softer + more layered than the default --shadow-md.
     Used on the active step in the floating panel. */
  --shadow-card: 0 1px 2px rgb(0 0 0 / 0.04),
                 0 4px 10px rgb(0 0 0 / 0.05),
                 0 12px 24px rgb(0 0 0 / 0.06);
}

/* ───── PALETTE E — STUDIO-DARK ─────
   Cool slate dark, mirrors PALETTE D STUDIO. See docs/design/dark-mode-design.md §4.1.
   Chroma ≤ 0.09 doctrine maintained (focus only allowed slight excess at 0.13). */
[data-palette="studio-dark"] {
  --c-bg:        oklch(0.16  0.012 245);
  --c-surface:   oklch(0.22  0.014 245);
  --c-surface-2: oklch(0.19  0.012 245);
  --c-text:      oklch(0.97  0.003 245);
  --c-text-mute: oklch(0.78  0.006 245);
  --c-text-soft: oklch(0.62  0.008 245);
  --c-border:    oklch(0.32  0.012 245);
  --c-border-strong: oklch(0.42 0.014 245);
  --c-primary:   oklch(0.70  0.09  245);
  --c-primary-h: oklch(0.78  0.09  245);
  --c-primary-fg: oklch(0.14  0.020 245);
  --c-tint:      oklch(0.32  0.045 245);
  --c-focus:     oklch(0.74  0.13  245);
}

/* ───── PALETTE F — INK-DARK ─────
   Warm-on-cool dark, mirrors PALETTE A INK. docs/design/dark-mode-design.md §4.2.
   Absorbs \`08.DARK-MODE-TOKENS.md\` §1 (spotlight-editor) and §2 (launcher pill) tones. */
[data-palette="ink-dark"] {
  --c-bg:        oklch(0.14  0.015 250);
  --c-surface:   oklch(0.20  0.018 250);
  --c-surface-2: oklch(0.17  0.016 250);
  --c-text:      oklch(0.98  0.003  80);
  --c-text-mute: oklch(0.76  0.006  80);
  --c-text-soft: oklch(0.60  0.008  80);
  --c-border:    oklch(0.30  0.014 250);
  --c-border-strong: oklch(0.40 0.016 250);
  --c-primary:   oklch(0.66  0.06  250);
  --c-primary-h: oklch(0.74  0.07  250);
  --c-primary-fg: oklch(0.14  0.018 250);
  --c-tint:      oklch(0.30  0.05  250);
  --c-focus:     oklch(0.70  0.10  250);
}

/* ───── Dark-palette shared overrides ─────
   Shadows: alpha ~4× because black-on-black shadow is weak; pair with
   surface-lightness steps (--c-bg < --c-surface-2 < --c-surface) for elevation.
   Functional accents: lightness ↑ for contrast on dark surface (L≈0.22). */
[data-palette$="-dark"] {
  --shadow-sm:   0 1px 2px  rgb(0 0 0 / 0.40);
  --shadow-md:   0 2px 6px  rgb(0 0 0 / 0.45), 0 1px 2px rgb(0 0 0 / 0.35);
  --shadow-lg:   0 12px 28px rgb(0 0 0 / 0.55), 0 4px 8px rgb(0 0 0 / 0.40);
  --shadow-card: 0 1px 2px  rgb(0 0 0 / 0.35),
                 0 4px 10px rgb(0 0 0 / 0.40),
                 0 12px 24px rgb(0 0 0 / 0.50);

  --c-success: oklch(0.66 0.10 150);
  --c-warning: oklch(0.78 0.11  75);
  --c-error:   oklch(0.66 0.15  27);
  --c-info:    oklch(0.66 0.09 245);
}

/* ───── Annotation color sets ─────
   Two curated 8-color sets the user picks from when authoring annotations.
   These are independent from the UI palette so the shell can be calm
   while annotations stay expressive (or both can be calm together).      */
:root {
  /* Vibrant — figma-style. Default for "강조 우선" 사용자. */
  --ann-vib-1: oklch(0.18 0.005 250);   /* ink black */
  --ann-vib-2: oklch(0.99 0     0);     /* paper white */
  --ann-vib-3: oklch(0.62 0.22  27);    /* red */
  --ann-vib-4: oklch(0.70 0.18 350);    /* pink */
  --ann-vib-5: oklch(0.60 0.16 145);    /* green */
  --ann-vib-6: oklch(0.55 0.18 250);    /* blue */
  --ann-vib-7: oklch(0.82 0.15  90);    /* yellow */
  --ann-vib-8: oklch(0.50 0.18 290);    /* purple */

  /* Muted — same 8 hues, chroma halved. B2B-friendly default. */
  --ann-mut-1: oklch(0.20 0.008 250);
  --ann-mut-2: oklch(0.99 0     0);
  --ann-mut-3: oklch(0.45 0.10  27);
  --ann-mut-4: oklch(0.50 0.09 350);
  --ann-mut-5: oklch(0.45 0.08 145);
  --ann-mut-6: oklch(0.42 0.09 250);
  --ann-mut-7: oklch(0.62 0.10  75);
  --ann-mut-8: oklch(0.42 0.08 290);
}

/* ───── Base ───── */
html, body { margin: 0; padding: 0; }
body {
  font-family: var(--ff-sans);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  color: var(--c-text);
  background: var(--c-bg);
  font-feature-settings: 'ss03', 'cv01';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* { box-sizing: border-box; }
`;
function lt() {
  return Xf.replace(/:root\s*\{/g, ":host {").replace(/\[data-palette([^\]]*)\]\s*\{/g, ":host([data-palette$1]) {");
}
const Eo = "studio", Kf = [
  "studio",
  "ink",
  "graphite",
  "sepia",
  "studio-dark",
  "ink-dark"
];
function To(e) {
  return typeof e == "string" && Kf.includes(e);
}
function Jf(e) {
  return e.endsWith("-dark");
}
let Ze = null;
const Mn = /* @__PURE__ */ new Set();
let vr = !1;
async function Zf() {
  if (Ze) return Ze;
  try {
    const e = await F().get(H.palette);
    if (To(e))
      return Ze = e, e;
  } catch {
  }
  return Eo;
}
function Qf() {
  return Ze ?? Eo;
}
function em(e) {
  Mn.add(new WeakRef(e)), e.setAttribute("data-palette", Qf()), Zf().then((t) => {
    e.isConnected && e.setAttribute("data-palette", t);
  }), tm();
}
function tm() {
  if (!vr) {
    vr = !0;
    try {
      F().subscribe([H.palette], (e, t) => {
        To(t) && (Ze = t, nm(t));
      });
    } catch {
    }
  }
}
function nm(e) {
  for (const t of [...Mn]) {
    const n = t.deref();
    n && n.isConnected ? (n.setAttribute("data-palette", e), rm(n, e)) : Mn.delete(t);
  }
}
function rm(e, t) {
  var r;
  const n = (r = e.shadowRoot) == null ? void 0 : r.querySelector('[data-region="palette-toggle"]');
  n && n.setAttribute("aria-pressed", Jf(t) ? "true" : "false");
}
const om = 140, sm = 140;
function am() {
  return `
    ${lt()}
    :host {
      display: block;
      font-family: var(--ff-sans);
      color: var(--c-text);
    }
    *, *::before, *::after { box-sizing: border-box; }

    .picker {
      width: 240px;
      background: var(--c-surface);
      border: 1px solid var(--c-border);
      border-radius: var(--r-md);
      box-shadow: var(--shadow-card);
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .top { display: flex; gap: 10px; }
    .sv {
      position: relative;
      flex: 1;
      height: ${om}px;
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border);
      cursor: crosshair;
      overflow: hidden;
      user-select: none;
    }
    .sv-base { position: absolute; inset: 0; }
    .sv-white {
      position: absolute; inset: 0;
      background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));
    }
    .sv-black {
      position: absolute; inset: 0;
      background: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));
    }
    .sv-cursor {
      position: absolute;
      width: 12px; height: 12px;
      border: 1.5px solid #ffffff;
      border-radius: 999px;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 0 1px rgb(0 0 0 / 0.35);
      pointer-events: none;
    }

    .hue {
      position: relative;
      width: 12px;
      height: ${sm}px;
      border-radius: 999px;
      border: 1px solid var(--c-border);
      cursor: pointer;
      background: linear-gradient(
        to bottom,
        #f00 0%, #ff0 17%, #0f0 33%,
        #0ff 50%, #00f 67%, #f0f 83%, #f00 100%
      );
      user-select: none;
    }
    .hue-cursor {
      position: absolute;
      left: 50%;
      width: 18px; height: 8px;
      border-radius: 4px;
      background: var(--c-surface);
      border: 1.5px solid var(--c-text);
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.12);
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
  `;
}
function im() {
  return `
    .actions { display: flex; align-items: center; gap: 6px; }
    .icon-btn {
      width: 28px; height: 28px;
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border);
      background: var(--c-surface);
      color: var(--c-text);
      cursor: pointer;
      padding: 0;
      display: grid;
      place-items: center;
      transition: border-color 0.12s ease;
    }
    .icon-btn:hover { border-color: var(--c-border-strong); }
    .icon-btn:focus-visible {
      outline: 2px solid var(--c-focus);
      outline-offset: 2px;
    }
    .icon-btn svg { display: block; }
    .preview {
      flex: 1;
      height: 28px;
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border-strong);
      box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.12);
    }
    .confirm {
      border-color: var(--c-text);
      background: var(--c-text);
      color: var(--c-surface);
    }
    .confirm:hover {
      background: var(--c-primary);
      border-color: var(--c-primary);
      color: var(--c-primary-fg);
    }

    .rgb-wrap { display: flex; flex-direction: column; gap: 4px; }
    .rgb-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-soft);
    }
    .modes { display: inline-flex; gap: 8px; }
    .modes .active { color: var(--c-text); }
    .hex-display {
      font-family: var(--ff-mono);
      font-size: 10px;
      letter-spacing: 0;
      color: var(--c-text-mute);
      text-transform: none;
    }
    .rgb { display: flex; gap: 8px; }
    .rgb-cell {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
    .rgb-cell input {
      width: 100%;
      height: 28px;
      padding: 0 8px;
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      background: var(--c-surface);
      color: var(--c-text);
      font-family: var(--ff-mono);
      font-size: 12px;
      font-weight: 500;
      font-variant-numeric: tabular-nums;
      text-align: center;
      line-height: 1;
      appearance: textfield;
    }
    .rgb-cell input:focus {
      outline: none;
      border-color: var(--c-focus);
    }
    .rgb-cell input::-webkit-outer-spin-button,
    .rgb-cell input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .rgb-cell label {
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.10em;
      color: var(--c-text-soft);
      text-transform: uppercase;
      line-height: 1;
    }

    .recent { display: flex; flex-direction: column; gap: 6px; }
    .recent-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-soft);
    }
    .recent-list { display: flex; gap: 4px; flex-wrap: wrap; }
    .recent-swatch {
      width: 18px;
      height: 18px;
      border-radius: 4px;
      border: 1px solid var(--c-border);
      cursor: pointer;
      padding: 0;
      background: transparent;
    }
    .recent-swatch:hover { border-color: var(--c-border-strong); }
    .recent-swatch:focus-visible {
      outline: 2px solid var(--c-focus);
      outline-offset: 1px;
    }
  `;
}
function cm() {
  return [am(), im()].join(`
`);
}
function Lo(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function lm(e) {
  return Lo(e).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function U(e) {
  return lm(e);
}
function um() {
  return `
    <style>${cm()}</style>
    <div class="picker" role="dialog" aria-label="Custom color picker">
      ${dm()}
      ${pm()}
      ${hm()}
      ${fm()}
    </div>
  `;
}
function dm() {
  return `
    <div class="top">
      <div class="sv" data-region="sv">
        <div class="sv-base" data-region="sv-base"></div>
        <div class="sv-white"></div>
        <div class="sv-black"></div>
        <div class="sv-cursor" data-region="sv-cursor"></div>
      </div>
      <div class="hue" data-region="hue">
        <div class="hue-cursor" data-region="hue-cursor"></div>
      </div>
    </div>
  `;
}
function pm() {
  return `
    <div class="actions">
      <button type="button" class="icon-btn" data-action="eyedrop" title="Pick from page" aria-label="Eyedropper">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <g transform="rotate(45 8 8)">
            <path d="M 6 2 a 2 1.5 0 0 1 4 0 v 1.5 h -0.4 v 1 h 0.4 v 5.4 l -2 4.6 l -2 -4.6 v -5.4 h 0.4 v -1 h -0.4 z"/>
          </g>
        </svg>
      </button>
      <div class="preview" data-region="preview"></div>
      <button type="button" class="icon-btn confirm" data-action="confirm" title="Apply" aria-label="Confirm and apply color">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M 3.5 8.5 L 6.5 11.5 L 12.5 5"/>
        </svg>
      </button>
    </div>
  `;
}
function hm() {
  return `
    <div class="rgb-wrap">
      <div class="rgb-head">
        <span class="modes">
          <span class="active">RGB</span>
          <span>HEX</span>
          <span>HSL</span>
        </span>
        <span class="hex-display" data-region="hex">#000000</span>
      </div>
      <div class="rgb">
        <div class="rgb-cell">
          <input type="number" min="0" max="255" data-channel="r" aria-label="Red" />
          <label>R</label>
        </div>
        <div class="rgb-cell">
          <input type="number" min="0" max="255" data-channel="g" aria-label="Green" />
          <label>G</label>
        </div>
        <div class="rgb-cell">
          <input type="number" min="0" max="255" data-channel="b" aria-label="Blue" />
          <label>B</label>
        </div>
      </div>
    </div>
  `;
}
function fm() {
  var s, i;
  const e = D(), t = ((s = e == null ? void 0 : e.customColors) == null ? void 0 : s.text) ?? [], n = ((i = e == null ? void 0 : e.customColors) == null ? void 0 : i.background) ?? [], r = Array.from(/* @__PURE__ */ new Set([...t, ...n])).slice(-7);
  return r.length === 0 ? "" : `
    <div class="recent" data-region="recent">
      <span class="recent-label">Recent</span>
      <div class="recent-list">${r.map(
    (a) => `<button type="button" class="recent-swatch" data-action="recent" data-color="${U(a)}" style="background: ${U(a)}" aria-label="Use ${U(a)}" title="${U(a)}"></button>`
  ).join("")}</div>
    </div>
  `;
}
function mm(e, t) {
  const n = t.getBoundingClientRect();
  e.style.top = "0px", e.style.left = "0px";
  const r = e.getBoundingClientRect();
  let o = n.bottom + 8;
  o + r.height > window.innerHeight - 8 && (o = n.top - r.height - 8);
  let s = n.left;
  s + r.width > window.innerWidth - 8 && (s = window.innerWidth - r.width - 8), e.style.top = `${Math.max(8, o)}px`, e.style.left = `${Math.max(8, s)}px`;
}
function Ve() {
  const e = document.createElement("div");
  e.setAttribute("data-manuscript", "ui"), em(e);
  const t = e.attachShadow({ mode: "open" });
  return { host: e, shadow: t };
}
let K = null, O = null, ue = 0, Se = 1, $e = 1, de = null;
function gm(e) {
  Ae(), de = e.onConfirm;
  const t = Mo(e.initialColor);
  ue = t.h, Se = t.s, $e = t.v, { host: K, shadow: O } = Ve(), K.style.cssText = [
    "position: fixed",
    `z-index: ${te + 7}`,
    "pointer-events: auto"
  ].join("; "), O.innerHTML = um(), _m(), document.body.appendChild(K), mm(K, e.anchor), ut(), document.addEventListener("mousedown", Po, !0), document.addEventListener("keydown", Io, !0);
}
function Ae() {
  K && (document.removeEventListener("mousedown", Po, !0), document.removeEventListener("keydown", Io, !0), K.remove(), K = null, O = null, de = null);
}
function bm() {
  return K !== null;
}
function ut() {
  if (!O) return;
  const e = O.querySelector('[data-region="sv-base"]');
  e && (e.style.background = `hsl(${ue}deg, 100%, 50%)`);
  const t = O.querySelector('[data-region="sv-cursor"]');
  t && (t.style.left = `${Se * 100}%`, t.style.top = `${(1 - $e) * 100}%`);
  const n = O.querySelector('[data-region="hue-cursor"]');
  n && (n.style.top = `${ue / 360 * 100}%`);
  const [r, o, s] = So(ue, Se, $e), i = Ao(r, o, s), a = O.querySelector('[data-region="preview"]');
  a && (a.style.background = `rgb(${r}, ${o}, ${s})`);
  const c = O.querySelector('[data-region="hex"]');
  c && (c.textContent = i), O.querySelectorAll("[data-channel]").forEach((l) => {
    if (document.activeElement === K && O.activeElement === l) return;
    const u = l.dataset.channel;
    u === "r" ? l.value = String(r) : u === "g" ? l.value = String(o) : u === "b" && (l.value = String(s));
  });
}
function Co() {
  const [e, t, n] = So(ue, Se, $e);
  return Ao(e, t, n);
}
function _m() {
  if (!O) return;
  const e = O.querySelector('[data-region="sv"]');
  e && yr(e, (n) => ym(e, n));
  const t = O.querySelector('[data-region="hue"]');
  t && yr(t, (n) => vm(t, n)), O.addEventListener("input", (n) => {
    var c, l, u;
    const r = n.target;
    if (!(r instanceof HTMLInputElement) || !r.dataset.channel) return;
    const o = pn((c = O.querySelector('[data-channel="r"]')) == null ? void 0 : c.value), s = pn((l = O.querySelector('[data-channel="g"]')) == null ? void 0 : l.value), i = pn((u = O.querySelector('[data-channel="b"]')) == null ? void 0 : u.value), a = $o(o, s, i);
    ue = a.h, Se = a.s, $e = a.v, ut();
  }), O.addEventListener("click", (n) => {
    const r = n.target;
    if (!(r instanceof Element)) return;
    const o = r.closest("[data-action]"), s = o == null ? void 0 : o.getAttribute("data-action");
    if (s === "confirm")
      de == null || de(Co()), Ae();
    else if (s === "eyedrop")
      Yf(xr);
    else if (s === "recent") {
      const i = o == null ? void 0 : o.getAttribute("data-color");
      i && xr(i);
    }
  });
}
function xr(e) {
  const t = Mo(e);
  ue = t.h, Se = t.s, $e = t.v, ut();
}
function ym(e, t) {
  const n = e.getBoundingClientRect();
  Se = Math.max(0, Math.min(1, (t.clientX - n.left) / n.width)), $e = Math.max(0, Math.min(1, 1 - (t.clientY - n.top) / n.height)), ut();
}
function vm(e, t) {
  const n = e.getBoundingClientRect();
  ue = Math.max(0, Math.min(1, (t.clientY - n.top) / n.height)) * 360, ut();
}
function Po(e) {
  if (!K) return;
  const t = e.target;
  t instanceof HTMLElement && K.contains(t) || Ae();
}
function Io(e) {
  e.key === "Escape" ? (e.preventDefault(), Ae()) : e.key === "Enter" && (e.preventDefault(), de == null || de(Co()), Ae());
}
const vt = 8, Ce = 6, Oo = 32, wr = 16, xt = 4, Ro = [
  { name: "nw", cursor: "nwse-resize", offset: (e) => ({ x: e.x, y: e.y }) },
  { name: "n", cursor: "ns-resize", offset: (e) => ({ x: e.x + e.width / 2, y: e.y }) },
  { name: "ne", cursor: "nesw-resize", offset: (e) => ({ x: e.x + e.width, y: e.y }) },
  { name: "e", cursor: "ew-resize", offset: (e) => ({ x: e.x + e.width, y: e.y + e.height / 2 }) },
  { name: "se", cursor: "nwse-resize", offset: (e) => ({ x: e.x + e.width, y: e.y + e.height }) },
  { name: "s", cursor: "ns-resize", offset: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height }) },
  { name: "sw", cursor: "nesw-resize", offset: (e) => ({ x: e.x, y: e.y + e.height }) },
  { name: "w", cursor: "ew-resize", offset: (e) => ({ x: e.x, y: e.y + e.height / 2 }) }
];
function kr(e, t, n, r) {
  let { x: o, y: s, width: i, height: a } = t;
  return e === "nw" || e === "w" || e === "sw" ? (o += n, i -= n) : (e === "ne" || e === "e" || e === "se") && (i += n), e === "nw" || e === "n" || e === "ne" ? (s += r, a -= r) : (e === "sw" || e === "s" || e === "se") && (a += r), i < Ce && (o = t.x + t.width - Ce, i = Ce), a < Ce && (s = t.y + t.height - Ce, a = Ce), { x: o, y: s, width: i, height: a };
}
function No(e) {
  if (e.length === 0) return null;
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (const s of e)
    s.x < t && (t = s.x), s.y < n && (n = s.y), s.x > r && (r = s.x), s.y > o && (o = s.y);
  return { x: t, y: n, width: r - t, height: o - n };
}
function xm(e) {
  const t = document.querySelector(`[data-annotation-text="${e}"]`);
  if (!t) return null;
  const n = t.getBoundingClientRect();
  return { x: n.left, y: n.top, width: n.width, height: n.height };
}
const $ = {
  host: null,
  activeId: null,
  activeMode: "shape",
  dragState: null,
  unsubscribeScenario: null
}, C = "http://www.w3.org/2000/svg";
function Do(e) {
  if (!e.bounds) return e;
  const t = Z();
  return t ? {
    ...e,
    boundsAnchorOffset: {
      x: e.bounds.x - t.left,
      y: e.bounds.y - t.top
    }
  } : { ...e, boundsAnchorOffset: void 0 };
}
function wm(e) {
  if (!e.points) return e;
  const t = Z();
  return t ? {
    ...e,
    pointsAnchorOffset: e.points.map((n) => ({
      x: n.x - t.left,
      y: n.y - t.top
    }))
  } : { ...e, pointsAnchorOffset: void 0 };
}
function km() {
  document.removeEventListener("mousemove", Un, !0), document.removeEventListener("mouseup", jn, !0), document.removeEventListener("keydown", qo, !0);
}
function Sm() {
  document.addEventListener("keydown", qo, !0);
}
function $m(e, t) {
  if (!$.activeId) return;
  e.stopPropagation(), e.preventDefault();
  const n = E($.activeId);
  if (!n || n.kind !== "shape") return;
  const r = Kt(n, Z());
  $.dragState = {
    kind: "resize",
    handle: t,
    startMouse: { x: e.clientX, y: e.clientY },
    startBounds: { ...n.bounds, x: r.x, y: r.y }
  }, Zt();
}
function Am(e) {
  if (!$.activeId) return;
  e.stopPropagation(), e.preventDefault();
  const t = E($.activeId);
  if (!t || t.kind !== "shape") return;
  const n = t.bounds.x + t.bounds.width / 2, r = t.bounds.y + t.bounds.height / 2, o = Math.atan2(e.clientY - r, e.clientX - n) * 180 / Math.PI;
  $.dragState = {
    kind: "rotate",
    center: { x: n, y: r },
    startMouseAngle: o,
    startRotation: t.rotate ?? 0
  }, Zt();
}
function Bo(e, t) {
  if (!$.activeId) return;
  e.stopPropagation(), e.preventDefault();
  const n = E($.activeId);
  if (!n) return;
  const r = t(), o = Math.atan2(e.clientY - r.y, e.clientX - r.x) * 180 / Math.PI, s = n.kind === "shape" || n.kind === "freedraw" || n.kind === "text" ? n.rotate ?? 0 : 0;
  $.dragState = {
    kind: "rotate",
    center: r,
    startMouseAngle: o,
    startRotation: s
  }, Zt();
}
function Mm(e, t) {
  if (!$.activeId) return;
  e.stopPropagation(), e.preventDefault();
  const n = E($.activeId);
  if (!n || n.kind !== "freedraw") return;
  const r = Jt(n, Z()), o = No(r);
  !o || o.width === 0 || o.height === 0 || ($.dragState = {
    kind: "freedraw-resize",
    handle: t,
    startMouse: { x: e.clientX, y: e.clientY },
    startBounds: { ...o },
    startPoints: r.map((s) => ({ ...s }))
  }, Zt());
}
function Zt() {
  Nt("handle-drag"), document.addEventListener("mousemove", Un, !0), document.addEventListener("mouseup", jn, !0);
}
function Un(e) {
  const { activeId: t, dragState: n } = $;
  if (!t || !n) return;
  e.preventDefault();
  const r = E(t);
  if (!r) return;
  const o = n.kind !== "rotate" ? e.clientX - n.startMouse.x : 0, s = n.kind !== "rotate" ? e.clientY - n.startMouse.y : 0;
  if (n.kind === "resize" && r.kind === "shape") {
    const i = kr(n.handle, n.startBounds, o, s);
    T(t, Do({ bounds: i }));
  } else if (n.kind === "freedraw-resize" && r.kind === "freedraw") {
    const i = n.startBounds, a = kr(n.handle, i, o, s), c = i.width === 0 ? 1 : a.width / i.width, l = i.height === 0 ? 1 : a.height / i.height, u = n.startPoints.map((h) => ({
      x: a.x + (h.x - i.x) * c,
      y: a.y + (h.y - i.y) * l
    }));
    T(t, wm({ points: u }));
  } else if (n.kind === "rotate") {
    const i = Math.atan2(e.clientY - n.center.y, e.clientX - n.center.x) * 180 / Math.PI;
    let a = (n.startRotation + (i - n.startMouseAngle)) % 360;
    a < 0 && (a += 360), r.kind === "shape" ? T(t, { rotate: a }) : r.kind === "freedraw" ? T(t, { rotate: a }) : r.kind === "text" && T(t, { rotate: a });
  }
}
function jn() {
  document.removeEventListener("mousemove", Un, !0), document.removeEventListener("mouseup", jn, !0), $.dragState = null, it();
}
function qo(e) {
  var o;
  const { activeId: t } = $;
  if (!t) return;
  const n = (o = e.target) == null ? void 0 : o.tagName;
  if (n === "INPUT" || n === "TEXTAREA" || n === "SELECT") return;
  const r = document.activeElement;
  if (!(r != null && r.isContentEditable)) {
    if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault(), to(t);
      return;
    }
    if (e.key.startsWith("Arrow")) {
      const s = E(t);
      if (!s || s.kind !== "shape") return;
      const i = e.shiftKey ? 10 : 1, a = e.key === "ArrowLeft" ? -i : e.key === "ArrowRight" ? i : 0, c = e.key === "ArrowUp" ? -i : e.key === "ArrowDown" ? i : 0;
      if (a !== 0 || c !== 0) {
        e.preventDefault();
        const l = Kt(s, Z());
        T(
          t,
          Do({ bounds: { ...s.bounds, x: l.x + a, y: l.y + c } })
        );
      }
    }
  }
}
function zo(e, t, n, r, o) {
  const s = document.createElementNS(C, "rect");
  return s.setAttribute("x", String(e - vt / 2)), s.setAttribute("y", String(t - vt / 2)), s.setAttribute("width", String(vt)), s.setAttribute("height", String(vt)), s.setAttribute("fill", "oklch(1 0 0)"), s.setAttribute("stroke", "oklch(0.48 0.085 245)"), s.setAttribute("stroke-width", "2"), s.style.cursor = r, s.style.pointerEvents = "auto", s.setAttribute("pointer-events", "all"), s.addEventListener("mousedown", (i) => o(i, n)), s;
}
function Fo(e, t, n) {
  const r = document.createElementNS(C, "g"), o = t - 18, s = t - Oo, i = 12, a = document.createElementNS(C, "line");
  a.setAttribute("x1", String(e)), a.setAttribute("y1", String(t)), a.setAttribute("x2", String(e)), a.setAttribute("y2", String(o)), a.setAttribute("stroke", "oklch(0.48 0.085 245)"), a.setAttribute("stroke-width", "1"), a.setAttribute("stroke-dasharray", "2 3"), a.style.pointerEvents = "none", r.appendChild(a);
  const c = document.createElementNS(C, "circle");
  c.setAttribute("cx", String(e)), c.setAttribute("cy", String(s + 1)), c.setAttribute("r", String(i)), c.setAttribute("fill", "rgba(0,0,0,0.04)"), c.style.pointerEvents = "none", r.appendChild(c);
  const l = document.createElementNS(C, "circle");
  l.setAttribute("cx", String(e)), l.setAttribute("cy", String(s)), l.setAttribute("r", String(i)), l.setAttribute("fill", "oklch(1 0 0)"), l.setAttribute("stroke", "oklch(0.48 0.085 245)"), l.setAttribute("stroke-width", "1"), l.style.cursor = "grab", l.setAttribute("pointer-events", "all"), r.appendChild(l);
  const u = e - 8, h = s - 8, d = document.createElementNS(C, "path");
  d.setAttribute("d", `M ${u + 4} ${h + 11} A 5 5 0 1 1 ${u + 11} ${h + 4}`), d.setAttribute("fill", "none"), d.setAttribute("stroke", "oklch(0.48 0.085 245)"), d.setAttribute("stroke-width", "1.5"), d.setAttribute("stroke-linecap", "round"), d.setAttribute("stroke-linejoin", "round"), d.style.pointerEvents = "none", r.appendChild(d);
  const p = document.createElementNS(C, "path");
  return p.setAttribute(
    "d",
    `M ${u + 11} ${h + 1.5} L ${u + 14} ${h + 4} L ${u + 11} ${h + 6.5} Z`
  ), p.setAttribute("fill", "oklch(0.48 0.085 245)"), p.setAttribute("stroke", "oklch(0.48 0.085 245)"), p.setAttribute("stroke-width", "1.5"), p.setAttribute("stroke-linejoin", "round"), p.style.pointerEvents = "none", r.appendChild(p), l.addEventListener("mousedown", (f) => n(f)), r;
}
function Vn(e, t) {
  const n = document.createElementNS(C, "g"), r = e.x - wr, o = e.y - wr;
  return n.appendChild(Em(r, o, t)), n;
}
function Em(e, t, n) {
  const r = document.createElementNS(C, "g");
  r.style.cursor = "pointer", r.style.pointerEvents = "auto", r.setAttribute("pointer-events", "all");
  const o = document.createElementNS(C, "circle");
  o.setAttribute("cx", String(e)), o.setAttribute("cy", String(t + 1)), o.setAttribute("r", "12"), o.setAttribute("fill", "rgba(0,0,0,0.04)"), o.style.pointerEvents = "none", r.appendChild(o);
  const s = document.createElementNS(C, "circle");
  s.setAttribute("cx", String(e)), s.setAttribute("cy", String(t)), s.setAttribute("r", "12"), s.setAttribute("fill", "oklch(1 0 0)"), s.setAttribute("stroke", "oklch(0.92 0.008 240)"), s.setAttribute("stroke-width", "1"), r.appendChild(s);
  const i = e - 6, a = t - 6, c = document.createElementNS(C, "path");
  return c.setAttribute(
    "d",
    [
      `M ${i + 1.5} ${a + 3.5} L ${i + 10.5} ${a + 3.5}`,
      `M ${i + 4.5} ${a + 3.5} L ${i + 4.5} ${a + 2} L ${i + 7.5} ${a + 2} L ${i + 7.5} ${a + 3.5}`,
      `M ${i + 3} ${a + 3.5} L ${i + 3.5} ${a + 10.5} A 0.8 0.8 0 0 0 ${i + 4.3} ${a + 11} L ${i + 7.7} ${a + 11} A 0.8 0.8 0 0 0 ${i + 8.5} ${a + 10.5} L ${i + 9} ${a + 3.5}`
    ].join(" ")
  ), c.setAttribute("fill", "none"), c.setAttribute("stroke", "oklch(0.50 0.015 240)"), c.setAttribute("stroke-width", "1.2"), c.setAttribute("stroke-linecap", "round"), c.setAttribute("stroke-linejoin", "round"), c.style.pointerEvents = "none", r.appendChild(c), r.addEventListener("mousedown", (l) => {
    l.stopPropagation(), l.preventDefault(), n();
  }), r;
}
function Gn(e) {
  const t = document.createElementNS(C, "rect");
  return t.setAttribute("x", String(e.x)), t.setAttribute("y", String(e.y)), t.setAttribute("width", String(e.width)), t.setAttribute("height", String(e.height)), t.setAttribute("fill", "none"), t.setAttribute("stroke", "oklch(0.48 0.085 245)"), t.setAttribute("stroke-width", "1"), t.setAttribute("stroke-dasharray", "4 3"), t;
}
function Qt() {
  const { host: e, activeId: t, activeMode: n } = $;
  if (!e || !t) return;
  for (; e.firstChild; ) e.removeChild(e.firstChild);
  const r = E(t);
  if (!r) {
    En();
    return;
  }
  if (n === "freedraw" && r.kind === "freedraw") {
    Pm(e, r);
    return;
  }
  if (n === "text" && r.kind === "text") {
    Cm(e, r);
    return;
  }
  if (r.kind !== "shape") {
    En();
    return;
  }
  Tm(e, r);
}
function Tm(e, t) {
  const n = Kt(t, Z()), r = { ...t.bounds, x: n.x, y: n.y }, o = t.rotate ?? 0, s = r.x + r.width / 2, i = r.y + r.height / 2, a = document.createElementNS(C, "g");
  o && a.setAttribute("transform", `rotate(${o} ${s} ${i})`), a.appendChild(Gn(r));
  for (const c of Ro) {
    const { x: l, y: u } = c.offset(r);
    a.appendChild(zo(l, u, c.name, c.cursor, $m));
  }
  a.appendChild(Lm(r)), e.appendChild(a), e.appendChild(Vn(r, Yn));
}
function Lm(e) {
  const t = e.x + e.width / 2, n = e.y - Oo, r = document.createElementNS(C, "g"), o = document.createElementNS(C, "line");
  o.setAttribute("x1", String(t)), o.setAttribute("y1", String(e.y)), o.setAttribute("x2", String(t)), o.setAttribute("y2", String(n)), o.setAttribute("stroke", "oklch(0.48 0.085 245)"), o.setAttribute("stroke-width", "1"), r.appendChild(o);
  const s = document.createElementNS(C, "g");
  s.style.cursor = "grab", s.style.pointerEvents = "auto", s.setAttribute("pointer-events", "all");
  const i = document.createElementNS(C, "circle");
  i.setAttribute("cx", String(t)), i.setAttribute("cy", String(n)), i.setAttribute("r", "9"), i.setAttribute("fill", "oklch(1 0 0)"), i.setAttribute("stroke", "oklch(0.48 0.085 245)"), i.setAttribute("stroke-width", "2"), s.appendChild(i);
  const a = document.createElementNS(C, "path");
  return a.setAttribute(
    "d",
    `M ${t - 4} ${n - 1} A 4 4 0 1 1 ${t + 3} ${n + 2} M ${t + 1} ${n - 1} L ${t + 3} ${n + 2} L ${t + 5} ${n - 1}`
  ), a.setAttribute("fill", "none"), a.setAttribute("stroke", "oklch(0.48 0.085 245)"), a.setAttribute("stroke-width", "1.4"), a.setAttribute("stroke-linecap", "round"), a.setAttribute("stroke-linejoin", "round"), a.style.pointerEvents = "none", s.appendChild(a), s.addEventListener("mousedown", (c) => Am(c)), r.appendChild(s), r;
}
function Cm(e, t) {
  const n = xm(t.id);
  if (!n) return;
  const r = Ho(n), o = r.x + r.width / 2, s = r.y + r.height / 2;
  e.appendChild(Gn(r)), e.appendChild(Fo(o, r.y, (i) => Bo(i, () => ({ x: o, y: s })))), e.appendChild(Vn(r, Yn));
}
function Pm(e, t) {
  const n = Jt(t, Z()), r = No(n);
  if (!r) return;
  const o = Ho(r), s = o.x + o.width / 2, i = o.y + o.height / 2;
  e.appendChild(Gn(o));
  for (const a of Ro) {
    if (a.name !== "nw" && a.name !== "ne" && a.name !== "sw" && a.name !== "se") continue;
    const { x: c, y: l } = a.offset(o);
    e.appendChild(zo(c, l, a.name, a.cursor, Mm));
  }
  e.appendChild(Fo(s, o.y, (a) => Bo(a, () => ({ x: s, y: i })))), e.appendChild(Vn(o, Yn));
}
function Ho(e) {
  return {
    x: e.x - xt,
    y: e.y - xt,
    width: e.width + xt * 2,
    height: e.height + xt * 2
  };
}
function Yn() {
  const e = $.activeId;
  e && to(e);
}
function Im(e) {
  const t = E(e);
  if (!t) return;
  const n = t.entryAnimation;
  if (!n || n.kind === "none") return;
  const o = {
    text: `[data-annotation-text="${e}"]`,
    shape: `[data-annotation-shape="${e}"]`,
    freedraw: `[data-annotation-freedraw="${e}"]`,
    arrow: `[data-annotation-arrow="${e}"]`
  }[t.kind];
  if (!o) return;
  const s = document.querySelectorAll(o);
  if (s.length === 0) return;
  const i = t.kind === "shape" || t.kind === "freedraw" || t.kind === "text" ? t.rotate ?? 0 : 0;
  s.forEach((a) => {
    a.style.animation = "";
  }), s[0].getBoundingClientRect(), s.forEach((a) => {
    a.style.transformBox = "fill-box", a.style.transformOrigin = "center", a.style.setProperty("--wp-final-rot", `${i}deg`), a.style.animation = `wp-${n.kind} ${Math.max(50, n.durationMs)}ms ease-out backwards`;
    const c = () => {
      a.style.animation = "", a.style.transformBox = "", a.style.transformOrigin = "", a.removeEventListener("animationend", c), a.removeEventListener("animationcancel", c);
    };
    a.addEventListener("animationend", c), a.addEventListener("animationcancel", c);
  });
}
function Om(e) {
  const t = E(e);
  !t || t.kind !== "shape" || ($.activeId = e, $.activeMode = "shape", Xn(), Qt());
}
function Rm(e) {
  const t = E(e);
  !t || t.kind !== "freedraw" || ($.activeId = e, $.activeMode = "freedraw", Xn(), Qt());
}
function Nm(e) {
  const t = E(e);
  !t || t.kind !== "text" || ($.activeId = e, $.activeMode = "text", Xn(), Qt());
}
function En() {
  var e;
  $.host && (km(), (e = $.unsubscribeScenario) == null || e.call($), $.unsubscribeScenario = null, $.host.remove(), $.host = null, $.activeId = null, $.activeMode = "shape", $.dragState = null);
}
function Dm(e) {
  return $.host !== null && e !== null && $.host.contains(e);
}
function Xn() {
  if ($.host) return;
  const e = document.createElementNS(C, "svg");
  e.setAttribute("data-manuscript", "ui"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e.style.cssText = [
    "position: fixed",
    "top: 0",
    "left: 0",
    "width: 100vw",
    "height: 100vh",
    "pointer-events: none",
    `z-index: ${te + 4}`,
    "overflow: visible"
  ].join("; "), document.body.appendChild(e), $.host = e, Sm(), $.unsubscribeScenario = at(Qt);
}
function Bm(e) {
  switch (e.kind) {
    case "text":
      return { style: { ...e.style }, entryAnimation: e.entryAnimation };
    case "shape":
      return {
        fill: e.fill,
        stroke: e.stroke,
        strokeWidth: e.strokeWidth,
        fillOpacity: e.fillOpacity,
        entryAnimation: e.entryAnimation
      };
    case "arrow":
      return { color: e.color, strokeWidth: e.strokeWidth, entryAnimation: e.entryAnimation };
    case "freedraw":
      return {
        stroke: e.stroke,
        strokeWidth: e.strokeWidth,
        strokeOpacity: e.strokeOpacity,
        entryAnimation: e.entryAnimation
      };
  }
}
const qm = 400, zm = 0;
function Fm(e) {
  return {
    kind: e,
    durationMs: qm,
    delayMs: zm
  };
}
function Hm(e) {
  var t;
  return ((t = e.entryAnimation) == null ? void 0 : t.kind) ?? "none";
}
const Sr = 10, Wm = 46, Wo = 12, Uo = 36, jo = 0, Vo = 20, Um = [
  { token: "var(--ann-mut-1)", resolved: "oklch(0.20 0.008 250)" },
  { token: "var(--ann-mut-2)", resolved: "oklch(0.99 0 0)" },
  { token: "var(--ann-mut-3)", resolved: "oklch(0.45 0.10 27)" },
  { token: "var(--ann-mut-4)", resolved: "oklch(0.50 0.09 350)" },
  { token: "var(--ann-mut-5)", resolved: "oklch(0.45 0.08 145)" },
  { token: "var(--ann-mut-6)", resolved: "oklch(0.42 0.09 250)" },
  { token: "var(--ann-mut-7)", resolved: "oklch(0.62 0.10 75)" },
  { token: "var(--ann-mut-8)", resolved: "oklch(0.42 0.08 290)" }
], jm = [
  { token: "var(--ann-vib-1)", resolved: "oklch(0.18 0.005 250)" },
  { token: "var(--ann-vib-2)", resolved: "oklch(0.99 0 0)" },
  { token: "var(--ann-vib-3)", resolved: "oklch(0.62 0.22 27)" },
  { token: "var(--ann-vib-4)", resolved: "oklch(0.70 0.18 350)" },
  { token: "var(--ann-vib-5)", resolved: "oklch(0.60 0.16 145)" },
  { token: "var(--ann-vib-6)", resolved: "oklch(0.55 0.18 250)" },
  { token: "var(--ann-vib-7)", resolved: "oklch(0.82 0.15 90)" },
  { token: "var(--ann-vib-8)", resolved: "oklch(0.50 0.18 290)" }
], $r = [
  { label: "Sans", value: "'Pretendard Variable', Pretendard, system-ui, sans-serif" },
  { label: "Serif", value: "'EB Garamond', Georgia, serif" },
  { label: "Mono", value: "ui-monospace, monospace" }
];
function Vm(e) {
  return !e || e.length === 0 ? [...$r] : [
    ...e.map((t) => ({ label: Qh(t), value: t })),
    ...$r
  ];
}
const Gm = [
  { value: "none", label: "None" },
  { value: "fade", label: "Fade" },
  { value: "slide-left", label: "Slide →" },
  { value: "slide-right", label: "Slide ←" },
  { value: "slide-up", label: "Slide ↑" },
  { value: "slide-down", label: "Slide ↓" },
  { value: "bounce", label: "Bounce" },
  { value: "zoom", label: "Zoom" },
  { value: "rotate", label: "Rotate (2×)" }
], S = {
  host: null,
  shadow: null,
  activeId: null,
  activeKind: null,
  activeAnchorSelector: null,
  swatchMode: "muted",
  unsubscribeScenario: null
};
function Go(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  n && (n.kind === "text" ? T(t, { style: { ...n.style, color: e } }) : n.kind === "shape" ? T(t, { stroke: e }) : n.kind === "freedraw" && T(t, { stroke: e }));
}
function Yo(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  n && (n.kind === "text" ? T(t, { style: { ...n.style, backgroundColor: e } }) : n.kind === "shape" && T(t, { fill: e }));
}
function Xo(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  !n || n.kind !== "text" || T(t, { style: { ...n.style, borderColor: e } });
}
function Ym(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  !n || n.kind !== "text" || T(t, { style: { ...n.style, fontFamily: e } });
}
function Xm(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  !n || n.kind !== "text" || T(t, { style: { ...n.style, fontSize: e } });
}
function Km() {
  const e = S.activeId;
  if (!e) return;
  const t = E(e);
  !t || t.kind !== "text" || T(e, { style: { ...t.style, bold: !t.style.bold } });
}
function Jm() {
  const e = S.activeId;
  if (!e) return;
  const t = E(e);
  !t || t.kind !== "text" || T(e, {
    style: { ...t.style, italic: t.style.italic !== !0 }
  });
}
function Zm(e) {
  const t = S.activeId;
  t && T(t, {
    entryAnimation: e === "none" ? void 0 : Fm(e)
  });
}
function Qm(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  if (!n) return;
  const r = Math.max(0, Math.min(1, e));
  n.kind === "text" ? T(t, { style: { ...n.style, backgroundOpacity: r } }) : n.kind === "shape" ? T(t, { fillOpacity: r }) : n.kind === "freedraw" && T(t, { strokeOpacity: r });
}
function eg(e) {
  const t = S.activeId;
  if (!t) return;
  const n = E(t);
  n && (n.kind === "shape" ? T(t, { strokeWidth: e }) : n.kind === "freedraw" && T(t, { strokeWidth: e }));
}
function tg() {
  const { shadow: e } = S;
  if (!e) return;
  const t = e.querySelector('[data-region="alpha-track"]'), n = e.querySelector('[data-region="alpha-thumb"]');
  if (!t || !n) return;
  let r = !1;
  const o = (i) => {
    r && hn(t, i.clientX);
  }, s = () => {
    r = !1, document.removeEventListener("mousemove", o, !0), document.removeEventListener("mouseup", s, !0), it();
  };
  n.addEventListener("mousedown", (i) => {
    Nt("alpha"), r = !0, hn(t, i.clientX), document.addEventListener("mousemove", o, !0), document.addEventListener("mouseup", s, !0), i.preventDefault();
  }), t.addEventListener("mousedown", (i) => {
    const a = i.target;
    a instanceof Element && a.closest('[data-region="alpha-thumb"]') || (Nt("alpha"), hn(t, i.clientX), r = !0, document.addEventListener("mousemove", o, !0), document.addEventListener("mouseup", s, !0));
  });
}
function hn(e, t) {
  const n = e.getBoundingClientRect();
  Qm(Math.max(0, Math.min(1, (t - n.left) / n.width)));
}
function Tn(e, t) {
  return e.kind === "text" ? t === "text" ? e.style.color : t === "border" ? e.style.borderColor ?? "#000000" : e.style.backgroundColor ?? "transparent" : e.kind === "shape" ? t === "text" ? e.stroke : e.fill : t === "text" ? e.stroke : "";
}
function ng(e) {
  return e.kind === "text" ? e.style.backgroundOpacity ?? 1 : e.kind === "shape" ? e.fillOpacity ?? 1 : e.strokeOpacity ?? 1;
}
function fn(e, t) {
  return e ? e === t ? !0 : e.replace(/\s+/g, "") === t.replace(/\s+/g, "") : !1;
}
function mn(e, t, n) {
  var l, u, h;
  const r = S.swatchMode === "muted" ? Um : jm, o = [];
  if (n && (e === "bg" || e === "border")) {
    const d = t === "transparent" || !t;
    o.push(`
      <button type="button" class="swatch transparent" data-swatch="${e}" data-value="transparent" title="Transparent" aria-pressed="${d}">
        <svg viewBox="0 0 22 22" width="22" height="22">
          <line x1="3" y1="19" x2="19" y2="3" stroke="var(--c-error)" stroke-width="1.5"/>
        </svg>
      </button>
    `);
  }
  for (let d = 0; d < r.length; d++) {
    const p = r[d];
    if (!p) continue;
    const f = d === 1, m = fn(t, p.resolved);
    o.push(`
      <button type="button" class="swatch${f ? " is-white" : ""}" data-swatch="${e}" data-value="${p.resolved}" style="background:${p.resolved}" aria-pressed="${m}" title="${e} ${p.resolved}"></button>
    `);
  }
  const s = D(), i = (e === "text" || e === "border" ? (l = s == null ? void 0 : s.siteColors) == null ? void 0 : l.text : (u = s == null ? void 0 : s.siteColors) == null ? void 0 : u.background) ?? [];
  for (const d of i) {
    const p = fn(t, d);
    o.push(`
      <button type="button" class="swatch site" data-swatch="${e}" data-value="${U(d)}" style="background:${U(d)}" aria-pressed="${p}" title="Site color ${U(d)}"></button>
    `);
  }
  const a = e === "text" || e === "border" ? "text" : "background", c = ((h = s == null ? void 0 : s.customColors) == null ? void 0 : h[a]) ?? [];
  for (const d of c) {
    const p = fn(t, d);
    o.push(`
      <span class="swatch-wrap">
        <button type="button" class="swatch" data-swatch="${e}" data-value="${U(d)}" style="background:${U(d)}" aria-pressed="${p}" title="Custom ${U(d)}"></button>
        <button type="button" class="swatch-remove" data-action="custom-remove" data-slot="${e}" data-value="${U(d)}" title="Remove" aria-label="Remove color ${U(d)}">×</button>
      </span>
    `);
  }
  return o.push(`
    <button type="button" class="swatch more" data-action="more-colors" data-slot="${e}" title="More colors" aria-label="More colors">···</button>
  `), o.join("");
}
function Kn() {
  const { shadow: e, activeId: t, activeKind: n } = S;
  if (!e || !t || !n) return;
  const r = E(t);
  if (!r || r.kind === "arrow") return;
  const o = r, s = e.querySelector('[data-region="caption"]');
  s && (s.textContent = lg(n)), e.querySelectorAll('[data-action="swatch-mode"]').forEach((i) => {
    const a = i.getAttribute("data-mode");
    i.setAttribute("aria-pressed", String(a === S.swatchMode));
  }), rg(e, n), og(e, n, o), sg(e, n, o), ag(e, n, o), ig(e, o), cg(e, o);
}
function rg(e, t) {
  const n = e.querySelector('[data-region="type-row"]'), r = e.querySelector('[data-region="divider-1"]'), o = t === "text";
  n && (n.hidden = !o), r && (r.hidden = !o);
  const s = e.querySelector('[data-region="width-row"]'), i = t === "shape" || t === "freedraw";
  s && (s.hidden = !i);
  const a = e.querySelector('[data-region="bg-row"]');
  a && (a.hidden = t === "freedraw");
  const c = e.querySelector('[data-region="border-row"]');
  c && (c.hidden = t !== "text");
  const l = e.querySelector('[data-region="text-label"]');
  l && (l.textContent = t === "text" ? "Text" : "Stroke");
  const u = e.querySelector('[data-region="bg-label"]');
  u && (u.textContent = t === "text" ? "Bg" : "Fill");
}
function og(e, t, n) {
  if (t !== "text" || n.kind !== "text") return;
  const r = e.querySelector('[data-region="font"]');
  r && (r.value = n.style.fontFamily);
  const o = e.querySelector('[data-region="size"]');
  o && (o.value = String(n.style.fontSize));
  const s = e.querySelector('[data-region="bold"]');
  s && s.setAttribute("aria-pressed", String(n.style.bold));
  const i = e.querySelector('[data-region="italic"]');
  i && i.setAttribute("aria-pressed", String(n.style.italic === !0));
}
function sg(e, t, n) {
  if (t !== "shape" && t !== "freedraw" || n.kind !== "shape" && n.kind !== "freedraw") return;
  const r = e.querySelector('[data-region="width"]'), o = e.querySelector('[data-region="width-value"]'), s = n.strokeWidth;
  r && (r.value = String(s)), o && (o.textContent = String(s));
}
function ag(e, t, n) {
  const r = e.querySelector('[data-region="text-swatches"]'), o = e.querySelector('[data-region="bg-swatches"]'), s = e.querySelector('[data-region="border-swatches"]'), i = e.querySelector('[data-region="bg-row"]'), a = e.querySelector('[data-region="border-row"]'), c = Tn(n, "text"), l = Tn(n, "bg");
  if (r && (r.innerHTML = mn("text", c, !1)), o && !(i != null && i.hidden) && (o.innerHTML = mn("bg", l, t === "text")), s && !(a != null && a.hidden) && n.kind === "text") {
    const u = n.style.borderColor ?? "#000000";
    s.innerHTML = mn("border", u, !0);
  }
}
function ig(e, t) {
  const n = e.querySelector('[data-region="effect"]');
  n && (n.value = Hm(t));
}
function cg(e, t) {
  const n = Math.round(ng(t) * 100), r = e.querySelector('[data-region="alpha-fill"]'), o = e.querySelector('[data-region="alpha-thumb"]'), s = e.querySelector('[data-region="alpha-value"]');
  r && (r.style.width = `${n}%`), o && (o.style.left = `${n}%`), s && (s.textContent = `${n}%`);
}
function lg(e) {
  return e === "text" ? "Text" : e === "shape" ? "Shape" : "Freedraw";
}
let We = !1;
function ug(e) {
  const { shadow: t, host: n } = S;
  if (!t || !n) return;
  const r = (s) => s.stopPropagation();
  n.addEventListener("keydown", r), n.addEventListener("keypress", r), n.addEventListener("keyup", r), t.addEventListener("click", (s) => dg(s)), t.addEventListener("change", (s) => pg(s)), t.addEventListener("input", (s) => hg(s)), tg();
  const o = () => {
    We && (We = !1, it()), e();
  };
  document.addEventListener("mousedown", (s) => mg(s, o), !0), document.addEventListener("keydown", (s) => gg(s, o), !0);
}
function gn(e) {
  const t = S.shadow;
  if (!t) return;
  const n = t.querySelector('[data-region="format-painter-menu"]'), r = t.querySelector('[data-region="format-painter"]');
  n && (e ? n.removeAttribute("hidden") : n.setAttribute("hidden", "")), r == null || r.setAttribute("aria-expanded", String(e));
}
function dg(e) {
  var l;
  const t = e.target;
  if (!(t instanceof Element)) return;
  if (t.closest('[data-action="format-painter-toggle"]')) {
    const u = (l = S.shadow) == null ? void 0 : l.querySelector('[data-region="format-painter-menu"]');
    gn((u == null ? void 0 : u.hasAttribute("hidden")) ?? !1);
    return;
  }
  t.closest(".format-painter-wrap") || gn(!1);
  const n = t.closest('[data-action="swatch-mode"]');
  if (n) {
    const u = n.getAttribute("data-mode");
    (u === "muted" || u === "vibrant") && (S.swatchMode = u, Kn());
    return;
  }
  const r = t.closest('[data-action="batch-apply"]');
  if (r) {
    const { activeId: u } = S;
    if (!u) return;
    const h = E(u);
    if (!h) return;
    const d = Bm(h);
    r.getAttribute("data-scope") === "scenario" ? cf(h.kind, d) : af(h.kind, d), gn(!1);
    return;
  }
  if (t.closest('[data-region="bold"]')) return Km();
  if (t.closest('[data-region="italic"]')) return Jm();
  if (t.closest('[data-region="effect-play"]')) {
    S.activeId && Im(S.activeId);
    return;
  }
  const o = t.closest('[data-swatch="text"]');
  if (o) return Go(o.getAttribute("data-value") ?? "");
  const s = t.closest('[data-swatch="bg"]');
  if (s) return Yo(s.getAttribute("data-value") ?? "");
  const i = t.closest('[data-swatch="border"]');
  if (i) return Xo(i.getAttribute("data-value") ?? "");
  const a = t.closest('[data-action="more-colors"]');
  if (a instanceof HTMLElement) return fg(a);
  const c = t.closest('[data-action="custom-remove"]');
  if (c instanceof HTMLElement) {
    const u = c.getAttribute("data-slot"), h = c.getAttribute("data-value");
    u && h && uf(u === "text" || u === "border" ? "text" : "background", h);
  }
}
function pg(e) {
  const t = e.target;
  t instanceof HTMLElement && (t.dataset.region === "font" ? Ym(t.value) : t.dataset.region === "effect" ? Zm(t.value) : t.dataset.region === "width" && We && (We = !1, it()));
}
function hg(e) {
  const t = e.target;
  if (t instanceof HTMLInputElement) {
    if (t.dataset.region === "size") {
      const n = Math.max(Wo, Math.min(Uo, Number(t.value) || 16));
      Xm(n);
    } else if (t.dataset.region === "width") {
      We || (We = !0, Nt("width"));
      const n = Math.max(jo, Math.min(Vo, Number(t.value) || 0));
      eg(n);
    }
  }
}
function fg(e) {
  const { activeId: t, activeKind: n } = S;
  if (!t || !n) return;
  const r = E(t);
  if (!r || r.kind === "arrow") return;
  const o = r, s = e.getAttribute("data-slot");
  if (!s) return;
  const i = Tn(o, s) || "#ffffff";
  gm({
    anchor: e,
    initialColor: i,
    onConfirm: (a) => {
      lf(s === "text" || s === "border" ? "text" : "background", a), s === "text" ? Go(a) : s === "border" ? Xo(a) : Yo(a);
    }
  });
}
function mg(e, t) {
  const { host: n, activeAnchorSelector: r } = S, o = e.target;
  !(o instanceof HTMLElement) && !(o instanceof SVGElement) || n != null && n.contains(o) || Dm(o) || bm() || r && o instanceof Element && o.closest(r) || o instanceof Element && o.closest('[data-manuscript="ui"]') || (t(), Ae());
}
function gg(e, t) {
  e.key === "Escape" && (e.preventDefault(), t());
}
function Ko(e) {
  const { host: t } = S;
  if (!t) return;
  t.style.left = "0px", t.style.top = "0px";
  const n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
  let o = r.top - n.height - Sr - Wm;
  o < 8 && (o = r.bottom + Sr);
  const s = Math.max(
    8,
    Math.min(r.left + r.width / 2 - n.width / 2, window.innerWidth - n.width - 8)
  );
  t.style.top = `${o}px`, t.style.left = `${s}px`;
}
function bg(e, t) {
  return e === "text" ? `[data-annotation-text="${t}"]` : e === "shape" ? `[data-annotation-shape="${t}"]` : `[data-annotation-freedraw="${t}"]`;
}
function _g(e, t) {
  e === "text" ? Nm(t) : e === "shape" ? Om(t) : Rm(t);
}
function yg() {
  return `
    ${lt()}
    :host { display: block; font-family: var(--ff-sans); color: var(--c-text); }
    *, *::before, *::after { box-sizing: border-box; }

    .popup {
      width: 320px;
      background: var(--c-surface);
      border: 1px solid var(--c-border);
      border-radius: var(--r-md);
      box-shadow: var(--shadow-card);
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: relative;
      font-size: var(--fs-body);
    }
    .anchor-tick {
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translate(-50%, -1px);
      width: 12px;
      height: 6px;
      pointer-events: none;
    }

    .row { display: flex; align-items: center; gap: 6px; }
    .row.label-row { gap: 8px; }
    .label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--c-text-soft);
      width: 50px;
      padding-right: 6px;
      flex-shrink: 0;
    }
    .label.wide {
      letter-spacing: 0.10em;
      width: auto;
    }
    .divider {
      height: 1px;
      background: var(--c-border);
      margin: 2px 0;
    }

    .header { display: flex; align-items: center; justify-content: space-between; }
    .toggle {
      display: inline-flex;
      padding: 2px;
      background: var(--c-surface-2);
      border-radius: var(--r-sm);
      border: 1px solid var(--c-border);
    }
    .toggle button {
      padding: 3px 9px;
      border: none;
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

    .type-row { display: flex; align-items: center; gap: 6px; }
    .select, .size-input, .type-btn {
      height: 28px;
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      background: var(--c-surface);
      color: var(--c-text);
      font-family: var(--ff-sans);
      font-size: 12px;
      line-height: 1;
      cursor: pointer;
      padding: 0 10px;
    }
    .select {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      appearance: auto;
    }
    .size-input {
      width: 54px;
      padding: 0 8px;
      text-align: right;
      font-family: var(--ff-mono);
      font-weight: 500;
      font-variant-numeric: tabular-nums;
    }
    .type-btn {
      width: 28px;
      padding: 0;
      display: inline-grid;
      place-items: center;
      font-size: 12px;
      font-weight: 600;
    }
    .type-btn.italic { font-style: italic; font-weight: 500; }
    .type-btn[aria-pressed="true"] {
      background: var(--c-text);
      color: var(--c-surface);
      border-color: var(--c-text);
    }
    .type-btn[aria-pressed="false"] { color: var(--c-text-mute); }
  `;
}
function vg() {
  return `
    .swatch-row { display: flex; align-items: center; gap: 8px; }
    .swatches { display: flex; gap: 4px; flex: 1; flex-wrap: wrap; }
    .swatch {
      width: 22px;
      height: 22px;
      padding: 0;
      border-radius: 999px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      cursor: pointer;
      position: relative;
    }
    .swatch.is-white { border-color: var(--c-border-strong); }
    .swatch[aria-pressed="true"] {
      border: 2px solid var(--c-text);
      box-shadow: 0 0 0 2px var(--c-surface), 0 0 0 3px var(--c-text);
    }
    .swatch.transparent {
      background: var(--c-surface);
      border-color: var(--c-border-strong);
      overflow: hidden;
    }
    .swatch.transparent svg { position: absolute; inset: 0; }
    .swatch.more {
      background: var(--c-surface);
      border-color: var(--c-border);
      color: var(--c-text-mute);
      display: inline-grid;
      place-items: center;
      font-size: 10px;
      line-height: 1;
    }
    .swatch-wrap { position: relative; width: 22px; height: 22px; display: inline-block; }
    .swatch-remove {
      position: absolute;
      top: -5px;
      right: -5px;
      width: 14px;
      height: 14px;
      padding: 0;
      border-radius: 999px;
      background: var(--c-text);
      color: var(--c-surface);
      border: 1px solid var(--c-surface);
      font-size: 10px;
      line-height: 1;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .swatch-wrap:hover .swatch-remove,
    .swatch-remove:focus-visible { display: inline-flex; }
    .swatch-remove:hover { background: var(--c-error); }
    /* hidden HTML attribute가 display:flex보다 우선되도록 */
    .type-row[hidden],
    .width-row[hidden],
    .swatch-row[hidden],
    .divider[hidden] { display: none !important; }

    .effect-controls { display: flex; flex: 1; gap: 4px; }
    .icon-btn {
      width: 28px;
      height: 28px;
      padding: 0;
      border: 1px solid var(--c-border);
      border-radius: var(--r-sm);
      background: var(--c-surface);
      color: var(--c-text);
      display: inline-grid;
      place-items: center;
      cursor: pointer;
    }
    .icon-btn:hover { border-color: var(--c-border-strong); }

    .alpha-row { display: flex; align-items: center; gap: 8px; }
    .alpha-track-wrap { flex: 1; height: 28px; display: flex; align-items: center; gap: 10px; }
    .alpha-track {
      flex: 1;
      height: 4px;
      border-radius: 999px;
      background: var(--c-border);
      position: relative;
      cursor: pointer;
    }
    .alpha-fill {
      position: absolute; left: 0; top: 0; bottom: 0;
      background: var(--c-text);
      border-radius: 999px;
    }
    .alpha-thumb {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 14px;
      border-radius: 999px;
      background: var(--c-surface);
      border: 1.5px solid var(--c-text);
      box-shadow: 0 1px 2px rgb(0 0 0 / 0.08);
      cursor: grab;
    }
    .alpha-thumb:active { cursor: grabbing; }
    .alpha-value {
      font-family: var(--ff-mono);
      font-size: 11px;
      font-weight: 500;
      color: var(--c-text);
      font-variant-numeric: tabular-nums;
      min-width: 32px;
      text-align: right;
    }

    .width-row { display: flex; align-items: center; gap: 8px; }
    .width-input { flex: 1; accent-color: var(--c-text); height: 4px; padding: 0; margin: 0; }
    .width-value {
      font-family: var(--ff-mono);
      font-size: 11px;
      font-weight: 500;
      color: var(--c-text);
      font-variant-numeric: tabular-nums;
      min-width: 32px;
      text-align: right;
    }

    /* Format painter — brush button + dropdown of scope buttons. */
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
  `;
}
function xg() {
  return [yg(), vg()].join(`
`);
}
function wg() {
  return `
    <style>${xg()}</style>
    <div class="popup" role="dialog" aria-label="Annotation properties">
      ${kg()}
      ${Sg()}
      <div class="divider" data-region="divider-1" hidden></div>
      ${$g()}
      <div class="divider"></div>
      ${Ag()}
      ${Mg()}
      ${Eg()}
      ${Tg()}
    </div>
  `;
}
function kg() {
  return `
    <div class="header">
      <span class="label wide" data-region="caption">Annotation · 속성</span>
      <div class="header-right">
        <div class="format-painter-wrap">
          <button type="button" class="format-painter-btn" data-action="format-painter-toggle" data-region="format-painter" aria-haspopup="true" aria-expanded="false" aria-label="${A("copy.formatting")}" title="${A("copy.formatting")}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="4.5" y="3" width="15" height="5" rx="1.5"></rect>
              <rect x="6.5" y="8" width="11" height="2.6" rx="0.6"></rect>
              <path d="M11 10.6 v6.4 a1 1 0 0 0 2 0 V10.6"></path>
            </svg>
          </button>
          <div class="format-painter-menu" data-region="format-painter-menu" role="menu" hidden>
            <button type="button" class="batch-btn" role="menuitem" data-action="batch-apply" data-scope="step">${A("apply.this-step")}</button>
            <button type="button" class="batch-btn" role="menuitem" data-action="batch-apply" data-scope="scenario">${A("apply.all-steps")}</button>
          </div>
        </div>
        <div class="toggle" role="tablist" aria-label="Color palette mode">
          <button type="button" data-action="swatch-mode" data-mode="muted" aria-pressed="true">Muted</button>
          <button type="button" data-action="swatch-mode" data-mode="vibrant" aria-pressed="false">Vibrant</button>
        </div>
      </div>
    </div>
  `;
}
function Sg() {
  var t;
  return `
    <div class="type-row" data-region="type-row" hidden>
      <select class="select" data-region="font">
        ${Vm((t = D()) == null ? void 0 : t.siteFonts).map(
    (n) => `<option value="${U(n.value)}" style="font-family: ${U(n.value)};">${n.label}</option>`
  ).join("")}
      </select>
      <input class="size-input" type="number" min="${Wo}" max="${Uo}" data-region="size" />
      <button type="button" class="type-btn" data-region="bold" aria-pressed="false" title="Bold">B</button>
      <button type="button" class="type-btn italic" data-region="italic" aria-pressed="false" title="Italic">I</button>
    </div>
  `;
}
function $g() {
  return `
    <div class="swatch-row" data-region="text-row">
      <span class="label" data-region="text-label">Text</span>
      <div class="swatches" data-region="text-swatches"></div>
    </div>
    <div class="swatch-row" data-region="bg-row">
      <span class="label" data-region="bg-label">Bg</span>
      <div class="swatches" data-region="bg-swatches"></div>
    </div>
    <div class="swatch-row" data-region="border-row" hidden>
      <span class="label" data-region="border-label">Border</span>
      <div class="swatches" data-region="border-swatches"></div>
    </div>
  `;
}
function Ag() {
  return `
    <div class="width-row" data-region="width-row" hidden>
      <span class="label">Width</span>
      <input class="width-input" type="range" min="${jo}" max="${Vo}" step="1" data-region="width" />
      <span class="width-value" data-region="width-value">2</span>
    </div>
  `;
}
function Mg() {
  return `
    <div class="row label-row">
      <span class="label">Effect</span>
      <div class="effect-controls">
        <select class="select" data-region="effect">
          ${Gm.map((e) => `<option value="${e.value}">${e.label}</option>`).join("")}
        </select>
        <button type="button" class="icon-btn" data-region="effect-play" title="Preview effect" aria-label="Preview effect">
          <svg width="9" height="9" viewBox="0 0 16 16" fill="currentColor"><path d="M 4 3 L 4 13 L 13 8 Z"/></svg>
        </button>
      </div>
    </div>
  `;
}
function Eg() {
  return `
    <div class="alpha-row">
      <span class="label">Opacity</span>
      <div class="alpha-track-wrap">
        <div class="alpha-track" data-region="alpha-track">
          <div class="alpha-fill" data-region="alpha-fill"></div>
          <div class="alpha-thumb" data-region="alpha-thumb"></div>
        </div>
        <span class="alpha-value" data-region="alpha-value">100%</span>
      </div>
    </div>
  `;
}
function Tg() {
  return `
    <div class="anchor-tick">
      <svg viewBox="0 0 12 6" width="12" height="6">
        <path d="M 0 0 L 6 6 L 12 0 Z" fill="var(--c-surface)"/>
        <path d="M 0 0 L 6 6 L 12 0" fill="none" stroke="var(--c-border)" stroke-width="1"/>
      </svg>
    </div>
  `;
}
function Jn(e, t, n) {
  E(e) && (S.activeId = e, S.activeKind = n, S.activeAnchorSelector = bg(n, e), S.host || Ig(), Kn(), Ko(t), _g(n, e), document.dispatchEvent(
    new CustomEvent("manuscript:annotation-selected", { detail: { id: e } })
  ));
}
function Jo() {
  var e;
  S.host && ((e = S.unsubscribeScenario) == null || e.call(S), S.unsubscribeScenario = null, Ae(), En(), S.host.remove(), S.host = null, S.shadow = null, S.activeId = null, S.activeKind = null, S.activeAnchorSelector = null, document.dispatchEvent(
    new CustomEvent("manuscript:annotation-selected", { detail: { id: null } })
  ));
}
function Lg(e, t) {
  Jn(e, t, "text");
}
function Cg(e, t) {
  Jn(e, t, "shape");
}
function Pg(e, t) {
  Jn(e, t, "freedraw");
}
function Ig() {
  const { host: e, shadow: t } = Ve();
  e.setAttribute("data-popup", "annotation-editor"), e.style.cssText = [
    "position: fixed",
    `z-index: ${te + 5}`,
    "pointer-events: auto"
  ].join("; "), t.innerHTML = wg(), S.host = e, S.shadow = t, document.body.appendChild(e), ug(Jo), S.unsubscribeScenario = at(Og);
}
function Og() {
  const { activeId: e, host: t, activeAnchorSelector: n } = S;
  if (!e || !t) return;
  if (!E(e)) {
    Jo();
    return;
  }
  if (Kn(), n) {
    const o = document.querySelector(n);
    o && Ko(o);
  }
}
const v = {
  state: null,
  unsubscribeStep: null
};
function dt() {
  return v.state !== null;
}
function Zn() {
  var e;
  return ((e = v.state) == null ? void 0 : e.standalone) === !0;
}
function Rg(e, t) {
  const { svg: n } = M;
  if (!n) return;
  const r = Jt(e, t), o = Ng(e, r), s = r.map((c) => `${c.x},${c.y}`).join(" "), i = document.createElementNS(Ft, "polyline");
  if (i.setAttribute("points", s), i.setAttribute("fill", "none"), i.setAttribute("stroke", e.stroke), i.setAttribute("stroke-width", String(e.strokeWidth)), i.setAttribute("stroke-linecap", "round"), i.setAttribute("stroke-linejoin", "round"), i.setAttribute(_r, e.id), e.strokeOpacity !== void 0 && e.strokeOpacity < 1 && i.setAttribute("stroke-opacity", String(Math.max(0, Math.min(1, e.strokeOpacity)))), o && i.setAttribute("transform", o), i.style.pointerEvents = "none", rt(i, e.entryAnimation, e.rotate ?? 0), n.appendChild(i), Zn()) return;
  const a = document.createElementNS(Ft, "polyline");
  a.setAttribute(_r, e.id), a.setAttribute("points", s), a.setAttribute("fill", "none"), a.setAttribute("stroke", "transparent"), a.setAttribute("stroke-width", String(Math.max(12, e.strokeWidth + 10))), a.setAttribute("stroke-linecap", "round"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("pointer-events", "stroke"), o && a.setAttribute("transform", o), a.style.cursor = "pointer", a.addEventListener("mousedown", (c) => {
    c.button === 0 && (c.stopPropagation(), c.preventDefault(), Dg(e.id, c, a));
  }), n.appendChild(a);
}
function Ng(e, t) {
  const n = e.rotate ?? 0;
  if (!n || t.length === 0) return "";
  let r = 1 / 0, o = 1 / 0, s = -1 / 0, i = -1 / 0;
  for (const l of t)
    l.x < r && (r = l.x), l.y < o && (o = l.y), l.x > s && (s = l.x), l.y > i && (i = l.y);
  const a = (r + s) / 2, c = (o + i) / 2;
  return `rotate(${n} ${a} ${c})`;
}
function Dg(e, t, n) {
  const r = E(e);
  if (!r || r.kind !== "freedraw") return;
  const o = { x: t.clientX, y: t.clientY }, s = Z(), i = Jt(r, s).map((u) => ({ ...u }));
  let a = !1;
  const c = (u) => {
    const h = u.clientX - o.x, d = u.clientY - o.y;
    if (!a && Math.hypot(h, d) < 3) return;
    a = !0, u.preventDefault();
    const p = i.map((m) => ({ x: m.x + h, y: m.y + d })), f = s ? {
      points: p,
      pointsAnchorOffset: p.map((m) => ({
        x: m.x - s.left,
        y: m.y - s.top
      }))
    } : { points: p, pointsAnchorOffset: void 0 };
    T(e, f);
  }, l = () => {
    document.removeEventListener("mousemove", c, !0), document.removeEventListener("mouseup", l, !0);
    const u = document.querySelectorAll(`[data-annotation-freedraw="${e}"]`), h = u[u.length - 1] ?? n;
    Pg(e, h);
  };
  document.addEventListener("mousemove", c, !0), document.addEventListener("mouseup", l, !0);
}
const pt = "http://www.w3.org/2000/svg";
function Bg(e, t) {
  let n;
  switch (e) {
    case "rectangle":
      n = qg(t);
      break;
    case "ellipse":
      n = zg(t);
      break;
    case "triangle":
      n = wt(Wg(t), t);
      break;
    case "diamond":
      n = wt(Ug(t), t);
      break;
    case "star":
      n = wt(jg(t), t);
      break;
    case "callout":
      n = Hg(Vg(t), t);
      break;
    case "line":
      n = Fg(t);
      break;
    case "block-arrow":
      n = wt(Gg(t), t);
      break;
  }
  if (n && t.rotate) {
    const r = t.x + t.width / 2, o = t.y + t.height / 2;
    n.setAttribute("transform", `rotate(${t.rotate} ${r} ${o})`);
  }
  return n;
}
function qg(e) {
  const t = document.createElementNS(pt, "rect");
  return t.setAttribute("x", String(e.x)), t.setAttribute("y", String(e.y)), t.setAttribute("width", String(e.width)), t.setAttribute("height", String(e.height)), en(t, e), t;
}
function zg(e) {
  const t = document.createElementNS(pt, "ellipse");
  return t.setAttribute("cx", String(e.x + e.width / 2)), t.setAttribute("cy", String(e.y + e.height / 2)), t.setAttribute("rx", String(Math.max(0, e.width / 2))), t.setAttribute("ry", String(Math.max(0, e.height / 2))), en(t, e), t;
}
function Fg(e) {
  const t = document.createElementNS(pt, "line");
  return t.setAttribute("x1", String(e.x)), t.setAttribute("y1", String(e.y)), t.setAttribute("x2", String(e.x + e.width)), t.setAttribute("y2", String(e.y + e.height)), t.setAttribute("stroke", e.stroke || "#000000"), t.setAttribute("stroke-width", String(e.strokeWidth)), t.setAttribute("stroke-linecap", "round"), t.setAttribute("fill", "none"), t;
}
function wt(e, t) {
  const n = document.createElementNS(pt, "polygon");
  return n.setAttribute("points", e), en(n, t), n.setAttribute("stroke-linejoin", "round"), n;
}
function Hg(e, t) {
  const n = document.createElementNS(pt, "path");
  return n.setAttribute("d", e), en(n, t), n.setAttribute("stroke-linejoin", "round"), n;
}
function en(e, t) {
  e.setAttribute("fill", t.fill || "transparent"), e.setAttribute("stroke", t.stroke || "transparent"), e.setAttribute("stroke-width", String(t.strokeWidth)), t.fillOpacity !== void 0 && t.fillOpacity < 1 && e.setAttribute("fill-opacity", String(Math.max(0, Math.min(1, t.fillOpacity))));
}
function Wg(e) {
  const t = e.x, n = e.x + e.width, r = e.y, o = e.y + e.height;
  return `${(t + n) / 2},${r} ${n},${o} ${t},${o}`;
}
function Ug(e) {
  const t = e.x + e.width / 2, n = e.y + e.height / 2;
  return `${t},${e.y} ${e.x + e.width},${n} ${t},${e.y + e.height} ${e.x},${n}`;
}
function jg(e) {
  const t = e.x + e.width / 2, n = e.y + e.height / 2, r = Math.min(e.width, e.height) / 2, o = r * 0.5, s = [];
  for (let i = 0; i < 10; i++) {
    const a = Math.PI / 5 * i - Math.PI / 2, c = i % 2 === 0 ? r : o;
    s.push(`${t + Math.cos(a) * c},${n + Math.sin(a) * c}`);
  }
  return s.join(" ");
}
function Vg(e) {
  const t = Math.min(10, e.width / 4, e.height / 4), n = Math.min(18, e.height * 0.2), r = e.y + e.height - n, o = e.x + e.width * 0.32, s = e.x + e.width * 0.5, i = e.x + e.width * 0.22, a = e.y + e.height;
  return [
    `M ${e.x + t} ${e.y}`,
    `L ${e.x + e.width - t} ${e.y}`,
    `Q ${e.x + e.width} ${e.y} ${e.x + e.width} ${e.y + t}`,
    `L ${e.x + e.width} ${r - t}`,
    `Q ${e.x + e.width} ${r} ${e.x + e.width - t} ${r}`,
    `L ${s} ${r}`,
    `L ${i} ${a}`,
    `L ${o} ${r}`,
    `L ${e.x + t} ${r}`,
    `Q ${e.x} ${r} ${e.x} ${r - t}`,
    `L ${e.x} ${e.y + t}`,
    `Q ${e.x} ${e.y} ${e.x + t} ${e.y}`,
    "Z"
  ].join(" ");
}
function Gg(e) {
  const t = e.x + e.width / 2, n = e.y + e.height * 0.45, r = Math.min(e.width / 2, e.width * 0.22);
  return [
    `${t},${e.y}`,
    `${e.x + e.width},${n}`,
    `${t + r},${n}`,
    `${t + r},${e.y + e.height}`,
    `${t - r},${e.y + e.height}`,
    `${t - r},${n}`,
    `${e.x},${n}`
  ].join(" ");
}
function Yg(e, t) {
  const { svg: n } = M;
  if (!n) return;
  const r = Kt(e, t), o = Bg(e.shapeKind, {
    x: r.x,
    y: r.y,
    width: e.bounds.width,
    height: e.bounds.height,
    fill: e.fill,
    stroke: e.stroke,
    strokeWidth: e.strokeWidth,
    fillOpacity: e.fillOpacity,
    rotate: e.rotate
  });
  o && (o.setAttribute(vo, e.id), o.style.pointerEvents = "none", rt(o, e.entryAnimation, e.rotate ?? 0), n.appendChild(o), Zn() || n.appendChild(Xg(e, r)));
}
function Xg(e, t) {
  const n = document.createElementNS(Ft, "rect");
  if (n.setAttribute(vo, e.id), n.setAttribute("x", String(t.x)), n.setAttribute("y", String(t.y)), n.setAttribute("width", String(Math.max(0, e.bounds.width))), n.setAttribute("height", String(Math.max(0, e.bounds.height))), n.setAttribute("fill", "rgba(0, 0, 0, 0.001)"), n.setAttribute("stroke", "none"), n.setAttribute("pointer-events", "all"), n.style.pointerEvents = "all", n.style.cursor = "pointer", e.rotate) {
    const r = t.x + e.bounds.width / 2, o = t.y + e.bounds.height / 2;
    n.setAttribute("transform", `rotate(${e.rotate} ${r} ${o})`);
  }
  return n.addEventListener("mousedown", (r) => Kg(e.id, r, n)), n;
}
function Kg(e, t, n) {
  if (t.button !== 0) return;
  t.stopPropagation(), t.preventDefault();
  const r = { x: t.clientX, y: t.clientY }, o = E(e);
  if (!o || o.kind !== "shape") return;
  const s = Z(), i = o.boundsAnchorOffset && s ? {
    x: s.left + o.boundsAnchorOffset.x,
    y: s.top + o.boundsAnchorOffset.y
  } : { x: o.bounds.x, y: o.bounds.y }, a = { ...o.bounds, x: i.x, y: i.y };
  let c = !1;
  const l = (h) => {
    const d = h.clientX - r.x, p = h.clientY - r.y;
    if (!c && Math.hypot(d, p) < 3) return;
    c = !0, h.preventDefault();
    const f = a.x + d, m = a.y + p, g = s ? {
      bounds: { ...a, x: f, y: m },
      boundsAnchorOffset: { x: f - s.left, y: m - s.top }
    } : {
      bounds: { ...a, x: f, y: m },
      boundsAnchorOffset: void 0
    };
    T(e, g);
  }, u = () => {
    document.removeEventListener("mousemove", l, !0), document.removeEventListener("mouseup", u, !0);
    const h = document.querySelectorAll(`[data-annotation-shape="${e}"]`), d = h[h.length - 1] ?? n;
    Cg(e, d);
  };
  document.addEventListener("mousemove", l, !0), document.addEventListener("mouseup", u, !0);
}
function Jg(e, t) {
  const { host: n } = M;
  if (!n) return;
  const r = document.createElement("div");
  r.setAttribute(yo, e.id), r.setAttribute("data-manuscript", "ui"), r.dataset.annotationId = e.id;
  const o = e.style.italic === !0, s = e.style.backgroundColor ?? "#ffffff", i = e.style.backgroundOpacity ?? 0.96, a = s === "transparent" ? "transparent" : Zg(s, i), c = e.rotate ?? 0, l = e.style.borderColor ?? "#000000", u = l === "transparent" ? "none" : `2px solid ${l}`, h = Wf(e, t), d = Zn();
  r.style.cssText = [
    "position: absolute",
    `left: ${h.x}px`,
    `top: ${h.y}px`,
    `font-family: ${e.style.fontFamily}`,
    `font-size: ${e.style.fontSize}px`,
    `color: ${e.style.color}`,
    `font-weight: ${e.style.bold ? "700" : "400"}`,
    `font-style: ${o ? "italic" : "normal"}`,
    "padding: 8px 12px",
    `background: ${a}`,
    `border: ${u}`,
    "border-radius: 8px",
    d ? "pointer-events: none" : "pointer-events: auto",
    d ? "cursor: default" : "cursor: move",
    "user-select: none",
    "box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)",
    "max-width: 320px",
    "word-wrap: break-word",
    "line-height: 1.4",
    `transform: rotate(${c}deg)`,
    "transform-origin: center center"
  ].join("; "), r.textContent = e.text, d || Qg(r, e.id), rt(r, e.entryAnimation, e.rotate ?? 0), n.appendChild(r);
}
function Zg(e, t) {
  const n = Math.max(0, Math.min(1, t)), r = e.trim();
  if (r.startsWith("#")) {
    let o = 0, s = 0, i = 0;
    return r.length === 4 ? (o = parseInt(r[1] + r[1], 16), s = parseInt(r[2] + r[2], 16), i = parseInt(r[3] + r[3], 16)) : r.length === 7 && (o = parseInt(r.slice(1, 3), 16), s = parseInt(r.slice(3, 5), 16), i = parseInt(r.slice(5, 7), 16)), `rgba(${o}, ${s}, ${i}, ${n})`;
  }
  return e;
}
function Qg(e, t) {
  let n = !1, r = 0, o = 0, s = 0, i = 0, a = !1;
  e.addEventListener("mousedown", (c) => {
    if (e.isContentEditable) return;
    n = !0, a = !1, r = c.clientX, o = c.clientY;
    const l = e.getBoundingClientRect();
    s = l.left, i = l.top, c.preventDefault();
  }), document.addEventListener("mousemove", (c) => {
    if (!n) return;
    const l = c.clientX - r, u = c.clientY - o;
    Math.abs(l) + Math.abs(u) > 2 && (a = !0), e.style.left = `${s + l}px`, e.style.top = `${i + u}px`;
  }), document.addEventListener("mouseup", () => {
    if (!n || (n = !1, !a)) return;
    const c = parseFloat(e.style.left), l = parseFloat(e.style.top), u = Z(), h = u ? {
      position: { x: c, y: l },
      anchorOffset: { x: c - u.left, y: l - u.top }
    } : { position: { x: c, y: l }, anchorOffset: void 0 };
    T(t, h);
  }), e.addEventListener("click", (c) => {
    a || e.isContentEditable || (c.stopPropagation(), Lg(t, e));
  }), e.addEventListener("dblclick", () => {
    e.contentEditable = "true", e.style.cursor = "text", e.focus(), e0(e);
  }), e.addEventListener("blur", () => {
    e.isContentEditable && (e.contentEditable = "false", e.style.cursor = "move", T(t, { text: e.textContent ?? "" }));
  }), e.addEventListener("keydown", (c) => {
    c.key === "Escape" && e.isContentEditable && e.blur();
  });
}
function e0(e) {
  const t = document.createRange();
  t.selectNodeContents(e), t.collapse(!1);
  const n = window.getSelection();
  n && (n.removeAllRanges(), n.addRange(t));
}
function Zo() {
  if (M.host) return;
  qf();
  const e = document.createElement("div");
  e.setAttribute("data-manuscript", "ui"), e.style.cssText = [
    "position: fixed",
    "top: 0",
    "left: 0",
    "width: 100vw",
    "height: 100vh",
    "pointer-events: none",
    `z-index: ${te + 3}`
  ].join("; ");
  const t = document.createElementNS(Ft, "svg");
  t.setAttribute("width", "100%"), t.setAttribute("height", "100%"), t.style.cssText = [
    "position: absolute",
    "top: 0",
    "left: 0",
    "pointer-events: none",
    "overflow: visible"
  ].join("; "), e.appendChild(t), M.host = e, M.svg = t, M.roughSvg = Bf.svg(t), document.body.appendChild(e), M.unsubscribe = at(Et), M.unsubscribeMode = so(Et), t0(), Et();
}
let Be = null;
function Qe() {
  Be === null && (Be = requestAnimationFrame(() => {
    Be = null, Et();
  }));
}
let xe = null, Ln = null;
function t0() {
  window.addEventListener("resize", Qe), window.addEventListener("scroll", Qe, !0), typeof ResizeObserver < "u" && (xe = new ResizeObserver(Qe));
}
function n0() {
  window.removeEventListener("resize", Qe), window.removeEventListener("scroll", Qe, !0), xe && (xe.disconnect(), xe = null), Ln = null, Be !== null && (cancelAnimationFrame(Be), Be = null);
}
function r0() {
  var e, t;
  (e = M.unsubscribe) == null || e.call(M), M.unsubscribe = null, (t = M.unsubscribeMode) == null || t.call(M), M.unsubscribeMode = null, n0(), M.host && (M.host.remove(), M.host = null, M.svg = null, M.roughSvg = null);
}
function Qo() {
  return M.host !== null;
}
function Et() {
  const { host: e, svg: t } = M;
  if (!e || !t) return;
  for (e.querySelectorAll(`[${yo}]`).forEach((o) => o.remove()); t.firstChild; ) t.removeChild(t.firstChild);
  const n = Z();
  if (xe) {
    let o = null;
    try {
      o = o0();
    } catch {
      o = null;
    }
    o !== Ln && (xe.disconnect(), o && xe.observe(o), Ln = o);
  }
  const r = no();
  for (const o of r)
    o.kind === "text" ? Jg(o, n) : o.kind === "arrow" ? jf(o, n) : o.kind === "shape" ? Yg(o, n) : o.kind === "freedraw" && Rg(o, n);
}
function o0() {
  const e = he();
  if (!(e != null && e.selectors)) return null;
  try {
    return xo(e.selectors);
  } catch {
    return null;
  }
}
function Oe(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
const y = {
  host: null,
  shadow: null,
  /**
   * Mount kicks off an async storage read for the saved orientation.
   * If the user clicks the orient toggle BEFORE that read resolves,
   * the user click must win — otherwise the async apply overwrites
   * their toggle.
   */
  orientationApplied: !1,
  cleanupDrag: null,
  /** Unsubscribe for the TTS autoplay-blocked signal (drives the orange
   *  muted speaker + "click for sound" hint). Set on mount, cleared on unmount. */
  cleanupBlocked: null
};
function es(e) {
  const { shadow: t } = y;
  if (!t) return;
  const n = t.querySelector(".bar");
  if (!n) return;
  n.classList.toggle("vertical", e === "vertical");
  const r = t.querySelector('[data-region="orient-icon"]');
  r && (r.innerHTML = c0()), a0(), Ht();
}
const s0 = 12;
function Ht() {
  const { host: e, shadow: t } = y;
  if (!e || !t) return;
  const n = t.querySelector(".bar");
  if (!n) return;
  if (!n.classList.contains("vertical")) {
    n.classList.remove("progress-right");
    return;
  }
  const r = e.getBoundingClientRect();
  n.classList.toggle("progress-right", r.left < s0);
}
function a0() {
  const { host: e } = y;
  if (!e || e.style.transform !== "none") return;
  const t = e.getBoundingClientRect(), n = Math.max(0, window.innerWidth - t.width), r = Math.max(0, window.innerHeight - t.height), o = parseFloat(e.style.left), s = parseFloat(e.style.top);
  Number.isFinite(o) && (e.style.left = `${Oe(o, 0, n)}px`), Number.isFinite(s) && (e.style.top = `${Oe(s, 0, r)}px`);
}
async function ts() {
  try {
    return await F().get(H.replayControlsOrientation) === "vertical" ? "vertical" : "horizontal";
  } catch {
    return "horizontal";
  }
}
async function i0(e) {
  try {
    await F().set(H.replayControlsOrientation, e);
  } catch (t) {
    console.warn("[manuscript] save orientation failed", t);
  }
}
function c0() {
  return '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M 5.5 1.5 L 3 4 L 5.5 6.5 M 3 4 L 12 4 L 12 13 M 9.5 10.5 L 12 13 L 14.5 10.5"/></svg>';
}
async function ns() {
  try {
    const e = await F().get(H.replayControlsPosition);
    return e && typeof e == "object" && typeof e.left == "number" && typeof e.top == "number" ? e : null;
  } catch {
    return null;
  }
}
async function Ar(e) {
  try {
    await F().set(H.replayControlsPosition, e);
  } catch {
  }
}
function l0(e, t) {
  const n = e.getBoundingClientRect(), r = Math.max(0, Math.min(t.left, window.innerWidth - n.width)), o = Math.max(0, Math.min(t.top, window.innerHeight - n.height));
  e.style.left = `${r}px`, e.style.top = `${o}px`, e.style.bottom = "auto", e.style.transform = "none";
}
function u0() {
  const { host: e, shadow: t } = y;
  if (!e || !t) return;
  const n = t.querySelector('[data-region="move-handle"]');
  if (!n) return;
  let r = !1, o = 0, s = 0, i = 0, a = 0;
  const c = (d) => {
    if (!y.host) return;
    d.preventDefault(), d.stopPropagation(), r = !0, n.classList.add("dragging");
    const p = y.host.getBoundingClientRect();
    y.host.style.left = `${p.left}px`, y.host.style.top = `${p.top}px`, y.host.style.bottom = "auto", y.host.style.transform = "none", o = d.clientX, s = d.clientY, i = p.left, a = p.top, document.addEventListener("mousemove", l, !0), document.addEventListener("mouseup", u, !0);
  }, l = (d) => {
    if (!r || !y.host) return;
    const p = y.host.getBoundingClientRect(), f = d.clientX - o, m = d.clientY - s, g = Oe(i + f, 0, window.innerWidth - p.width), _ = Oe(a + m, 0, window.innerHeight - p.height);
    y.host.style.left = `${g}px`, y.host.style.top = `${_}px`, Ht();
  }, u = () => {
    r = !1, n.classList.remove("dragging"), document.removeEventListener("mousemove", l, !0), document.removeEventListener("mouseup", u, !0);
    const d = y.host;
    if (d) {
      const p = parseFloat(d.style.left || "0"), f = parseFloat(d.style.top || "0");
      Number.isFinite(p) && Number.isFinite(f) && Ar({ left: p, top: f });
    }
  }, h = () => {
    if (y.host && y.host.style.transform === "none") {
      const d = y.host.getBoundingClientRect(), p = Oe(d.left, 0, window.innerWidth - d.width), f = Oe(d.top, 0, window.innerHeight - d.height);
      y.host.style.left = `${p}px`, y.host.style.top = `${f}px`, Ar({ left: p, top: f }), Ht();
    }
  };
  n.addEventListener("mousedown", c), window.addEventListener("resize", h), y.cleanupDrag = () => {
    n.removeEventListener("mousedown", c), window.removeEventListener("resize", h), document.removeEventListener("mousemove", l, !0), document.removeEventListener("mouseup", u, !0);
  };
}
function rs() {
  return `
    ${lt()}
    :host {
      display: block;
      font-family: var(--ff-sans);
      color: var(--c-text);
    }
    *, *::before, *::after { box-sizing: border-box; }

    .modal {
      background: var(--c-surface);
      border-radius: var(--r-md);
      padding: 22px 24px 20px;
      max-width: 420px;
      font-size: var(--fs-body);
      line-height: var(--lh-body);
      box-shadow: var(--shadow-lg);
      border-top: 3px solid var(--c-error);
    }
    .modal-head {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 12px;
    }
    .icon-circle {
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: color-mix(in oklab, var(--c-error) 14%, transparent);
      color: var(--c-error);
      display: grid;
      place-items: center;
      font-size: 16px;
      font-weight: 600;
      flex-shrink: 0;
    }
    h2 {
      margin: 0;
      font-size: 15px;
      font-weight: 600;
      color: var(--c-text);
    }
    p {
      margin: 4px 0 0;
      color: var(--c-text-mute);
      font-size: 13px;
      line-height: 1.5;
    }
    .actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      margin-top: 14px;
      flex-wrap: wrap;
    }
    button {
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      padding: 8px 14px;
      border-radius: var(--r-sm);
      cursor: pointer;
    }
    .primary {
      background: var(--c-primary);
      color: var(--c-primary-fg);
      border: none;
    }
    .primary:hover { background: var(--c-primary-h); }
    .secondary {
      background: var(--c-surface);
      color: var(--c-text);
      border: 1px solid var(--c-border-strong);
    }
    .secondary:hover { border-color: var(--c-text-mute); }
    button:focus-visible {
      outline: 2px solid var(--c-focus);
      outline-offset: 2px;
    }
    .url {
      display: block;
      font-family: var(--ff-mono);
      font-size: 12px;
      background: var(--c-surface-2);
      padding: 8px 10px;
      border-radius: var(--r-sm);
      word-break: break-all;
      margin: 12px 0 0 40px;
      color: var(--c-text);
    }
  `;
}
function d0(e, t) {
  const { shadow: n } = y;
  if (!n) return;
  const r = n.querySelector('[data-region="step-popup"]');
  r && (r.innerHTML = e.map((o, s) => {
    const i = o.name && o.name.length > 0 ? o.name : "Step Name";
    return `<li class="step-item${s === t ? " active" : ""}" role="option" data-action="step-jump" data-index="${s}" aria-selected="${s === t}" title="${U(i)}">${s + 1}. ${Lo(i)}</li>`;
  }).join(""));
}
function p0() {
  const { shadow: e } = y;
  if (!e) return;
  const t = e.querySelector('[data-region="step-popup"]');
  if (!t) return;
  t.hidden = !t.hidden;
  const n = e.querySelector('[data-region="counter"]');
  if (n == null || n.setAttribute("aria-expanded", String(!t.hidden)), !t.hidden) {
    const r = t.querySelector(".step-item.active");
    r && typeof r.scrollIntoView == "function" && r.scrollIntoView({ block: "nearest" });
  }
}
function Cn() {
  const { shadow: e } = y;
  if (!e) return;
  const t = e.querySelector('[data-region="step-popup"]');
  t && (t.hidden = !0);
  const n = e.querySelector('[data-region="counter"]');
  n == null || n.setAttribute("aria-expanded", "false");
}
function os(e) {
  const { host: t, shadow: n } = y;
  if (!t || !n) return;
  const r = n.querySelector('[data-region="step-popup"]');
  !r || r.hidden || e.target instanceof Node && t.contains(e.target) || Cn();
}
let Tt = -1, Lt = !1;
function h0() {
  Tt = -1, Lt = !1;
}
function f0(e, t, n, r = 0) {
  const { shadow: o } = y;
  if (!o) return;
  const s = o.querySelector('[data-region="progress"]');
  if (!s) return;
  if (t === null || t <= 0) {
    s.classList.add("hidden"), s.innerHTML = "", Tt = -1, Lt = !1;
    return;
  }
  s.classList.remove("hidden");
  const c = e !== Tt || Lt && !n;
  Tt = e, Lt = n;
  let l = s.querySelector(".progress-fill");
  if (!l || c) {
    l == null || l.remove(), l = document.createElement("div"), l.className = "progress-fill", l.style.animationDuration = `${t}ms`;
    const u = Math.max(0, Math.min(r, t - 1));
    u > 0 && (l.style.animationDelay = `-${u}ms`), s.appendChild(l);
  }
  l.classList.toggle("paused", n);
}
function m0() {
  return `
    ${lt()}
    :host {
      display: block;
      font-family: var(--ff-sans);
    }
    *, *::before, *::after { box-sizing: border-box; }

    .bar {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 8px 6px 8px 14px;
      background: var(--c-surface);
      color: var(--c-text);
      border: 1px solid var(--c-border);
      border-radius: var(--r-pill);
      box-shadow: var(--shadow-md);
      opacity: 0.45;
      transition: opacity 0.15s;
    }

    /* Horizontal mode: progress strip floats above the pill so the user
       can see remaining time without it crowding the controls. Vertical
       mode keeps its side strip inside the pill (see .bar.vertical .progress). */
    .progress {
      position: absolute;
      left: 50%;
      right: auto;
      top: auto;
      bottom: calc(100% + 6px);
      width: calc(100% - 28px);
      height: 4px;
      transform: translateX(-50%);
      border: 1px solid color-mix(in oklch, currentColor, transparent 40%);
      border-radius: 2px;
      overflow: hidden;
      background: transparent;
      pointer-events: none;
    }
    .progress.hidden { display: none; }
    .progress-fill {
      height: 100%;
      width: 100%;
      background: #0a99ff;
      transform: scaleX(0);
      transform-origin: left center;
      animation-name: progress-grow-x;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
    .progress-fill.paused { animation-play-state: paused; }
    @keyframes progress-grow-x {
      from { transform: scaleX(0); }
      to   { transform: scaleX(1); }
    }
    /* Mirror of the horizontal strip: float OUTSIDE the pill (to the left),
       running parallel to the column's long axis — same 4px thickness, 6px
       gap, and end-inset (28px) as the horizontal bar floats above. Keeping
       it inside the narrow column crowded the buttons; outside reads as a
       clean side gauge. Flip to the right by swapping 'right' for 'left'. */
    .bar.vertical .progress {
      left: auto;
      right: calc(100% + 6px);
      top: 50%;
      bottom: auto;
      width: 4px;
      height: calc(100% - 28px);
      transform: translateY(-50%);
    }
    /* Docked against the left wall there's no room for the left-outside
       strip — JS toggles .progress-right (see updateProgressSide) to float
       it on the right instead. */
    .bar.vertical.progress-right .progress {
      right: auto;
      left: calc(100% + 6px);
    }
    .bar.vertical .progress-fill {
      transform: scaleY(0);
      transform-origin: center top;
      animation-name: progress-grow-y;
    }
    @keyframes progress-grow-y {
      from { transform: scaleY(0); }
      to   { transform: scaleY(1); }
    }
    .bar:hover,
    .bar.paused,
    .bar:has([data-region="step-popup"]:not([hidden])) { opacity: 1; }

    .ctrl-tts.active { color: var(--c-primary); }

    /* Autoplay-blocked state: the browser is holding narration until the user
       clicks (no activation on a script-navigated page). Tint the muted speaker
       orange and float a bouncing "click anywhere for sound" hint above it. */
    .ctrl-tts { position: relative; }
    .ctrl-tts.blocked { color: var(--c-warning); }
    .bar:has(.ctrl-tts.blocked) { opacity: 1; }
    .tts-hint {
      position: absolute;
      bottom: calc(100% + 9px);
      left: 50%;
      transform: translateX(-50%);
      transform-origin: bottom center;
      background: var(--c-warning);
      color: #fff;
      font-family: var(--ff-sans);
      font-size: 11px;
      font-weight: 600;
      line-height: 1;
      white-space: nowrap;
      padding: 6px 9px;
      border-radius: var(--r-sm);
      box-shadow: var(--shadow-md);
      pointer-events: none;
      z-index: 2;
      animation: tts-pudding 1.05s ease-in-out infinite;
    }
    .tts-hint[hidden] { display: none; }
    /* little downward nib pointing at the speaker */
    .tts-hint::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 4px solid transparent;
      border-top-color: var(--c-warning);
    }
    /* 띠용띠용 — squash before the jump, stretch up, land with a soft squash. */
    @keyframes tts-pudding {
      0%, 100% { transform: translateX(-50%) translateY(0)    scale(1, 1); }
      15%      { transform: translateX(-50%) translateY(0)    scale(1.12, 0.82); }
      40%      { transform: translateX(-50%) translateY(-7px) scale(0.9, 1.14); }
      60%      { transform: translateX(-50%) translateY(0)    scale(1.08, 0.9); }
      78%      { transform: translateX(-50%) translateY(-2px) scale(0.98, 1.03); }
    }
    @media (prefers-reduced-motion: reduce) {
      .tts-hint { animation: none; }
    }

    .counter {
      font-family: var(--ff-mono);
      font-size: 11px;
      font-weight: 500;
      font-variant-numeric: tabular-nums;
      margin-right: 8px;
      opacity: 0.85;
      min-width: 36px;
      text-align: center;
      cursor: pointer;
      user-select: none;
      padding: 2px 4px;
      border-radius: var(--r-xs);
      white-space: nowrap;
      flex-shrink: 0;
    }
    .counter:hover { background: color-mix(in oklch, currentColor, transparent 92%); }
    [data-action="move-drag"] { cursor: grab; }
    [data-action="move-drag"].dragging { cursor: grabbing; }
    [data-action="move-drag"] svg { display: block; }

    /* 브랜드 펜촉 = 이동 핸들. 좌측 캡을 검정 원으로 덮되 알약 가장자리가
       2px 보이도록 외곽 높이(42px = 24 컨트롤 + 16 패딩 + 2 보더)보다 4px
       작은 38px 원을 좌/상/하 모두 2px 안쪽으로 들인다. 음수 마진으로 위치를
       당기되 세로 마진(-7)이 줄 높이를 24px(컨트롤과 동일)로 되돌려 바가
       세로로 커지지 않게 한다. */
    .mn-brand {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #000;
      color: #fff;
      cursor: grab;
      margin: -7px 6px -7px -13px;
    }
    .mn-brand svg { display: block; }
    .mn-brand.dragging,
    .mn-brand:active { cursor: grabbing; }

    .ctrl {
      background: transparent;
      border: none;
      color: inherit;
      font-family: inherit;
      font-size: 14px;
      line-height: 1;
      width: 24px;
      height: 24px;
      border-radius: 999px;
      cursor: pointer;
      display: inline-grid;
      place-items: center;
      padding: 0;
      transition: background 0.12s ease;
      flex-shrink: 0;
    }
    .ctrl:hover { background: color-mix(in oklch, currentColor, transparent 85%); }
    .ctrl:focus-visible {
      outline: 2px solid var(--c-focus);
      outline-offset: 2px;
    }
    .ctrl[disabled] { opacity: 0.4; cursor: not-allowed; }

    .divider {
      width: 1px;
      height: 16px;
      background: color-mix(in oklch, currentColor, transparent 80%);
      margin: 0 4px;
    }

    .ctrl-exit { opacity: 0.7; }
    .ctrl-exit:hover { opacity: 1; }

    [data-action="orient"] svg { display: block; }

    .step-popup {
      position: absolute;
      bottom: calc(100% + 6px);
      left: 0;
      margin: 0;
      padding: 6px 0;
      list-style: none;
      background: var(--c-surface);
      color: var(--c-text);
      border: 1px solid var(--c-border);
      border-radius: var(--r-md);
      box-shadow: var(--shadow-md);
      max-height: 180px;
      overflow-y: auto;
      min-width: 210px;
      max-width: 300px;
      font-family: var(--ff-sans);
      font-size: 13px;
      line-height: 1.3;
      z-index: 1;
    }
    .step-popup[hidden] { display: none; }
    .step-popup::-webkit-scrollbar { width: 8px; }
    .step-popup::-webkit-scrollbar-track {
      background: color-mix(in oklch, currentColor, transparent 82%);
      border-radius: 999px;
    }
    .step-popup::-webkit-scrollbar-thumb {
      background: color-mix(in oklch, currentColor, transparent 45%);
      border-radius: 999px;
    }
    .step-popup::-webkit-scrollbar-thumb:hover {
      background: color-mix(in oklch, currentColor, transparent 25%);
    }
    .step-popup li {
      padding: 6px 14px;
      cursor: pointer;
      opacity: 0.72;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: opacity 0.12s ease, background 0.12s ease;
    }
    .step-popup li:hover { background: color-mix(in oklch, currentColor, transparent 92%); opacity: 1; }
    .step-popup li.active { opacity: 1; font-weight: 600; }

    .bar.vertical {
      flex-direction: column;
      align-items: center;
      /* Strip floats outside now, so the column just needs slim symmetric
         side padding. */
      padding: 14px 6px 8px 6px;
      gap: 4px;
    }
    /* 세로 모드: 컬럼 폭은 컨트롤(24px)이 정한다(외곽 38px). 원은 그보다
       4px 작은 34px 로 상단 캡을 덮되 좌/우/상 2px 가장자리를 남긴다. 가로
       음수 마진(-5)으로 컬럼을 넓히지 않게 하고, 위로 -13 당겨 상단 2px
       인셋. counter 와 8px 간격을 위해 아래 4px. */
    .bar.vertical .mn-brand {
      width: 34px;
      height: 34px;
      margin: -13px -5px 4px -5px;
    }
    /* 카운터는 세로쓰기로 "2 / 9" 를 위→아래로 쌓아 컬럼을 좁게 유지한다. */
    .bar.vertical .counter {
      writing-mode: vertical-lr;
      text-orientation: upright;
      margin-right: 0;
      margin-bottom: 4px;
      min-width: 0;
      padding: 2px 0;
      letter-spacing: -1px;
    }
    .bar.vertical .divider {
      width: 16px;
      height: 1px;
      margin: 4px 0;
    }
  `;
}
let ae = null, we = null, re = null, ot = 0, Re = null, be = null, et = 0, st = !1, ss = 15, as = 0, Pn = !1, Mr = !1, In = [], On = null, is = !1, Ct = null, Rn = 0, cs = !1;
const g0 = 2;
function Wt() {
  Ct !== null && (clearTimeout(Ct), Ct = null);
}
function b0() {
  return !cs && Rn >= g0;
}
let Ue = null, Pt = !1, Nn = !1;
const Dn = /* @__PURE__ */ new Set();
function qe(e) {
  if (Nn !== e) {
    Nn = e;
    for (const t of [...Dn]) t(e);
    F().set(H.ttsBlocked, e).catch(() => {
    });
  }
}
function _0() {
  return Nn;
}
function y0(e) {
  return Dn.add(e), () => Dn.delete(e);
}
let tt = null;
function Er() {
  if (Pt || typeof window > "u") return;
  Pt = !0;
  const e = () => {
    window.removeEventListener("click", e), Pt = !1, tt = null, qe(!1);
    const t = Ue;
    Ue = null, t && hs(t);
  };
  tt = e, window.addEventListener("click", e);
}
function ls() {
  tt && typeof window < "u" && window.removeEventListener("click", tt), tt = null, Pt = !1;
}
async function v0() {
  if (Mr) return;
  Mr = !0, Pn = await Qn(), $0((t) => {
    Pn = t;
  }), On = await ds(), A0((t) => {
    On = t;
  }), In = await ps(), is = !0;
  const e = Ge();
  e == null || e.addEventListener("voiceschanged", () => {
    In = e.getVoices();
  });
}
function x0() {
  return Pn;
}
function Ge() {
  return typeof speechSynthesis > "u" ? null : speechSynthesis;
}
let Tr = !1;
function w0() {
  if (Tr) return;
  const e = Ge();
  if (e) {
    Tr = !0;
    try {
      const t = new SpeechSynthesisUtterance(" ");
      t.volume = 0, e.speak(t);
    } catch {
    }
  }
}
function k0(e, t) {
  if (t <= 0) return 0;
  if (t >= e.length) return e.length;
  let n = t;
  for (; n > 0 && !/\s/.test(e[n - 1] || ""); ) n--;
  return n;
}
async function Qn() {
  try {
    return await F().get(H.ttsEnabled) === !0;
  } catch {
    return !1;
  }
}
async function us(e) {
  try {
    await F().set(H.ttsEnabled, !!e);
  } catch {
  }
}
async function ds() {
  try {
    const e = await F().get(H.ttsVoiceName);
    return typeof e == "string" && e.length > 0 ? e : null;
  } catch {
    return null;
  }
}
async function S0(e) {
  try {
    e === null ? await F().remove(H.ttsVoiceName) : await F().set(H.ttsVoiceName, e);
  } catch {
  }
}
function $0(e) {
  return F().subscribe([H.ttsEnabled], (t, n) => {
    e(n === !0);
  });
}
function A0(e) {
  return F().subscribe([H.ttsVoiceName], (t, n) => {
    e(typeof n == "string" && n.length > 0 ? n : null);
  });
}
function er() {
  var e;
  if (ae = null, we = null, ot = 0, Re = null, st = !1, et = 0, be = null, Ue = null, ls(), Wt(), qe(!1), (e = Ge()) == null || e.cancel(), re) {
    const t = re;
    re = null, t(!1);
  }
}
function M0() {
  const e = Ge();
  if (e) {
    if (ae && Re) {
      let t = ot;
      if (!st && et > 0) {
        const n = Date.now() - et, r = Math.round(n / 1e3 * ss), o = as + r;
        t = k0(Re, o);
      }
      be = {
        text: Re,
        charIndex: t
      };
    }
    if (ae = null, we = null, ot = 0, Re = null, st = !1, et = 0, Ue = null, ls(), Wt(), qe(!1), e.cancel(), re) {
      const t = re;
      re = null, t(!1);
    }
  }
}
function ps(e = 1500) {
  const t = Ge();
  if (!t) return Promise.resolve([]);
  const n = t.getVoices();
  return n.length > 0 ? Promise.resolve(n) : new Promise((r) => {
    let o = !1;
    const s = (a) => {
      o || (o = !0, t.removeEventListener("voiceschanged", i), r(a));
    }, i = () => s(t.getVoices());
    t.addEventListener("voiceschanged", i), setTimeout(() => s(t.getVoices()), e);
  });
}
function E0(e) {
  const t = (navigator.language || "").toLowerCase().split("-")[0];
  return t ? e.filter(
    (r) => r.lang.toLowerCase().split("-")[0] === t
  ).find((r) => r.name.startsWith("Google")) ?? null : null;
}
function It() {
  return we;
}
function Lr(e, t, n, r, o, s) {
  const i = new Promise((a) => {
    var f;
    re = a;
    const c = new SpeechSynthesisUtterance(t), l = s && o.find((m) => m.name === s) || E0(o);
    l && (c.voice = l, c.lang = l.lang), ae = c, Re = n, ot = r, st = !1, et = Date.now(), as = r;
    const u = (c.lang || ((f = c.voice) == null ? void 0 : f.lang) || navigator.language || "en").toLowerCase().split("-")[0];
    ss = (u === "ko" || u === "ja" || u === "zh" ? 7 : 14) * (c.rate || 1);
    let d = !1;
    const p = (m) => {
      Wt(), re === a && (re = null), ae === c && (ae = null), we === i && (we = null), a(m);
    };
    c.addEventListener("boundary", (m) => {
      ae === c && (ot = r + (m.charIndex || 0), st = !0);
    }), c.addEventListener("start", () => {
      d = !0, cs = !0, Rn = 0, Wt(), qe(!1);
    }), c.addEventListener("end", () => p(!0)), c.addEventListener("error", (m) => {
      m.error === "not-allowed" && (Ue = n, qe(!0), Er()), p(!1);
    }), Ct = setTimeout(() => {
      ae !== c || d || (Rn += 1, Ue = n, qe(!0), Er(), p(!1));
    }, df), e.speak(c);
  });
  return we = i, i;
}
function hs(e) {
  const t = Ge();
  if (!t) return Promise.resolve(!1);
  const n = e.trim();
  if (n.length === 0 || b0()) return Promise.resolve(!1);
  let r = n;
  if (be && be.text === n) {
    if (r = n.slice(be.charIndex).trimStart(), be = null, r.length === 0) return Promise.resolve(!0);
  } else
    be = null, er();
  const o = n, s = o.length - r.length;
  if (is)
    return Lr(t, r, o, s, In, On);
  const i = (async () => {
    const a = await ps(), c = await ds();
    return Lr(t, r, o, s, a, c);
  })();
  return we = i, i;
}
let Ot = !1;
function T0(e = 14) {
  return `<svg width="${e}" height="${e}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="display:block"><path d="M 3 6 L 3 10 L 6 10 L 9 12.5 L 9 3.5 L 6 6 Z" fill="currentColor"/><path d="M 11 6 a 2.5 2.5 0 0 1 0 4"/><path d="M 12.5 4 a 5 5 0 0 1 0 8"/></svg>`;
}
function L0(e = 14) {
  return `<svg width="${e}" height="${e}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="display:block"><path d="M 3 6 L 3 10 L 6 10 L 9 12.5 L 9 3.5 L 6 6 Z" fill="currentColor"/><path d="M 11 6 L 14 9 M 14 6 L 11 9"/></svg>`;
}
function C0(e) {
  Ot = e, fs();
}
function Cr() {
  fs();
}
function fs() {
  const { shadow: e } = y;
  if (!e) return;
  const t = e.querySelector('[data-action="tts-toggle"]');
  if (!t) return;
  const n = _0();
  t.setAttribute("aria-pressed", String(Ot)), t.classList.toggle("active", Ot && !n), t.classList.toggle("blocked", n);
  const r = t.querySelector('[data-region="tts-icon"]');
  r && (r.innerHTML = n || !Ot ? L0(14) : T0(14));
  const o = t.querySelector('[data-region="tts-hint"]');
  o && (o.hidden = !n);
}
function P0({ height: e = 16, color: t, title: n } = {}) {
  const r = Math.round(e * 568 / 891), o = t ?? "currentColor", s = n ? `<title>${I0(n)}</title>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 568 891" width="${r}" height="${e}" fill="${o}" fill-rule="evenodd" aria-hidden="${n ? "false" : "true"}" focusable="false">${s}<g transform="translate(0, 891) scale(0.1, -0.1)"><path d="M2515 8703 c-17 -2 -36 -13 -43 -23 -19 -31 -550 -1005 -1217 -2235 -334 -616 -646 -1190 -693 -1275 -218 -397 -362 -672 -362 -690 0 -10 30 -103 66 -207 36 -103 83 -240 104 -303 21 -63 77 -227 124 -365 106 -302 284 -825 338 -990 22 -66 46 -133 53 -150 7 -16 50 -140 95 -275 46 -135 96 -282 112 -328 l30 -82 1718 0 1719 0 21 58 c12 31 60 169 106 306 47 137 95 276 108 310 13 34 41 117 64 186 39 121 192 567 246 720 42 116 355 1029 372 1083 l15 49 -742 1361 c-408 749 -808 1484 -889 1632 -163 300 -526 968 -605 1115 -57 104 -61 107 -158 109 l-58 1 2 -1841 c2 -1989 -2 -1852 52 -1881 55 -28 136 -103 174 -160 234 -346 -9 -799 -427 -798 -147 0 -260 48 -365 154 -119 119 -169 265 -147 421 22 152 99 270 237 364 l70 47 3 1847 2 1847 -47 -2 c-27 0 -62 -3 -78 -5z"/><path d="M1140 775 l0 -585 1705 0 1705 0 0 585 0 585 -1705 0 -1705 0 0 -585z"/></g></svg>`;
}
function I0(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function O0(e) {
  var r;
  if (y.host) return;
  const { host: t, shadow: n } = Ve();
  y.host = t, y.shadow = n, t.style.cssText = [
    "position: fixed",
    "bottom: 32px",
    "left: 50%",
    "transform: translateX(-50%)",
    `z-index: ${te + 6}`,
    "pointer-events: auto",
    // Recording flow already requested hidden — respect it on mount.
    ""
  ].filter(Boolean).join("; "), n.innerHTML = `<style>${m0()}</style>${R0()}`, n.addEventListener("click", (o) => N0(o, e)), document.body.appendChild(t), u0(), document.addEventListener("mousedown", os, !0), (r = y.cleanupBlocked) == null || r.call(y), y.cleanupBlocked = y0(() => Cr()), Cr(), y.orientationApplied = !1, ts().then((o) => {
    y.orientationApplied || (y.orientationApplied = !0, es(o));
  }), ns().then((o) => {
    y.host && o && y.host.style.transform !== "none" && (l0(y.host, o), Ht());
  });
}
function R0() {
  var n, r;
  const t = ((r = (n = le()).isSupported) == null ? void 0 : r.call(n)) !== !1 ? `<button class="ctrl" data-action="prompter" aria-label="${A("replay.prompter-aria")}" title="${A("replay.prompter-title")}"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" style="display:block"><rect x="2.5" y="3" width="11" height="9" rx="1"/><path d="M 4.5 5.8 L 11.5 5.8 M 4.5 8 L 11.5 8 M 4.5 10.2 L 9 10.2"/></svg></button>` : "";
  return `
    <div class="bar" role="toolbar" aria-label="${A("replay.counter-aria")}">
      <span class="mn-brand" data-region="move-handle" role="button" aria-label="${A("replay.move-aria")}" title="${A("replay.move-title")}">${P0({ height: 26 })}</span>
      <span class="counter" data-region="counter" aria-live="polite" role="button" aria-haspopup="listbox" aria-expanded="false" tabindex="0">1 / 1</span>
      <button class="ctrl" data-action="prev" aria-label="${A("replay.prev-aria")}">‹</button>
      <button class="ctrl" data-action="pause" aria-label="${A("replay.pause-aria")}"><span data-region="pause-icon">II</span></button>
      <button class="ctrl" data-action="next" aria-label="${A("replay.next-aria")}">›</button>
      <span class="divider" aria-hidden="true"></span>
      ${t}
      <button class="ctrl ctrl-tts" data-action="tts-toggle" aria-pressed="false" aria-label="${A("replay.tts-aria")}" title="${A("replay.tts-title")}" data-region="tts-toggle"><span data-region="tts-icon"></span><span class="tts-hint" data-region="tts-hint" role="status" hidden>${A("replay.tts-blocked-hint")}</span></button>
      <button class="ctrl" data-action="orient" aria-label="${A("replay.orient-aria")}" data-region="orient-icon"></button>
      <button class="ctrl ctrl-exit" data-action="exit" aria-label="${A("replay.exit-aria")}">×</button>
      <div class="progress hidden" data-region="progress" aria-hidden="true"></div>
      <ul class="step-popup" data-region="step-popup" role="listbox" hidden></ul>
    </div>
  `;
}
function N0(e, t) {
  var s;
  const n = e.target;
  if (!(n instanceof Element)) return;
  if (n.closest('[data-region="counter"]')) {
    p0();
    return;
  }
  const r = n.closest('[data-action="step-jump"]');
  if (r) {
    const i = Number(r.getAttribute("data-index"));
    Number.isFinite(i) && (Cn(), t.onStepSelect(i));
    return;
  }
  if (n.closest('[data-action="tts-toggle"]')) {
    t.onToggleTts();
    return;
  }
  const o = (s = n.closest("[data-action]")) == null ? void 0 : s.getAttribute("data-action");
  switch (o && Cn(), o) {
    case "prev":
      t.onPrev();
      break;
    case "next":
      t.onNext();
      break;
    case "pause":
      t.onTogglePause();
      break;
    case "exit":
      t.onExit();
      break;
    case "prompter":
      t.onTogglePrompter();
      break;
    case "orient":
      D0();
      break;
  }
}
function D0() {
  const { shadow: e } = y;
  if (!e) return;
  const t = e.querySelector(".bar");
  if (!t) return;
  const n = t.classList.contains("vertical") ? "horizontal" : "vertical";
  y.orientationApplied = !0, es(n), i0(n);
}
function B0() {
  var e, t, n;
  (e = y.cleanupDrag) == null || e.call(y), y.cleanupDrag = null, (t = y.cleanupBlocked) == null || t.call(y), y.cleanupBlocked = null, document.removeEventListener("mousedown", os, !0), (n = y.host) == null || n.remove(), y.host = null, y.shadow = null, y.orientationApplied = !1, h0();
}
function Pr(e) {
  const { shadow: t } = y;
  if (!t) return;
  const n = t.querySelector('[data-region="counter"]');
  n && (n.textContent = `${e.currentIndex + 1} / ${e.total}`);
  const r = t.querySelector(".bar");
  r == null || r.classList.toggle("paused", e.paused);
  const o = t.querySelector('[data-region="pause-icon"]');
  o && (o.textContent = e.paused ? "▶" : "II");
  const s = t.querySelector('[data-action="prev"]');
  s && s.toggleAttribute("disabled", e.currentIndex <= 0);
  const i = t.querySelector('[data-action="next"]');
  i && (i.toggleAttribute("disabled", !1), i.setAttribute(
    "aria-label",
    e.currentIndex >= e.total - 1 ? A("replay.finish-aria") : A("replay.next-aria")
  )), f0(
    e.currentIndex,
    e.timerDurationMs ?? null,
    e.paused,
    e.timerElapsedMs ?? 0
  ), d0(e.steps ?? [], e.currentIndex), C0(e.ttsEnabled === !0);
}
let ie = null;
function q0(e) {
  ht();
  const { host: t, shadow: n } = Ve();
  ie = t, ie.style.cssText = [
    "position: fixed",
    "inset: 0",
    "background: rgba(0, 0, 0, 0.40)",
    `z-index: ${te + 7}`,
    "display: flex",
    "align-items: center",
    "justify-content: center",
    "pointer-events: auto"
  ].join("; "), n.innerHTML = `
    <style>${rs()}</style>
    <div class="modal" role="alertdialog" aria-modal="true" aria-labelledby="nf-title">
      <div class="modal-head">
        <div class="icon-circle" aria-hidden="true">!</div>
        <div>
          <h2 id="nf-title">${A("replay.notfound.title")}</h2>
          <p>${A("replay.notfound.body")}</p>
        </div>
      </div>
      <div class="actions">
        <button class="secondary" data-action="stop">${A("replay.notfound.stop")}</button>
        <button class="primary" data-action="skip" autofocus>${A("replay.notfound.skip")} →</button>
      </div>
    </div>
  `, n.addEventListener("click", (o) => {
    var a;
    const s = o.target;
    if (!(s instanceof HTMLElement)) return;
    const i = (a = s.closest("[data-action]")) == null ? void 0 : a.getAttribute("data-action");
    i === "skip" ? e.onSkip() : i === "stop" && e.onStop();
  });
  const r = (o) => {
    o.key === "Enter" ? (o.preventDefault(), e.onSkip()) : o.key === "Escape" && (o.preventDefault(), e.onStop());
  };
  document.addEventListener("keydown", r, !0), ie.__cleanup = () => {
    document.removeEventListener("keydown", r, !0);
  }, document.body.appendChild(ie);
}
function ht() {
  if (!ie) return;
  const e = ie.__cleanup;
  e == null || e(), ie.remove(), ie = null;
}
let ce = null;
function z0(e) {
  Ut();
  const { host: t, shadow: n } = Ve();
  ce = t, ce.style.cssText = [
    "position: fixed",
    "inset: 0",
    "background: rgba(0, 0, 0, 0.40)",
    `z-index: ${te + 7}`,
    "display: flex",
    "align-items: center",
    "justify-content: center",
    "pointer-events: auto"
  ].join("; "), n.innerHTML = `
    <style>
      ${rs()}
      .modal { border-top-color: var(--c-info); max-width: 480px; }
      .icon-circle { background: color-mix(in oklab, var(--c-info) 14%, transparent); color: var(--c-info); }
    </style>
    <div class="modal" role="alertdialog" aria-modal="true" aria-labelledby="um-title">
      <div class="modal-head">
        <div class="icon-circle" aria-hidden="true">↗</div>
        <div>
          <h2 id="um-title">${A("replay.url-mismatch.title")}</h2>
          <p>${A("replay.url-mismatch.body")}</p>
        </div>
      </div>
      <span class="url" data-region="url"></span>
      <div class="actions">
        <button class="secondary" data-action="cancel">${A("replay.url-mismatch.cancel")}</button>
        <button class="secondary" data-action="force">${A("replay.url-mismatch.force")}</button>
        <button class="primary" data-action="navigate" autofocus>${A("replay.url-mismatch.navigate")} →</button>
      </div>
    </div>
  `;
  const r = n.querySelector('[data-region="url"]');
  r && (r.textContent = e.savedUrl), n.addEventListener("click", (s) => {
    var c;
    const i = s.target;
    if (!(i instanceof HTMLElement)) return;
    const a = (c = i.closest("[data-action]")) == null ? void 0 : c.getAttribute("data-action");
    a === "navigate" ? e.onNavigate() : a === "force" ? e.onForce() : a === "cancel" && e.onCancel();
  });
  const o = (s) => {
    s.key === "Escape" ? (s.preventDefault(), e.onCancel()) : s.key === "Enter" && (s.preventDefault(), e.onNavigate());
  };
  document.addEventListener("keydown", o, !0), ce.__cleanup = () => {
    document.removeEventListener("keydown", o, !0);
  }, document.body.appendChild(ce);
}
function Ut() {
  if (!ce) return;
  const e = ce.__cleanup;
  e == null || e(), ce.remove(), ce = null;
}
let ye = null;
function ms(e) {
  ft();
  const t = e.getBoundingClientRect(), n = F0(e), r = t.left + n.x, o = t.top + n.y, s = t.bottom + n.y, i = 36, a = 8, c = o - a - i < 8, l = c ? Math.min(window.innerHeight - 8 - i, s + a) : Math.max(8, o - a - i), u = Math.max(8, Math.min(r, window.innerWidth - 200)), h = c ? "up" : "down", { host: d, shadow: p } = Ve();
  ye = d, ye.style.cssText = [
    "position: fixed",
    `top: ${l}px`,
    `left: ${u}px`,
    `z-index: ${te + 6}`,
    "pointer-events: none"
  ].join("; "), p.innerHTML = `
    <style>
      ${lt()}
      :host { display: block; font-family: var(--ff-sans); }
      *, *::before, *::after { box-sizing: border-box; }
      .bubble {
        position: relative;
        font-size: 11px;
        font-weight: 500;
        color: var(--c-surface);
        background: var(--c-text);
        padding: 6px 10px;
        border-radius: var(--r-sm);
        box-shadow: var(--shadow-md);
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .eyebrow {
        opacity: 0.6;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .tip {
        position: absolute;
        width: 8px;
        height: 8px;
        background: var(--c-text);
        transform: translateX(-50%) rotate(45deg);
        left: 50%;
      }
      .tip.down { bottom: -3px; }
      .tip.up { top: -3px; }
    </style>
    <div class="bubble">
      <span class="eyebrow">${A("prompter.action-step")}</span>
      <span>${A("replay.action-prompt")}</span>
      <span class="tip ${h}" aria-hidden="true"></span>
    </div>
  `, document.body.appendChild(ye);
}
function ft() {
  ye == null || ye.remove(), ye = null;
}
function F0(e) {
  var t;
  try {
    const n = (t = e.ownerDocument) == null ? void 0 : t.defaultView;
    if (!n || n === window) return { x: 0, y: 0 };
    const r = n.frameElement;
    if (!r) return { x: 0, y: 0 };
    const o = r.getBoundingClientRect();
    return { x: o.left, y: o.top };
  } catch {
    return { x: 0, y: 0 };
  }
}
let ze = null;
function H0(e) {
  ze || (ze = (t) => {
    if (v.state)
      switch (t.key) {
        case "ArrowRight":
          t.preventDefault(), e.onNext();
          break;
        case "ArrowLeft":
          t.preventDefault(), e.onPrev();
          break;
        case " ":
        case "Spacebar":
          t.preventDefault(), e.onTogglePause();
          break;
        case "Escape":
          t.preventDefault(), e.onExit();
          break;
      }
  }, document.addEventListener("keydown", ze, !0));
}
function W0() {
  ze && (document.removeEventListener("keydown", ze, !0), ze = null);
}
function gs(e, t, n = !1) {
  try {
    const r = new URL(e), o = new URL(t);
    return r.origin !== o.origin || r.pathname !== o.pathname ? !1 : n ? r.search === o.search && r.hash === o.hash : !0;
  } catch {
    return !1;
  }
}
function U0(e) {
  var n;
  const t = (n = e.steps[0]) == null ? void 0 : n.pickedAtUrl;
  return t && t.length > 0 ? t : e.url;
}
async function j0(e, t) {
  var r, o, s, i;
  const n = (r = e.steps[t]) == null ? void 0 : r.pickedAtUrl;
  if (!n || gs(n, location.href, !!e.strictUrlMatch)) return !1;
  if (((o = v.state) == null ? void 0 : o.standalone) === !0)
    return qs().tryHandoff({
      targetUrl: n,
      scenarioId: e.id,
      stepIndex: t,
      paused: ((s = v.state) == null ? void 0 : s.paused) ?? !1
    });
  try {
    await je().setActiveReplay({
      scenarioId: e.id,
      stepIndex: t,
      startedAt: Date.now(),
      paused: ((i = v.state) == null ? void 0 : i.paused) ?? !1
    });
  } catch (a) {
    console.warn("[manuscript] persist activeReplay before nav failed", a);
  }
  return location.href = n, !0;
}
function V0(e) {
  return new Promise((t) => {
    z0({
      savedUrl: e,
      onNavigate: () => t("navigate"),
      onForce: () => {
        Ut(), t("force");
      },
      onCancel: () => {
        Ut(), t("cancel");
      }
    });
  });
}
async function G0(e) {
  try {
    const t = await je().getActiveReplay();
    return (t == null ? void 0 : t.scenarioId) === e;
  } catch {
    return !1;
  }
}
async function tr() {
  const e = D();
  if (!(!e || !v.state) && v.state.standalone !== !0)
    try {
      await je().setActiveReplay({
        scenarioId: e.id,
        stepIndex: B(),
        startedAt: Date.now(),
        paused: v.state.paused
      });
    } catch (t) {
      console.warn("[manuscript] persist activeReplay failed", t);
    }
}
async function bs(e, t, n) {
  const r = D();
  if (!r) return { ok: !1 };
  if (n && await G0(r.id)) return { ok: !0 };
  const o = U0(r);
  if (!o || gs(o, location.href, !!r.strictUrlMatch))
    return { ok: !0 };
  const s = await V0(o);
  return s === "cancel" ? { ok: !1 } : s === "navigate" ? (await je().setActiveReplay({
    scenarioId: e,
    stepIndex: t,
    startedAt: Date.now()
  }), location.href = o, { ok: !1 }) : { ok: !0 };
}
class _s extends Error {
  constructor(t) {
    super("element-not-found"), this.chain = t, this.name = "ElementNotFoundError";
  }
}
function ys(e, t = ao) {
  return Y0(e, t).then((n) => n.el);
}
function Y0(e, t = ao) {
  const n = An(e);
  return n ? Promise.resolve(n) : new Promise((r, o) => {
    let s = !1;
    const a = (wo(e.framePath) ?? document).body ?? document.body, c = new MutationObserver(() => {
      if (s) return;
      const u = An(e);
      u && (s = !0, c.disconnect(), clearTimeout(l), r(u));
    }), l = setTimeout(() => {
      s || (s = !0, c.disconnect(), o(new _s(e)));
    }, t);
    c.observe(a, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["data-testid", "data-test", "id", "aria-label"]
    });
  });
}
function Ir(e) {
  const t = {
    name: e.name,
    description: e.description,
    autoAdvanceMs: e.autoAdvanceMs ?? null,
    waitForNavigation: e.waitForNavigation,
    thumbnailDataUrl: e.thumbnailDataUrl ?? null
  }, n = e.subElements, r = e.subDwellsMs;
  return n && n.length > 0 && r && r.length === n.length + 1 && (t.primaryDwellMs = r[0] ?? 0, t.subs = n.map((o, s) => ({
    id: o.id,
    thumbnailDataUrl: o.thumbnailDataUrl,
    dwellMs: r[s + 1] ?? 0
  }))), t;
}
function Me() {
  const { state: e } = v;
  if (!e) return;
  const t = D();
  if (!t) return;
  const n = t.steps[B()], r = n && !n.waitForNavigation && n.autoAdvanceMs && n.autoAdvanceMs > 0 ? n.autoAdvanceMs : null;
  let o = 0;
  if (r !== null) {
    if (e.autoAdvanceResumeMs !== null)
      o = Math.max(0, r - e.autoAdvanceResumeMs);
    else if (e.subSeqResume && (n != null && n.subDwellsMs)) {
      const { idx: s, elapsedMs: i } = e.subSeqResume, a = n.subDwellsMs;
      let c = 0;
      const l = s + 1;
      for (let u = 0; u < l; u++) c += a[u] ?? 0;
      o = Math.max(0, Math.min(r, c + i));
    }
  }
  if (Qn().then((s) => {
    Pr({
      currentIndex: B(),
      total: t.steps.length,
      paused: e.paused,
      timerDurationMs: r,
      timerElapsedMs: o,
      steps: t.steps.map((i) => ({ name: i.name })),
      ttsEnabled: s
    });
  }), Pr({
    currentIndex: B(),
    total: t.steps.length,
    paused: e.paused,
    timerDurationMs: r,
    timerElapsedMs: o,
    steps: t.steps.map((s) => ({ name: s.name }))
  }), le().isPrompterOpen() || Bs().isRecordingArmed()) {
    const s = B(), i = t.steps[s], a = t.steps[s + 1];
    le().updatePrompter({
      scenarioId: t.id,
      scenarioName: t.name,
      currentIndex: s,
      total: t.steps.length,
      paused: e.paused,
      timerElapsedMs: o,
      steps: t.steps.map((c) => ({ name: c.name })),
      current: i ? Ir(i) : null,
      next: a ? Ir(a) : null
    });
  }
}
async function X0() {
  if (le().isPrompterOpen()) {
    await le().closePrompter(), Bn(!1);
    return;
  }
  Bn(!0), await le().openPrompter(), Me();
}
function Bn(e) {
  var t;
  for (const n of document.querySelectorAll('[data-manuscript="ui"]'))
    if ((t = n.shadowRoot) != null && t.querySelector(".bar")) {
      n.style.display = e ? "none" : "";
      break;
    }
}
const K0 = 0.125;
function vs(e, t = {}) {
  const { behavior: n } = t, r = window.innerHeight, o = e.getBoundingClientRect(), s = window.scrollY + o.top;
  let i;
  o.height > r ? i = s - r * K0 : i = s - (r - o.height) / 2, i = Math.max(0, Math.round(i)), window.scrollTo(n ? { top: i, behavior: n } : { top: i });
}
async function tn(e) {
  var i, a;
  const { state: t } = v;
  if (!t) return;
  const n = D();
  if (!n) return;
  const r = n.steps[B()];
  if (Me(), !r) return;
  ht(), ft();
  const o = B();
  if (x0() && !t.paused && t.narratedStepIndex !== o && hs(r.description).then((c) => {
    c && v.state && B() === o && (v.state.narratedStepIndex = o);
  }), !r.selectors) {
    xn(), r.waitForNavigation || Nr(e);
    return;
  }
  const s = new AbortController();
  t.pendingWait = s;
  try {
    const c = await ys(r.selectors);
    if (s.signal.aborted) return;
    vs(c), io(c);
    const l = r.subElements ?? [];
    if (l.length > 0) {
      if (t.paused) return;
      const u = new AbortController();
      (i = t.subSequenceAbort) == null || i.abort(), t.subSequenceAbort = u, J0(c, r, l, u, e).finally(() => {
        var h;
        ((h = v.state) == null ? void 0 : h.subSequenceAbort) === u && (v.state.subSequenceAbort = null);
      });
      return;
    }
    r.waitForNavigation ? (ms(c), xs(c, s, e.onNext)) : Nr(e);
  } catch (c) {
    if (s.signal.aborted) return;
    if (c instanceof _s) {
      xn(), q0({
        onSkip: e.onNext,
        onStop: e.onExit
      });
      return;
    }
    console.error("[manuscript] replay error", c);
  } finally {
    ((a = v.state) == null ? void 0 : a.pendingWait) === s && (v.state.pendingWait = null);
  }
}
async function J0(e, t, n, r, o) {
  var p;
  const s = t.subDwellsMs ?? [], i = s[0] ?? 0;
  let a = e;
  const c = ((p = v.state) == null ? void 0 : p.subSeqResume) ?? null, l = (c == null ? void 0 : c.idx) ?? -1, u = (c == null ? void 0 : c.elapsedMs) ?? 0;
  if (v.state && (v.state.subSeqResume = null), l === -1) {
    Or(-1);
    const f = Math.max(0, i - u);
    if (await Rr(f, r.signal), r.signal.aborted) return;
  }
  const h = Math.max(0, l);
  for (let f = h; f < n.length; f++) {
    const m = n[f];
    if (!m) continue;
    let g;
    try {
      g = await ys(m.selectors);
    } catch (k) {
      console.warn("[manuscript] sub element not resolved, skipping", k);
      continue;
    }
    if (r.signal.aborted) return;
    vs(g), gf(g, { durationMs: 350 }), a = g, Or(f);
    const _ = s[f + 1] ?? 0, b = f === l ? Math.max(0, _ - u) : _;
    if (await Rr(b, r.signal), r.signal.aborted) return;
  }
  if (v.state && (v.state.subSeqNodeIdx = null, v.state.subSeqNodeStartMs = null), t.waitForNavigation) {
    ms(a), xs(a, r, o.onNext);
    return;
  }
  const d = It();
  d && (await Promise.race([
    d,
    new Promise((f) => {
      r.signal.aborted ? f() : r.signal.addEventListener("abort", () => f(), { once: !0 });
    })
  ]), r.signal.aborted) || !v.state || v.state.paused || o.onNext();
}
function Or(e) {
  const { state: t } = v;
  t && (t.subSeqNodeIdx = e, t.subSeqNodeStartMs = Date.now());
}
function Rr(e, t) {
  return e <= 0 ? Promise.resolve() : new Promise((n) => {
    const r = window.setTimeout(() => n(), e);
    t.addEventListener(
      "abort",
      () => {
        window.clearTimeout(r), n();
      },
      { once: !0 }
    );
  });
}
function xs(e, t, n) {
  if (!v.state) return;
  const r = () => {
    e.removeEventListener("click", o, !0), t.signal.removeEventListener("abort", r);
  }, o = () => {
    r(), !(t.signal.aborted || !v.state) && n();
  };
  e.addEventListener("click", o, !0), t.signal.addEventListener("abort", r);
}
function Nr(e) {
  var c;
  const { state: t } = v;
  if (!t || t.paused) return;
  const n = D();
  if (!n) return;
  const r = B(), o = n.steps[r];
  if (!o) return;
  t.autoAdvanceTimer !== null && (window.clearTimeout(t.autoAdvanceTimer), t.autoAdvanceTimer = null), (c = t.autoAdvanceAbort) == null || c.abort();
  const s = new AbortController();
  t.autoAdvanceAbort = s;
  const i = t.autoAdvanceResumeMs;
  t.autoAdvanceResumeMs = null;
  const a = i ?? o.autoAdvanceMs;
  t.autoAdvanceDeadlineMs = a && a > 0 ? Date.now() + a : null, (async () => {
    const l = [], u = It();
    if (u && l.push(u), a && a > 0 && l.push(
      new Promise((p) => {
        const f = window.setTimeout(() => {
          v.state && v.state.autoAdvanceTimer === f && (v.state.autoAdvanceTimer = null), p();
        }, a);
        v.state && (v.state.autoAdvanceTimer = f), s.signal.addEventListener("abort", () => {
          window.clearTimeout(f), p();
        });
      })
    ), l.length === 0) return;
    const h = new Promise((p) => {
      s.signal.aborted ? p() : s.signal.addEventListener("abort", () => p(), { once: !0 });
    });
    if (await Promise.race([Promise.all(l).then(() => {
    }), h]), s.signal.aborted) return;
    let d = It();
    for (; d; ) {
      if (await Promise.race([d.then(() => {
      }), h]), s.signal.aborted) return;
      d = It();
    }
    !v.state || v.state.paused || B() === r && e.onNext();
  })();
}
function nn(e = {}) {
  var n, r, o;
  const { state: t } = v;
  if (t) {
    if (e.pauseTts) {
      if (t.subSeqNodeIdx !== null && t.subSeqNodeStartMs !== null) {
        const s = Math.max(0, Date.now() - t.subSeqNodeStartMs);
        t.subSeqResume = { idx: t.subSeqNodeIdx, elapsedMs: s };
      }
      if (t.autoAdvanceDeadlineMs !== null) {
        const s = Math.max(0, t.autoAdvanceDeadlineMs - Date.now());
        t.autoAdvanceResumeMs = s > 0 ? s : null;
      }
    } else
      t.subSeqResume = null, t.autoAdvanceResumeMs = null, t.narratedStepIndex = null;
    t.subSeqNodeIdx = null, t.subSeqNodeStartMs = null, t.autoAdvanceDeadlineMs = null, t.autoAdvanceTimer !== null && (window.clearTimeout(t.autoAdvanceTimer), t.autoAdvanceTimer = null), (n = t.autoAdvanceAbort) == null || n.abort(), t.autoAdvanceAbort = null, (r = t.pendingWait) == null || r.abort(), t.pendingWait = null, (o = t.subSequenceAbort) == null || o.abort(), t.subSequenceAbort = null, e.pauseTts ? M0() : er();
  }
}
const rn = {
  onNext: () => void jt(),
  onExit: () => void Vt()
};
async function nr(e = 0, t = {}) {
  if (v.state) return;
  const n = D();
  if (!n || n.steps.length === 0 || t.standalone !== !0 && !(await bs(n.id, e, !0)).ok)
    return;
  v.state = {
    originalStepIndex: B(),
    paused: t.paused ?? !1,
    autoAdvanceTimer: null,
    pendingWait: null,
    autoAdvanceAbort: null,
    subSequenceAbort: null,
    subSeqNodeIdx: null,
    subSeqNodeStartMs: null,
    subSeqResume: null,
    autoAdvanceDeadlineMs: null,
    autoAdvanceResumeMs: null,
    narratedStepIndex: null,
    atEnd: !1,
    standalone: t.standalone === !0,
    dirtyStepIndex: null
  }, oo("replay"), O0({
    onPrev: qn,
    onNext: jt,
    onTogglePause: zn,
    onExit: Vt,
    onStepSelect: (o) => void ws(o),
    onTogglePrompter: () => void X0(),
    onToggleTts: () => void Z0()
  }), le().isPrompterOpen() && Bn(!0), H0({
    onNext: () => void jt(),
    onPrev: () => void qn(),
    onTogglePause: zn,
    onExit: () => void Vt()
  }), v.unsubscribeStep = at(Me);
  const r = Math.min(Math.max(0, e), n.steps.length - 1);
  Yt(r), await tr(), await tn(rn);
}
async function on(e) {
  if (!v.state) return;
  const t = D();
  t && (e < 0 || e >= t.steps.length || (nn(), ht(), ft(), v.state.atEnd = !1, v.state.dirtyStepIndex = null, !await j0(t, e) && (Yt(e), await tr(), await tn(rn))));
}
async function ws(e) {
  e !== B() && await on(e);
}
async function jt() {
  const { state: e } = v;
  if (!e) return;
  const t = D();
  if (!t) return;
  const n = B();
  if (n >= t.steps.length - 1) {
    nn(), ht(), ft(), e.paused = !0, e.atEnd = !0, Me(), document.dispatchEvent(new CustomEvent("manuscript:replay-end"));
    return;
  }
  await on(n + 1);
}
async function qn() {
  await on(B() - 1);
}
async function Z0() {
  const e = !await Qn();
  await us(e), e || er(), Me();
}
function zn() {
  const { state: e } = v;
  if (!e) return;
  if (e.atEnd && e.paused) {
    Q0();
    return;
  }
  if (e.paused && e.dirtyStepIndex === B()) {
    e.dirtyStepIndex = null, e.paused = !1, on(B()), Me();
    return;
  }
  e.paused = !e.paused, e.paused ? nn({ pauseTts: !0 }) : tn(rn), Me();
}
async function Q0() {
  if (!v.state) return;
  const e = D();
  !e || !(await bs(e.id, 0, !1)).ok || v.state && (v.state.paused = !1, v.state.atEnd = !1, Yt(0), await tr(), await tn(rn));
}
async function Vt() {
  var r;
  const { state: e } = v;
  if (!e) return;
  nn(), ht(), ft(), Ut(), xn(), B0(), le().closePrompter(), W0(), (r = v.unsubscribeStep) == null || r.call(v), v.unsubscribeStep = null;
  const t = e.originalStepIndex, n = e.standalone === !0;
  v.state = null, Yt(t), oo("idle"), await je().clearActiveReplay(), n && (r0(), sf());
}
class kt extends Error {
  constructor(t, n) {
    super(t), this.cause = n, this.name = "SchemaError";
  }
}
function Dr(e, t = {}) {
  if (!ks(e))
    throw new kt("Root must be an object");
  const n = t.strict === !0, r = e.schemaVersion;
  let o;
  if (typeof r == "string")
    o = r;
  else {
    if (n)
      throw new kt("Missing schemaVersion field");
    console.warn(
      "[manuscript] schemaVersion missing on stored scenario — assuming 0.1.0",
      e
    ), o = "0.1.0";
  }
  let s = e;
  if (o === "0.1.0")
    s = eb(s), s = Br(s);
  else if (o === "0.1.1")
    s = Br(s);
  else if (o !== Jr)
    throw new kt(`Unsupported schemaVersion: ${o}`);
  if (!Array.isArray(s.steps))
    throw new kt("Missing or invalid steps array");
  return s;
}
function eb(e) {
  const t = e.steps, n = Array.isArray(t) ? t.map((r) => ks(r) ? {
    ...r,
    name: typeof r.name == "string" ? r.name : "",
    description: typeof r.description == "string" ? r.description : "",
    thumbnailDataUrl: typeof r.thumbnailDataUrl == "string" ? r.thumbnailDataUrl : null,
    waitForNavigation: typeof r.waitForNavigation == "boolean" ? r.waitForNavigation : !1
  } : r) : t;
  return {
    ...e,
    schemaVersion: "0.1.1",
    url: typeof e.url == "string" ? e.url : "",
    steps: n
  };
}
function Br(e) {
  return { ...e, schemaVersion: Jr };
}
function ks(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Gt = "mn-player";
function Ss(e) {
  return /^[A-Za-z0-9_-]+$/.test(e) ? e : null;
}
function tb(e) {
  let t = `${e.id};${e.stepIndex};${e.paused ? 1 : 0}`;
  return (e.pos != null || e.orient === "v") && (t += `;${e.orient === "v" ? "v" : "h"}`), e.pos != null && (t += `;${Math.round(e.pos.left)},${Math.round(e.pos.top)}`), t;
}
function nb(e) {
  if (!e) return null;
  const t = /^([^;]+);(\d+);([01])(?:;([hv]))?(?:;(-?\d+),(-?\d+))?$/.exec(e);
  if (!t || !t[1] || !t[2] || !t[3]) return null;
  const n = Ss(t[1]);
  if (!n) return null;
  const r = { id: n, stepIndex: Number(t[2]), paused: t[3] === "1" };
  return t[4] && (r.orient = t[4] === "v" ? "v" : "h"), t[5] && t[6] && (r.pos = { left: Number(t[5]), top: Number(t[6]) }), r;
}
function rb(e) {
  return nb(new URLSearchParams(e).get(Gt));
}
function ob(e, t) {
  const n = new URL(e);
  return n.searchParams.set(Gt, tb(t)), n.href;
}
function sb(e = window) {
  const t = new URL(e.location.href);
  t.searchParams.has(Gt) && (t.searchParams.delete(Gt), e.history.replaceState(null, "", t.pathname + t.search + t.hash));
}
function ab(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of e.steps) {
    const o = r.pickedAtUrl;
    if (o)
      try {
        const s = new URL(o).origin;
        s !== t && n.add(s);
      } catch {
      }
  }
  return [...n];
}
function ib(e) {
  return {
    async tryHandoff({ targetUrl: t, scenarioId: n, stepIndex: r, paused: o }) {
      let s;
      try {
        s = new URL(t).origin;
      } catch {
        return !1;
      }
      if (s === e.currentOrigin())
        return e.persistState({ scenarioId: n, stepIndex: r, paused: o }), e.navigate(t), !0;
      if (!Ss(n)) return !1;
      if (await e.presence.get(s) === "present") {
        const a = e.readControls ? await e.readControls() : { orient: "h", pos: null };
        e.navigate(
          ob(t, {
            id: n,
            stepIndex: r,
            paused: o,
            orient: a.orient,
            pos: a.pos
          })
        );
      } else
        e.degrade();
      return !0;
    }
  };
}
function cb(e) {
  window.location.href = e;
}
function lb() {
  const e = document.createElement("div");
  e.setAttribute("data-manuscript", "ui"), e.style.cssText = `position:fixed;right:16px;bottom:16px;z-index:${te + 2};`;
  const t = e.attachShadow({ mode: "open" });
  t.innerHTML = `<div style="font:13px/1.4 -apple-system,system-ui,sans-serif;background:#1a2438;color:#fff;padding:10px 14px;border-radius:10px;box-shadow:0 8px 24px rgb(0 0 0 / 0.2);max-width:280px;">${A("player.handoff.unavailable")}</div>`, document.documentElement.appendChild(e), setTimeout(() => e.remove(), 6e3);
}
const $s = (e) => `mn:player:scenario:${e}`, _e = "mn:player:state", Fe = "mn:player:armed";
let As = "/", Ms = () => {
};
const qr = /* @__PURE__ */ new Set();
function zr(e) {
  if (!e) return null;
  try {
    return new URL(e).origin;
  } catch {
    return null;
  }
}
function ub(e) {
  var t;
  if (!qr.has(e.id))
    for (let n = 0; n < e.steps.length - 1; n++) {
      const r = e.steps[n];
      if (!(r != null && r.waitForNavigation)) continue;
      const o = zr(r.pickedAtUrl), s = zr((t = e.steps[n + 1]) == null ? void 0 : t.pickedAtUrl);
      if (o && s && o !== s) {
        qr.add(e.id), console.warn(
          `[manuscript-player] Step ${n + 1} "${r.name}" uses waitForNavigation, but the next step is on a different origin (${o} → ${s}). The player can't attach its resume state to a site-driven cross-origin navigation, so the tour won't resume there. Model cross-origin hops as a player-driven step instead. See player.html#player-crossorigin`
        );
        return;
      }
    }
}
const ve = {};
let Fr = !1;
async function Es() {
  Fr || (Fr = !0, typeof ve.enabled == "boolean" && await us(ve.enabled), ve.voice && await S0(ve.voice)), await v0();
}
function db(e) {
  e.scenarioUrlBase && (As = e.scenarioUrlBase), e.prefetch && (Ms = e.prefetch), typeof e.tts == "boolean" && (ve.enabled = e.tts), e.ttsVoice && (ve.voice = e.ttsVoice);
}
function pb(e) {
  if (e == null)
    throw new Error("scenario is required");
  if (typeof e == "string") {
    let t;
    try {
      t = JSON.parse(e);
    } catch {
      throw new Error("Invalid JSON");
    }
    return Dr(t, { strict: !0 });
  }
  return Dr(e, { strict: !0 });
}
async function rr(e) {
  const t = pb(e);
  ub(t), Ms(ab(t, location.origin)), localStorage.setItem($s(t.id), JSON.stringify(t)), of(t);
}
async function hb(e) {
  ve.enabled && w0(), await Es();
  const t = (e == null ? void 0 : e.startIndex) ?? 0, n = (e == null ? void 0 : e.paused) ?? !1;
  Qo() || Zo();
  const r = D();
  if (!r)
    throw new Error("no scenario loaded");
  const o = {
    scenarioId: r.id,
    stepIndex: t,
    paused: n,
    startedAt: Date.now()
  };
  sessionStorage.setItem(_e, JSON.stringify(o)), sessionStorage.removeItem(Fe), await nr(t, { paused: n, standalone: !0 });
}
function fb() {
  dt() && zn();
}
async function mb() {
  dt() && await jt();
}
async function gb() {
  dt() && await qn();
}
async function bb(e) {
  dt() && await ws(e);
}
async function _b() {
  dt() && await Vt(), sessionStorage.removeItem(_e), sessionStorage.removeItem(Fe);
}
function yb(e) {
  return so(({ prev: n, next: r }) => {
    n === "replay" && r === "idle" && e();
  });
}
function vb() {
  var e;
  try {
    const n = (e = performance.getEntriesByType("navigation")[0]) == null ? void 0 : e.type;
    return n === "reload" || n === "back_forward";
  } catch {
    return !1;
  }
}
async function Ts() {
  if (vb()) {
    sessionStorage.removeItem(_e), sessionStorage.removeItem(Fe);
    return;
  }
  if (sessionStorage.getItem(Fe) !== "1") return;
  sessionStorage.removeItem(Fe);
  const e = sessionStorage.getItem(_e);
  if (!e)
    return;
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return;
  }
  if (!t || typeof t != "object" || typeof t.scenarioId != "string" || typeof t.stepIndex != "number")
    return;
  const n = t.scenarioId, r = t.stepIndex, o = t.paused === !0, s = localStorage.getItem($s(n));
  if (!s) {
    sessionStorage.removeItem(_e);
    return;
  }
  try {
    const i = JSON.parse(s);
    await rr(i);
    const a = D();
    if (!a || r < 0 || r >= a.steps.length) {
      sessionStorage.removeItem(_e);
      return;
    }
    await nr(r, { paused: o, standalone: !0 });
  } catch {
    sessionStorage.removeItem(_e);
  }
}
async function xb() {
  try {
    await Es();
    const e = rb(location.search);
    if (e) {
      sb(), e.orient && await F().set(
        H.replayControlsOrientation,
        e.orient === "v" ? "vertical" : "horizontal"
      ), e.pos && await F().set(H.replayControlsPosition, e.pos);
      try {
        const n = await (await fetch(`${As}${e.id}.json`)).json();
        await rr(n);
        const r = D();
        if (!r || e.stepIndex < 0 || e.stepIndex >= r.steps.length) return;
        Qo() || Zo(), await nr(e.stepIndex, { paused: e.paused, standalone: !0 });
        return;
      } catch {
      }
    }
    await Ts();
  } catch {
  }
}
const wb = {
  load: rr,
  play: hb,
  pause: fb,
  next: mb,
  prev: gb,
  jump: bb,
  exit: _b,
  onExit: yb,
  resumeIfActive: Ts,
  bootResume: xb
}, kb = 1;
function Sb(e) {
  return typeof e == "object" && e !== null && e.source === "manuscript:player" && e.kind === "present";
}
function $b(e, t) {
  return new Promise((n) => {
    let r = !1, o = () => {
    }, s;
    const i = (a) => {
      r || (r = !0, clearTimeout(s), o(), n(a));
    };
    o = t.mountProbe(e, () => {
      Promise.resolve().then(() => i("present"));
    }), s = setTimeout(() => i("absent"), t.timeoutMs);
  });
}
function Ab(e, t) {
  const n = document.createElement("iframe");
  n.setAttribute("aria-hidden", "true"), n.style.cssText = "position:fixed;width:0;height:0;border:0;left:-9999px;top:-9999px;";
  const r = (o) => {
    o.origin === e && o.source === n.contentWindow && Sb(o.data) && t();
  };
  return window.addEventListener("message", r), document.documentElement.appendChild(n), n.src = e + "/", () => {
    window.removeEventListener("message", r), n.remove();
  };
}
function Mb(e) {
  const t = /* @__PURE__ */ new Map(), n = (r) => {
    let o = t.get(r);
    return o || (o = $b(r, e), t.set(r, o)), o;
  };
  return {
    prefetch: (r) => r.forEach(n),
    get: n
  };
}
function Eb(e) {
  const t = e.win ?? window;
  if (t === t.top) return !1;
  const n = {
    source: "manuscript:player",
    kind: "present",
    version: e.version ?? kb
  }, r = e.allowedParentOrigins && e.allowedParentOrigins.length ? e.allowedParentOrigins : ["*"];
  for (const o of r) t.parent.postMessage(n, o);
  return !0;
}
const Ne = (typeof window < "u" ? window.__MANUSCRIPT_PLAYER__ : void 0) || {};
Gs({ assetBaseUrl: Ne.assetBaseUrl });
Kh();
const Tb = Eb({
  allowedParentOrigins: Ne.allowedParentOrigins
});
if (!Tb) {
  const e = Mb({
    mountProbe: Ab,
    timeoutMs: Ne.beaconTimeoutMs ?? 1500
  });
  Yr({
    handoff: ib({
      presence: e,
      navigate: cb,
      degrade: lb,
      currentOrigin: () => location.origin,
      persistState: (t) => {
        je().setActiveReplay({ ...t, startedAt: Date.now() }), sessionStorage.setItem(Fe, "1");
      },
      // Carry the pill's orientation + dragged position across a cross-origin
      // hop so B doesn't reset it (extension does this for free via global
      // chrome.storage; the player's per-origin sessionStorage can't).
      readControls: async () => ({
        orient: await ts() === "vertical" ? "v" : "h",
        pos: await ns()
      })
    })
  }), db({
    scenarioUrlBase: Ne.scenarioUrlBase,
    // player.ts's load() already extracts foreign origins and passes the
    // origins array here (see Task 5); just forward to the presence cache.
    prefetch: (t) => e.prefetch(t),
    tts: Ne.tts,
    ttsVoice: Ne.ttsVoice
  });
  try {
    wb.bootResume().catch(() => {
    });
  } catch {
  }
}
export {
  Um as M,
  te as O,
  jm as V,
  Cb as a,
  Nt as b,
  lt as d,
  it as e,
  he as g,
  Ve as m,
  at as o,
  wb as p,
  A as t,
  Lb as u
};
