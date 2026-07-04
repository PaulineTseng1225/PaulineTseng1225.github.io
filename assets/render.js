/* =========================================================
   RENDER.JS — builds the pages from content.js
   You should not need to edit this file.
   ========================================================= */

(function () {

  /* ---------- data (with live-preview override) ---------- */
  let DS = SITE, DC = CASE_STUDIES;
  const qs = new URLSearchParams(location.search);
  const IS_PREVIEW = qs.get("preview") === "1";
  if (IS_PREVIEW) {
    try {
      const o = JSON.parse(localStorage.getItem("pt-preview") || "null");
      if (o && o.SITE && o.CASE_STUDIES) { DS = o.SITE; DC = o.CASE_STUDIES; }
    } catch (e) {}
  }

  /* keep ?preview=1 on internal links so navigation stays in preview mode */
  function urlP(href) {
    if (!IS_PREVIEW || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) return href;
    return href + (href.includes("?") ? "&" : "?") + "preview=1";
  }

  /* ---------- language ---------- */
  let LANG = "en";
  try { LANG = localStorage.getItem("pt-lang") || "en"; } catch (e) {}
  if (LANG !== "en" && LANG !== "zh") LANG = "en";
  document.documentElement.lang = (LANG === "zh") ? "zh-Hant" : "en-AU";

  function t(v) {
    if (v && typeof v === "object" && ("en" in v)) return v[LANG] || v.en;
    return v;
  }

  /* ---------- inline text styling ----------
     **bold**  __underline__  ==highlight==  %%green text%%          */
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function fmt(s) {
    if (s == null) return "";
    let h = esc(s);
    h = h.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    h = h.replace(/==([^=]+)==/g, "<mark>$1</mark>");
    h = h.replace(/__([^_]+)__/g, "<u>$1</u>");
    h = h.replace(/%%([^%]+)%%/g, '<span class="c-accent">$1</span>');
    return h;
  }

  const STRINGS = {
    en: {
      skip: "Skip to content",
      navWork: "work", navAbout: "about", navContact: "contact",
      langToggle: "中文",
      selectedWork: "selected work", caseStudies: "Case studies",
      read: "Read case study →",
      aboutEyebrow: "about", aboutTeaserHeading: "A designer who codes",
      moreAbout: "More about me →",
      contactEyebrow: "contact", contactHeading: "Let's talk.",
      contactBody: "I'm looking for UX Designer roles in Brisbane. If my work looks like a fit for your team, I'd love to hear from you.",
      resume: "Resume (PDF)",
      caseEyebrow: "case study", onThisPage: "On this page", tocLabel: "on this page",
      metaRole: "my role", metaTimeline: "timeline", metaTeam: "team", metaScope: "scope",
      nextProject: "next project",
      figmaPlaceholder: "Interactive Figma prototype will be embedded here — paste the share link in the editor",
      imgFallback: "Image to be added",
      coverPlaceholder: "[ cover image ]",
      tryLive: "Try the live product →", github: "View on GitHub →",
      figmaTitle: " — interactive Figma prototype",
      videoFallback: "Video to be added"
    },
    zh: {
      skip: "跳至主要內容",
      navWork: "作品", navAbout: "關於", navContact: "聯絡",
      langToggle: "EN",
      selectedWork: "精選作品", caseStudies: "Case Studies",
      read: "閱讀 case study →",
      aboutEyebrow: "關於", aboutTeaserHeading: "會寫程式的設計師",
      moreAbout: "更多關於我 →",
      contactEyebrow: "聯絡", contactHeading: "聊聊吧。",
      contactBody: "我正在尋找布里斯本的 UX Designer 職缺。如果你覺得我的作品適合你的團隊，歡迎與我聯絡。",
      resume: "履歷（PDF）",
      caseEyebrow: "case study", onThisPage: "本頁段落", tocLabel: "本頁段落",
      metaRole: "我的角色", metaTimeline: "時程", metaTeam: "團隊", metaScope: "範疇",
      nextProject: "下一個專案",
      figmaPlaceholder: "互動 Figma 原型將嵌入此處——在編輯器裡貼上分享連結即可",
      imgFallback: "圖片待補",
      coverPlaceholder: "[ 封面圖 ]",
      tryLive: "試用實際產品 →", github: "查看 GitHub →",
      figmaTitle: "——互動 Figma 原型",
      videoFallback: "影片待補"
    }
  };
  const S = STRINGS[LANG];

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (k === "text") node.textContent = v;
      else if (k === "html") node.innerHTML = v;
      else node.setAttribute(k, v);
    }
    (children || []).forEach(c => node.appendChild(c));
    return node;
  }
  /* paragraph with inline styling support */
  function pF(cls, v) { return el("p", { class: cls || null, html: fmt(t(v)) }); }

  /* ---------- shared: header + footer ---------- */
  function renderHeader(active) {
    const header = el("header", { class: "site-header" });
    header.appendChild(el("a", { href: urlP("index.html"), class: "brand", html: "<strong>PT</strong><span class='brand-name'> — " + esc(DS.name) + "</span>" }));
    const nav = el("nav", { class: "site-nav", "aria-label": "Main navigation" });
    const links = [["index.html", S.navWork, "work"], ["about.html", S.navAbout, "about"], ["#contact", S.navContact, "contact"]];
    links.forEach(([href, label, key]) => {
      const a = el("a", { href: urlP(href), text: label });
      if (active === key) a.setAttribute("aria-current", "page");
      nav.appendChild(a);
    });
    const toggle = el("button", { class: "lang-toggle", type: "button", text: S.langToggle, "aria-label": LANG === "en" ? "切換為繁體中文" : "Switch to English" });
    toggle.addEventListener("click", () => {
      try { localStorage.setItem("pt-lang", LANG === "en" ? "zh" : "en"); } catch (e) {}
      location.reload();
    });
    nav.appendChild(toggle);
    header.appendChild(nav);
    document.body.prepend(header);
    document.body.prepend(el("a", { href: "#main", class: "skip-link", text: S.skip }));
  }

  function renderFooter() {
    const f = el("footer", { class: "site-footer", id: "contact" });
    const inner = el("div", { class: "footer-inner" });
    inner.appendChild(el("p", { class: "eyebrow", text: S.contactEyebrow }));
    inner.appendChild(el("h2", { text: S.contactHeading }));
    inner.appendChild(el("p", { text: S.contactBody }));
    const links = el("div", { class: "footer-links" });
    links.appendChild(el("a", { href: "mailto:" + DS.email, text: DS.email }));
    links.appendChild(el("a", { href: DS.linkedin, target: "_blank", rel: "noopener", text: "LinkedIn" }));
    links.appendChild(el("a", { href: DS.resumeUrl, text: S.resume }));
    inner.appendChild(links);
    inner.appendChild(el("p", { class: "footer-note", text: t(DS.footerNote) }));
    f.appendChild(inner);
    document.body.appendChild(f);
  }

  /* ---------- home ---------- */
  function renderHome() {
    renderHeader("work");
    const main = el("main", { id: "main" });

    const hero = el("section", { class: "hero" });
    const frame = el("div", { class: "spec-frame" });
    frame.appendChild(el("h1", { text: DS.name }));
    hero.appendChild(frame);
    hero.appendChild(pF("hero-line", DS.heroLine));
    hero.appendChild(pF("hero-sub", DS.heroSub));
    hero.appendChild(el("p", { class: "status", text: t(DS.status) }));
    main.appendChild(hero);

    const work = el("section", { class: "work", "aria-label": "Selected work" });
    work.appendChild(el("p", { class: "eyebrow", text: S.selectedWork }));
    work.appendChild(el("h2", { text: S.caseStudies }));
    const list = el("div", { class: "card-list" });
    DS.workOrder.forEach(id => {
      const cs = DC[id];
      if (!cs) return;
      const card = el("a", { class: "card", href: urlP("work.html?id=" + id) });
      const body = el("div", { class: "card-body" });
      body.appendChild(el("div", { class: "card-outcome", html: fmt(t(cs.cardOutcome)) }));
      body.appendChild(el("div", { class: "card-title", text: t(cs.title) }));
      const tags = el("div", { class: "tags" });
      (cs.cardTags || []).forEach(tag => tags.appendChild(el("span", { text: t(tag) })));
      body.appendChild(tags);
      body.appendChild(el("div", { class: "read", text: S.read }));
      card.appendChild(body);
      const media = el("div", { class: "card-media" });
      if (cs.cardImage) {
        media.appendChild(el("img", { src: cs.cardImage, alt: t(cs.cardImageAlt) || "" }));
      } else {
        media.appendChild(el("div", { class: "media-placeholder", text: S.coverPlaceholder }));
      }
      card.appendChild(media);
      list.appendChild(card);
    });
    work.appendChild(list);
    main.appendChild(work);

    const teaser = el("section", { class: "about-teaser" });
    teaser.appendChild(el("p", { class: "eyebrow", text: S.aboutEyebrow }));
    teaser.appendChild(el("h2", { text: S.aboutTeaserHeading }));
    teaser.appendChild(pF(null, DS.aboutTeaser));
    teaser.appendChild(el("p", {}, [el("a", { href: urlP("about.html"), text: S.moreAbout })]));
    main.appendChild(teaser);

    document.body.appendChild(main);
    renderFooter();
  }

  /* ---------- about ---------- */
  function renderAbout() {
    renderHeader("about");
    const main = el("main", { id: "main" });
    const page = el("section", { class: "about-page" });
    page.appendChild(el("p", { class: "eyebrow", text: S.aboutEyebrow }));
    page.appendChild(el("h1", { text: t(DS.aboutPage.heading) }));
    DS.aboutPage.paragraphs.forEach(p => page.appendChild(pF(null, p)));
    main.appendChild(page);
    document.body.appendChild(main);
    renderFooter();
  }

  /* ---------- case study blocks ---------- */
  function blockNode(block, cs) {
    switch (block.type) {
      case "p": return pF(null, block.text);
      case "list": {
        const ul = el("ul");
        block.items.forEach(i => ul.appendChild(el("li", { html: fmt(t(i)) })));
        return ul;
      }
      case "stats": {
        const wrap = el("div", { class: "stats" });
        block.items.forEach(s => {
          const stat = el("div", { class: "stat" });
          stat.appendChild(el("div", { class: "n", text: s.number }));
          stat.appendChild(el("div", { class: "l", html: fmt(t(s.label)) }));
          wrap.appendChild(stat);
        });
        return wrap;
      }
      case "img": {
        const fig = el("figure");
        if (block.src) {
          fig.appendChild(el("img", { src: block.src, alt: t(block.alt) || "", loading: "lazy" }));
        } else {
          fig.appendChild(el("div", { class: "img-placeholder", text: t(block.alt) || S.imgFallback }));
        }
        const cap = t(block.caption);
        if (cap) fig.appendChild(el("figcaption", { html: fmt(cap) }));
        return fig;
      }
      case "video": {
        const fig = el("figure");
        if (block.src) {
          const v = el("video", { controls: "", loop: "", muted: "", playsinline: "", preload: "metadata" });
          if (block.autoplay) { v.setAttribute("autoplay", ""); }
          v.appendChild(el("source", { src: block.src }));
          fig.appendChild(v);
        } else {
          fig.appendChild(el("div", { class: "img-placeholder", text: S.videoFallback }));
        }
        const cap = t(block.caption);
        if (cap) fig.appendChild(el("figcaption", { html: fmt(cap) }));
        return fig;
      }
      case "link": {
        const wrap = el("div", { class: "demo-links" });
        wrap.appendChild(el("a", { href: block.url || "#", target: "_blank", rel: "noopener", text: (t(block.label) || "Link") + " →" }));
        return wrap;
      }
      case "figma": {
        const wrap = el("div", { class: "figma-embed" });
        const url = block.url || cs.figmaEmbed;   /* per-block link; falls back to project-level one */
        if (url) {
          wrap.appendChild(el("iframe", {
            src: "https://www.figma.com/embed?embed_host=share&url=" + encodeURIComponent(url),
            allowfullscreen: "true",
            title: t(cs.title) + S.figmaTitle,
            loading: "lazy"
          }));
        } else {
          wrap.appendChild(el("div", { class: "figma-placeholder", text: S.figmaPlaceholder }));
        }
        return wrap;
      }
      default: return el("div");
    }
  }

  function renderCase(caseId) {
    const cs = DC[caseId];
    if (!cs) { document.body.textContent = "Case study not found."; return; }
    document.title = t(cs.title) + " — " + DS.name;
    renderHeader("work");

    const wrap = el("div", { class: "case-wrap" });

    /* desktop TOC */
    const toc = el("nav", { class: "case-toc", "aria-label": S.onThisPage });
    toc.appendChild(el("div", { class: "toc-label", text: S.tocLabel }));
    const ol = el("ol");
    cs.sections.forEach(s => ol.appendChild(el("li", {}, [el("a", { href: "#" + s.id, text: t(s.nav), "data-toc": s.id })])));
    toc.appendChild(ol);
    wrap.appendChild(toc);

    /* main column */
    const mainCol = el("main", { class: "case-main", id: "main" });
    mainCol.appendChild(el("p", { class: "eyebrow", text: S.caseEyebrow }));
    mainCol.appendChild(el("h1", { text: t(cs.title) }));

    /* tags — same set as the home card, for consistency */
    if (cs.cardTags && cs.cardTags.length) {
      const tags = el("div", { class: "tags case-tags" });
      cs.cardTags.forEach(tag => { const v = t(tag); if (v) tags.appendChild(el("span", { text: v })); });
      mainCol.appendChild(tags);
    }

    mainCol.appendChild(pF("case-summary", cs.summary));

    /* mobile TOC (sticky under the header) */
    const mtoc = el("details", { class: "toc-mobile" });
    mtoc.appendChild(el("summary", { text: S.onThisPage }));
    const mol = el("ol");
    cs.sections.forEach(s => {
      const a = el("a", { href: "#" + s.id, text: t(s.nav) });
      a.addEventListener("click", () => { mtoc.removeAttribute("open"); });
      mol.appendChild(el("li", {}, [a]));
    });
    mtoc.appendChild(mol);
    mainCol.appendChild(mtoc);

    /* meta card */
    const meta = el("div", { class: "meta-card" });
    const metaMap = [["role", S.metaRole], ["timeline", S.metaTimeline], ["team", S.metaTeam], ["scope", S.metaScope]];
    metaMap.forEach(([key, label]) => {
      if (!cs.meta[key]) return;
      const item = el("div", { class: "meta-item" });
      item.appendChild(el("div", { class: "k", text: label }));
      item.appendChild(el("div", { class: "v", html: fmt(t(cs.meta[key])) }));
      meta.appendChild(item);
    });
    mainCol.appendChild(meta);

    /* project-level demo links */
    if (cs.liveDemo || cs.github) {
      const links = el("div", { class: "demo-links" });
      if (cs.liveDemo) links.appendChild(el("a", { href: cs.liveDemo, target: "_blank", rel: "noopener", text: S.tryLive }));
      if (cs.github) links.appendChild(el("a", { href: cs.github, target: "_blank", rel: "noopener", text: S.github }));
      mainCol.appendChild(links);
    }

    /* sections */
    cs.sections.forEach(s => {
      const section = el("section", { id: s.id, "aria-labelledby": s.id + "-h" });
      section.appendChild(el("h2", { id: s.id + "-h", text: t(s.heading) }));
      s.blocks.forEach(b => section.appendChild(blockNode(b, cs)));
      mainCol.appendChild(section);
    });

    /* next project */
    const order = DS.workOrder;
    const idx = order.indexOf(caseId);
    const nextId = order[(idx + 1) % order.length];
    const next = DC[nextId];
    const np = el("div", { class: "next-project" });
    np.appendChild(el("div", { class: "k", text: S.nextProject }));
    np.appendChild(el("a", { href: urlP("work.html?id=" + nextId), text: t(next.title) + " →" }));
    mainCol.appendChild(np);

    wrap.appendChild(mainCol);
    document.body.appendChild(wrap);
    renderFooter();

    /* scroll-spy for the TOC */
    if ("IntersectionObserver" in window) {
      const links = Array.from(document.querySelectorAll(".case-toc a[data-toc]"));
      const byId = {};
      links.forEach(a => byId[a.dataset.toc] = a);
      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            links.forEach(a => a.classList.remove("active"));
            const a = byId[e.target.id];
            if (a) a.classList.add("active");
          }
        });
      }, { rootMargin: "-20% 0px -70% 0px" });
      cs.sections.forEach(s => {
        const node = document.getElementById(s.id);
        if (node) observer.observe(node);
      });
    }
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    if (page === "home") renderHome();
    else if (page === "about") renderAbout();
    else if (page === "case") renderCase(document.body.dataset.case || qs.get("id"));
  });
})();
