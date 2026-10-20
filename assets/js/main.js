/* Revive Spares demo site.
   Edit CONFIG, VEHICLES and PARTS below to change contact details, stock and prices. */

const CONFIG = {
  whatsapp: "27000000000",            // international format, digits only (27 + number without the leading 0)
  phone: "+27 00 000 0000",
  address: "Stand 000, Main Road, Your Town",
};

const CATEGORIES = [
  { id: "engine", label: "Engines & turbos" },
  { id: "drivetrain", label: "Gearbox & drivetrain" },
  { id: "lights", label: "Lights" },
  { id: "body", label: "Body & mirrors" },
  { id: "wheels", label: "Wheels & brakes" },
  { id: "suspension", label: "Suspension" },
  { id: "interior", label: "Interior" },
  { id: "electrical", label: "Electrical" },
];

const YARD = "assets/img/yard/";
const PARTS_IMG = "assets/img/parts/";

const VEHICLES = [
  {
    id: "xtrail",
    name: "Nissan X-Trail",
    spec: "T30 · 2.5 petrol",
    code: "RS-027",
    status: "live",
    meta: "White · Arrived 2 Oct 2026",
    photos: [
      { src: "xtrail-side.jpg", alt: "White Nissan X-Trail T30, side view, front bumper removed" },
      { src: "xtrail-front.jpg", alt: "Nissan X-Trail front with bumper and crash bar removed", pos: "center 55%" },
      { src: "xtrail-front-2.jpg", alt: "Nissan X-Trail front three-quarter view in the yard", pos: "center 55%" },
    ],
    available: ["2.5 engine", "Auto gearbox", "All 4 doors", "Tailgate", "Tail lights", "Headlights", "Mirrors", "Seats", "17\" alloys"],
    gone: ["Front bumper", "Crash bar"],
  },
  {
    id: "hardbody",
    name: "Nissan Hardbody",
    spec: "D22 double cab · 2.5 TDi",
    code: "RS-031",
    status: "live",
    meta: "Silver · Arrived 9 Oct 2026",
    photos: [
      { src: "hardbody-front.jpg", alt: "Silver Nissan Hardbody double cab, front view", pos: "center 62%" },
      { src: "hardbody-bonnet.jpg", alt: "Nissan Hardbody with the bonnet open, engine being removed" },
    ],
    available: ["2.5 TDi engine", "5-speed gearbox", "Diff", "Front shocks", "Discs & hubs", "Headlights", "Grille", "Doors", "Side steps"],
    gone: [],
  },
  {
    id: "golf",
    name: "VW Golf 5 GTI",
    spec: "2.0 TFSI · 6-speed",
    code: "RS-034",
    status: "live",
    meta: "Grey · Arrived 13 Oct 2026",
    photos: [
      { src: "golf-side.jpg", alt: "Grey VW Golf 5 GTI, side view with front-end damage", pos: "center 30%" },
      { src: "golf-tow.jpg", alt: "VW Golf 5 GTI with fire damage to the bonnet", pos: "70% 50%" },
    ],
    available: ["Engine (long block)", "Rear doors", "Tailgate", "Tail lights", "18\" Monza rims", "Front seats", "Brake calipers", "Rear suspension"],
    gone: ["Bonnet", "Front bumper", "LH headlight"],
  },
  {
    id: "pathfinder",
    name: "Nissan Pathfinder",
    spec: "R51 · 2.5 dCi",
    code: "RS-036",
    status: "new",
    meta: "Silver · Arrived 17 Oct 2026",
    photos: [
      { src: "pathfinder.jpg", alt: "Silver Nissan Pathfinder R51 parked in the yard", pos: "40% 40%" },
    ],
    available: ["2.5 dCi engine", "Turbo", "Auto gearbox", "Transfer case", "Headlights", "Tail lights", "Side steps", "Tow bar", "Roof rails"],
    gone: [],
  },
];

// vehicle: a VEHICLES id, or "any" for stock that fits most makes
const PARTS = [
  { code: "RS-031-01", vehicle: "hardbody", cat: "engine", name: "2.5 TDi engine, complete", price: 26500, grade: "A", img: "engine-diesel.jpg", note: "Compression tested. Sold with injector pump, turbo and starter." },
  { code: "RS-034-01", vehicle: "golf", cat: "engine", name: "2.0 TFSI engine, long block", price: 29900, grade: "B", img: "engine-petrol.jpg", note: "Block and head only. Timing chain and cam follower checked." },
  { code: "RS-036-01", vehicle: "pathfinder", cat: "engine", name: "2.5 dCi turbocharger", price: 6800, grade: "A", img: "turbo.jpg", note: "No shaft play. Oil feed and return lines included." },
  { code: "RS-027-02", vehicle: "xtrail", cat: "lights", name: "Headlight, right-hand", price: 1250, grade: "A", img: "headlight.jpg", note: "Clear lens with all mounting tabs intact." },
  { code: "RS-036-03", vehicle: "pathfinder", cat: "lights", name: "Headlight, left-hand", price: 1650, grade: "A", img: "headlight-2.jpg", note: "Lens polished. Comes with bulbs.", pos: "center 60%" },
  { code: "RS-036-04", vehicle: "pathfinder", cat: "lights", name: "Tail light, left-hand", price: 950, grade: "A", img: "taillight.jpg", note: "No cracks. Plug and wiring intact." },
  { code: "RS-034-02", vehicle: "golf", cat: "wheels", name: "18\" Monza alloy rims, set of 4", price: 7950, grade: "B", img: "rims.jpg", note: "5x112 PCD. Light kerb marks on two rims.", pos: "center 70%" },
  { code: "RS-034-03", vehicle: "golf", cat: "wheels", name: "Front brake caliper & disc, left-hand", price: 1850, grade: "A", img: "caliper-red.jpg", note: "Red GTI caliper. Disc above minimum thickness." },
  { code: "RS-031-02", vehicle: "hardbody", cat: "wheels", name: "Front brake disc & hub, right-hand", price: 1100, grade: "A", img: "brake-disc.jpg", note: "Wheel bearing runs smooth. Disc skimmed." },
  { code: "RS-031-03", vehicle: "hardbody", cat: "suspension", name: "Front shock absorbers, pair", price: 900, grade: "B", img: "shock.jpg", note: "No leaks. Good for daily driving." },
  { code: "RS-036-02", vehicle: "pathfinder", cat: "drivetrain", name: "Front CV shaft, right-hand", price: 1400, grade: "A", img: "cv-joint.jpg", note: "Boots intact, no clicking on test." },
  { code: "RS-027-03", vehicle: "xtrail", cat: "body", name: "Rear door, right-hand (white)", price: 2400, grade: "B", img: "door.jpg", note: "Complete with glass, regulator and handle. Small dent on lower edge." },
  { code: "RS-027-04", vehicle: "xtrail", cat: "body", name: "Electric side mirror, left-hand", price: 750, grade: "A", img: "mirror.jpg", note: "Motor and glass both working." },
  { code: "RS-034-04", vehicle: "golf", cat: "interior", name: "Front seats, pair", price: 3600, grade: "B", img: "seats.jpg", note: "Cloth seats with no tears. Rails and wiring included." },
  { code: "RS-027-01", vehicle: "xtrail", cat: "electrical", name: "Alternator, 2.5 petrol", price: 1350, grade: "A", img: "alternator.jpg", note: "Bench-tested at 14.2 V output." },
  { code: "RS-STK-01", vehicle: "any", cat: "electrical", name: "12 V batteries, load-tested", price: 650, grade: "B", img: "battery.jpg", note: "Various sizes in stock. Ask for your size." },
  { code: "RS-STK-02", vehicle: "any", cat: "drivetrain", name: "Exhaust manifolds & pipes", price: 450, grade: "B", img: "exhausts.jpg", note: "Manifolds and mid sections for most of our makes." },
];

const CREDITS = [
  ["Nazariy Kovalov", "xCLneDUHt4Q"], ["Adem Percem", "X0O5qtzQ91o"], ["Brenton Pearce", "aJlJAwocqwk"],
  ["Caroline Badran", "3bTSc9kNhQ4"], ["Taiki Ishikawa", "Q9JHncNMY-0"], ["S. Laiba Ali", "A0WRSr58oQ0"],
  ["Jose Pinto", "yeMpSqF8Z-8"], ["Václav Pechar", "oiUtPbfFm2U"], ["Benjamin Brunner", "al01Ad0f_KI"],
  ["Olivie Zemanova", "34yNyLyKJ4Y"], ["Zoshua Colah", "02f--k314tE"], ["Niko Caelis", "56OIEcSvVcg"],
  ["Kalle Kortelainen", "HnWoAM0bMec"], ["Ivan Kazlouskij", "sDG4OBCNUCc"], ["Chad Kirchoff", "xe-e69j6-Ds"],
  ["Wesley Tingey", "E4Oz0TZUDe8"], ["Engin Akyurt", "qMXMvKkvZ2k"], ["Sten Rademaker", "UZUzvJEvKnI"],
  ["David Popkov", "VuYz3is9tPI"], ["Olawale Munna", "_ObjhzjnMmc"],
];

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const rand = (n) => "R" + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
const vehicleById = (id) => VEHICLES.find((v) => v.id === id);
const vehicleName = (id) => (id === "any" ? "Most makes" : vehicleById(id)?.name ?? "");
const catLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label ?? "";
const waLink = (text) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v == null) continue;
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v === true ? "" : v);
  }
  for (const child of children.flat()) if (child != null) node.append(child);
  return node;
}

let toastTimer;
function toast(message) {
  const t = $("#toast");
  t.textContent = message;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.hidden = true), 2400);
}

/* ---------- Parts list (kept in this browser only) ---------- */
const LIST_KEY = "rs-parts-list";
let list = [];
try { list = JSON.parse(localStorage.getItem(LIST_KEY)) || []; } catch { list = []; }
list = list.filter((code) => PARTS.some((p) => p.code === code));

function saveList() {
  try { localStorage.setItem(LIST_KEY, JSON.stringify(list)); } catch { /* storage unavailable */ }
}

function toggleInList(code) {
  const part = PARTS.find((p) => p.code === code);
  if (list.includes(code)) {
    list = list.filter((c) => c !== code);
    toast(`Removed ${part.name}`);
  } else {
    list.push(code);
    toast(`Added ${part.name} to your list`);
    const badge = $("#list-count");
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
  }
  saveList();
  renderList();
  syncAddButtons();
}

function listText() {
  const items = list.map((code) => PARTS.find((p) => p.code === code));
  const lines = items.map((p) => `- ${p.code} ${vehicleName(p.vehicle)}: ${p.name} (${rand(p.price)})`);
  const total = items.reduce((sum, p) => sum + p.price, 0);
  return `Hi Fata, I'd like to check these parts:\n${lines.join("\n")}\nEstimate: ${rand(total)}`;
}

function renderList() {
  const items = list.map((code) => PARTS.find((p) => p.code === code));
  $("#list-count").textContent = items.length;
  $("#drawer-empty").hidden = items.length > 0;
  $("#drawer-foot").hidden = items.length === 0;
  $("#drawer-total").textContent = rand(items.reduce((sum, p) => sum + p.price, 0));
  $("#drawer-send").href = waLink(listText());

  $("#drawer-items").replaceChildren(
    ...items.map((p) =>
      el("li", { class: "drawer-item" },
        el("img", { src: PARTS_IMG + p.img, alt: "", width: 64, height: 48 }),
        el("div", {},
          el("p", { class: "drawer-item-name", text: `${vehicleName(p.vehicle)}: ${p.name}` }),
          el("p", { class: "drawer-item-meta", text: `${p.code} · ${rand(p.price)}` })),
        el("button", { type: "button", "aria-label": `Remove ${p.name}`, onclick: () => toggleInList(p.code), text: "Remove" })))
  );
}

function syncAddButtons() {
  $$(".btn-add").forEach((btn) => {
    const on = list.includes(btn.dataset.code);
    btn.setAttribute("aria-pressed", on);
    btn.textContent = on ? "On your list ✓" : "Add to list";
  });
}

/* ---------- Drawer ---------- */
let lastFocus = null;
function openDrawer() {
  lastFocus = document.activeElement;
  $("#drawer-backdrop").hidden = false;
  $("#drawer").hidden = false;
  document.body.style.overflow = "hidden";
  $("#list-close").focus();
}
function closeDrawer() {
  $("#drawer-backdrop").hidden = true;
  $("#drawer").hidden = true;
  document.body.style.overflow = "";
  lastFocus?.focus();
}

/* ---------- Vehicles ---------- */
function renderVehicles() {
  $("#vehicles").replaceChildren(
    ...VEHICLES.map((v) => {
      const first = v.photos[0];
      const main = el("img", {
        src: YARD + first.src, alt: first.alt, width: 1600, height: 1200, loading: "lazy",
        style: first.pos ? `object-position:${first.pos}` : null,
      });
      const thumbs = v.photos.length > 1
        ? el("div", { class: "thumbs", role: "group", "aria-label": `${v.name} photos` },
            v.photos.map((ph, i) =>
              el("button", {
                class: "thumb", type: "button", "aria-pressed": String(i === 0), "aria-label": `Photo ${i + 1} of ${v.photos.length}`,
                onclick: (e) => {
                  main.src = YARD + ph.src;
                  main.alt = ph.alt;
                  main.style.objectPosition = ph.pos || "";
                  $$(".thumb", e.currentTarget.parentElement).forEach((b) => b.setAttribute("aria-pressed", b === e.currentTarget));
                },
              }, el("img", { src: YARD + ph.src, alt: "", loading: "lazy" }))))
        : null;

      const partCount = PARTS.filter((p) => p.vehicle === v.id).length;
      return el("article", { class: "vehicle" },
        el("div", { class: "vehicle-media" }, main, el("span", { class: "stock-code", title: "Stock code", text: v.code }), thumbs),
        el("div", { class: "vehicle-body" },
          el("div", { class: "vehicle-top" },
            el("span", { class: `status status-${v.status}`, text: v.status === "new" ? "Just arrived" : "Stripping now" })),
          el("div", {},
            el("h3", { text: v.name }),
            el("p", { class: "vehicle-meta", text: `${v.spec} · ${v.meta}` })),
          el("div", {},
            el("p", { class: "parts-label", text: "Still available" }),
            el("ul", { class: "pill-list" }, v.available.map((a) => el("li", { text: a })))),
          v.gone.length
            ? el("div", {},
                el("p", { class: "parts-label", text: "Already sold" }),
                el("ul", { class: "pill-list gone" }, v.gone.map((g) => el("li", { text: g }))))
            : null,
          el("div", { class: "vehicle-actions" },
            partCount
              ? el("button", { class: "btn btn-quiet", type: "button", onclick: () => applyFilters({ vehicle: v.id, cat: "all", q: "" }, true), text: `See ${partCount} listed part${partCount > 1 ? "s" : ""}` })
              : null,
            el("a", {
              class: "btn btn-accent", target: "_blank", rel: "noopener",
              href: waLink(`Hi Revive Spares, do you still have this part off the ${v.name} (${v.code})? `),
              text: "Ask on WhatsApp",
            }))));
    })
  );
}

/* ---------- Catalogue ---------- */
const filters = { vehicle: "all", cat: "all", q: "" };

function matches(p) {
  if (filters.vehicle !== "all" && p.vehicle !== filters.vehicle && p.vehicle !== "any") return false;
  if (filters.cat !== "all" && p.cat !== filters.cat) return false;
  const q = filters.q.trim().toLowerCase();
  if (!q) return true;
  const hay = `${p.name} ${p.note} ${p.code} ${vehicleName(p.vehicle)} ${catLabel(p.cat)}`.toLowerCase();
  return q.split(/\s+/).every((word) => hay.includes(word));
}

function renderParts() {
  const shown = PARTS.filter(matches);
  $("#parts-grid").replaceChildren(
    ...shown.map((p) =>
      el("article", { class: "part" },
        el("div", { class: "part-media" },
          el("img", {
            src: PARTS_IMG + p.img, alt: `${p.name}`, loading: "lazy", width: 1000, height: 750,
            style: p.pos ? `object-position:${p.pos}` : null,
          }),
          el("div", { class: "tag" },
            el("span", { class: "tag-price", text: rand(p.price) }),
            el("span", { class: "tag-code", text: p.code }))),
        el("div", { class: "part-body" },
          el("p", { class: "part-fits", text: vehicleName(p.vehicle) }),
          el("h3", { text: p.name }),
          el("p", { class: "part-note", text: p.note }),
          el("div", { class: "part-foot" },
            el("span", { class: "grade", title: p.grade === "A" ? "Clean, no damage" : "Working, with light marks" },
              "Grade ", el("b", { text: p.grade })),
            el("button", { class: "btn-add", type: "button", "data-code": p.code, onclick: () => toggleInList(p.code) })))))
  );
  syncAddButtons();

  $("#parts-empty").hidden = shown.length > 0;
  const where = filters.vehicle !== "all" ? ` for the ${vehicleName(filters.vehicle)}` : "";
  $("#result-count").textContent = `Showing ${shown.length} of ${PARTS.length} parts${where}`;

  $$("#filter-cats .chip").forEach((chip) => chip.setAttribute("aria-pressed", chip.dataset.cat === filters.cat));
}

function applyFilters(next, scroll = false) {
  Object.assign(filters, next);
  $("#filter-q").value = filters.q;
  $("#filter-vehicle").value = filters.vehicle;
  renderParts();
  if (scroll) $("#parts").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

function fillSelects() {
  const vehicleOpts = [["all", "Any vehicle"], ...VEHICLES.map((v) => [v.id, `${v.name} (${v.spec.split(" · ")[0]})`])];
  const catOpts = [["all", "Any part"], ...CATEGORIES.map((c) => [c.id, c.label])];
  for (const sel of ["#finder-vehicle", "#filter-vehicle"]) {
    $(sel).replaceChildren(...vehicleOpts.map(([value, label]) => el("option", { value, text: label })));
  }
  $("#finder-cat").replaceChildren(...catOpts.map(([value, label]) => el("option", { value, text: label })));

  $("#filter-cats").replaceChildren(
    ...[["all", "All parts"], ...CATEGORIES.map((c) => [c.id, c.label])].map(([id, label]) =>
      el("button", { class: "chip", type: "button", "data-cat": id, "aria-pressed": id === "all", onclick: () => applyFilters({ cat: id }), text: label }))
  );
}

/* ---------- Page wiring ---------- */
function init() {
  $$("[data-config]").forEach((node) => (node.textContent = CONFIG[node.dataset.config] ?? ""));
  $$("[data-wa]").forEach((a) => (a.href = waLink(a.dataset.wa)));
  $$("[data-tel]").forEach((a) => (a.href = "tel:" + CONFIG.phone.replace(/[^\d+]/g, "")));

  $("#hero-facts").replaceChildren(
    ...[
      [VEHICLES.length, "Cars stripping now"],
      [PARTS.length, "Parts listed online"],
      ["2–4 days", "Courier across SA"],
    ].map(([value, label]) => el("div", { class: "stat" }, el("strong", { text: value }), el("span", { text: label })))
  );

  $("#credits").replaceChildren(
    ...CREDITS.flatMap(([name, id], i) => [
      i ? ", " : "",
      el("a", { href: `https://unsplash.com/photos/${id}`, target: "_blank", rel: "noopener", text: name }),
    ])
  );

  fillSelects();
  renderVehicles();
  renderParts();
  renderList();

  $("#finder").addEventListener("submit", (e) => {
    e.preventDefault();
    applyFilters({ vehicle: $("#finder-vehicle").value, cat: $("#finder-cat").value, q: $("#finder-q").value }, true);
  });
  $("#filter-q").addEventListener("input", (e) => applyFilters({ q: e.target.value }));
  $("#filter-vehicle").addEventListener("change", (e) => applyFilters({ vehicle: e.target.value }));

  // Mobile nav
  const toggle = $("#nav-toggle");
  const nav = $("#site-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$("a", nav).forEach((a) => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));

  // Drawer
  $("#list-open").addEventListener("click", openDrawer);
  $("#list-close").addEventListener("click", closeDrawer);
  $("#drawer-backdrop").addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => {
    if ($("#drawer").hidden) return;
    if (e.key === "Escape") closeDrawer();
    if (e.key === "Tab") {
      const focusable = $$("button, a[href]", $("#drawer")).filter((n) => n.offsetParent !== null);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  $("#drawer-clear").addEventListener("click", () => {
    list = [];
    saveList();
    renderList();
    syncAddButtons();
    toast("List cleared");
  });
  $("#drawer-copy").addEventListener("click", () => {
    const text = listText();
    const fallback = () => {
      const ta = el("textarea", { style: "position:fixed;opacity:0" });
      ta.value = text;
      document.body.append(ta);
      ta.select();
      const ok = document.execCommand && document.execCommand("copy");
      ta.remove();
      toast(ok ? "List copied" : "Couldn't copy. Use Send list on WhatsApp instead.");
    };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(() => toast("List copied"), fallback);
    else fallback();
  });

  // Enquiry form (demo: nothing is sent)
  $("#enquiry").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const required = $$("[required]", form);
    const missing = required.filter((f) => !f.value.trim());
    required.forEach((f) => f.setAttribute("aria-invalid", missing.includes(f)));
    $("#enq-error").hidden = missing.length === 0;
    if (missing.length) { missing[0].focus(); return; }

    const name = $("#enq-name").value.trim().split(/\s+/)[0];
    const done = $("#enq-done");
    done.textContent = `Thanks, ${name}. This is a demo, so nothing was sent. On the live site your enquiry goes straight to Fata on WhatsApp and he replies within the hour during trading hours.`;
    done.hidden = false;
    form.reset();
    required.forEach((f) => f.removeAttribute("aria-invalid"));
  });

  // Ease sections in as they scroll into view
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("reveal-ready");
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }), { rootMargin: "0px 0px -6% 0px" });
    $$("[data-reveal]").forEach((node) => io.observe(node));
  }
}

init();
