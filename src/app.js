(function () {
  const h = React.createElement;
  const { useEffect, useRef } = React;

  const profile = {
    name: "Mawardi Rosli",
    role: "AI/ML Research Officer",
    location: "Malaysia",
    tagline:
      "I like building AI systems that feel calm on the outside and sharp underneath.",
    about:
      "I am an Intelligent Systems Engineering graduate and Research Officer at MIMOS Berhad. My work sits between research, engineering, and product thinking: turning models, documents, data, and prototypes into systems that can be tested, improved, and used.",
    availability: "Currently thinking about GenAI systems, OCR pipelines, RAG architecture, and efficient model deployment.",
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/mawardii",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mawardi-rosli-04b299334",
      },
    ],
  };

  const interests = [
    {
      title: "Generative AI",
      body: "Building useful LLM workflows that move beyond demos into repeatable systems.",
    },
    {
      title: "RAG Agents",
      body: "Designing retrieval, memory, and evaluation loops for document-heavy use cases.",
    },
    {
      title: "Computer Vision",
      body: "Working with OCR, object detection, OpenCV, and visual data pipelines.",
    },
    {
      title: "Model Optimization",
      body: "Making AI workloads faster, lighter, and easier to deploy in real environments.",
    },
  ];

  const education = [
    {
      title: "Intelligent Systems Engineering",
      meta: "Graduate",
      body: "A technical foundation in AI, software systems, data, and intelligent automation.",
    },
  ];

  const experience = [
    {
      title: "Research Officer",
      meta: "MIMOS Berhad",
      body: "Researching and building applied AI workflows across LLMs, computer vision, and end-to-end model pipelines.",
    },
    {
      title: "AI Pipeline Builder",
      meta: "Current focus",
      body: "Turning notebooks and experiments into clean workflows for evaluation, iteration, and deployment readiness.",
    },
  ];

  const projects = [
    {
      title: "OCR Fine-tuning",
      stack: "Computer Vision / Deep Learning",
      body: "Fine-tuning OCR workflows for better text extraction, evaluation, and domain-specific performance.",
      signal: "01",
    },
    {
      title: "RAG Chatbot Implementations",
      stack: "LLMs / Retrieval / Agents",
      body: "Building retrieval-augmented assistants that connect documents, search, and grounded answer generation.",
      signal: "02",
    },
    {
      title: "Model Optimization Lab",
      stack: "Optimization / Deployment",
      body: "Exploring lighter inference, practical benchmarking, and deployment-minded model workflows.",
      signal: "03",
    },
  ];

  const techGroups = [
    ["Python", "NumPy", "Pandas", "OpenCV"],
    ["LLMs", "RAG", "Deep Learning", "Object Detection"],
    ["FastAPI", "Flask", "PostgreSQL", "Docker"],
    ["Jupyter", "VS Code", "Git", "WSL2"],
  ];

  const spotify = {
    title: "Current Rotation",
    caption: "Music is part of the working rhythm.",
    embedUrl:
      "https://open.spotify.com/embed/playlist/1w3FcOORBfn6fLcfU2rwV3?utm_source=generator",
  };

  const heroNotes = [
    ["now building", "RAG agents + OCR workflows"],
    ["taste", "minimal interfaces, useful systems"],
    ["loop", "research, prototype, evaluate, repeat"],
  ];

  function cx() {
    return Array.from(arguments).filter(Boolean).join(" ");
  }

  function Icon({ name }) {
    const glyphs = {
      arrow: "->",
      dot: "+",
      play: "||>",
    };

    return h("span", { className: "icon", "aria-hidden": "true" }, glyphs[name] || "+");
  }

  function NeuralCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      let width = 0;
      let height = 0;
      let frame = 0;
      let rafId = 0;
      const pointer = { x: 0, y: 0, active: false };
      const nodes = Array.from({ length: 42 }, (_, index) => ({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0009,
        vy: (Math.random() - 0.5) * 0.0009,
        size: index % 7 === 0 ? 2.4 : 1.5,
      }));

      function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        const ratio = window.devicePixelRatio || 1;
        width = rect.width;
        height = rect.height;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
      }

      function draw() {
        frame += 0.0045;
        context.clearRect(0, 0, width, height);

        const gradient = context.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, "rgba(16, 185, 129, 0.20)");
        gradient.addColorStop(0.52, "rgba(17, 24, 39, 0.06)");
        gradient.addColorStop(1, "rgba(255, 111, 97, 0.18)");
        context.fillStyle = gradient;
        context.fillRect(0, 0, width, height);

        nodes.forEach((node) => {
          node.x += node.vx + Math.sin(frame + node.y * 8) * 0.00015;
          node.y += node.vy + Math.cos(frame + node.x * 8) * 0.00015;

          if (node.x < 0.03 || node.x > 0.97) node.vx *= -1;
          if (node.y < 0.06 || node.y > 0.94) node.vy *= -1;

          node.x = Math.min(0.98, Math.max(0.02, node.x));
          node.y = Math.min(0.96, Math.max(0.04, node.y));
        });

        for (let a = 0; a < nodes.length; a += 1) {
          for (let b = a + 1; b < nodes.length; b += 1) {
            const first = nodes[a];
            const second = nodes[b];
            const x1 = first.x * width;
            const y1 = first.y * height;
            const x2 = second.x * width;
            const y2 = second.y * height;
            const distance = Math.hypot(x1 - x2, y1 - y2);

            if (distance < 132) {
              const alpha = 1 - distance / 132;
              context.strokeStyle = `rgba(17, 24, 39, ${alpha * 0.16})`;
              context.lineWidth = 1;
              context.beginPath();
              context.moveTo(x1, y1);
              context.lineTo(x2, y2);
              context.stroke();
            }
          }
        }

        nodes.forEach((node) => {
          const x = node.x * width;
          const y = node.y * height;
          const pointerDistance = pointer.active ? Math.hypot(x - pointer.x, y - pointer.y) : 999;
          const pulse = pointerDistance < 150 ? 1.8 : 1;
          context.fillStyle = pointerDistance < 150 ? "rgba(15, 118, 110, 0.88)" : "rgba(17, 24, 39, 0.58)";
          context.beginPath();
          context.arc(x, y, node.size * pulse, 0, Math.PI * 2);
          context.fill();
        });

        rafId = requestAnimationFrame(draw);
      }

      function handlePointerMove(event) {
        const rect = canvas.getBoundingClientRect();
        pointer.x = event.clientX - rect.left;
        pointer.y = event.clientY - rect.top;
        pointer.active = true;
      }

      function handlePointerLeave() {
        pointer.active = false;
      }

      resize();
      draw();

      window.addEventListener("resize", resize);
      canvas.addEventListener("pointermove", handlePointerMove);
      canvas.addEventListener("pointerleave", handlePointerLeave);

      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("resize", resize);
        canvas.removeEventListener("pointermove", handlePointerMove);
        canvas.removeEventListener("pointerleave", handlePointerLeave);
      };
    }, []);

    return h("canvas", {
      ref: canvasRef,
      className: "neural-canvas",
      "aria-hidden": "true",
    });
  }

  function ScrollProgress() {
    useEffect(() => {
      const bar = document.querySelector("[data-progress]");
      const update = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
      };

      update();
      window.addEventListener("scroll", update, { passive: true });

      return () => window.removeEventListener("scroll", update);
    }, []);

    return h("div", { className: "scroll-progress", "data-progress": true });
  }

  function RevealObserver() {
    useEffect(() => {
      const elements = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.18 }
      );

      elements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }, []);

    return null;
  }

  function Header() {
    const links = [
      ["about", "About"],
      ["projects", "Work"],
      ["music", "Music"],
      ["social", "Social"],
    ];

    return h(
      "header",
      { className: "site-header" },
      h(
        "a",
        { className: "brand-mark", href: "#top", "aria-label": "Mawardi Rosli home" },
        h("span", null, "mawardi"),
        h("small", null, "ai/ml")
      ),
      h(
        "nav",
        { className: "site-nav", "aria-label": "Primary navigation" },
        links.map(([link, label]) =>
          h(
            "a",
            { key: link, href: `#${link}` },
            label
          )
        )
      )
    );
  }

  function FloatingSpotify() {
    return h(
      "aside",
      { className: "floating-spotify", "aria-label": "Spotify playlist" },
      h(
        "div",
        { className: "floating-spotify-label" },
        h("span", null, "listening"),
        h("strong", null, spotify.title)
      ),
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
      { id: "top", className: "hero-section" },
      h(NeuralCanvas),
      h(
        "div",
        { className: "hero-content" },
        h(
          "div",
          { className: "hero-main" },
          h(
            "div",
            { className: "hero-kicker reveal" },
            h("span", null, profile.role),
            h("span", null, profile.location)
          ),
          h("h1", { className: "hero-title reveal" }, profile.name),
          h("p", { className: "hero-copy reveal" }, profile.tagline),
          h(
            "div",
            { className: "hero-actions reveal" },
            h(
              "a",
              { className: "button primary", href: "#projects" },
              "View work",
              h(Icon, { name: "arrow" })
            ),
            h(
              "a",
              { className: "button ghost", href: profile.socials[1].href, target: "_blank", rel: "noreferrer" },
              "LinkedIn"
            )
          )
        ),
        h(
          "aside",
          { className: "hero-notes reveal" },
          h("p", { className: "note-title" }, "field notes"),
          heroNotes.map(([label, value]) =>
            h(
              "div",
              { className: "note-line", key: label },
              h("span", null, label),
              h("strong", null, value)
            )
          )
        )
      ),
      h(
        "div",
        { className: "hero-status reveal" },
        h("span", { className: "status-dot" }),
        profile.availability
      )
    );
  }

  function Section({ id, eyebrow, title, children, className }) {
    return h(
      "section",
      { id, className: cx("page-section", className) },
      h(
        "div",
        { className: "section-shell" },
        h(
          "div",
          { className: "section-heading reveal" },
          h("p", { className: "eyebrow" }, eyebrow),
          h("h2", null, title)
        ),
        children
      )
    );
  }

  function AboutSection() {
    return h(
      Section,
      { id: "about", eyebrow: "About", title: "Research mind, builder habits." },
      h(
        "div",
        { className: "about-grid" },
        h("p", { className: "about-lede reveal" }, profile.about),
        h(
          "div",
          { className: "about-panel reveal" },
          h("span", null, "Current signal"),
          h("strong", null, "End-to-end AI systems with clean evaluation loops.")
        )
      )
    );
  }

  function InterestsSection() {
    return h(
      Section,
      { id: "interests", eyebrow: "Current Interest", title: "Where my attention is going now." },
      h(
        "div",
        { className: "interest-grid" },
        interests.map((item, index) =>
          h(
            "article",
            { className: "interest-card reveal", key: item.title, style: { "--delay": `${index * 80}ms` } },
            h("span", { className: "card-index" }, `0${index + 1}`),
            h("h3", null, item.title),
            h("p", null, item.body)
          )
        )
      )
    );
  }

  function TimelineList({ items }) {
    return h(
      "div",
      { className: "timeline-list" },
      items.map((item, index) =>
        h(
          "article",
          { className: "timeline-item reveal", key: item.title, style: { "--delay": `${index * 90}ms` } },
          h("div", { className: "timeline-node" }),
          h(
            "div",
            null,
            h("p", { className: "timeline-meta" }, item.meta),
            h("h3", null, item.title),
            h("p", null, item.body)
          )
        )
      )
    );
  }

  function EducationExperienceSection() {
    return h(
      "div",
      { className: "split-band" },
      h(
        Section,
        { id: "education", eyebrow: "Education", title: "Foundation." },
        h(TimelineList, { items: education })
      ),
      h(
        Section,
        { id: "experience", eyebrow: "Experience", title: "Applied work." },
        h(TimelineList, { items: experience })
      )
    );
  }

  function ProjectsSection() {
    return h(
      Section,
      { id: "projects", eyebrow: "Projects", title: "Selected AI/ML work." },
      h(
        "div",
        { className: "project-grid" },
        projects.map((project, index) =>
          h(
            "article",
            { className: "project-card reveal", key: project.title, style: { "--delay": `${index * 100}ms` } },
            h(
              "div",
              { className: "project-visual" },
              h("span", null, project.signal),
              h("div", { className: "project-pulse" })
            ),
            h("p", { className: "project-stack" }, project.stack),
            h("h3", null, project.title),
            h("p", null, project.body)
          )
        )
      ),
      h(
        "div",
        { className: "tech-marquee reveal", "aria-label": "Technical skills" },
        techGroups.map((group, groupIndex) =>
          h(
            "div",
            { className: "tech-row", key: groupIndex },
            group.map((tech) => h("span", { key: tech }, tech))
          )
        )
      )
    );
  }

  function MusicSection() {
    return h(
      Section,
      { id: "music", eyebrow: "Music", title: "A little signal outside the lab." },
      h(
        "div",
        { className: "music-strip reveal" },
        h(
          "div",
          { className: "music-copy" },
          h("span", { className: "music-mark" }, h(Icon, { name: "play" })),
          h("h3", null, spotify.title),
          h("p", null, spotify.caption)
        ),
        h(
          "div",
          { className: "equalizer", "aria-hidden": "true" },
          Array.from({ length: 18 }, (_, index) =>
            h("span", { key: index, style: { "--bar": `${index * 70}ms` } })
          )
        )
      )
    );
  }

  function SocialSection() {
    return h(
      Section,
      { id: "social", eyebrow: "Social", title: "Let the work keep moving." },
      h(
        "div",
        { className: "social-row reveal" },
        profile.socials.map((social) =>
          h(
            "a",
            { className: "social-link", href: social.href, target: "_blank", rel: "noreferrer", key: social.label },
            h("span", null, social.label),
            h(Icon, { name: "arrow" })
          )
        )
      )
    );
  }

  function App() {
    return h(
      React.Fragment,
      null,
      h(ScrollProgress),
      h(RevealObserver),
      h(Header),
      h(FloatingSpotify),
      h(
        "main",
        null,
        h(Hero),
        h(AboutSection),
        h(InterestsSection),
        h(EducationExperienceSection),
        h(ProjectsSection),
        h(MusicSection),
        h(SocialSection)
      ),
      h(
        "footer",
        { className: "site-footer" },
        h("span", null, "Mawardi Rosli"),
        h("span", null, "AI/ML Portfolio")
      )
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
