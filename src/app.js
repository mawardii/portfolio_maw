(function () {
  const h = React.createElement;
  const { useEffect, useRef } = React;

  const profile = {
    name: "Mawardi Rosli",
    role: "AI/ML Research Officer",
    location: "Malaysia",
    statement: "Beyond Notebooks.",
    intro:
      "I design applied AI systems that move from research experiments into usable workflows across GenAI, RAG, OCR, computer vision, and model optimization.",
    insight:
      "Research Officer at MIMOS Berhad and Intelligent Systems Engineering graduate, currently focused on systems that make model behavior easier to retrieve, evaluate, and deploy.",
    socials: [
      ["LinkedIn", "https://www.linkedin.com/in/mawardi-rosli-04b299334"],
      ["GitHub", "https://github.com/mawardii"],
    ],
  };

  const navItems = [
    ["01", "AI/ML", "#overview"],
    ["02", "Neural", "#approach"],
    ["03", "Programs", "#projects"],
    ["04", "Updates", "#progress"],
    ["05", "Contact", "#contact"],
  ];

  const focusAreas = [
    ["RAG Agents", "Grounded retrieval loops for document-heavy workflows."],
    ["OCR Lab", "Fine-tuning and evaluation for visual text pipelines."],
    ["Model Ops", "Optimization work for faster, cleaner deployment paths."],
  ];

  const overview = [
    ["0.1 Our Mission", "Turn AI prototypes into systems that people can actually use."],
    ["0.2 Our Vision", "Build calm interfaces around complex intelligence."],
    ["0.3 Our Ambition", "Make GenAI workflows easier to evaluate, trust, and ship."],
    ["Industries", "Research, automation, document intelligence, visual AI."],
    ["Core Business", "Applied AI engineering and end-to-end model pipelines."],
    ["Domain", "mawardi.dev"],
  ];

  const language = [
    ["RAG", "Retrieval Augmented Generation"],
    ["OCR", "Optical Character Recognition"],
    ["MLOps", "Model workflow and deployment discipline"],
  ];

  const projects = [
    {
      number: "01",
      title: "OCR Fine-tuning",
      label: "Computer Vision",
      body:
        "Improving text extraction pipelines with better data handling, evaluation, and domain-aware model tuning.",
    },
    {
      number: "02",
      title: "RAG Chatbot Implementations",
      label: "LLM Systems",
      body:
        "Designing grounded assistants that connect documents, retrieval, memory, and answer generation.",
    },
    {
      number: "03",
      title: "Optimization Lab",
      label: "Inference",
      body:
        "Exploring lighter model workflows, practical benchmarking, and deployment-minded iteration.",
    },
  ];

  const progress = [
    {
      number: "1.0",
      title: "Scientific Evidence",
      body: "A research foundation in Intelligent Systems Engineering, AI pipelines, and data-driven iteration.",
      action: "Education",
    },
    {
      number: "2.0",
      title: "Driven by Practice",
      body: "Current work as a Research Officer translating experiments into applied AI workflows.",
      action: "Experience",
    },
    {
      number: "3.0",
      title: "Get in Touch",
      body: "Open to conversations around GenAI systems, OCR, RAG, model optimization, and research engineering.",
      action: "Social",
    },
  ];

  const tech = [
    "Python",
    "NumPy",
    "Pandas",
    "OpenCV",
    "LLMs",
    "RAG",
    "Deep Learning",
    "FastAPI",
    "Docker",
    "PostgreSQL",
    "Jupyter",
    "WSL2",
  ];

  const spotify = {
    title: "Current Rotation",
    embedUrl:
      "https://open.spotify.com/embed/playlist/1w3FcOORBfn6fLcfU2rwV3?utm_source=generator",
  };

  function IconArrow() {
    return h("span", { className: "arrow", "aria-hidden": "true" }, "->");
  }

  function RevealObserver() {
    useEffect(() => {
      const items = document.querySelectorAll("[data-reveal]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
      );

      items.forEach((item) => observer.observe(item));
      return () => observer.disconnect();
    }, []);

    return null;
  }

  function ScrollRuntime() {
    useEffect(() => {
      const header = document.querySelector(".site-header");
      const progressBar = document.querySelector("[data-progress]");
      let frame = 0;

      function update() {
        frame = 0;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progressValue = scrollable > 0 ? window.scrollY / scrollable : 0;
        const heroScale = 1 + Math.min(window.scrollY, 220) * 0.00012;
        const approachShift = Math.min(window.scrollY, 500) * -0.018;
        document.documentElement.style.setProperty("--page-scroll", String(window.scrollY));
        document.documentElement.style.setProperty("--hero-scale", heroScale.toFixed(4));
        document.documentElement.style.setProperty("--approach-shift", `${approachShift.toFixed(2)}px`);
        progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progressValue))})`;
        header.classList.toggle("is-scrolled", window.scrollY > 24);
      }

      function requestUpdate() {
        if (!frame) frame = requestAnimationFrame(update);
      }

      update();
      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", requestUpdate);

      return () => {
        window.removeEventListener("scroll", requestUpdate);
        window.removeEventListener("resize", requestUpdate);
        if (frame) cancelAnimationFrame(frame);
      };
    }, []);

    return h("div", { className: "scroll-progress", "data-progress": true });
  }

  function HeroVisual() {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      let width = 0;
      let height = 0;
      let raf = 0;
      let tick = 0;

      function resize() {
        const rect = canvas.getBoundingClientRect();
        const ratio = window.devicePixelRatio || 1;
        width = rect.width;
        height = rect.height;
        canvas.width = Math.max(1, width * ratio);
        canvas.height = Math.max(1, height * ratio);
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      }

      function wave(yBase, amp, speed, color, widthLine) {
        ctx.beginPath();
        for (let x = -20; x <= width + 20; x += 16) {
          const y =
            yBase +
            Math.sin(x * 0.011 + tick * speed) * amp +
            Math.sin(x * 0.027 - tick * speed * 0.7) * amp * 0.34;
          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        ctx.stroke();
      }

      function draw() {
        tick += 0.011;
        ctx.clearRect(0, 0, width, height);

        const bg = ctx.createLinearGradient(0, 0, width, height);
        bg.addColorStop(0, "#f7f8f4");
        bg.addColorStop(0.45, "#dfe5de");
        bg.addColorStop(1, "#f4eee7");
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, width, height);

        ctx.globalAlpha = 0.28;
        for (let x = 0; x < width; x += 52) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x + Math.sin(tick + x) * 16, height);
          ctx.strokeStyle = "#17201c";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.globalAlpha = 1;

        wave(height * 0.44, 34, 1.2, "rgba(17, 24, 39, 0.42)", 1.1);
        wave(height * 0.53, 48, 0.82, "rgba(15, 118, 110, 0.36)", 1);
        wave(height * 0.64, 28, 1.6, "rgba(255, 111, 97, 0.30)", 1);

        ctx.fillStyle = "rgba(17, 24, 39, 0.78)";
        for (let i = 0; i < 26; i += 1) {
          const x = ((i * 97 + Math.sin(tick + i) * 28) % width + width) % width;
          const y = height * (0.22 + ((i * 37) % 56) / 100);
          ctx.beginPath();
          ctx.arc(x, y, i % 5 === 0 ? 2.4 : 1.4, 0, Math.PI * 2);
          ctx.fill();
        }

        raf = requestAnimationFrame(draw);
      }

      resize();
      draw();
      window.addEventListener("resize", resize);

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", resize);
      };
    }, []);

    return h(
      "div",
      { className: "hero-visual", "data-reveal": true },
      h(canvasRef ? "canvas" : "div", {
        ref: canvasRef,
        "aria-hidden": "true",
      }),
      h("div", { className: "hero-visual-caption" }, "RAG / OCR / Optimization signal study")
    );
  }

  function Header() {
    return h(
      "header",
      { className: "site-header" },
      h("a", { className: "brand", href: "#top", "aria-label": "Mawardi Rosli home" }, "MAWARDI"),
      h(
        "nav",
        { className: "main-nav", "aria-label": "Primary navigation" },
        navItems.map(([number, label, href]) =>
          h(
            "a",
            { href, key: href },
            h("span", null, number),
            label
          )
        )
      )
    );
  }

  function FloatingSpotify() {
    return h(
      "aside",
      { className: "audio-dock", "aria-label": "Spotify playlist" },
      h("div", { className: "audio-label" }, h("span", null, "Listening"), h("strong", null, spotify.title)),
      h("iframe", {
        title: "Spotify playlist",
        src: spotify.embedUrl,
        width: "100%",
        height: "152",
        frameBorder: "0",
        allowFullScreen: true,
        allow:
          "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
        loading: "lazy",
      })
    );
  }

  function Hero() {
    return h(
      "section",
      { id: "top", className: "hero" },
      h(
        "div",
        { className: "hero-copy-block" },
        h("p", { className: "hero-kicker", "data-reveal": true }, `${profile.role} / ${profile.location}`),
        h("h1", { "data-reveal": true }, profile.statement),
        h("a", { className: "explore-link", href: "#overview", "data-reveal": true }, "Explore", h(IconArrow))
      ),
      h(
        "div",
        { className: "hero-focus", "data-reveal": true },
        focusAreas.map(([title, body]) =>
          h(
            "a",
            { href: "#projects", key: title },
            h("strong", null, title),
            h("span", null, body)
          )
        )
      ),
      h(HeroVisual)
    );
  }

  function SectionTitle({ kicker, title }) {
    return h(
      "div",
      { className: "section-title", "data-reveal": true },
      h("p", null, kicker),
      h("h2", null, title)
    );
  }

  function Overview() {
    return h(
      "section",
      { id: "overview", className: "overview section-wrap" },
      h(SectionTitle, { kicker: "Overview Breakthrough", title: "Applied intelligence, made useful." }),
      h(
        "div",
        { className: "overview-lede", "data-reveal": true },
        h("p", null, profile.intro),
        h("a", { href: "#progress" }, "Research Insight", h(IconArrow))
      ),
      h(
        "div",
        { className: "overview-grid" },
        overview.map(([label, value]) =>
          h(
            "article",
            { key: label, "data-reveal": true },
            h("span", null, label),
            h("strong", null, value)
          )
        )
      ),
      h(
        "div",
        { className: "language-row", "data-reveal": true },
        h("span", null, "0.4 How I Work"),
        language.map(([short, long]) =>
          h("div", { key: short }, h("strong", null, short), h("p", null, long))
        )
      )
    );
  }

  function Approach() {
    return h(
      "section",
      { id: "approach", className: "approach section-wrap" },
      h(SectionTitle, { kicker: "Meet My", title: "Invisible Approach" }),
      h(
        "div",
        { className: "approach-media" },
        h(
          "figure",
          { "data-reveal": true },
          h("div", { className: "approach-image approach-image-one" }),
          h("figcaption", null, "Retrieval systems that keep answers tied to evidence.")
        ),
        h(
          "figure",
          { "data-reveal": true },
          h("div", { className: "approach-image approach-image-two" }),
          h("figcaption", null, "Vision pipelines that turn noisy text into reliable structure.")
        )
      ),
      h(
        "div",
        { className: "approach-text", "data-reveal": true },
        h(
          "p",
          null,
          "I am currently shaping my work around AI systems that are quiet at the interface and rigorous underneath: retrieval, evaluation, model behavior, deployment constraints, and the workflows that connect them."
        ),
        h("a", { href: "#projects" }, "Explore in depth", h(IconArrow))
      )
    );
  }

  function Projects() {
    return h(
      "section",
      { id: "projects", className: "projects section-wrap" },
      h(SectionTitle, { kicker: "Our Progress", title: "The new method." }),
      h(
        "div",
        { className: "project-list" },
        projects.map((project) =>
          h(
            "article",
            { key: project.title, "data-reveal": true },
            h("span", { className: "project-number" }, project.number),
            h("div", null, h("p", null, project.label), h("h3", null, project.title)),
            h("p", null, project.body),
            h("a", { href: "#contact" }, "Discuss", h(IconArrow))
          )
        )
      ),
      h(
        "div",
        { className: "tech-strip", "data-reveal": true },
        tech.map((item) => h("span", { key: item }, item))
      )
    );
  }

  function Progress() {
    return h(
      "section",
      { id: "progress", className: "progress section-wrap" },
      progress.map((item) =>
        h(
          "article",
          { key: item.number, "data-reveal": true },
          h("span", null, item.number),
          h("div", null, h("h2", null, item.title), h("p", null, item.body)),
          h("a", { href: item.number === "3.0" ? "#contact" : "#overview" }, item.action, h(IconArrow))
        )
      )
    );
  }

  function Contact() {
    return h(
      "footer",
      { id: "contact", className: "site-footer" },
      h(
        "div",
        { "data-reveal": true },
        h("p", null, "3.0 Follow"),
        h("h2", null, "Let the work keep moving.")
      ),
      h(
        "div",
        { className: "footer-links", "data-reveal": true },
        profile.socials.map(([label, href]) =>
          h("a", { href, target: "_blank", rel: "noreferrer", key: label }, label, h(IconArrow))
        )
      )
    );
  }

  function App() {
    return h(
      React.Fragment,
      null,
      h(ScrollRuntime),
      h(RevealObserver),
      h(Header),
      h(FloatingSpotify),
      h("main", null, h(Hero), h(Overview), h(Approach), h(Projects), h(Progress)),
      h(Contact)
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
