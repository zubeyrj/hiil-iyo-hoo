// Hiil iyo Hoo — shared site behaviour

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("nav-open"));
  }

  // Header-on-photo: switch to a solid white, pinned bar once scrolled
  const headerGroup = document.querySelector(".header-group.on-photo");
  if (headerGroup) {
    const toggleScrolled = () => headerGroup.classList.toggle("is-scrolled", window.scrollY > 40);
    window.addEventListener("scroll", toggleScrolled, { passive: true });
    toggleScrolled();
  }

  // Off-canvas panel
  const ocOpenBtns = document.querySelectorAll("[data-offcanvas-open]");
  const ocCloseBtns = document.querySelectorAll("[data-offcanvas-close]");
  const ocPanel = document.querySelector(".offcanvas-panel");
  const ocOverlay = document.querySelector(".offcanvas-overlay");
  const openOc = () => { ocPanel?.classList.add("is-open"); ocOverlay?.classList.add("is-open"); };
  const closeOc = () => { ocPanel?.classList.remove("is-open"); ocOverlay?.classList.remove("is-open"); };
  ocOpenBtns.forEach((b) => b.addEventListener("click", openOc));
  ocCloseBtns.forEach((b) => b.addEventListener("click", closeOc));
  ocOverlay?.addEventListener("click", closeOc);

  // Generic fade/tab slider: container with [data-slider], slides [data-slide], triggers [data-slide-to]
  document.querySelectorAll("[data-slider]").forEach((root) => {
    const slides = root.querySelectorAll("[data-slide]");
    const dots = root.querySelectorAll("[data-slide-to]");
    let i = 0;
    const show = (idx) => {
      slides.forEach((s, n) => s.classList.toggle("is-active", n === idx));
      dots.forEach((d, n) => d.classList.toggle("is-active", n === idx));
      i = idx;
    };
    dots.forEach((d, n) => d.addEventListener("click", () => show(n)));
    const auto = root.dataset.autoplay;
    if (auto) {
      setInterval(() => show((i + 1) % slides.length), parseInt(auto, 10));
    }
    show(0);
  });

  // Hero prev/next tabs
  document.querySelectorAll("[data-hero]").forEach((root) => {
    const slides = root.querySelectorAll("[data-hero-slide]");
    let i = 0;
    const show = (idx) => slides.forEach((s, n) => s.classList.toggle("is-active", n === idx));
    root.querySelectorAll("[data-hero-next]").forEach((b) => b.addEventListener("click", () => { i = (i + 1) % slides.length; show(i); }));
    root.querySelectorAll("[data-hero-prev]").forEach((b) => b.addEventListener("click", () => { i = (i - 1 + slides.length) % slides.length; show(i); }));
    setInterval(() => { i = (i + 1) % slides.length; show(i); }, 6500);
    show(0);
  });

  // Animated counters
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    const animate = (el) => {
      const target = parseInt(el.dataset.count, 10) || 0;
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(progress * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString();
      };
      requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => observer.observe(c));
  }

  // Donate page: amount chip selection
  const chips = document.querySelectorAll(".amount-chip[data-amount]");
  const totalEl = document.querySelector("[data-donate-total]");
  const customInput = document.querySelector("[data-custom-amount]");
  const setTotal = (val) => { if (totalEl) totalEl.textContent = "$" + Number(val || 0).toLocaleString(); };
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("selected"));
      chip.classList.add("selected");
      if (customInput) customInput.value = "";
      setTotal(chip.dataset.amount);
    });
  });
  if (customInput) {
    customInput.addEventListener("input", () => {
      chips.forEach((c) => c.classList.remove("selected"));
      setTotal(customInput.value);
    });
  }
});
