(function () {
  const h = React.createElement;
  const { useEffect, useState } = React;

  const profile = {
    name: "Mawardi Rosli",
    firstName: "Mawardi",
    lastName: "Rosli",
    title: "AI/ML Research Officer",
    location: "Malaysia",
    available: "Open to applied AI briefs",
    intro:
      "I build evaluated AI workflows across Generative AI, RAG, OCR, computer vision, and model optimization.",
    thesis:
      "My work sits between research prototypes and usable systems: clean interfaces, traceable model behavior, and practical evaluation loops.",
    spotify:
      "https://open.spotify.com/embed/playlist/1w3FcOORBfn6fLcfU2rwV3?utm_source=generator",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/mawardi-rosli-04b299334"],
      ["GitHub", "https://github.com/mawardii"],
    ],
  };

  const nav = [
    ["Work", "#projects", "01"],
    ["Capabilities", "#capabilities", "02"],
    ["Experience", "#experience", "03"],
    ["Agents", "#agents", "04"],
    ["Contact", "#contact", "05"],
  ];

  const consoleModes = [
    {
      id: "rag",
      label: "RAG",
      note: "Grounded retrieval",
      title: "Grounded answers over private knowledge.",
      copy:
        "Retrieval, metadata, reranking, citations, refusal behavior, and regression checks for document assistants.",
      steps: ["Ingest", "Chunk", "Retrieve", "Rerank", "Ground", "Evaluate"],
      accent: "blue",
    },
    {
      id: "ocr",
      label: "OCR",
      note: "Visual text",
      title: "Visual text pipelines with cleaner downstream structure.",
      copy:
        "Dataset review, extraction quality checks, fine-tuning workflows, and post-processing for document intelligence.",
      steps: ["Scan", "Detect", "Extract", "Normalize", "Validate"],
      accent: "green",
    },
    {
      id: "vision",
      label: "Vision",
      note: "Measured CV",
      title: "Computer vision systems that are measured, not guessed.",
      copy:
        "Applied model experiments for detection, preprocessing, annotation review, and failure-case analysis.",
      steps: ["Frame", "Label", "Train", "Inspect", "Improve"],
      accent: "amber",
    },
    {
      id: "opt",
      label: "Optimize",
      note: "Inference-aware",
      title: "Inference-minded iteration for smaller, steadier models.",
      copy:
        "Benchmarking, latency awareness, deployment constraints, and repeatable model comparison notes.",
      steps: ["Baseline", "Profile", "Compress", "Benchmark", "Ship"],
      accent: "graphite",
    },
  ];

  const capabilities = [
    {
      title: "RAG System Design",
      category: "Retrieval",
      level: "Core",
      body:
        "Chunking, metadata, retrieval strategy, reranking, grounding, refusal behavior, and evaluation set design.",
    },
    {
      title: "OCR Fine-tuning",
      category: "Vision",
      level: "Active",
      body:
        "Domain-specific visual text extraction with model checks and cleaner downstream document structure.",
    },
    {
      title: "Generative AI Workflows",
      category: "Generation",
      level: "Core",
      body:
        "LLM application flows that combine prompt design, tool use, grounding, and user-facing review states.",
    },
    {
      title: "Computer Vision",
      category: "Vision",
      level: "Applied",
      body:
        "Image preprocessing, model experimentation, annotation review, and measured failure analysis.",
    },
    {
      title: "Model Optimization",
      category: "Optimization",
      level: "Lab",
      body:
        "Inference-aware experiments around benchmarking, lighter models, and practical deployment tradeoffs.",
    },
    {
      title: "AI Evaluation",
      category: "Evaluation",
      level: "Habit",
      body:
        "Baselines, test sets, failure cases, acceptance thresholds, and regression checks before quality claims.",
    },
  ];

  const projects = [
    {
      title: "Document Intelligence RAG",
      type: "LLM Systems",
      status: "Active prototype",
      year: "2026",
      problem:
        "Make document answers easier to inspect by connecting retrieval evidence, response grounding, and evaluation notes.",
      method:
        "Structured ingestion, metadata-aware retrieval, answer generation, refusal behavior, and manual failure review.",
      stack: ["Python", "LLMs", "RAG", "Vector Search", "Evaluation"],
      evidence: ["Grounding checks", "Citation coverage", "Failure cases"],
      accent: "blue",
    },
    {
      title: "OCR Fine-tuning Workflow",
      type: "Computer Vision",
      status: "Research build",
      year: "2026",
      problem:
        "Improve visual text extraction for domain documents where raw OCR output needs stronger structure and validation.",
      method:
        "Dataset review, preprocessing, model iteration, extraction checks, and normalization for downstream use.",
      stack: ["Python", "OpenCV", "OCR", "CV", "Jupyter"],
      evidence: ["Extraction review", "Dataset slices", "Post-processing"],
      accent: "green",
    },
    {
      title: "Model Optimization Lab",
      type: "Inference",
      status: "Experiment track",
      year: "2026",
      problem:
        "Compare model behavior under real constraints instead of choosing architectures from benchmark headlines alone.",
      method:
        "Baseline measurement, latency notes, accuracy tradeoff review, and deployment-minded experiment tracking.",
      stack: ["Python", "Benchmarking", "Deep Learning", "Docker"],
      evidence: ["Baselines", "Latency notes", "Tradeoff log"],
      accent: "amber",
    },
  ];

  const experience = [
    {
      date: "Present",
      role: "Research Officer",
      org: "MIMOS Berhad",
      body:
        "Applied AI research across LLM workflows, computer vision, and end-to-end pipeline development.",
    },
    {
      date: "Current",
      role: "RAG / OCR Builder",
      org: "Independent Projects",
      body:
        "Building retrieval assistants, OCR workflows, and evaluation loops for document intelligence.",
    },
    {
      date: "Foundation",
      role: "Intelligent Systems Engineering",
      org: "Graduate",
      body:
        "Technical grounding in AI systems, automation, data processing, and applied engineering.",
    },
  ];

  const agentSkills = [
    {
      name: "iOS Interface Craft",
      tag: "Interface",
      body:
        "Guides premium minimalist layouts, hierarchy, typography, spacing, accessibility, and evidence-first portfolio design.",
      path: ".agents/skills/ios-interface-craft",
    },
    {
      name: "Motion Polish Review",
      tag: "Motion",
      body:
        "Sets timing, easing, reduced-motion, and performance checks so animation feels subtle and useful.",
      path: ".agents/skills/motion-polish-review",
    },
    {
      name: "Interactive Portfolio Systems",
      tag: "Interaction",
      body:
        "Shapes filters, project explorers, case-study panels, and AI evidence dashboards in the no-build React app.",
      path: ".agents/skills/interactive-portfolio-systems",
    },
    {
      name: "Portfolio Static Site",
      tag: "Runtime",
      body:
        "Keeps future work aligned with this repository's static React setup, preview flow, and verification rules.",
      path: ".agents/skills/portfolio-static-site",
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

  const contactTopics = [
    "RAG system",
    "OCR pipeline",
    "Computer vision",
    "Model evaluation",
  ];

  function Arrow() {
    return h("span", { className: "arrow", "aria-hidden": "true" }, "→");
  }

  function Index({ n }) {
    return h("span", { className: "idx", "aria-hidden": "true" }, n);
  }

  function SectionHeading({ index, eyebrow, title, copy }) {
    return h(
      "div",
      { className: "section-heading grid-shell" },
      h(
        "div",
        { className: "section-heading-label", "data-reveal": true },
        h(Index, { n: index }),
        h("p", { className: "eyebrow" }, eyebrow)
      ),
      h(
        "div",
        { className: "section-heading-body", "data-reveal": true },
        h("h2", null, title),
        copy && h("p", null, copy)
      )
    );
  }

  function RuntimeEffects() {
    useEffect(() => {
      const root = document.documentElement;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const progress = document.querySelector("[data-progress]");
      const navNode = document.querySelector(".nav");
      const reveals = Array.from(document.querySelectorAll("[data-reveal]"));
      const tiltCards = Array.from(document.querySelectorAll("[data-tilt-card]"));
      const magneticTargets = Array.from(document.querySelectorAll("[data-magnetic]"));
      const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
      const revealTimers = new Set();
      const tiltLeaveHandlers = new Map();
      let raf = 0;
      const pointer = { x: 0, y: 0 };

      function syncMotion() {
        root.classList.toggle("reduced-motion", reducedMotion.matches);
      }

      function updateScroll() {
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const ratio = Math.min(1, window.scrollY / max);
        if (progress) progress.style.transform = `scaleX(${ratio})`;
        if (navNode) navNode.classList.toggle("is-scrolled", window.scrollY > 18);
        root.style.setProperty("--scroll-ratio", ratio.toFixed(4));
      }

      function scheduleScroll() {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          updateScroll();
        });
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            revealNode(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );

      function revealNode(node) {
        node.classList.add("is-visible");
        const timer = window.setTimeout(() => revealTimers.delete(timer), 1000);
        revealTimers.add(timer);
        observer.unobserve(node);
      }

      function isInView(node) {
        const rect = node.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      }

      function revealVisibleNodes() {
        reveals.forEach((node) => {
          if (!node.classList.contains("is-visible") && isInView(node)) revealNode(node);
        });
      }

      reveals.forEach((node, index) => {
        node.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 60}ms`);
        if (isInView(node)) {
          revealNode(node);
        } else {
          observer.observe(node);
        }
      });

      // Scrollspy for the primary navigation.
      const spyTargets = navLinks
        .map((link) => {
          const id = (link.getAttribute("href") || "").replace("#", "");
          const section = id ? document.getElementById(id) : null;
          return section ? { link, section } : null;
        })
        .filter(Boolean);

      let spyObserver = null;
      if (spyTargets.length) {
        spyObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const match = spyTargets.find((t) => t.section === entry.target);
              if (match && entry.isIntersecting) {
                navLinks.forEach((l) => l.classList.remove("is-current"));
                match.link.classList.add("is-current");
              }
            });
          },
          { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );
        spyTargets.forEach((t) => spyObserver.observe(t.section));
      }

      function resetTilt(card) {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      }

      function handleTilt(event) {
        if (reducedMotion.matches || window.matchMedia("(pointer: coarse)").matches) return;
        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--tilt-x", `${(-y * 3).toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${(x * 3.5).toFixed(2)}deg`);
      }

      function updateMagnet() {
        magneticTargets.forEach((target) => {
          const rect = target.getBoundingClientRect();
          const radius = 28;
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const distance = Math.hypot(pointer.x - centerX, pointer.y - centerY);
          const intensity = Math.max(0, 1 - distance / (Math.max(rect.width, rect.height) + radius));
          const x = Math.max(-8, Math.min(8, (pointer.x - centerX) * 0.12 * intensity));
          const y = Math.max(-8, Math.min(8, (pointer.y - centerY) * 0.12 * intensity));
          target.style.setProperty("--magnet-x", `${x.toFixed(2)}px`);
          target.style.setProperty("--magnet-y", `${y.toFixed(2)}px`);
        });
      }

      function handlePointerMove(event) {
        if (reducedMotion.matches || window.matchMedia("(pointer: coarse)").matches) return;
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        updateMagnet();
      }

      function resetMagnet() {
        magneticTargets.forEach((target) => {
          target.style.setProperty("--magnet-x", "0px");
          target.style.setProperty("--magnet-y", "0px");
        });
      }

      syncMotion();
      updateScroll();
      reducedMotion.addEventListener("change", syncMotion);
      window.addEventListener("scroll", scheduleScroll, { passive: true });
      window.addEventListener("resize", updateScroll);
      window.addEventListener("hashchange", revealVisibleNodes);
      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerleave", resetMagnet);
      window.setTimeout(revealVisibleNodes, 240);
      window.setTimeout(revealVisibleNodes, 900);
      tiltCards.forEach((card) => {
        const leaveHandler = () => resetTilt(card);
        tiltLeaveHandlers.set(card, leaveHandler);
        card.addEventListener("pointermove", handleTilt);
        card.addEventListener("pointerleave", leaveHandler);
      });

      return () => {
        cancelAnimationFrame(raf);
        observer.disconnect();
        if (spyObserver) spyObserver.disconnect();
        revealTimers.forEach((timer) => window.clearTimeout(timer));
        reducedMotion.removeEventListener("change", syncMotion);
        window.removeEventListener("scroll", scheduleScroll);
        window.removeEventListener("resize", updateScroll);
        window.removeEventListener("hashchange", revealVisibleNodes);
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerleave", resetMagnet);
        tiltCards.forEach((card) => {
          card.removeEventListener("pointermove", handleTilt);
          card.removeEventListener("pointerleave", tiltLeaveHandlers.get(card));
        });
      };
    }, []);

    return h("div", { className: "scroll-progress", "data-progress": true });
  }

  function Nav() {
    return h(
      "header",
      { className: "nav" },
      h(
        "a",
        { className: "nav-brand", href: "#top", "data-magnetic": true },
        h("span", { className: "nav-brand-mark", "aria-hidden": "true" }, "MR"),
        h("span", { className: "nav-brand-name" }, profile.name)
      ),
      h(
        "nav",
        { className: "nav-links", "aria-label": "Primary navigation" },
        nav.map(([label, href, n]) =>
          h(
            "a",
            { href, key: href, "data-nav-link": true },
            h("span", { className: "nav-link-idx" }, n),
            h("span", { className: "nav-link-label" }, label)
          )
        )
      ),
      h(
        "a",
        { className: "nav-status", href: "#contact", "data-magnetic": true },
        h("span", { className: "status-dot", "aria-hidden": "true" }),
        profile.available
      )
    );
  }

  function FocusConsole() {
    const [activeId, setActiveId] = useState(consoleModes[0].id);
    const activeIndex = consoleModes.findIndex((mode) => mode.id === activeId);
    const active = consoleModes[activeIndex] || consoleModes[0];

    return h(
      "aside",
      {
        className: `focus-console accent-${active.accent}`,
        "data-reveal": true,
        "data-tilt-card": true,
        "aria-label": "AI systems focus console",
      },
      h(
        "div",
        { className: "console-head" },
        h("span", null, "Systems focus"),
        h("span", { className: "console-count" }, `0${activeIndex + 1} / 0${consoleModes.length}`)
      ),
      h(
        "div",
        { className: "console-modes", role: "tablist", "aria-label": "Capability modes" },
        consoleModes.map((mode, i) =>
          h(
            "button",
            {
              key: mode.id,
              type: "button",
              role: "tab",
              "aria-selected": mode.id === activeId,
              className: mode.id === activeId ? "console-mode is-active" : "console-mode",
              onClick: () => setActiveId(mode.id),
            },
            h("span", { className: "console-mode-idx" }, `0${i + 1}`),
            h("span", { className: "console-mode-label" }, mode.label),
            h("span", { className: "console-mode-note" }, mode.note)
          )
        )
      ),
      h(
        "div",
        { className: "console-body" },
        h("h2", null, active.title),
        h("p", null, active.copy),
        h(
          "ol",
          { className: "pipeline", "aria-label": `${active.label} pipeline` },
          active.steps.map((step, i) =>
            h(
              "li",
              { key: step, style: { "--i": String(i) } },
              h("span", { className: "pipeline-node" }, `0${i + 1}`),
              h("span", { className: "pipeline-step" }, step)
            )
          )
        )
      )
    );
  }

  function Hero() {
    return h(
      "section",
      { id: "top", className: "hero grid-shell" },
      h(
        "div",
        { className: "hero-copy" },
        h(
          "p",
          { className: "hero-eyebrow", "data-reveal": true },
          h("span", null, profile.title),
          h("span", { className: "dot", "aria-hidden": "true" }),
          h("span", null, profile.location)
        ),
        h(
          "h1",
          { className: "hero-title" },
          h("span", { className: "hero-line", "data-reveal": true }, profile.firstName),
          h("span", { className: "hero-line hero-line-accent", "data-reveal": true }, profile.lastName)
        ),
        h("p", { className: "hero-intro", "data-reveal": true }, profile.intro),
        h("p", { className: "hero-thesis", "data-reveal": true }, profile.thesis),
        h(
          "div",
          { className: "hero-actions", "data-reveal": true },
          h(
            "a",
            { className: "button button-primary", href: "#projects", "data-magnetic": true },
            "Explore work",
            h(Arrow)
          ),
          h(
            "a",
            { className: "button button-secondary", href: "#contact", "data-magnetic": true },
            "Start a brief"
          )
        )
      ),
      h(FocusConsole)
    );
  }

  function Marquee() {
    const items = stack.concat(stack);
    return h(
      "div",
      { className: "marquee", "aria-hidden": "true" },
      h(
        "div",
        { className: "marquee-track" },
        items.map((item, i) =>
          h(
            "span",
            { className: "marquee-item", key: `${item}-${i}` },
            item,
            h("span", { className: "marquee-sep" }, "∕")
          )
        )
      )
    );
  }

  function Capabilities() {
    const categories = ["All"].concat(Array.from(new Set(capabilities.map((item) => item.category))));
    const [filter, setFilter] = useState("All");
    const visible =
      filter === "All" ? capabilities : capabilities.filter((item) => item.category === filter);

    return h(
      "section",
      { id: "capabilities", className: "section-block capabilities-section" },
      h(SectionHeading, {
        index: "02",
        eyebrow: "Capabilities",
        title: "A compact skill directory for intelligent systems.",
        copy:
          "Category filters, terse cards, and only enough copy to prove what each capability is for.",
      }),
      h(
        "div",
        { className: "directory-shell grid-shell" },
        h(
          "div",
          { className: "filter-bar", role: "tablist", "aria-label": "Capability filters", "data-reveal": true },
          categories.map((category) =>
            h(
              "button",
              {
                key: category,
                type: "button",
                role: "tab",
                "aria-selected": category === filter,
                className: category === filter ? "is-active" : "",
                onClick: () => setFilter(category),
              },
              category
            )
          )
        ),
        h(
          "div",
          { className: "capability-grid" },
          visible.map((item, i) =>
            h(
              "article",
              { className: "capability-card", key: item.title, "data-reveal": true },
              h(
                "div",
                { className: "capability-top" },
                h("span", { className: "capability-num" }, `0${i + 1}`),
                h("span", { className: "capability-level" }, item.level)
              ),
              h("h3", null, item.title),
              h("p", null, item.body),
              h(
                "div",
                { className: "capability-foot" },
                h("span", { className: "tag" }, item.category),
                h(Arrow)
              )
            )
          )
        )
      )
    );
  }

  function ProjectExplorer() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = projects[activeIndex];

    return h(
      "section",
      { id: "projects", className: "section-block projects-section" },
      h(SectionHeading, {
        index: "01",
        eyebrow: "Selected work",
        title: "Project studies with the evidence kept close.",
        copy:
          "Each case highlights the problem, method, current status, and validation surface instead of overclaiming results.",
      }),
      h(
        "div",
        { className: "project-explorer grid-shell" },
        h(
          "div",
          { className: "project-list", role: "tablist", "aria-label": "Projects", "data-reveal": true },
          projects.map((project, index) =>
            h(
              "button",
              {
                key: project.title,
                type: "button",
                role: "tab",
                className: index === activeIndex ? "project-tab is-active" : "project-tab",
                onClick: () => setActiveIndex(index),
                "aria-selected": index === activeIndex,
              },
              h("span", { className: "project-tab-num" }, `0${index + 1}`),
              h(
                "span",
                { className: "project-tab-body" },
                h("strong", null, project.title),
                h("em", null, project.type)
              ),
              h("span", { className: "project-tab-arrow", "aria-hidden": "true" }, "→")
            )
          )
        ),
        h(
          "article",
          {
            className: `project-detail accent-${active.accent}`,
            "data-reveal": true,
          },
          h(
            "div",
            { className: "project-detail-head" },
            h(
              "div",
              { className: "project-meta" },
              h("span", null, active.type),
              h("span", null, active.year),
              h("span", { className: "project-status" }, active.status)
            ),
            h("h3", null, active.title)
          ),
          h(
            "dl",
            { className: "project-dl" },
            h("dt", null, "Problem"),
            h("dd", null, active.problem),
            h("dt", null, "Method"),
            h("dd", null, active.method)
          ),
          h(
            "div",
            { className: "project-footer" },
            h(
              "div",
              { className: "chip-row", "aria-label": "Project stack" },
              active.stack.map((item) => h("span", { className: "chip", key: item }, item))
            ),
            h(
              "div",
              { className: "evidence-row", "aria-label": "Evidence surface" },
              active.evidence.map((item) => h("span", { className: "evidence", key: item }, item))
            )
          )
        )
      )
    );
  }

  function Experience() {
    return h(
      "section",
      { id: "experience", className: "section-block experience-section" },
      h(SectionHeading, {
        index: "03",
        eyebrow: "Experience",
        title: "Research habits with implementation pressure.",
        copy:
          "A concise timeline of current applied AI work and the engineering foundation behind it.",
      }),
      h(
        "div",
        { className: "timeline grid-shell" },
        experience.map((item, i) =>
          h(
            "article",
            { className: "timeline-item", key: item.role, "data-reveal": true },
            h("time", null, item.date),
            h(
              "div",
              { className: "timeline-body" },
              h("h3", null, item.role),
              h("span", { className: "timeline-org" }, item.org),
              h("p", null, item.body)
            ),
            h("span", { className: "timeline-num", "aria-hidden": "true" }, `0${i + 1}`)
          )
        )
      ),
      h(
        "div",
        { className: "stack-strip grid-shell", "data-reveal": true },
        h("span", { className: "stack-label" }, "Stack"),
        h(
          "div",
          { className: "stack-items" },
          stack.map((item) => h("span", { className: "chip", key: item }, item))
        )
      )
    );
  }

  function AgentSkills() {
    return h(
      "section",
      { id: "agents", className: "section-block agents-section" },
      h(SectionHeading, {
        index: "04",
        eyebrow: "Agent layer",
        title: "Local skills for design, motion, and interaction quality.",
        copy:
          "This repo includes dedicated skills that keep future edits aligned with a minimalist interface standard.",
      }),
      h(
        "div",
        { className: "agent-grid grid-shell" },
        agentSkills.map((skill) =>
          h(
            "article",
            { className: "agent-card", key: skill.name, "data-reveal": true, "data-tilt-card": true },
            h(
              "div",
              { className: "agent-card-top" },
              h("span", { className: "tag" }, skill.tag),
              h("code", null, skill.path)
            ),
            h("h3", null, skill.name),
            h("p", null, skill.body)
          )
        )
      )
    );
  }

  function SpotifyPanel() {
    return h(
      "aside",
      { className: "spotify-panel", "data-reveal": true },
      h(
        "div",
        { className: "spotify-copy" },
        h("span", null, "On rotation"),
        h("strong", null, "Music while building")
      ),
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

  function Contact() {
    const [topic, setTopic] = useState(contactTopics[0]);
    const [note, setNote] = useState("");
    const [copied, setCopied] = useState(false);

    function copyBrief() {
      const brief = `Topic: ${topic}\n\nContext:\n${note || "Add project context, data sources, constraints, and success metrics."}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(brief)
          .then(() => {
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
          })
          .catch(() => {
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
          });
      } else {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
    }

    return h(
      "section",
      { id: "contact", className: "section-block contact-section" },
      h(SectionHeading, {
        index: "05",
        eyebrow: "Contact",
        title: "Bring a problem, a dataset, and a metric.",
        copy:
          "The strongest AI projects start with constraints, baselines, and a way to know whether the model actually helped.",
      }),
      h(
        "div",
        { className: "contact-grid grid-shell" },
        h(
          "div",
          { className: "brief-builder", "data-reveal": true },
          h(
            "div",
            { className: "brief-topline" },
            h("span", null, "Brief builder"),
            h("span", { className: copied ? "brief-flag is-copied" : "brief-flag" }, copied ? "Copied" : "Local draft")
          ),
          h(
            "div",
            { className: "topic-row", role: "tablist", "aria-label": "Brief topic" },
            contactTopics.map((item) =>
              h(
                "button",
                {
                  key: item,
                  type: "button",
                  role: "tab",
                  "aria-selected": item === topic,
                  className: item === topic ? "is-active" : "",
                  onClick: () => setTopic(item),
                },
                item
              )
            )
          ),
          h("label", { htmlFor: "brief-note" }, "Project context"),
          h("textarea", {
            id: "brief-note",
            value: note,
            onChange: (event) => setNote(event.target.value),
            placeholder:
              "Data sources, users, constraints, deployment target, evaluation metric, and risks...",
          }),
          h(
            "button",
            { className: "button button-primary", type: "button", onClick: copyBrief, "data-magnetic": true },
            copied ? "Copied brief" : "Copy brief",
            h(Arrow)
          )
        ),
        h(
          "div",
          { className: "contact-side" },
          h(SpotifyPanel),
          h(
            "div",
            { className: "link-panel", "data-reveal": true },
            h("span", { className: "link-panel-label" }, "Elsewhere"),
            profile.links.map(([label, href]) =>
              h(
                "a",
                { href, target: "_blank", rel: "noreferrer", key: label, "data-magnetic": true },
                h("span", null, label),
                h(Arrow)
              )
            )
          )
        )
      )
    );
  }

  function Footer() {
    return h(
      "footer",
      { className: "site-footer grid-shell" },
      h(
        "div",
        { className: "footer-brand" },
        h("span", { className: "footer-mark" }, "MR"),
        h("p", null, `${profile.name} — ${profile.title}`)
      ),
      h(
        "div",
        { className: "footer-links" },
        profile.links.map(([label, href]) =>
          h("a", { href, target: "_blank", rel: "noreferrer", key: label }, label)
        )
      ),
      h("p", { className: "footer-note" }, "Built with a no-build static React setup. © 2026")
    );
  }

  function App() {
    return h(
      React.Fragment,
      null,
      h(RuntimeEffects),
      h(Nav),
      h(
        "main",
        null,
        h(Hero),
        h(Marquee),
        h(ProjectExplorer),
        h(Capabilities),
        h(Experience),
        h(AgentSkills),
        h(Contact),
        h(Footer)
      )
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
