/* ============================================================
   jorge-nunez.ipynb — portfolio
   ============================================================ */

/* ────────────────────────────────────────────────────────────
   CONTENT

   Projects, chips, kernel rows and commit heat below are pulled
   from the real github.com/ojschunki account (fetched 2026-09-01)
   and written from each repo's own README. Descriptions are
   yours — edit the voice freely, just keep them true.

   TIMELINE is still a template: GitHub has no work history, so
   nothing here could be filled in honestly. See the note there.

   - projects[] : cat must be one of "models" | "notebooks" | "tools"
                  title must match a key in GLYPHS (or it falls
                  back to the default 8x8 sprite)
   - timeline[] : newest first
   ──────────────────────────────────────────────────────────── */

const NAME = "Jorge Nunez";

const CHIPS = ["Python", "pandas", "scikit-learn", "Jupyter", "JavaScript"];

const REPO = "https://github.com/ojschunki/";

const PROJECTS = [
  {
    title: "Queens",
    cat: "tools",
    code: "$ python main.py board.png",
    meta: "Python · Aug 2026",
    out: "Solve the LinkedIn Queens puzzle from a screenshot. A backtracking CSP solver, plus a board reader that crops the grid, samples cell colours and clusters them into regions. Classic CV — no ML anywhere in it.",
    tags: ["Python", "computer-vision", "CSP"],
    slot: "puzzle → solved overlay",
    img: { src: "images/queens-solved.png", alt: "A solved 9×9 Queens board with nine crowns placed." }
  },
  {
    title: "Snake-RL",
    cat: "models",
    code: "$ python train.py",
    meta: "Python · May 2026",
    out: "Teaching a snake to play itself. Three files — snake.py is the environment, agent.py is the policy, train.py is the loop where one slowly beats the other.",
    tags: ["Python", "RL"],
    slot: "score per episode"
  },
  {
    title: "grad-countdown",
    cat: "tools",
    code: "$ open index.html",
    meta: "JavaScript · May 2026",
    out: "Three files, no framework, counting down to graduation. index.html, script.js, style.css and nothing else.",
    tags: ["JavaScript", "tiny"],
    slot: "countdown page"
  },
  {
    title: "F1-Race-Analytics",
    cat: "tools",
    code: "dashboard.load(\"Miami GP\", 2024)",
    meta: "Python · Apr 2026",
    out: "An interactive dashboard for one race at a time. Lap times, sector splits and tyre compounds pulled from FastF1, cached locally, with pit and opening laps filtered out so the plots stay readable.",
    tags: ["Python", "FastF1", "dashboard"],
    slot: "lap time dashboard",
    tape: true
  },
  {
    title: "Predicting-All-NBA",
    repo: "Predicting-All-NBA-Players-using-Binary-Classification-Methods",
    cat: "notebooks",
    code: "all_nba.fit(box_scores)",
    meta: "Notebook · Apr 2026",
    out: "Binary classification over season box scores to predict All-NBA selection. Decision tree and random forest, with the class-distribution, correlation and feature-importance charts committed alongside the notebook.",
    tags: ["Notebook", "scikit-learn", "NBA"],
    slot: "feature importance"
  },
  {
    title: "Charts-and-Diagrams-using-Gemini",
    cat: "notebooks",
    code: "gemini.chart(\"revenue by quarter\")",
    meta: "Notebook · Apr 2026",
    out: "Getting Gemini to turn a natural-language prompt into a chart or diagram spec, checked against ChartQA. A CAP6640 final project that turned out to be mostly prompt engineering.",
    tags: ["Notebook", "Gemini", "NLP"],
    slot: "prompt → chart"
  },
  {
    title: "Animated-Play-By-Play",
    cat: "notebooks",
    code: "playbyplay.animate(game_id)",
    meta: "Notebook · Mar 2026",
    out: "A 3D animated shot chart of Jimmy Butler's 56-point playoff game. Legacy NBA coordinates converted into real court geometry, then animated in true sequence under a live scoreboard.",
    tags: ["Notebook", "viz", "NBA"],
    slot: "demo.gif",
    tape: true
  },
  {
    title: "Cafe-Sales-EDA",
    cat: "notebooks",
    code: "cafe.clean().summarise()",
    meta: "Notebook · Jan 2026",
    out: "Exploratory analysis of a deliberately dirty cafe POS dataset. Missing values and inconsistent formats first, then sales volume, top items and time-of-day trends once it was readable.",
    tags: ["Notebook", "pandas", "EDA"],
    slot: "sales over time",
    tape: true
  },
  {
    title: "Credit-Card-Default-Classification",
    cat: "models",
    code: "cc_default.evaluate(models)",
    meta: "Notebook · Dec 2025",
    out: "Predicting next-payment default on the UCI credit card dataset — 30,000 samples, several classical classifiers compared on the usual metrics. STA5703 final project.",
    tags: ["Notebook", "scikit-learn", "2025"],
    slot: "model comparison"
  },
  {
    // Not on GitHub — from the résumé. No repo link.
    title: "CNN-on-Doodles",
    cat: "models",
    code: "doodles.predict(sketch)",
    meta: "TensorFlow · Sep 2024",
    out: "A multilayer TensorFlow model that recognises hand-drawn doodles at 95% accuracy. Most of the work went into cleaning and filtering the dataset down to something that would train in a sane amount of time.",
    tags: ["TensorFlow", "CNN", "2024"],
    slot: "doodle → label"
  }
];

// Projects that live only on the résumé, not in a repo.
const NO_REPO = new Set(["CNN-on-Doodles"]);

/* From your résumé (the applied-ML version). One real job, so the
   section covers the degrees too — hence "Where I've been" rather
   than "worked" in index.html. */
const TIMELINE = [
  {
    role: "Graduate Research Assistant",
    org: "VARLAB",
    years: "Jun 2025 — now",
    place: "Orlando, FL",
    desc: "Virtual environment simulations in Unity, built to measure performance and feed research outcomes.",
    chips: ["Unity", "C#", "XR"]
  },
  {
    role: "MS, Computer Science",
    org: "University of Central Florida",
    years: "2024 — 2026",
    place: "Orlando, FL",
    desc: "GPA 3.774. Machine learning across intro, algorithms and current topics, advanced AI, and data mining methodology.",
    chips: ["machine learning", "advanced AI", "data mining"]
  },
  {
    role: "BS, Computer Science",
    org: "University of Central Florida",
    years: "2020 — 2024",
    place: "Orlando, FL",
    desc: "GPA 3.343, Burnett Honors Program. Three-time Dean's List, and third of twenty-four in the 2023 Team Dynamics coding competition.",
    chips: ["Burnett Honors", "Dean's List ×3", "Provost Scholarship"]
  }
];

const KERNEL = [
  ["user", "ojschunki"],
  ["location", "Weston, FL"],
  ["education", "MS CS, UCF '26"],
  ["repos", "16 public"],
  ["last push", "Aug 2026"],
  ["the 2026 tape", "3 of 12"],
  ["open to", "side projects"]
];

// Real weekly commit counts, last 40 weeks, from the GitHub
// contribution calendar (79 contributions in the last year).
const COMMITS = [17, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 5, 3, 0, 0, 0, 5, 0, 4,
                 0, 5, 2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 12, 4, 0, 6, 1, 0];

const DUCKS = [
  { l: "2%",  t: "8%",  px: 9, ph: 0.0, rot: -8,  label: "solving a puzzle"    },
  { l: "22%", t: "46%", px: 8, ph: 1.1, rot: 5,   label: "reading telemetry",   depth: 0.16, flip: true },
  { l: "40%", t: "14%", px: 6, ph: 3.0, rot: -14, label: "waiting on a build",  depth: 0.36, flip: true },
  { l: "58%", t: "58%", px: 5, ph: 0.7, rot: -5,  label: "teaching a snake",    depth: 0.56 },
  { l: "80%", t: "22%", px: 4, ph: 2.7, rot: -11, label: "cleaning a dataset",  depth: 0.80, flip: true }
];

/* ── end content ─────────────────────────────────────────── */


/* ── pixel art ───────────────────────────────────────────── */

const PAL = { ".": "transparent", X: "#141310", O: "#eeb07c", W: "#ffffff", G: "rgba(0,0,0,.3)", K: "#141310" };
const PASTELS = ["#f3c9a4", "#a8d8c4", "#c9b8e4", "#bcd6ee", "#f2e2a8"];

// 16 wide. A = idle, B = hover (legs out), BLINK = eyes closed.
const DUCK_A = ["......XXXX......", ".....XWWWWX.....", "....XWWKWWWX....", "....XWWKWWWXOOO.", "....XWWWWWWXOOO.", ".....XWWWWX.....", "......XWWX......", "....XXXWWXXX....", "..XXWWWWWWWWXX..", ".XWWWWWWWWWWWWX.", "XWWWWWWWWWWWWWX.", ".XWWWWWWWWWWWX..", "..XXWWWWWWWXX...", "....OO...OO....."];
const DUCK_B = ["......XXXX......", ".....XWWWWX.....", "....XWWKWWWX....", "....XWWKWWWXOOO.", "....XWWWWWWXOOO.", ".....XWWWWX.....", "......XWWX......", "....XXXWWXXX....", "..XXWWWWWWWWXX..", ".XWWWXXXXWWWWWX.", "XWWWXWWWWXWWWWX.", ".XWWWXXXXWWWWX..", "..XXWWWWWWWXX...", "...OO.....OO...."];
const DUCK_BLINK = ["......XXXX......", ".....XWWWWX.....", "....XWWWWWWX....", "....XWWKKWWXOOO.", "....XWWWWWWXOOO.", ".....XWWWWX.....", "......XWWX......", "....XXXWWXXX....", "..XXWWWWWWWWXX..", ".XWWWWWWWWWWWWX.", "XWWWWWWWWWWWWWX.", ".XWWWWWWWWWWWX..", "..XXWWWWWWWXX...", "....OO...OO....."];

// 8x8 per-project sprites, keyed by project title.
const GLYPH_FALLBACK = ["..XX....", "..XX.XX.", "X.XX.XX.", "X.XXXXX.", "XXXXXX..", ".XXXX...", "..XX....", "..XX...."];
const GLYPHS = {
  // crown
  "Queens":                           ["X..XX..X", "X.XXXX.X", "XXXXXXXX", "XXXXXXXX", ".XXXXXX.", ".XXXXXX.", "XXXXXXXX", "........"],
  // serpentine
  "Snake-RL":                         [".XXXXX..", ".....X..", ".XXXXX..", ".X......", ".XXXXX..", ".....X..", ".XXXXXX.", "........"],
  // graduation cap
  "grad-countdown":                   ["...XX...", "..XXXX..", ".XXXXXX.", "XXXXXXXX", ".XXXXXX.", "..X..X.X", ".....X.X", ".....XX."],
  // checkered flag on a pole
  "F1-Race-Analytics":                ["X.......", "XXX.XX..", "X..XX.XX", "XXX.XX..", "X..XX.XX", "XXX.....", "X.......", "X......."],
  // basketball
  "Predicting-All-NBA":               ["..XXXX..", ".XX..XX.", "XX.XX.XX", "X..XX..X", "X..XX..X", "XX.XX.XX", ".XX..XX.", "..XXXX.."],
  // bar chart
  "Charts-and-Diagrams-using-Gemini": ["........", ".....XX.", "...XXXX.", "...XXXX.", ".XXXXXX.", ".XXXXXX.", ".XXXXXX.", "XXXXXXXX"],
  // half court
  "Animated-Play-By-Play":            ["XXXXXXXX", "X......X", "X..XX..X", "X.X..X.X", "X.X..X.X", "X..XX..X", "X......X", "XXXXXXXX"],
  // coffee cup
  "Cafe-Sales-EDA":                   ["..X.X...", "...X.X..", "........", "XXXXXX..", "X....XXX", "X....X.X", "X....XX.", ".XXXX..."],
  // card with a stripe
  "Credit-Card-Default-Classification": ["........", "XXXXXXXX", "X......X", "XXXXXXXX", "X......X", "X.XX...X", "X......X", "XXXXXXXX"],
  // pencil stroke
  "CNN-on-Doodles":                   ["......XX", ".....XXX", "....XXX.", "...XXX..", "..XXX...", ".XXX....", "XXX.....", "XX......"]
};

/** Build a sprite grid element from rows of palette chars. */
function sprite(rows, px, cols, accent) {
  const el = document.createElement("div");
  el.className = "duck__pose";
  el.style.gridTemplateColumns = `repeat(${cols}, ${px}px)`;
  el.style.gridAutoRows = px + "px";
  const frag = document.createDocumentFragment();
  rows.forEach((row, y) => {
    row.split("").forEach((ch, x) => {
      const cell = document.createElement("div");
      cell.className = "duck__px";
      let c = PAL[ch] || "transparent";
      if (accent && ch === "X" && (x + y) % 9 === 0) c = accent;
      cell.style.background = c;
      frag.appendChild(cell);
    });
  });
  el.appendChild(frag);
  return el;
}

const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const el = (id) => document.getElementById(id);


/* ── typed name ──────────────────────────────────────────── */

(function typeName() {
  const target = el("typed");
  if (REDUCED) { target.textContent = NAME; return; }
  let i = 0;
  const t = setInterval(() => {
    target.textContent = NAME.slice(0, ++i);
    if (i >= NAME.length) clearInterval(t);
  }, 85);
})();


/* ── hero chips ──────────────────────────────────────────── */

el("hero-chips").innerHTML = CHIPS.map((t) => `<span class="chip">${t}</span>`).join("");


/* ── duck field ──────────────────────────────────────────── */

(function ducks() {
  const field = el("duckfield");
  const built = DUCKS.map((d, i) => {
    const depth = d.depth || 0;
    const wrap = document.createElement("div");
    wrap.className = "duck";
    wrap.style.left = d.l;
    wrap.style.top = d.t;
    wrap.style.opacity = (1 - depth * 0.6).toFixed(2);

    const poses = {
      a: sprite(DUCK_A, d.px, 16),
      b: sprite(DUCK_B, d.px, 16),
      blink: sprite(DUCK_BLINK, d.px, 16)
    };
    poses.b.hidden = true;
    poses.blink.hidden = true;
    wrap.append(poses.a, poses.b, poses.blink);

    const label = document.createElement("div");
    label.className = "duck__label";
    label.textContent = d.label;
    // scaleX un-mirrors the text inside a flipped duck's wrapper.
    label.style.transform = `translateX(-50%) scaleX(${d.flip ? -1 : 1})`;
    wrap.appendChild(label);

    const duck = { cfg: d, i, depth, wrap, poses, label, hover: false };
    wrap.addEventListener("mouseenter", () => setHover(duck, true));
    wrap.addEventListener("mouseleave", () => setHover(duck, false));
    field.appendChild(wrap);
    return duck;
  });

  function show(duck, key) {
    for (const k in duck.poses) duck.poses[k].hidden = k !== key;
  }

  function pose(duck) {
    if (duck.hover) return "b";
    return blinking && duck.i % 3 === 0 ? "blink" : "a";
  }

  function setHover(duck, on) {
    duck.hover = on;
    duck.wrap.style.opacity = on ? "1" : (1 - duck.depth * 0.6).toFixed(2);
    duck.label.style.opacity = on ? "1" : "0";
    show(duck, pose(duck));
    if (REDUCED) place(duck, 0);
  }

  function place(duck, frame) {
    const { cfg, hover } = duck;
    const scale = hover ? 1.14 : 1;
    const sx = (cfg.flip ? -1 : 1) * scale;
    const rot = hover || REDUCED ? (hover ? 0 : cfg.rot) : cfg.rot + Math.sin(frame / 24 + cfg.ph) * 3.5;
    const y = REDUCED ? 0 : Math.sin(frame / 20 + cfg.ph) * (5 + cfg.px * 0.5);
    duck.wrap.style.transform =
      `translateY(${y.toFixed(1)}px) rotate(${rot.toFixed(1)}deg) scale(${sx}, ${scale})`;
  }

  // random blink, applied to every third duck
  let blinking = false;
  (function blinkLoop() {
    setTimeout(() => {
      blinking = true;
      built.forEach((d) => show(d, pose(d)));
      setTimeout(() => {
        blinking = false;
        built.forEach((d) => show(d, pose(d)));
        blinkLoop();
      }, 160);
    }, 3200 + Math.random() * 2600);
  })();

  if (REDUCED) { built.forEach((d) => place(d, 0)); return; }

  // The mock ticked every 34ms; advance the frame counter at that rate
  // regardless of the display's refresh rate so the bob keeps its speed.
  let frame = 0, last = performance.now();
  (function tick(now) {
    frame += (now - last) / 34;
    last = now;
    built.forEach((d) => place(d, frame));
    requestAnimationFrame(tick);
  })(last);
})();


/* ── the pile: filters + runnable cells ──────────────────── */

const CATS = [
  { key: "all", label: "all" },
  { key: "models", label: "/ models" },
  { key: "notebooks", label: "/ notebooks" },
  { key: "tools", label: "/ tools" }
];

const ran = { "Queens": true };
let activeCat = 0;

function renderFilters() {
  el("filters").innerHTML = CATS.map((c, i) => {
    const n = c.key === "all"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.cat === c.key).length;
    return `<button class="filter${i === activeCat ? " is-on" : ""}" data-cat="${i}">`
      + `${c.label} <span class="filter__n">${String(n).padStart(2, "0")}</span></button>`;
  }).join("");
}

function renderCells() {
  const list = PROJECTS.filter((p) => CATS[activeCat].key === "all" || p.cat === CATS[activeCat].key);
  const host = el("cells");
  host.innerHTML = "";

  list.forEach((p) => {
    const idx = PROJECTS.indexOf(p);
    const isRan = !!ran[p.title];

    const cell = document.createElement("div");
    cell.className = "cell" + (isRan ? " is-ran" : "");
    cell.innerHTML = `
      <div class="cell__head">
        <button class="cell__run" data-run="${p.title}"
                aria-expanded="${isRan}" aria-label="${isRan ? "Collapse" : "Run"} ${p.title}"
        >${isRan ? "[1]" : "▶"}</button>
        <div class="cell__glyph"></div>
        <pre class="cell__code">${escapeHtml(p.code)}</pre>
        ${p.tape ? `<span class="cell__tape" title="Part of the 2026 Monthly Series"
          ><i class="cell__tape-dot"></i><span class="cell__tape-label"
          >2026 <span class="cell__tape-long">Monthly </span>Series</span></span>` : ""}
        <span class="cell__meta">${p.meta}</span>
      </div>`;

    const glyph = cell.querySelector(".cell__glyph");
    const g = sprite(GLYPHS[p.title] || GLYPH_FALLBACK, 4, 8, PASTELS[idx % 5]);
    g.style.display = "contents"; // let the parent grid own the layout
    glyph.appendChild(g);

    if (isRan) {
      const out = document.createElement("div");
      out.className = "cell__out";
      out.innerHTML = `
        ${p.img
          ? `<div class="cell__slot cell__slot--img"><img src="${p.img.src}" alt="${p.img.alt}"></div>`
          : `<div class="cell__slot drop"><span>${p.slot}</span></div>`}
        <div>
          <h3 class="cell__title">${p.title}</h3>
          <p class="cell__desc">${p.out}</p>
          <div class="tags">${p.tags.map((t, i) =>
            `<span class="tag-pill" style="background:${PASTELS[(idx + i) % 5]}">${t}</span>`
          ).join("")}</div>
          ${NO_REPO.has(p.title) ? "" : `<div class="linkrow linkrow--tight">
            <a class="link--underline" href="${REPO}${p.repo || p.title}"
               target="_blank" rel="noopener">view repo ↗</a>
          </div>`}
        </div>`;
      cell.appendChild(out);
    }

    host.appendChild(cell);
  });

  el("ran-count").textContent = Object.values(ran).filter(Boolean).length;
}

function escapeHtml(s) {
  return s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}

el("filters").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cat]");
  if (!btn) return;
  activeCat = +btn.dataset.cat;
  renderFilters();
  renderCells();
});

el("cells").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-run]");
  if (!btn) return;
  const title = btn.dataset.run;
  ran[title] = !ran[title];
  renderCells();
});

renderFilters();
renderCells();


/* ── about: kernel panel + commit heat ───────────────────── */

el("kernel-rows").innerHTML = KERNEL.map(([k, v]) =>
  `<div class="kernel__row"><span class="kernel__k">${k}</span><span>${v}</span></div>`
).join("");

const PEAK = Math.max(...COMMITS, 1);
el("heat").innerHTML = COMMITS.map((n) => {
  const h = n === 0 ? 3 : Math.round(6 + (n / PEAK) * 27);
  const c = n === 0 ? "#dfe3e6" : n >= 8 ? "#f3c9a4" : n >= 3 ? "#c9b8e4" : "#d7dbe0";
  return `<i style="height:${h}px;background:${c}" title="${n} commit${n === 1 ? "" : "s"}"></i>`;
}).join("");


/* ── résumé timeline ─────────────────────────────────────── */

el("timeline").innerHTML = TIMELINE.map((j) => `
  <div class="job">
    <div class="job__logo"></div>
    <div>
      <div class="job__head">
        <h3 class="job__role">${j.role}</h3>
        <span class="job__org">@ ${j.org}</span>
      </div>
      <p class="job__desc">${j.desc}</p>
      <div class="job__chips">${j.chips.map((c) => `<span class="job__chip">${c}</span>`).join("")}</div>
    </div>
    <div class="job__when">${j.years}<br><span class="job__place">${j.place}</span></div>
  </div>`).join("");


/* ── nav: highlight the section you're looking at ────────── */

(function navSpy() {
  const links = [...document.querySelectorAll(".nav__links a")];
  const targets = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-20% 0px -70% 0px" });

  targets.forEach((t) => io.observe(t));
})();
