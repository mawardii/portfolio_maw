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

  function Arrow() {
    return h("span", { className: "arrow", "aria-hidden": "true" }, "->");
  }

  function RevealRuntime() {
    useEffect(() => {
      const elements = document.querySelectorAll("[data-reveal]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
      );

      elements.forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${Math.min(index % 8, 7) * 70}ms`);
        observer.observe(element);
      });

      return () => observer.disconnect();
    }, []);

    return null;
  }

  function SmoothScrollRuntime() {
    useEffect(() => {
      const content = document.querySelector("[data-smooth-content]");
      const progress = document.querySelector("[data-progress]");
      const header = document.querySelector(".nav");
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const coarse = window.matchMedia("(pointer: coarse)").matches;
      const narrow = window.innerWidth < 760;

      if (!content || reduced || coarse || narrow) {
        document.documentElement.classList.add("native-scroll");
        return undefined;
      }

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

        const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
        progress.style.transform = `scaleX(${Math.min(1, current / maxScroll)})`;
        header.classList.toggle("is-scrolled", current > 24);

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
        document.body.style.height = "";
        content.style.transform = "";
      };
    }, []);

    return h("div", { className: "scroll-progress", "data-progress": true });
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
      { id: "top", className: "hero grid-shell" },
      h(
        "div",
        { className: "hero-meta", "data-reveal": true },
        h("span", null, profile.title),
        h("span", null, profile.location)
      ),
      h("h1", { className: "hero-title", "data-reveal": true }, profile.hero),
      h("p", { className: "hero-intro", "data-reveal": true }, profile.intro),
      h(SpotifyPanel)
    );
  }

  function SectionHeading({ number, title, label }) {
    return h(
      "div",
      { className: "section-heading grid-shell", "data-reveal": true },
      h("span", null, number),
      h("p", null, label),
      h("h2", null, title)
    );
  }

  function About() {
    return h(
      "section",
      { id: "about", className: "section-block" },
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
            { className: `bento-card ${card.size}`, key: card.eyebrow, "data-reveal": true },
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
      { id: "experience", className: "section-block" },
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
            { className: "timeline-item", key: item.role, "data-reveal": true },
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
      { id: "projects", className: "section-block projects" },
      h(SectionHeading, {
        number: "03",
        label: "Project Gallery",
        title: "Large-format studies in AI systems.",
      }),
      h(
        "div",
        { className: "project-gallery grid-shell" },
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
      { id: "contact", className: "section-block contact-section" },
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
            h("button", { type: "button" }, "Draft note", h(Arrow))
          )
        ),
        h(
          "div",
          { className: "social-card", "data-reveal": true },
          h("span", null, "Elsewhere"),
          profile.links.map(([label, href]) =>
            h("a", { href, target: "_blank", rel: "noreferrer", key: label }, label, h(Arrow))
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
