/* SPOLEČNĚ PRO MĚSTO — interakce */
(function () {
  "use strict";

  /* ---------- mobilní menu ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- odpočet do voleb (pá 9. 10. 2026, 14:00 SELČ) ---------- */
  var target = new Date("2026-10-09T14:00:00+02:00").getTime();
  var elDays = document.getElementById("cd-days");
  var elHours = document.getElementById("cd-hours");
  var elMins = document.getElementById("cd-mins");

  function tick() {
    var diff = target - Date.now();
    if (diff <= 0) {
      elDays.textContent = "0";
      elHours.textContent = "0";
      elMins.textContent = "0";
      return;
    }
    elDays.textContent = String(Math.floor(diff / 86400000));
    elHours.textContent = String(Math.floor(diff / 3600000) % 24);
    elMins.textContent = String(Math.floor(diff / 60000) % 60);
  }
  if (elDays) {
    tick();
    setInterval(tick, 30000);
  }

  /* ---------- mapa <-> program ---------- */
  var map = document.getElementById("town-map");
  var pins = document.querySelectorAll(".map-pin");
  var items = document.querySelectorAll(".program-item");

  function setActive(point) {
    map.classList.toggle("has-active", point !== null);
    pins.forEach(function (p) {
      p.classList.toggle("active", p.dataset.point === point);
    });
    items.forEach(function (it) {
      it.classList.toggle("active", it.dataset.point === point);
    });
  }

  items.forEach(function (it) {
    it.addEventListener("mouseenter", function () { setActive(it.dataset.point); });
    it.addEventListener("mouseleave", function () { setActive(null); });
    it.addEventListener("focusin", function () { setActive(it.dataset.point); });
  });

  pins.forEach(function (pin) {
    function activate() {
      var point = pin.dataset.point;
      setActive(point);
      var item = document.querySelector('.program-item[data-point="' + point + '"]');
      if (item) {
        item.open = true;
        item.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
    pin.addEventListener("click", activate);
    pin.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activate();
      }
    });
    pin.addEventListener("mouseenter", function () { setActive(pin.dataset.point); });
    pin.addEventListener("mouseleave", function () { setActive(null); });
  });

  /* ---------- scroll reveal ---------- */
  /* prvky už ve viewportu ukážeme hned; observer jen pro ty pod ohybem */
  var reveals = document.querySelectorAll(".reveal");
  var vh = window.innerHeight || 800;
  var pending = [];
  reveals.forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0) el.classList.add("in");
    else pending.push(el);
  });
  if ("IntersectionObserver" in window && pending.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    pending.forEach(function (el) { io.observe(el); });
  } else {
    pending.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- formulář (demo bez backendu) ---------- */
  var form = document.getElementById("join-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("f-name").value.trim();
      var email = document.getElementById("f-email").value.trim();
      if (!name || !email || email.indexOf("@") < 1) {
        alertBox("Vyplňte prosím jméno a platný e-mail.");
        return;
      }
      form.innerHTML =
        '<p style="font-size:1.15rem; font-weight:700; margin-bottom:0.5rem">Díky, ' +
        escapeHtml(name.split(" ")[0]) +
        '! 🎉</p><p style="color:rgba(248,244,236,.75)">Ozveme se vám co nejdřív. Zatím to řekněte sousedům — a 9.–10. října přijďte k volbám.</p>';
    });
  }

  function alertBox(msg) {
    var note = form.querySelector(".form-note");
    note.textContent = msg;
    note.style.color = "#F5B841";
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
})();
