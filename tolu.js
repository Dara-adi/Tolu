document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  /* HERO ANIMATION */
  const heroTL = gsap.timeline({
    defaults: {
      ease: "power4.out",
      duration: 1.2
    }
  });

  heroTL
    .from("#hero-tag", { opacity: 0, y: 40, delay: 0.2 })
    .from("#hero-title", { opacity: 0, y: 40 }, "-=0.9")
    .from("#hero-desc", { opacity: 0, y: 40 }, "-=0.9")
    .from("#hero-cta", { opacity: 0, y: 40 }, "-=0.9");

  /* HERO TILT */
  const heroSection = document.querySelector(".hero");
  const heroTitle = document.querySelector("#hero-title");

  if (window.innerWidth > 768 && heroSection) {
    heroSection.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;

      gsap.to(heroTitle, {
        rotationY: x,
        rotationX: -y,
        duration: 0.8,
        transformPerspective: 1000
      });
    });

    heroSection.addEventListener("mouseleave", () => {
      gsap.to(heroTitle, {
        rotationY: 0,
        rotationX: 0,
        duration: 1
      });
    });
  }

  /* ABOUT REVEAL */
  gsap.utils.toArray(".about-media, .about-content").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%"
      },
      opacity: 0,
      y: 50,
      duration: 1.1
    });
  });

  /* SERVICES */
  gsap.from(".service-card", {
    scrollTrigger: {
      trigger: ".services-grid",
      start: "top 80%"
    },
    opacity: 0,
    y: 60,
    stagger: 0.15,
    duration: 1
  });

  /* PORTFOLIO REVEAL */
  gsap.utils.toArray(".floating-item").forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%"
      },
      opacity: 0,
      y: 80,
      delay: i * 0.08,
      duration: 1
    });
  });

  /* FILTER */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".portfolio-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const cat = btn.getAttribute("data-filter");

      items.forEach((item) => {
        const itemCat = item.getAttribute("data-category");

        if (cat === "all" || itemCat === cat) {
          gsap.to(item, {
            opacity: 1,
            scale: 1,
            display: "block",
            duration: 0.4
          });
        } else {
          gsap.to(item, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3
          });

          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });

  /* MAGNETIC BUTTON */
  const btn = document.querySelector(".btn-magnetic");

  if (btn) {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.25,
        y: y * 0.25,
        duration: 0.3
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5
      });
    });
  }
});

