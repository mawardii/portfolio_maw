(function () {
  const h = React.createElement;
  const { useEffect, useState, useRef, useCallback } = React;

  const profile = {
    name: "Mawardi Rosli",
    nameParts: ["MAWARDI", "ROSLI"],
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
    ["Work", "#work"],
    ["Capabilities", "#capabilities"],
    ["Experience", "#experience"],
    ["Agents", "#agents"],
    ["Contact", "#contact"],
  ];

  // Each mode carries the pipeline stages and the signals actually checked —
  // no fabricated benchmark numbers, only the measurement surface itself.
  const consoleModes = [
    {
      id: "rag",
      label: "RAG",
      subtitle: "Grounded retrieval",
      copy: "Grounded answers over private knowledge with traceable evidence.",
      steps: ["Ingest", "Chunk", "Retrieve", "Rerank", "Ground", "Evaluate"],
      signals: ["Grounding", "Citation coverage", "Refusal behavior"],
    },
    {
      id: "ocr",
      label: "OCR",
      subtitle: "Visual text",
      copy: "Visual text pipelines with cleaner downstream structure.",
      steps: ["Scan", "Detect", "Extract", "Normalize", "Validate"],
      signals: ["Extraction review", "Dataset slices", "Post-processing"],
    },
    {
      id: "vision",
      label: "Vision",
      subtitle: "Measured CV",
      copy: "Computer vision experiments that are measured, not guessed.",
      steps: ["Frame", "Label", "Train", "Inspect", "Improve"],
      signals: ["Failure cases", "Annotation review", "Preprocessing"],
    },
    {
      id: "opt",
      label: "Optimize",
      subtitle: "Inference-aware",
      copy: "Inference-minded iteration for smaller, steadier models.",
      steps: ["Baseline", "Profile", "Compress", "Benchmark", "Ship"],
      signals: ["Baselines", "Latency notes", "Tradeoff log"],
    },
  ];

  const capabilities = [
    {
      title: "RAG System Design",
      category: "Retrieval",
      level: "Core",
      strength: 5,
      body:
        "Chunking, metadata, retrieval strategy, reranking, grounding, refusal behavior, and evaluation set design.",
    },
    {
      title: "Generative AI Workflows",
      category: "Generation",
      level: "Core",
      strength: 5,
      body:
        "LLM application flows that combine prompt design, tool use, grounding, and user-facing review states.",
    },
    {
      title: "OCR Fine-tuning",
      category: "Vision",
      level: "Active",
      strength: 4,
      body:
        "Domain-specific visual text extraction with model checks and cleaner downstream document structure.",
    },
    {
      title: "Computer Vision",
      category: "Vision",
      level: "Applied",
      strength: 4,
      body:
        "Image preprocessing, model experimentation, annotation review, and measured failure analysis.",
    },
    {
      title: "AI Evaluation",
      category: "Evaluation",
      level: "Habit",
      strength: 5,
      body:
        "Baselines, test sets, failure cases, acceptance thresholds, and regression checks before quality claims.",
    },
    {
      title: "Model Optimization",
      category: "Optimization",
      level: "Lab",
      strength: 3,
      body:
        "Inference-aware experiments around benchmarking, lighter models, and practical deployment tradeoffs.",
    },
  ];

  const projects = [
    {
      code: "RAG",
      title: "Document Intelligence RAG",
      type: "LLM Systems",
      status: "Active prototype",
      year: "2026",
      problem:
        "Make document answers easier to inspect by connecting retrieval evidence, response grounding, and evaluation notes.",
      method:
        "Structured ingestion, metadata-aware retrieval, answer generation, refusal behavior, and manual failure review.",
      stack: ["Python", "LLMs", "RAG", "Vector Search", "Evaluation"],
      signals: ["Grounding checks", "Citation coverage", "Failure cases"],
    },
    {
      code: "OCR",
      title: "OCR Fine-tuning Workflow",
      type: "Computer Vision",
      status: "Research build",
      year: "2026",
      problem:
        "Improve visual text extraction for domain documents where raw OCR output needs stronger structure and validation.",
      method:
        "Dataset review, preprocessing, model iteration, extraction checks, and normalization for downstream use.",
      stack: ["Python", "OpenCV", "OCR", "CV", "Jupyter"],
      signals: ["Extraction review", "Dataset slices", "Post-processing"],
    },
    {
      code: "OPT",
      title: "Model Optimization Lab",
      type: "Inference",
      status: "Experiment track",
      year: "2026",
      problem:
        "Compare model behavior under real constraints instead of choosing architectures from benchmark headlines alone.",
      method:
        "Baseline measurement, latency notes, accuracy tradeoff review, and deployment-minded experiment tracking.",
      stack: ["Python", "Benchmarking", "Deep Learning", "Docker"],
      signals: ["Baselines", "Latency notes", "Tradeoff log"],
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
    "Python", "NumPy", "Pandas", "OpenCV", "LLMs", "RAG",
    "Deep Learning", "FastAPI", "Flask", "Docker", "PostgreSQL", "Jupyter",
  ];

  const contactTopics = ["RAG system", "OCR pipeline", "Computer vision", "Model evaluation"];

  // ---- Theme ----------------------------------------------------------------
  function getInitialTheme() {
    try {
      const saved = localStorage.getItem("mr-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function useTheme() {
    const [theme, setTheme] = useState(getInitialTheme);
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      try {
        localStorage.setItem("mr-theme", theme);
      } catch (e) {}
    }, [theme]);
    const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
    return [theme, toggle];
  }

  // ---- Small building blocks ------------------------------------------------
  function Coord({ text }) {
    return h("span", { className: "coord" }, text);
  }

  function SectionHead({ tag, title, copy }) {
    return h(
      "div",
      { className: "sec-head", "data-reveal": true },
      h(Coord, { text: tag }),
      h("h2", { className: "sec-title" }, title),
      copy && h("p", { className: "sec-copy" }, copy)
    );
  }

  // Seeded signal trace on a canvas — a "signal / noise" motif, decorative,
  // redrawn per mode and per theme.
  function SignalCanvas({ seed, theme, active }) {
    const ref = useRef(null);
    useEffect(() => {
      const canvas = ref.current;
      if (!canvas) return;
      let raf = 0;
      const reduce =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      function draw() {
        const ctx = canvas.getContext("2d");
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const rect = canvas.getBoundingClientRect();
        const w = Math.max(1, rect.width);
        const hh = Math.max(1, rect.height);
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(hh * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, hh);

        const styles = getComputedStyle(document.documentElement);
        const signal = (styles.getPropertyValue("--signal") || "#2438e0").trim();
        const line = (styles.getPropertyValue("--line") || "rgba(0,0,0,0.1)").trim();

        // faint grid
        ctx.strokeStyle = line;
        ctx.lineWidth = 1;
        const cols = 8;
        for (let i = 1; i < cols; i++) {
          const x = (w / cols) * i;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, hh);
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.moveTo(0, hh / 2);
        ctx.lineTo(w, hh / 2);
        ctx.stroke();

        // seeded points: noise settling toward signal on the right
        const N = 52;
        let s = seed * 9301 + 49297;
        const rnd = () => {
          s = (s * 9301 + 49297) % 233280;
          return s / 233280;
        };
        const pts = [];
        for (let i = 0; i < N; i++) {
          const t = i / (N - 1);
          const noise = (rnd() - 0.5) * (1 - t) * 1.15;
          const base = Math.sin(t * Math.PI * 2.2 + seed) * 0.32 * (0.4 + t * 0.6);
          const y = hh / 2 - (base + noise) * (hh * 0.34);
          pts.push([t * w, y]);
        }

        const drawUpTo = (count) => {
          ctx.clearRect(0, 0, w, hh);
          // regrid
          ctx.strokeStyle = line;
          ctx.lineWidth = 1;
          for (let i = 1; i < cols; i++) {
            const x = (w / cols) * i;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, hh);
            ctx.stroke();
          }
          ctx.beginPath();
          ctx.moveTo(0, hh / 2);
          ctx.lineTo(w, hh / 2);
          ctx.stroke();

          const n = Math.max(2, count);
          // area fill
          const grad = ctx.createLinearGradient(0, 0, 0, hh);
          grad.addColorStop(0, hexA(signal, 0.22));
          grad.addColorStop(1, hexA(signal, 0));
          ctx.beginPath();
          ctx.moveTo(pts[0][0], hh);
          for (let i = 0; i < n; i++) ctx.lineTo(pts[i][0], pts[i][1]);
          ctx.lineTo(pts[n - 1][0], hh);
          ctx.closePath();
          ctx.fillStyle = grad;
          ctx.fill();
          // line
          ctx.beginPath();
          ctx.moveTo(pts[0][0], pts[0][1]);
          for (let i = 1; i < n; i++) ctx.lineTo(pts[i][0], pts[i][1]);
          ctx.strokeStyle = signal;
          ctx.lineWidth = 2;
          ctx.lineJoin = "round";
          ctx.stroke();
          // emphasized endpoint
          const [ex, ey] = pts[n - 1];
          ctx.beginPath();
          ctx.arc(ex, ey, 3.4, 0, Math.PI * 2);
          ctx.fillStyle = signal;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(ex, ey, 6.5, 0, Math.PI * 2);
          ctx.strokeStyle = hexA(signal, 0.35);
          ctx.stroke();
        };

        if (reduce || !active) {
          drawUpTo(N);
          return;
        }
        let count = 2;
        const step = () => {
          drawUpTo(count);
          count += 2;
          if (count <= N) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      }

      function hexA(hex, a) {
        const c = hex.replace("#", "");
        if (c.length < 6) return `rgba(36,56,224,${a})`;
        const r = parseInt(c.slice(0, 2), 16);
        const g = parseInt(c.slice(2, 4), 16);
        const b = parseInt(c.slice(4, 6), 16);
        return `rgba(${r},${g},${b},${a})`;
      }

      draw();
      const onResize = () => draw();
      window.addEventListener("resize", onResize);
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
      };
    }, [seed, theme, active]);

    return h("canvas", { className: "signal-canvas", ref, "aria-hidden": "true" });
  }

  function EvalConsole({ theme }) {
    const [idx, setIdx] = useState(0);
    const mode = consoleModes[idx];
    return h(
      "aside",
      { className: "console", "data-reveal": true, "aria-label": "Evaluation console" },
      h(
        "div",
        { className: "console-bar" },
        h("span", { className: "console-title" }, "EVAL CONSOLE"),
        h("span", { className: "console-live" }, h("i", { className: "live-dot", "aria-hidden": "true" }), "tracking")
      ),
      h(
        "div",
        { className: "console-tabs", role: "tablist", "aria-label": "Systems" },
        consoleModes.map((m, i) =>
          h(
            "button",
            {
              key: m.id,
              type: "button",
              role: "tab",
              "aria-selected": i === idx,
              className: i === idx ? "console-tab is-active" : "console-tab",
              onClick: () => setIdx(i),
            },
            m.label
          )
        )
      ),
      h(
        "div",
        { className: "console-screen" },
        h(SignalCanvas, { seed: idx + 3, theme, active: true }),
        h("span", { className: "screen-tag" }, "SIGNAL / NOISE")
      ),
      h(
        "div",
        { className: "console-readout" },
        h("p", { className: "readout-copy" }, mode.copy),
        h(
          "ol",
          { className: "pipeline", key: mode.id, "aria-label": mode.label + " pipeline" },
          mode.steps.map((step, i) =>
            h(
              "li",
              { key: step, className: "pipe-step", style: { "--i": String(i) } },
              h("span", { className: "pipe-dot", "aria-hidden": "true" }),
              step
            )
          )
        ),
        h(
          "div",
          { className: "readout-signals" },
          h("span", { className: "signals-label" }, "signals"),
          h(
            "div",
            { className: "signals-list" },
            mode.signals.map((sgnl) => h("span", { className: "sig", key: sgnl }, sgnl))
          )
        )
      )
    );
  }

  function ThemeToggle({ theme, onToggle }) {
    return h(
      "button",
      {
        type: "button",
        className: "theme-toggle",
        onClick: onToggle,
        "aria-label": "Toggle color theme",
        title: "Toggle theme",
      },
      h("span", { className: "tt-track", "aria-hidden": "true" }, h("span", { className: "tt-knob" })),
      h("span", { className: "tt-label" }, theme === "dark" ? "DARK" : "LIGHT")
    );
  }

  function TopBar({ theme, onToggle }) {
    return h(
      "header",
      { className: "topbar" },
      h(
        "a",
        { className: "brand", href: "#top" },
        h("span", { className: "brand-mark", "aria-hidden": "true" }, "MR"),
        h("span", { className: "brand-name" }, "MAWARDI—ROSLI")
      ),
      h(
        "nav",
        { className: "nav", "aria-label": "Primary" },
        nav.map(([label, href]) =>
          h("a", { key: href, href, "data-nav-link": true }, label)
        )
      ),
      h(
        "div",
        { className: "topbar-right" },
        h(ThemeToggle, { theme, onToggle })
      )
    );
  }

  function Work() {
    const [i, setI] = useState(0);
    const p = projects[i];
    return h(
      "section",
      { id: "work", className: "section" },
      h(SectionHead, {
        tag: "WORK — selected systems",
        title: "Projects, with the evidence kept close.",
        copy:
          "Each study names the problem, the method, and the signals I actually check — not headline claims.",
      }),
      h(
        "div",
        { className: "work-grid" },
        h(
          "div",
          { className: "work-list", role: "tablist", "aria-label": "Projects", "data-reveal": true },
          projects.map((proj, index) =>
            h(
              "button",
              {
                key: proj.code,
                type: "button",
                role: "tab",
                "aria-selected": index === i,
                className: index === i ? "work-item is-active" : "work-item",
                onClick: () => setI(index),
              },
              h("span", { className: "work-code" }, proj.code),
              h(
                "span",
                { className: "work-item-body" },
                h("strong", null, proj.title),
                h("em", null, proj.type)
              ),
              h("span", { className: "work-status", "data-status": proj.status }, proj.status)
            )
          )
        ),
        h(
          "article",
          { className: "work-detail", "data-reveal": true },
          h(
            "div",
            { className: "detail-top" },
            h("span", { className: "detail-code" }, p.code),
            h(
              "div",
              { className: "detail-meta" },
              h("span", null, p.type),
              h("span", null, p.year),
              h("span", { className: "detail-status" }, p.status)
            )
          ),
          h("h3", { className: "detail-title" }, p.title),
          h(
            "div",
            { className: "detail-body" },
            h("div", { className: "field" }, h("span", { className: "field-key" }, "PROBLEM"), h("p", null, p.problem)),
            h("div", { className: "field" }, h("span", { className: "field-key" }, "METHOD"), h("p", null, p.method))
          ),
          h(
            "div",
            { className: "detail-foot" },
            h(
              "div",
              { className: "signals-tiles" },
              p.signals.map((sgnl) => h("span", { className: "tile", key: sgnl }, sgnl))
            ),
            h(
              "div",
              { className: "stack-row" },
              p.stack.map((tech) => h("span", { className: "tech", key: tech }, tech))
            )
          )
        )
      )
    );
  }

  function Capabilities() {
    const categories = ["All"].concat(Array.from(new Set(capabilities.map((c) => c.category))));
    const [filter, setFilter] = useState("All");
    const visible = filter === "All" ? capabilities : capabilities.filter((c) => c.category === filter);
    return h(
      "section",
      { id: "capabilities", className: "section" },
      h(SectionHead, {
        tag: "CAPABILITIES — measured skills",
        title: "A working matrix for intelligent systems.",
        copy: "Filter by area. The bar shows relative depth, not a score.",
      }),
      h(
        "div",
        { className: "filter-row", role: "tablist", "aria-label": "Filter", "data-reveal": true },
        categories.map((cat) =>
          h(
            "button",
            {
              key: cat,
              type: "button",
              role: "tab",
              "aria-selected": cat === filter,
              className: cat === filter ? "chip-btn is-active" : "chip-btn",
              onClick: () => setFilter(cat),
            },
            cat
          )
        )
      ),
      h(
        "div",
        { className: "cap-matrix" },
        visible.map((c) =>
          h(
            "article",
            { className: "cap-row", key: c.title, "data-reveal": true },
            h("div", { className: "cap-main" }, h("h3", null, c.title), h("p", null, c.body)),
            h(
              "div",
              { className: "cap-side" },
              h("span", { className: "cap-cat" }, c.category),
              h("span", { className: "cap-level" }, c.level),
              h(
                "span",
                { className: "cap-bar", "aria-hidden": "true" },
                Array.from({ length: 5 }).map((_, k) =>
                  h("i", { key: k, className: k < c.strength ? "on" : "" })
                )
              )
            )
          )
        )
      )
    );
  }

  function Experience() {
    return h(
      "section",
      { id: "experience", className: "section" },
      h(SectionHead, {
        tag: "EXPERIENCE — the log",
        title: "Research habits under implementation pressure.",
      }),
      h(
        "div",
        { className: "log" },
        experience.map((e) =>
          h(
            "article",
            { className: "log-row", key: e.role, "data-reveal": true },
            h("time", { className: "log-date" }, e.date),
            h(
              "div",
              { className: "log-body" },
              h("h3", null, e.role),
              h("span", { className: "log-org" }, e.org),
              h("p", null, e.body)
            )
          )
        )
      ),
      h(
        "div",
        { className: "stack-strip", "data-reveal": true },
        h("span", { className: "stack-label" }, "STACK"),
        h("div", { className: "stack-items" }, stack.map((s) => h("span", { className: "tech", key: s }, s)))
      )
    );
  }

  function Agents() {
    return h(
      "section",
      { id: "agents", className: "section" },
      h(SectionHead, {
        tag: "AGENTS — local skills",
        title: "Skills that keep the craft consistent.",
        copy: "This repo ships design/motion/interaction skills so future edits hold the same standard.",
      }),
      h(
        "div",
        { className: "agent-grid" },
        agentSkills.map((a) =>
          h(
            "article",
            { className: "agent-card", key: a.name, "data-reveal": true },
            h(
              "div",
              { className: "agent-top" },
              h("span", { className: "agent-tag" }, a.tag),
              h("code", { className: "agent-path" }, a.path)
            ),
            h("h3", null, a.name),
            h("p", null, a.body)
          )
        )
      )
    );
  }

  function Contact() {
    const [topic, setTopic] = useState(contactTopics[0]);
    const [note, setNote] = useState("");
    const [copied, setCopied] = useState(false);

    function copyBrief() {
      const brief =
        "Topic: " + topic + "\n\nContext:\n" +
        (note || "Add project context, data sources, constraints, and success metrics.");
      const done = () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(brief).then(done).catch(done);
      } else {
        done();
      }
    }

    return h(
      "section",
      { id: "contact", className: "section" },
      h(SectionHead, {
        tag: "CONTACT — start here",
        title: "Bring a problem, a dataset, and a metric.",
        copy:
          "The strongest AI projects start with constraints, baselines, and a way to know whether the model actually helped.",
      }),
      h(
        "div",
        { className: "contact-grid" },
        h(
          "div",
          { className: "brief", "data-reveal": true },
          h(
            "div",
            { className: "brief-bar" },
            h("span", null, "BRIEF BUILDER"),
            h("span", { className: copied ? "brief-flag on" : "brief-flag" }, copied ? "copied" : "local draft")
          ),
          h(
            "div",
            { className: "topic-row", role: "tablist", "aria-label": "Topic" },
            contactTopics.map((t) =>
              h(
                "button",
                {
                  key: t,
                  type: "button",
                  role: "tab",
                  "aria-selected": t === topic,
                  className: t === topic ? "chip-btn is-active" : "chip-btn",
                  onClick: () => setTopic(t),
                },
                t
              )
            )
          ),
          h("label", { className: "brief-label", htmlFor: "brief-note" }, "Project context"),
          h("textarea", {
            id: "brief-note",
            value: note,
            onChange: (e) => setNote(e.target.value),
            placeholder: "Data sources, users, constraints, deployment target, evaluation metric, and risks...",
          }),
          h(
            "button",
            { className: "btn btn-primary", type: "button", onClick: copyBrief },
            copied ? "Copied brief" : "Copy brief",
            h("span", { className: "btn-arw", "aria-hidden": "true" }, "→")
          )
        ),
        h(
          "div",
          { className: "contact-side" },
          h(
            "aside",
            { className: "music", "data-reveal": true },
            h(
              "div",
              { className: "music-bar" },
              h("span", null, "ON ROTATION"),
              h("span", null, "music while building")
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
          ),
          h(
            "div",
            { className: "links", "data-reveal": true },
            h("span", { className: "links-label" }, "ELSEWHERE"),
            profile.links.map(([label, href]) =>
              h(
                "a",
                { key: label, href, target: "_blank", rel: "noreferrer" },
                h("span", null, label),
                h("span", { className: "link-arw", "aria-hidden": "true" }, "↗")
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
      { className: "footer" },
      h(
        "div",
        { className: "footer-inner" },
        h(
          "div",
          { className: "footer-brand" },
          h("span", { className: "brand-mark", "aria-hidden": "true" }, "MR"),
          h("span", null, profile.name + " — " + profile.title)
        ),
        h(
          "div",
          { className: "footer-links" },
          profile.links.map(([label, href]) =>
            h("a", { key: label, href, target: "_blank", rel: "noreferrer" }, label)
          )
        ),
        h("span", { className: "footer-note" }, "No-build static React · © 2026")
      )
    );
  }

  function RuntimeEffects() {
    useEffect(() => {
      const root = document.documentElement;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
      const progress = document.querySelector("[data-progress]");
      const topbar = document.querySelector(".topbar");
      const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
      let raf = 0;

      function onScroll() {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
          const ratio = Math.min(1, window.scrollY / max);
          if (progress) progress.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
          if (topbar) topbar.classList.toggle("is-scrolled", window.scrollY > 12);
        });
      }

      const reveals = Array.from(document.querySelectorAll("[data-reveal]"));
      reveals.forEach((n, i) => n.style.setProperty("--rd", (Math.min(i % 5, 4) * 55) + "ms"));
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      reveals.forEach((n) => {
        const r = n.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) n.classList.add("is-visible");
        else io.observe(n);
      });

      const spy = navLinks
        .map((link) => {
          const sec = document.getElementById((link.getAttribute("href") || "").replace("#", ""));
          return sec ? { link, sec } : null;
        })
        .filter(Boolean);
      let spyIo = null;
      if (spy.length) {
        spyIo = new IntersectionObserver(
          (entries) => entries.forEach((e) => {
            const m = spy.find((t) => t.sec === e.target);
            if (m && e.isIntersecting) {
              navLinks.forEach((l) => l.classList.remove("is-current"));
              m.link.classList.add("is-current");
            }
          }),
          { rootMargin: "-45% 0px -50% 0px" }
        );
        spy.forEach((t) => spyIo.observe(t.sec));
      }

      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        if (spyIo) spyIo.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }, []);
    return h("div", { className: "scroll-progress", "data-progress": true });
  }

  function App() {
    const [theme, toggle] = useTheme();
    return h(
      React.Fragment,
      null,
      h(RuntimeEffects),
      h(TopBar, { theme, onToggle: toggle }),
      h(
        "main",
        null,
        h(HeroWithTheme, { theme }),
        h(Work),
        h(Capabilities),
        h(Experience),
        h(Agents),
        h(Contact),
        h(Footer)
      )
    );
  }

  // Wrapper so the console redraws its canvas when the theme changes.
  function HeroWithTheme({ theme }) {
    return h(
      "section",
      { id: "top", className: "hero" },
      h(
        "div",
        { className: "hero-inner" },
        h(
          "div",
          { className: "hero-copy" },
          h(
            "p",
            { className: "hero-meta", "data-reveal": true },
            h("span", null, profile.title),
            h("span", { className: "meta-div", "aria-hidden": "true" }, "/"),
            h("span", null, profile.location)
          ),
          h(
            "h1",
            { className: "hero-name", "aria-label": profile.name },
            profile.nameParts.map((part) =>
              h("span", { key: part, className: "name-line", "data-reveal": true }, part)
            )
          ),
          h("p", { className: "hero-intro", "data-reveal": true }, profile.intro),
          h("p", { className: "hero-thesis", "data-reveal": true }, profile.thesis),
          h(
            "div",
            { className: "hero-actions", "data-reveal": true },
            h("a", { className: "btn btn-primary", href: "#work" }, "View work", h("span", { className: "btn-arw", "aria-hidden": "true" }, "→")),
            h("a", { className: "btn btn-ghost", href: "#contact" }, "Start a brief")
          )
        ),
        h(EvalConsole, { theme })
      )
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
