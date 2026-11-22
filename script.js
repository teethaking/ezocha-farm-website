// Ezocha Farm Services Ltd — interactions
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Sticky nav shadow
  var nav = document.querySelector(".nav");
  var onScrollNav = function () {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  // Mobile menu
  var menuBtn = document.getElementById("menuBtn");
  var navLinks = document.getElementById("navLinks");
  menuBtn.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    menuBtn.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Scroll-reveal animations
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // Staggered entrances inside grids: children pop in one after another.
  document.querySelectorAll(".obj-grid, .svc-grid, .produce-grid, .testi-grid, .partner-grid, .why-list, .stats-grid").forEach(function (grid) {
    Array.prototype.forEach.call(grid.children, function (child, i) {
      child.style.transitionDelay = Math.min(i * 90, 540) + "ms";
    });
  });

  // Animated stat counters
  var counters = document.querySelectorAll("[data-count]");
  var animateCount = function (el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var duration = 1200;
    var start = null;
    var step = function (ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    var countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) { countObserver.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute("data-count"); });
  }

  // Hero parallax + scroll progress bar + back-to-top (one rAF-throttled scroll handler)
  var heroBg = document.getElementById("heroBg");
  var progressBar = document.getElementById("progressBar");
  var toTop = document.getElementById("toTop");
  var ticking = false;
  var onScrollFx = function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
      toTop.classList.toggle("show", y > 600);
      if (!reduceMotion && heroBg && y < window.innerHeight) {
        heroBg.style.backgroundPosition = "center " + Math.round(y * 0.25) + "px";
      }
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScrollFx, { passive: true });
  onScrollFx();
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  // Subtle 3D tilt on service cards (fine pointers only, no reduced motion)
  if (finePointer && !reduceMotion) {
    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var rx = ((e.clientY - r.top) / r.height - 0.5) * -5;
        var ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
        card.style.transform = "perspective(900px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  // Expandable service cards
  document.querySelectorAll(".svc-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".svc-card");
      var expanded = card.classList.toggle("expanded");
      btn.setAttribute("aria-expanded", String(expanded));
      btn.firstChild.textContent = expanded ? "Show less " : "Learn more ";
    });
  });

  // FAQ accordion (one open at a time)
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Contact form -> opens WhatsApp with the message prefilled
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("cfName").value.trim();
    var phone = document.getElementById("cfPhone").value.trim();
    var service = document.getElementById("cfService").value;
    var message = document.getElementById("cfMessage").value.trim();
    if (!name || !message) {
      note.textContent = "Please add your name and a short message.";
      return;
    }
    var text =
      "Hello Ezocha Farm Services Ltd, my name is " + name + ".\n" +
      "Service needed: " + service + ".\n" +
      (phone ? "My phone: " + phone + ".\n" : "") +
      "Message: " + message;
    note.textContent = "Opening WhatsApp…";
    window.open("https://wa.me/2348035004617?text=" + encodeURIComponent(text), "_blank");
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
})();
