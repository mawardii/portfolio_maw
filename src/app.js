(function () {
  const h = React.createElement;
  const { useEffect, useState, useCallback, useRef } = React;

  const reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Reveal styles only apply under .motion, so content is visible without JS or with reduced motion.
  if (!reduceMotion) document.documentElement.classList.add("motion");

  const profile = {
    name: "Mawardi Rosli",
    links: [
      ["LinkedIn", "https://www.linkedin.com/in/mawardi-rosli-04b299334"],
      ["GitHub", "https://github.com/mawardii"],
    ],
  };

  const facts = [
    ["Role", "AI/ML Research Officer, MIMOS Berhad"],
    ["Focus", "Generative AI, RAG, OCR, computer vision, model optimization"],
    ["Based in", "Malaysia"],
  ];

  // Order matters: the hero statement footnotes these by position (1, 2, 3).
  const projects = [
    {
      id: "rag",
      title: "Document Intelligence RAG",
      type: "LLM systems",
      status: "Active prototype",
      year: "2026",
      problem:
        "Make document answers easier to inspect by connecting retrieval evidence, response grounding, and evaluation notes.",
      method:
        "Structured ingestion, metadata-aware retrieval, answer generation, refusal behavior, and manual failure review.",
      checks: "Grounding, citation coverage, failure cases",
      stack: "Python, LLMs, vector search",
    },
    {
      id: "ocr",
      title: "OCR Fine-tuning Workflow",
      type: "Computer vision",
      status: "Research build",
      year: "2026",
      problem:
        "Improve visual text extraction for domain documents where raw OCR output needs stronger structure and validation.",
      method:
        "Dataset review, preprocessing, model iteration, extraction checks, and normalization for downstream use.",
      checks: "Extraction review, dataset slices, post-processing",
      stack: "Python, OpenCV, Jupyter",
    },
    {
      id: "opt",
      title: "Model Optimization Lab",
      type: "Inference",
      status: "Experiment track",
      year: "2026",
      problem:
        "Compare model behavior under real constraints instead of choosing architectures from benchmark headlines alone.",
      method:
        "Baseline measurement, latency notes, accuracy tradeoff review, and deployment-minded experiment tracking.",
      checks: "Baselines, latency, accuracy tradeoffs",
      stack: "Python, deep learning, Docker",
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
      date: "Ongoing",
      role: "RAG and OCR builder",
      org: "Independent projects",
      body: "Retrieval assistants, OCR workflows, and evaluation loops for document intelligence.",
    },
    {
      date: "Degree",
      role: "Intelligent Systems Engineering",
      org: "Graduate",
      body: "Grounding in AI systems, automation, data processing, and applied engineering.",
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

  const stack =
    "Python, NumPy, Pandas, OpenCV, deep learning, LLMs, RAG, FastAPI, Flask, Docker, PostgreSQL, Jupyter";

  // Hero: "I build AI that" + one of these, typed out and swapped in turn.
  const phrases = ["reads documents.", "answers with evidence.", "sees what matters.", "runs on less."];

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

  // title = [sans line, italic serif line], e.g. ["Selected", "projects."]
  function Section({ id, title, wide, children }) {
    return h(
      "section",
      { id, className: wide ? "section is-wide" : "section", "aria-labelledby": id + "-title", "data-reveal": "rule" },
      h(
        "h2",
        { className: "section-title", id: id + "-title", "data-reveal": "lines" },
        h("span", { className: "t-sans" }, h(Words, { text: title[0] })),
        " ",
        h("span", { className: "t-serif" }, h(Words, { text: title[1] }))
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
      h("a", { className: "brand", href: "#top" }, profile.name),
      h(
        "nav",
        { className: "nav", "aria-label": "Primary" },
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

  // Hero field: a 3D "embedding space". Points sit in topic clusters on a slowly
  // turning cloud; drag to spin it (it keeps some momentum). Each time the
  // headline phrase changes, a query point appears and links to its nearest
  // neighbours, the way vector search picks evidence for a RAG answer.
  function EmbeddingField({ pulse }) {
    const ref = useRef(null);
    useEffect(() => {
      const canvas = ref.current;
      const stage = canvas.parentElement;
      const ctx = canvas.getContext("2d");
      let W = 0, H = 0, raf = 0, running = false;
      let ink = "#e9eaee", accent = "#93a1ff";
      const t0 = performance.now();

      // Seeded so the cloud looks the same on every visit.
      let seed = 11;
      const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
      const gauss = () => Math.sqrt(-2 * Math.log(rnd() + 1e-9)) * Math.cos(6.2832 * rnd());

      const centers = Array.from({ length: 7 }, () => {
        const u = rnd() * 2 - 1, a = rnd() * 6.2832, r = 0.55 + rnd() * 0.3;
        return [Math.sqrt(1 - u * u) * Math.cos(a) * r, u * r, Math.sqrt(1 - u * u) * Math.sin(a) * r];
      });
      const pts = [];
      for (let i = 0; i < 560; i++) {
        const c = centers[i % centers.length], s = i % 9 === 0 ? 0.38 : 0.12;
        pts.push({ x: c[0] + gauss() * s, y: c[1] + gauss() * s, z: c[2] + gauss() * s, d: rnd() * 0.8 });
      }
      // Faint links to each point's two nearest neighbours turn clusters into little graphs.
      // ponytail: O(n²) once at startup, fine for a few hundred points.
      const edges = [];
      pts.forEach((p, i) => {
        pts
          .map((q, j) => [j, (p.x - q.x) ** 2 + (p.y - q.y) ** 2 + (p.z - q.z) ** 2])
          .filter(([j, d]) => j > i && d < 0.03)
          .sort((a, b) => a[1] - b[1])
          .slice(0, 2)
          .forEach(([j]) => edges.push([p, pts[j]]));
      });
      // Two orbit rings around the cloud, to make the rotation read as 3D.
      const rings = [0, 1].map((r) =>
        Array.from({ length: 97 }, (_, k) => {
          const a = (k / 96) * 6.2832, tilt = r ? 1.1 : 0.15;
          return { x: Math.cos(a) * 1.1, y: Math.sin(a) * Math.sin(tilt) * 1.1, z: Math.sin(a) * Math.cos(tilt) * 1.1 };
        })
      );

      // Rotation state: yaw/pitch with velocity, so drags coast to a stop.
      let yaw = 0.6, pitch = -0.25, vYaw = 0, vPitch = 0, drag = null, tiltX = 0, tiltY = 0;
      let query = null, lastPulse = pulse.current;

      function readColors() {
        const cs = getComputedStyle(canvas);
        ink = cs.getPropertyValue("--stage-ink").trim() || ink;
        accent = cs.getPropertyValue("--stage-accent").trim() || accent;
      }

      function size() {
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const r = canvas.getBoundingClientRect();
        W = r.width;
        H = r.height;
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      function fireQuery(now) {
        const c = centers[Math.floor(rnd() * centers.length)];
        const q = { x: c[0] + gauss() * 0.3, y: c[1] + gauss() * 0.3, z: c[2] + gauss() * 0.3 };
        const near = pts
          .map((p) => [p, (p.x - q.x) ** 2 + (p.y - q.y) ** 2 + (p.z - q.z) ** 2])
          .sort((a, b) => a[1] - b[1])
          .slice(0, 10)
          .map((e) => e[0]);
        query = { q, near, born: now };
      }

      function draw(now) {
        const t = reduceMotion ? 99 : (now - t0) / 1000;
        const narrow = W < 700;
        const cx = narrow ? W * 0.5 : W * 0.66;
        const cy = narrow ? H * 0.32 : H * 0.5;
        const R = Math.min(narrow ? W * 0.38 : W * 0.28, H * (narrow ? 0.26 : 0.36));
        const grow = 1 - Math.pow(1 - Math.min(1, t / 2.2), 4); // cloud expands out of a point on load

        if (!drag && !reduceMotion) {
          yaw += vYaw + 0.0016;
          pitch += vPitch;
          vYaw *= 0.95;
          vPitch *= 0.95;
          pitch = Math.max(-1.1, Math.min(1.1, pitch));
        }
        const cyw = Math.cos(yaw + tiltX), syw = Math.sin(yaw + tiltX);
        const cp = Math.cos(pitch + tiltY), sp = Math.sin(pitch + tiltY);
        const cam = 3.2;
        const project = (p) => {
          const x1 = p.x * cyw - p.z * syw, z1 = p.x * syw + p.z * cyw;
          const y2 = p.y * cp - z1 * sp, z2 = p.y * sp + z1 * cp;
          const k = cam / (cam + z2);
          return { sx: cx + x1 * R * k * grow, sy: cy + y2 * R * k * grow, z: z2, k };
        };

        ctx.clearRect(0, 0, W, H);

        // Query: a pulse that fades over 2.6s, with lines to its neighbours.
        let qp = null, qa = 0;
        if (pulse.current !== lastPulse) {
          lastPulse = pulse.current;
          if (!reduceMotion) fireQuery(now);
        }
        if (query) {
          const age = (now - query.born) / 1000;
          qa = age < 0.4 ? age / 0.4 : Math.max(0, 1 - (age - 0.4) / 2.2);
          if (age > 0.4 && qa <= 0) query = null;
          else qp = project(query.q);
        }

        const proj = pts.map((p) => {
          const pr = project(p);
          pr.p = p;
          p.pr = pr;
          return pr;
        });
        proj.sort((a, b) => b.z - a.z);

        const fade = Math.min(1, Math.max(0, (t - 0.8) / 1.5));
        ctx.strokeStyle = ink;
        ctx.lineWidth = 1;
        for (const ring of rings) {
          for (let k = 0; k < 96; k++) {
            const a = project(ring[k]), b = project(ring[k + 1]);
            ctx.globalAlpha = (0.04 + 0.14 * (1 - a.z / 1.1) / 2) * fade;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
        for (const [a, b] of edges) {
          ctx.globalAlpha = (0.05 + 0.2 * (1 - (a.pr.z + b.pr.z) / 2) / 2) * fade;
          ctx.beginPath();
          ctx.moveTo(a.pr.sx, a.pr.sy);
          ctx.lineTo(b.pr.sx, b.pr.sy);
          ctx.stroke();
        }

        if (qp) {
          ctx.strokeStyle = accent;
          ctx.lineWidth = 1;
          for (const n of query.near) {
            const np = project(n);
            ctx.globalAlpha = qa * 0.9;
            ctx.beginPath();
            ctx.moveTo(qp.sx, qp.sy);
            ctx.lineTo(np.sx, np.sy);
            ctx.stroke();
          }
        }

        const nearSet = query ? new Set(query.near) : null;
        for (const pr of proj) {
          const depth = (1 - pr.z) / 2; // ~0 far, ~1 near
          const appear = Math.min(1, Math.max(0, (t - pr.p.d) / 1.2));
          const hit = nearSet && nearSet.has(pr.p);
          ctx.globalAlpha = (hit ? 0.4 + 0.6 * qa : 0.15 + 0.6 * depth) * appear;
          ctx.fillStyle = hit ? accent : ink;
          const r = (hit ? 2.2 : 0.7 + 1.5 * depth) * pr.k;
          ctx.beginPath();
          ctx.arc(pr.sx, pr.sy, r, 0, 6.2832);
          ctx.fill();
        }

        if (qp) {
          ctx.globalAlpha = qa;
          ctx.fillStyle = accent;
          ctx.beginPath();
          ctx.arc(qp.sx, qp.sy, 5, 0, 6.2832);
          ctx.fill();
          ctx.globalAlpha = qa * 0.35;
          ctx.strokeStyle = accent;
          ctx.beginPath();
          ctx.arc(qp.sx, qp.sy, 5 + 18 * (1 - qa), 0, 6.2832);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      function loop(now) {
        draw(now);
        if (running) raf = requestAnimationFrame(loop);
      }
      function setRunning(v) {
        if (reduceMotion || v === running) return;
        running = v;
        if (v) raf = requestAnimationFrame(loop);
        else cancelAnimationFrame(raf);
      }

      const onDown = (e) => {
        if (e.target.closest("a, button")) return;
        drag = { x: e.clientX, y: e.clientY };
        stage.setPointerCapture(e.pointerId);
        stage.classList.add("is-dragging");
      };
      const onMove = (e) => {
        if (drag) {
          const dx = (e.clientX - drag.x) * 0.006, dy = (e.clientY - drag.y) * 0.006;
          yaw += dx;
          pitch = Math.max(-1.1, Math.min(1.1, pitch + dy));
          vYaw = dx;
          vPitch = dy;
          drag = { x: e.clientX, y: e.clientY };
        } else if (e.pointerType === "mouse") {
          // Hover tilt: the cloud leans a little toward the pointer.
          const r = stage.getBoundingClientRect();
          tiltX = ((e.clientX - r.left) / r.width - 0.5) * 0.35;
          tiltY = ((e.clientY - r.top) / r.height - 0.5) * 0.25;
        }
      };
      const onUp = () => {
        drag = null;
        stage.classList.remove("is-dragging");
      };
      const onLeave = () => {
        tiltX = tiltY = 0;
      };

      readColors();
      size();
      draw(performance.now());

      const ro = new ResizeObserver(() => { size(); draw(performance.now()); });
      ro.observe(canvas);
      let onScreen = true;
      const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; setRunning(onScreen && !document.hidden); });
      io.observe(canvas);
      const mo = new MutationObserver(() => { readColors(); draw(performance.now()); });
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
      const onVis = () => setRunning(onScreen && !document.hidden);
      document.addEventListener("visibilitychange", onVis);
      if (!reduceMotion) {
        stage.addEventListener("pointerdown", onDown);
        stage.addEventListener("pointermove", onMove);
        stage.addEventListener("pointerup", onUp);
        stage.addEventListener("pointercancel", onUp);
        stage.addEventListener("pointerleave", onLeave);
      }
      return () => {
        running = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        mo.disconnect();
        document.removeEventListener("visibilitychange", onVis);
        stage.removeEventListener("pointerdown", onDown);
        stage.removeEventListener("pointermove", onMove);
        stage.removeEventListener("pointerup", onUp);
        stage.removeEventListener("pointercancel", onUp);
        stage.removeEventListener("pointerleave", onLeave);
      };
    }, []);
    return h("canvas", { className: "field", ref, "aria-hidden": "true" });
  }

  // Types each phrase, holds it, deletes it, moves on. Bumps `pulse` on every
  // new phrase so the field fires a query in step with the text.
  function Typed({ pulse }) {
    const [text, setText] = useState(reduceMotion ? phrases[0] : "");
    useEffect(() => {
      if (reduceMotion) return;
      let i = 0, n = 0, deleting = false, timer = 0;
      const step = () => {
        const full = phrases[i];
        if (!deleting) {
          n++;
          if (n === 1) pulse.current++;
          setText(full.slice(0, n));
          if (n === full.length) { deleting = true; timer = setTimeout(step, 2200); return; }
          timer = setTimeout(step, 55);
        } else {
          n--;
          setText(full.slice(0, n));
          if (n === 0) { deleting = false; i = (i + 1) % phrases.length; timer = setTimeout(step, 350); return; }
          timer = setTimeout(step, 28);
        }
      };
      timer = setTimeout(step, 1500);
      return () => clearTimeout(timer);
    }, []);
    return h("span", { className: "typed", "aria-hidden": "true" }, text, h("span", { className: "caret" }));
  }

  function Hero() {
    const pulse = useRef(0);
    const lastWord = (p) => p.replace(/\.$/, "");
    const spoken = "I build AI that " + phrases.slice(0, -1).map(lastWord).join(", ") + " and " + phrases[phrases.length - 1];
    return h(
      "section",
      { id: "top", className: "hero" },
      h(
        "div",
        { className: "stage" },
        h(EmbeddingField, { pulse }),
        h(
          "div",
          { className: "stage-copy" },
          h("p", { className: "stage-name" }, profile.name + ", AI/ML Research Officer"),
          h(
            "h1",
            { className: "statement", "aria-label": spoken },
            h("span", { "data-reveal": "blur", "aria-hidden": "true" }, h(Words, { text: "I build AI that" })),
            " ",
            h(Typed, { pulse })
          )
        ),
        h("p", { className: "stage-hint", "aria-hidden": "true" }, "Drag to turn")
      ),
      h(
        "dl",
        { className: "facts", "data-reveal": "rule" },
        facts.map(([k, v], i) =>
          h("div", { key: k, "data-reveal": "up", style: { "--d": 200 + i * 120 + "ms" } }, h("dt", null, k), h("dd", null, v))
        )
      )
    );
  }

  // Project cards are sticky: each one pins below the nav and the next slides up over it.
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
            { key: p.id, id: p.id, className: "card", style: { "--n": i, "--tint": "var(--tint-" + (i + 1) + ")" } },
            h(
              "div",
              { className: "card-main" },
              h("span", { className: "card-n" }, "Project " + (i + 1)),
              h("h3", { className: "card-title" }, p.title),
              h("p", { className: "card-meta" }, p.type + ", " + p.year + ". " + p.status + "."),
              h(
                "dl",
                { className: "card-body" },
                h("div", null, h("dt", null, "Problem"), h("dd", null, p.problem)),
                h("div", null, h("dt", null, "Method"), h("dd", null, p.method))
              )
            ),
            h(
              "dl",
              { className: "card-side" },
              h("div", null, h("dt", null, "What I check"), h("dd", null, p.checks)),
              h("div", null, h("dt", null, "Built with"), h("dd", null, p.stack))
            )
          )
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
            { key: e.role, className: isOpen ? "band is-open" : "band", style: { "--tint": "var(--tint-" + (i + 1) + ")" } },
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
              h("div", null, h("p", null, e.body))
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

  function Certifications() {
    if (!certifications.length) return null;
    return h(
      Section,
      { id: "certifications", title: ["Certified", "along the way."] },
      h(Entries, { items: certifications.map((c) => ({ title: c.name, detail: c.issuer, year: c.year, url: c.url })) })
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

  function Interests() {
    if (!interests.length) return null;
    return h(
      Section,
      { id: "interests", title: ["Currently", "exploring."] },
      h("ul", { className: "interests", "data-reveal": "up" }, interests.map((x) => h("li", { key: x }, x)))
    );
  }

  function Capabilities() {
    return h(
      Section,
      { id: "capabilities", title: ["What I", "work with."] },
      h(
        "dl",
        { className: "capabilities" },
        capabilities.map(([k, v], i) =>
          h("div", { key: k, "data-reveal": "up", style: { "--d": (i % 2) * 120 + "ms" } }, h("dt", null, k), h("dd", null, v))
        )
      ),
      h("p", { className: "stack", "data-reveal": "up" }, h("span", null, "Tools I use day to day: "), stack, ".")
    );
  }

  function Contact() {
    return h(
      Section,
      { id: "contact", title: ["Bring a problem,", "a dataset and a metric."] },
      h(
        "p",
        { className: "contact-copy", "data-reveal": "up" },
        "The best AI projects start with constraints, a baseline and a way to tell whether the model helped. Message me on LinkedIn or see the code on GitHub."
      ),
      h(
        "ul",
        { className: "links", "data-reveal": "up", style: { "--d": "120ms" } },
        profile.links.map(([label, href]) =>
          h("li", { key: label }, h("a", { href, target: "_blank", rel: "noreferrer" }, label))
        )
      )
    );
  }

  // Gives every split word its order (--i) and line (--l), then adds .in as elements enter the viewport.
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
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        }),
        { rootMargin: "0px 0px -8% 0px" }
      );
      nodes.forEach((n) => io.observe(n));
      return () => io.disconnect();
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
      function onClick(e) {
        const a = e.target.closest && e.target.closest('a[href^="#"]');
        if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
        const id = a.getAttribute("href").slice(1);
        const el = id ? document.getElementById(id) : null;
        if (!el) return;
        e.preventDefault();
        history.pushState(null, "", "#" + id);
        if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
        el.focus({ preventScroll: true });
        const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
        scrollToY(id === "top" ? 0 : el.getBoundingClientRect().top + window.scrollY - offset);
      }

      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("click", onClick);
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("scroll", onScroll);
        document.removeEventListener("click", onClick);
      };
    }, []);
  }

  function App() {
    useReveals();
    useSmoothScroll();
    return h(
      React.Fragment,
      null,
      h(TopBar),
      h("main", null, h(Hero), h(Experience), h(Certifications), h(Publications), h(Work), h(Interests), h(Capabilities), h(Contact)),
      h("footer", { className: "footer" }, h("span", null, "© 2026 " + profile.name), h("a", { href: "#top" }, "Back to top"))
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
