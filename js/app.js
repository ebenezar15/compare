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

  const state = { view: "overview", doc: "psa", sub: "overview", lensFilter: "all", tlFilter: "all", flowDoc: "psa", tree: "hell", treeNode: null, trail: [], mapSel: null, studyDoc: "psa", studyQ: "", studyLens: "all", studyKind: "all", wordTopic: "all", wordQ: "", wordKind: "all", logicDoc: "psa" };

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
          <button class="card" data-open="${d.id}" type="button">
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
          <div class="pills"><span class="pill">${d.tensions.length} tensions</span><span class="pill">${d.fathers.length} fathers</span><span class="pill">${d.influences.length} outside influences</span><span class="pill">${d.responses.length} alternative answers</span></div></div>`;
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
      <div id="word-list" class="stack" style="gap:14px"></div>
      <div class="section-head" style="margin-top:36px"><div class="eyebrow">Check it yourself</div><h2>Lexicons, primary texts and studies</h2></div>
      <div class="panel"><ul class="lib">${TC.wordLibrary.map(r => `<li><a href="${esc(r.u)}" target="_blank" rel="noopener">${esc(r.t)}</a><span class="muted"> — ${esc(r.d)}</span></li>`).join("")}</ul>
        <p class="note" style="margin-top:14px">Standard print references: BDAG (Bauer-Danker Greek-English Lexicon, 3rd ed. 2000), LSJ, Louw-Nida, Moulton-Milligan's Vocabulary of the Greek Testament, TDNT (Kittel), BDB and HALOT for Hebrew, and TDOT/TLOT.</p></div>`;
    drawWords();
    $("#wq").addEventListener("input", e => { state.wordQ = e.target.value; drawWords(); });
    $("#wkind").addEventListener("change", e => { state.wordKind = e.target.value; drawWords(); });
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
  const VIEWS = { overview: renderOverview, explorer: renderExplorer, study: renderStudy, words: renderWords, logic: renderLogic, map: renderMap, timeline: renderTimeline, flow: renderFlow, matrix: renderMatrix, texts: renderTexts, spectrum: renderSpectrum, sources: renderSources };
  function show(view, push) {
    state.view = view;
    document.querySelectorAll(".view").forEach(v => v.hidden = v.id !== "v-" + view);
    document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t.dataset.view === view));
    VIEWS[view]();
    if (push) { try { history.replaceState(null, "", "#" + (view === "explorer" ? state.doc : view)); } catch (e) { /* ignore */ } }
  }
  function openDoc(id, sub) { state.doc = id; state.sub = sub || "overview"; state.lensFilter = "all"; show("explorer", true); window.scrollTo({ top: 0 }); }

  document.addEventListener("click", e => {
    const t = e.target.closest("[data-view],[data-open],[data-doc],[data-sub],[data-lens],[data-tl],[data-flow],[data-tree],[data-next],[data-reset],[data-cell],[data-node],.tl-dot,[data-scheme-btn],[data-sdoc],[data-expand],[data-wt],[data-study],[data-ldoc]");
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
    else if (ds.ldoc) { state.logicDoc = ds.ldoc; renderLogic(); }
    else if (ds.wt) { state.wordTopic = ds.wt; renderWords(); }
  });
  document.addEventListener("keydown", e => {
    const n = e.target.closest && e.target.closest("[data-node]");
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
})();
