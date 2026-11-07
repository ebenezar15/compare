/* Theology Compass — interaction layer: navigation drawer, command palette, hero constellation,
   counters, cursor spotlight, scroll progress and back-to-top. Runs after app.js. */
(function () {
  "use strict";
  const A = window.TCApp;
  if (!A) return;
  const $ = (s, r = document) => r.querySelector(s);
  const calm = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const norm = s => String(s).normalize("NFD").replace(/[\u0300-\u036f\u0591-\u05c7]/g, "").replace(/[ʾʿ']/g, "").toLowerCase();
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Drawer (phones) ---------- */
  const scrim = $(".scrim"), toggle = $("[data-nav-toggle]");
  function setNav(open) {
    document.body.classList.toggle("nav-open", open);
    if (scrim) scrim.hidden = !open;
    if (toggle) toggle.setAttribute("aria-expanded", String(open));
  }
  document.addEventListener("click", e => {
    if (e.target.closest("[data-nav-toggle]")) setNav(!document.body.classList.contains("nav-open"));
    else if (e.target.closest("[data-nav-close]")) setNav(false);
    else if (e.target.closest("[data-palette]")) openPalette();
  });
  document.addEventListener("tc:view", () => setNav(false));
  $(".sidebar .brand")?.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); A.show("overview", true); } });

  /* ---------- Command palette ---------- */
  const pal = $("#palette"), pq = $("#pq"), plist = $("#plist");
  let items = [], hits = [], sel = 0;
  const viewNames = { overview: "Overview", explorer: "Doctrines", study: "Deep study", words: "Word studies", logic: "Logic & fallacies", lxx: "Hebrew vs Greek", rom9: "Romans 9 review", tulip: "Origins of TULIP", map: "Influence map", timeline: "Timeline", flow: "Flowcharts", matrix: "Matrix", texts: "Contested texts", spectrum: "Spectrums", sources: "Sources" };
  const after = fn => document.addEventListener("tc:view", function once() { document.removeEventListener("tc:view", once); setTimeout(fn, 60); });
  function buildIndex() {
    const T = window.TC, out = [];
    Object.entries(viewNames).forEach(([k, n]) => out.push({ g: "Sections", t: n, s: "Open this section", go: () => A.show(k, true) }));
    T.doctrines.forEach(d => out.push({ g: "Doctrines", t: d.name, s: d.summary, c: A.DC[d.id], go: () => A.openDoc(d.id) }));
    Object.entries(T.study).forEach(([doc, arr]) => arr.forEach(x => out.push({ g: "Deep study", t: x.ref, s: A.SHORT[doc] + " · " + x.quote, c: A.DC[doc],
      go: () => { A.state.studyDoc = doc; A.state.studyQ = x.ref; A.state.studyLens = "all"; A.state.studyKind = "all"; if (A.state.view === "study") A.VIEWS.study(); else A.show("study", true); } })));
    T.words.forEach(w => out.push({ g: "Word studies", t: w.w + "  " + w.s, s: w.gloss, c: A.DC[w.topic],
      go: () => { A.state.wordQ = w.w; A.state.wordTopic = "all"; A.state.wordKind = "all"; if (A.state.view === "words") A.VIEWS.words(); else A.show("words", true); } }));
    T.lxx.forEach(z => out.push({ g: "Hebrew vs Greek", t: z.ref, s: z.title, go: () => { A.state.lxxTopic = "all"; const f = () => scrollTo("ts-" + z.id); if (A.state.view === "lxx") { A.VIEWS.lxx(); setTimeout(f, 60); } else { after(f); A.show("lxx", true); } } }));
    Object.entries(T.logic).forEach(([doc, g]) => {
      g.fallacies.forEach(f => out.push({ g: "Fallacies", t: f.name, s: A.SHORT[doc] + " · " + f.type, c: A.DC[doc], go: () => { A.state.logicDoc = doc; if (A.state.view === "logic") A.VIEWS.logic(); else A.show("logic", true); } }));
      g.strawmen.forEach(sm => out.push({ g: "Strawmen", t: sm.say, s: A.SHORT[doc], c: A.DC[doc], go: () => { A.state.logicDoc = doc; if (A.state.view === "logic") A.VIEWS.logic(); else A.show("logic", true); } }));
    });
    T.rom9.points.forEach(p => out.push({ g: "Romans 9 review", t: p.n + ". " + p.title, s: p.concern, c: T.rom9.cats[p.cat].color,
      go: () => { A.state.r9cat = "all"; const f = () => scrollTo("pt-" + p.n); if (A.state.view === "rom9") { A.VIEWS.rom9(); setTimeout(f, 60); } else { after(f); A.show("rom9", true); } } }));
    T.tulip.petals.forEach(p => out.push({ g: "Origins of TULIP", t: p.k + " · " + p.name, s: p.def, go: () => { A.state.tulipPetal = p.k; if (A.state.view === "tulip") A.VIEWS.tulip(); else A.show("tulip", true); } }));
    T.tulip.lineage.forEach(n => out.push({ g: "Origins of TULIP", t: n.who + " (" + n.y + ")", s: n.what, go: () => A.show("tulip", true) }));
    T.texts.forEach(x => out.push({ g: "Contested texts", t: x.ref, s: x.alt, c: A.DC[x.topic], go: () => A.show("texts", true) }));
    return out;
  }
  function openPalette() {
    if (!items.length) items = buildIndex();
    pal.hidden = false; pq.value = ""; draw(); pq.focus();
    document.body.style.overflow = "hidden";
  }
  function closePalette() { pal.hidden = true; document.body.style.overflow = ""; }
  function draw() {
    const q = norm(pq.value.trim()), words = q.split(/\s+/).filter(Boolean);
    hits = !q ? items.filter(i => i.g === "Sections" || i.g === "Doctrines") :
      items.map(i => { const t = norm(i.t), hay = i.hay || (i.hay = norm(i.g + " " + i.t + " " + i.s)); if (!words.every(w => hay.includes(w))) return null;
        return { i, score: (t.startsWith(q) ? 0 : t.includes(q) ? 1 : 2) }; })
        .filter(Boolean).sort((a, b) => a.score - b.score).slice(0, 60).map(x => x.i);
    sel = 0;
    let g = "", html = "";
    hits.forEach((h, k) => { if (h.g !== g) { g = h.g; html += `<li class="grp" role="presentation">${esc(g)}</li>`; }
      html += `<li class="it" role="option" id="pi-${k}" data-k="${k}" aria-selected="${k === 0}" style="--c:${h.c || "var(--accent)"}"><span class="dot"></span><span><span class="t">${esc(h.t)}</span><span class="s">${esc(h.s || "")}</span></span></li>`; });
    plist.innerHTML = html || `<li class="empty">No matches. Try a verse ("Romans 9"), a word ("aionios") or a doctrine.</li>`;
  }
  function mark() { plist.querySelectorAll(".it").forEach(li => li.setAttribute("aria-selected", String(+li.dataset.k === sel))); const el = $("#pi-" + sel); if (el) el.scrollIntoView({ block: "nearest" }); }
  function choose(k) { const h = hits[k]; if (!h) return; closePalette(); h.go(); }
  pq.addEventListener("input", draw);
  pq.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(hits.length - 1, sel + 1); mark(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(0, sel - 1); mark(); }
    else if (e.key === "Enter") { e.preventDefault(); choose(sel); }
  });
  plist.addEventListener("click", e => { const li = e.target.closest(".it"); if (li) choose(+li.dataset.k); });
  pal.addEventListener("click", e => { if (e.target === pal) closePalette(); });
  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); pal.hidden ? openPalette() : closePalette(); }
    else if (e.key === "/" && pal.hidden && !/input|textarea|select/i.test(document.activeElement?.tagName || "")) { e.preventDefault(); openPalette(); }
    else if (e.key === "Escape") { if (!pal.hidden) closePalette(); else setNav(false); }
  });
  const kbd = $(".search-btn kbd"); if (kbd && /Mac|iPhone|iPad/.test(navigator.platform || "")) kbd.textContent = "⌘ K";

  /* ---------- Count-up numbers ---------- */
  function countUp(root) {
    if (calm()) return;
    root.querySelectorAll(".stat b").forEach((b, i) => {
      const end = parseInt(b.textContent, 10); if (!end || end < 3) return;
      const t0 = performance.now() + i * 90, dur = 1100;
      const tick = now => { const p = Math.min(1, Math.max(0, (now - t0) / dur)); b.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
      b.textContent = "0"; requestAnimationFrame(tick);
    });
  }

  /* ---------- Hero constellation ---------- */
  let raf = 0, stopCon = null;
  function constellation() {
    if (stopCon) stopCon();
    const hero = $("#v-overview .hero"); if (!hero) return;
    hero.querySelector("canvas.constellation")?.remove();
    const cv = document.createElement("canvas"); cv.className = "constellation"; cv.setAttribute("aria-hidden", "true");
    hero.prepend(cv);
    const ctx = cv.getContext("2d"), T = window.TC;
    const nodes = [];
    T.doctrines.forEach(d => nodes.push({ c: A.DC[d.id], r: 3.2 }));
    Object.values(T.lenses).forEach(l => nodes.push({ c: l.color, r: 4.2 }));
    for (let i = 0; i < 46; i++) nodes.push({ c: "#cfd6ff", r: Math.random() * 1.3 + .4, star: true });
    let W = 0, H = 0, dpr = 1;
    const size = () => { const b = hero.getBoundingClientRect(); dpr = Math.min(2, window.devicePixelRatio || 1); W = b.width; H = b.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size();
    nodes.forEach(n => { n.x = Math.random() * W; n.y = Math.random() * H; const sp = n.star ? .06 : .18; n.vx = (Math.random() - .5) * sp; n.vy = (Math.random() - .5) * sp; n.ph = Math.random() * 6.28; });
    let mx = -1e3, my = -1e3;
    const move = e => { const b = cv.getBoundingClientRect(); mx = e.clientX - b.left; my = e.clientY - b.top; };
    hero.addEventListener("pointermove", move); hero.addEventListener("pointerleave", () => { mx = my = -1e3; });
    const frame = t => {
      ctx.clearRect(0, 0, W, H);
      const big = nodes.filter(n => !n.star);
      for (let i = 0; i < big.length; i++) for (let j = i + 1; j < big.length; j++) {
        const a = big[i], b = big[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 190) { ctx.strokeStyle = `rgba(170,185,255,${(1 - d / 190) * .28})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      nodes.forEach(n => {
        if (!calm()) {
          const dx = n.x - mx, dy = n.y - my, d = Math.hypot(dx, dy);
          if (d < 120 && !n.star) { n.x += dx / d * .8; n.y += dy / d * .8; }
          n.x += n.vx; n.y += n.vy;
          if (n.x < -10) n.x = W + 10; if (n.x > W + 10) n.x = -10; if (n.y < -10) n.y = H + 10; if (n.y > H + 10) n.y = -10;
        }
        const tw = n.star ? .55 + .45 * Math.sin(t / 900 + n.ph) : 1;
        ctx.globalAlpha = tw; ctx.fillStyle = n.c;
        if (!n.star) { ctx.shadowColor = n.c; ctx.shadowBlur = 14; }
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.283); ctx.fill(); ctx.shadowBlur = 0; ctx.globalAlpha = 1;
      });
      if (!calm()) raf = requestAnimationFrame(frame);
    };
    let visible = true;
    const io = "IntersectionObserver" in window ? new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible && !calm()) { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); } else cancelAnimationFrame(raf); }) : null;
    if (io) io.observe(hero);
    const ro = "ResizeObserver" in window ? new ResizeObserver(() => { size(); if (calm()) frame(0); }) : null;
    if (ro) ro.observe(hero);
    raf = requestAnimationFrame(frame);
    stopCon = () => { cancelAnimationFrame(raf); if (io) io.disconnect(); if (ro) ro.disconnect(); hero.removeEventListener("pointermove", move); stopCon = null; };
  }
  document.addEventListener("visibilitychange", () => { if (document.hidden) cancelAnimationFrame(raf); else if (A.state.view === "overview" && !calm()) constellation(); });

  /* ---------- Per-view enhancements ---------- */
  function enhance(view) {
    const root = document.getElementById("v-" + view); if (!root) return;
    countUp(root);
    if (view === "overview") constellation(); else if (stopCon) stopCon();
  }
  document.addEventListener("tc:view", e => enhance(e.detail));
  enhance(A.state.view);

  /* ---------- Cursor spotlight on cards and panels ---------- */
  document.addEventListener("pointermove", e => {
    const el = e.target.closest && e.target.closest(".card, .panel");
    if (!el) return;
    const b = el.getBoundingClientRect();
    el.style.setProperty("--mx", (e.clientX - b.left) + "px");
    el.style.setProperty("--my", (e.clientY - b.top) + "px");
  }, { passive: true });

  /* ---------- Scroll progress + back to top ---------- */
  const bar = $("#progress"), top = $(".to-top");
  let ticking = false;
  const onScroll = () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const h = document.documentElement, max = h.scrollHeight - innerHeight;
      bar.style.setProperty("--p", max > 0 ? (h.scrollTop / max).toFixed(4) : 0);
      top.hidden = h.scrollTop < 900;
      ticking = false;
    });
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  top.addEventListener("click", () => scrollTo({ top: 0, behavior: calm() ? "auto" : "smooth" }));
  function scrollTo(arg) { if (typeof arg === "string") return scrollToId(arg); window.scrollTo(arg); }
  function scrollToId(id) { const el = document.getElementById(id); if (el) { if (el.tagName === "DETAILS") el.open = true; el.scrollIntoView({ behavior: calm() ? "auto" : "smooth", block: "start" }); el.classList.add("flash"); setTimeout(() => el.classList.remove("flash"), 1600); } }
})();
