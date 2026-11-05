window.__C["Case"]=(function(){

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { s: 0, lb: false };
    const B = (id) => window.__A[id];
    const team = 'The Design Lab, SCMHRD';
    this.order = ['ultra', 'hero', 'maruti', 'bp', 'nest'];
    this.files = { ultra: 'case-ultratech.html', hero: 'case-hero.html', maruti: 'case-maruti.html', bp: 'case-bp.html', nest: 'case-novartis.html', jia: 'case-jia.html' };
    this.cases = {
      ultra: {
        comp: 'UltraQuest 3.0 · National 1st Runner-up',
        title: 'UltraTech Cement: scaling UltraTech Building Solutions to 10,000 stores.',
        lede: 'How do you double a retail network in two years, and get 80% of stores selling eight or more categories, when dealers think four is the safe limit?',
        cover: B('0ad668ff979f6e5a95616971d2707b0a'), coverAlt: 'UltraQuest Season 3 cover',
        facts: [
          { k: 'Brief from', v: 'UltraTech Cement' },
          { k: 'Result', v: 'National 1st Runner-up, 4,000+ teams' },
          { k: 'Team', v: team }        ],
        problem: 'UltraTech Building Solutions (UBS) is a 5,000-store retail network that sells cement plus 14+ other building categories. UltraTech wants 10,000 stores within one to two years, with 80% of them selling 8+ categories. Today only 40% do, and half the network sits at 4 to 7.',
        found: 'We surveyed 115 home builders, contractors and architects in Tier 2 and 3 cities and interviewed dealers. Only about 40% saw UBS as a solution store; most still saw a cement shop. Dealers held back on new categories because of locked working capital, dead-stock risk and uncertain demand.',
        quote: 'Cement gives me volume, but not profit. I know other categories make money, but one wrong bet can block my cash for months.',
        quoteBy: 'UBS dealer, from our interviews',
        idea: 'Grow the network persona by persona, and make every new category pay for itself before asking a dealer to add the next one.',
        moves: [
          'A controlled dealer mix: 55% existing UltraTech cement dealers, 30% high-performing retailers and 15% new entrants, to protect network quality while scaling.',
          'Two entry tiers, UBS Lite and UBS Pro, with category expansion unlocked by performance milestones instead of time.',
          'Cluster-led rollout across the top 500 growth districts, with about 10 stores per district before expanding to the next.',
          'An ML onboarding engine that scores prospects before approval, a category-mix engine that recommends the next category, and UBS Saathi, a WhatsApp homebuilding assistant.'
        ],
        stats: [
          { v: '115', l: 'home builders, contractors and architects surveyed' },
          { v: '65%+', l: 'onboarded dealers reaching 8+ categories within 24 months' },
          { v: '< 10%', l: 'early payment delinquency among new dealers' }
        ],
        statNote: 'Survey figures are from our research. The other figures are proposed targets in our submission, not measured results.',
        slides: [
          { src: B('b4ea53020405d081a87fa9759d15ed26'), cap: 'Solution framework: scaling to 10,000 stores and 8+ categories' },
          { src: B('5e13a26e71f23a60e94b05bcc65cbcc0'), cap: 'UBS Saathi, a WhatsApp homebuilding assistant and knowledge hub' },
          { src: B('4c8d7b72df9afb8b7ad7c8168c400023'), cap: 'Dashboard MVP: store health, onboarding success and next-category ROI' }
        ]
      },
      hero: {
        comp: 'Hero Campus Challenge Season 10 · Top 30 of 2 lakh+',
        title: 'Hero MotoCorp: Hero Genuine Shield, fighting fake spare parts.',
        lede: 'Fake parts are cheaper, easy to find and look identical on the shelf. How do you make the genuine part the easy choice for every mechanic?',
        cover: B('557c5871649fdde855b03af197c57fdf'), coverAlt: 'Hero Campus Challenge cover slide',
        facts: [
          { k: 'Brief from', v: 'Hero MotoCorp (VIDA)' },
          { k: 'Result', v: 'National Semi-finalist, top 30 of 2 lakh+' },
          { k: 'Team', v: team }        ],
        problem: "Counterfeits make up an estimated 30 to 40% of parts sold in India's two-wheeler aftermarket and are linked to around 20% of road accidents. Hero's SMS-based part codes are static, easy to copy and rarely used at the counter.",
        found: 'We surveyed 132 retailers, distributors, mechanics and end users. Exposure to fakes was highest at the distributor and retailer level. Price was the main reason fakes were bought, and mechanics, who drive about 80% of part decisions, had no reason to recommend genuine parts.',
        quote: 'Once parts leave our warehouse, we have no visibility. If fake parts enter the market downstream, we are still questioned.',
        quoteBy: 'Distributor, from our field research',
        idea: 'Give every genuine part a digital identity that cannot be cloned, and turn every scan into enforcement intelligence.',
        moves: [
          'A Digital Product Passport for each genuine part, stored on a permissioned blockchain and linked through GS1 Digital Link.',
          'NFC tags in the packaging, tamper-evident seals and laser micro-marking on safety-critical parts, all verifiable in a browser in under 5 seconds.',
          'An AI engine that flags duplicate scans and geo-anomalies, and builds a national counterfeit heatmap for enforcement teams.',
          'A mechanic incentive flywheel and a three-phase rollout, from a 50-SKU pilot to the full VIDA ecosystem.'
        ],
        stats: [
          { v: '132', l: 'aftermarket stakeholders surveyed' },
          { v: '₹4–6', l: 'estimated NFC cost per unit at scale' },
          { v: '14–18 mo', l: 'estimated break-even in our financial model' }
        ],
        statNote: 'Survey figures are from our research. Costs and break-even are estimates from our submission.',
        slides: [
          { src: B('ea35e5d106b8028a97813ab9bfddd6ef'), cap: 'Layers 1 and 2: Digital Product Passport and smart physical security' },
          { src: B('4741d322eb088727ae5e398bb0903df0'), cap: 'End-to-end system architecture, from factory to mechanic' },
          { src: B('8754498c9a25ff2f399c4f7dfe674816'), cap: 'Live working dashboards: command centre, heatmap and dealer network' }
        ]
      },
      maruti: {
        comp: 'Maruti Suzuki XCELerate 2026 · National Semi-finalist',
        title: 'Maruti Suzuki: The Future is Smart. The Future is Strong.',
        lede: 'An SUV portfolio and brand positioning strategy: how does a brand trusted by millions for value become one SUV buyers are proud to own?',
        cover: B('4c65c62deef42aa8b554be8fe34741aa'), coverAlt: 'XCELerate 2026 cover',
        facts: [
          { k: 'Brief from', v: 'Maruti Suzuki' },
          { k: 'Result', v: 'National Semi-finalist' },
          { k: 'Team', v: team }        ],
        problem: 'SUVs are about two-thirds of Indian passenger-vehicle sales. Maruti holds 39.3% of the overall market but only 19.6% of SUVs. Competitors own design, capability and safety, while Maruti is known for value and reliability, and its Arena and Nexa channels have no shared SUV story.',
        found: 'Our survey and showroom visits showed buyers trust Maruti but are not proud of it. It had the lowest "premium and proud" score among major brands. Showrooms felt functional rather than aspirational, and reviews and forums kept repeating the same line: reliable, but not exciting.',
        quote: 'Maruti has earned the right to be trusted. It must now earn the right to be desired.',
        quoteBy: 'Our diagnosis',
        idea: 'Move Maruti from rational trust to a smart-premium position, with one SUV promise expressed through two channels.',
        moves: [
          'One promise across the SUV range: The Future is Smart. The Future is Strong.',
          'Arena stands for Strong (Brezza, Victoris), and Nexa stands for Smart (Fronx, Grand Vitara, e Vitara, Jimny).',
          'Six SUVs mapped to six distinct buyer personas, with guardrails to limit cannibalisation between channels and with partner models.',
          'A redesigned journey before, in and after the showroom, backed by a ₹809 Cr three-year plan across media, retail and measurement.'
        ],
        stats: [
          { v: '19.6%', l: 'Maruti SUV share against 39.3% overall' },
          { v: '₹809 Cr', l: 'three-year investment plan' },
          { v: 'Year 3', l: 'base-case payback at 1.25x contribution to cost' }
        ],
        statNote: 'Share figures are from our research. The plan and returns are illustrative projections from our submission.',
        slides: [
          { src: B('a0d66197a02fd75517b1626ab9ac943e'), cap: 'Perceptual map, white space and the strategic idea' },
          { src: B('2f7463621a92e9274aeeecb0813146e3'), cap: 'Portfolio architecture: Arena Strong, Nexa Smart, six SUV personas' },
          { src: B('f985641aa20d76ac4c1557826f4e1c34'), cap: 'Investment plan, return scenarios and phased rollout' }
        ]
      },
      bp: {
        comp: "British Petroleum × Masters' Union · Black Box Challenge · 2nd Runner-up",
        title: 'British Petroleum: reimagining supplier reconciliation for BP OneFleet.',
        lede: 'Millions of fuel-card transactions, thousands of supplier invoices, and a process that still runs on Excel.',
        cover: B('062e335ac42b813e7913a5eee1572ec3'), coverAlt: 'Data ingestion and matching engine slide',
        facts: [
          { k: 'Brief from', v: 'British Petroleum' },
          { k: 'Result', v: '2nd Runner-up, pre-placement interview' },
          { k: 'Team', v: team }        ],
        problem: 'BP matches supplier invoices to millions of fuel-card transactions using legacy systems and manual Excel work. The process is slow and hard to audit, which delays supplier payments, creates disputes and makes expansion into new markets difficult.',
        found: 'Exceptions came from a handful of causes: missing data, delayed transactions, duplicate entries, price and tax discrepancies and aggregation mismatches. Each one needed a person to chase it.',
        quote: '', quoteBy: '',
        idea: 'Separate data, matching, exceptions and settlement into clear layers, so most invoices match automatically and the rest are resolved within an SLA.',
        moves: [
          'A unified ingestion layer that normalises supplier, station, card and tax data into one standard format.',
          'A matching engine that moves from exact to tolerance to ML-ranked matches.',
          'An SLA-driven exception workflow where every action is logged to a ledger.',
          'A supplier portal MVP for invoices, credit notes, disputes and a running ledger.'
        ],
        stats: [
          { v: '85–95%', l: 'auto-match rate' },
          { v: '< 48 hrs', l: 'settlement cycle after automation' },
          { v: '40–60%', l: 'less manual reconciliation effort' }
        ],
        statNote: 'All figures are proposed targets from our submission.',
        slides: [
          { src: B('6b11baefb1ee302f82222e6a51f92fb7'), cap: 'Problem, stakeholders, solution architecture and business impact' },
          { src: B('cfb7c4ba13075a1d2ff6486266bcc425'), cap: 'Exception handling and settlement workflows' },
          { src: B('4bb5a9ae951a637ddb1fbfa211db05ca'), cap: 'Supplier portal MVP: home and invoices' }
        ]
      },
      nest: {
        comp: 'Novartis NEST 2.0',
        title: 'Novartis: an insight-driven data flow for clinical trial oversight.',
        lede: 'Trial risks show up in the data weeks before anyone notices. How do you see them on day one?',
        cover: B('bc2cc4fde7c305c4303ab79c42eeda02'), coverAlt: 'Clinical trials introduction slide',
        facts: [
          { k: 'Domain', v: 'Pharma clinical operations' },
          { k: 'Problem statement', v: 'Integrated insight-driven data flow' },
          { k: 'Team', v: team }        ],
        problem: 'Clinical trials generate data from EDC systems, lab reports, site metrics and monitoring logs. These streams stay siloed, so trial teams and CRAs only find bottlenecks and data-quality issues in manual reviews and meetings.',
        found: 'We ran 100 surveys with CRAs and trial leads and 10 interviews. 54% of trial teams rated data fragmentation as critical, and about 34% of trial effort went to manual tasks.',
        quote: "Small delays, missed visits, or slow responses are early signs, but they're scattered across systems.",
        quoteBy: 'CRA, from our interviews',
        idea: 'Bring every data stream into one standard layer and score each site for risk, so teams act before problems reach the reports.',
        moves: [
          'A canonical clinical data layer built on CDISC standards, with full lineage and audit trail.',
          'A validation rules engine for missing fields, out-of-range labs and duplicate records.',
          'A blended site risk score: 40% ML, 30% rules, 20% trend and 10% sentiment from CRA notes.',
          'Role-based dashboards for trial leads and CRAs, with drill-down and explainable alerts.'
        ],
        stats: [
          { v: '110', l: 'research participants' },
          { v: '54%', l: 'of trial teams rate data fragmentation as critical' },
          { v: '34%', l: 'of trial effort spent on manual tasks' }
        ],
        statNote: 'All figures are from our primary research.',
        slides: [
          { src: B('c518030345b135586d1b74dd9b3b398c'), cap: 'Solution architecture and data ingestion layer' },
          { src: B('f0ff5c1c05b2daf18702ca0650807562'), cap: 'Validation rules engine and blended risk score' },
          { src: B('275c976e312fca35fef8a9b8ab6ce678'), cap: 'Product MVP: trial health and site risk dashboards' }
        ]
      },
      jia: {
        comp: 'Self-initiated brand case study · Instagram carousel',
        title: 'What if I rebranded Jia from Unstop?',
        lede: "To most students, Jia is just another email in the inbox. What if she became a career companion they actually want to talk to?",
        cover: B('5f14f01e041bb7cc9c499c29c27cb291'), coverAlt: 'Cover slide: What if I were to re-brand Jia from Unstop',
        facts: [
          { k: 'Brand', v: 'Unstop' },
          { k: 'Format', v: '8-slide Instagram carousel' },
          { k: 'Team', v: 'Solo' },
          { k: 'Focus', v: 'Brand persona and product idea' }
        ],
        problem: "Jia is the name behind Unstop's emails. For most students she has turned into inbox noise: a sender they scroll past, not a character they know or trust.",
        found: "The name already has recall, so the problem isn't Jia. It's how she shows up: frequent, one-way emails with no personality behind them.",
        quote: 'The current Jia from Unstop is spamming us with endless emails!',
        quoteBy: 'Where the carousel starts',
        idea: 'Turn Jia from an email sender into a character: a smart, witty and proactive career companion who lives inside Unstop.',
        moves: [
          'A clear archetype: Donna from Suits, the person who knows what you need before you ask.',
          'Four personality traits: smart, witty ("p-unstop-able"), savage enough to call out your excuses, and proactive.',
          'Ask Jia: real questions with straight answers, like what a first-year MBA student should actually be doing.',
          'Jia AI, a career companion that finds jobs, internships, courses, mentors and personalised recommendations.',
          'A closing slide that doubles as a job application: "Dear Unstop, hire me."'
        ],
        stats: [],
        statNote: '',
        link: 'https://www.instagram.com/p/DdEBtzVChHp/',
        slides: [
          { src: B('166fcc0d94cf5ff936d6e8195d7405a9'), cap: "Jia's personality: smart, witty, savage and proactive" },
          { src: B('feb63a38e4a01863e29f5e67c1f2d038'), cap: 'Jia AI: a career companion inside Unstop' },
          { src: B('f759ad9dbb9e83139349a8f5a451983e'), cap: "You don't always know what you need next on Unstop. Jia does." }
        ]
      }
    };
  }
  renderVals() {
    const id = this.cases[this.props.caseId] ? this.props.caseId : 'ultra';
    const raw = this.cases[id];
    const slides = raw.slides;
    const n = slides.length;
    const si = n ? this.state.s % n : 0;
    const nextId = this.order[(this.order.indexOf(id) + 1) % this.order.length];
    const c = Object.assign({}, raw, {
      hasCover: !!raw.cover,
      hasQuote: !!raw.quote,
      hasStats: raw.stats.length > 0,
      hasSlides: n > 0,
      noSlides: n === 0,
      link: raw.link || '',
      hasLink: !!raw.link,
      moves: raw.moves.map((t, k) => ({ t: t, n: '0' + (k + 1) }))
    });
    return {
      c: c,
      slide: n ? slides[si] : { src: '', cap: '' },
      slideNo: si + 1,
      slideCount: n,
      thumbs: slides.map((s, k) => ({
        src: s.src, cap: s.cap,
        style: k === si ? 'border:2px solid #f4eef0;opacity:1' : 'border:2px solid transparent;opacity:.45',
        pick: () => this.setState({ s: k })
      })),
      prev: () => this.setState({ s: n ? (si - 1 + n) % n : 0 }),
      next: () => this.setState({ s: n ? (si + 1) % n : 0 }),
      lb: this.state.lb && n > 0,
      openLb: () => this.setState({ lb: true }),
      closeLb: () => this.setState({ lb: false }),
      nextFile: this.files[nextId],
      nextTitle: this.cases[nextId].title
    };
  }
}

Component.prototype.__tpl=function(S0){return h(Fragment,null," ",h("div",{"style":"width:100%;background:#141113;color:#f4eef0;font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display',Inter,system-ui,sans-serif;line-height:1.5;-webkit-font-smoothing:antialiased;box-sizing:border-box"}," ",h("nav",{"aria-label":"Main","style":"position:sticky;top:0;z-index:30;background:rgba(20,17,19,.78);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border-bottom:1px solid rgba(255,255,255,.08)"}," ",h("div",{"style":"max-width:1080px;margin:0 auto;padding:0 22px;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap"}," ",h("a",{"href":"index.html","style":"font-weight:600;font-size:15px;color:#f4eef0;text-decoration:none;padding:14px 0"},"Kalyan Gianchandani")," ",h("div",{"style":"display:flex;gap:18px;flex-wrap:wrap;font-size:13px"}," ",h("a",{"href":"index.html","style":"color:#a89ea3;text-decoration:none;padding:14px 0"},"Home")," ",h("a",{"href":"case-studies.html","style":"color:#ffffff;text-decoration:none;padding:14px 0"},"Case studies")," ",h("a",{"href":"sales-marketing.html","style":"color:#a89ea3;text-decoration:none;padding:14px 0"},"Sales & marketing")," ",h("a",{"href":"personal-brand.html","style":"color:#a89ea3;text-decoration:none;padding:14px 0"},"Personal brand")," ",h("a",{"href":"my-journey.html","style":"color:#a89ea3;text-decoration:none;padding:14px 0"},"My journey")," ",h("a",{"href":"contact.html","style":"color:#a89ea3;text-decoration:none;padding:14px 0"},"Contact me")," ")," ")," ")," ",h("section",{"style":"max-width:1080px;margin:0 auto;padding:72px 24px 0"}," ",h("a",{"href":"case-studies.html","style":"color:#74b9f0;font-size:15px;text-decoration:none"},"‹ All business case studies")," ",h("div",{"style":"font-size:15px;font-weight:600;color:#74b9f0;margin-top:28px"},G(S0,"c.comp"))," ",h("h1",{"style":"margin:8px 0 0;font-size:48px;line-height:1.04;font-weight:700;letter-spacing:-0.035em;max-width:900px"},G(S0,"c.title"))," ",h("p",{"style":"font-size:21px;line-height:1.35;font-weight:600;letter-spacing:-0.015em;color:#93898e;max-width:820px;margin:20px 0 0"},G(S0,"c.lede"))," ")," ",(G(S0,"c.hasCover")?[" ",h("section",{"style":"max-width:1180px;margin:0 auto;padding:48px 24px 0"}," ",h("div",{"style":"border-radius:28px;overflow:hidden;background:#1f1a1d;height:520px"}," ",h("img",{"src":G(S0,"c.cover"),"alt":G(S0,"c.coverAlt"),"style":"width:100%;height:100%;object-fit:cover;object-position:top center;display:block"})," ")," ")," "]:null)," ",h("section",{"style":"max-width:1080px;margin:0 auto;padding:40px 24px 0"}," ",h("div",{"style":"display:flex;flex-wrap:wrap;border-top:1px solid #3a3236;border-bottom:1px solid #3a3236"}," ",L(G(S0,"c.facts")).map(function(_v1,_i1){var S1=Object.create(S0);S1["f"]=_v1;return [" ",h("div",{"style":"flex:1 1 200px;padding:22px 20px 22px 0"}," ",h("div",{"style":"font-size:12px;color:#93898e;text-transform:uppercase;letter-spacing:.08em;font-weight:600"},G(S1,"f.k"))," ",h("div",{"style":"font-size:16px;font-weight:600;margin-top:4px"},G(S1,"f.v"))," ")," "];})," ")," ")," ",h("section",{"style":"max-width:1080px;margin:0 auto;padding:90px 24px 0;display:flex;flex-wrap:wrap;gap:24px 60px"}," ",h("h2",{"style":"flex:0 0 220px;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.025em"},"The brief")," ",h("p",{"style":"flex:1 1 480px;margin:0;font-size:18px;line-height:1.6;color:#d8cfd3"},G(S0,"c.problem"))," ")," ",h("section",{"style":"max-width:1080px;margin:0 auto;padding:80px 24px 0;display:flex;flex-wrap:wrap;gap:24px 60px"}," ",h("h2",{"style":"flex:0 0 220px;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.025em"},"What we found")," ",h("div",{"style":"flex:1 1 480px"}," ",h("p",{"style":"margin:0;font-size:18px;line-height:1.6;color:#d8cfd3"},G(S0,"c.found"))," ",(G(S0,"c.hasQuote")?[" ",h("blockquote",{"style":"margin:30px 0 0;padding:0 0 0 0;font-size:26px;line-height:1.3;font-weight:600;letter-spacing:-0.02em;color:#f4eef0"},("“"+T(G(S0,"c.quote"))+"”\n          "),h("div",{"style":"font-size:15px;font-weight:500;color:#93898e;margin-top:12px;letter-spacing:0"},G(S0,"c.quoteBy"))," ")," "]:null)," ")," ")," ",h("section",{"style":"max-width:1080px;margin:0 auto;padding:80px 24px 0;display:flex;flex-wrap:wrap;gap:24px 60px"}," ",h("h2",{"style":"flex:0 0 220px;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.025em"},"Our idea")," ",h("div",{"style":"flex:1 1 480px"}," ",h("p",{"style":"margin:0;font-size:22px;line-height:1.35;font-weight:600;letter-spacing:-0.02em"},G(S0,"c.idea"))," ",h("div",{"style":"margin-top:30px;display:flex;flex-direction:column"}," ",L(G(S0,"c.moves")).map(function(_v1,_i1){var S1=Object.create(S0);S1["m"]=_v1;return [" ",h("div",{"style":"display:flex;gap:20px;padding:20px 0;border-top:1px solid #3a3236"}," ",h("span",{"style":"flex:none;font-size:15px;font-weight:600;color:#74b9f0;width:28px"},G(S1,"m.n"))," ",h("span",{"style":"font-size:17px;line-height:1.55;color:#d8cfd3"},G(S1,"m.t"))," ")," "];})," ")," ")," ")," ",(G(S0,"c.hasStats")?[" ",h("section",{"style":"max-width:1080px;margin:0 auto;padding:80px 24px 0"}," ",h("div",{"style":"display:flex;flex-wrap:wrap;gap:16px"}," ",L(G(S0,"c.stats")).map(function(_v1,_i1){var S1=Object.create(S0);S1["s"]=_v1;return [" ",h("div",{"style":"flex:1 1 260px;background:linear-gradient(180deg,#1f1a1d,#1a1619);border:1px solid rgba(116,185,240,.22);border-radius:24px;padding:30px 28px"}," ",h("div",{"style":"font-size:38px;font-weight:700;letter-spacing:-0.04em;line-height:1"},G(S1,"s.v"))," ",h("div",{"style":"font-size:15px;color:#93898e;margin-top:12px;line-height:1.45"},G(S1,"s.l"))," ")," "];})," ")," ",h("p",{"style":"font-size:13px;color:#776d72;margin:14px 0 0"},G(S0,"c.statNote"))," ")," "]:null)," ",h("section",{"style":"max-width:1080px;margin:0 auto;padding:100px 24px 0"}," ",h("h2",{"style":"margin:0;font-size:32px;font-weight:700;letter-spacing:-0.03em"},"Inside the deck.")," ",(G(S0,"c.hasSlides")?[" ",h("div",{"style":"margin-top:28px;position:relative;border-radius:24px;overflow:hidden;background:#1f1a1d"}," ",h("button",{"type":"button","onClick":G(S0,"openLb"),"aria-label":"Enlarge slide","style":"display:block;width:100%;padding:0;border:none;background:none;cursor:zoom-in"}," ",h("img",{"src":G(S0,"slide.src"),"alt":G(S0,"slide.cap"),"style":"display:block;width:100%;height:auto"})," ")," ",h("button",{"type":"button","onClick":G(S0,"prev"),"aria-label":"Previous slide","style":"position:absolute;left:16px;top:50%;transform:translateY(-50%);width:48px;height:48px;border-radius:50%;border:none;background:rgba(38,32,36,.85);color:#ffffff;cursor:pointer;display:flex;align-items:center;justify-content:center"}," ",h("svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"#ffffff","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M15 18l-6-6 6-6"}))," ")," ",h("button",{"type":"button","onClick":G(S0,"next"),"aria-label":"Next slide","style":"position:absolute;right:16px;top:50%;transform:translateY(-50%);width:48px;height:48px;border-radius:50%;border:none;background:rgba(38,32,36,.85);color:#ffffff;cursor:pointer;display:flex;align-items:center;justify-content:center"}," ",h("svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"#ffffff","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M9 18l6-6-6-6"}))," ")," ")," ",h("div",{"style":"display:flex;justify-content:space-between;gap:16px;margin-top:14px;flex-wrap:wrap"}," ",h("span",{"style":"font-size:15px;color:#d8cfd3"},G(S0,"slide.cap"))," ",h("span",{"style":"font-size:15px;color:#93898e"},(T(G(S0,"slideNo"))+" of "+T(G(S0,"slideCount"))+" · click to enlarge"))," ")," ",(G(S0,"c.hasLink")?[" ",h("a",{"href":G(S0,"c.link"),"target":"_blank","rel":"noopener","style":"display:inline-block;margin-top:18px;color:#74b9f0;text-decoration:none;font-size:16px"},"See the full carousel on Instagram ↗")," "]:null)," ",h("div",{"style":"display:flex;gap:12px;margin-top:18px;flex-wrap:wrap"}," ",L(G(S0,"thumbs")).map(function(_v1,_i1){var S1=Object.create(S0);S1["th"]=_v1;return [" ",h("button",{"type":"button","onClick":G(S1,"th.pick"),"aria-label":G(S1,"th.cap"),"style":("flex:1 1 180px;height:100px;padding:0;border-radius:14px;overflow:hidden;cursor:pointer;background:#1f1a1d;transition:opacity .3s;"+T(G(S1,"th.style")))}," ",h("img",{"src":G(S1,"th.src"),"alt":"","style":"width:100%;height:100%;object-fit:cover;object-position:top;display:block"})," ")," "];})," ")," "]:null)," ",(G(S0,"c.noSlides")?[" ",h("div",{"style":"margin-top:28px;border:1px dashed #4a4146;border-radius:24px;padding:60px 30px;text-align:center"}," ",h("div",{"style":"font-size:19px;font-weight:700"},"The full carousel lives on Instagram.")," ",h("p",{"style":"color:#93898e;margin:10px 0 22px"},"[Placeholder: upload 2–3 slides from the post to show them here.]")," ",h("a",{"href":G(S0,"c.link"),"target":"_blank","rel":"noopener","style":"display:inline-block;background:#74b9f0;color:#141113;padding:14px 30px;border-radius:980px;text-decoration:none;font-weight:600;box-shadow:0 4px 12px rgba(116,185,240,.15)"},"Open on Instagram ↗")," ")," "]:null)," ")," ",h("section",{"style":"max-width:1080px;margin:0 auto;padding:110px 24px 80px"}," ",h("a",{"href":G(S0,"nextFile"),"style":"display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;background:#1f1a1d;border-radius:28px;padding:34px 36px;text-decoration:none;color:#f4eef0"}," ",h("div",{}," ",h("div",{"style":"font-size:13px;color:#93898e;text-transform:uppercase;letter-spacing:.08em;font-weight:600"},"Next case")," ",h("div",{"style":"font-size:24px;font-weight:700;letter-spacing:-0.025em;margin-top:4px"},G(S0,"nextTitle"))," ")," ",h("span",{"style":"color:#74b9f0;font-size:16px"},"Read ›")," ")," ",h("div",{"style":"display:flex;gap:26px;justify-content:center;margin-top:40px;flex-wrap:wrap"}," ",h("a",{"href":"case-studies.html","style":"color:#74b9f0;text-decoration:none;font-size:16px"},"All business case studies ›")," ",h("a",{"href":"contact.html","style":"color:#74b9f0;text-decoration:none;font-size:16px"},"Talk to me about this case ›")," ")," ")," ",(G(S0,"lb")?[" ",h("div",{"style":"position:fixed;inset:0;z-index:60;background:rgba(0,0,0,.94);display:flex;align-items:center;justify-content:center;padding:24px"}," ",h("img",{"src":G(S0,"slide.src"),"alt":G(S0,"slide.cap"),"style":"max-width:100%;max-height:88vh;border-radius:12px"})," ",h("button",{"type":"button","onClick":G(S0,"closeLb"),"aria-label":"Close","style":"position:absolute;top:18px;right:18px;width:48px;height:48px;border-radius:50%;border:none;background:#262024;cursor:pointer;display:flex;align-items:center;justify-content:center"}," ",h("svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"#ffffff","stroke-width":"2.5","stroke-linecap":"round","aria-hidden":"true"},h("path",{"d":"M6 6l12 12M18 6L6 18"}))," ")," ",h("button",{"type":"button","onClick":G(S0,"prev"),"aria-label":"Previous slide","style":"position:absolute;left:18px;top:50%;width:48px;height:48px;border-radius:50%;border:none;background:#262024;cursor:pointer;display:flex;align-items:center;justify-content:center"}," ",h("svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"#ffffff","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M15 18l-6-6 6-6"}))," ")," ",h("button",{"type":"button","onClick":G(S0,"next"),"aria-label":"Next slide","style":"position:absolute;right:18px;top:50%;width:48px;height:48px;border-radius:50%;border:none;background:#262024;cursor:pointer;display:flex;align-items:center;justify-content:center"}," ",h("svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"#ffffff","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},h("path",{"d":"M9 18l6-6-6-6"}))," ")," ")," "]:null)," ",h("footer",{"style":"margin-top:48px;border-top:1px solid transparent;border-image:linear-gradient(90deg,rgba(116,185,240,0),#74b9f0 25%,#b23a5c 60%,#ff7597 80%,rgba(255,117,151,0)) 1"},h("div",{"style":"max-width:1080px;margin:0 auto;padding:0 24px"}," ",h("div",{"style":"display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap;padding:40px 0 28px"}," ",h("div",{"style":"display:flex;align-items:center;gap:14px"},h("img",{"src":"assets/portrait.jpg","alt":"Kalyan Gianchandani","style":"width:48px;height:48px;border-radius:50%;object-fit:cover"}),h("div",{},h("div",{"style":"font-weight:600;font-size:16px;color:#f4eef0"},"Kalyan Gianchandani"),h("div",{"style":"font-size:13px;color:#93898e"},"Architect, MBA, SCMHRD Pune"),h("a",{"href":"mailto:gianchandani.kalyan@gmail.com","target":"_blank","rel":"noopener","style":"font-size:13px;color:#d8cfd3;text-decoration:none"},"gianchandani.kalyan@gmail.com")))," ",h("div",{"style":"display:flex;align-items:center;gap:12px;flex-wrap:wrap"},h("a",{"href":"https://www.linkedin.com/in/kalyan-gianchandani-952b3087/","target":"_blank","rel":"noopener","aria-label":"LinkedIn","title":"LinkedIn","class":"ftic","style":"display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:linear-gradient(90deg,rgba(20,24,40,.22) 0%,rgba(116,185,240,.08) 50%,rgba(255,255,255,.18) 100%);backdrop-filter:blur(2px) saturate(170%) brightness(1.25);-webkit-backdrop-filter:blur(2px) saturate(170%) brightness(1.25);border:1px solid rgba(255,255,255,.32);box-shadow:inset 0 2px 1px -1px rgba(255,255,255,.8),inset 0 -3px 3px -2px rgba(255,255,255,.7),inset -6px 0 6px -4px rgba(255,255,255,.6),inset 6px 0 8px -5px rgba(255,255,255,.25),inset 0 0 14px rgba(116,185,240,.14),0 6px 18px rgba(0,0,0,.3);color:#f4eef0;text-decoration:none"},h("svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},h("path",{"d":"M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.1c0-1.22-.02-2.8-1.7-2.8-1.71 0-1.97 1.33-1.97 2.7V21h-4z"}))),h("a",{"href":"https://www.instagram.com/create.with.kalyan/","target":"_blank","rel":"noopener","aria-label":"Instagram","title":"Instagram","class":"ftic","style":"display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:linear-gradient(90deg,rgba(20,24,40,.22) 0%,rgba(116,185,240,.08) 50%,rgba(255,255,255,.18) 100%);backdrop-filter:blur(2px) saturate(170%) brightness(1.25);-webkit-backdrop-filter:blur(2px) saturate(170%) brightness(1.25);border:1px solid rgba(255,255,255,.32);box-shadow:inset 0 2px 1px -1px rgba(255,255,255,.8),inset 0 -3px 3px -2px rgba(255,255,255,.7),inset -6px 0 6px -4px rgba(255,255,255,.6),inset 6px 0 8px -5px rgba(255,255,255,.25),inset 0 0 14px rgba(116,185,240,.14),0 6px 18px rgba(0,0,0,.3);color:#f4eef0;text-decoration:none"},h("svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},h("rect",{"x":"3","y":"3","width":"18","height":"18","rx":"5"}),h("circle",{"cx":"12","cy":"12","r":"4"}),h("circle",{"cx":"17.5","cy":"6.5","r":"1","fill":"currentColor","stroke":"none"}))),h("a",{"href":"https://mail.google.com/mail/?view=cm&fs=1&to=gianchandani.kalyan@gmail.com","target":"_blank","rel":"noopener","aria-label":"Email on Gmail","title":"Email on Gmail","class":"ftic","style":"display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:linear-gradient(90deg,rgba(20,24,40,.22) 0%,rgba(116,185,240,.08) 50%,rgba(255,255,255,.18) 100%);backdrop-filter:blur(2px) saturate(170%) brightness(1.25);-webkit-backdrop-filter:blur(2px) saturate(170%) brightness(1.25);border:1px solid rgba(255,255,255,.32);box-shadow:inset 0 2px 1px -1px rgba(255,255,255,.8),inset 0 -3px 3px -2px rgba(255,255,255,.7),inset -6px 0 6px -4px rgba(255,255,255,.6),inset 6px 0 8px -5px rgba(255,255,255,.25),inset 0 0 14px rgba(116,185,240,.14),0 6px 18px rgba(0,0,0,.3);color:#f4eef0;text-decoration:none"},h("svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linejoin":"round","aria-hidden":"true"},h("rect",{"x":"3","y":"5","width":"18","height":"14","rx":"2"}),h("path",{"d":"M3.5 6.5 12 13l8.5-6.5"}))),h("a",{"class":"ftcv","href":"assets/Kalyan_Gianchandani_CV.pdf","target":"_blank","rel":"noopener","style":"display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:600;color:#74b9f0;background:linear-gradient(90deg,rgba(20,24,40,.22) 0%,rgba(116,185,240,.08) 50%,rgba(255,255,255,.18) 100%);backdrop-filter:blur(2px) saturate(170%) brightness(1.25);-webkit-backdrop-filter:blur(2px) saturate(170%) brightness(1.25);border:1px solid rgba(116,185,240,.55);box-shadow:inset 0 2px 1px -1px rgba(255,255,255,.8),inset 0 -3px 3px -2px rgba(255,255,255,.7),inset -6px 0 6px -4px rgba(255,255,255,.6),inset 6px 0 8px -5px rgba(255,255,255,.25),inset 0 0 14px rgba(116,185,240,.14),0 6px 18px rgba(0,0,0,.3);padding:11px 22px;border-radius:980px;text-decoration:none;min-height:44px;box-sizing:border-box"},"Download CV ↓"))," ")," ",h("div",{"style":"padding:16px 0 28px;border-top:1px solid #2c262a;font-size:12px;color:#776d72"},"© 2026 Kalyan Gianchandani · Pune, India")," "))," ")," ");};
Component.defaultProps={"caseId":"ultra"};
return Component;})();
window.__C["Page"]=(function(){

class Component extends DCLogic {
  renderVals() { return {}; }
}

Component.prototype.__tpl=function(S0){return h(Fragment,null," ",h("div",{"style":"width:100%;background:#141113"}," ",h(window.__C["Case"],{"caseId":"bp"})," ")," ");};
Component.defaultProps={};
return Component;})();
preact.render(h(window.__C.Page,{}),document.getElementById('root'));