/* Theology Compass — rendering and interaction. Plain DOM, no framework. */
(function () {
  "use strict";
  const D = TC.doctrines, L = TC.lenses, I = TC.influences;
  const byId = Object.fromEntries(D.map(d => [d.id, d]));
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const NS = "http://www.w3.org/2000/svg";

  // Doctrine colours (mid-tone so they read on light and dark grounds) and short labels
  const DC = { evangelical: "#d0662f", psa: "#c23b4a", holiness: "#3c8fd0", reformation: "#7b5cc4", sola: "#a0782c",
    arminian: "#2e9c72", progressive: "#4aa3a0", sovereignty: "#8a6bb0", hell: "#b4552c", futurism: "#c79a1e" };
  const SHORT = { evangelical: "Evangelicalism", psa: "Penal Substitution", holiness: "Holiness", reformation: "Reformation",
    sola: "Sola Scriptura", arminian: "Arminian-Wesleyan", progressive: "Progressive Sanct.", sovereignty: "Sovereignty in Suffering",
    hell: "Traditional Hell", futurism: "Futurism" };

  const state = { view: "overview", doc: "psa", sub: "overview", lensFilter: "all", tlFilter: "all", flowDoc: "psa", tree: "hell", treeNode: null, trail: [], mapSel: null, studyDoc: "psa", studyQ: "", studyLens: "all", studyKind: "all", wordTopic: "all", wordQ: "", wordKind: "all", logicDoc: "psa", lxxTopic: "all", r9cat: "all", tulipPetal: "T", tulipTone: 0 };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  };

  /* ---------- Shared scale: eras get weighted widths so dense centuries stay readable ---------- */
  const ERA_W = [0.8, 2, 1.4, 1.6, 1.3, 2.6];
  function yearScale(x0, x1) {
    const total = ERA_W.reduce((a, b) => a + b, 0);
    const edges = []; let acc = x0;
    TC.eras.forEach((e, i) => { const w = (x1 - x0) * ERA_W[i] / total; edges.push([acc, acc + w]); acc += w; });
    const f = y => {
      y = Math.max(TC.eras[0].from, Math.min(2026, y));
      for (let i = 0; i < TC.eras.length; i++) {
        const e = TC.eras[i];
        if (y <= e.to || i === TC.eras.length - 1) return edges[i][0] + (y - e.from) / (e.to - e.from) * (edges[i][1] - edges[i][0]);
      }
    };
    f.edges = edges; return f;
  }

  function strengthBar(s, c) {
    return `<span class="strength" style="--c:${c}" title="Strength of challenge: ${s} of 3">${[1, 2, 3].map(i => `<i class="${i <= s ? "on" : ""}"></i>`).join("")}</span>`;
  }
  const refs = arr => arr && arr.length ? `<div class="refs">${arr.map(r => `<span>${esc(r)}</span>`).join("")}</div>` : "";
  const lensPill = k => `<span class="pill lens-pill" style="background:${L[k].color}">${esc(L[k].short)}</span>`;

  /* ---------- Overview ---------- */
  function compassSVG() {
    const W = 440, C = W / 2, R1 = 172, R2 = 78;
    const dPos = D.map((d, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / D.length; return [C + R1 * Math.cos(a), C + R1 * Math.sin(a), a]; });
    const lk = Object.keys(L);
    const lPos = lk.map((k, i) => { const a = -Math.PI / 2 + (i + .5) * 2 * Math.PI / lk.length; return [C + R2 * Math.cos(a), C + R2 * Math.sin(a)]; });
    let lines = "";
    D.forEach((d, i) => d.responses.forEach(r => {
      if (r.s < 2) return;
      const j = lk.indexOf(r.lens);
      lines += `<line x1="${lPos[j][0]}" y1="${lPos[j][1]}" x2="${dPos[i][0]}" y2="${dPos[i][1]}" stroke="${L[r.lens].color}" stroke-width="${r.s === 3 ? 2.2 : 1.2}" opacity=".55"/>`;
    }));
    const dNodes = D.map((d, i) => {
      const [x, y, a] = dPos[i]; const lx = C + (R1 + 18) * Math.cos(a), ly = C + (R1 + 18) * Math.sin(a);
      const anchor = Math.abs(Math.cos(a)) < .25 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
      return `<circle cx="${x}" cy="${y}" r="8" fill="${DC[d.id]}"/><text x="${lx}" y="${ly + 4}" font-size="13" font-weight="700" text-anchor="${anchor}">${esc(SHORT[d.id])}</text>`;
    }).join("");
    const lNodes = lk.map((k, i) => `<circle cx="${lPos[i][0]}" cy="${lPos[i][1]}" r="11" fill="${L[k].color}"><title>${esc(L[k].name)}</title></circle>`).join("");
    return `<svg class="compass" viewBox="-120 -14 680 468" role="img" aria-label="Compass diagram: ten traditional doctrines on the outer ring, seven alternative lenses at the centre, lines show strong challenges">
      <circle cx="${C}" cy="${C}" r="${R1}" fill="none" stroke="var(--line)" stroke-dasharray="3 5"/>
      <circle cx="${C}" cy="${C}" r="${R2}" fill="none" stroke="var(--line)"/>
      ${lines}${dNodes}${lNodes}
      <text x="${C}" y="${C - 2}" text-anchor="middle" font-size="11" font-weight="800" letter-spacing="1.5">ALTERNATIVE</text>
      <text x="${C}" y="${C + 12}" text-anchor="middle" font-size="11" font-weight="800" letter-spacing="1.5">LENSES</text>
    </svg>`;
  }

  function lifespanSVG() {
    const W = 1120, left = 200, right = 20, rowH = 34, top = 40, H = top + D.length * rowH + 30;
    const X = yearScale(left, W - right);
    let s = `<svg class="tl-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="When each doctrine took shape, from early roots to formal statement to today">`;
    TC.eras.forEach((e, i) => {
      const [a, b] = X.edges[i];
      s += `<rect x="${a}" y="${top - 26}" width="${b - a}" height="${H - top}" fill="${i % 2 ? "var(--surface-2)" : "none"}" opacity=".6"/>`;
      s += `<text x="${(a + b) / 2}" y="${top - 10}" text-anchor="middle" font-size="11" font-weight="700" class="chart-muted">${e.name.toUpperCase()}</text>`;
      s += `<text x="${a + 3}" y="${H - 8}" font-size="10.5" class="chart-muted">${e.from}</text>`;
    });
    D.forEach((d, i) => {
      const y = top + i * rowH + rowH / 2, c = DC[d.id];
      s += `<text x="${left - 12}" y="${y + 4}" text-anchor="end" font-size="12.5" font-weight="700" class="chart-ink">${esc(SHORT[d.id])}</text>`;
      s += `<line x1="${X(d.seeds)}" y1="${y}" x2="${X(d.span[0])}" y2="${y}" stroke="${c}" stroke-width="2" stroke-dasharray="3 4"/>`;
      s += `<rect x="${X(d.span[0])}" y="${y - 7}" width="${X(d.span[1]) - X(d.span[0])}" height="14" rx="7" fill="${c}" opacity=".85"/>`;
      s += `<circle cx="${X(d.seeds)}" cy="${y}" r="4" fill="var(--surface)" stroke="${c}" stroke-width="2"><title>Early roots c. ${d.seeds}</title></circle>`;
      s += `<text x="${X(d.span[0]) + 6}" y="${y + 4}" font-size="10.5" font-weight="800" fill="#fff">${d.span[0]}</text>`;
    });
    return s + `</svg>`;
  }

  function renderOverview() {
    const fathers = D.reduce((n, d) => n + d.fathers.length, 0);
    const tensions = D.reduce((n, d) => n + d.tensions.length, 0);
    $("#v-overview").innerHTML = `
      <div class="hero">
        <div>
          <div class="eyebrow">Interactive study guide</div>
          <h1>Ten Western doctrines, <span>weighed against Scripture</span></h1>
          <p class="lede">Trace where each teaching came from, the texts and church fathers behind it, the philosophical and pagan ideas that shaped it, and the contradictions critics find. Then hear the case from relational, Christus Victor, reconciliation and victorious-eschatology readers, and the defenders' reply.</p>
          <div class="stats">
            <div class="stat"><b>${D.length}</b><span>doctrines</span></div>
            <div class="stat"><b>${Object.keys(L).length}</b><span>alternative lenses</span></div>
            <div class="stat"><b>${fathers}</b><span>church-father views</span></div>
            <div class="stat"><b>${tensions}</b><span>scriptural tensions</span></div>
            <div class="stat"><b>${Object.values(TC.study).reduce((n, a) => n + a.length, 0)}</b><span>proof texts studied</span></div>
            <div class="stat"><b>${Object.values(TC.study).reduce((n, a) => n + a.reduce((m, x) => m + x.counters.length, 0), 0)}</b><span>counter-readings</span></div>
            <div class="stat"><b>${TC.words.length}</b><span>word studies</span></div>
            <div class="stat"><b>${Object.values(TC.logic).reduce((n, x) => n + x.fallacies.length, 0)}</b><span>fallacies examined</span></div>
            <div class="stat"><b>${Object.values(TC.logic).reduce((n, x) => n + x.strawmen.length, 0) + TC.fairplay.length}</b><span>strawmen answered</span></div>
          </div>
        </div>
        ${compassSVG()}
      </div>
      <div class="stack">
        <div class="section-head"><div class="eyebrow">The doctrines examined</div><h2>Pick a doctrine to open its dossier</h2></div>
        <div class="grid">${D.map(d => `
          <button class="card doc-card" data-open="${d.id}" type="button" style="--c:${DC[d.id]}">
            <span class="fam">${esc(d.family)} · from ${d.span[0]}</span>
            <h3><span class="lens-dot" style="background:${DC[d.id]}"></span>${esc(d.name)}</h3>
            <p>${esc(d.summary)}</p>
            <div class="pills">${[...new Set(d.responses.filter(r => r.s >= 2).map(r => r.lens))].map(lensPill).join("")}</div>
          </button>`).join("")}
        </div>
        <div class="section-head" style="margin-top:24px"><div class="eyebrow">The alternative lenses</div><h2>The views that answer them</h2></div>
        <div class="lens-grid">${Object.entries(L).map(([k, l]) => `
          <div class="card lens-card" style="--c:${l.color}">
            <h3><span class="lens-dot" style="background:${l.color}"></span>${esc(l.name)}</h3>
            <p style="-webkit-line-clamp:unset">${esc(l.thesis)}</p>
            <div class="who"><b>Voices:</b> ${esc(l.proponents)}</div>
            ${refs(l.texts)}
          </div>`).join("")}
        </div>
        <div class="section-head" style="margin-top:24px"><div class="eyebrow">Formation</div><h2>When each doctrine took shape</h2>
          <p class="muted">Dashed line: earliest roots. Solid bar: from formal statement to today. Eras are scaled by how much happened in them, not by years.</p></div>
        <div class="panel scroll-x">${lifespanSVG()}</div>
        <p class="note">This guide presents critiques of the doctrines as their critics make them and gives each tradition's response. Church-father attributions summarise mainstream scholarship; where scholars disagree (for example on Gregory of Nazianzus, Irenaeus on hell, or Aulén's history), the text says so.</p>
      </div>`;
  }

  /* ---------- Explorer ---------- */
  const SUBS = [["overview", "Overview"], ["history", "Roots & history"], ["scripture", "Key scriptures"], ["influences", "Pagan & cultural roots"],
    ["fathers", "Church fathers"], ["tensions", "Contradictions"], ["responses", "Alternative answers"], ["rebuttal", "Defenders reply"]];

  function renderExplorer() {
    const d = byId[state.doc];
    const list = D.map(x => `<button class="doc-btn" type="button" data-doc="${x.id}" aria-current="${x.id === d.id}"><small>${esc(x.family)}</small><span><span class="lens-dot" style="background:${DC[x.id]}"></span>${esc(SHORT[x.id])}</span></button>`).join("");
    let body = "";
    switch (state.sub) {
      case "overview":
        body = `<div class="prose"><p class="lede" style="color:var(--ink)">${esc(d.summary)}</p><h3>Core claims</h3><ul class="claims">${d.claims.map(c => `<li>${esc(c)}</li>`).join("")}</ul>
          <h3>At a glance</h3>
          <div class="pills"><span class="pill">${d.tensions.length} tensions</span><span class="pill">${d.fathers.length} fathers</span><span class="pill">${d.influences.length} outside influences</span><span class="pill">${d.responses.length} alternative answers</span></div>
          ${["arminian", "sovereignty", "reformation"].includes(d.id) ? `<h3>Related studies</h3><div class="rel-grid"><button type="button" class="card rel" data-rel="tulip"><span class="eyebrow">Calvinism</span><b>Augustine, Calvin and the Origins of TULIP</b><span class="muted">Where the five points came from</span></button><button type="button" class="card rel" data-rel="rom9"><span class="eyebrow">Calvinism</span><b>15 Inconsistencies in a Calvinist Sermon</b><span class="muted">A review of a sermon on Romans 9:6–13</span></button></div>` : ""}</div>`;
        break;
      case "history":
        body = `<div class="prose"><p>${esc(d.roots)}</p><h3>Formation timeline</h3><ol class="mini-tl">${d.timeline.map(e => `<li><b>${e.y}</b>${esc(e.t)}</li>`).join("")}</ol></div>`;
        break;
      case "scripture":
        body = `<div class="grid">${d.scriptures.map(s => `<div class="card"><span class="ref">${esc(s.ref)}</span><p style="-webkit-line-clamp:unset;color:var(--ink)">${esc(s.use)}</p></div>`).join("")}</div>
          <div class="card" style="margin-top:16px;border-color:var(--accent)"><h3>Go deeper</h3><p style="-webkit-line-clamp:unset">The Deep study covers ${(TC.study[d.id] || []).length} texts and biblical cases for this doctrine, with every alternative view's counter-reading and the defenders' reply.</p><div><button class="ans" type="button" data-study="${d.id}">Open the deep study</button></div></div>`;
        break;
      case "influences":
        body = `<div class="grid">${d.influences.map(k => `<div class="card infl"><span class="kind">${esc(I[k].kind)} · ${esc(I[k].era)}</span><h3>${esc(I[k].name)}</h3><p style="-webkit-line-clamp:unset">${esc(I[k].desc)}</p></div>`).join("")}</div>
          <p class="note" style="margin-top:16px">Influence is not proof of error: Christians have always borrowed language from their culture (Paul quotes Greek poets in Acts 17:28). The question critics raise is whether a borrowed idea changed the biblical picture.</p>`;
        break;
      case "fathers":
        body = `<div class="father-grid">${d.fathers.map(f => `<div class="card father"><span class="date">${esc(f.date)}</span><h3>${esc(f.name)}</h3><p style="-webkit-line-clamp:unset">${esc(f.held)}</p></div>`).join("")}</div>`;
        break;
      case "tensions":
        body = `<div class="stack" style="gap:12px">${d.tensions.map(t => `<div class="card tension"><h4>${esc(t.title)}</h4><p style="-webkit-line-clamp:unset;color:var(--ink)">${esc(t.text)}</p>${refs(t.refs)}</div>`).join("")}</div>`;
        break;
      case "responses": {
        const lenses = [...new Set(d.responses.map(r => r.lens))];
        const shown = d.responses.filter(r => state.lensFilter === "all" || r.lens === state.lensFilter);
        body = `<div class="filter-row"><button class="chip" type="button" data-lens="all" aria-pressed="${state.lensFilter === "all"}">All lenses</button>${lenses.map(k => `<button class="chip" type="button" data-lens="${k}" aria-pressed="${state.lensFilter === k}"><span class="lens-dot" style="background:${L[k].color}"></span>${esc(L[k].short)}</button>`).join("")}</div>
          <div class="stack" style="gap:12px">${shown.length ? shown.map(r => `<div class="card resp" style="--c:${L[r.lens].color}"><div class="resp-top"><h3>${esc(L[r.lens].name)}</h3>${strengthBar(r.s, L[r.lens].color)}</div><p style="-webkit-line-clamp:unset;color:var(--ink)">${esc(r.arg)}</p>${refs(r.refs)}</div>`).join("") : `<p class="muted">This lens has no direct answer recorded for this doctrine. Choose another lens.</p>`}</div>`;
        break;
      }
      case "rebuttal":
        body = `<div class="card rebut"><div class="eyebrow">How defenders answer the critiques</div><p class="quote" style="-webkit-line-clamp:unset;color:var(--ink)">${esc(d.rebuttal)}</p></div>`;
        break;
    }
    $("#v-explorer").innerHTML = `<div class="explorer">
      <nav class="doc-list" aria-label="Doctrines">${list}</nav>
      <div style="min-width:0">
        <div class="doc-head"><span class="eyebrow" style="color:${DC[d.id]}">${esc(d.family)}</span><h2>${esc(d.name)}</h2></div>
        <div class="subtabs" role="tablist">${SUBS.map(([k, n]) => `<button class="subtab" role="tab" type="button" data-sub="${k}" aria-selected="${state.sub === k}">${n}</button>`).join("")}</div>
        ${body}
      </div></div>`;
  }

  /* ---------- Deep study: every proof text, every counter ---------- */
  function renderStudy() {
    const d = byId[state.studyDoc], items = TC.study[d.id] || [];
    const lensCount = {};
    items.forEach(it => it.counters.forEach(c => lensCount[c.l] = (lensCount[c.l] || 0) + 1));
    const total = Object.values(lensCount).reduce((a, b) => a + b, 0) || 1;
    const bar = Object.entries(lensCount).sort((a, b) => b[1] - a[1]).map(([k, n]) =>
      `<span style="flex:${n};background:${L[k].color}" title="${esc(L[k].name)}: ${n} counter-readings"></span>`).join("");
    const lensesHere = Object.keys(lensCount);
    $("#v-study").innerHTML = `<div class="section-head"><div class="eyebrow">Deep study</div><h2>Every proof text, and how the other views answer it</h2>
      <p class="lede">For each doctrine: the verses and biblical cases its defenders quote, the argument they build, each alternative view's counter-reading, and the defenders' reply.</p></div>
      <div class="filter-row">${D.map(x => `<button class="chip" type="button" data-sdoc="${x.id}" aria-pressed="${x.id === d.id}"><span class="lens-dot" style="background:${DC[x.id]}"></span>${esc(SHORT[x.id])} <span class="muted">${(TC.study[x.id] || []).length}</span></button>`).join("")}</div>
      <div class="panel study-sum">
        <div><span class="eyebrow" style="color:${DC[d.id]}">${esc(d.family)}</span><h3>${esc(d.name)}</h3>
          <p class="muted">${items.length} texts and cases · ${total} counter-readings from ${lensesHere.length} views</p></div>
        <div class="stackbar" role="img" aria-label="Share of counter-readings by view">${bar}</div>
        <div class="legend" style="margin-top:0">${Object.entries(lensCount).sort((a, b) => b[1] - a[1]).map(([k, n]) => `<span><i style="background:${L[k].color}"></i>${esc(L[k].short)} ${n}</span>`).join("")}</div>
      </div>
      <div class="searchbar" style="margin-top:16px">
        <input id="sq" type="search" placeholder="Search verses, words or arguments in this doctrine" aria-label="Search the deep study" value="${esc(state.studyQ)}">
        <select id="slens" aria-label="Filter by answering view"><option value="all">Every answering view</option>${lensesHere.map(k => `<option value="${k}" ${state.studyLens === k ? "selected" : ""}>${esc(L[k].name)}</option>`).join("")}</select>
        <select id="skind" aria-label="Filter by type"><option value="all">Texts and cases</option><option value="text" ${state.studyKind === "text" ? "selected" : ""}>Proof texts only</option><option value="case" ${state.studyKind === "case" ? "selected" : ""}>Biblical cases only</option></select>
        <button class="ghost" type="button" data-expand="1">Expand all</button><button class="ghost" type="button" data-expand="0">Collapse all</button>
      </div>
      <div id="study-list" class="stack" style="gap:12px"></div>`;
    drawStudyList();
    $("#sq").addEventListener("input", e => { state.studyQ = e.target.value; drawStudyList(); });
    $("#slens").addEventListener("change", e => { state.studyLens = e.target.value; drawStudyList(); });
    $("#skind").addEventListener("change", e => { state.studyKind = e.target.value; drawStudyList(); });
  }
  function drawStudyList() {
    const d = byId[state.studyDoc], q = state.studyQ.trim().toLowerCase();
    const items = (TC.study[d.id] || []).filter(it =>
      (state.studyKind === "all" || it.kind === state.studyKind) &&
      (state.studyLens === "all" || it.counters.some(c => c.l === state.studyLens)) &&
      (!q || JSON.stringify(it).toLowerCase().includes(q)));
    $("#study-list").innerHTML = items.length ? items.map((it, i) => `
      <details class="card study" ${i < 2 || q ? "open" : ""}>
        <summary>
          <div class="st-top"><span class="ref">${esc(it.ref)}</span><span class="pill ${it.kind === "case" ? "case" : ""}">${it.kind === "case" ? "Biblical case" : "Proof text"}</span>
            <span class="st-dots">${it.counters.map(c => `<span class="lens-dot" style="background:${L[c.l].color}" title="${esc(L[c.l].name)}"></span>`).join("")}</span></div>
          <p class="quote">${esc(it.quote)}</p>
        </summary>
        <div class="st-body">
          <div class="st-sec used"><span class="lbl">How ${esc(SHORT[d.id])} uses it</span><p>${esc(it.used)}</p></div>
          <div class="st-sec"><span class="lbl">How the other views answer</span>
            <div class="stack" style="gap:10px">${it.counters.filter(c => state.studyLens === "all" || c.l === state.studyLens).map(c => `
              <div class="counter" style="--c:${L[c.l].color}"><b style="color:${L[c.l].color}">${esc(L[c.l].name)}</b><p>${esc(c.t)}</p>${refs(c.r)}</div>`).join("")}</div></div>
          <div class="st-sec reply"><span class="lbl">The defenders' reply</span><p>${esc(it.reply)}</p></div>
        </div>
      </details>`).join("") : `<p class="muted">Nothing matches. Clear the search or choose another view.</p>`;
  }

  /* ---------- Logic & fallacies ---------- */
  function renderLogic() {
    const d = byId[state.logicDoc], g = TC.logic[d.id];
    const counts = {};
    Object.values(TC.logic).forEach(x => x.fallacies.forEach(f => counts[f.type] = (counts[f.type] || 0) + 1));
    const max = Math.max(...Object.values(counts));
    const fair = TC.fairplay.filter(f => f.doc === d.id || f.doc === "all");
    $("#v-logic").innerHTML = `<div class="section-head"><div class="eyebrow">Logic & fallacies</div><h2>Testing each doctrine's reasoning</h2>
      <p class="lede">The core argument laid out step by step with its weakest premise marked. Then the logical and scriptural fallacies critics identify, and the strawman versions of other views that defenders argue against.</p></div>
      <div class="filter-row">${D.map(x => `<button class="chip" type="button" data-ldoc="${x.id}" aria-pressed="${x.id === d.id}"><span class="lens-dot" style="background:${DC[x.id]}"></span>${esc(SHORT[x.id])}</button>`).join("")}</div>

      <div class="panel syl">
        <span class="eyebrow">The argument, step by step · ${esc(d.name)}</span>
        <div class="syl-steps">${g.syl.p.map((p, i) => {
          const last = i === g.syl.p.length - 1, weak = i === g.syl.weak;
          return `${last ? `<div class="syl-therefore">therefore</div>` : ""}<div class="syl-p ${weak ? "weak" : ""} ${last ? "concl" : ""}"><span class="n">${last ? "C" : "P" + (i + 1)}</span><span>${esc(last ? p.replace(/^Therefore /, "").replace(/^./, c => c.toUpperCase()) : p)}</span>${weak ? `<span class="fails">Fails here</span>` : ""}</div>`;
        }).join("")}</div>
        <div class="syl-why"><b>Why it fails.</b> ${esc(g.syl.why)}${refs(g.syl.refs)}</div>
      </div>

      <div class="section-head" style="margin-top:32px"><div class="eyebrow">${g.fallacies.length} fallacies</div><h2>Logical and scriptural problems</h2></div>
      <div class="stack" style="gap:12px">${g.fallacies.map(f => `
        <div class="card fallacy">
          <div class="resp-top"><h3>${esc(f.name)}</h3><span class="ftype" title="${esc(TC.fallacyTypes[f.type] || "")}">${esc(f.type)}</span></div>
          <div class="claim"><span class="lbl">The claim</span><p>“${esc(f.claim)}”</p></div>
          <div class="fgrid">
            <div><span class="lbl">Why the logic fails</span><p>${esc(f.problem)}</p></div>
            <div><span class="lbl">What Scripture says</span><p>${esc(f.scripture)}</p>${refs(f.refs)}</div>
          </div>
          <div class="st-sec reply"><span class="lbl">The defenders' reply</span><p>${esc(f.reply)}</p></div>
        </div>`).join("")}</div>

      <div class="section-head" style="margin-top:32px"><div class="eyebrow">${g.strawmen.length} strawmen</div><h2>How defenders misdescribe the alternatives</h2>
        <p class="muted">Each row puts a common caricature beside what the view actually teaches, with the scriptural counter.</p></div>
      <div class="stack" style="gap:12px">${g.strawmen.map(s => `
        <div class="card straw" style="--c:${L[s.lens].color}">
          <div class="straw-grid">
            <div class="say"><span class="lbl">What they say ${lensPill(s.lens)}</span><p>“${esc(s.say)}”</p></div>
            <div class="real"><span class="lbl">What the view actually holds</span><p>${esc(s.real)}</p></div>
          </div>
          <div><span class="lbl">The counter</span><p>${esc(s.counter)}</p>${refs(s.refs)}</div>
        </div>`).join("")}</div>

      <div class="section-head" style="margin-top:32px"><div class="eyebrow">Fair play</div><h2>Strawmen used against ${esc(SHORT[d.id])}</h2>
        <p class="muted">Critics caricature too. These are corrected so each argument above meets the doctrine as its defenders actually hold it.</p></div>
      <div class="grid">${fair.map(f => `<div class="card fair"><span class="lbl">The caricature</span><p class="strike">“${esc(f.say)}”</p><span class="lbl">The correction</span><p>${esc(f.real)}</p>${refs(f.refs)}</div>`).join("")}</div>

      <div class="section-head" style="margin-top:32px"><div class="eyebrow">Glossary</div><h2>Fallacies named in this study</h2><p class="muted">Bars show how often each fallacy is identified across all ten doctrines.</p></div>
      <div class="panel gloss">${Object.entries(TC.fallacyTypes).sort((a, b) => (counts[b[0]] || 0) - (counts[a[0]] || 0)).map(([k, v]) => `
        <div class="gl-row"><div><b>${esc(k)}</b><p class="muted">${esc(v)}</p></div><div class="gl-bar"><span style="width:${(counts[k] || 0) / max * 100}%"></span><em>${counts[k] || 0}</em></div></div>`).join("")}</div>`;
  }

  /* ---------- Word studies ---------- */
  function renderWords() {
    const topics = [...new Set(TC.words.map(w => w.topic))];
    const nEv = TC.words.reduce((n, w) => n + w.ev.length, 0);
    const kinds = Object.keys(TC.evKinds);
    $("#v-words").innerHTML = `<div class="section-head"><div class="eyebrow">Word studies</div><h2>The Greek and Hebrew words, with the evidence</h2>
      <p class="lede">Each word gives its root, both readings, and an evidence trail from classical Greek, the Septuagint, Jewish and Qumran texts, rabbinic writings, papyri, church fathers, lexicons and modern scholarship. Every source is marked by which reading it supports, and each word ends with a balanced verdict.</p>
      <div class="stats" style="margin-top:6px"><div class="stat"><b>${TC.words.length}</b><span>words</span></div><div class="stat"><b>${nEv}</b><span>pieces of evidence</span></div><div class="stat"><b>${kinds.length}</b><span>kinds of source</span></div></div></div>
      <div class="ev-legend"><span><i class="sd alt"></i>Supports the alternative reading</span><span><i class="sd trad"></i>Supports the traditional reading</span><span><i class="sd ctx"></i>Context both sides use</span></div>
      <div class="searchbar" style="margin-top:12px"><input id="wq" type="search" placeholder="Search words, sources or verses, e.g. Josephus, Septuagint, Romans 3" aria-label="Search word studies" value="${esc(state.wordQ)}">
        <select id="wkind" aria-label="Filter by kind of source"><option value="all">All kinds of source</option>${kinds.map(k => `<option value="${esc(k)}" ${state.wordKind === k ? "selected" : ""}>${esc(k)}</option>`).join("")}</select></div>
      <div class="filter-row"><button class="chip" type="button" data-wt="all" aria-pressed="${state.wordTopic === "all"}">All topics</button>${topics.map(t => `<button class="chip" type="button" data-wt="${t}" aria-pressed="${state.wordTopic === t}"><span class="lens-dot" style="background:${DC[t]}"></span>${esc(SHORT[t])}</button>`).join("")}</div>
      <div class="card" style="border:2px solid var(--accent);margin-bottom:14px"><span class="eyebrow">Textual studies</span><h3>Hebrew vs Greek: Isaiah 53:10 and ${TC.lxx.length - 1} more key verses</h3><p style="-webkit-line-clamp:unset">Where the Septuagint and the Hebrew differ, which one the New Testament quotes, and why.</p><div><button class="ans" type="button" data-view="lxx">Open the textual studies</button></div></div>
      <div id="word-list" class="stack" style="gap:14px"></div>
      <div class="section-head" style="margin-top:36px"><div class="eyebrow">Check it yourself</div><h2>Lexicons, primary texts and studies</h2></div>
      <div class="panel"><ul class="lib">${TC.wordLibrary.map(r => `<li><a href="${esc(r.u)}" target="_blank" rel="noopener">${esc(r.t)}</a><span class="muted"> — ${esc(r.d)}</span></li>`).join("")}</ul>
        <p class="note" style="margin-top:14px">Standard print references: BDAG (Bauer-Danker Greek-English Lexicon, 3rd ed. 2000), LSJ, Louw-Nida, Moulton-Milligan's Vocabulary of the Greek Testament, TDNT (Kittel), BDB and HALOT for Hebrew, and TDOT/TLOT.</p></div>`;
    drawWords();
    $("#wq").addEventListener("input", e => { state.wordQ = e.target.value; drawWords(); });
    $("#wkind").addEventListener("change", e => { state.wordKind = e.target.value; drawWords(); });
  }
  const markDiff = (t, cls) => esc(t).replace(/\[([^\]]+)\]/g, `<mark class="${cls}">$1</mark>`);
  function textStudy(z, open) {
    const sl = { alt: "Supports the Greek reading", trad: "Supports the Hebrew reading", ctx: "Context", both: "Holds both" };
    const blk = (title, arr, cls) => arr && arr.length ? `<div class="iz-col ${cls}"><h4>${title}</h4>${arr.map(x => `<div><b>${esc(x.h)}</b><p>${esc(x.t)}</p></div>`).join("")}</div>` : "";
    const c = TC.lxxCauses[z.cause];
    return `<details class="card isaiah" id="ts-${z.id}" ${open ? "open" : ""}>
      <summary><div class="st-top"><span class="eyebrow">${esc(z.ref)}</span><span class="pill cause">${esc(c.name)}</span><span class="pill nt">New Testament quotes: ${esc(z.nt)}</span></div>
        <h2>${esc(z.title)}</h2>
        <div class="diff"><div class="diff-row heb"><span class="lbl">Hebrew</span><p>${markDiff(z.diff.mt, "mh")}</p></div><div class="diff-row grk"><span class="lbl">Greek</span><p>${markDiff(z.diff.lxx, "mg")}</p></div></div>
        <p class="muted">${esc(z.intro)}</p></summary>
      <div class="st-body">
        <div class="wit-grid">${z.witnesses.map(w => `<div class="wit ${w.side}">
          <div class="ev-top"><b>${esc(w.name)}</b><span class="evside ${w.side}">${sl[w.side]}</span></div>
          <span class="muted wit-date">${esc(w.date)}</span>
          <p class="wit-text" ${w.rtl ? 'dir="rtl" lang="he"' : ""}>${esc(w.text)}</p>
          ${w.tr ? `<p class="wit-tr">${esc(w.tr)}</p>` : ""}${w.en ? `<p class="wit-en">“${esc(w.en)}”</p>` : ""}
          <p class="muted">${esc(w.note)}</p></div>`).join("")}</div>
        ${blk("How the difference arose", z.how, "")}
        <div class="iz-two">${blk(z.whyLabel || "What is at stake in the debates", z.why, "trad")}${blk(z.keepLabel || "", z.keep, "alt")}</div>
        <div class="st-sec reply"><span class="lbl">What the original said, and what it means</span><p>${esc(z.verdict)}</p></div>
        <div><span class="lbl">Read the sources</span><ul class="lib">${z.links.map(l => `<li><a href="${esc(l.u)}" target="_blank" rel="noopener">${esc(l.t)}</a></li>`).join("")}</ul></div>
      </div></details>`;
  }

  /* ---------- Hebrew vs Greek ---------- */
  function renderLxx() {
    const causeCount = {}; TC.lxx.forEach(z => causeCount[z.cause] = (causeCount[z.cause] || 0) + 1);
    const glyph = { consonants: "תרעם → ?", vorlage: "📜 4Q", interpretive: "✎", greekcopy: "ΩΤΙΑ → ΣΩΜΑ", letters: "ד ↔ ר" };
    const shown = TC.lxx.filter(z => state.lxxTopic === "all" || z.topics.includes(state.lxxTopic));
    const topics = [...new Set(TC.lxx.flatMap(z => z.topics))];
    const ntGreek = TC.lxx.filter(z => /^Greek/.test(z.nt)).length;
    const tl = [["c. 750–550 BC", "Prophets and psalmists write in Hebrew", "heb"], ["c. 250–100 BC", "Septuagint: Hebrew Bible translated into Greek in Alexandria", "grk"], ["c. 250 BC – AD 68", "Dead Sea Scrolls copied at Qumran", "heb"], ["AD 40–100", "New Testament writers quote mostly the Greek", "grk"], ["AD 100–300", "Aramaic Targums read in synagogues", "heb"], ["c. AD 405", "Jerome's Vulgate follows the Hebrew", "lat"], ["AD 600–1000", "Masoretes add vowels; Aleppo (c. 930) and Leningrad (1008) codices", "heb"], ["1611", "KJV translates the Masoretic text", "lat"]];
    $("#v-lxx").innerHTML = `<div class="section-head"><div class="eyebrow">Hebrew vs Greek</div><h2>Where the Septuagint and the Hebrew part ways</h2>
      <p class="lede">The apostles read a Greek Old Testament, the Septuagint. Our English Old Testaments follow the later standard Hebrew (Masoretic) text. In some key verses the two say different things — and the New Testament often quotes the Greek.</p>
      <div class="stats" style="margin-top:6px"><div class="stat"><b>${TC.lxx.length}</b><span>key verses compared</span></div><div class="stat"><b>${ntGreek}</b><span>where the New Testament quotes the Greek</span></div><div class="stat"><b>${Object.keys(TC.lxxCauses).length}</b><span>reasons texts differ</span></div></div></div>

      <div class="panel"><span class="eyebrow">How the Old Testament reached us</span>
        <ol class="ttl">${tl.map(([d, t, k]) => `<li class="${k}"><span class="d">${d}</span><span class="t">${t}</span></li>`).join("")}</ol>
        <div class="legend"><span><i style="background:var(--gold)"></i>Hebrew and Aramaic</span><span><i style="background:var(--accent)"></i>Greek</span><span><i style="background:var(--muted)"></i>Latin and English</span></div></div>

      <div class="section-head" style="margin-top:28px"><div class="eyebrow">Why they differ</div><h2>Five ways a verse can change</h2></div>
      <div class="cause-grid">${Object.entries(TC.lxxCauses).map(([k, c]) => `<div class="card cause-card"><div class="glyph">${glyph[k]}</div><h3>${esc(c.name)}</h3><p>${esc(c.desc)}</p><span class="pill">${causeCount[k] || 0} ${(causeCount[k] || 0) === 1 ? "study" : "studies"}</span></div>`).join("")}</div>

      <div class="section-head" style="margin-top:28px"><div class="eyebrow">At a glance</div><h2>All ${TC.lxx.length} verses</h2></div>
      <div class="panel scroll-x"><table class="lxx-table"><thead><tr><th>Verse</th><th>Hebrew says</th><th>Greek says</th><th>New Testament quotes</th></tr></thead><tbody>
        ${TC.lxx.map(z => `<tr><td><a href="#ts-${z.id}" data-jump="ts-${z.id}"><b>${esc(z.ref)}</b></a></td><td>${markDiff(z.diff.mt, "mh")}</td><td>${markDiff(z.diff.lxx, "mg")}</td><td>${esc(z.nt)}</td></tr>`).join("")}
      </tbody></table></div>

      <div class="filter-row" style="margin-top:24px"><button class="chip" type="button" data-lt="all" aria-pressed="${state.lxxTopic === "all"}">All topics</button>${topics.map(t => `<button class="chip" type="button" data-lt="${t}" aria-pressed="${state.lxxTopic === t}"><span class="lens-dot" style="background:${DC[t]}"></span>${esc(SHORT[t])}</button>`).join("")}</div>
      <div class="stack" style="gap:16px">${shown.map((z, i) => textStudy(z, i === 0)).join("")}</div>`;
  }

  /* ---------- Romans 9 review ---------- */
  function wrapSvg(text, x, y, max, size, anchor) {
    const words = text.split(" "), lines = []; let cur = "";
    words.forEach(w => { if ((cur + " " + w).trim().length > max) { lines.push(cur.trim()); cur = w; } else cur += " " + w; });
    if (cur.trim()) lines.push(cur.trim());
    return `<text x="${x}" y="${y - (lines.length - 1) * size * 0.6}" font-size="${size}" text-anchor="${anchor || "middle"}" class="chart-ink">${lines.map((l, i) => `<tspan x="${x}" dy="${i ? size * 1.2 : 0}">${esc(l)}</tspan>`).join("")}</text>`;
  }
  function renderRom9() {
    const R = TC.rom9, C = R.cats;
    const counts = {}; R.points.forEach(p => counts[p.cat] = (counts[p.cat] || 0) + 1);
    // countdown ring
    const ring = (() => {
      const cx = 160, cy = 160, r = 120;
      let s = `<svg viewBox="0 0 320 320" class="ring" role="img" aria-label="Countdown ring of the 15 points coloured by category">`;
      s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 6"/>`;
      R.points.forEach((p, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 15, x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
        s += `<g class="ring-dot" data-r9jump="${p.n}" tabindex="0" role="button" aria-label="Point ${p.n}"><circle cx="${x}" cy="${y}" r="19" fill="${C[p.cat].color}"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="14" font-weight="800" fill="#fff">${p.n}</text></g>`; });
      s += `<text x="${cx}" y="${cy - 6}" text-anchor="middle" font-size="40" font-weight="800" class="chart-ink">15</text><text x="${cx}" y="${cy + 18}" text-anchor="middle" font-size="12" font-weight="700" letter-spacing="1.5" class="chart-muted">CONCERNS</text></svg>`;
      return s; })();
    // venn for framing
    const F = R.framing;
    const venn = `<svg viewBox="0 0 560 300" class="venn" role="img" aria-label="Two overlapping circles: God chose me and I chose God, with the overlap showing both">
      <circle cx="210" cy="160" r="120" fill="var(--accent)" opacity=".16" stroke="var(--accent)" stroke-width="2"/>
      <circle cx="350" cy="160" r="120" fill="var(--gold)" opacity=".18" stroke="var(--gold)" stroke-width="2"/>
      ${wrapSvg(F.a, 150, 160, 12, 17)}${wrapSvg(F.b, 410, 160, 12, 17)}
      ${wrapSvg("Both", 280, 140, 10, 16)}${wrapSvg("God draws · we respond", 280, 172, 11, 12)}
      <g><rect x="248" y="14" width="64" height="30" rx="15" fill="var(--warn)"/><text x="280" y="34" text-anchor="middle" font-size="14" font-weight="800" fill="#fff">OR?</text><line x1="250" y1="16" x2="310" y2="42" stroke="#fff" stroke-width="3"/></g>
    </svg>`;
    // statement triangle
    const S = R.statement, P = [[300, 70], [110, 330], [490, 330]];
    let tri = `<svg viewBox="0 0 600 400" style="overflow:visible" class="tri" role="img" aria-label="Three claims of the statement of faith at the corners of a triangle, with tensions on each side">`;
    [[0, 1], [1, 2], [2, 0]].forEach(([a, b], i) => { const mx = (P[a][0] + P[b][0]) / 2, my = (P[a][1] + P[b][1]) / 2;
      tri += `<line x1="${P[a][0]}" y1="${P[a][1]}" x2="${P[b][0]}" y2="${P[b][1]}" stroke="var(--warn)" stroke-width="3" stroke-dasharray="8 6"/><circle cx="${mx}" cy="${my}" r="15" fill="var(--warn)"/><text x="${mx}" y="${my + 5}" text-anchor="middle" font-size="14" font-weight="800" fill="#fff">${"ABC"[i]}</text>`; });
    S.claims.forEach((c, i) => { const [x, y] = P[i]; tri += `<rect x="${x - 100}" y="${y - 52}" width="200" height="104" rx="12" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.5"/><text x="${x - 86}" y="${y - 32}" font-size="11" font-weight="800" class="chart-muted">CLAIM ${i + 1}</text>${wrapSvg(c, x, y + 16, 26, 13)}`; });
    tri += `<text x="300" y="250" text-anchor="middle" font-size="13" font-weight="800" fill="var(--warn)">Unresolved</text></svg>`;
    // Romans 9 sources
    const tagCol = { "Covenant line": "#2d6aa3", "Nations": "#c07a1c", "Mercy to a people": "#6a4fb3", "Vocation": "#2f8f83", "Inclusion": "#5a7a2e", "Remnant": "#8a5a3c", "Faith": "#b23b3b" };
    const tagCount = {}; R.sources.forEach(s => tagCount[s.tag] = (tagCount[s.tag] || 0) + 1);
    // loop
    const L6 = R.loop, n = L6.length, lc = 220, lr = 150;
    let loop = `<svg viewBox="0 0 440 440" class="loop" role="img" aria-label="A circular chain of six claims that leads back to its start"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--warn)"/></marker></defs>`;
    const pts = L6.map((t, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [lc + lr * Math.cos(a), lc + lr * Math.sin(a)]; });
    pts.forEach((p, i) => { const q = pts[(i + 1) % n], dx = q[0] - p[0], dy = q[1] - p[1], d = Math.hypot(dx, dy), k = 62 / d;
      loop += `<line x1="${p[0] + dx * k}" y1="${p[1] + dy * k}" x2="${q[0] - dx * k}" y2="${q[1] - dy * k}" stroke="var(--warn)" stroke-width="2" marker-end="url(#ah)"/>`; });
    pts.forEach((p, i) => { loop += `<circle cx="${p[0]}" cy="${p[1]}" r="58" fill="var(--surface)" stroke="${i === 0 || i === n - 1 ? "var(--warn)" : "var(--line)"}" stroke-width="2"/>${wrapSvg(L6[i].replace(/"/g, ""), p[0], p[1] + 4, 15, 11)}`; });
    loop += `<text x="${lc}" y="${lc - 4}" text-anchor="middle" font-size="13" font-weight="800" fill="var(--warn)">The loop</text><text x="${lc}" y="${lc + 14}" text-anchor="middle" font-size="11" class="chart-muted">no way in from outside</text></svg>`;
    const shownPts = R.points.filter(p => state.r9cat === "all" || p.cat === state.r9cat);

    $("#v-rom9").innerHTML = `
      <div class="r9-hero">
        <div><div class="eyebrow">Sermon review · Romans 9:6–13</div><h1 class="r9-title">${esc(R.title)}</h1><p class="lede">${esc(R.lede)}</p>
          <div class="r9-legend">${Object.entries(C).map(([k, c]) => `<button class="r9-cat" type="button" data-r9cat="${k}" aria-pressed="${state.r9cat === k}" style="--c:${c.color}"><span class="sw2"></span><b>${counts[k] || 0}</b> ${esc(c.name)}</button>`).join("")}</div>
          <p class="note" style="margin-top:14px">Adapted from your doc <a href="https://claude.ai/artifact/Rfngkr7p5RGaJToLZcPw3u" target="_blank" rel="noopener">${esc(R.title)}</a>. Each point adds a short Calvinist answer for fair comparison.</p></div>
        ${ring}
      </div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">1 · The framing</div><h2>"Does God choose me, or do I choose God?"</h2></div>
        <div class="r9-two"><div class="panel">${venn}</div>
          <div class="stack" style="gap:12px"><blockquote class="bubble">“${esc(F.quote)}”<cite>— the pastor</cite></blockquote><p>${esc(F.note)}</p>
          <div><span class="lbl">The both/and in Scripture</span>${refs(F.bothRefs)}</div></div></div></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">2 · The statement of faith</div><h2>Three claims that cannot all stand together</h2></div>
        <div class="r9-two"><div class="panel">${tri}</div>
          <div class="stack" style="gap:10px">${S.tensions.map((t, i) => `<div class="tension-row"><span class="tbadge">${"ABC"[i]}</span><p>${esc(t)}</p></div>`).join("")}
            <p class="r9-verdict">${esc(S.verdict)}</p>
            <div class="card" style="border-left:4px solid var(--gold)"><span class="lbl">What a consistent Calvinist statement would say</span><p>${esc(S.consistent)}</p></div>
            <p class="muted">${esc(S.note)}</p></div></div></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">3 · What Paul is quoting</div><h2>Romans 9's Old Testament sources: mostly nations and covenant lines</h2>
        <p class="muted">Follow each quotation back to its source. Most describe peoples, family lines and vocations in history — not the eternal destiny of individuals.</p></div>
        <div class="tagbar">${Object.entries(tagCount).map(([t, c]) => `<span style="flex:${c};background:${tagCol[t]}" title="${esc(t)}: ${c}">${esc(t)} ${c}</span>`).join("")}</div>
        <div class="srcmap">${R.sources.map(s => `<div class="src-row"><span class="v">Rom ${esc(s.v)}</span><span class="arr" aria-hidden="true">→</span><div class="src-ot"><b>${esc(s.ot)}</b><span class="quote">${esc(s.says)}</span></div><div class="src-about"><span class="tagc" style="background:${tagCol[s.tag]}">${esc(s.tag)}</span><span>${esc(s.about)}</span></div></div>`).join("")}</div></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">4 · The countdown</div><h2>${state.r9cat === "all" ? "All 15 points" : esc(C[state.r9cat].name)}</h2>
        ${state.r9cat !== "all" ? `<button class="ghost" type="button" data-r9cat="all">Show all 15</button>` : ""}</div>
        <div class="stack" style="gap:16px">${shownPts.map(p => `
          <article class="pt" id="pt-${p.n}" style="--c:${C[p.cat].color}">
            <div class="pt-num">${p.n}</div>
            <div class="pt-body">
              <div class="st-top"><span class="pill" style="background:${C[p.cat].color};color:#fff">${esc(C[p.cat].name)}</span></div>
              <h3>${esc(p.title)}</h3>
              <blockquote class="bubble">“${esc(p.quote)}”<cite>— the pastor</cite></blockquote>
              <div><span class="lbl">The concern</span><p>${esc(p.concern)}</p>${refs(p.refs)}</div>
              <details class="reply-d"><summary>How a Calvinist would answer</summary><p>${esc(p.reply)}</p></details>
            </div></article>`).join("")}</div></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">5 · Points 9 and 2 in one picture</div><h2>"Believe for yourself" inside a closed loop</h2></div>
        <div class="r9-two"><div class="panel">${loop}</div>
          <div class="card" style="border-left:4px solid var(--ok)"><span class="lbl">${esc(R.loopBreak.t)}</span><p>${esc(R.loopBreak.note)}</p>${refs(R.loopBreak.refs)}</div></div></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">6 · "What if Calvinism is true?"</div><h2>Four outcomes</h2></div>
        <div class="whatif">${R.whatIf.map(w => `<div class="wi ${w.cal.includes("false") ? "f" : "t"}"><span class="lbl">${esc(w.cal)} · ${esc(w.me)}</span><p>${esc(w.out)}</p></div>`).join("")}</div>
        <p class="muted" style="margin-top:10px;max-width:75ch">In the Calvinist system, how one lives or believes makes no difference to the outcome: God regenerates some to believe, leaves everyone else without hope, and still condemns them for not believing.</p></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">Summary</div><h2>Closing thoughts</h2></div>
        <div class="grid">${R.summary.map(t => `<div class="card"><p style="-webkit-line-clamp:unset;color:var(--ink)">${esc(t)}</p></div>`).join("")}</div></div>`;
  }

  function drawWords() {
    const q = state.wordQ.trim().toLowerCase();
    const sideLbl = { alt: "Alternative", trad: "Traditional", ctx: "Context", both: "Both" };
    const shown = TC.words.filter(w => (state.wordTopic === "all" || w.topic === state.wordTopic) &&
      (state.wordKind === "all" || w.ev.some(e => e.k === state.wordKind)) &&
      (!q || JSON.stringify(w).toLowerCase().includes(q)));
    $("#word-list").innerHTML = shown.length ? shown.map((w, i) => {
      const a = w.ev.filter(e => e.side === "alt").length, t = w.ev.filter(e => e.side === "trad").length, c = w.ev.length - a - t;
      const ev = w.ev.filter(e => state.wordKind === "all" || e.k === state.wordKind);
      return `<details class="card word" ${i < 2 || q || state.wordKind !== "all" ? "open" : ""}>
        <summary>
          <div class="word-head"><span class="orig" lang="${w.lang.startsWith("Hebrew") ? "he" : "el"}">${esc(w.s)}</span>
            <div style="min-width:0"><h3>${esc(w.w)}</h3><span class="muted">${esc(w.lang)} · “${esc(w.gloss)}”</span></div>
            <span class="pill" style="margin-left:auto"><span class="lens-dot" style="background:${DC[w.topic]}"></span>${esc(SHORT[w.topic])}</span></div>
          <div class="tally" title="Evidence balance"><span class="alt" style="flex:${a}"></span><span class="ctx" style="flex:${c}"></span><span class="trad" style="flex:${t}"></span></div>
          <div class="tally-lbl"><span>${a} support the alternative</span><span>${c} context</span><span>${t} support the traditional</span></div>
        </summary>
        <div class="st-body">
          <div class="st-sec used"><span class="lbl">Root and etymology</span><p>${esc(w.root)}</p></div>
          <div class="versus"><div><span class="lbl" style="color:${DC[w.topic]}">Traditional reading</span><p>${esc(w.trad)}</p></div><div><span class="lbl" style="color:var(--accent)">Alternative reading</span><p>${esc(w.alt)}</p></div></div>
          <div class="st-sec"><span class="lbl">Evidence (${ev.length})</span>
            <ol class="evlist">${ev.map(e => `<li class="ev ${e.side}"><div class="ev-top"><span class="evk">${esc(e.k)}</span><b>${esc(e.src)}</b><span class="evside ${e.side}">${sideLbl[e.side]}</span></div><p>${esc(e.note)}</p></li>`).join("")}</ol></div>
          <div class="st-sec reply"><span class="lbl">Balanced verdict</span><p>${esc(w.verdict)}</p></div>
        </div>
      </details>`;
    }).join("") : `<p class="muted">No words match. Clear the search or choose another source type.</p>`;
  }

  /* ---------- Origins of TULIP ---------- */
  function renderTulip() {
    const Z = TC.tulip, sel = Z.petals.find(p => p.k === state.tulipPetal) || Z.petals[0];
    const pc = { T: "#b23b3b", U: "#c07a1c", L: "#6a4fb3", I: "#2d6aa3", P: "#2f8f83" };
    // tulip: five petals fanned on a stem, roots in the soil
    const angles = [-56, -28, 0, 28, 56];
    let tu = `<svg viewBox="0 0 420 470" class="tulip-svg" role="img" aria-label="A tulip whose five petals are the five points of TULIP, rooted in Augustine, Manichaeism and Pelagius">
      <defs><linearGradient id="soil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b4a2f"/><stop offset="1" stop-color="#3b2717"/></linearGradient></defs>
      <rect x="0" y="330" width="420" height="140" rx="18" fill="url(#soil)"/>
      <path class="stem" d="M210 330 C206 280 214 230 210 190" stroke="#3f7a3a" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path class="leaf" d="M210 290 C170 270 150 240 152 215 C180 230 200 255 210 285Z" fill="#4f8f45"/>
      <path class="leaf r" d="M211 270 C250 255 268 228 266 205 C240 220 220 240 211 265Z" fill="#5a9c4f"/>`;
    Z.petals.forEach((p, i) => {
      tu += `<g class="petal ${p.k === sel.k ? "on" : ""}" data-petal="${p.k}" tabindex="0" role="button" aria-label="${esc(p.name)}" style="--d:${i * 0.12}s" transform="rotate(${angles[i]} 210 190)">
        <path d="M210 190 C170 150 172 70 210 34 C248 70 250 150 210 190Z" fill="${pc[p.k]}"/>
        <text x="210" y="105" text-anchor="middle" font-size="30" font-weight="800" fill="#fff" transform="rotate(${-angles[i]} 210 105)">${p.k}</text></g>`;
    });
    const roots = [["Augustine", 210, 440, "M210 330 C210 370 212 400 210 425"], ["Manichaeism", 80, 420, "M208 335 C170 360 120 380 92 405"], ["Pelagius", 340, 420, "M212 335 C250 360 300 380 328 405"]];
    roots.forEach(([n, x, y, d]) => tu += `<path class="root" d="${d}" stroke="#d9b98a" stroke-width="3" fill="none" stroke-linecap="round"/><text x="${x}" y="${y + 18}" text-anchor="middle" font-size="14" font-weight="800" fill="#f1dfc0">${n}</text>`);
    tu += `<text x="210" y="356" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="2" fill="#e8d3b0" opacity=".8">ROOTS, ACCORDING TO THIS STUDY</text></svg>`;

    const strCol = { gnostic: "#6a4fb3", pelagian: "#c07a1c", main: "var(--accent)", arminian: "#2f8f83" };
    // Augustine life strip
    const AL = Z.augustineLife, x0 = 354, x1 = 430, X = y => 20 + (y - x0) / (x1 - x0) * 660;
    let life = `<svg viewBox="0 0 700 124" class="life-svg" role="img" aria-label="Timeline of Augustine's life, with his Manichaean years shaded">
      <rect x="${X(373)}" y="30" width="${X(383) - X(373)}" height="36" rx="8" fill="#6a4fb3" opacity=".22"/><text x="${(X(373) + X(383)) / 2}" y="24" text-anchor="middle" font-size="11" font-weight="800" fill="#6a4fb3">MANICHAEAN YEARS</text>
      <line x1="20" y1="48" x2="680" y2="48" class="chart-line" stroke-width="2"/>`;
    AL.forEach((e, i) => life += `<g class="life-dot" style="--d:${i * 0.08}s"><circle cx="${X(e.y)}" cy="48" r="7" fill="${e.y >= 373 && e.y < 384 ? "#6a4fb3" : "var(--gold)"}"/><text x="${X(e.y)}" y="${[78, 94, 110][i % 3]}" text-anchor="middle" font-size="12" font-weight="800" class="chart-ink">${e.y}</text></g>`);
    life += `</svg>`;

    const T2 = Z.twoViews;
    const views2 = `<svg viewBox="0 0 640 230" class="views-svg" role="img" aria-label="Augustine, Calvin, Arminius and Wesley clustered in one system, far from the scriptural view">
      <ellipse cx="170" cy="115" rx="150" ry="92" fill="#c07a1c" opacity=".1" stroke="#c07a1c" stroke-width="2" stroke-dasharray="6 6"/>
      ${T2.left.who.map((w, i) => { const pos = [[120, 80], [215, 75], [115, 150], [215, 150]][i]; return `<g class="vdot" style="--d:${i * 0.1}s"><circle cx="${pos[0]}" cy="${pos[1]}" r="30" fill="var(--surface)" stroke="#c07a1c" stroke-width="2"/><text x="${pos[0]}" y="${pos[1] + 4}" text-anchor="middle" font-size="11" font-weight="800" class="chart-ink">${w}</text></g>`; }).join("")}
      <path class="farline" d="M330 115 C400 70 450 160 510 115" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="4 6"/>
      <text x="420" y="82" text-anchor="middle" font-size="12" font-weight="700" class="chart-muted">far apart</text>
      <circle cx="560" cy="115" r="62" fill="var(--accent)" opacity=".14" stroke="var(--accent)" stroke-width="2"/><text x="560" y="110" text-anchor="middle" font-size="14" font-weight="800" class="chart-ink">Scriptural</text><text x="560" y="128" text-anchor="middle" font-size="14" font-weight="800" class="chart-ink">view</text>
    </svg>`;

    // ingredients flask
    const IG = Z.ingredients;
    const flask = `<svg viewBox="0 0 360 300" class="flask-svg" role="img" aria-label="Three ingredients pouring into one flask labelled Calvinist meme complex">
      ${IG.map((g, i) => { const x = [70, 180, 290][i]; return `<path class="pour" d="M${x} 20 C${x} 80 ${180 + (x - 180) * .3} 110 ${180 + (x - 180) * .15} 150" stroke="${g.c}" stroke-width="10" fill="none" stroke-linecap="round" style="--d:${i * 0.25}s"/><circle cx="${x}" cy="16" r="12" fill="${g.c}"/>`; }).join("")}
      <path d="M140 140 L140 180 L95 265 C90 278 98 288 112 288 L248 288 C262 288 270 278 265 265 L220 180 L220 140Z" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
      <path d="M118 238 L242 238 L262 268 C266 278 260 284 250 284 L110 284 C100 284 94 278 98 268Z" fill="url(#mix)"/>
      <defs><linearGradient id="mix" x1="0" x2="1"><stop offset="0" stop-color="#6a4fb3"/><stop offset=".5" stop-color="#c07a1c"/><stop offset="1" stop-color="#2d6aa3"/></linearGradient></defs>
      <circle class="bub" cx="160" cy="262" r="5" fill="#fff" opacity=".7"/><circle class="bub b2" cx="200" cy="270" r="4" fill="#fff" opacity=".7"/><circle class="bub b3" cx="180" cy="258" r="3" fill="#fff" opacity=".7"/>
    </svg>`;

    const tone = state.tulipTone;
    $("#v-tulip").innerHTML = `
      <div class="tu-hero">
        <div class="tu-hero-text"><div class="eyebrow">Calvinism · Origins</div><h1 class="r9-title">${esc(Z.title)}</h1><p class="lede">${esc(Z.lede)}</p>
          <p class="muted">Tap a petal to see each point, where this study says it came from, how it fares against Scripture, and how a Calvinist answers.</p>
          <p class="note" style="margin-top:10px">Adapted from your doc <a href="${Z.doc}" target="_blank" rel="noopener">${esc(Z.title)}</a>, with historians' notes and Calvinist responses added.</p></div>
        <div class="tu-flower">${tu}</div>
      </div>
      <div class="card petal-card" style="--c:${pc[sel.k]}" aria-live="polite">
        <div class="pc-head"><span class="pc-k">${sel.k}</span><div><h3>${esc(sel.name)}</h3><p>${esc(sel.def)}</p></div></div>
        <div class="pc-grid">
          <div><span class="lbl">Root, according to this study</span><p><b>${esc(sel.root)}.</b> ${esc(sel.rootNote)}</p></div>
          <div><span class="lbl">Tested against Scripture</span><p>${esc(sel.test)}</p></div>
          <div class="reply-d" style="border-left-color:var(--ok)"><span class="lbl" style="color:var(--ok)">How a Calvinist answers</span><p>${esc(sel.reply)}</p></div>
        </div>
        <div class="pc-nav">${Z.petals.map(p => `<button type="button" class="pc-dot" data-petal="${p.k}" aria-pressed="${p.k === sel.k}" style="--c:${pc[p.k]}">${p.k}</button>`).join("")}</div>
      </div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">1 · The family tree</div><h2>From Augustine to TULIP</h2><p class="muted">Each step as this study sees it, with a historian's note.</p></div>
        <div class="lineage">${Z.lineage.map((n, i) => `<div class="ln ${i % 2 ? "r" : "l"}" style="--c:${strCol[n.stream]}"><span class="ln-dot"></span><div class="ln-card card"><span class="ln-y">${esc(n.y)}</span><h3>${esc(n.who)}</h3><p>${esc(n.what)}</p><p class="muted ln-note">${esc(n.note)}</p></div></div>`).join("")}</div>
        <div class="legend"><span><i style="background:#6a4fb3"></i>Manichaean stream</span><span><i style="background:#c07a1c"></i>Pelagian stream</span><span><i style="background:var(--accent)"></i>Augustinian–Reformed line</span><span><i style="background:#2f8f83"></i>Arminian branch</span></div></div>

      <div class="r9-sec"><div class="quote-band"><div class="mono"><span>A</span><svg viewBox="0 0 60 20" aria-hidden="true"><path d="M2 10 H54 M46 3 L56 10 L46 17" stroke="currentColor" stroke-width="2.5" fill="none"/></svg><span>C</span></div>
        <blockquote>“${esc(Z.calvinQuote.text)}”<cite>— ${esc(Z.calvinQuote.who)}</cite></blockquote></div></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">2 · Two views of predestination</div><h2>The predestination of theology vs the predestination of Scripture</h2></div>
        <div class="panel">${views2}</div>
        <div class="r9-two" style="margin-top:14px"><div class="card" style="border-top:4px solid #c07a1c"><span class="lbl">${esc(T2.left.name)}</span><p><b>${esc(T2.left.def)}</b></p><p class="muted">${esc(T2.left.note)}</p></div>
          <div class="card" style="border-top:4px solid var(--accent)"><span class="lbl">${esc(T2.right.name)}</span><p><b>${esc(T2.right.def)}</b></p><ul class="uses">${T2.right.uses.map(([r, t]) => `<li><span class="ref">${esc(r)}</span> ${esc(t)}</li>`).join("")}</ul></div></div></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">3 · The recipe</div><h2>Three ingredients, one system</h2><p class="muted">This study's account of what Augustine mixed together, which Calvin later systematised.</p></div>
        <div class="r9-two"><div class="panel">${flask}<p class="flask-lbl">The "Calvinist meme complex"</p></div>
          <div class="stack" style="gap:10px">${IG.map((g, i) => `<div class="card ingr" style="--c:${g.c}"><span class="ingr-n">${i + 1}</span><div><h3>${esc(g.n)}</h3><p>${esc(g.d)}</p></div></div>`).join("")}
            <p class="muted"><b>Imitation, not original thought.</b> Solzhenitsyn is cited as saying real intellectual thought is non-imitative; by that standard Augustine and Calvin imitated what came before them.</p></div></div></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">4 · Limited atonement</div><h2>Same idea, nicer words</h2></div>
        <div class="morph"><div class="bubble">“${esc(Z.atonement.a.say)}”<cite>— ${esc(Z.atonement.a.who)}</cite></div><div class="morph-arrow" aria-hidden="true">reworded<svg viewBox="0 0 80 20"><path d="M2 10 H72 M64 3 L76 10 L64 17" stroke="currentColor" stroke-width="2.5" fill="none"/></svg></div><div class="bubble">“${esc(Z.atonement.b.say)}”<cite>— ${esc(Z.atonement.b.who)}</cite></div></div>
        <p class="r9-verdict" style="margin-top:12px">${esc(Z.atonement.point)}</p>
        <div class="panel tone" style="margin-top:18px"><span class="lbl">Russell conjugation · tone dial</span><p>${esc(Z.russell.intro)}</p>
          <div class="dial" role="radiogroup" aria-label="Choose a tone">${Z.russell.scale.map((t, i) => `<button type="button" role="radio" class="dial-b" data-tone="${i}" aria-checked="${tone === i}">${esc(t)}</button>`).join("")}<span class="dial-k" style="--t:${tone}"></span></div>
          <p class="dial-out">Same meaning, three tones. Now apply it to Calvinism:</p>
          <div class="pairs">${Z.russell.pair.map(pr => `<div class="pair"><span class="soft">${esc(pr.soft)}</span><span class="eq">=</span><span class="hard">${esc(pr.hard)}</span></div>`).join("")}</div>
          <p>${esc(Z.russell.point)}</p><p class="muted"><b>The challenge:</b> ${esc(Z.russell.challenge)}</p></div></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">5 · The role of Christ's death</div><h2>Blood and life: both are needed</h2></div>
        <div class="arch">${Z.cross.map(c => `<div class="pillar ${c.role === "Death" ? "d" : "r"}"><span class="pill">${c.role}</span><b class="ref">${esc(c.ref)}</b><p>${esc(c.t)}</p></div>`).join("")}</div>
        <div class="arch-top">Salvation</div>
        <p class="muted" style="margin-top:12px;max-width:80ch">${esc(Z.crossNote)}</p></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">6 · Arminius as a Calvinist</div><h2>From Remonstrance to TULIP</h2><p class="muted">The five points came out of a dispute between two kinds of Reformed theologians. In this view Calvinism and Arminianism sit together on one side, and the scriptural view is far from both.</p></div>
        <div class="chev">${Z.dort.map((d, i) => `<div class="chev-i" style="--d:${i * 0.12}s"><b>${i + 1}</b><span>${esc(d)}</span></div>`).join("")}</div></div>

      <div class="part2"><span class="eyebrow">Part 2</span><h2>The Link Between Calvinism and Gnosticism</h2><p class="lede">Raising this link draws strong objections. The study argues the connection runs three ways.</p></div>
      <div class="cause-grid">${Z.links.map((l, i) => `<div class="card link3"><span class="big-n">${i + 1}</span><h3>${esc(l.k)}</h3><p>${esc(l.d)}</p></div>`).join("")}</div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">Augustine's road</div><h2>Nine years a Manichaean</h2></div>
        <div class="panel scroll-x">${life}<ol class="life-list">${AL.map(e => `<li><b>${e.y}</b> ${esc(e.t)}</li>`).join("")}</ol></div></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">Gnostic tenets in Calvinism</div><h2>How the tenets map, in this study's view</h2><p class="muted">Not a point-for-point match with one form of Gnosticism, but distinctives that trace back to, or cascade from, Gnostic tenets.</p></div>
        <div class="bridge">${Z.tenets.map((t, i) => `<div class="br-row" style="--d:${i * 0.1}s"><div class="br-l">${esc(t.g)}</div><div class="br-line" aria-hidden="true"><span></span></div><div class="br-r">${esc(t.c)}</div></div>`).join("")}</div>
        <p class="muted" style="margin-top:10px;max-width:80ch">Both Augustine and Pelagius started from a presumption about the human will rather than from Scripture, so in this view Calvinism is both more Gnostic and more Pelagian than other branches. Dualism is so tied to Manichaeism that "Manichaean" still means black-and-white thinking.</p></div>

      <div class="r9-sec r9-two">
        <div class="card chameleon"><span class="lbl">The chameleon strategy</span><p>${esc(Z.chameleon)}</p></div>
        <div class="card"><span class="lbl">Practical gnosis</span><p class="quote">“${esc(Z.gnosis.text)}” <span class="ref">${esc(Z.gnosis.verse)}</span></p><p>${esc(Z.gnosis.case)}</p><p class="muted">${esc(Z.gnosis.point)}</p></div>
      </div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">"You're just following Ken Wilson"</div><h2>Two fallacies in the usual reply</h2></div>
        <div class="r9-two">${Z.fallacies.map(f => `<div class="card fallacy"><h3>${esc(f.n)}</h3><p>${esc(f.d)}</p></div>`).join("")}</div>
        <p class="muted" style="margin-top:10px">Even if a single scholar were the source, naming him does not address the arguments. Ken Wilson's Oxford thesis on Augustine's shift was published as Augustine's Conversion from Traditional Free Choice to "Non-free Free Will" (2018).</p></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">Fair play</div><h2>How Calvinists respond</h2></div>
        <div class="grid">${Z.fairPlay.map(f => `<div class="card fair"><h3>${esc(f.h)}</h3><p style="-webkit-line-clamp:unset">${esc(f.t)}</p></div>`).join("")}</div></div>

      <div class="r9-sec"><div class="section-head"><div class="eyebrow">Study questions</div><h2>Ten questions to work through</h2><p class="muted">Tap a card to flip it for a hint.</p></div>
        <div class="flip-grid">${Z.questions.map((q, i) => `<button type="button" class="flip" data-flip aria-pressed="false"><span class="flip-in"><span class="flip-f"><b>${i + 1}</b>${esc(q.q)}</span><span class="flip-b"><b>Hint</b>${esc(q.hint)}</span></span></button>`).join("")}</div></div>`;
  }

  /* ---------- Influence map ---------- */
  function renderMap() {
    const ik = Object.keys(I), lk = Object.keys(L);
    const W = 1100, nodeW = 210, nodeH = 30, gap = 10, top = 40;
    const colX = [20, (W - nodeW) / 2, W - nodeW - 20];
    const H = top + Math.max(ik.length, D.length, lk.length) * (nodeH + gap) + 10;
    const yFor = (i, n) => top + (H - top - n * (nodeH + gap)) / 2 + i * (nodeH + gap);
    const pos = {};
    ik.forEach((k, i) => pos["i:" + k] = [colX[0], yFor(i, ik.length)]);
    D.forEach((d, i) => pos["d:" + d.id] = [colX[1], yFor(i, D.length)]);
    lk.forEach((k, i) => pos["l:" + k] = [colX[2], yFor(i, lk.length)]);
    const edges = [];
    D.forEach(d => {
      d.influences.forEach(k => edges.push({ a: "i:" + k, b: "d:" + d.id, c: "var(--warn)", w: 1.6 }));
      d.responses.forEach(r => edges.push({ a: "d:" + d.id, b: "l:" + r.lens, c: L[r.lens].color, w: r.s * .9 + .4 }));
    });
    const sel = state.mapSel;
    const hot = new Set(); const hotE = new Set();
    if (sel) { hot.add(sel); edges.forEach((e, i) => { if (e.a === sel || e.b === sel) { hotE.add(i); hot.add(e.a); hot.add(e.b); } }); }
    let svg = `<svg class="map-svg ${sel ? "dim" : ""}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Network map linking outside influences to doctrines and doctrines to the lenses that challenge them">`;
    [["Outside influences", 0], ["Western doctrines", 1], ["Alternative lenses", 2]].forEach(([t, i]) => svg += `<text x="${colX[i] + nodeW / 2}" y="20" text-anchor="middle" font-size="12" font-weight="800" letter-spacing="1.2" class="chart-muted">${t.toUpperCase()}</text>`);
    edges.forEach((e, i) => {
      const [ax, ay] = pos[e.a], [bx, by] = pos[e.b];
      const x1 = ax + nodeW, y1 = ay + nodeH / 2, x2 = bx, y2 = by + nodeH / 2, mx = (x1 + x2) / 2;
      svg += `<path class="edge ${hotE.has(i) ? "hot" : ""}" d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}" stroke="${e.c}" stroke-width="${e.w}"/>`;
    });
    const node = (key, label, color) => {
      const [x, y] = pos[key];
      return `<g class="node ${hot.has(key) ? "hot" : ""}" data-node="${key}" tabindex="0" role="button" aria-label="${esc(label)}">
        <rect x="${x}" y="${y}" width="${nodeW}" height="${nodeH}" rx="8" fill="var(--surface)" stroke="${color}"/>
        <rect x="${x}" y="${y}" width="6" height="${nodeH}" rx="3" fill="${color}"/>
        <text x="${x + 14}" y="${y + 19}" class="chart-ink">${esc(label.length > 30 ? label.slice(0, 29) + "…" : label)}</text></g>`;
    };
    ik.forEach(k => svg += node("i:" + k, I[k].name, "var(--warn)"));
    D.forEach(d => svg += node("d:" + d.id, SHORT[d.id], DC[d.id]));
    lk.forEach(k => svg += node("l:" + k, L[k].name, L[k].color));
    svg += `</svg>`;

    let detail = `<p class="muted">Select any box to trace its connections.</p>`;
    if (sel) {
      const [t, k] = sel.split(":");
      if (t === "i") detail = `<span class="eyebrow">${esc(I[k].kind)} · ${esc(I[k].era)}</span><h3>${esc(I[k].name)}</h3><p>${esc(I[k].desc)}</p><div class="pills">${D.filter(d => d.influences.includes(k)).map(d => `<span class="pill">${esc(SHORT[d.id])}</span>`).join("")}</div>`;
      if (t === "d") { const d = byId[k]; detail = `<span class="eyebrow">${esc(d.family)}</span><h3>${esc(d.name)}</h3><p>${esc(d.summary)}</p><div><button class="ghost" type="button" data-open="${d.id}">Open dossier</button></div>`; }
      if (t === "l") detail = `<span class="eyebrow">Alternative lens</span><h3>${esc(L[k].name)}</h3><p>${esc(L[k].thesis)}</p>${refs(L[k].texts)}`;
    }
    $("#v-map").innerHTML = `<div class="section-head"><div class="eyebrow">Visual map</div><h2>Where the ideas came from, and who answers them</h2>
      <p class="lede">Left: philosophical, mythic, legal and cultural streams that fed each doctrine. Right: the lenses that challenge it, with thicker lines for stronger challenges.</p></div>
      <div class="panel scroll-x">${svg}</div>
      <div class="legend"><span><i style="background:var(--warn)"></i>Shaped by (influence)</span>${Object.values(L).map(l => `<span><i style="background:${l.color}"></i>${esc(l.short)}</span>`).join("")}</div>
      <div class="card" style="margin-top:16px" aria-live="polite">${detail}</div>`;
  }

  /* ---------- Timeline ---------- */
  function allEvents() {
    const ev = [];
    D.forEach(d => d.timeline.forEach(e => ev.push({ y: e.y, t: e.t, d: d.id })));
    return ev.sort((a, b) => a.y - b.y);
  }
  function renderTimeline() {
    const ev = allEvents().filter(e => state.tlFilter === "all" || e.d === state.tlFilter);
    const W = 1120, left = 200, right = 20, rowH = 26, top = 36, H = top + D.length * rowH + 28;
    const X = yearScale(left, W - right);
    let svg = `<svg class="tl-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Timeline of key events for every doctrine">`;
    TC.eras.forEach((e, i) => {
      const [a, b] = X.edges[i];
      svg += `<rect x="${a}" y="${top - 22}" width="${b - a}" height="${H - top + 2}" fill="${i % 2 ? "var(--surface-2)" : "none"}" opacity=".6"/>`;
      svg += `<text x="${(a + b) / 2}" y="${top - 8}" text-anchor="middle" font-size="11" font-weight="700" class="chart-muted">${e.name.toUpperCase()}</text>`;
      svg += `<text x="${a + 3}" y="${H - 6}" font-size="10.5" class="chart-muted">${e.from}</text>`;
    });
    D.forEach((d, i) => {
      const y = top + i * rowH + rowH / 2, on = state.tlFilter === "all" || state.tlFilter === d.id;
      svg += `<text x="${left - 12}" y="${y + 4}" text-anchor="end" font-size="12" font-weight="700" class="${on ? "chart-ink" : "chart-muted"}">${esc(SHORT[d.id])}</text>`;
      svg += `<line x1="${left}" y1="${y}" x2="${W - right}" y2="${y}" class="chart-line" stroke-width="1"/>`;
      d.timeline.forEach((e, j) => svg += `<circle class="tl-dot" data-ev="${d.id}-${j}" cx="${X(e.y)}" cy="${y}" r="6" fill="${DC[d.id]}" opacity="${on ? 1 : .2}"><title>${e.y}: ${esc(e.t)}</title></circle>`);
    });
    svg += `</svg>`;
    const groups = TC.eras.map(era => ({ era, items: ev.filter(e => e.y >= era.from && (e.y < era.to || era.to === 2026)) })).filter(g => g.items.length);
    $("#v-timeline").innerHTML = `<div class="section-head"><div class="eyebrow">Timeline</div><h2>Two thousand years of formation</h2>
      <p class="lede">Every dot is a turning point. Select a dot to jump to it, or filter by doctrine.</p></div>
      <div class="filter-row"><button class="chip" type="button" data-tl="all" aria-pressed="${state.tlFilter === "all"}">All doctrines</button>${D.map(d => `<button class="chip" type="button" data-tl="${d.id}" aria-pressed="${state.tlFilter === d.id}"><span class="lens-dot" style="background:${DC[d.id]}"></span>${esc(SHORT[d.id])}</button>`).join("")}</div>
      <div class="panel scroll-x">${svg}</div>
      <div class="tl-list">${groups.map(g => `<div class="tl-era"><h3>${g.era.name} <small>${g.era.from}–${g.era.to === 2026 ? "today" : g.era.to}</small></h3>
        ${g.items.map(e => { const j = byId[e.d].timeline.findIndex(x => x.y === e.y && x.t === e.t); return `<div class="tl-item" id="ev-${e.d}-${j}"><span class="yr">${e.y}</span><span>${esc(e.t)}<span class="tag" style="color:${DC[e.d]}">${esc(SHORT[e.d])}</span></span></div>`; }).join("")}</div>`).join("")}</div>`;
  }

  /* ---------- Flowcharts & pathfinder ---------- */
  const arrow = `<div class="arrow" aria-hidden="true"><svg viewBox="0 0 16 26"><path d="M8 2 V22 M3 17 L8 23 L13 17"/></svg></div>`;
  function chain(steps, cls, pressure) {
    return `<div class="flow ${cls}">${steps.map((s, i) => `${i ? arrow : ""}<div class="step ${i === pressure ? "pressure" : ""}"><span class="n">${i + 1}</span><span>${esc(s)}</span></div>`).join("")}</div>`;
  }
  function renderFlow() {
    const d = byId[state.flowDoc], lg = d.logic, lens = L[lg.altLens];
    const t = TC.trees[state.tree];
    const nodeKey = state.treeNode || t.start, node = t.nodes[nodeKey];
    let treeBody;
    if (node.view) {
      const c = node.lens ? L[node.lens].color : "var(--accent)";
      treeBody = `<div class="card result" style="--c:${c}"><span class="eyebrow">Where your answers lead</span><h3>${esc(node.view)}</h3><p style="-webkit-line-clamp:unset">${esc(node.text)}</p>${node.lens ? `<div class="pills">${lensPill(node.lens)}</div>` : ""}</div>`;
    } else {
      treeBody = `<p class="q">${esc(node.q)}</p><div class="answers">${node.opts.map(([a, n]) => `<button class="ans" type="button" data-next="${n}" data-a="${esc(a)}">${esc(a)}</button>`).join("")}</div>`;
    }
    $("#v-flow").innerHTML = `<div class="section-head"><div class="eyebrow">Flowcharts</div><h2>Follow the logic, step by step</h2>
      <p class="lede">Each doctrine's chain of reasoning beside the alternative chain. The red step is where critics say Scripture pushes back hardest.</p></div>
      <div class="filter-row">${D.map(x => `<button class="chip" type="button" data-flow="${x.id}" aria-pressed="${x.id === d.id}">${esc(SHORT[x.id])}</button>`).join("")}</div>
      <div class="panel"><div class="flow-wrap">
        <div class="flow-col"><h3><span class="lens-dot" style="background:${DC[d.id]}"></span>${esc(d.name)}</h3>${chain(lg.trad, "", lg.pressure)}</div>
        <div class="flow-col alt" style="--c:${lens.color}"><h3><span class="lens-dot" style="background:${lens.color}"></span>${esc(lens.name)}</h3>${chain(lg.alt, "alt", -1)}</div>
      </div>
      <div class="card tension" style="margin-top:20px"><span class="eyebrow">At the tension point</span><h4>${esc(d.tensions[0].title)}</h4><p style="-webkit-line-clamp:unset;color:var(--ink)">${esc(d.tensions[0].text)}</p>${refs(d.tensions[0].refs)}</div></div>

      <div class="section-head" style="margin-top:40px"><div class="eyebrow">Pathfinder</div><h2>Answer the questions, see where you land</h2></div>
      <div class="filter-row">${Object.entries(TC.trees).map(([k, v]) => `<button class="chip" type="button" data-tree="${k}" aria-pressed="${k === state.tree}">${esc(v.title)}</button>`).join("")}</div>
      <div class="panel tree">
        <div class="trail">${state.trail.length ? state.trail.map(a => `<b>${esc(a)}</b>`).join(" → ") : "Start here"}</div>
        ${treeBody}
        ${state.trail.length ? `<div><button class="ghost" type="button" data-reset>Start again</button></div>` : ""}
      </div>`;
  }

  /* ---------- Matrix ---------- */
  function renderMatrix() {
    const lk = Object.keys(L);
    const rows = D.map(d => `<tr><th scope="row"><span class="lens-dot" style="background:${DC[d.id]}"></span>${esc(SHORT[d.id])}</th>${lk.map(k => {
      const r = d.responses.find(x => x.lens === k);
      if (!r) return `<td><span class="cell empty">—</span></td>`;
      return `<td><button class="cell" type="button" data-cell="${d.id}|${k}" title="${esc(L[k].name)} on ${esc(d.name)}: strength ${r.s} of 3" style="background:color-mix(in srgb, ${L[k].color} ${18 + r.s * 24}%, var(--surface));color:${r.s >= 2 ? "#fff" : "var(--ink)"}">${"●".repeat(r.s)}</button></td>`;
    }).join("")}</tr>`).join("");
    $("#v-matrix").innerHTML = `<div class="section-head"><div class="eyebrow">Comparison matrix</div><h2>Which lens challenges which doctrine, and how hard</h2>
      <p class="lede">Dots show how directly a lens answers a doctrine (one: indirect, three: a head-on alternative). Select a cell to read the argument.</p></div>
      <div class="panel scroll-x"><table class="matrix"><thead><tr><th></th>${lk.map(k => `<th scope="col"><span class="lens-dot" style="background:${L[k].color}"></span>${esc(L[k].short)}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  /* ---------- Contested texts ---------- */
  function renderTexts() {
    $("#v-texts").innerHTML = `<div class="section-head"><div class="eyebrow">Contested texts</div><h2>The same verse, read two ways</h2>
      <p class="lede">The key verses in each debate, with the traditional reading and the alternative reading side by side.</p></div>
      <div class="searchbar"><input id="q" type="search" placeholder="Search a verse or word, e.g. Matthew 25, aionios, rapture" aria-label="Search contested texts">
        <select id="topic" aria-label="Filter by doctrine"><option value="all">All doctrines</option>${D.map(d => `<option value="${d.id}">${esc(SHORT[d.id])}</option>`).join("")}</select></div>
      <div id="text-results" class="stack" style="gap:12px"></div>`;
    const draw = () => {
      const q = $("#q").value.trim().toLowerCase(), tp = $("#topic").value;
      const hits = TC.texts.filter(t => (tp === "all" || t.topic === tp) && (!q || (t.ref + t.trad + t.alt).toLowerCase().includes(q)));
      $("#text-results").innerHTML = hits.length ? hits.map(t => `<div class="card"><div class="resp-top"><h3 class="ref">${esc(t.ref)}</h3><div class="pills"><span class="pill">${esc(SHORT[t.topic])}</span>${lensPill(t.lens)}</div></div>
        <div class="versus"><div><span class="lbl" style="color:${DC[t.topic]}">Traditional reading</span><p>${esc(t.trad)}</p></div><div><span class="lbl" style="color:${L[t.lens].color}">Alternative reading</span><p>${esc(t.alt)}</p></div></div></div>`).join("")
        : `<p class="muted">No texts match. Try a book name such as "Romans" or clear the filter.</p>`;
    };
    $("#q").addEventListener("input", draw); $("#topic").addEventListener("change", draw); draw();
  }

  /* ---------- Spectrums ---------- */
  function renderSpectrum() {
    $("#v-spectrum").innerHTML = `<div class="section-head"><div class="eyebrow">Spectrums</div><h2>Where the fathers and modern voices stand</h2>
      <p class="lede">Each line runs between two poles. Gold: church fathers and historic figures. Blue: modern theologians. Dark: schools of thought. Positions are approximate.</p></div>
      <div class="stack">${TC.spectra.map(sp => `<div class="panel spec"><h3>${esc(sp.name)}</h3>
        <div class="spec-ends"><span>${esc(sp.left)}</span><span>${esc(sp.right)}</span></div>
        <div class="spec-track" style="height:72px"><div class="spec-bar" style="top:33px"></div>${sp.points.map((p, i) => `<span class="spec-pt ${p.kind}" style="left:${p.x}%;top:${i % 2 ? 40 : 10}px" title="${esc(p.label)}">${i + 1}</span>`).join("")}</div>
        <div class="spec-key">${sp.points.map((p, i) => `<span><b>${i + 1}</b>${esc(p.label)}</span>`).join("")}</div></div>`).join("")}</div>`;
  }

  /* ---------- Sources ---------- */
  function renderSources() {
    $("#v-sources").innerHTML = `<div class="section-head"><div class="eyebrow">Sources</div><h2>Reading on every side</h2>
      <p class="lede">Scholarship and primary texts used for this guide, including critics of the alternative views, so you can check the arguments yourself.</p></div>
      <div class="sources-list">${TC.sources.map(g => `<div class="panel"><h3>${esc(g.group)}</h3><ul>${g.items.map(s => `<li><a href="${esc(s.u)}" target="_blank" rel="noopener">${esc(s.t)}</a></li>`).join("")}</ul></div>`).join("")}</div>`;
  }

  /* ---------- Routing ---------- */
  const VIEWS = { overview: renderOverview, explorer: renderExplorer, study: renderStudy, words: renderWords, logic: renderLogic, lxx: renderLxx, rom9: renderRom9, tulip: renderTulip, map: renderMap, timeline: renderTimeline, flow: renderFlow, matrix: renderMatrix, texts: renderTexts, spectrum: renderSpectrum, sources: renderSources };
  let booted = false;
  function show(view, push) {
    const changed = state.view !== view;
    const run = () => {
      state.view = view;
      document.querySelectorAll(".view").forEach(v => v.hidden = v.id !== "v-" + view);
      document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t.dataset.view === view));
      VIEWS[view]();
      if (changed && booted) window.scrollTo({ top: 0 });
      if (push) { try { history.replaceState(null, "", "#" + (view === "explorer" ? state.doc : view)); } catch (e) { /* ignore */ } }
      document.dispatchEvent(new CustomEvent("tc:view", { detail: view }));
    };
    const calm = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (booted && changed && document.startViewTransition && !calm) document.startViewTransition(run); else run();
  }
  function openDoc(id, sub) { state.doc = id; state.sub = sub || "overview"; state.lensFilter = "all"; show("explorer", true); window.scrollTo({ top: 0 }); }

  document.addEventListener("click", e => {
    const t = e.target.closest("[data-view],[data-open],[data-doc],[data-sub],[data-lens],[data-tl],[data-flow],[data-tree],[data-next],[data-reset],[data-cell],[data-node],.tl-dot,[data-scheme-btn],[data-sdoc],[data-expand],[data-wt],[data-study],[data-ldoc],[data-lt],[data-r9cat],[data-r9jump],[data-jump],[data-petal],[data-tone],[data-flip],[data-rel]");
    if (!t) return;
    const ds = t.dataset;
    if (ds.view) show(ds.view, true);
    else if (ds.open) openDoc(ds.open);
    else if (ds.doc) { state.doc = ds.doc; state.lensFilter = "all"; renderExplorer(); try { history.replaceState(null, "", "#" + ds.doc); } catch (err) { /* ignore */ } }
    else if (ds.sub) { state.sub = ds.sub; renderExplorer(); }
    else if (ds.lens) { state.lensFilter = ds.lens; renderExplorer(); }
    else if (ds.tl) { state.tlFilter = ds.tl; renderTimeline(); }
    else if (ds.flow) { state.flowDoc = ds.flow; renderFlow(); }
    else if (ds.tree) { state.tree = ds.tree; state.treeNode = null; state.trail = []; renderFlow(); }
    else if (ds.next) { state.trail.push(ds.a); state.treeNode = ds.next; renderFlow(); }
    else if ("reset" in ds) { state.treeNode = null; state.trail = []; renderFlow(); }
    else if (ds.cell) { const [d, k] = ds.cell.split("|"); openDoc(d, "responses"); state.lensFilter = k; renderExplorer(); }
    else if (ds.node) { state.mapSel = state.mapSel === ds.node ? null : ds.node; renderMap(); }
    else if (t.classList.contains("tl-dot")) {
      const row = document.getElementById("ev-" + t.dataset.ev);
      if (row) { row.scrollIntoView({ behavior: "smooth", block: "center" }); row.classList.add("flash"); setTimeout(() => row.classList.remove("flash"), 1600); }
    }
    else if (ds.schemeBtn) setScheme(ds.schemeBtn);
    else if (ds.sdoc) { state.studyDoc = ds.sdoc; state.studyQ = ""; state.studyLens = "all"; renderStudy(); }
    else if (ds.study) { state.studyDoc = ds.study; state.studyQ = ""; state.studyLens = "all"; show("study", true); window.scrollTo({ top: 0 }); }
    else if (ds.expand) document.querySelectorAll("#study-list details").forEach(x => x.open = ds.expand === "1");
    else if (ds.petal) { state.tulipPetal = ds.petal; renderTulip(); document.querySelector(".petal-card")?.scrollIntoView({ behavior: "smooth", block: "nearest" }); }
    else if (ds.tone) { state.tulipTone = +ds.tone; document.querySelectorAll(".dial-b").forEach(b => b.setAttribute("aria-checked", String(+b.dataset.tone === state.tulipTone))); const k = document.querySelector(".dial-k"); if (k) k.style.setProperty("--t", state.tulipTone); }
    else if ("flip" in ds) { t.setAttribute("aria-pressed", String(t.getAttribute("aria-pressed") !== "true")); }
    else if (ds.rel) show(ds.rel, true);
    else if (ds.lt) { state.lxxTopic = ds.lt; renderLxx(); }
    else if (ds.r9cat) { state.r9cat = ds.r9cat; renderRom9(); document.querySelector("#v-rom9 .r9-sec:nth-of-type(5)")?.scrollIntoView({ behavior: "smooth" }); }
    else if (ds.r9jump) { state.r9cat = "all"; renderRom9(); const el = document.getElementById("pt-" + ds.r9jump); if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); el.classList.add("flash"); setTimeout(() => el.classList.remove("flash"), 1500); } }
    else if (ds.jump) { e.preventDefault(); state.lxxTopic = "all"; renderLxx(); const el = document.getElementById(ds.jump); if (el) { el.open = true; el.scrollIntoView({ behavior: "smooth", block: "start" }); } }
    else if (ds.ldoc) { state.logicDoc = ds.ldoc; renderLogic(); }
    else if (ds.wt) { state.wordTopic = ds.wt; renderWords(); }
  });
  document.addEventListener("keydown", e => {
    const n = e.target.closest && e.target.closest("[data-node]");
    const r = e.target.closest && e.target.closest("[data-r9jump],[data-petal]");
    if (r && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); r.dispatchEvent(new MouseEvent("click", { bubbles: true })); return; }
    if (n && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); n.dispatchEvent(new MouseEvent("click", { bubbles: true })); }
  });

  /* ---------- Colour schemes ---------- */
  const SCHEMES = [["auto", "Follow device", "linear-gradient(135deg,#f3f5f8 50%,#11151d 50%)"], ["vellum", "Vellum", "linear-gradient(135deg,#f3f5f8 55%,#2c46a8 55%)"],
    ["jordan", "Jordan", "linear-gradient(135deg,#eef6f5 55%,#0f7a70 55%)"], ["olive", "Olive", "linear-gradient(135deg,#f2f3ea 55%,#55702a 55%)"],
    ["nave", "Nave", "linear-gradient(135deg,#12122a 55%,#b9a6ff 55%)"], ["icon", "Icon", "linear-gradient(135deg,#1d0f10 55%,#e6b54a 55%)"], ["ember", "Ember", "linear-gradient(135deg,#16130f 55%,#f08a3c 55%)"]];
  function setScheme(s) {
    document.documentElement.setAttribute("data-scheme", s);
    document.querySelectorAll("[data-scheme-btn]").forEach(b => b.setAttribute("aria-pressed", b.dataset.schemeBtn === s));
    store.set("tc-scheme", s);
  }
  $("#swatches").innerHTML = SCHEMES.map(([k, n, g]) => `<button class="sw" type="button" data-scheme-btn="${k}" title="${n}" aria-label="Colour scheme: ${n}" aria-pressed="false" style="background:${g}"></button>`).join("");
  setScheme(store.get("tc-scheme") || "auto");

  const h = (location.hash || "").slice(1);
  if (byId[h]) { state.doc = h; show("explorer"); } else show(VIEWS[h] ? h : "overview");
  booted = true;
  window.TCApp = { show, openDoc, state, DC, SHORT, VIEWS };
})();
