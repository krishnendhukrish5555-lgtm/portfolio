"use strict";
/* =====================================================================
   EDIT YOUR CONTENT HERE. Everything on the page comes from CONFIG.
   Replace [BRACKETED] text with real details. Never add anything untrue.
   ===================================================================== */
const CONFIG = {
  email: "krishnendhukrish5555@gmail.com",
  location: "Thrissur, Kerala, India",
  // Set to "assets/documents/resume.pdf" once the real PDF is added. Empty = no button.
  resume: "",
  links: [
    { label: "GitHub", url: "https://github.com/krishnendhukrish5555-lgtm" },
    // Check this address opens your profile; fix it here if not.
    { label: "LinkedIn", url: "https://linkedin.com/in/krishnendhu-ku-" }
  ],
  about: [
    "I'm a Bachelor of Computer Applications student from M.E.S. Asmabi College, Kodungallur, building a foundation in cybersecurity and security operations. My learning interests include networking, Linux, web application security, and SIEM fundamentals.",
    "I'm working toward opportunities where I can continue learning, strengthen my practical skills, and contribute to defensive security operations."
  ],
  objective: "A cybersecurity internship or entry-level position, on the path to becoming a SOC analyst.",
  // Add a "level" only if it is accurate, e.g. level: "Learning" (optional)
  skills: [
    { group: "Networking and security fundamentals", items: [{ name: "Networking fundamentals" }, { name: "Cybersecurity fundamentals" }, { name: "Security concepts" }] },
    { group: "Operating systems", items: [{ name: "Linux" }, { name: "Kali Linux" }] },
    { group: "Web application security", items: [{ name: "OWASP Top 10" }, { name: "Burp Suite" }] },
    { group: "Network security tools", items: [{ name: "Nmap" }] },
    { group: "Security operations and monitoring", items: [{ name: "SOC fundamentals" }, { name: "SIEM concepts" }, { name: "Splunk" }] }
  ],
  categories: [], // e.g. ["Log analysis", "Web security"]. Filters appear at 4+ projects.
  /* Add real projects below. Status: "Completed", "In progress" or "Planned".
     Leave repo/docs/demo as "" if you don't have them. */
  projects: [
    { title: "CloudShield: Failed Login Detection System", category: "Log analysis", status: "In progress",
      summary: "A Flask web app that detects repeated failed logins and raises alerts.",
      problem: "Brute-force login attempts are easy to miss in raw logs.",
      approach: "Flags 5 failed attempts from one IP within 10 minutes, rates severity LOW, MEDIUM or HIGH, and alerts without auto-blocking.",
      tech: ["Flask", "SQLite", "Bootstrap 5", "Chart.js", "pytest"],
      repo: "", docs: "", demo: "" }
  ],
  education: [
    { qualification: "Bachelor of Computer Applications (BCA)", institution: "M.E.S. Asmabi College, Kodungallur",
      dates: "[START YEAR] to [EXPECTED GRADUATION YEAR]", coursework: "" }
  ],
  /* Add only certifications you have earned:
     { title: "", issuer: "", date: "", url: "https://credential-link" } */
  certifications: [],
  /* Add real training/work:
     { org: "", role: "", type: "Training|Internship|Employment|Volunteering", dates: "", details: "", tech: [] } */
  experience: []
};

/* ---------- helpers: safe DOM only (no innerHTML) ---------- */
const $ = id => document.getElementById(id);
const safeUrl = u => /^(https?:\/\/|mailto:)/i.test(u || "") ? u : null;
function el(tag, text, cls, parent) {
  const n = document.createElement(tag);
  if (text) n.textContent = text;
  if (cls) n.className = cls;
  if (parent) parent.appendChild(n);
  return n;
}
function link(parent, label, url) {
  const u = safeUrl(url);
  if (!u) return null;               // invalid or empty links are never rendered
  const a = el("a", label, "", parent);
  a.href = u;
  if (u.startsWith("http")) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
  return a;
}
function tags(parent, items) {
  const ul = el("ul", "", "tags", parent);
  items.forEach(t => el("li", t, "", ul));
}
function socials(id) {
  const box = $(id);
  CONFIG.links.forEach(l => link(box, l.label, l.url));
  link(box, "Email", "mailto:" + CONFIG.email);
}
function empty(id, msg) { const n = $(id); n.textContent = msg; n.hidden = false; }

/* ---------- render sections ---------- */
function renderAll() {
  CONFIG.about.forEach(p => el("p", p, "", $("aboutBody")));
  $("objective").textContent = CONFIG.objective;
  ["heroSocial", "aboutSocial", "footSocial"].forEach(socials);
  $("year").textContent = new Date().getFullYear();

  if (CONFIG.resume) {
    const a = link($("resumeSlot"), "View Resume", CONFIG.resume.startsWith("http") ? CONFIG.resume : null);
    const r = a || el("a", "View Resume", "", $("resumeSlot"));
    r.href = CONFIG.resume; r.className = "btn"; r.target = "_blank"; r.rel = "noopener noreferrer";
  }

  CONFIG.skills.forEach(g => {
    const c = el("div", "", "card", $("skillGrid"));
    el("h3", g.group, "", c);
    tags(c, g.items.map(i => i.level ? i.name + " (" + i.level + ")" : i.name));
  });

  if (CONFIG.projects.length === 0) {
    empty("projectEmpty", "Practical work is in progress. This section will showcase security tools, lab investigations, detection experiments, and documented learning projects as they are completed.");
  }
  CONFIG.projects.forEach(p => {
    const c = el("article", "", "card project", $("projectGrid"));
    c.dataset.category = p.category || "";
    el("span", p.status, "status", c);
    el("h3", p.title, "", c);
    el("p", p.summary, "", c);
    [["Problem: ", p.problem], ["Approach: ", p.approach]].forEach(([k, v]) => {
      if (!v) return;
      const para = el("p", "", "", c); el("strong", k, "", para); para.append(v);
    });
    tags(c, p.tech || []);
    const l = el("div", "", "links", c);
    link(l, "Repository", p.repo); link(l, "Documentation", p.docs); link(l, "Live demo", p.demo);
    if (!l.hasChildNodes()) l.remove();
  });

  CONFIG.education.forEach(e => {
    const c = el("div", "", "card", $("eduGrid"));
    el("h3", e.qualification, "", c);
    el("p", e.institution, "", c);
    if (e.dates) el("p", e.dates, "muted", c);
    if (e.coursework) el("p", "Coursework: " + e.coursework, "", c);
  });

  if (!CONFIG.certifications.length) empty("certEmpty", "Verified certifications will be added here as I earn them.");
  CONFIG.certifications.forEach(x => {
    const c = el("div", "", "card", $("certGrid"));
    el("h3", x.title, "", c);
    el("p", [x.issuer, x.date].filter(Boolean).join(" | "), "", c);
    const l = el("div", "", "links", c); link(l, "Verify credential", x.url);
    if (!l.hasChildNodes()) l.remove();
  });

  if (!CONFIG.experience.length) empty("expEmpty", "Training and hands-on experience will be listed here as it is completed.");
  CONFIG.experience.forEach(x => {
    const li = el("li", "", "", $("timeline"));
    el("h3", x.role + ", " + x.org, "", li);
    el("p", x.type + " | " + x.dates, "muted", li);
    el("p", x.details, "", li);
    if (x.tech && x.tech.length) tags(li, x.tech);
  });

  const list = $("contactList");
  [["Email", "mailto:" + CONFIG.email, CONFIG.email]].concat(
    CONFIG.links.map(l => [l.label, l.url, l.url.replace(/^https?:\/\//, "")])
  ).forEach(([k, u, t]) => { const li = el("li", "", "", list); el("span", k, "", li); link(li, t, u); });
  const loc = el("li", "", "", list); el("span", "Location", "", loc); loc.append(CONFIG.location);
  $("emailBtn").href = "mailto:" + CONFIG.email;
}

/* ---------- behaviour ---------- */
function setupFilters() {
  const cards = [...document.querySelectorAll(".project")];
  if (cards.length < 4 || !CONFIG.categories.length) return;   // filters only when useful
  const box = $("filters"); box.hidden = false;
  ["All"].concat(CONFIG.categories).forEach((cat, i) => {
    const b = el("button", cat, "", box);
    b.type = "button"; b.setAttribute("aria-pressed", String(i === 0));
    b.addEventListener("click", () => {
      box.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      cards.forEach(c => { c.hidden = cat !== "All" && c.dataset.category !== cat; });
    });
  });
}
function setupMenu() {
  const btn = $("menuBtn"), nav = $("navLinks");
  const set = open => { nav.classList.toggle("open", open); btn.setAttribute("aria-expanded", String(open)); };
  btn.addEventListener("click", () => set(!nav.classList.contains("open")));
  nav.addEventListener("click", e => { if (e.target.closest("a")) set(false); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && nav.classList.contains("open")) { set(false); btn.focus(); }
  });
}
function setupActiveLinks() {
  if (!("IntersectionObserver" in window)) return;
  const links = [...document.querySelectorAll(".nav-links a[href^='#']")];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.hash === "#" + e.target.id));
  }), { rootMargin: "-40% 0px -55% 0px" });
  links.forEach(a => { const s = document.querySelector(a.hash); if (s) io.observe(s); });
}
function setupCopy() {
  const b = $("copyEmail");
  if (!navigator.clipboard) return;       // button stays hidden if unsupported
  b.hidden = false;
  b.addEventListener("click", () => navigator.clipboard.writeText(CONFIG.email).then(
    () => { $("copyStatus").textContent = "Email address copied."; },
    () => { $("copyStatus").textContent = "Copy failed. Use the Email button instead."; }));
}

renderAll(); setupFilters(); setupMenu(); setupActiveLinks(); setupCopy();
