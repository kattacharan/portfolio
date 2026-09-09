/* ================================================================
   KATTA SAI CHARAN — Portfolio V2 — script.js
   ================================================================ */

'use strict';

// ----------------------------------------------------------------
// HERO CANVAS — Particle Network
// ----------------------------------------------------------------
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const PARTICLE_COUNT = 65;
  const MAX_DIST = 130;
  const ACCENT_R = 74, ACCENT_G = 222, ACCENT_B = 128;

  let width, height, particles = [], animId;

  function resize() {
    width  = canvas.width  = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x  = init ? Math.random() * width  : (Math.random() < 0.5 ? 0 : width);
      this.y  = init ? Math.random() * height : Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.r  = Math.random() * 1.2 + 0.4;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < -5 || this.x > width  + 5) this.vx *= -1;
      if (this.y < -5 || this.y > height + 5) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},0.55)`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(animate);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resize(); }, 200);
  });

  // Pause animation when tab is not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      animate();
    }
  });

  init();
  animate();
})();


// ----------------------------------------------------------------
// CUSTOM CURSOR
// ----------------------------------------------------------------
(function initCursor() {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;
  if (window.matchMedia('(hover: none)').matches) return;

  let mx = 0, my = 0, fx = 0, fy = 0, rafId;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  }, { passive: true });

  function followMouse() {
    fx += (mx - fx) * 0.11;
    fy += (my - fy) * 0.11;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    rafId = requestAnimationFrame(followMouse);
  }
  followMouse();

  const hoverTargets = 'a, button, [role="button"], .stack-cat, .edu-item, .other-project-row, .identity-word';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      follower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      follower.classList.remove('hover');
    });
  });
})();


// ----------------------------------------------------------------
// NAVIGATION — Scroll state + active tracking + mobile menu
// ----------------------------------------------------------------
(function initNav() {
  const nav            = document.getElementById('nav');
  const navMenuToggle  = document.getElementById('navMenuToggle');
  const mobileNav      = document.getElementById('mobileNav');
  const navItems       = document.querySelectorAll('.nav-item');
  const sections       = document.querySelectorAll('section[id]');

  // Scroll state for nav background
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active section tracking
  function updateActiveSection() {
    let current = '';
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.42 && rect.bottom > 0) {
        current = sec.id;
      }
    });
    navItems.forEach(item => {
      const match = item.dataset.section === current;
      item.classList.toggle('active', match);
    });
  }
  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();

  // Mobile menu toggle
  if (navMenuToggle && mobileNav) {
    navMenuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      navMenuToggle.classList.toggle('open', isOpen);
      navMenuToggle.setAttribute('aria-expanded', isOpen);
      mobileNav.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        navMenuToggle.classList.remove('open');
        navMenuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href   = this.getAttribute('href');
      const target = document.querySelector(href);
      if (!target || href === '#') return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Close mobile nav on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      navMenuToggle.classList.remove('open');
      navMenuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
})();


// ----------------------------------------------------------------
// OVERLAYS — Open / Close / Keyboard
// ----------------------------------------------------------------
(function initOverlays() {
  function openOverlay(overlayEl) {
    if (!overlayEl) return;
    overlayEl.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Focus the first focusable element
    const firstFocusable = overlayEl.querySelector('button, [tabindex="0"]');
    if (firstFocusable) setTimeout(() => firstFocusable.focus(), 50);
  }

  function closeOverlay(overlayEl) {
    if (!overlayEl) return;
    overlayEl.classList.remove('open');
    document.body.style.overflow = '';
  }

  function setupOverlay(triggerId, overlayId, closeId) {
    const trigger = document.getElementById(triggerId);
    const overlay = document.getElementById(overlayId);
    const closeBtn= document.getElementById(closeId);

    if (trigger && overlay) {
      const openFn = () => openOverlay(overlay);
      trigger.addEventListener('click', openFn);
      trigger.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openFn(); }
      });
    }
    if (closeBtn && overlay) {
      closeBtn.addEventListener('click', () => closeOverlay(overlay));
    }
    // Click outside overlay content
    if (overlay) {
      overlay.addEventListener('click', e => {
        if (e.target === overlay) closeOverlay(overlay);
      });
    }
  }

  // Experience overlay
  setupOverlay('openExpOverlay', 'expOverlay', 'closeExpOverlay');

  // Project overlays
  setupOverlay('openProject1', 'project1Overlay', 'closeProject1');
  setupOverlay('openProject2', 'project2Overlay', 'closeProject2');
  setupOverlay('openProject3', 'project3Overlay', 'closeProject3');
  setupOverlay('openProject4', 'project4Overlay', 'closeProject4');
  setupOverlay('openProject5', 'project5Overlay', 'closeProject5');

  // Global ESC key handler
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.overlay.open').forEach(o => closeOverlay(o));
    }
  });
})();


// ----------------------------------------------------------------
// ENGINEERING STACK — Tab switching
// ----------------------------------------------------------------
(function initStack() {
  const cats   = document.querySelectorAll('.stack-cat');
  const panels = document.querySelectorAll('.stack-panel');

  cats.forEach(cat => {
    cat.addEventListener('click', () => {
      const target = cat.dataset.cat;

      cats.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => {
        p.classList.remove('active');
        p.hidden = true;
      });

      cat.classList.add('active');
      cat.setAttribute('aria-selected', 'true');

      const panel = document.querySelector(`.stack-panel[data-panel="${target}"]`);
      if (panel) {
        panel.hidden = false;
        panel.classList.add('active');
      }
    });

    // Keyboard navigation for tab list
    cat.addEventListener('keydown', e => {
      const catList = [...cats];
      const idx     = catList.indexOf(cat);
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const next = catList[(idx + 1) % catList.length];
        next.focus(); next.click();
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = catList[(idx - 1 + catList.length) % catList.length];
        prev.focus(); prev.click();
      }
    });
  });
})();


// ----------------------------------------------------------------
// EDUCATION — Expand / Collapse
// ----------------------------------------------------------------
(function initEducation() {
  const items = document.querySelectorAll('.edu-item');

  items.forEach(item => {
    function toggle() {
      const expanded = item.getAttribute('aria-expanded') === 'true';
      // Collapse all
      items.forEach(i => i.setAttribute('aria-expanded', 'false'));
      // Toggle clicked
      if (!expanded) item.setAttribute('aria-expanded', 'true');
    }

    item.addEventListener('click',   toggle);
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
})();


// ----------------------------------------------------------------
// SCROLL REVEAL — IntersectionObserver
// ----------------------------------------------------------------
(function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.about-layout, .about-content, .identity-words, ' +
    '.exp-card, ' +
    '.featured-project, .other-project-row, ' +
    '.stack-layout, ' +
    '.edu-item, ' +
    '.cert-card, ' +
    '.hackathon-block, ' +
    '.contact-links, .contact-bottom, .display-contact'
  );

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger sibling elements slightly
    el.style.transitionDelay = (i % 5) * 0.06 + 's';
    observer.observe(el);
  });
})();


// ----------------------------------------------------------------
// SCROLL TO TOP
// ----------------------------------------------------------------
(function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 600);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


// ----------------------------------------------------------------
// PAGE LOAD — Fade in body
// ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity  = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });
});