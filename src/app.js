(function () {
  const h = React.createElement;
  const { useEffect, useState, useCallback, useRef } = React;

  const reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Reveal styles only apply under .motion, so content is visible without JS or with reduced motion.
  if (!reduceMotion) document.documentElement.classList.add("motion");

  const profile = {
    name: "Mawardi Rosli",
    // Contact form relay (worker/telegram.js) once deployed, e.g. "https://portfolio-telegram.<you>.workers.dev".
    relay: "https://portfolio-telegram.mawardii.workers.dev",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/mawardi-rosli-04b299334"],
      ["GitHub", "https://github.com/mawardii"],
    ],
  };

  const facts = [
    ["Role", "AI/ML Research Officer, MIMOS Berhad"],
    ["Focus", "VLM fine-tuning, RAG, computer vision, faster inference"],
    ["Based in", "Malaysia"],
  ];

  // About copy, from the CV summary.
  const about = [
    "I'm an AI/ML research engineer at MIMOS Berhad. Most days I fine-tune vision-language models to transcribe documents, then take them from a notebook to a service people can use: data prep, training, evaluation, faster inference and a frontend on top.",
    "I studied Intelligent Systems Engineering at UiTM Shah Alam. I like problems that come with a clear metric, and I'm looking for more chances to build with generative AI.",
  ];

  // Real projects from github.com/mawardii. Numbers come from each repo or the paper.
  const projects = [
    {
      id: "rag",
      demo: "rag",
      title: "Financial Filings RAG",
      type: "LLM systems",
      year: "2026",
      status: "Prototype becoming a FastAPI service",
      repo: "https://github.com/mawardii/rag_miniproject",
      problem:
        "Answer analyst questions about 10-Ks, 10-Qs and earnings releases, with every answer citing the filing and page it came from.",
      method:
        "18 FinanceBench filings split into about 13.8k chunks, embedded into FAISS. Dense, BM25 hybrid and LLM reranking are switchable, and the default is picked by measurement.",
      stack: ["Python", "FAISS", "OpenAI embeddings", "DeepSeek", "Streamlit", "FastAPI"],
    },
    {
      id: "road",
      demo: "road",
      title: "Road Damage Detection",
      type: "Computer vision",
      year: "2026",
      status: "Published in JATIT, Vol. 104 No. 18",
      repo: "https://github.com/mawardii/road-damage-detection",
      problem:
        "Spot and classify road damage fast enough, and offline, for vehicles checking which routes are passable after a disaster.",
      method:
        "YOLOv8s, v9s and v10s swept across splits, batch sizes, optimizers and epochs on 13,450 cleaned RDD2020 images, all on a 4 GB laptop GPU. The best model runs in a Streamlit app that writes PDF reports.",
      stack: ["Python", "Ultralytics YOLO", "OpenCV", "Streamlit", "fpdf"],
    },
    {
      id: "site",
      demo: "site",
      title: "This portfolio",
      type: "Web",
      year: "2026",
      status: "Live, now on version six",
      repo: "https://github.com/mawardii/portfolio_maw",
      problem: "A personal site that shows the work instead of describing it, and stays easy to change.",
      method:
        "React loaded from local files with no build step, plain CSS, and a small WebGL fluid simulation for the hero ink. No bundler and no CDN at runtime.",
      stack: ["JavaScript", "React", "CSS", "WebGL"],
    },
  ];

  // From the CV (docs/cv.pdf). Numbers are the CV's own.
  const experience = [
    {
      date: "Apr 2026 to now",
      role: "Research Officer",
      org: "MIMOS Berhad",
      points: [
        "Fine-tuned Qwen3.5-VL with LoRA/PEFT and Unsloth for document transcription, reaching about 97% accuracy on CER and WER.",
        "Cut inference latency about 4x with a llama.cpp/GGUF serving path that fits limited GPU memory, benchmarked against a Hugging Face baseline.",
        "Built a multi-stage pipeline (RT-DETR layout detection, line segmentation, transcription, word-level grading) behind FastAPI, with a React and TypeScript frontend.",
        "Tracked every run in Weights & Biases and turned Claude Code into a research tool with custom skills and MCP integrations.",
      ],
    },
    {
      date: "Sep to Dec 2025",
      role: "Data Science Intern",
      org: "TERAS Teknologi",
      points: [
        "Improved YOLO object detection by about 25% mAP@50-95 with longer training and tuning, every experiment tracked in MLflow.",
        "Built image dataset pipelines with augmentation and quality checks, and managed terabyte-scale data on Azure Blob Storage.",
        "Helped build an internal RAG chatbot: curated domain data and tuned the embeddings and vector store.",
        "Built Elasticsearch and Kibana dashboards and SQL pipelines for analytics and reporting.",
      ],
    },
    {
      date: "2022 to 2026",
      role: "Intelligent Systems Engineering",
      org: "UiTM Shah Alam",
      points: [
        "Bachelor of Information System (Hons.), CGPA 3.75, Dean's List six semesters in a row.",
        "Final year project: road damage detection with YOLOv8, v9 and v10, later published in JATIT.",
      ],
    },
  ];

  const capabilities = [
    ["RAG system design", "Chunking, metadata, retrieval, reranking, grounding, refusal behavior, and eval sets."],
    ["Generative AI workflows", "Prompt design, tool use, grounding, and review states people can act on."],
    ["AI evaluation", "Baselines, test sets, failure cases, and regression checks before quality claims."],
    ["OCR fine-tuning", "Domain text extraction with model checks and cleaner document structure."],
    ["Computer vision", "Preprocessing, experiments, annotation review, and measured failure analysis."],
    ["Model optimization", "Benchmarking, lighter models, and practical deployment tradeoffs."],
  ];

  // Hero: "Hi, I'm Mawardi." + one of these, cycled in turn.
  const phrases = ["AI engineer.", "Build AI with me.", "I tune vision models.", "I ship RAG."];

  // Sections below stay hidden until they have real entries.
  // { name, issuer, year?, url? } in display order: Microsoft, Google, RapidMiner.
  const certifications = [
    {
      name: "Azure AI Apps and Agents Developer Associate",
      issuer: "Microsoft Certified",
      year: "2026",
      url: "https://learn.microsoft.com/api/credentials/share/en-gb/mawardii/ABB0F0C97FC38154?sharingId=E55ED9F81644BC2B",
    },
    {
      name: "AI Transformation Leader",
      issuer: "Microsoft Certified",
      year: "2026",
      url: "https://learn.microsoft.com/api/credentials/share/en-gb/mawardii/DA6F70B76EA38D0F?sharingId=E55ED9F81644BC2B",
    },
    {
      name: "Azure AI Fundamentals",
      issuer: "Microsoft Certified",
      year: "2026",
      url: "https://learn.microsoft.com/api/credentials/share/en-gb/mawardii/169C818092643BB9?sharingId=E55ED9F81644BC2B",
    },
    {
      name: "Google Advanced Data Analytics",
      issuer: "Google Professional Certificate, Coursera",
      year: "2026",
      url: "https://coursera.org/verify/professional-cert/PTU8AKIFOOE5",
    },
    { name: "Machine Learning Master", issuer: "RapidMiner (Altair)", year: "2025" },
    { name: "Machine Learning Professional", issuer: "RapidMiner (Altair)", year: "2025" },
  ];
  // { title, authors?, venue, year, url? }
  const publications = [
    {
      title:
        "A Comparative Parameter Optimization Study of YOLOv8, YOLOv9, and YOLOv10 for Automated Pavement Distress Classification in Post-Disaster Emergency Infrastructure Assessment",
      authors: "M. Rosli et al.",
      venue: "Journal of Theoretical and Applied Information Technology, Vol. 104, No. 18, pp. 381–390",
      year: "2026",
      url: "https://www.jatit.org/volumes/Vol104No18/24Vol104No18.pdf",
    },
    {
      title: "Fine Tuning a Vision Language Model for Diacritic Complete Uthmani Quranic OCR",
      venue: "Presented at IICAIET 2026, Sabah. Publication in progress",
      year: "2026",
    },
  ];
  // ["Interest", ...]
  const interests = ["Agentic AI in production", "Inference engineering", "Building with Claude Code and Codex", "Cloud AI solutions"];

  // Logos are Simple Icons (CC0) vendored in vendor/icons; hex is each brand's colour.
  const tools = [
    { name: "Python", icon: "python", hex: "#3776AB" },
    { name: "PyTorch", icon: "pytorch", hex: "#EE4C2C" },
    { name: "OpenCV", icon: "opencv", hex: "#5C3EE8" },
    { name: "NumPy", icon: "numpy", hex: "#013243" },
    { name: "pandas", icon: "pandas", hex: "#150458" },
    { name: "Jupyter", icon: "jupyter", hex: "#F37626" },
    { name: "Ultralytics YOLO" },
    { name: "FAISS" },
    { name: "FastAPI", icon: "fastapi", hex: "#009688" },
    { name: "Flask", icon: "flask", hex: "#000000" },
    { name: "Streamlit", icon: "streamlit", hex: "#FF4B4B" },
    { name: "Docker", icon: "docker", hex: "#2496ED" },
    { name: "PostgreSQL", icon: "postgresql", hex: "#4169E1" },
    { name: "Claude Code", icon: "anthropic", hex: "#191919" },
    { name: "Codex" },
    { name: "LLMs and RAG" },
  ];

  // Certificate images rendered from the PDFs in cert/ (that folder stays out of git).
  const certImages = {
    "Azure AI Apps and Agents Developer Associate": "assets/certs/ms-azure-ai-apps-agents-developer.webp",
    "AI Transformation Leader": "assets/certs/ms-ai-transformation-leader.webp",
    "Azure AI Fundamentals": "assets/certs/ms-azure-ai-fundamentals.webp",
    "Google Advanced Data Analytics": "assets/certs/google-advanced-data-analytics.webp",
    "Machine Learning Master": "assets/certs/rapidminer-ml-master.webp",
    "Machine Learning Professional": "assets/certs/rapidminer-ml-professional.webp",
  };

  // ---- Demo data ------------------------------------------------------------

  // rag_miniproject: the 18 filings in its eval set, a few golden questions with their
  // FinanceBench reference answers, and the measured retrieval baseline (69 questions).
  const filings = [
    "3M_2022_10K", "3M_2023Q2_10Q", "AES_2022_10K", "AMCOR_2023Q4_EARNINGS", "AMCOR_2023_10K", "AMD_2022_10K",
    "AMERICANEXPRESS_2022_10K", "BESTBUY_2023_10K", "BESTBUY_2024Q2_10Q", "BOEING_2022_10K", "CVSHEALTH_2022_10K",
    "JOHNSON_JOHNSON_2022_10K", "JOHNSON_JOHNSON_2023_8K", "PEPSICO_2022_10K", "PFIZER_2021_10K", "Pfizer_2023Q2_10Q",
    "ULTABEAUTY_2023Q4_EARNINGS", "VERIZON_2022_10K",
  ];
  const ragQuestions = [
    {
      label: "AMD revenue",
      q: "What drove revenue change as of the FY22 for AMD?",
      src: "AMD_2022_10K",
      a: "Higher sales of EPYC server processors, higher semi-custom product sales, and the inclusion of Xilinx embedded product sales.",
    },
    {
      label: "Boeing lawsuits",
      q: "Has Boeing reported any materially important ongoing legal battles from FY2022?",
      src: "BOEING_2022_10K",
      a: "Yes. Multiple lawsuits were filed against Boeing after the 2018 Lion Air crash and the 2019 Ethiopian Airlines crash.",
    },
    {
      label: "Best Buy cash",
      q: "Was there any drop in cash and cash equivalents between FY2023 and Q2 of FY2024?",
      src: "BESTBUY_2024Q2_10Q",
      a: "Yes, a decline of about 42% between FY2023 and Q2 of FY2024.",
    },
  ];
  const ragConfigs = [
    { label: "Dense", hit: 0.93, mrr: 0.81, note: "default" },
    { label: "Hybrid", hit: 0.86, mrr: 0.77 },
    { label: "Hybrid + rerank", hit: 0.9, mrr: 0.77 },
    { label: "Dense + rerank", hit: 0.91, mrr: 0.83 },
  ];

  // Road damage paper (JATIT 2026): per-class results for the best YOLOv8s run (table 6)
  // and the three models at batch 32 with SGD (table 4). Confidences on the drawing are illustrative.
  const damageClasses = [
    { code: "D20", name: "Alligator crack", map: 0.874, color: "#ff8a5c" },
    { code: "D40", name: "Pothole", map: 0.817, color: "#ffd166" },
    { code: "D10", name: "Transverse crack", map: 0.788, color: "#7ce0c3" },
    { code: "D00", name: "Longitudinal crack", map: 0.756, color: "#93a1ff" },
  ];
  const yoloModels = [
    { label: "YOLOv8s", p: 0.8246, r: 0.7267, f1: 0.772, map: 0.8089 },
    { label: "YOLOv9s", p: 0.7876, r: 0.7053, f1: 0.7435, map: 0.7793 },
    { label: "YOLOv10s", p: 0.7813, r: 0.6868, f1: 0.7305, map: 0.7684 },
  ];

  // This repo's design history, from git log and each version's stylesheet.
  const siteVersions = [
    { when: "May 2026", name: "First build", ref: "f4fd336", bg: "#fbfbf8", ink: "#111827", a: "#0f766e", b: "#ff6f61", layout: "cards" },
    { when: "May 2026", name: "Soft blue", ref: "ea0cab4", bg: "#f9f9f7", ink: "#1a1a1a", a: "#bfd4e8", b: "#d6e4f0", layout: "split" },
    { when: "Jul 2026", name: "Swiss editorial", ref: "6018333", bg: "#f2f0e9", ink: "#17150f", a: "#d8452a", b: "#e8e5db", layout: "editorial" },
    { when: "Jul 2026", name: "Signal console", ref: "d109ce8", bg: "#e6e8e2", ink: "#161a1b", a: "#2438e0", b: "#f2f3ee", layout: "console" },
    { when: "Oct 2026", name: "Minimal 3D", ref: "dc5dc42", bg: "#f1f2f3", ink: "#17181b", a: "#2f45e3", b: "#15161a", layout: "stage" },
    { when: "Now", name: "Playful", ref: "you are here", bg: "#f1f2f3", ink: "#17181b", a: "#ff8a5c", b: "#ccd2f4", layout: "playful" },
  ];

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
    }, [theme]);
    // Save only an explicit choice, so an unset visitor keeps following the OS.
    const toggle = useCallback(() => setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("mr-theme", next);
      } catch (e) {}
      return next;
    }), []);
    return [theme, toggle];
  }

  // ---- Pieces ---------------------------------------------------------------

  // Splits text into masked word spans; useReveals assigns each word its line (--l) and order (--i).
  function Words({ text }) {
    const words = text.trim().split(/\s+/);
    return h(
      React.Fragment,
      null,
      /^\s/.test(text) ? " " : null,
      words.map((w, i) =>
        h(React.Fragment, { key: i }, h("span", { className: "w" }, h("span", null, w)), i < words.length - 1 ? " " : null)
      ),
      /\s$/.test(text) ? " " : null
    );
  }

  // title = [statement, muted continuation], e.g. ["Selected", "projects."].
  function Section({ id, title, wide, children }) {
    return h(
      "section",
      { id, className: wide ? "section is-wide" : "section", "aria-labelledby": id + "-title", "data-reveal": "rule" },
      h(
        "h2",
        { className: "section-title", id: id + "-title", "data-reveal": "lines" },
        h("span", { className: "t-sans" }, h(Words, { text: title[0] })),
        " ",
        h("span", { className: "t-sub" }, h(Words, { text: title[1] }))
      ),
      h("div", { className: "section-body" }, children)
    );
  }

  function TopBar() {
    const [theme, toggle] = useTheme();
    // After the first screenful of scrolling the bar tucks into a floating pill.
    const [pill, setPill] = useState(false);
    useEffect(() => {
      const onScroll = () => setPill(window.scrollY > 80);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return h(
      "header",
      { className: pill ? "topbar is-pill" : "topbar" },
      h("a", { className: "brand", href: "#top", "aria-label": profile.name }, h(Mark, { className: "brand-mark" }), h("span", { className: "brand-name" }, profile.name)),
      h(
        "nav",
        { className: "nav", "aria-label": "Primary" },
        h("a", { href: "#about" }, "About"),
        h("a", { href: "#experience" }, "Experience"),
        h("a", { href: "#projects" }, "Projects"),
        h("a", { href: "#contact" }, "Contact"),
        h(
          "button",
          { type: "button", className: "theme-toggle", onClick: toggle, "aria-label": "Switch to " + (theme === "dark" ? "light" : "dark") + " theme" },
          theme === "dark" ? "Light" : "Dark"
        )
      )
    );
  }

  // Hero ink: a small stable-fluids simulation (after Pavel Dobryakov's WebGL fluid,
  // the effect on aaabadcode.com). The pointer pushes coloured dye around; the dye is
  // drawn as a halftone dot grid, like a vision model's view of the scene. WebGL2 only.
  const FLUID = { density: 0.6, velocity: 2.4, pressure: 0.1, iterations: 20, curl: 6, radius: 0.22, force: 6000, cell: 9 };
  const inkColors = [[0.58, 0.63, 1], [1, 0.54, 0.36], [0.37, 0.83, 0.71], [1, 0.82, 0.4], [1, 0.48, 0.71]];
  const VERT = `#version 300 es
in vec2 aPos; uniform vec2 texel; out vec2 vUv, vL, vR, vT, vB;
void main() {
  vUv = aPos * .5 + .5;
  vL = vUv - vec2(texel.x, 0.); vR = vUv + vec2(texel.x, 0.);
  vT = vUv + vec2(0., texel.y); vB = vUv - vec2(0., texel.y);
  gl_Position = vec4(aPos, 0., 1.);
}`;
  const FRAG = {
    splat: `uniform sampler2D uTarget; uniform float aspect, radius; uniform vec3 color; uniform vec2 point;
void main() { vec2 p = vUv - point; p.x *= aspect; o = vec4(texture(uTarget, vUv).xyz + exp(-dot(p, p) / radius) * color, 1.); }`,
    advect: `uniform sampler2D uVelocity, uSource; uniform float dt, dissipation;
void main() { vec2 c = vUv - dt * texture(uVelocity, vUv).xy * texel; o = texture(uSource, c) / (1. + dissipation * dt); }`,
    divergence: `uniform sampler2D uVelocity;
void main() {
  float L = texture(uVelocity, vL).x, R = texture(uVelocity, vR).x, T = texture(uVelocity, vT).y, B = texture(uVelocity, vB).y;
  vec2 C = texture(uVelocity, vUv).xy;
  if (vL.x < 0.) L = -C.x; if (vR.x > 1.) R = -C.x; if (vT.y > 1.) T = -C.y; if (vB.y < 0.) B = -C.y;
  o = vec4(.5 * (R - L + T - B), 0., 0., 1.);
}`,
    curl: `uniform sampler2D uVelocity;
void main() { o = vec4(.5 * (texture(uVelocity, vR).y - texture(uVelocity, vL).y - texture(uVelocity, vT).x + texture(uVelocity, vB).x), 0., 0., 1.); }`,
    vorticity: `uniform sampler2D uVelocity, uCurl; uniform float curl, dt;
void main() {
  float L = texture(uCurl, vL).x, R = texture(uCurl, vR).x, T = texture(uCurl, vT).x, B = texture(uCurl, vB).x, C = texture(uCurl, vUv).x;
  vec2 f = .5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
  f = f / (length(f) + 1e-4) * curl * C; f.y *= -1.;
  o = vec4(clamp(texture(uVelocity, vUv).xy + f * dt, -1000., 1000.), 0., 1.);
}`,
    pressure: `uniform sampler2D uPressure, uDivergence;
void main() {
  float L = texture(uPressure, vL).x, R = texture(uPressure, vR).x, T = texture(uPressure, vT).x, B = texture(uPressure, vB).x;
  o = vec4((L + R + B + T - texture(uDivergence, vUv).x) * .25, 0., 0., 1.);
}`,
    gradient: `uniform sampler2D uPressure, uVelocity;
void main() {
  float L = texture(uPressure, vL).x, R = texture(uPressure, vR).x, T = texture(uPressure, vT).x, B = texture(uPressure, vB).x;
  o = vec4(texture(uVelocity, vUv).xy - vec2(R - L, T - B), 0., 1.);
}`,
    fade: `uniform sampler2D uTexture; uniform float value;
void main() { o = value * texture(uTexture, vUv); }`,
    // Halftone: one dot per cell, sized by how much dye is there, in the dye's own hue.
    halftone: `uniform sampler2D uDye; uniform vec2 res; uniform float cell;
void main() {
  vec2 px = vUv * res, c = (floor(px / cell) + .5) * cell;
  vec3 d = texture(uDye, c / res).rgb;
  float a = max(d.r, max(d.g, d.b)), r = sqrt(min(a, 1.)) * cell * .5;
  float m = 1. - smoothstep(r - 1., r, length(px - c));
  o = vec4(d / max(a, 1e-4) * m, m);
}`,
  };

  function Fluid({ active }) {
    const ref = useRef(null);
    const kick = useRef(null);
    useEffect(() => {
      const canvas = ref.current;
      const gl = !reduceMotion && canvas.getContext("webgl2", { alpha: true, depth: false, stencil: false, antialias: false });
      if (!gl || !gl.getExtension("EXT_color_buffer_float")) return;
      const host = canvas.parentElement;

      const shader = (type, src) => {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };
      const vert = shader(gl.VERTEX_SHADER, VERT);
      const P = {};
      for (const [name, body] of Object.entries(FRAG)) {
        const prog = gl.createProgram();
        gl.attachShader(prog, vert);
        gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, "#version 300 es\nprecision highp float;\nprecision highp sampler2D;\nin vec2 vUv, vL, vR, vT, vB;\nuniform vec2 texel;\nout vec4 o;\n" + body));
        gl.bindAttribLocation(prog, 0, "aPos");
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
        const u = {};
        for (let i = 0; i < gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS); i++) {
          const n = gl.getActiveUniform(prog, i).name;
          u[n] = gl.getUniformLocation(prog, n);
        }
        P[name] = { prog, u };
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(0);

      const target = (w, h, internal, format) => {
        const tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, internal, w, h, 0, format, gl.HALF_FLOAT, null);
        const fb = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
        gl.viewport(0, 0, w, h);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        return { tex, fb, w, h };
      };
      const pair = (w, h, internal, format) => {
        let a = target(w, h, internal, format), b = target(w, h, internal, format);
        return { get read() { return a; }, get write() { return b; }, swap() { [a, b] = [b, a]; }, w, h };
      };

      let dye, vel, pres, div, curl, simTexel;
      function size() {
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        canvas.width = Math.round(canvas.clientWidth * dpr);
        canvas.height = Math.round(canvas.clientHeight * dpr);
        const aspect = canvas.width / canvas.height;
        const sim = aspect > 1 ? [Math.round(128 * aspect), 128] : [128, Math.round(128 / aspect)];
        // The halftone only samples once per cell, so the dye needs about one texel per cell.
        const dw = Math.ceil(canvas.width / (FLUID.cell * dpr)) * 2, dh = Math.ceil(canvas.height / (FLUID.cell * dpr)) * 2;
        dye = pair(dw, dh, gl.RGBA16F, gl.RGBA);
        vel = pair(sim[0], sim[1], gl.RG16F, gl.RG);
        pres = pair(sim[0], sim[1], gl.R16F, gl.RED);
        div = target(sim[0], sim[1], gl.R16F, gl.RED);
        curl = target(sim[0], sim[1], gl.R16F, gl.RED);
        simTexel = [1 / sim[0], 1 / sim[1]];
      }

      let unit = 0;
      function run(name, uniforms, out) {
        const { prog, u } = P[name];
        gl.useProgram(prog);
        unit = 0;
        for (const [k, v] of Object.entries(uniforms)) {
          if (!u[k]) continue;
          if (v.tex) {
            gl.activeTexture(gl.TEXTURE0 + unit);
            gl.bindTexture(gl.TEXTURE_2D, v.tex);
            gl.uniform1i(u[k], unit++);
          } else if (v.length === 3) gl.uniform3fv(u[k], v);
          else if (v.length === 2) gl.uniform2fv(u[k], v);
          else gl.uniform1f(u[k], v);
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, out ? out.fb : null);
        gl.viewport(0, 0, out ? out.w : canvas.width, out ? out.h : canvas.height);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }

      function splat(x, y, dx, dy, color) {
        const aspect = canvas.width / canvas.height;
        const radius = (FLUID.radius / 100) * (aspect > 1 ? aspect : 1);
        run("splat", { uTarget: vel.read, aspect, radius, point: [x, y], color: [dx, dy, 0] }, vel.write);
        vel.swap();
        run("splat", { uTarget: dye.read, aspect, radius, point: [x, y], color }, dye.write);
        dye.swap();
      }

      function step(dt) {
        gl.disable(gl.BLEND);
        run("curl", { texel: simTexel, uVelocity: vel.read }, curl);
        run("vorticity", { texel: simTexel, uVelocity: vel.read, uCurl: curl, curl: FLUID.curl, dt }, vel.write);
        vel.swap();
        run("divergence", { texel: simTexel, uVelocity: vel.read }, div);
        run("fade", { uTexture: pres.read, value: FLUID.pressure }, pres.write);
        pres.swap();
        for (let i = 0; i < FLUID.iterations; i++) {
          run("pressure", { texel: simTexel, uPressure: pres.read, uDivergence: div }, pres.write);
          pres.swap();
        }
        run("gradient", { texel: simTexel, uPressure: pres.read, uVelocity: vel.read }, vel.write);
        vel.swap();
        run("advect", { texel: simTexel, uVelocity: vel.read, uSource: vel.read, dt, dissipation: FLUID.velocity }, vel.write);
        vel.swap();
        run("advect", { texel: simTexel, uVelocity: vel.read, uSource: dye.read, dt, dissipation: FLUID.density }, dye.write);
        dye.swap();
      }

      function render() {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        const dpr = canvas.width / canvas.clientWidth;
        run("halftone", { uDye: dye.read, res: [canvas.width, canvas.height], cell: FLUID.cell * dpr }, null);
      }

      // Colour drifts through the palette over time, so one stroke shades from hue to hue.
      const t0 = performance.now();
      function inkAt(now, k = 0.22) {
        const f = ((now - t0) / 900) % inkColors.length, i = Math.floor(f), m = f - i;
        const a = inkColors[i], b = inkColors[(i + 1) % inkColors.length];
        return a.map((v, j) => (v + (b[j] - v) * m) * k);
      }

      // When nobody is stirring (always, on touch screens), a slow stroke wanders the
      // hero on a Lissajous path so the ink never goes blank. Starts once the kick fades.
      let last = null, raf = 0, prev = performance.now(), visible = true;
      let lastInput = Infinity, lastAuto = 0, autoAt = null;
      function wander(now) {
        if (now - lastInput < 2500 || now - lastAuto < 90) return;
        lastAuto = now;
        const t = now / 1000, x = 0.5 + 0.4 * Math.sin(t * 0.23), y = 0.45 + 0.3 * Math.sin(t * 0.37 + 1);
        if (autoAt) splat(x, y, (x - autoAt[0]) * FLUID.force * 0.6, (y - autoAt[1]) * FLUID.force * 0.6, inkAt(now, 0.14));
        autoAt = [x, y];
      }
      function frame(now) {
        const dt = Math.min(0.033, (now - prev) / 1000);
        prev = now;
        wander(now);
        step(dt);
        render();
        raf = requestAnimationFrame(frame);
      }
      function setRunning(on) {
        cancelAnimationFrame(raf);
        raf = 0;
        if (on) {
          prev = performance.now();
          raf = requestAnimationFrame(frame);
        }
      }

      const onMove = (e) => {
        const r = canvas.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = 1 - (e.clientY - r.top) / r.height;
        lastInput = performance.now();
        autoAt = null;
        if (last && x >= 0 && x <= 1 && y >= 0 && y <= 1) {
          const aspect = r.width / r.height;
          splat(x, y, (x - last[0]) * FLUID.force * (aspect < 1 ? aspect : 1), ((y - last[1]) * FLUID.force) / (aspect > 1 ? aspect : 1), inkAt(performance.now()));
        }
        last = [x, y];
      };
      const onLeave = () => (last = null);

      // A sweep of ink along the headline, so the effect is visible before anyone moves.
      kick.current = () => {
        lastInput = performance.now();
        for (let k = 0; k < 7; k++) {
          setTimeout(() => {
            const x = 0.12 + k * 0.12, y = 0.3 + Math.sin(k * 1.3) * 0.08;
            splat(x, y, 900 + Math.random() * 400, (Math.random() - 0.5) * 900, inkAt(performance.now() + k * 400, 0.5));
          }, k * 70);
        }
      };

      size();
      const ro = new ResizeObserver(() => size());
      ro.observe(canvas);
      const io = new IntersectionObserver(([e]) => setRunning((visible = e.isIntersecting) && !document.hidden));
      io.observe(canvas);
      const onVis = () => setRunning(visible && !document.hidden);
      document.addEventListener("visibilitychange", onVis);
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerleave", onLeave);
      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        document.removeEventListener("visibilitychange", onVis);
        host.removeEventListener("pointermove", onMove);
        host.removeEventListener("pointerleave", onLeave);
        kick.current = null;
      };
    }, []);
    useEffect(() => {
      if (active && kick.current) kick.current();
    }, [active]);
    return h("canvas", { className: "fluid", ref, "aria-hidden": "true" });
  }

  // The MR logo (src/marks.js): Archivo Black with the M and R sharing one stem.
  const marks = window.MR_MARKS;
  function Mark({ className, name = "mark" }) {
    const m = marks[name];
    return h("svg", { className, viewBox: m.vb, "aria-hidden": "true" }, h("path", { d: m.d }));
  }

  // Intro, after tinywins.com: "MR" cuts through bold faces in black and white, with film
  // grain, roughened edges and a little jitter per frame, then the logo stamps down, the
  // paper wipes over it and it flies into the header. Once per session, only from the top
  // of the page, never with reduced motion.
  // inv: black on white; rough: edge displacement; outline: stroke only; r/x/y: jitter.
  const frames = [
    { m: "anton", rough: 0, r: -2, x: -10 },
    { m: "mark", inv: true, rough: 8, r: 3, y: 8 },
    { m: "distressed", rough: 0, r: -1, x: 14 },
    { m: "elite", inv: true, rough: 4, r: -4, y: -10 },
    { m: "bowlby", rough: 14, r: 2, x: -6 },
    { m: "staatliches", outline: true, rough: 3, r: 0, y: 6 },
    { m: "dela", inv: true, rough: 6, r: -3, x: 10 },
    { m: "mono", rough: 20, r: 4, y: -6 },
    { m: "bebas", inv: true, rough: 2, r: -2, x: -12 },
  ];
  const showIntro = (() => {
    if (reduceMotion || window.scrollY > 0 || location.hash) return false;
    try {
      if (sessionStorage.getItem("intro-seen")) return false;
      sessionStorage.setItem("intro-seen", "1");
    } catch (e) {}
    return true;
  })();
  if (showIntro) document.documentElement.classList.add("is-intro");

  function Intro({ onDone, onGone }) {
    const ref = useRef(null);
    useEffect(() => {
      const root = ref.current;
      const flash = root.querySelector(".intro-flash");
      const svg = flash.querySelector("svg"), path = svg.querySelector("path");
      const [noise, warp] = root.querySelectorAll("feTurbulence");
      const disp = root.querySelector("feDisplacementMap");
      const wipe = root.querySelector(".intro-wipe"), mark = root.querySelector(".intro-mark");
      const ease = { io: "cubic-bezier(0.65, 0, 0.35, 1)", out: "cubic-bezier(0.22, 1, 0.36, 1)" };
      const timers = [];
      const at = (ms, fn) => timers.push(setTimeout(fn, ms));
      const STEP = 160;
      frames.forEach((f, i) =>
        at(i * STEP, () => {
          const m = marks[f.m];
          root.classList.toggle("is-inv", !!f.inv);
          svg.setAttribute("viewBox", m.vb);
          path.setAttribute("d", m.d);
          svg.classList.toggle("is-outline", !!f.outline);
          disp.setAttribute("scale", f.rough);
          warp.setAttribute("seed", i + 1);
          noise.setAttribute("seed", i * 7 + 3);
          svg.style.transform = `translate(${f.x || 0}px, ${f.y || 0}px) rotate(${f.r}deg)`;
        })
      );
      const t1 = frames.length * STEP;
      // The logo lands like a stamp: oversized, then hard down with a small kick.
      at(t1, () => {
        flash.style.display = "none";
        root.classList.remove("is-inv");
        mark.animate(
          [
            { opacity: 0, transform: "translate(-50%, -50%) scale(1.6) rotate(-4deg)" },
            { opacity: 1, transform: "translate(-50%, -50%) scale(0.96) rotate(0deg)", offset: 0.55 },
            { opacity: 1, transform: "translate(-50%, -50%)" },
          ],
          { duration: 420, easing: "cubic-bezier(0.5, 0, 0.75, 0)", fill: "both" }
        );
      });
      at(t1 + 650, () => {
        wipe.animate([{ transform: "translateY(-100%)" }, { transform: "none" }], { duration: 600, easing: ease.io, fill: "both" });
        mark.animate([{ color: "#fff" }, { color: "var(--ink)" }], { duration: 300, delay: 250, fill: "both" });
      });
      at(t1 + 1250, () => {
        root.classList.add("is-clear");
        const brand = document.querySelector(".brand-mark");
        const to = brand && brand.getBoundingClientRect();
        const from = mark.getBoundingClientRect();
        const fly = to && to.width
          ? mark.animate(
              [
                { transform: "translate(-50%, -50%)" },
                { transform: `translate(calc(-50% + ${to.left + to.width / 2 - (from.left + from.width / 2)}px), calc(-50% + ${to.top + to.height / 2 - (from.top + from.height / 2)}px)) scale(${to.width / from.width})` },
              ],
              { duration: 900, easing: ease.io, fill: "both" }
            )
          : mark.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 400, fill: "both" });
        onDone();
        fly.finished.then(onGone);
      });
      return () => timers.forEach(clearTimeout);
    }, []);
    return h(
      "div",
      { className: "intro-screen", ref, "aria-hidden": "true" },
      h(
        "svg",
        { className: "intro-fx", width: "100%", height: "100%" },
        h(
          "defs",
          null,
          h("filter", { id: "intro-grain" }, h("feTurbulence", { type: "fractalNoise", baseFrequency: "0.8", numOctaves: 2, seed: 3 }), h("feColorMatrix", { type: "saturate", values: "0" })),
          h("filter", { id: "intro-rough" }, h("feTurbulence", { type: "fractalNoise", baseFrequency: "0.03", numOctaves: 3, seed: 1, result: "w" }), h("feDisplacementMap", { in: "SourceGraphic", in2: "w", scale: 0 }))
        )
      ),
      h("div", { className: "intro-flash" }, h("svg", null, h("path", null))),
      h("div", { className: "intro-wipe" }),
      h(Mark, { className: "intro-mark" }),
      h("svg", { className: "intro-grain", width: "100%", height: "100%" }, h("rect", { width: "100%", height: "100%", filter: "url(#intro-grain)" }))
    );
  }

  // Cycles the phrases with tinywins' timing: words rise in (1s, expo out), hold,
  // then rise out (0.5s, ease in) before the next phrase comes up.
  function Cycle({ ready }) {
    const [i, setI] = useState(0);
    const [out, setOut] = useState(false);
    useEffect(() => {
      if (!ready || reduceMotion) return;
      const t = out ? setTimeout(() => { setI((i + 1) % phrases.length); setOut(false); }, 650) : setTimeout(() => setOut(true), 3600);
      return () => clearTimeout(t);
    }, [ready, out, i]);
    return h(
      "span",
      { key: i, className: "intro-side is-right cycle" + (out ? " is-out" : ""), "aria-hidden": "true" },
      phrases[i].split(" ").map((w, k) => h(React.Fragment, { key: k }, h("span", { className: "w" }, h("span", { style: { "--i": k } }, w)), " "))
    );
  }

  function Hero({ ready }) {
    return h(
      "section",
      { id: "top", className: "hero-ink" },
      h(Fluid, { active: ready }),
      h(
        "div",
        { className: "hero intro" + (ready ? "" : " is-wait") },
        h(
          "div",
          { className: "intro-text" },
          h("p", { className: "intro-name" }, "AI/ML research engineer at MIMOS Berhad, Malaysia"),
          h(
            "h1",
            { className: "intro-words", "aria-label": "Hi, I'm Mawardi. " + phrases.join(" ") },
            h("span", { className: "intro-side", "data-reveal": "lines", "aria-hidden": "true" }, h(Words, { text: "Hi, I'm Mawardi." })),
            h(Cycle, { ready })
          )
        ),
        h("figure", { className: "portrait" }, h("img", { src: "./assets/portrait.webp", alt: "Portrait of " + profile.name, width: 560, height: 700 }))
      )
    );
  }

  function About() {
    return h(
      Section,
      { id: "about", title: ["A bit", "about me."] },
      about.map((t, i) => h("p", { key: i, className: "about-copy", "data-reveal": "up", style: { "--d": i * 120 + "ms" } }, t)),
      h(
        "dl",
        { className: "facts", "data-reveal": "rule" },
        facts.map(([k, v], i) =>
          h("div", { key: k, "data-reveal": "up", style: { "--d": 200 + i * 120 + "ms" } }, h("dt", null, k), h("dd", null, v))
        )
      )
    );
  }

  // Tinted full-width bands; each opens to show what the role involved.
  function Experience() {
    const [open, setOpen] = useState(0);
    return h(
      Section,
      { id: "experience", title: ["Experience", "so far."], wide: true },
      h(
        "ol",
        { className: "bands" },
        experience.map((e, i) => {
          const isOpen = open === i;
          return h(
            "li",
            {
              key: e.role,
              className: isOpen ? "band is-open" : "band",
              "data-reveal": "slide",
              style: { "--tint": "var(--tint-" + (i + 1) + ")", "--dir": i % 2 ? 1 : -1, "--d": i * 120 + "ms" },
            },
            h(
              "h3",
              null,
              h(
                "button",
                {
                  type: "button",
                  className: "band-row",
                  "aria-expanded": isOpen,
                  "aria-controls": "band-" + i,
                  onClick: () => setOpen(isOpen ? -1 : i),
                },
                h("span", { className: "band-n" }, String(i + 1).padStart(2, "0")),
                h("span", { className: "band-role" }, e.role),
                h("span", { className: "band-org" }, e.org),
                h("span", { className: "band-date" }, e.date),
                h("span", { className: "band-toggle", "aria-hidden": "true" })
              )
            ),
            h(
              "div",
              { className: "band-panel", id: "band-" + i, role: "region", "aria-label": e.role, inert: isOpen ? undefined : "" },
              h("div", null, h("ul", null, e.points.map((t) => h("li", { key: t }, t))))
            )
          );
        })
      )
    );
  }

  // Certifications and publications share one row layout: title, detail line, year, optional link.
  function Entries({ items }) {
    return h(
      "ol",
      { className: "entries" },
      items.map((it, i) =>
        h(
          "li",
          { key: it.title, className: "entry", "data-reveal": "up", style: { "--d": (i % 4) * 90 + "ms" } },
          h(
            "div",
            null,
            h("h3", { className: "entry-title" }, it.url ? h("a", { href: it.url, target: "_blank", rel: "noreferrer" }, it.title) : it.title),
            h("p", { className: "entry-detail" }, it.detail)
          ),
          h("span", { className: "entry-year" }, it.year)
        )
      )
    );
  }


  function Publications() {
    if (!publications.length) return null;
    return h(
      Section,
      { id: "publications", title: ["Published", "research."] },
      h(Entries, { items: publications.map((p) => ({ title: p.title, detail: (p.authors ? p.authors.replace(/\.$/, "") + ". " : "") + p.venue + ".", year: p.year, url: p.url })) })
    );
  }




  // ---- Interactive bits -----------------------------------------------------

  // True once the element has scrolled into view (stays true).
  function useInView(ref) {
    const [seen, setSeen] = useState(reduceMotion);
    useEffect(() => {
      if (seen) return;
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.3 });
      io.observe(ref.current);
      return () => io.disconnect();
    }, []);
    return seen;
  }

  // Counts up to `value` when `run` turns true; re-animates when value changes.
  function Count({ value, digits = 2, run = true }) {
    const [v, setV] = useState(run && !reduceMotion ? 0 : value);
    const from = useRef(0);
    useEffect(() => {
      if (!run) return;
      if (reduceMotion) return setV(value);
      const start = performance.now(), a = from.current;
      let raf = 0;
      const tick = (now) => {
        const k = Math.min(1, (now - start) / 700), e = 1 - Math.pow(1 - k, 3);
        const cur = a + (value - a) * e;
        setV(cur);
        from.current = cur;
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [value, run]);
    return v.toFixed(digits);
  }

  function Segmented({ options, value, onChange, label }) {
    return h(
      "div",
      { className: "seg", role: "radiogroup", "aria-label": label },
      options.map((o, i) =>
        h("button", { key: o, type: "button", role: "radio", "aria-checked": i === value, className: i === value ? "is-on" : "", onClick: () => onChange(i) }, o)
      )
    );
  }

  const shortFiling = (f) => {
    const names = { AMERICANEXPRESS: "AmEx", JOHNSON: "J&J", CVSHEALTH: "CVS", BESTBUY: "Best Buy", ULTABEAUTY: "Ulta", PEPSICO: "PepsiCo", AMCOR: "Amcor", BOEING: "Boeing", VERIZON: "Verizon", PFIZER: "Pfizer", Pfizer: "Pfizer" };
    const first = f.split("_")[0];
    const co = names[first] || first;
    const m = f.match(/(\d{4})(Q\d)?_?(10K|10Q|8K|EARNINGS)/);
    const kind = m ? { "10K": "10-K", "10Q": "10-Q", "8K": "8-K", EARNINGS: "Earnings" }[m[3]] : "";
    return [co, m ? (m[2] ? m[2] + " " : "") + m[1] + " " + kind : ""];
  };

  // RAG demo: ask a golden-set question and watch the pipeline run, step by step.
  function RagDemo() {
    const ref = useRef(null);
    const seen = useInView(ref);
    const [qi, setQi] = useState(0);
    const [step, setStep] = useState(0); // 0 idle, 1 search, 2 hit, 3 chunks, 4 answer
    const [cfg, setCfg] = useState(0);
    const q = ragQuestions[qi];

    useEffect(() => {
      if (!seen) return;
      if (reduceMotion) return setStep(4);
      setStep(1);
      const t = [setTimeout(() => setStep(2), 1100), setTimeout(() => setStep(3), 1700), setTimeout(() => setStep(4), 2400)];
      return () => t.forEach(clearTimeout);
    }, [qi, seen]);

    return h(
      "div",
      { className: "demo rag", ref, "data-step": step },
      h("p", { className: "demo-label" }, "Ask the filings"),
      h(Segmented, { options: ragQuestions.map((x) => x.label), value: qi, onChange: setQi, label: "Question" }),
      h("p", { className: "rag-q" }, "“" + q.q + "”"),
      h(
        "ul",
        { className: "filings", "aria-label": "Filings in the index" },
        filings.map((f, i) => {
          const [co, doc] = shortFiling(f);
          return h("li", { key: f, className: step >= 2 && f === q.src ? "is-hit" : "", style: { "--i": i } }, h("b", null, co), h("span", null, doc));
        })
      ),
      h(
        "div",
        { className: "rag-out" },
        h("div", { className: "chunks", "aria-hidden": "true" }, [0, 1, 2, 3].map((k) => h("i", { key: k, style: { "--k": k } }))),
        h(
          "div",
          { className: "answer", "aria-live": "polite" },
          step >= 4 ? h(React.Fragment, null, h("p", null, q.a), h("span", { className: "cite" }, "Source: " + q.src + ".pdf")) : h("p", { className: "dim" }, step ? "Searching 13.8k chunks…" : "")
        )
      ),
      h("p", { className: "demo-label" }, "Retrieval setup, measured on 69 questions"),
      h(Segmented, { options: ragConfigs.map((c) => c.label), value: cfg, onChange: setCfg, label: "Retrieval setup" }),
      h(
        "div",
        { className: "bars" },
        [["hit@4", ragConfigs[cfg].hit], ["MRR", ragConfigs[cfg].mrr]].map(([k, v]) =>
          h("div", { key: k, className: "bar" }, h("span", null, k), h("i", { style: { "--v": seen ? v : 0 } }), h("b", null, h(Count, { value: v, run: seen })))
        )
      ),
      h("p", { className: "demo-note" }, "Answers shown are FinanceBench reference answers; the sources and scores are from the repo's eval.")
    );
  }

  // Road demo: an illustrated road with YOLO-style boxes. Toggle classes, raise the
  // confidence threshold (the low-confidence box on the tree shadow is the paper's
  // known false-positive case), and compare the three models' real scores.
  const roadBoxes = [
    { code: "D20", x: 286, y: 44, w: 120, h: 92, conf: 0.91 },
    { code: "D40", x: 92, y: 196, w: 112, h: 72, conf: 0.86 },
    { code: "D00", x: 98, y: 22, w: 48, h: 140, conf: 0.72 },
    { code: "D10", x: 252, y: 186, w: 176, h: 46, conf: 0.58 },
    { code: "D10", x: 300, y: 150, w: 124, h: 26, conf: 0.34, shadow: true },
  ];
  function RoadDemo() {
    const ref = useRef(null);
    const seen = useInView(ref);
    const [on, setOn] = useState({ D00: true, D10: true, D20: true, D40: true });
    const [thr, setThr] = useState(0.25);
    const [mi, setMi] = useState(0);
    const color = (c) => damageClasses.find((d) => d.code === c).color;
    const m = yoloModels[mi];
    return h(
      "div",
      { className: "demo road" + (seen ? " is-seen" : ""), ref },
      h(
        "svg",
        { className: "road-svg", viewBox: "0 0 480 300", role: "img", "aria-label": "Illustrated road with detected cracks and a pothole" },
        h("rect", { width: 480, height: 300, rx: 12, className: "asphalt" }),
        h("path", { d: "M40 0V300M440 0V300", className: "edge" }),
        h("path", { d: "M240 0V300", className: "lane" }),
        h("path", { d: "M300 150 C340 140 380 172 424 156 L424 176 C380 190 340 160 300 176Z", className: "shadow" }),
        // longitudinal crack
        h("path", { d: "M122 26 l-6 18 l8 14 l-5 20 l7 16 l-6 22 l5 18 l-4 24", className: "crack" }),
        // transverse crack
        h("path", { d: "M258 210 l22 -6 l18 8 l24 -7 l20 6 l26 -8 l22 7 l26 -5", className: "crack" }),
        // alligator cracking: a little polygon net
        h("path", { d: "M296 60 l26 -8 l24 12 l28 -6 l22 18 M300 86 l22 -10 l24 14 l26 -8 l24 16 M304 112 l20 -12 l26 12 l24 -10 l22 14 M322 52 l0 34 l-2 26 M346 64 l0 36 M374 58 l-2 34 l4 22 M396 76 l-2 30", className: "crack" }),
        // pothole
        h("ellipse", { cx: 148, cy: 232, rx: 46, ry: 26, className: "pothole" }),
        h("ellipse", { cx: 150, cy: 236, rx: 32, ry: 15, className: "pothole-in" }),
        h("rect", { x: 40, y: 0, width: 400, height: 3, className: "scan" }),
        roadBoxes.map((b, i) => {
          const show = on[b.code] && b.conf >= thr;
          return h(
            "g",
            { key: i, className: "box" + (show ? " is-on" : ""), style: { "--c": color(b.code), "--i": i } },
            h("rect", { x: b.x, y: b.y, width: b.w, height: b.h, rx: 3 }),
            h("rect", { x: b.x, y: b.y - 16, width: 74, height: 16, rx: 2, className: "tag" }),
            h("text", { x: b.x + 5, y: b.y - 4.5 }, b.code + " " + b.conf.toFixed(2))
          );
        })
      ),
      h(
        "div",
        { className: "classes", role: "group", "aria-label": "Damage classes" },
        damageClasses.map((d) =>
          h(
            "button",
            { key: d.code, type: "button", "aria-pressed": on[d.code], style: { "--c": d.color }, onClick: () => setOn({ ...on, [d.code]: !on[d.code] }) },
            h("i", null),
            h("span", null, d.name),
            h("b", null, "mAP " + d.map.toFixed(3))
          )
        )
      ),
      h(
        "label",
        { className: "thr" },
        h("span", null, "Confidence threshold"),
        h("input", { type: "range", min: 0.2, max: 0.9, step: 0.01, value: thr, onChange: (e) => setThr(+e.target.value) }),
        h("b", null, thr.toFixed(2))
      ),
      h(Segmented, { options: yoloModels.map((x) => x.label), value: mi, onChange: setMi, label: "Model" }),
      h(
        "dl",
        { className: "metrics" },
        [["Precision", m.p], ["Recall", m.r], ["F1", m.f1], ["mAP@0.5", m.map]].map(([k, v]) =>
          h("div", { key: k }, h("dt", null, k), h("dd", null, h(Count, { value: v, digits: 3, run: seen })))
        )
      ),
      h("p", { className: "demo-note" }, "The road is a drawing. Class and model scores are from the paper; v8s runs at 6.0 ms per frame.")
    );
  }

  // Portfolio demo: flick through this site's six versions, sketched from each one's palette.
  function SiteDemo() {
    const ref = useRef(null);
    const seen = useInView(ref);
    const [vi, setVi] = useState(siteVersions.length - 1);
    const [auto, setAuto] = useState(true);
    useEffect(() => {
      if (!seen || !auto || reduceMotion) return;
      const t = setInterval(() => setVi((v) => (v + 1) % siteVersions.length), 2200);
      return () => clearInterval(t);
    }, [seen, auto]);
    const v = siteVersions[vi];
    return h(
      "div",
      { className: "demo site", ref },
      h(
        "div",
        { className: "browser", "aria-hidden": "true" },
        h("div", { className: "browser-bar" }, h("i"), h("i"), h("i"), h("span", null, "portfolio_maw")),
        h(
          "div",
          { key: vi, className: "mock mock-" + v.layout, style: { "--bg": v.bg, "--ink": v.ink, "--a": v.a, "--b": v.b } },
          h("div", { className: "m-nav" }),
          h("div", { className: "m-hero" }, h("i"), h("i"), h("i")),
          h("div", { className: "m-row" }, h("i"), h("i"), h("i"))
        )
      ),
      h(
        "ol",
        { className: "versions", "aria-label": "Site versions" },
        siteVersions.map((x, i) =>
          h(
            "li",
            { key: x.ref },
            h(
              "button",
              { type: "button", "aria-current": i === vi ? "true" : undefined, onClick: () => { setVi(i); setAuto(false); } },
              h("i", { style: { background: x.a } }),
              h("span", null, x.name),
              h("small", null, x.when + ", " + x.ref)
            )
          )
        )
      )
    );
  }

  const demos = { rag: RagDemo, road: RoadDemo, site: SiteDemo };

  // Project cards, after the reference: the live demo is the media, then a title with a muted tagline.
  function Work() {
    return h(
      Section,
      { id: "projects", title: ["Selected", "projects."], wide: true },
      h(
        "ol",
        { className: "cards" },
        projects.map((p, i) =>
          h(
            "li",
            { key: p.id, id: p.id, className: "card", "data-reveal": "up", style: { "--d": i * 120 + "ms" } },
            h("div", { className: "card-media" }, h(demos[p.demo])),
            h(
              "div",
              { className: "card-info" },
              h("h3", { className: "card-cap" }, p.title, " ", h("span", null, p.type + ". " + p.status + ".")),
              h(
                "dl",
                { className: "card-body" },
                h("div", null, h("dt", null, "Problem"), h("dd", null, p.problem)),
                h("div", null, h("dt", null, "How"), h("dd", null, p.method))
              ),
              h("ul", { className: "card-stack" }, p.stack.map((s) => h("li", { key: s }, s))),
              h("a", { className: "card-repo", href: p.repo, target: "_blank", rel: "noreferrer" }, "See the code on GitHub")
            )
          )
        )
      )
    );
  }

  // Certificates: hover or focus a row and its certificate slides into the frame beside the list.
  function Certifications() {
    const [ai, setAi] = useState(0);
    const tilt = useRef(null);
    if (!certifications.length) return null;
    const active = certifications[ai];
    const img = certImages[active.name];
    const onMove = (e) => {
      if (reduceMotion) return;
      const r = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      tilt.current.style.transform = "rotateY(" + x * 14 + "deg) rotateX(" + -y * 12 + "deg)";
    };
    const onLeave = () => { tilt.current.style.transform = ""; };
    return h(
      Section,
      { id: "certifications", title: ["Certified", "along the way."], wide: true },
      h(
        "div",
        { className: "certs" },
        h(
          "ol",
          { className: "entries cert-list" },
          certifications.map((c, i) =>
            h(
              "li",
              {
                key: c.name,
                className: "entry" + (i === ai ? " is-active" : ""),
                "data-reveal": "up",
                style: { "--d": (i % 4) * 80 + "ms" },
                onMouseEnter: () => setAi(i),
                onFocus: () => setAi(i),
              },
              h(
                "div",
                null,
                h("h3", { className: "entry-title" }, c.url ? h("a", { href: c.url, target: "_blank", rel: "noreferrer" }, c.name) : h("span", { tabIndex: 0 }, c.name)),
                h("p", { className: "entry-detail" }, c.issuer),
                certImages[c.name] && h("img", { className: "entry-thumb", src: certImages[c.name], alt: "", loading: "lazy" })
              ),
              h("span", { className: "entry-year" }, c.year)
            )
          )
        ),
        h(
          "div",
          { className: "cert-stage", onMouseMove: onMove, onMouseLeave: onLeave, "aria-hidden": "true" },
          h(
            "div",
            { className: "cert-tilt", ref: tilt },
            img
              ? h("img", { key: img, className: "cert-img", src: img, alt: "" })
              : h(
                  "div",
                  { key: active.name, className: "cert-img cert-empty" },
                  h("b", null, active.issuer),
                  h("span", null, active.name),
                  h("small", null, "Certificate image coming soon. The credential link is in the list.")
                )
          )
        )
      )
    );
  }


  // Two rows of tool logos drifting in opposite directions; hover pauses them.
  function Marquee() {
    const half = Math.ceil(tools.length / 2);
    const rows = [tools.slice(0, half), tools.slice(half)];
    const item = (t, k, dup) =>
      h(
        "li",
        { key: k, className: dup ? "dup" : undefined },
        h(
          "span",
          { className: "tile" },
          t.icon ? h("i", { className: "logo", style: { "--src": "url(../vendor/icons/" + t.icon + ".svg)", "--hex": t.hex } }) : h("b", null, t.name[0])
        ),
        t.name
      );
    return h(
      "div",
      { className: "marquee", "data-reveal": "up" },
      h("p", { className: "sr-only" }, "Tools: " + tools.map((t) => t.name).join(", ") + "."),
      rows.map((row, r) =>
        h(
          "div",
          { key: r, className: "marquee-row" + (r ? " is-reverse" : ""), "aria-hidden": "true" },
          h("ul", null, row.map((t, i) => item(t, "a" + i)), row.map((t, i) => item(t, "b" + i, true)))
        )
      )
    );
  }

  function Capabilities() {
    return h(
      Section,
      { id: "capabilities", title: ["What I", "work with."], wide: true },
      h(
        "dl",
        { className: "capabilities" },
        capabilities.map(([k, v], i) =>
          h("div", { key: k, "data-reveal": "up", style: { "--d": (i % 3) * 110 + "ms" } }, h("dt", null, k), h("dd", null, v))
        )
      ),
      h(Marquee)
    );
  }

  // Links lean toward the pointer a little, then spring back.
  function Magnet({ href, children }) {
    const ref = useRef(null);
    const move = (e) => {
      if (reduceMotion) return;
      const r = ref.current.getBoundingClientRect();
      ref.current.style.transform =
        "translate(" + (e.clientX - r.left - r.width / 2) * 0.25 + "px," + (e.clientY - r.top - r.height / 2) * 0.35 + "px)";
    };
    const leave = () => { ref.current.style.transform = ""; };
    return h("a", { ref, className: "magnet", href, target: "_blank", rel: "noreferrer", onMouseMove: move, onMouseLeave: leave }, children);
  }

  // Posts to the Telegram relay (worker/telegram.js). Until profile.relay is set, or if the
  // relay fails, the visitor is pointed to LinkedIn instead.
  function MessageForm() {
    const [state, setState] = useState("idle");
    async function submit(e) {
      e.preventDefault();
      const form = e.currentTarget;
      setState("sending");
      try {
        if (!profile.relay) throw new Error("relay not set");
        const res = await fetch(profile.relay, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        });
        if (!res.ok) throw new Error("relay " + res.status);
        form.reset();
        setState("sent");
      } catch (err) {
        setState("error");
      }
    }
    const field = (label, input) => h("label", { className: input.type === "textarea" ? "message-body" : null }, h("span", null, label), input);
    return h(
      "form",
      { className: "message", onSubmit: submit, "data-reveal": "up", style: { "--d": "120ms" } },
      field("Name", h("input", { name: "name", autoComplete: "name", maxLength: 100, required: true })),
      field("Email or Telegram handle", h("input", { name: "contact", autoComplete: "email", maxLength: 200, required: true })),
      field("Message", h("textarea", { name: "message", rows: 5, maxLength: 2000, required: true })),
      // Honeypot: off-screen for people, bots fill it, and the relay drops those.
      h("input", { name: "website", className: "hp", tabIndex: -1, autoComplete: "off", "aria-hidden": "true" }),
      h(
        "div",
        { className: "message-foot" },
        h("button", { type: "submit", className: "magnet is-solid", disabled: state === "sending" }, state === "sending" ? "Sending…" : "Send message"),
        h(
          "p",
          { className: "message-status", role: "status" },
          state === "sent" ? "Sent. I'll get back to you soon." : state === "error" ? "Couldn't send that just now. Please reach me on LinkedIn instead." : ""
        )
      )
    );
  }

  function Contact() {
    return h(
      Section,
      { id: "contact", title: ["Bring a problem,", "a dataset and a metric."] },
      interests.length
        ? h(
            "div",
            { className: "exploring" },
            h("p", { className: "exploring-label" }, "Currently exploring"),
            h("ul", { className: "interests" }, interests.map((x, i) => h("li", { key: x, "data-reveal": "pop", style: { "--d": i * 110 + "ms" } }, x)))
          )
        : null,
      h(
        "p",
        { className: "contact-copy", "data-reveal": "up" },
        "The best AI projects start with constraints, a baseline and a way to tell whether the model helped. Send a message below and it reaches me directly on Telegram."
      ),
      h(MessageForm),
      h(
        "ul",
        { className: "links", "data-reveal": "up", style: { "--d": "120ms" } },
        profile.links.map(([label, href]) => h("li", { key: label }, h(Magnet, { href }, label)))
      )
    );
  }

  // Gives every split word its order (--i) and line (--l), then marks elements with data-in as they enter the viewport
  // (an attribute, because React rewrites className on re-render and would drop a class).
  function useReveals() {
    useEffect(() => {
      const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
      nodes.forEach((el) => {
        let line = -1, top = null;
        el.querySelectorAll(".w").forEach((w, i) => {
          if (w.offsetTop !== top) { top = w.offsetTop; line++; }
          w.style.setProperty("--i", i);
          w.style.setProperty("--l", line);
        });
      });
      if (reduceMotion) return;
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { e.target.setAttribute("data-in", ""); io.unobserve(e.target); }
        }),
        { rootMargin: "0px 0px -8% 0px" }
      );
      nodes.forEach((n) => io.observe(n));
      return () => io.disconnect();
    }, []);
  }

  // In-page links: a panel sweeps up carrying the destination's number and title, the page
  // jumps underneath, then the panel lifts away and that section's reveals play.
  // Reduced motion keeps the plain anchor jump.
  function useSectionJump() {
    useEffect(() => {
      if (reduceMotion) return;
      const curtain = document.querySelector(".jump");
      const [num, label] = curtain.children;
      const ease = "cubic-bezier(0.76, 0, 0.24, 1)";
      let busy = false;
      function onClick(e) {
        const a = e.target.closest && e.target.closest('a[href^="#"]');
        if (!a || busy || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
        const id = a.getAttribute("href").slice(1);
        const el = id ? document.getElementById(id) : null;
        if (!el) return;
        e.preventDefault();
        busy = true;
        history.pushState(null, "", "#" + id);
        const titles = Array.from(document.querySelectorAll(".section-title"));
        const title = el.querySelector(".section-title");
        num.textContent = title ? String(titles.indexOf(title) + 1).padStart(2, "0") : "";
        label.textContent = title ? title.textContent : profile.name;
        label.animate([{ opacity: 0, transform: "translateY(40px)" }, { opacity: 1, transform: "none" }], { duration: 700, delay: 200, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" });
        curtain
          .animate([{ transform: "translateY(100%)" }, { transform: "none" }], { duration: 600, easing: ease, fill: "forwards" })
          .finished.then(() => {
            const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
            window.scrollTo({ top: id === "top" ? 0 : el.getBoundingClientRect().top + window.scrollY - offset, behavior: "instant" });
            if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
            el.focus({ preventScroll: true });
            return curtain.animate([{ transform: "none" }, { transform: "translateY(-100%)" }], { duration: 700, delay: 250, easing: ease, fill: "forwards" }).finished;
          })
          .then(() => (busy = false));
      }
      document.addEventListener("click", onClick);
      return () => document.removeEventListener("click", onClick);
    }, []);
  }

  // Eased wheel scrolling, like Lenis on the reference site, without the dependency.
  // Moves the real scroll position (so sticky, observers and anchors keep working),
  // only for mouse wheels; touch, keyboard and scrollbar stay native.
  function useSmoothScroll() {
    useEffect(() => {
      if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
      const maxY = () => document.documentElement.scrollHeight - window.innerHeight;
      let target = window.scrollY, current = target, raf = 0, last = 0;

      function tick(now) {
        const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
        last = now;
        current += (target - current) * (1 - Math.exp(-dt * 9));
        if (Math.abs(target - current) < 0.5) current = target;
        window.scrollTo({ top: current, behavior: "instant" });
        raf = current === target ? 0 : requestAnimationFrame(tick);
      }
      function scrollToY(y) {
        target = Math.max(0, Math.min(maxY(), y));
        if (!raf) {
          current = window.scrollY;
          last = performance.now();
          raf = requestAnimationFrame(tick);
        }
      }
      function onWheel(e) {
        if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
        e.preventDefault();
        const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
        scrollToY((raf ? target : window.scrollY) + e.deltaY * unit);
      }
      // Keyboard, scrollbar or find-in-page moved the page: adopt that position.
      function onScroll() {
        if (!raf) target = current = window.scrollY;
      }
      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("scroll", onScroll);
      };
    }, []);
  }

  function App() {
    const [ready, setReady] = useState(!showIntro);
    const [introGone, setIntroGone] = useState(!showIntro);
    useReveals();
    useSmoothScroll();
    useSectionJump();
    const onDone = useCallback(() => {
      setReady(true);
      document.documentElement.classList.remove("is-intro");
    }, []);
    return h(
      React.Fragment,
      null,
      introGone ? null : h(Intro, { onDone, onGone: () => setIntroGone(true) }),
      h(TopBar),
      h("div", { className: "jump", "aria-hidden": "true" }, h("span", { className: "jump-n" }), h("span", { className: "jump-t" })),
      h("main", null, h(Hero, { ready }), h(About), h(Experience), h(Certifications), h(Publications), h(Work), h(Capabilities), h(Contact)),
      h("footer", { className: "footer" }, h("span", null, "© 2026 " + profile.name), h("a", { href: "#top" }, "Back to top"))
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
