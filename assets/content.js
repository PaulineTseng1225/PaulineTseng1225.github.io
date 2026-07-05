/* =========================================================
   PAULINE — PORTFOLIO CONTENT (bilingual)
   這是你唯一需要編輯的內容檔。
   每段文字都是 { en: "...", zh: "..." } 成對存放。
   [方括號] 內是佔位內容，上線前要替換。
   小技巧：文字要保留引號；文字裡要用引號請寫 \"
   ---------------------------------------------------------
   本版由 Claude 於 2026-07-05 依 Google Drive / Notion 專案
   記錄撰寫。[圖：...] 為放圖指示，放好圖後把 alt 改成該圖
   的無障礙描述。[待確認：...] 為需要 Pauline 本人確認的事實。
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
    cardImage: "",
    cardImageAlt: { en: "FamilyMart app redesign — unified home and checkout screens", zh: "全家 App 重構——整合後的首頁與結帳畫面" },
    cardTags: [
      { en: "Mobile app", zh: "行動 App" },
      { en: "16M users", zh: "1,600 萬用戶" },
      { en: "End-to-end UX", zh: "端到端 UX" }
    ],
    meta: {
      role: {
        en: "UX/UI Designer — research synthesis, information architecture, wireframes, high-fidelity prototypes",
        zh: "UX/UI 設計師——研究整合、資訊架構、線框圖、高保真原型"
      },
      timeline: { en: "2023 – 2024 [confirm]", zh: "2023 – 2024 [待確認起訖]" },
      team: { en: "In-house product team + external UX consultancy (UserXper)", zh: "內部產品團隊 + 外部 UX 顧問公司（悠識數位）" },
      scope: { en: "Flagship mobile app, 16 million registered users", zh: "旗艦行動 App，1,600 萬註冊用戶" }
    },
    summary: {
      en: "FamilyMart's flagship app had grown into 9 independent commerce flows, each with its own cart, orders and logic. I contributed to the end-to-end redesign that unified them into a single shopping and checkout experience — grounded in one of the largest research programmes the company had run.",
      zh: "全家的旗艦 App 逐漸長成 9 條各自獨立的購物流程，每條都有自己的購物車、訂單與邏輯。我參與了端到端重新設計，將它們整合為單一的購物與結帳體驗——背後是公司歷來規模數一數二的用戶研究。"
    },
    figmaEmbed: "",
    sections: [
      {
        id: "impact",
        nav: { en: "Impact", zh: "成果" },
        heading: { en: "Impact", zh: "成果" },
        blocks: [
          { type: "stats", items: [
            { number: "9 → 1", label: { en: "commerce flows unified into one cart and checkout", zh: "條購物流程整合為單一購物車與結帳" } },
            { number: "16M", label: { en: "registered users served", zh: "註冊用戶" } },
            { number: "2,241", label: { en: "valid survey responses grounding the redesign", zh: "份有效問卷支撐設計決策" } }
          ]},
          { type: "p", text: {
            en: "The reconstruction gave customers a single mall entry and a single cart: products from any flow can be added together, checked out once, and found in one consolidated order history. Search gained fuzzy matching and trending keywords, and the high-frequency member functions customers actually rely on — points, payment, coupons and instant redemption — were promoted to the heart of the home screen. The project also seeded a consistent design language that became the FamilyMart Design Guideline (my second case study). [待確認：改版是否在你在職期間上線；若否，改用「設計交付」框架]",
            zh: "重構後，消費者獲得單一商城入口與單一購物車：跨商流的商品可以加進同一台購物車、一次結帳，訂單也集中在同一處查詢。搜尋加入了模糊搜尋與熱門關鍵字，而用戶真正高頻依賴的會員功能——點數、支付、酷碰券、隨買兌換——被提升到首頁核心位置。這個專案同時催生了貫穿全公司的一致設計語言，後來成為全家 Design Guideline（我的第二個 case study）。[待確認：改版是否在你在職期間上線]"
          }},
          { type: "img", src: "", alt: { en: "[圖：改版前 vs 改版後首頁對比（雙機並排 mockup），可從「全家APP4.0 重構專案.fig」匯出]", zh: "[圖：改版前 vs 改版後首頁對比（雙機並排 mockup）]" }, caption: { en: "Before / after: from nine scattered entries to one unified mall.", zh: "改版前後對比：從九個分散入口到單一商城。" } }
        ]
      },
      {
        id: "problem",
        nav: { en: "The problem", zh: "問題" },
        heading: { en: "The problem", zh: "問題" },
        blocks: [
          { type: "p", text: {
            en: "Nine independent commerce flows meant nine different mental models. Users had to re-learn navigation, cart and checkout behaviour depending on where they started — hurting discoverability, trust, and ultimately revenue. Behind the scenes, nine separately maintained systems duplicated development effort and fragmented behavioural data.",
            zh: "9 條獨立的購物流程代表 9 套不同的心智模型。用戶依進入點不同，要重新學習導覽、購物車和結帳的行為——傷害了可發現性、信任感，最終傷害營收。而在系統端，9 套獨立維運的架構造成重複開發，用戶行為數據也支離破碎。"
          }},
          { type: "p", text: {
            en: "In practice: customers buying across flows had to **check out multiple times**, with orders scattered across flows — finding a record meant first remembering *where* you'd bought it. Interface guidance was weak enough that **store staff were teaching customers how to use the app in person**, while customer service kept fielding \"I can't find the function\" complaints. And product search demanded exact wording — customers often knew a product existed but simply **couldn't find it**.",
            zh: "具體來說：跨商流購買必須**分多次結帳**，訂單散落各處——查一筆記錄得先想起「當初是在哪裡買的」。介面引導不足的程度，已經到了**店舖人員要在門市現場教客人操作**，客服也持續收到「功能找不到」的抱怨。而商品搜尋要求用字精準——消費者常常知道商品存在，卻**搜不到**。"
          }},
          { type: "img", src: "", alt: { en: "[圖：舊版 App 的 9 個商流入口截圖，或痛點三大分類整理圖（依 Notion「痛點（優化前）」重繪）]", zh: "[圖：舊版 App 的 9 個商流入口截圖，或痛點三大分類整理圖]" }, caption: { en: "The legacy app: nine flows, nine carts, nine mental models.", zh: "舊版 App：九個商流、九台購物車、九套心智模型。" } }
        ]
      },
      {
        id: "research",
        nav: { en: "Research", zh: "研究" },
        heading: { en: "Research & findings", zh: "研究與發現" },
        blocks: [
          { type: "p", text: {
            en: "We partnered with an external UX consultancy (UserXper) on a multi-method research programme, and I worked on the internal side of it — helping define research questions, joining fieldwork, and synthesising findings into design direction:",
            zh: "我們與外部 UX 顧問公司（悠識數位）合作執行多方法並行的研究計畫，我在內部端參與其中——協助定義研究議題、參與田野、並將發現整合為設計方向："
          }},
          { type: "list", items: [
            { en: "**In-app quantitative survey** pushed to app users plus external channels — 2,467 responses collected, **2,241 valid** (1,282 in-app + 959 external), May 2023", zh: "**量化問卷**透過 App 推播與外部管道發放——回收 2,467 份、**有效 2,241 份**（App 端 1,282 + 外部 959），2023 年 5 月" },
            { en: "**Expert heuristic evaluation** of both the legacy app and the new design, run in parallel so the two could be compared", zh: "對**舊版 App 與新版設計同步進行專家經驗法則評估**，讓兩版可以互相對照" },
            { en: "**Store visits and manager/staff interviews across 3 stores** [待確認：實際走訪 3 或 4 間] chosen for strong digital-service adoption, surfacing where digital services broke down at the physical counter", zh: "**走訪 3 間**數位服務推行成熟的門市 [待確認：實際 3 或 4 間]，訪談店長與店員，找出數位服務在實體櫃檯端的斷點" },
            { en: "**3 focus groups** (6 customers each) and **6 one-on-one in-depth interviews**, testing the adjusted prototype with real customers", zh: "**3 場焦點團體**（每場 6 位顧客）與 **6 場一對一深度訪談**，以調整後的原型與真實顧客進行測試" },
            { en: "**Internal stakeholder interviews**, reconciling customer insights with each business unit's operational reality", zh: "**內部利害關係人訪談**，將顧客洞察與各事業單位的營運現實整合為可行方案" }
          ]},
          { type: "p", text: {
            en: "The findings were unambiguous. Only **2–6% of users had ever used the newer commerce services**, and 13% of those who had couldn't recall their names — confirming the exposure problem. The functions users actually lived in were cross-store redemption (62%), member points (61%) and payment (51%). At the counter, we watched **older customers hand their phones to staff** because interface jargon like \"offline payment\" meant nothing to them, and system-enlarged fonts broke the layout. Research also distilled three customer personas that guided prioritisation for the whole programme.",
            zh: "研究結果非常明確。**只有 2–6% 的用戶用過新商流服務**，用過的人裡還有 13% 想不起服務名稱——曝光度問題被直接證實。用戶真正高頻使用的是隨買跨店取（62%）、會員點數（61%）與支付（51%）。在門市現場，我們看著**年長顧客把手機交給店員**，因為「線下支付」這類介面用語對他們毫無意義，系統放大字體還會擠壞版面。研究同時收斂出三類顧客人物誌，成為整個計畫優先序的依據。"
          }},
          { type: "img", src: "", alt: { en: "[圖：研究方法時間軸（問卷→專家評估→門市訪談→焦點團體→一對一），建議用自己的視覺重繪]", zh: "[圖：研究方法時間軸，建議重繪]" }, caption: { en: "A multi-method programme: survey, expert evaluation, store visits, focus groups, 1:1 interviews.", zh: "多方法並行：問卷、專家評估、門市參訪、焦點團體、一對一訪談。" } },
          { type: "img", src: "", alt: { en: "[圖：三類人物誌卡片（全家超好買／生活超便利／優惠不錯過），建議重繪成自己的視覺風格]", zh: "[圖：三類人物誌卡片，建議重繪成自己的視覺風格]" }, caption: { en: "Three personas: the Shopper, the Convenience-first, and the Deal-hunter.", zh: "三類人物誌：超好買族群、生活超便利族群、優惠不錯過族群。" } }
        ]
      },
      {
        id: "decisions",
        nav: { en: "Design decisions", zh: "設計決策" },
        heading: { en: "Design decisions and trade-offs", zh: "設計決策與取捨" },
        blocks: [
          { type: "p", text: {
            en: "**1 — One mall entry for customers, commerce flows preserved underneath.** Research pointed to the ideal solution: dissolve the commerce flows entirely and recategorise by product type. But each flow mapped to an independent business unit, and removing them would have broken how the business operated. We compromised — a single mall entry and single cart on the surface, the flow structure retained underneath. A trade-off between the ideal information architecture and organisational reality.",
            zh: "**決策一：對消費者呈現單一商城入口，底層保留商流架構。** 研究指向的理想解是徹底「去商流化」、改以商品品類重新分類。但每個商流對應公司內部獨立的事業單位，完全打掉會讓業務端無法運作。我們選擇折衷——表層是單一商城入口與單一購物車，底層保留商流架構。這是「理想資訊架構」與「組織現實」之間的取捨。"
          }},
          { type: "p", text: {
            en: "**2 — Expert evaluation as a persuasion tool, not just validation.** We submitted the legacy app *and* our new Design A to expert heuristic evaluation at the same time. The legacy findings matched our internally identified pain points almost exactly — third-party confirmation that the problems were real, which became key to winning cross-departmental support. Feedback on Design A was folded into Design B, which then went into customer interviews and testing.",
            zh: "**決策二：把專家評估當成說服工具，而不只是驗證工具。** 我們把舊版 App 和新設計 A 版*同時*送交專家經驗法則評估。舊版的評估結果與內部盤點的痛點高度吻合——等於用第三方權威證實問題存在，成為爭取跨部門支持的關鍵。A 版的評估意見則收斂為 B 版，再進入顧客訪談與測試。"
          }},
          { type: "p", text: {
            en: "**3 — The home screen belongs to high-frequency member functions, not new-service promotion.** The business wanted more exposure for new services, but the survey showed users lived in redemption (62%), points (61%) and payment (51%) — and the legacy home screen's member area looked so much like ad space that users didn't realise it was tappable. We gave the home screen to high-frequency functions with clearer affordances, and moved new-service exposure into personalised recommendations and notifications instead.",
            zh: "**決策三：首頁讓給高頻會員功能，而不是新服務曝光。** 營運端期望提高新服務曝光度，但問卷顯示用戶的日常是隨買（62%）、點數（61%）與支付（51%）——而且舊版首頁的會員功能區長得太像廣告版位，用戶根本不知道可以點。我們把首頁核心讓給高頻功能、強化可點擊的視覺線索，新服務曝光改由個人化推薦與通知承接。"
          }},
          { type: "img", src: "", alt: { en: "[圖：資訊架構對比圖（舊：9 個獨立入口 → 新：單一商城入口），可用 FigJam 重繪]", zh: "[圖：資訊架構對比圖（舊 9 入口 → 新單一入口），可用 FigJam 重繪]" }, caption: { en: "IA before and after: one entry, one cart, one order history.", zh: "資訊架構前後對比：一個入口、一台購物車、一份訂單記錄。" } }
        ]
      },
      {
        id: "design",
        nav: { en: "Final design", zh: "最終設計" },
        heading: { en: "Final design", zh: "最終設計" },
        blocks: [
          { type: "p", text: {
            en: "The final design went through two major documented iterations: Design A was refined into Design B through expert heuristic evaluation, and Design B was validated through customer focus groups, interviews and usability testing. [待確認：A→B 之後是否還有主要迭代輪次] The delivered design covered the unified mall and checkout flow, consolidated order history, product search with fuzzy matching and trending keywords, a home screen built around high-frequency member functions, and a consistent design language across the entire app.",
            zh: "最終設計歷經兩輪主要迭代：A 版經專家經驗法則評估調整為 B 版，B 版再透過顧客焦點團體、訪談與易用性測試驗證。[待確認：A→B 之後是否還有主要迭代] 交付內容涵蓋整合後的商城與結帳流程、集中化訂單查詢、支援模糊搜尋與熱門關鍵字的商品搜尋、以高頻會員功能為核心的首頁，以及貫穿全 App 的一致設計語言。"
          }},
          { type: "figma" },
          { type: "img", src: "", alt: { en: "[圖：整合後結帳流程關鍵畫面（購物車 → 結帳 → 訂單）3–4 張並排，從「全家APP4.0 重構專案.fig」匯出]", zh: "[圖：整合後結帳流程關鍵畫面 3–4 張並排]" }, caption: { en: "The unified cart and checkout — one flow regardless of where the product came from.", zh: "整合後的購物車與結帳——無論商品來自哪個商流，都是同一條流程。" } },
          { type: "img", src: "", alt: { en: "[圖：你個人負責的功能模組畫面精選，放你真正做過的模組並在 caption 註明模組名稱]", zh: "[圖：你個人負責的功能模組畫面精選]" }, caption: { en: "[待確認：Pauline 個人負責模組的畫面與模組名稱]", zh: "[待確認：你個人負責模組的畫面與模組名稱]" } }
        ]
      },
      {
        id: "learnings",
        nav: { en: "Learnings", zh: "學到什麼" },
        heading: { en: "What I learned", zh: "我學到什麼" },
        blocks: [
          { type: "p", text: {
            en: "The best information architecture isn't always the feasible one. For a design to survive organisational reality, the trade-off itself is part of the design — and what matters most is documenting *why not*. The proposals we couldn't ship (fully dissolving the commerce flows, a single unified payment entry) were preserved along with their reasons, becoming the starting point for the next phase rather than forgotten good ideas.",
            zh: "最好的資訊架構不一定是可行的資訊架構。設計要在組織現實中存活，取捨本身就是設計的一部分——而最重要的是把「為什麼不」記錄下來。那些沒能實現的方案（徹底去商流化、統一支付入口）連同原因被完整保留，成為下一階段的起點，而不是被遺忘的好主意。"
          }},
          { type: "p", text: {
            en: "Store visits also changed how I think about accessibility. Watching older customers hand their phones to staff — defeated by jargon and broken enlarged-font layouts — made accessibility concrete for me long before I studied WCAG formally. Designing for the least digital-native user makes the product better for everyone.",
            zh: "門市參訪也改變了我對無障礙的理解。看著年長顧客被介面術語和放大字體擠壞的版面打敗、只能把手機交給店員——早在我正式學習 WCAG 之前，無障礙對我來說就已經是具體的畫面。為最不熟悉數位的用戶設計，會讓產品對所有人都更好。"
          }}
        ]
      }
    ]
  },

  /* ================= 2. 設計系統 ================= */
  "design-system": {
    title: { en: "FamilyMart Design Guideline", zh: "全家 Design Guideline 設計規範" },
    cardOutcome: {
      en: "Co-built the company's first design system — 80 specs across App and Web, adopted by internal teams and vendors",
      zh: "共同打造公司第一套設計系統——App 與 Web 共 80 項規範，內部團隊與外包廠商採用"
    },
    cardImage: "",
    cardImageAlt: { en: "FamilyMart design system component library overview", zh: "全家設計系統元件庫總覽" },
    cardTags: [
      { en: "Design system", zh: "設計系統" },
      { en: "0 → 1", zh: "0 → 1" },
      { en: "Governance", zh: "規範治理" }
    ],
    meta: {
      role: {
        en: "UX/UI Designer — owned the foundation tokens (layout, shadow, border radius, divider) on both platforms; delivered 18 component specifications across App and Web",
        zh: "UX/UI 設計師——負責雙平台的基礎規範（佈局、陰影、圓角、分隔線），並交付 App 與 Web 共 18 項規範"
      },
      timeline: { en: "Aug 2023 – Feb 2024", zh: "2023 年 8 月 – 2024 年 2 月" },
      team: { en: "5 designers", zh: "5 位設計師" },
      scope: { en: "App + Web design systems, used by internal teams and outsourced vendors", zh: "App + Web 雙設計系統，供內部團隊與外包廠商使用" }
    },
    summary: {
      en: "FamilyMart had no shared design language — the app reconstruction research had shown exactly what that costs users. As a team of five designers, we built the company's first design guideline: 80 component and foundation specifications across App and Web, delivered on schedule and documented so that internal teams and external vendors could build consistently.",
      zh: "全家原本沒有共用的設計語言——App 重構的研究已經清楚展示這對用戶的代價。我們五位設計師從零打造了公司第一份設計規範：橫跨 App 與 Web 的 80 項元件與基礎規範，如期交付並完成文件化，讓內部團隊與外包廠商都能一致地實作。"
    },
    figmaEmbed: "",
    sections: [
      {
        id: "impact",
        nav: { en: "Impact", zh: "成果" },
        heading: { en: "Impact", zh: "成果" },
        blocks: [
          { type: "stats", items: [
            { number: "0 → 1", label: { en: "first company-wide design guideline", zh: "公司第一份全域設計規範" } },
            { number: "80", label: { en: "component & foundation specs across App and Web", zh: "項元件與基礎規範，橫跨 App 與 Web" } },
            { number: "18", label: { en: "specs I personally delivered, incl. all four foundation tokens", zh: "項由我交付，含全部四項基礎規範" } }
          ]},
          { type: "p", text: {
            en: "The guideline became the single source of truth for UI across FamilyMart's digital products — referenced by internal teams and handed to outsourced vendors so their output stopped drifting from the brand. Every component was documented with usage rules in Notion, and the whole build tracked against a shared schedule: the App system shipped Aug–Nov 2023, the Web system Dec 2023–Feb 2024, with components consistently landing on or ahead of their planned dates.",
            zh: "這份規範成為全家數位產品 UI 的單一事實來源——內部團隊引用、外包廠商遵循，產出不再偏離品牌。每個元件都在 Notion 完成使用規則的文件化，整個建置過程對照共享排程進行：App 系統於 2023 年 8–11 月完成，Web 系統於 2023 年 12 月–2024 年 2 月完成，元件幾乎都如期或提前交付。"
          }},
          { type: "img", src: "", alt: { en: "[圖：Figma 元件庫縮圖牆或 sticker sheet，從「FamilyMart Design Guideline.fig」匯出]", zh: "[圖：Figma 元件庫縮圖牆或 sticker sheet]" }, caption: { en: "The component library at a glance.", zh: "元件庫一覽。" } }
        ]
      },
      {
        id: "problem",
        nav: { en: "The problem", zh: "問題" },
        heading: { en: "The problem", zh: "問題" },
        blocks: [
          { type: "p", text: {
            en: "The app reconstruction research had already measured the cost of inconsistency: the same function looked and behaved differently in every commerce flow, driving up the learning curve until store staff were teaching customers in person. Behind the scenes, designers redrew the same buttons and forms for every project, reviews were slow because there was no standard to review against, and outsourced vendors — who build a significant share of FamilyMart's digital products — each interpreted the brand their own way.",
            zh: "App 重構的研究早已量化了「不一致」的代價：相同功能在每個商流長得不一樣、行為也不一樣，學習成本高到店舖人員要現場教學。而在內部，設計師每個專案都在重畫一樣的按鈕和表單；審查很慢，因為沒有標準可以對照；承接大量開發工作的外包廠商，更是各自用自己的方式詮釋品牌。"
          }},
          { type: "p", text: {
            en: "The company had a brand style book for marketing materials, but nothing that told a product designer — or a vendor's engineer — what a button, a form field or an empty state should actually be.",
            zh: "公司有一份給行銷物的品牌風格書，但沒有任何文件告訴產品設計師——或外包廠商的工程師——一顆按鈕、一個輸入框、一個空狀態究竟該長什麼樣。"
          }},
          { type: "img", src: "", alt: { en: "[圖：不一致範例拼貼——同一個元件（例如按鈕或 tab）在不同商流的不同長相，3–4 張截圖並排]", zh: "[圖：同一元件在不同商流的不同長相，3–4 張截圖並排]" }, caption: { en: "One function, many faces: the same component across different flows before the system.", zh: "同一個功能、多種長相：規範建立前，同一元件在不同商流的樣子。" } }
        ]
      },
      {
        id: "process",
        nav: { en: "Process", zh: "建置過程" },
        heading: { en: "Building the system", zh: "建置設計系統" },
        blocks: [
          { type: "p", text: {
            en: "We ran the build like a product: audit existing UI, define foundations first, then components by priority. Every item had an owner, a P0–P3 priority, a planned date and an actual date, tracked in a shared schedule — which is also how I can tell you exactly what I built.",
            zh: "我們把建置當成一個產品來跑：先盤點現有 UI，接著定義基礎規範，再依優先序建立元件。每個項目都有負責人、P0–P3 優先級、預計與實際完成日，全部記錄在共享排程裡——這也是為什麼我能精確說出我做了什麼。"
          }},
          { type: "list", items: [
            { en: "**Foundations first (P0):** I owned layout, shadow, border radius and divider — the tokens every component sits on — for both App and Web", zh: "**基礎規範優先（P0）：**我負責佈局、陰影、邊框圓角、分隔線——所有元件都建立在這些基礎之上——App 與 Web 兩個平台都是" },
            { en: "**Components by priority:** I delivered Banner, Tag, Steps, Drawer, Accordion, Bottom Sheet and Slider/Scroll among others — 18 specifications in total across the two platforms", zh: "**元件依優先序建置：**我交付了 Banner、標籤、步驟條、側邊選單、手風琴、底部彈窗、滑動條等——兩平台合計 18 項規範" },
            { en: "**Documentation as part of done:** every component got a Notion page with usage rules, states and do/don'ts — a spec without documentation wasn't considered finished", zh: "**文件化是完成的一部分：**每個元件都有一頁 Notion 文件，寫清楚使用規則、狀態與 do/don't——沒有文件的規範不算完成" },
            { en: "**Native-platform awareness:** App and Web were treated as two systems sharing one language, not one system copy-pasted — native components were specified separately", zh: "**尊重原生平台：**App 和 Web 是共享同一套語言的兩個系統，不是複製貼上——原生元件另行定義" }
          ]},
          { type: "img", src: "", alt: { en: "[圖：建置排程表截圖（P0–P3 優先序、預計 vs 實際完成日；同事姓名可改代號）]", zh: "[圖：建置排程表截圖（同事姓名可改代號）]" }, caption: { en: "The build schedule: owners, priorities, planned vs actual dates.", zh: "建置排程：負責人、優先序、預計 vs 實際完成日。" } },
          { type: "img", src: "", alt: { en: "[圖：你負責的基礎規範頁面（佈局／陰影／圓角／分隔線擇 1–2），從 Figma 或 Notion 截圖]", zh: "[圖：你負責的基礎規範頁面擇 1–2]" }, caption: { en: "Foundation tokens I owned: the invisible rules every screen obeys.", zh: "我負責的基礎規範：每個畫面都遵守的隱形規則。" } }
        ]
      },
      {
        id: "adoption",
        nav: { en: "Adoption", zh: "推行採用" },
        heading: { en: "Driving adoption", zh: "推動採用" },
        blocks: [
          { type: "p", text: {
            en: "A design system nobody uses is a very tidy graveyard, so rollout was designed alongside the system itself. We codified the team's end-to-end design workflow — from requirements and IA through wireframes, usability testing, UI and post-launch data validation — so the guideline had a defined place in every project. I designed and facilitated **Figma workshops for PMs and engineers** [待確認：場次與人數], teaching non-designers to navigate files, comment and inspect specs, which cut handoff friction with every team the system touched. And because vendors build much of FamilyMart's product surface, the guideline was packaged for external consumption the way the brand style book had been for marketing.",
            zh: "沒有人用的設計系統只是一座整齊的墳墓，所以推行從一開始就和系統一起設計。我們把團隊端到端的設計流程制度化——從需求、資訊架構、線框圖、易用性測試、UI 到上線後的數據驗證——讓規範在每個專案裡都有明確位置。我設計並主持了**給 PM 與工程師的 Figma 工作坊** [待確認：場次與人數]，教非設計師瀏覽檔案、留言、檢視規格，大幅降低每個協作團隊的交付摩擦。而因為外包廠商承擔了全家大量的產品開發，規範也比照品牌風格書的做法，打包成可交付外部使用的版本。"
          }},
          { type: "img", src: "", alt: { en: "[圖：APP 設計作業流程圖（從「APP 設計作業流程.pptx」重繪成自己的視覺），或 Figma 工作坊照片／簡報頁]", zh: "[圖：APP 設計作業流程圖（重繪），或 Figma 工作坊照片／簡報頁]" }, caption: { en: "The codified design workflow — where the guideline plugs into every project.", zh: "制度化的設計流程——規範在每個專案中的位置。" } }
        ]
      },
      {
        id: "learnings",
        nav: { en: "Learnings", zh: "學到什麼" },
        heading: { en: "What I learned", zh: "我學到什麼" },
        blocks: [
          { type: "p", text: {
            en: "Foundations are leverage: the four unglamorous tokens I owned — layout, shadow, radius, divider — quietly govern every one of the 80 components. I also learned that a design system is a social contract before it's a Figma file: the schedule, the documentation and the workshops did as much for consistency as the components themselves. If I built it again, I'd involve engineers even earlier, so tokens map one-to-one to code from day one.",
            zh: "基礎規範是槓桿：我負責的四項不起眼的規範——佈局、陰影、圓角、分隔線——安靜地支配著全部 80 個元件。我也學到，設計系統在成為 Figma 檔案之前，先是一份社會契約：排程、文件和工作坊對一致性的貢獻，不亞於元件本身。如果重來一次，我會更早讓工程師參與，讓 token 從第一天就能一對一對應到程式碼。"
          }}
        ]
      }
    ]
  },

  /* ================= 3. 健康飲食 APP ================= */
  "health-app": {
    title: { en: "FamilyMart Health App (享健康)", zh: "全家健康飲食 App（享健康）" },
    cardOutcome: {
      en: "Took a healthy-eating app from market research to business case to high-fidelity prototype — solo",
      zh: "獨立完成健康飲食 App——從市場研究、商業提案到高保真原型"
    },
    cardImage: "",
    cardImageAlt: { en: "享健康 healthy-eating app prototype screens", zh: "享健康 App 原型畫面" },
    cardTags: [
      { en: "0 → 1 concept", zh: "0 → 1 概念" },
      { en: "Business case", zh: "商業提案" },
      { en: "Merit Award", zh: "獲獎作品" }
    ],
    meta: {
      role: {
        en: "Sole designer-researcher — market research, competitive analysis, business model, functional architecture, Figma prototype",
        zh: "獨立設計研究者——市場研究、競品分析、商業模型、功能架構、Figma 原型"
      },
      timeline: { en: "2022", zh: "2022 年" },
      team: { en: "Individual project, mentored by the department director [待確認團隊描述]", zh: "個人專案，由部長指導 [待確認團隊描述]" },
      scope: {
        en: "New product exploration presented to senior management, concept through high-fidelity prototype. Won a Merit Award in FamilyMart's Digital Transformation Competition, Oct 2022. [待確認：得獎作品是否即為此案，或為「Take a Walk」另案]",
        zh: "呈報高階主管的新產品探索，從概念到高保真原型。獲全家數位轉型競賽佳作（2022 年 10 月）。[待確認：得獎作品是否即為此案，或為「Take a Walk」另案]"
      }
    },
    summary: {
      en: "享健康 (\"Enjoy Health\") is a diet-record companion app I designed end-to-end as a solo project inside FamilyMart: a tool that helps members track what they eat, built to serve a clear business goal — deepening member stickiness and lifting fresh-food sales. I carried it from market research through business modelling to a high-fidelity Figma prototype, presenting progress to senior management at monthly reviews.",
      zh: "「享健康」是我在全家內部獨立完成的飲食紀錄 App：幫助會員記錄飲食的工具，同時服務明確的商業目標——深化會員黏著度、帶動鮮食銷量。我從市場研究、商業模型規劃一路做到高保真 Figma 原型，並在每月月會向高階主管報告進度。"
    },
    figmaEmbed: "",
    sections: [
      {
        id: "impact",
        nav: { en: "Outcome", zh: "成果" },
        heading: { en: "Outcome", zh: "成果" },
        blocks: [
          { type: "stats", items: [
            { number: "0 → 1", label: { en: "from market gap to high-fidelity prototype, solo", zh: "從市場缺口到高保真原型，獨立完成" } },
            { number: "Merit Award", label: { en: "FamilyMart Digital Transformation Competition, Oct 2022 [待確認對應]", zh: "全家數位轉型競賽佳作，2022 年 10 月 [待確認對應]" } },
            { number: "~100K", label: { en: "active users of comparable apps — the market headroom identified", zh: "同類 App 活躍用戶規模——研究識別的市場空間" } }
          ]},
          { type: "p", text: {
            en: "The deliverable was a complete product proposal: functional architecture, phased roadmap, service model, revenue analysis, and a high-fidelity prototype senior management could tap through. Because any build decision came after my program concluded, this case study is honest about its scope — it's about taking a concept to a decision-ready state, not about launch metrics.",
            zh: "最終交付是一份完整的產品提案：功能架構、階段性藍圖、服務模式、獲利分析，以及一份高階主管可以實際點按操作的高保真原型。由於後續開發決策發生在專案期程之後，這篇 case study 誠實面對它的範疇——它談的是把概念推進到「可供決策」的狀態，而非上線數據。"
          }},
          { type: "img", src: "", alt: { en: "[圖：享健康高保真原型 3–4 張關鍵畫面並排（飲食記錄、營養總覽等）]", zh: "[圖：享健康原型 3–4 張關鍵畫面並排]" }, caption: { en: "The high-fidelity prototype presented at the final review.", zh: "期末審查呈現的高保真原型。" } }
        ]
      },
      {
        id: "problem",
        nav: { en: "The problem", zh: "問題" },
        heading: { en: "The problem", zh: "問題" },
        blocks: [
          { type: "p", text: {
            en: "Health consciousness in Taiwan had been climbing for a decade, and convenience stores — where millions eat daily — sat on an untapped connection: FamilyMart already knew the nutritional profile of every fresh-food item it sold, but members had no way to use that data. The business problem was equally concrete: how to keep members inside the app between purchases, and how to make health-minded customers *choose* FamilyMart fresh food with confidence.",
            zh: "台灣的健康意識已連續十年攀升，而每天供應數百萬人飲食的便利商店，其實坐擁一個未被使用的連結：全家早就掌握每一項鮮食的營養成分，會員卻無從使用這些資料。商業問題同樣具體：如何讓會員在兩次消費之間仍停留在 App 裡？如何讓重視健康的顧客能*安心選擇*全家鮮食？"
          }},
          { type: "p", text: {
            en: "Competitive analysis of diet-tracking apps (MyFitnessPal and local players) showed a recurring weakness: manual food logging is tedious enough that most users quit. A retailer that already knows exactly what you bought has a structural advantage no standalone tracker can match.",
            zh: "對飲食紀錄 App（MyFitnessPal 與本土產品）的競品分析顯示一個反覆出現的弱點：手動記錄食物太麻煩，多數用戶因此放棄。而一個本來就知道你買了什麼的零售商，擁有任何獨立追蹤 App 都無法複製的結構性優勢。"
          }},
          { type: "img", src: "", alt: { en: "[圖：競品分析矩陣（MyFitnessPal 等 vs 享健康的定位差異），建議重繪]", zh: "[圖：競品分析矩陣，建議重繪]" }, caption: { en: "Competitive landscape: where a retailer-native tracker wins.", zh: "競品版圖：零售原生的追蹤工具贏在哪裡。" } }
        ]
      },
      {
        id: "process",
        nav: { en: "Process", zh: "設計過程" },
        heading: { en: "Design process", zh: "設計過程" },
        blocks: [
          { type: "list", items: [
            { en: "**Market research:** ten-year public-data trends on health consciousness, sized against the ~100K active-user scale of comparable apps", zh: "**市場研究：**以十年公開數據佐證健康意識抬頭趨勢，並以同類 App 約 10 萬活躍用戶的規模推估市場空間" },
            { en: "**Competitive analysis:** feature and business-model breakdown of MyFitnessPal and local diet-tracking products", zh: "**競品分析：**拆解 MyFitnessPal 與本土飲食紀錄產品的功能與商業模式" },
            { en: "**Business modelling:** functional architecture, phased blueprint, service model and revenue analysis — a proposal management could evaluate, not just screens", zh: "**商業模型：**功能架構、階段性藍圖、服務模式與獲利分析——一份主管能評估的提案，而不只是畫面" },
            { en: "**Prototype:** ideation workshop, then wireframes to a high-fidelity, clickable Figma prototype", zh: "**原型：**功能發想工作坊、線框圖，到可點按的高保真 Figma 原型" }
          ]},
          { type: "p", text: {
            en: "The most formative part was the monthly review loop with the department director. My early presentations led with research volume; his feedback reframed everything: *open with the purpose in one sentence* — member stickiness and fresh-food sales — and cut anything that doesn't serve it. My gym-related features were cut for exactly that reason. Each review measurably sharpened both the product and how I communicated it.",
            zh: "最有養分的部分是與部長的每月審查循環。我早期的簡報習慣先堆研究量；他的回饋重新定義了一切：*開頭第一句話就講目的*——會員黏著與鮮食銷量——與目的無關的都砍掉。我的健身房相關功能就是因此被砍。每一次審查都讓產品本身和我的表達方式同時變得更銳利。"
          }},
          { type: "img", src: "", alt: { en: "[圖：功能架構圖或階段性藍圖（從月會簡報擷取重繪）]", zh: "[圖：功能架構圖或階段性藍圖（重繪）]" }, caption: { en: "Functional architecture and phased roadmap from the business case.", zh: "商業提案中的功能架構與階段性藍圖。" } }
        ]
      },
      {
        id: "design",
        nav: { en: "Final design", zh: "最終設計" },
        heading: { en: "Final design", zh: "最終設計" },
        blocks: [
          { type: "p", text: {
            en: "The prototype centred on effortless logging: purchases at FamilyMart flow into the diet record automatically, nutrition is summarised against personal goals, and fresh-food recommendations close the loop back to the store. [待確認：核心畫面與功能描述是否準確，請依原型實況修正]",
            zh: "原型的核心是「不費力的記錄」：在全家的消費自動流入飲食紀錄，營養攝取對照個人目標自動總結，鮮食推薦再把循環導回店舖。[待確認：核心畫面與功能描述是否準確]"
          }},
          { type: "figma" },
          { type: "img", src: "", alt: { en: "[圖：關鍵畫面流程（記錄 → 總覽 → 推薦），從享健康／健康生態圈 fig 檔匯出]", zh: "[圖：關鍵畫面流程（記錄 → 總覽 → 推薦）]" }, caption: { en: "Log, understand, act: the core loop.", zh: "記錄、理解、行動：核心循環。" } }
        ]
      },
      {
        id: "learnings",
        nav: { en: "Learnings", zh: "學到什麼" },
        heading: { en: "What I learned", zh: "我學到什麼" },
        blocks: [
          { type: "p", text: {
            en: "This project taught me to design the business case, not just the interface. \"Lead with the purpose in one sentence\" has shaped every presentation I've given since — and cutting my own gym features taught me that scope discipline is a design skill, not a limitation. It was also my first experience carrying a product 0→1 alone, which later gave me the confidence to build TableTap end-to-end.",
            zh: "這個專案教會我：要設計的是商業提案，不只是介面。「開頭一句話講目的」從此形塑我每一次簡報——而親手砍掉自己的健身房功能，讓我明白範疇紀律是一種設計能力，不是限制。這也是我第一次獨自把產品從 0 帶到 1，後來我有信心端到端做出 TableTap，起點就在這裡。"
          }}
        ]
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
