/* =========================================================
   PAULINE — PORTFOLIO CONTENT (bilingual)
   這是你唯一需要編輯的內容檔。
   每段文字都是 { en: "...", zh: "..." } 成對存放。
   [方括號] 內是佔位內容，上線前要替換。
   小技巧：文字要保留引號；文字裡要用引號請寫 \"
   ========================================================= */

const SITE = {
  name: "Pauline Tseng",
  email: "paulinetseng1225@gmail.com",
  linkedin: "https://linkedin.com/in/paulinetseng1225",
  resumeUrl: "#", // 之後放履歷 PDF 連結

  heroLine: {
    en: "UX/UI designer shaping retail experiences used by 16 million people — now based in Brisbane.",
    zh: "打造 1,600 萬人使用的零售體驗的 UX/UI 設計師——現居布里斯本。"
  },
  heroSub: {
    en: "2+ years designing at FamilyMart, one of Taiwan's largest retail chains. I design end-to-end, then work shoulder-to-shoulder with engineers — because I code too.",
    zh: "在台灣最大零售連鎖之一的全家便利商店累積 2 年以上全職設計經驗。我負責端到端設計，也能與工程師並肩合作——因為我自己也會寫程式。"
  },
  status: {
    en: "Open to UX Designer roles in Brisbane · Master of Interaction Design @ UQ",
    zh: "開放布里斯本 UX Designer 職缺機會 · 昆士蘭大學互動設計碩士"
  },

  aboutTeaser: {
    en: "I spent two years inside one of Taiwan's biggest retail companies, designing for an app with 16 million registered users — and building the design system that keeps its products consistent. I'm completing a Master of Interaction Design at the University of Queensland, and I bring front-end skills (HTML, CSS, Python) that make my designs easier to build.",
    zh: "我在台灣最大的零售企業之一工作了兩年，為擁有 1,600 萬註冊用戶的 App 做設計，並建立了讓產品保持一致的設計系統。目前在昆士蘭大學攻讀互動設計碩士，並具備前端能力（HTML、CSS、Python），讓我的設計更容易被實作。"
  },

  aboutPage: {
    heading: { en: "About me", zh: "關於我" },
    paragraphs: [
      {
        en: "I'm Pauline — a UX/UI designer from Taiwan, now based in Brisbane. I spent 2+ years at FamilyMart Co., Ltd., one of Taiwan's largest retail chains, working across the full UX process: research, information architecture, wireframing, prototyping, usability testing and design systems.",
        zh: "我是 Pauline，來自台灣的 UX/UI 設計師，現居布里斯本。我在台灣最大零售連鎖之一的全家便利商店任職 2 年以上，工作橫跨完整的 UX 流程：研究、資訊架構、線框圖、原型、易用性測試與設計系統。"
      },
      {
        en: "My work there ranged from the flagship app redesign (16 million registered users) to building the company's design guideline from zero, used by internal teams and external vendors.",
        zh: "我的工作範圍從旗艦 App 重新設計（1,600 萬註冊用戶）到從零打造公司的設計規範，供內部團隊與外包廠商使用。"
      },
      {
        en: "What makes me a little different: I code. I've built a full-stack SaaS product on my own (TableTap), and I use HTML, CSS and Python to collaborate closely with engineers — which means fewer handoff surprises and more feasible designs.",
        zh: "我和多數設計師不太一樣的地方：我會寫程式。我獨立開發過一個全端 SaaS 產品（TableTap），並用 HTML、CSS 和 Python 與工程師緊密協作——這代表更少的交付意外、更可行的設計。"
      },
      {
        en: "I'm currently completing a Master of Interaction Design at the University of Queensland (graduating Nov 2026), and I hold full study-period work rights with eligibility for a Graduate Visa (Subclass 485) on graduation.",
        zh: "我目前在昆士蘭大學攻讀互動設計碩士（2026 年 11 月畢業），在學期間具備工作許可，畢業後符合申請畢業生簽證（Subclass 485）資格。"
      }
    ]
  },

  footerNote: {
    en: "Designed and hand-coded by Pauline Tseng — no site builder used.",
    zh: "本網站由 Pauline Tseng 親自設計並手寫程式碼——未使用任何建站工具。"
  },

  /* 這裡的順序 = 首頁卡片的順序 */
  workOrder: ["famiapp", "design-system", "health-app", "tabletap"]
};

const CASE_STUDIES = {

  /* ================= 1. 全家 APP 重構 ================= */
  "famiapp": {
    title: { en: "FamilyMart App Reconstruction", zh: "全家便利商店 App 重構" },
    cardOutcome: {
      en: "Unified 9 separate commerce flows into one shopping experience for 16 million users",
      zh: "將 9 條獨立購物流程整合為一，服務 1,600 萬用戶"
    },
    cardImage: "",       // 首頁卡片封面圖（A 階段再放）
    cardImageAlt: { en: "FamilyMart app redesign cover", zh: "全家 App 重構封面圖" },
    cardTags: [
      { en: "Mobile app", zh: "行動 App" },
      { en: "16M users", zh: "1,600 萬用戶" },
      { en: "End-to-end UX", zh: "端到端 UX" }
    ],
    meta: {
      role: {
        en: "UX/UI Designer — research synthesis, IA, wireframes, high-fidelity prototypes",
        zh: "UX/UI 設計師——研究整合、資訊架構、線框圖、高保真原型"
      },
      timeline: { en: "[YYYY – YYYY]", zh: "[YYYY – YYYY]" },
      team: { en: "In-house product team + external UX consultancy", zh: "內部產品團隊 + 外部 UX 顧問公司" },
      scope: { en: "Flagship mobile app, 16 million registered users", zh: "旗艦行動 App，1,600 萬註冊用戶" }
    },
    summary: {
      en: "FamilyMart's flagship app had grown into 9 independent commerce flows, each with its own logic. I contributed to the end-to-end redesign that unified them into a single shopping and checkout experience.",
      zh: "全家的旗艦 App 逐漸長成 9 條各自獨立的購物流程，每條都有自己的邏輯。我參與了端到端重新設計，將它們整合為單一的購物與結帳體驗。"
    },
    figmaEmbed: "", // 之後貼 Figma prototype 分享連結
    sections: [
      {
        id: "impact",
        nav: { en: "Impact", zh: "成果" },
        heading: { en: "Impact", zh: "成果" },
        blocks: [
          { type: "stats", items: [
            { number: "9 → 1", label: { en: "commerce flows unified into one checkout", zh: "條購物流程整合為單一結帳體驗" } },
            { number: "16M", label: { en: "registered users served", zh: "註冊用戶" } },
            { number: "[X]", label: { en: "design iteration rounds validated by testing", zh: "輪經測試驗證的設計迭代" } }
          ]},
          { type: "p", text: { en: "[One short paragraph on what changed for users and the business — we will write this together in the content phase.]", zh: "[待補：一小段說明這次改版為用戶和業務帶來什麼改變——內容階段一起撰寫。]" } }
        ]
      },
      {
        id: "problem",
        nav: { en: "The problem", zh: "問題" },
        heading: { en: "The problem", zh: "問題" },
        blocks: [
          { type: "p", text: { en: "Nine independent commerce flows meant nine different mental models. Users had to re-learn navigation, cart and checkout behaviour depending on where they started — hurting discoverability and trust.", zh: "9 條獨立的購物流程代表 9 套不同的心智模型。用戶依進入點不同，要重新學習導覽、購物車和結帳的行為——傷害了可發現性與信任感。" } },
          { type: "p", text: { en: "[Add 1–2 concrete examples of the pain points here.]", zh: "[待補：1–2 個具體的痛點例子。]" } }
        ]
      },
      {
        id: "research",
        nav: { en: "Research", zh: "研究" },
        heading: { en: "Research & findings", zh: "研究與發現" },
        blocks: [
          { type: "list", items: [
            { en: "Conducted [X] internal stakeholder interviews and [X] store manager interviews to surface pain points across IA, checkout and product discoverability", zh: "進行 [X] 場內部利害關係人訪談與 [X] 場店長訪談，找出資訊架構、結帳流程與商品可發現性的痛點" },
            { en: "Observed [X] focus groups and one-on-one sessions run by an external UX consultancy, and synthesised findings into design direction", zh: "旁聽外部 UX 顧問公司執行的 [X] 場焦點團體與一對一訪談，並將發現整合為設計方向" }
          ]},
          { type: "img", src: "", alt: { en: "[Photo of research synthesis / affinity mapping]", zh: "[研究整合／親和圖照片]" }, caption: { en: "[Research artefact — to be added]", zh: "[研究過程紀錄——待補]" } }
        ]
      },
      {
        id: "decisions",
        nav: { en: "Design decisions", zh: "設計決策" },
        heading: { en: "Design decisions and trade-offs", zh: "設計決策與取捨" },
        blocks: [
          { type: "p", text: { en: "[The most important section. 2–3 decisions where there was a real trade-off, and why you chose what you chose.]", zh: "[最重要的段落。2–3 個真正有取捨的決策，以及你為什麼這樣選。]" } }
        ]
      },
      {
        id: "design",
        nav: { en: "Final design", zh: "最終設計" },
        heading: { en: "Final design", zh: "最終設計" },
        blocks: [
          { type: "p", text: { en: "Wireframes, user flows and high-fidelity prototypes across [X] iteration rounds, validated through expert heuristic evaluation and usability testing.", zh: "歷經 [X] 輪迭代的線框圖、使用者流程與高保真原型，透過專家啟發式評估與易用性測試驗證。" } },
          { type: "figma" },
          { type: "img", src: "", alt: { en: "[Key screens of the unified checkout]", zh: "[整合後結帳流程的關鍵畫面]" }, caption: { en: "[Final screens — to be added]", zh: "[最終畫面——待補]" } }
        ]
      },
      {
        id: "learnings",
        nav: { en: "Learnings", zh: "學到什麼" },
        heading: { en: "What I learned", zh: "我學到什麼" },
        blocks: [
          { type: "p", text: { en: "[Honest reflection: what you'd do differently, what this project taught you.]", zh: "[誠實反思：下次會怎麼做、這個專案教會你什麼。]" } }
        ]
      }
    ]
  },

  /* ================= 2. 設計系統 ================= */
  "design-system": {
    title: { en: "FamilyMart Design Guideline", zh: "全家 Design Guideline 設計規範" },
    cardOutcome: {
      en: "Built the company's design system from zero — adopted by internal teams and external vendors",
      zh: "從 0 打造公司設計系統——供內部團隊與外包廠商採用"
    },
    cardImage: "",
    cardImageAlt: { en: "FamilyMart design system cover", zh: "全家設計系統封面圖" },
    cardTags: [
      { en: "Design system", zh: "設計系統" },
      { en: "0 → 1", zh: "0 → 1" },
      { en: "Governance", zh: "規範治理" }
    ],
    meta: {
      role: { en: "UX/UI Designer — component library, documentation, rollout", zh: "UX/UI 設計師——元件庫、文件、推行" },
      timeline: { en: "[YYYY – YYYY]", zh: "[YYYY – YYYY]" },
      team: { en: "[Solo / with N designers — confirm]", zh: "[獨立／與 N 位設計師——待確認]" },
      scope: { en: "Web + mobile products, internal teams and outsourced vendors", zh: "網頁與行動產品，內部團隊與外包廠商" }
    },
    summary: {
      en: "FamilyMart had no shared design language. I built and maintained the company's first design guideline — a component library and visual language that kept UI consistent across teams, products, and external vendors.",
      zh: "全家原本沒有共用的設計語言。我建立並維護了公司第一份設計規範——一套元件庫與視覺語言，讓 UI 在不同團隊、產品與外包廠商之間保持一致。"
    },
    figmaEmbed: "",
    sections: [
      { id: "impact", nav: { en: "Impact", zh: "成果" }, heading: { en: "Impact", zh: "成果" },
        blocks: [
          { type: "stats", items: [
            { number: "0 → 1", label: { en: "first company-wide design guideline", zh: "公司第一份全域設計規範" } },
            { number: "[X]", label: { en: "product teams using the system", zh: "個產品團隊採用" } },
            { number: "Int + Ext", label: { en: "adopted by internal teams and outsourced vendors", zh: "內部團隊與外包廠商共同採用" } }
          ]}
        ]
      },
      { id: "problem", nav: { en: "The problem", zh: "問題" }, heading: { en: "The problem", zh: "問題" },
        blocks: [ { type: "p", text: { en: "[Why inconsistency was hurting: duplicated work, vendor output drifting from brand, slow reviews — we'll write this together.]", zh: "[待補：不一致造成的傷害——重工、外包產出偏離品牌、審查變慢等。]" } } ]
      },
      { id: "process", nav: { en: "Process", zh: "建置過程" }, heading: { en: "Building the system", zh: "建置設計系統" },
        blocks: [ { type: "p", text: { en: "[Audit → tokens/foundations → components → documentation → rollout & training. Add your actual steps.]", zh: "[待補：盤點 → 基礎規範 → 元件 → 文件 → 推行與訓練。填入你實際的步驟。]" } } ]
      },
      { id: "adoption", nav: { en: "Adoption", zh: "推行採用" }, heading: { en: "Driving adoption", zh: "推動採用" },
        blocks: [ { type: "p", text: { en: "[How you got teams and vendors to actually use it — including the Figma workshops you ran for PMs and engineers.]", zh: "[待補：你如何讓團隊與外包真正使用它——包含你為 PM 與工程師舉辦的 Figma 工作坊。]" } } ]
      },
      { id: "learnings", nav: { en: "Learnings", zh: "學到什麼" }, heading: { en: "What I learned", zh: "我學到什麼" },
        blocks: [ { type: "p", text: { en: "[Reflection.]", zh: "[待補：反思。]" } } ]
      }
    ]
  },

  /* ================= 3. 健康飲食 APP ================= */
  "health-app": {
    title: { en: "FamilyMart Health App", zh: "全家健康飲食 App" },
    cardOutcome: {
      en: "Designed a healthy-eating companion app from concept to high-fidelity prototype",
      zh: "從概念到高保真原型，完整設計一款健康飲食 App"
    },
    cardImage: "",
    cardImageAlt: { en: "FamilyMart Health App cover", zh: "全家健康飲食 App 封面圖" },
    cardTags: [
      { en: "Mobile app", zh: "行動 App" },
      { en: "Concept → hi-fi", zh: "概念 → 高保真" },
      { en: "Retail health", zh: "零售健康" }
    ],
    meta: {
      role: { en: "UX/UI Designer — concept through high-fidelity prototype", zh: "UX/UI 設計師——從概念到高保真原型" },
      timeline: { en: "[YYYY]", zh: "[YYYY]" },
      team: { en: "[Confirm team composition]", zh: "[待確認團隊組成]" },
      scope: {
        en: "New product exploration. Design delivered before my departure — post-launch metrics not available to me.",
        zh: "新產品探索。設計交付後我離開公司——無法取得上線後數據。"
      }
    },
    summary: {
      en: "A healthy-eating app supporting FamilyMart's move into retail health experiences. I designed it from concept through to high-fidelity prototype; I left the company after design delivery, so this case study focuses on the design process and validated learnings rather than launch metrics.",
      zh: "一款支持全家進軍零售健康體驗的健康飲食 App。我從概念一路設計到高保真原型；設計交付後我便離開公司，因此本篇聚焦於設計過程與驗證所得，而非上線數據。"
    },
    figmaEmbed: "",
    sections: [
      { id: "impact", nav: { en: "Outcome", zh: "成果" }, heading: { en: "Outcome", zh: "成果" },
        blocks: [ { type: "p", text: { en: "[Validated learnings, usability findings, and what was delivered. Honest framing: design handed over at hi-fi prototype stage.]", zh: "[待補：驗證所得、易用性發現、交付內容。誠實框架：設計於高保真原型階段交付。]" } } ]
      },
      { id: "problem", nav: { en: "The problem", zh: "問題" }, heading: { en: "The problem", zh: "問題" },
        blocks: [ { type: "p", text: { en: "[The user and business problem.]", zh: "[待補：用戶與業務問題。]" } } ]
      },
      { id: "process", nav: { en: "Process", zh: "設計過程" }, heading: { en: "Design process", zh: "設計過程" },
        blocks: [ { type: "p", text: { en: "[Research → flows → wireframes → hi-fi → testing.]", zh: "[待補：研究 → 流程 → 線框圖 → 高保真 → 測試。]" } } ]
      },
      { id: "design", nav: { en: "Final design", zh: "最終設計" }, heading: { en: "Final design", zh: "最終設計" },
        blocks: [ { type: "figma" }, { type: "img", src: "", alt: { en: "[Key screens]", zh: "[關鍵畫面]" }, caption: { en: "[Final screens — to be added]", zh: "[最終畫面——待補]" } } ]
      },
      { id: "learnings", nav: { en: "Learnings", zh: "學到什麼" }, heading: { en: "What I learned", zh: "我學到什麼" },
        blocks: [ { type: "p", text: { en: "[Reflection.]", zh: "[待補：反思。]" } } ]
      }
    ]
  },

  /* ================= 4. TABLETAP ================= */
  "tabletap": {
    title: { en: "TableTap — Restaurant Order Management SaaS", zh: "TableTap——餐廳點餐管理 SaaS" },
    cardOutcome: {
      en: "Designed and built a full-stack SaaS product solo — from UX research to database",
      zh: "獨立設計並開發全端 SaaS 產品——從 UX 研究到資料庫"
    },
    cardImage: "",
    cardImageAlt: { en: "TableTap cover", zh: "TableTap 封面圖" },
    cardTags: [
      { en: "Personal project", zh: "個人專案" },
      { en: "Full-stack", zh: "全端開發" },
      { en: "Live product", zh: "可實際操作" }
    ],
    meta: {
      role: { en: "Everything — UX research, UI design, front-end, back-end, database", zh: "全部——UX 研究、UI 設計、前端、後端、資料庫" },
      timeline: { en: "2024 – 2025", zh: "2024 – 2025" },
      team: { en: "Solo", zh: "獨立完成" },
      scope: { en: "Working SaaS product, designed in Figma and built end-to-end", zh: "可運作的 SaaS 產品，以 Figma 設計並端到端開發" }
    },
    summary: {
      en: "My proof that I can carry a product from question to working software, alone. I researched, designed, and then built TableTap — front-end, back-end and database — which is also why my design work tends to survive contact with engineering.",
      zh: "這是我能獨自把產品從問題帶到可運作軟體的證明。我研究、設計、然後親手開發了 TableTap——前端、後端與資料庫——這也是為什麼我的設計在工程實作時總是站得住腳。"
    },
    figmaEmbed: "",
    liveDemo: "#", // 之後貼 live demo 網址
    github: "#",   // 之後貼 GitHub repo 網址
    sections: [
      { id: "impact", nav: { en: "Outcome", zh: "成果" }, heading: { en: "Outcome", zh: "成果" },
        blocks: [
          { type: "stats", items: [
            { number: "1", label: { en: "person — design and engineering", zh: "人完成設計與工程" } },
            { number: "Figma → prod", label: { en: "designed first, then built for real", zh: "先設計、再真正開發上線" } },
            { number: "Live", label: { en: "working product you can try", zh: "可實際試用的產品" } }
          ]},
          { type: "p", text: { en: "[Short paragraph + live demo link.]", zh: "[待補：一小段說明 + live demo 連結。]" } }
        ]
      },
      { id: "problem", nav: { en: "The problem", zh: "問題" }, heading: { en: "The problem", zh: "問題" },
        blocks: [ { type: "p", text: { en: "[Why restaurant order management, and for whom.]", zh: "[待補：為什麼做餐廳點餐管理、為誰而做。]" } } ]
      },
      { id: "design", nav: { en: "Design", zh: "先設計" }, heading: { en: "Design first", zh: "先設計" },
        blocks: [ { type: "p", text: { en: "User flows and high-fidelity interfaces designed in Figma before writing a line of code.", zh: "在寫下任何一行程式碼之前，先在 Figma 完成使用者流程與高保真介面設計。" } }, { type: "figma" } ]
      },
      { id: "build", nav: { en: "Build", zh: "再開發" }, heading: { en: "Then build", zh: "再開發" },
        blocks: [ { type: "p", text: { en: "[One short section: stack overview + a simple architecture diagram image. The point is not the code — it's that the design shipped.]", zh: "[待補：一小段技術架構概述 + 簡單架構圖。重點不是程式碼，而是設計真的被做出來了。]" } } ]
      },
      { id: "learnings", nav: { en: "Learnings", zh: "學到什麼" }, heading: { en: "What I learned", zh: "我學到什麼" },
        blocks: [ { type: "p", text: { en: "[Reflection: what building it yourself taught you about designing for feasibility.]", zh: "[待補：親手開發教會你哪些「為可行性而設計」的事。]" } } ]
      }
    ]
  }
};
