/* ===============================================================
   Adina Halter portfolio: rendering, routing, and interaction.

   Project content lives in data/projects.json. To add a project,
   append an object to that array. Only id, title, medium, summary,
   and status are required; every section of the project page
   renders only when its data exists.
================================================================ */

/* ---------------------------- Config --------------------------- */
const REPO = "https://github.com/haltersweb/generative-agentic-ai";
const RAW = "https://raw.githubusercontent.com/haltersweb/generative-agentic-ai/master/";
const BLOB = REPO + "/blob/master/";
const DATA_URL = "data/projects.json";

let PROJECTS = [];

/* --------------------------- Helpers --------------------------- */
const main = document.getElementById("main");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const num = i => String(i + 1).padStart(2, "0");
/* "0–12s" is read as "0 dash 12 s" by some screen readers; give them words */
const spokenTime = t => {
  const m = String(t).match(/^(\d+)\s*[–-]\s*(\d+)\s*s$/);
  return m ? `${m[1]} to ${m[2]} seconds` : t;
};
let lastProjectId = null;
let activeFilter = "All";

/* Images load from the repo when hosted on GitHub Pages, fall back to
   raw.githubusercontent.com when opened locally, then to initials. */
function photo(p, cls = "") {
  return `<img class="${cls}" src="${esc(p.image)}" alt="${esc(p.alt || `Casting headshot of ${p.name}, an AI-generated fictional performer`)}" loading="lazy" decoding="async"
    data-raw="${esc(RAW + p.image)}" data-initials="${esc(p.initials)}" onerror="imgFallback(this)">`;
}
function imgFallback(img) {
  if (img.dataset.raw && img.src !== img.dataset.raw) { img.src = img.dataset.raw; img.dataset.raw = ""; return; }
  const d = document.createElement("div");
  d.className = "initials"; d.setAttribute("aria-hidden", "true"); d.textContent = img.dataset.initials || "";
  img.replaceWith(d);
}

/* ------------------------- Index view -------------------------- */
function renderIndex(focusTarget) {
  const media = ["All", ...new Set(PROJECTS.flatMap(p => p.medium))];
  const list = PROJECTS.map((p, i) => ({ p, i })).filter(({ p }) => activeFilter === "All" || p.medium.includes(activeFilter));

  main.innerHTML = `
    <div class="view-enter">
      <section class="wrap intro" aria-labelledby="intro-title">
        <h1 id="intro-title" tabindex="-1">Directing machines that make things.</h1>
        <p>A growing record of my work in generative and agentic AI. Each project is shared with the prompts, direction, and decisions behind it, so you can see how the work was made, not just how it turned out.</p>
      </section>

      <section class="wrap" aria-labelledby="work-title" id="work">
        <div class="toolbar">
          <h2 id="work-title">Projects</h2>
          <div class="filters" role="group" aria-label="Filter projects by medium">
            ${media.map(m => {
              const n = m === "All" ? PROJECTS.length : PROJECTS.filter(p => p.medium.includes(m)).length;
              return `<button class="chip" data-filter="${esc(m)}" aria-pressed="${m === activeFilter}">${esc(m)}<span class="count"><span class="sr-only">, </span>${n}<span class="sr-only"> ${n === 1 ? "project" : "projects"}</span></span></button>`;
            }).join("")}
          </div>
        </div>
        ${list.length ? `<ol class="entries" role="list">
          ${list.map(({ p, i }) => `
            <li class="entry">
              <div class="entry-row">
                <span class="entry-num" aria-hidden="true">${num(i)}</span>
                <div>
                  <h3><a class="entry-link" href="#/project/${esc(p.id)}">${esc(p.title)}</a></h3>
                  <p>${esc(p.summary)}</p>
                  <div class="tags">
                    <span class="tag status">${esc(p.status)}</span>
                    ${p.medium.map(m => `<span class="tag">${esc(m)}</span>`).join("")}
                    ${(p.tools || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}
                  </div>
                </div>
                ${p.performers ? `<div class="entry-thumbs" aria-hidden="true">${p.performers.slice(0, 2).map(pf => `<div class="thumb">${photo(pf)}</div>`).join("")}</div>` : "<div></div>"}
              </div>
            </li>`).join("")}
          ${activeFilter === "All" ? `
            <li class="entry upcoming">
              <div class="upcoming-inner">
                <span class="entry-num" aria-hidden="true">${num(PROJECTS.length)}</span>
                <p>The next project is in development. Agent workflows and new media are on the way.</p>
              </div>
            </li>` : ""}
        </ol>` : `<p class="empty">Nothing in this medium yet. <button class="chip" data-filter="All">Show all projects</button></p>`}
      </section>

      <section class="wrap about" id="about" aria-labelledby="about-title">
        <h2 id="about-title">About this work</h2>
        <div>
          <p>I'm Adina Halter. This portfolio collects my experiments in generative and agentic AI, from designing fictional performers to directing them through repeatable, honest tests.</p>
          <p>My approach is the same across media: define what good looks like before generating anything, keep the prompts and direction in the open, and only report results I've actually observed.</p>
          <p><a href="${REPO}">Follow the work on GitHub</a></p>
        </div>
      </section>
    </div>`;

  main.querySelectorAll("[data-filter]").forEach(b => b.addEventListener("click", () => {
    activeFilter = b.dataset.filter;
    renderIndex("filter");
    const shown = activeFilter === "All" ? PROJECTS.length : PROJECTS.filter(p => p.medium.includes(activeFilter)).length;
    document.getElementById("filter-status").textContent =
      `${activeFilter === "All" ? "All projects" : activeFilter}: ${shown} ${shown === 1 ? "project" : "projects"} shown`;
  }));

  document.title = "Adina Halter — Generative and agentic AI";
  setNav(focusTarget === "about" ? "about" : "work");
  if (focusTarget === "filter") {
    const btn = main.querySelector(`[data-filter="${CSS.escape(activeFilter)}"]`);
    if (btn) btn.focus();
  } else if (focusTarget === "return") {
    const from = lastProjectId && main.querySelector(`.entry-link[href="#/project/${CSS.escape(lastProjectId)}"]`);
    if (from) {
      from.focus({ preventScroll: true });
      from.closest(".entry").scrollIntoView({ block: "center" });
    } else {
      window.scrollTo(0, 0);
      document.getElementById("intro-title").focus({ preventScroll: true });
    }
  } else if (focusTarget === "about") {
    document.getElementById("about").scrollIntoView();
    document.getElementById("about-title").setAttribute("tabindex", "-1");
    document.getElementById("about-title").focus({ preventScroll: true });
  }
}

/* ------------------------ Project view ------------------------- */
function renderProject(p) {
  lastProjectId = p.id;
  const i = PROJECTS.indexOf(p);
  const prev = PROJECTS[i - 1], next = PROJECTS[i + 1];

  main.innerHTML = `
    <article class="view-enter" aria-labelledby="project-title">
      <div class="screen">
        <div class="wrap">
          <a class="back" href="#/"><span aria-hidden="true">&larr;</span> All projects</a>
          <header class="premiere">
            <p class="status-line">Project ${num(i)}, ${esc(p.status.toLowerCase())}${p.started ? `, started ${esc(p.started)}` : ""}</p>
            <h1 id="project-title" tabindex="-1">${esc(p.title)}</h1>
            ${p.logline ? `<p class="logline">${esc(p.logline)}</p>` : ""}
            <p>${esc(p.description || p.summary)}</p>
            <div class="actions">
              ${p.tests ? `<a class="btn primary" href="#auditions" data-scroll>See the auditions</a>` : ""}
              ${p.folder ? `<a class="btn ghost" href="${REPO}/tree/master/${esc(p.folder)}">Browse the files on GitHub</a>` : ""}
            </div>
          </header>

          ${p.performers ? `
          <section class="cast" aria-labelledby="cast-title">
            <div class="cast-head">
              <h2 id="cast-title">${esc(p.castTitle || "Cast")}</h2>
              ${p.castNote ? `<p>${esc(p.castNote)}</p>` : ""}
            </div>
            <div class="performers">
              ${p.performers.map((pf, k) => `
                <div class="performer">
                  <button class="performer-photo" data-lightbox="${k}" aria-label="Enlarge headshot and prompt for ${esc(pf.name)}">
                    ${photo(pf)}<span class="enlarge" aria-hidden="true">Enlarge</span>
                  </button>
                  <div class="performer-body">
                    <h3>${esc(pf.name)}</h3>
                    ${pf.alt ? `<p class="sr-only">${esc(pf.alt)}</p>` : ""}
                    <p class="desc">${esc(pf.desc)}</p>
                    <p class="pf-label">Objective</p>
                    <p class="pf-objective">${esc(pf.objective)}</p>
                    ${pf.voice ? `<p class="voice">Proposed voice: ${esc(pf.voice.charAt(0).toLowerCase() + pf.voice.slice(1))}</p>` : ""}
                    <span class="lock">Candidate, not final</span>
                  </div>
                </div>`).join("")}
            </div>
          </section>` : ""}
        </div>
      </div>

      <div class="wrap">
        ${p.tests ? `
        <section class="section" id="auditions" aria-labelledby="auditions-title">
          <div class="section-head">
            <h2 id="auditions-title">The auditions</h2>
            <p>Both performers get the same scenes, camera, light, and timing, so the only variable is the performance. Switch between them to compare how each one is directed.</p>
          </div>
          <div class="tests">
            ${p.tests.map((t, ti) => `
              <div class="test">
                <div class="test-meta">
                  <h3>${esc(t.title)}</h3>
                  <p>${esc(t.length)}</p>
                  <p>${esc(t.setting)}</p>
                  <p><strong>What we're testing:</strong> ${esc(t.question)}</p>
                </div>
                <div class="reading">
                  <div class="switch" role="tablist" aria-label="${esc(t.title)} readings">
                    ${t.readings.map((r, ri) => `<button role="tab" id="tab-${ti}-${ri}" aria-controls="panel-${ti}-${ri}" aria-selected="${ri === 0}" tabindex="${ri === 0 ? 0 : -1}">${esc(r.performer)}</button>`).join("")}
                  </div>
                  ${t.readings.map((r, ri) => `
                    <div class="panel" role="tabpanel" id="panel-${ti}-${ri}" aria-labelledby="tab-${ti}-${ri}" tabindex="0" ${ri === 0 ? "" : "hidden"}>
                      <p class="panel-label">Objective for ${esc(r.performer)}</p>
                      <p class="objective">${esc(r.objective)}</p>
                      <ol class="beats" role="list">
                        ${r.beats.map(([time, text]) => `<li><span class="time"><span aria-hidden="true">${esc(time)}</span><span class="sr-only">${esc(spokenTime(time))}</span></span><span>${esc(text)}</span></li>`).join("")}
                      </ol>
                      ${r.watch ? `<p class="watch"><strong>Watch for:</strong> ${esc(r.watch)}</p>` : ""}
                    </div>`).join("")}
                </div>
              </div>`).join("")}
          </div>
          ${p.honesty ? `<p class="note"><strong>Where this stands:</strong> ${esc(p.honesty)}</p>` : ""}
        </section>` : ""}

        ${p.pipeline ? `
        <section class="section" aria-labelledby="progress-title">
          <div class="section-head">
            <h2 id="progress-title">Progress</h2>
            <p>What's finished, what's underway, and what comes next.</p>
          </div>
          <ol class="pipeline" role="list">
            ${p.pipeline.map(s => `
              <li class="${esc(s.state)}">
                <span class="state"><span class="dot" aria-hidden="true"></span>${s.state === "done" ? "Done" : s.state === "current" ? "In progress" : "Up next"}</span>
                <h3>${esc(s.stage)}</h3>
                <p>${esc(s.note)}</p>
              </li>`).join("")}
          </ol>
        </section>` : ""}

        ${p.files ? `
        <section class="section" aria-labelledby="files-title">
          <div class="section-head">
            <h2 id="files-title">Process files</h2>
            <p>The working documents behind this project, open on GitHub. They're shared for reference; please check the licensing guide before reusing anything.</p>
          </div>
          <ul class="files" role="list">
            ${p.files.map(f => `
              <li>
                <div>
                  <a class="file-link" href="${BLOB}${esc(f.path)}"><span class="file-name">${esc(f.name)}</span><span class="sr-only">, ${esc(f.type)}</span></a>
                  <p class="file-desc">${esc(f.desc)}</p>
                </div>
                <span class="file-type" aria-hidden="true">${esc(f.type)}</span>
              </li>`).join("")}
          </ul>
        </section>` : ""}

        <nav class="pager" aria-label="More projects">
          ${prev ? `<a href="#/project/${esc(prev.id)}"><small>Previous project</small><span>${esc(prev.title)}</span></a>` : `<a href="#/"><small>Back to</small><span>All projects</span></a>`}
          ${next ? `<a href="#/project/${esc(next.id)}" style="text-align:right"><small>Next project</small><span>${esc(next.title)}</span></a>` : `<a href="${REPO}" style="text-align:right"><small>More on the way</small><span>Follow on GitHub</span></a>`}
        </nav>
      </div>
    </article>`;

  /* Tabs with arrow-key support */
  main.querySelectorAll('[role="tablist"]').forEach(list => {
    const tabs = [...list.querySelectorAll('[role="tab"]')];
    const select = t => {
      tabs.forEach(x => {
        const on = x === t;
        x.setAttribute("aria-selected", on); x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute("aria-controls")).hidden = !on;
      });
    };
    tabs.forEach((t, k) => {
      t.addEventListener("click", () => select(t));
      t.addEventListener("keydown", e => {
        let n;
        if (e.key === "ArrowRight") n = tabs[(k + 1) % tabs.length];
        else if (e.key === "ArrowLeft") n = tabs[(k - 1 + tabs.length) % tabs.length];
        else if (e.key === "Home") n = tabs[0];
        else if (e.key === "End") n = tabs[tabs.length - 1];
        else return;
        e.preventDefault();
        select(n); n.focus();
      });
    });
  });

  main.querySelectorAll("[data-scroll]").forEach(a => a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.getElementById(a.getAttribute("href").slice(1));
    const heading = target.querySelector("h2") || target;
    heading.tabIndex = -1;
    target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    heading.focus({ preventScroll: true });
  }));

  main.querySelectorAll("[data-lightbox]").forEach(b => b.addEventListener("click", () => openLightbox(p.performers[+b.dataset.lightbox], b)));

  document.title = `${p.title} — Adina Halter`;
  setNav("work");
  window.scrollTo(0, 0);
  document.getElementById("project-title").focus({ preventScroll: true });
}

/* -------------------------- Lightbox --------------------------- */
const lb = document.getElementById("lightbox");
let lbReturn = null;
function openLightbox(pf, opener) {
  lbReturn = opener;
  document.getElementById("lb-img").innerHTML = photo(pf);
  document.getElementById("lb-title").textContent = pf.name;
  document.getElementById("lb-desc").textContent = pf.desc;
  document.getElementById("lb-prompt").textContent = pf.prompt || "";
  document.getElementById("lb-status").textContent = "An original fictional AI performer. This headshot is a candidate reference and has not been approved as a final identity.";
  lb.showModal();
}
document.getElementById("lb-close").addEventListener("click", () => lb.close());
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
lb.addEventListener("close", () => { if (lbReturn) lbReturn.focus(); });

/* --------------------------- Router ---------------------------- */
function setNav(which) {
  document.querySelectorAll("[data-nav]").forEach(a => {
    if (a.dataset.nav === which) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
}
let firstRoute = true;
function route() {
  const hash = location.hash || "#/";
  /* In-page anchors (#main, #auditions) are not routes. Without this, the skip link
     re-rendered the index and threw the reader off the project page. */
  if (!hash.startsWith("#/")) { if (firstRoute) renderIndex(); return; }
  const m = hash.match(/^#\/project\/([\w-]+)/);
  if (m) {
    const p = PROJECTS.find(x => x.id === m[1]);
    if (p) return renderProject(p);
  }
  if (hash === "#/about") return renderIndex("about");
  renderIndex(firstRoute ? undefined : "return");
}
document.querySelector(".skip").addEventListener("click", e => {
  e.preventDefault();
  main.focus();
});
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------------------------- Start ---------------------------- */
async function init() {
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    PROJECTS = await res.json();
  } catch (err) {
    console.error("Could not load project data:", err);
    main.innerHTML = `
      <section class="wrap intro">
        <h1 tabindex="-1">Projects couldn't load.</h1>
        <p>The project list didn't load. Please refresh the page, or <a href="${REPO}">browse the work on GitHub</a>.</p>
      </section>`;
    return;
  }
  window.addEventListener("hashchange", () => { firstRoute = false; route(); });
  route();
}
init();
