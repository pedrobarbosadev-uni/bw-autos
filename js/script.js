/* ═══════════════════════════════════════════════════════════════
   BW AUTOS — script.js
═══════════════════════════════════════════════════════════════ */

"use strict";

/* ── LOADER ─────────────────────────────────────────────────── */
function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;

  document.body.classList.add("loading");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
      document.body.classList.remove("loading");
      initHeroCar();
      initCounters();
    }, 1900);
  });
}

/* ── CUSTOM CURSOR ───────────────────────────────────────────── */
function initCursor() {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");
  if (!cursor || !follower) return;
  if (window.innerWidth <= 768) return;

  let mouseX = 0,
    mouseY = 0;
  let followerX = 0,
    followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  const hoverTargets = document.querySelectorAll(
    "a, button, .car-card, .filter-btn, .benefit-card",
  );
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hover");
      follower.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover");
      follower.classList.remove("cursor-hover");
    });
  });
}

/* ── STICKY HEADER ───────────────────────────────────────────── */
function initHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ── MOBILE NAV ──────────────────────────────────────────────── */
function initMobileNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
    }
  });
}

/* ── HERO CAR ANIMATION ──────────────────────────────────────── */
function initHeroCar() {
  const car = document.getElementById("hero-car");
  if (!car) return;

  setTimeout(() => {
    car.classList.add("appeared");
  }, 200);

  // Subtle floating animation via JS
  let t = 0;
  function floatCar() {
    t += 0.012;
    const y = Math.sin(t) * 5;
    car.style.transform = `translateY(${y}px)`;
    requestAnimationFrame(floatCar);
  }
  setTimeout(floatCar, 1600);
}

/* ── SCROLL REVEAL ───────────────────────────────────────────── */
function initScrollReveal() {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger delay for grid children
          const parent = entry.target.parentElement;
          const siblings = [...parent.querySelectorAll("[data-reveal]")];
          const index = siblings.indexOf(entry.target);
          const delay = index * 80;

          setTimeout(() => {
            entry.target.classList.add("revealed");
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  elements.forEach((el) => observer.observe(el));
}

/* ── COUNTERS ────────────────────────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-count"), 10);
        const dur = 1600;
        const start = performance.now();

        const animate = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / dur, 1);
          const value = Math.round(easeOut(progress) * target);
          el.textContent = value;
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((c) => observer.observe(c));
}

/* ── CAR FILTER ──────────────────────────────────────────────── */
function initCarFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const carCards = document.querySelectorAll(".car-card");
  if (!filterBtns.length || !carCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Active state
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      carCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        const matches = filter === "all" || category === filter;

        if (matches) {
          card.classList.remove("hide");
          card.style.display = "";
        } else {
          card.classList.add("hide");
          setTimeout(() => {
            if (card.classList.contains("hide")) {
              card.style.display = "none";
            }
          }, 320);
        }
      });
    });
  });
}

/* ── SMOOTH SCROLL ───────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ── BACK TO TOP ─────────────────────────────────────────────── */
function initBackTop() {
  const btn = document.getElementById("back-top");
  if (!btn) return;

  const onScroll = () => {
    if (window.scrollY > 500) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ── CONTACT FORM ────────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById("contato-form");
  const success = document.getElementById("form-success");
  if (!form || !success) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const span = btn.querySelector("span");

    btn.disabled = true;
    span.textContent = "Enviando…";

    // Simulate async submission
    setTimeout(() => {
      form.reset();
      success.classList.add("show");
      btn.disabled = false;
      span.textContent = "Enviar Mensagem";

      setTimeout(() => {
        success.classList.remove("show");
      }, 5000);
    }, 1400);
  });
}

/* ── PARALLAX HERO GRID ──────────────────────────────────────── */
function initParallax() {
  const heroGrid = document.querySelector(".hero-grid");
  const heroGlow = document.querySelector(".hero-glow");
  if (!heroGrid || !heroGlow) return;

  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          heroGrid.style.transform = `translateY(${y * 0.25}px)`;
          heroGlow.style.transform = `translateX(-50%) translateY(${y * 0.15}px)`;
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );
}

/* ── ACTIVE NAV LINK ─────────────────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link:not(.nav-cta)");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`,
          );
        });
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach((s) => observer.observe(s));
}

/* ── TILT EFFECT ON CARDS ────────────────────────────────────── */
function initCardTilt() {
  if (window.innerWidth <= 768) return;

  const cards = document.querySelectorAll(".car-card, .benefit-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rotX = -dy * 5;
      const rotY = dx * 5;

      card.style.transform = `translateY(-6px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      card.style.transition = "transform 0.08s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.transition =
        "transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)";
    });
  });
}

/* ── FORM PHONE MASK ─────────────────────────────────────────── */
function initPhoneMask() {
  const phone = document.getElementById("telefone");
  if (!phone) return;

  phone.addEventListener("input", () => {
    let v = phone.value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);

    if (v.length <= 10) {
      v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    phone.value = v;
  });
}

/* ── INIT ALL ────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initCursor();
  initHeader();
  initMobileNav();
  initScrollReveal();
  initCarFilter();
  initSmoothScroll();
  initBackTop();
  initContactForm();
  initParallax();
  initActiveNav();
  initCardTilt();
  initPhoneMask();
});
