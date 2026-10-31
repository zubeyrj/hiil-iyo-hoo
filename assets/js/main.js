// Hiil iyo Hoo — shared site behaviour

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
  }

  // Sticky header shadow on scroll
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    });
  }

  // Animated counters (triggered once visible)
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
  const setTotal = (val) => {
    if (totalEl) totalEl.textContent = "$" + Number(val || 0).toLocaleString();
  };
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
