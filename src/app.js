(function () {
  const h = React.createElement;
  const { useEffect, useRef } = React;

  const profile = {
    name: "Mawardi Rosli",
    title: "AI/ML Research Officer",
    location: "Malaysia",
    hero:
      "Building calm interfaces for intelligent systems.",
    intro:
      "I work on end-to-end AI pipelines across Generative AI, RAG, OCR, computer vision, and model optimization. My goal is to turn experimental notebooks into usable, evaluated workflows.",
    emailPlaceholder: "Write a note about GenAI, RAG, OCR, or anything worth building...",
    spotify:
      "https://open.spotify.com/embed/playlist/1w3FcOORBfn6fLcfU2rwV3?utm_source=generator",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/mawardi-rosli-04b299334"],
      ["GitHub", "https://github.com/mawardii"],
    ],
  };

  const nav = [
    ["01", "About", "#about"],
    ["02", "Experience", "#experience"],
    ["03", "Projects", "#projects"],
    ["04", "Contact", "#contact"],
  ];

  const aboutCards = [
    {
      eyebrow: "Current Focus",
      title: "GenAI systems, RAG agents, OCR pipelines.",
      body: "Researching how retrieval, visual text extraction, and model behavior can become more reliable in real workflows.",
      size: "bento-large",
    },
    {
      eyebrow: "Profile",
      title: "Research Officer",
      body: "MIMOS Berhad",
      size: "bento-small",
    },
    {
      eyebrow: "Education",
      title: "Intelligent Systems Engineering",
      body: "Graduate foundation in AI, automation, data systems, and applied engineering.",
      size: "bento-tall",
    },
    {
      eyebrow: "Method",
      title: "Prototype. Evaluate. Refine. Ship.",
      body: "I like clean systems, measured iteration, and interfaces that make complex models feel manageable.",
      size: "bento-wide",
    },
  ];

  const experience = [
    {
      date: "Present",
      role: "Research Officer",
      org: "MIMOS Berhad",
      body: "Applied AI research across LLM workflows, computer vision, and end-to-end pipeline development.",
    },
    {
      date: "Current",
      role: "RAG / OCR Builder",
      org: "Independent Projects",
      body: "Building retrieval assistants, OCR fine-tuning workflows, and evaluation loops for document intelligence.",
    },
    {
      date: "Foundation",
      role: "Intelligent Systems Engineering",
      org: "Graduate",
      body: "Technical grounding in AI systems, data processing, and software architecture.",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "OCR Fine-tuning",
      type: "Computer Vision",
      body: "A visual text pipeline focused on domain-specific extraction, model evaluation, and cleaner downstream structure.",
      visual: "visual-ocr",
    },
    {
      number: "02",
      title: "RAG Chatbot Implementations",
      type: "LLM Systems",
      body: "Retrieval-augmented assistants that connect documents, ranking, grounding, and response generation.",
      visual: "visual-rag",
    },
    {
      number: "03",
      title: "Model Optimization Lab",
      type: "Inference",
      body: "Experiments around lighter inference, benchmarking, and deployment-minded model iteration.",
      visual: "visual-opt",
    },
  ];

  const stack = [
    "Python",
    "NumPy",
    "Pandas",
    "OpenCV",
    "LLMs",
    "RAG",
    "Deep Learning",
    "FastAPI",
    "Flask",
    "Docker",
    "PostgreSQL",
    "Jupyter",
  ];

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function expoOut(value) {
    if (value >= 1) return 1;
    return 1 - Math.pow(2, -10 * value);
  }

  function Arrow() {
    return h("span", { className: "arrow", "aria-hidden": "true" }, "->");
  }

  function KineticHeading({ as = "h2", className = "", children }) {
    const text = String(children);
    const words = text.split(/\s+/).filter(Boolean);

    return h(
      as,
      {
        className: `kinetic-heading ${className}`.trim(),
        "data-kinetic-heading": true,
        "data-reveal": true,
        "aria-label": text,
      },
      words.map((word, index) =>
        h(
          "span",
          {
            className: "kinetic-word",
            "aria-hidden": "true",
            key: `${word}-${index}`,
            style: { "--word-delay": `${index * 64}ms` },
          },
          h("span", { className: "kinetic-word-text" }, word)
        )
      )
    );
  }

  function RevealRuntime() {
    useEffect(() => {
      const elements = document.querySelectorAll("[data-reveal]");
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const revealTimeouts = new Set();
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            const delay = Number(entry.target.dataset.revealDelay || 0);
            const timeout = window.setTimeout(() => {
              entry.target.style.setProperty("--reveal-delay", "0ms");
              revealTimeouts.delete(timeout);
            }, delay + 1200);
            revealTimeouts.add(timeout);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
      );

      function syncMotionPreference() {
        document.documentElement.classList.toggle("reduced-motion", reducedMotion.matches);
      }

      syncMotionPreference();
      reducedMotion.addEventListener("change", syncMotionPreference);

      elements.forEach((element, index) => {
        const delay = Math.min(index % 8, 7) * 70;
        element.dataset.revealDelay = String(delay);
        element.style.setProperty("--reveal-delay", `${delay}ms`);
        observer.observe(element);
      });

      return () => {
        observer.disconnect();
        revealTimeouts.forEach((timeout) => window.clearTimeout(timeout));
        reducedMotion.removeEventListener("change", syncMotionPreference);
      };
    }, []);

    return null;
  }

  function SmoothScrollRuntime() {
    useEffect(() => {
      const content = document.querySelector("[data-smooth-content]");
      const progress = document.querySelector("[data-progress]");
      const header = document.querySelector(".nav");
      const sections = Array.from(document.querySelectorAll("[data-section-layer]"));
      const galleries = Array.from(document.querySelectorAll("[data-project-gallery]"));
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const coarse = window.matchMedia("(pointer: coarse)").matches;
      const narrow = window.innerWidth < 760;

      sections.forEach((section, index) => {
        section.style.setProperty("--section-index", String(index + 1));
      });

      function updateProgress(scrollY) {
        if (!progress) return;
        const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
        progress.style.transform = `scaleX(${Math.min(1, scrollY / maxScroll)})`;
      }

      function updateSectionLayers(scrollY) {
        if (reduced || coarse || narrow) return;

        sections.forEach((section, index) => {
          if (index === 0) {
            section.style.setProperty("--layer-x", "0px");
            section.style.setProperty("--layer-y", "0px");
            section.style.setProperty("--layer-scale", "1");
            return;
          }

          const start = section.offsetTop - window.innerHeight * 0.92;
          const end = section.offsetTop - window.innerHeight * 0.12;
          const raw = clamp((scrollY - start) / Math.max(1, end - start), 0, 1);
          const eased = expoOut(raw);
          const direction = index % 2 === 0 ? -1 : 1;

          section.style.setProperty("--layer-x", `${((1 - eased) * direction * 42).toFixed(2)}px`);
          section.style.setProperty("--layer-y", `${((1 - eased) * 88).toFixed(2)}px`);
          section.style.setProperty("--layer-scale", (0.985 + eased * 0.015).toFixed(4));
        });
      }

      function updateProjectRail() {
        galleries.forEach((gallery) => {
          const galleryRect = gallery.getBoundingClientRect();
          if (galleryRect.bottom < 0 || galleryRect.top > window.innerHeight) return;

          const center = galleryRect.left + galleryRect.width / 2;
          const cards = Array.from(gallery.querySelectorAll(".project-card"));

          cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.left + rect.width / 2;
            const distance = Math.abs(cardCenter - center);
            const active = clamp(1 - distance / Math.max(1, galleryRect.width * 0.68), 0, 1);
            const eased = expoOut(active);

            card.style.setProperty("--project-scale", (0.965 + eased * 0.035).toFixed(4));
            card.style.setProperty("--project-y", `${((1 - eased) * 18).toFixed(2)}px`);
          });
        });
      }

      function updateChrome(scrollY) {
        updateProgress(scrollY);
        updateSectionLayers(scrollY);
        updateProjectRail();
        if (header) header.classList.toggle("is-scrolled", scrollY > 24);
      }

      function handleGalleryWheel(event) {
        const gallery = event.currentTarget;
        const maxScroll = gallery.scrollWidth - gallery.clientWidth;
        if (maxScroll <= 0 || reduced) return;

        const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
        if (!delta) return;

        const next = clamp(gallery.scrollLeft + delta * 1.14, 0, maxScroll);
        const atStart = gallery.scrollLeft <= 0 && delta < 0;
        const atEnd = gallery.scrollLeft >= maxScroll - 1 && delta > 0;

        if (atStart || atEnd) return;

        event.preventDefault();
        gallery.scrollLeft = next;
        updateProjectRail();
      }

      galleries.forEach((gallery) => {
        gallery.addEventListener("wheel", handleGalleryWheel, { passive: false });
        gallery.addEventListener("scroll", updateProjectRail, { passive: true });
      });

      if (!content || reduced || coarse || narrow) {
        document.documentElement.classList.add("native-scroll");
        updateChrome(window.scrollY);

        function handleNativeScroll() {
          updateChrome(window.scrollY);
        }

        window.addEventListener("scroll", handleNativeScroll, { passive: true });

        return () => {
          window.removeEventListener("scroll", handleNativeScroll);
          galleries.forEach((gallery) => {
            gallery.removeEventListener("wheel", handleGalleryWheel);
            gallery.removeEventListener("scroll", updateProjectRail);
          });
        };
      }

      document.documentElement.classList.remove("native-scroll");

      let current = window.scrollY;
      let target = window.scrollY;
      let raf = 0;

      function setHeight() {
        document.body.style.height = `${content.getBoundingClientRect().height}px`;
      }

      function update() {
        target = window.scrollY;
        current += (target - current) * 0.085;

        if (Math.abs(target - current) < 0.08) current = target;

        content.style.transform = `translate3d(0, ${-current}px, 0)`;
        document.documentElement.style.setProperty("--scroll-y", current.toFixed(2));

        updateChrome(current);

        raf = requestAnimationFrame(update);
      }

      function handleAnchor(event) {
        const link = event.target.closest('a[href^="#"]');
        if (!link) return;
        const targetElement = document.querySelector(link.getAttribute("href"));
        if (!targetElement) return;
        event.preventDefault();
        const top = targetElement.getBoundingClientRect().top + current;
        window.scrollTo({ top, behavior: "smooth" });
      }

      setHeight();
      setTimeout(setHeight, 250);
      setTimeout(setHeight, 1200);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(setHeight);
      }

      const resizeObserver = new ResizeObserver(setHeight);
      resizeObserver.observe(content);

      update();
      window.addEventListener("resize", setHeight);
      document.addEventListener("click", handleAnchor);

      return () => {
        cancelAnimationFrame(raf);
        resizeObserver.disconnect();
        window.removeEventListener("resize", setHeight);
        document.removeEventListener("click", handleAnchor);
        galleries.forEach((gallery) => {
          gallery.removeEventListener("wheel", handleGalleryWheel);
          gallery.removeEventListener("scroll", updateProjectRail);
        });
        document.body.style.height = "";
        content.style.transform = "";
      };
    }, []);

    return h("div", { className: "scroll-progress", "data-progress": true });
  }

  function PropelInteractionsRuntime() {
    useEffect(() => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return undefined;

      const magneticTargets = Array.from(document.querySelectorAll("[data-magnetic]"));
      const tiltCards = Array.from(document.querySelectorAll("[data-tilt-card]"));
      const pointer = { x: 0, y: 0 };
      let raf = 0;

      function resetMagnet(target) {
        target.style.setProperty("--magnet-x", "0px");
        target.style.setProperty("--magnet-y", "0px");
        target.style.setProperty("--magnet-scale", "1");
      }

      function updateMagnet() {
        raf = 0;

        magneticTargets.forEach((target) => {
          const rect = target.getBoundingClientRect();
          const radius = 30;
          const inRange =
            pointer.x >= rect.left - radius &&
            pointer.x <= rect.right + radius &&
            pointer.y >= rect.top - radius &&
            pointer.y <= rect.bottom + radius;

          if (!inRange) {
            resetMagnet(target);
            return;
          }

          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const edgeX = Math.max(Math.abs(pointer.x - centerX) - rect.width / 2, 0);
          const edgeY = Math.max(Math.abs(pointer.y - centerY) - rect.height / 2, 0);
          const edgeDistance = Math.hypot(edgeX, edgeY);
          const intensity = 1 - clamp(edgeDistance / radius, 0, 1);
          const x = clamp((pointer.x - centerX) * 0.18 * intensity, -12, 12);
          const y = clamp((pointer.y - centerY) * 0.18 * intensity, -10, 10);

          target.style.setProperty("--magnet-x", `${x.toFixed(2)}px`);
          target.style.setProperty("--magnet-y", `${y.toFixed(2)}px`);
          target.style.setProperty("--magnet-scale", (1 + intensity * 0.025).toFixed(3));
        });
      }

      function handlePointerMove(event) {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        if (!raf) raf = requestAnimationFrame(updateMagnet);
      }

      function handlePointerLeave() {
        magneticTargets.forEach(resetMagnet);
      }

      function handleTilt(event) {
        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        card.style.setProperty("--tilt-x", `${(-y * 6).toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
      }

      function resetTilt(event) {
        const card = event.currentTarget;
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      }

      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerleave", handlePointerLeave);
      tiltCards.forEach((card) => {
        card.addEventListener("pointermove", handleTilt);
        card.addEventListener("pointerleave", resetTilt);
      });

      return () => {
        cancelAnimationFrame(raf);
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerleave", handlePointerLeave);
        tiltCards.forEach((card) => {
          card.removeEventListener("pointermove", handleTilt);
          card.removeEventListener("pointerleave", resetTilt);
        });
      };
    }, []);

    return null;
  }

  function Nav() {
    return h(
      "header",
      { className: "nav" },
      h("a", { className: "nav-brand", href: "#top" }, "Mawardi Rosli"),
      h(
        "nav",
        { className: "nav-links", "aria-label": "Primary navigation" },
        nav.map(([number, label, href]) =>
          h("a", { href, key: href }, h("span", null, number), label)
        )
      )
    );
  }

  function SpotifyPanel() {
    return h(
      "aside",
      { className: "spotify-panel", "data-reveal": true },
      h("div", { className: "spotify-copy" }, h("span", null, "On rotation"), h("strong", null, "Music while building")),
      h("iframe", {
        title: "Spotify playlist",
        src: profile.spotify,
        width: "100%",
        height: "152",
        frameBorder: "0",
        allowFullScreen: true,
        allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
        loading: "lazy",
      })
    );
  }

  function Hero() {
    return h(
      "section",
      { id: "top", className: "hero grid-shell", "data-section-layer": true },
      h(
        "div",
        { className: "hero-meta", "data-reveal": true },
        h("span", null, profile.title),
        h("span", null, profile.location)
      ),
      h(KineticHeading, { as: "h1", className: "hero-title" }, profile.hero),
      h("p", { className: "hero-intro", "data-reveal": true }, profile.intro),
      h(SpotifyPanel)
    );
  }

  function SectionHeading({ number, title, label }) {
    return h(
      "div",
      { className: "section-heading grid-shell" },
      h("span", { "data-reveal": true }, number),
      h("p", { "data-reveal": true }, label),
      h(KineticHeading, null, title)
    );
  }

  function About() {
    return h(
      "section",
      { id: "about", className: "section-block", "data-section-layer": true },
      h(SectionHeading, {
        number: "01",
        label: "About / Education",
        title: "Research mind, production habits.",
      }),
      h(
        "div",
        { className: "bento grid-shell" },
        aboutCards.map((card) =>
          h(
            "article",
            {
              className: `bento-card ${card.size}`,
              key: card.eyebrow,
              "data-reveal": true,
              "data-tilt-card": true,
            },
            h("span", null, card.eyebrow),
            h("h3", null, card.title),
            h("p", null, card.body)
          )
        )
      )
    );
  }

  function Experience() {
    return h(
      "section",
      { id: "experience", className: "section-block", "data-section-layer": true },
      h(SectionHeading, {
        number: "02",
        label: "Experience",
        title: "A timeline of applied AI work.",
      }),
      h(
        "div",
        { className: "timeline grid-shell" },
        experience.map((item) =>
          h(
            "article",
            { className: "timeline-item", key: item.role, "data-reveal": true, "data-tilt-card": true },
            h("time", null, item.date),
            h(
              "div",
              null,
              h("h3", null, item.role),
              h("span", null, item.org),
              h("p", null, item.body)
            )
          )
        )
      )
    );
  }

  function ProjectVisual({ type }) {
    return h(
      "div",
      { className: `project-visual ${type}`, "aria-hidden": "true" },
      h("span", null),
      h("span", null),
      h("span", null)
    );
  }

  function Projects() {
    return h(
      "section",
      { id: "projects", className: "section-block projects", "data-section-layer": true },
      h(SectionHeading, {
        number: "03",
        label: "Project Gallery",
        title: "Large-format studies in AI systems.",
      }),
      h(
        "div",
        { className: "project-gallery grid-shell", "data-project-gallery": true },
        projects.map((project) =>
          h(
            "article",
            { className: "project-card", key: project.title, "data-reveal": true },
            h(ProjectVisual, { type: project.visual }),
            h(
              "div",
              { className: "project-content" },
              h("span", null, project.number),
              h("p", null, project.type),
              h("h3", null, project.title),
              h("p", null, project.body)
            )
          )
        )
      ),
      h(
        "div",
        { className: "stack-strip grid-shell", "data-reveal": true },
        stack.map((item) => h("span", { key: item }, item))
      )
    );
  }

  function Contact() {
    return h(
      "section",
      { id: "contact", className: "section-block contact-section", "data-section-layer": true },
      h(SectionHeading, {
        number: "04",
        label: "Contact",
        title: "Send a postcard from your side of the internet.",
      }),
      h(
        "div",
        { className: "contact-grid grid-shell" },
        h(
          "form",
          { className: "postcard", "data-reveal": true },
          h("label", { htmlFor: "message" }, "Message"),
          h("textarea", { id: "message", placeholder: profile.emailPlaceholder }),
          h(
            "div",
            { className: "postcard-footer" },
            h("span", null, "No backend yet"),
            h("button", { type: "button", "data-magnetic": true }, "Seal & Send", h(Arrow))
          )
        ),
        h(
          "div",
          { className: "social-card", "data-reveal": true },
          h("span", null, "Elsewhere"),
          profile.links.map(([label, href]) =>
            h(
              "a",
              { href, target: "_blank", rel: "noreferrer", key: label, "data-magnetic": true },
              label,
              h(Arrow)
            )
          )
        )
      )
    );
  }

  function App() {
    return h(
      React.Fragment,
      null,
      h(SmoothScrollRuntime),
      h(RevealRuntime),
      h(PropelInteractionsRuntime),
      h(Nav),
      h(
        "div",
        { className: "smooth-content", "data-smooth-content": true },
        h("main", null, h(Hero), h(About), h(Experience), h(Projects), h(Contact))
      )
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
