const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* --- Header state ------------------------------------------------------ */
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* --- Mobile nav -------------------------------------------------------- */
const navToggle = document.querySelector(".nav-toggle");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".site-nav a").forEach((a) =>
    a.addEventListener("click", () => {
      header.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* --- Chart: draw routes and march the flow ----------------------------- */
const chart = document.querySelector(".chart");
if (chart) {
  const outRoutes = [...chart.querySelectorAll(".route.out")];
  const inRoutes = [...chart.querySelectorAll(".route.in")];
  const revealed = document.querySelector(".hero");

  const drawRoutes = () => {
    if (reduce) return;
    outRoutes.forEach((p, i) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = String(len);
      p.style.strokeDashoffset = String(len);
      p.animate(
        [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
        { duration: 1600, delay: 300 + i * 220, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
      );
    });
    inRoutes.forEach((p) => {
      p.style.strokeDasharray = "5 6";
      p.animate([{ strokeDashoffset: 0 }, { strokeDashoffset: -22 }], {
        duration: 900, iterations: Infinity, easing: "linear"
      });
    });
  };

  if ("IntersectionObserver" in window && revealed) {
    const io = new IntersectionObserver((entries, obs) => {
      if (entries.some((e) => e.isIntersecting)) { drawRoutes(); obs.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(revealed);
  } else {
    drawRoutes();
  }
}

/* --- Legend filter ----------------------------------------------------- */
const legendKeys = [...document.querySelectorAll(".legend-key")];
legendKeys.forEach((btn) => {
  btn.addEventListener("click", () => {
    const on = btn.getAttribute("aria-pressed") !== "true";
    btn.setAttribute("aria-pressed", String(on));
    const active = legendKeys.filter((b) => b.getAttribute("aria-pressed") === "true").map((b) => b.dataset.filter);
    applyFilter(active);
  });
});
function applyFilter(active) {
  if (!chart) return;
  chart.classList.toggle("dim", active.length > 0);
  chart.querySelectorAll(".node, .route").forEach((el) => {
    const match = active.includes(el.dataset.status);
    el.classList.toggle("is-on", active.length > 0 && match);
  });
}

/* --- Pipeline tabs ----------------------------------------------------- */
const STAGES = {
  1: { name: "Identify", text: "Scan essential-need markets for demand, gaps and enabling conditions, and qualify what deserves pursuit before a dollar is committed.", output: "Qualified opportunity set", discipline: "Evidence before ambition" },
  2: { name: "Originate", text: "Build the project from the ground up — sponsors, sites, offtake and the commercial logic that makes it worth structuring.", output: "Originated project", discipline: "Local presence, global standards" },
  3: { name: "Structure", text: "Shape bankable capital stacks, risk allocation and governance so the asset can stand on its own in front of lenders and boards.", output: "Bankable structure", discipline: "Structure over storytelling" },
  4: { name: "Mobilize", text: "Bring capital, technology and partners together around the structure and close the conditions that let work begin.", output: "Committed capital & partners", discipline: "One operating architecture" },
  5: { name: "Build", text: "Deliver the asset with disciplined execution — engineering, procurement and construction held to measurable outcomes.", output: "Operating asset", discipline: "Execution-focused" },
  6: { name: "Scale", text: "Grow the enterprise, replicate the model across markets, and let the returns compound into the next cycle of opportunity.", output: "Generational value", discipline: "Impact that endures" }
};
const stageButtons = [...document.querySelectorAll(".stages button")];
const cursor = document.querySelector(".stage-cursor");
const panel = document.querySelector(".stage-panel");
const out = (k) => document.querySelector(`[data-out="${k}"]`);
stageButtons.forEach((btn) => {
  btn.addEventListener("click", () => selectStage(Number(btn.dataset.stage)));
  btn.addEventListener("keydown", (e) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = stageButtons[(stageButtons.indexOf(btn) + dir + stageButtons.length) % stageButtons.length];
    next.focus(); selectStage(Number(next.dataset.stage));
  });
});
function selectStage(n) {
  stageButtons.forEach((b) => b.setAttribute("aria-selected", String(Number(b.dataset.stage) === n)));
  const s = STAGES[n];
  if (!s) return;
  out("index").textContent = `STAGE 0${n} / 06`;
  out("name").textContent = s.name;
  out("text").textContent = s.text;
  out("output").textContent = s.output;
  out("discipline").textContent = s.discipline;
  if (panel) panel.setAttribute("aria-labelledby", `stage-${n}`);
  if (cursor) cursor.style.left = `${((n - 1) / 6) * 100}%`;
}

/* --- Reveal ------------------------------------------------------------ */
const revealTargets = [...document.querySelectorAll(
  ".section-title, .section-lede, .flow-grid, .pipeline-body, .flagship, .status-list, .restricted-wrap, .route-form"
)];
if (!reduce && "IntersectionObserver" in window) {
  revealTargets.forEach((el) => el.classList.add("reveal"));
  const ro = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); } });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => ro.observe(el));
}

/* --- Route form -------------------------------------------------------- */
const ROUTES = {
  investor:     { hint: "INVESTOR ROUTE — QUALIFY MANDATE & ACCESS", fields: [
    ["Mandate / thesis", "select", ["—", "Family office", "Institutional", "Fund", "Sovereign / DFI"]],
    ["Typical ticket", "select", ["—", "Development", "Growth", "Platform", "Infrastructure"]],
    ["Access sought", "select", ["—", "Public summaries", "Pipeline", "Data room"]]
  ]},
  government:   { hint: "GOVERNMENT ROUTE — STRATEGIC MEETING", fields: [
    ["Country / market", "text", []],
    ["Sector priority", "select", ["—", "Water", "Energy", "Food", "Digital", "Industry", "Urban", "Logistics", "Climate"]],
    ["Delivery model", "select", ["—", "PPP", "Joint venture", "Concession", "Advisory"]]
  ]},
  fi:           { hint: "FINANCIAL INSTITUTION ROUTE — FINANCING DISCUSSION", fields: [
    ["Institution type", "select", ["—", "Commercial bank", "DFI", "ECA", "Insurer", "Fund"]],
    ["Instrument", "select", ["—", "Senior debt", "Mezzanine", "Guarantee", "Equity", "Blended"]],
    ["Ticket range", "text", []]
  ]},
  technology:   { hint: "TECHNOLOGY PARTNER ROUTE — PROPOSE A PARTNERSHIP", fields: [
    ["Technology area", "text", []],
    ["Partnership model", "select", ["—", "Co-build", "Licence", "JV", "Supply", "Integration"]],
    ["Existing deployments", "text", []]
  ]},
  owner:        { hint: "PROJECT OWNER ROUTE — SUBMIT A PROJECT", fields: [
    ["Project / asset", "text", []],
    ["Country", "text", []],
    ["Development stage", "select", ["—", "Concept", "Feasibility", "Permitted", "Construction-ready", "Operating"]]
  ]},
  jv:           { hint: "JOINT VENTURE ROUTE — STRUCTURE A PARTNERSHIP", fields: [
    ["Parties involved", "text", []],
    ["Sector", "text", []],
    ["Structure sought", "select", ["—", "Equity JV", "Project SPV", "Holdco", "Contractual"]]
  ]},
  africa:       { hint: "AFRICA MARKET ENTRY — LOCAL EXECUTION", fields: [
    ["Company / origin market", "text", []],
    ["Target African market", "text", []],
    ["Support needed", "select", ["—", "Origination", "Partnerships", "Licensing", "Build & operate", "Capital"]]
  ]},
  gcc:          { hint: "GCC MARKET ENTRY — BRIDGE TO THE GULF", fields: [
    ["Company / origin market", "text", []],
    ["Target GCC market", "text", []],
    ["Support needed", "select", ["—", "Origination", "Partnerships", "Licensing", "Build & operate", "Capital"]]
  ]}
};

const form = document.querySelector(".route-form");
if (form) {
  const fieldsWrap = form.querySelector(".route-fields");
  const specific = form.querySelector(".route-specific");
  const hint = form.querySelector('[data-out="hint"]');

  form.querySelectorAll('input[name="route"]').forEach((r) =>
    r.addEventListener("change", () => renderRoute(r.value))
  );

  function renderRoute(key) {
    const cfg = ROUTES[key];
    if (!cfg) return;
    fieldsWrap.hidden = false;
    if (hint) hint.textContent = cfg.hint;
    specific.innerHTML = "";
    cfg.fields.forEach(([label, kind, opts]) => {
      const wrap = document.createElement("label");
      wrap.className = "qfield";
      const span = document.createElement("span");
      span.textContent = label;
      wrap.appendChild(span);
      if (kind === "select") {
        const sel = document.createElement("select");
        sel.name = key + "-" + label.toLowerCase().replace(/[^a-z]+/g, "-");
        opts.forEach((o) => { const op = document.createElement("option"); op.textContent = o; sel.appendChild(op); });
        wrap.appendChild(sel);
      } else {
        const inp = document.createElement("input");
        inp.type = "text";
        inp.name = key + "-" + label.toLowerCase().replace(/[^a-z]+/g, "-");
        wrap.appendChild(inp);
      }
      specific.appendChild(wrap);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll("[required]").forEach((el) => {
      const field = el.closest(".field");
      let bad = !el.value.trim() || (el.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value));
      if (el.type === "email" && el.value.trim() && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value)) bad = false;
      if (field) {
        field.classList.toggle("invalid", bad);
        let err = field.querySelector(".err");
        if (bad && !err) { err = document.createElement("span"); err.className = "err"; err.textContent = el.type === "email" ? "Enter a valid email address." : "This field is required."; field.appendChild(err); }
        if (!bad && err) err.remove();
      }
      if (bad) ok = false;
    });
    const status = form.querySelector(".form-status");
    if (!ok) {
      status.textContent = "Check the highlighted fields.";
      status.classList.remove("ok");
      form.querySelector(".invalid")?.querySelector("input, textarea, select")?.focus();
      return;
    }
    const route = form.querySelector('input[name="route"]:checked');
    status.textContent = `Route noted — ${route ? route.value : "general"}. A qualifying response will follow from the group.`;
    status.classList.add("ok");
    form.reset();
    fieldsWrap.hidden = true;
    specific.innerHTML = "";
  });
}

/* --- Year -------------------------------------------------------------- */
const y = document.querySelector("[data-year]");
if (y) y.textContent = String(new Date().getFullYear());
