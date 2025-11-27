import { 
  Code, 
  FileText, 
  Megaphone, 
  Palette,
  MessageSquare,
  Hotel,
  Building,
  Database,
  Smile,
  HeartHandshake,
} from 'lucide-react';
import { CompanyInfo, ServiceItem, NavItem, CaseStudy } from './types';

// --- JAPANESE DATA ---

export const COMPANY_INFO_JP: CompanyInfo = {
  name: "ジムサクラボ",
  englishName: "jimusaku lab, LLC",
  representative: "代表社員　西出 麻子",
  address: "〒143-0023 東京都大田区山王１丁目３１−１５ ツィンビル 301",
  established: "2025年11月",
  domain: "jimusaku-lab.com",
  email: "info@jimusaku-lab.com",
  businessItems: [
    "AI秘書によるお仕事の簡素化",
    "あなた専用の業務システム開発",
    "事務作業の整理・代行",
    "集客のお手伝い",
    "経営者の「愚痴」聞き役"
  ]
};

export const SERVICES_JP: ServiceItem[] = [
  {
    id: "consulting",
    title: "AI秘書導入・相談",
    description: "「何から手をつければいいかわからない」でも大丈夫。まずはあなたの隣で、お仕事の悩みをじっくり聞きます。",
    icon: HeartHandshake,
    features: [
      "まずは「愚痴」や「困りごと」を聞くことから",
      "難しい言葉は使いません。小学生でもわかる説明",
      "あなたの秘密は100%守ります",
      "導入した後も、ずっと隣で支えます"
    ],
    process: [
      { step: "01", title: "お茶飲み話", desc: "リラックスして、普段の仕事の悩みや愚痴をお聞かせください。" },
      { step: "02", title: "整理整頓", desc: "絡まった糸をほぐすように、やるべきことを紙に書いて整理します。" },
      { step: "03", title: "ご提案", desc: "「これなら楽になる！」と思える、あなただけのAI秘書をご提案。" },
      { step: "04", title: "二人三脚", desc: "使いこなせるようになるまで、何度でも丁寧にサポートします。" }
    ]
  },
  {
    id: "system-dev",
    title: "あなた専用システム",
    description: "市販のソフトは難しすぎる…。そんなあなたのために、必要なボタンだけがついた、シンプルな道具を作ります。",
    icon: Code,
    features: [
      "ボタン一つで仕事が終わるシンプルさ",
      "今のやり方を変えずに、道具の方を合わせます",
      "困ったときはすぐに直せる「かかりつけ医」のような安心感",
      "難しい説明書はいりません"
    ],
    process: [
      { step: "01", title: "理想を聞く", desc: "「もっとこうしたい」「ここが面倒」という希望を全部吐き出してください。" },
      { step: "02", title: "設計図", desc: "専門用語は使いません。絵や図を見ながら、完成形をイメージします。" },
      { step: "03", title: "手作り", desc: "熟練の職人が、あなたのためだけにシステムを組み立てます。" },
      { step: "04", title: "試運転", desc: "実際に触ってみて、「これなら使える！」となるまで調整します。" }
    ]
  },
  {
    id: "backoffice",
    title: "事務の丸投げ・代行",
    description: "請求書やデータ入力、面倒なことは全部AI秘書にお任せ。あなたは、経営者としての仕事に集中してください。",
    icon: FileText,
    features: [
      "AI秘書がミスなく高速で処理します",
      "急な退職の心配ゼロ。24時間365日働けます",
      "機密情報は100%守ります",
      "毎月の面倒なレポートも自動で作成"
    ],
    process: [
      { step: "01", title: "業務拝見", desc: "今どうやって仕事をしているか、そのまま見せてください。" },
      { step: "02", title: "受け渡し", desc: "私たちが作業を引き取るための準備をします。手間はかけさせません。" },
      { step: "03", title: "お試し", desc: "まずは少しだけ任せてみて、安心できるか確認してください。" },
      { step: "04", title: "お任せ", desc: "あとは自動運転。完了報告を待つだけでOKです。" }
    ]
  },
  {
    id: "marketing",
    title: "集客のお手伝い",
    description: "「もっとお客さんに来てほしい」を叶えるために。インターネットを使った広告や宣伝をお手伝いします。",
    icon: Megaphone,
    features: [
      "SNS（インスタなど）の使い方がわかる",
      "少ない予算でも効果が出る方法をご提案",
      "お店の地図情報の登録も代行",
      "数字が苦手でもわかるように結果を報告"
    ],
    process: [
      { step: "01", title: "作戦会議", desc: "どんなお客様に来てほしいか、一緒に作戦を立てます。" },
      { step: "02", title: "準備", desc: "広告の文章や画像を用意します。AI秘書もお手伝いします。" },
      { step: "03", title: "実行", desc: "実際に広告を出してみます。" },
      { step: "04", title: "改善", desc: "結果を見ながら、「次はこうしよう」と工夫を続けます。" }
    ]
  }
];

export const CASE_STUDIES_JP: CaseStudy[] = [
  {
    id: "case-ai-banner",
    industry: "広告代理店 様",
    title: "AI秘書が、社長の右腕デザイナーに",
    problem: "社長が自分でデザイン修正の指示を出す時間がなく、社員も疲弊。外注費もかさんでいた。",
    solution: "「こんな感じ」と伝えるだけで、AI秘書が7割完成した画像を作成。社長はチェックするだけになり、本来の経営業務に集中できるように。",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI画像作成", "時間の節約", "コスト削減"],
    icon: Palette,
    serviceIds: ["system-dev", "marketing"]
  },
  {
    id: "case-chat-invoice",
    industry: "マーケティング会社 様",
    title: "チャットで話すだけで、請求書が完成",
    problem: "毎月、チャットの履歴を見返しながら手作業で請求書を作るのが大変。ミスも心配だった。",
    solution: "AI秘書がチャットの内容を読み取り、自動で請求書を作成。「これで合ってますか？」と確認してくれるので、OKボタンを押すだけに。",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
    tags: ["チャット連携", "ミスゼロ", "事務の自動化"],
    icon: MessageSquare,
    serviceIds: ["system-dev", "backoffice", "consulting"]
  },
  {
    id: "case-ortho-image",
    industry: "美容クリニック 様",
    title: "お客様の「未来の笑顔」を見せる",
    problem: "治療後のイメージ画像が機械的で、お客様にワクワクしてもらえなかった。",
    solution: "AI秘書が、お客様それぞれの顔立ちに合わせた自然な「未来の笑顔」を作成。カウンセリングで感動され、契約が増えました。",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    tags: ["接客レベルUP", "売上アップ", "AI画像"],
    icon: Smile,
    serviceIds: ["marketing", "system-dev"]
  },
  {
    id: "case-user-inventory",
    industry: "ホテル・宿泊業 様",
    title: "「あの人のID消した？」の不安解消",
    problem: "システムが多すぎて、退職したスタッフのIDが残ったままになっていないか不安だった。",
    solution: "AI秘書が人事データとシステムを照合し、「このIDは削除して良いですか？」とリストアップ。セキュリティの不安が消えました。",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
    tags: ["セキュリティ", "管理の自動化", "安心安全"],
    icon: Hotel,
    serviceIds: ["system-dev", "consulting", "backoffice"]
  },
  {
    id: "case-realestate-sim",
    industry: "不動産会社 様",
    title: "土地の計算が、一瞬で終わるように",
    problem: "土地の図面を見て電卓を叩くのに何時間もかかり、良い土地を他社に取られてしまうこともあった。",
    solution: "AI秘書が瞬時に計算。「この土地ならこんなビルが建ちます」と提案してくれるので、即決できるようになりました。",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    tags: ["スピードアップ", "チャンスを逃さない", "自動計算"],
    icon: Building,
    serviceIds: ["system-dev", "consulting"]
  },
  {
    id: "case-ses-billing",
    industry: "人材派遣会社 様",
    title: "月末の請求書ストレスからの解放",
    problem: "毎月バラバラな形式で届く勤怠表を目で見て確認し、請求書を作る作業が本当に苦痛だった。",
    solution: "AI秘書がどんな形式の勤怠表も読み取り、請求データを自動作成。毎月の憂鬱な作業がなくなり、社員の笑顔が増えました。",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
    tags: ["PDF読取", "ストレスゼロ", "事務代行"],
    icon: Database,
    serviceIds: ["backoffice", "system-dev"]
  }
];

export const NAV_ITEMS_JP: NavItem[] = [
  { label: 'ホーム', path: '/', hash: '#hero' },
  { label: 'できること', path: '/', hash: '#services' },
  { label: '成功事例', path: '/', hash: '#cases' },
  { label: '会社紹介', path: '/', hash: '#company' },
  { label: 'ご相談', path: '/', hash: '#contact' },
];

// --- ENGLISH DATA ---

export const COMPANY_INFO_EN: CompanyInfo = {
  name: "Jimusaku Lab",
  englishName: "jimusaku lab, LLC",
  representative: "Asako Nishide, CEO",
  address: "301 Twin Bldg, 1-31-15 Sanno, Ota-ku, Tokyo 143-0023",
  established: "November 2025",
  domain: "jimusaku-lab.com",
  email: "info@jimusaku-lab.com",
  businessItems: [
    "Simplifying work with AI Secretaries",
    "Development of custom business systems",
    "Back-office support & organization",
    "Marketing & customer attraction support",
    "A listening ear for business owners' worries"
  ]
};

export const SERVICES_EN: ServiceItem[] = [
  {
    id: "consulting",
    title: "AI Consultation",
    description: "Not sure where to start? That's okay. We sit right beside you and listen to your business challenges first.",
    icon: HeartHandshake,
    features: [
      "We start by listening to your complaints and worries",
      "Simple explanations (no tech jargon)",
      "100% Confidentiality assured",
      "Ongoing support even after implementation"
    ],
    process: [
      { step: "01", title: "Casual Chat", desc: "Relax and tell us about your daily work frustrations." },
      { step: "02", title: "Sorting Out", desc: "We organize your tasks like untangling a knot, writing everything down." },
      { step: "03", title: "Proposal", desc: "We propose an AI Secretary solution that makes you say, 'This makes life easier!'" },
      { step: "04", title: "Partnership", desc: "We support you until you're completely comfortable using it." }
    ]
  },
  {
    id: "system-dev",
    title: "Custom Systems",
    description: "Off-the-shelf software too hard? We build simple tools with only the buttons you need.",
    icon: Code,
    features: [
      "Simple tools where one button does the job",
      "We fit the tool to your workflow, not the other way around",
      "Peace of mind like having a family doctor for your IT",
      "No complex manuals needed"
    ],
    process: [
      { step: "01", title: "Listening", desc: "Tell us everything: 'I want to do this' or 'This is annoying.'" },
      { step: "02", title: "Blueprint", desc: "No jargon. We use drawings to visualize the final result together." },
      { step: "03", title: "Crafting", desc: "Our experts build the system specifically for you." },
      { step: "04", title: "Test Run", desc: "Try it out and we'll tweak it until you say, 'This works!'" }
    ]
  },
  {
    id: "backoffice",
    title: "Back-office Support",
    description: "Invoices, data entry—leave the tedious stuff to your AI Secretary. Focus on being a CEO.",
    icon: FileText,
    features: [
      "AI processes tasks at high speed with zero errors",
      "No worries about sudden resignations. Works 24/365",
      "100% Confidentiality protection",
      "Monthly reports created automatically"
    ],
    process: [
      { step: "01", title: "Observation", desc: "Show us exactly how you do your work right now." },
      { step: "02", title: "Handover", desc: "We prepare to take over the tasks without burdening you." },
      { step: "03", title: "Trial", desc: "Delegate a little first to see if you can trust us." },
      { step: "04", title: "Full Auto", desc: "Then it's autopilot. Just wait for the completion report." }
    ]
  },
  {
    id: "marketing",
    title: "Marketing Support",
    description: "Want more customers? We help with internet advertising and promotion to make that wish come true.",
    icon: Megaphone,
    features: [
      "We understand how to use SNS (like Instagram)",
      "Proposals for effective results on a small budget",
      "We handle map registration for your shop",
      "Simple reports even if you hate numbers"
    ],
    process: [
      { step: "01", title: "Strategy", desc: "We plan together who you want to attract." },
      { step: "02", title: "Prep", desc: "We prepare ad text and images. The AI Secretary helps too." },
      { step: "03", title: "Launch", desc: "We actually publish the advertisements." },
      { step: "04", title: "Improve", desc: "We look at results and tweak for better performance." }
    ]
  }
];

export const CASE_STUDIES_EN: CaseStudy[] = [
  {
    id: "case-ai-banner",
    industry: "Ad Agency",
    title: "AI Secretary becomes the CEO's right-hand designer",
    problem: "The CEO had no time to direct design changes, staff was exhausted, and outsourcing costs were high.",
    solution: "Just by saying 'Like this,' the AI Secretary creates a 70% complete image. The CEO only checks it, focusing on management.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI Images", "Save Time", "Cut Costs"],
    icon: Palette,
    serviceIds: ["system-dev", "marketing"]
  },
  {
    id: "case-chat-invoice",
    industry: "Marketing Firm",
    title: "Invoices done just by chatting",
    problem: "Creating invoices manually by looking back at chat history was a monthly pain. Mistakes were scary.",
    solution: "AI Secretary reads chat logs and auto-creates invoices. It asks 'Is this correct?', and you just press OK.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
    tags: ["Chat Sync", "Zero Errors", "Auto Admin"],
    icon: MessageSquare,
    serviceIds: ["system-dev", "backoffice", "consulting"]
  },
  {
    id: "case-ortho-image",
    industry: "Beauty Clinic",
    title: "Showing customers their 'Future Smile'",
    problem: "Post-treatment simulation images looked robotic and didn't excite customers.",
    solution: "AI Secretary creates natural 'future smiles' tailored to each customer. Counseling success rates went up.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    tags: ["Better Service", "Sales Up", "AI Images"],
    icon: Smile,
    serviceIds: ["marketing", "system-dev"]
  },
  {
    id: "case-user-inventory",
    industry: "Hotel Industry",
    title: "Eliminating the 'Did we delete that ID?' anxiety",
    problem: "Too many systems made it hard to know if resigned staff IDs were properly deleted.",
    solution: "AI Secretary checks HR data against systems and asks, 'Delete this ID?' Security fears vanished.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
    tags: ["Security", "Auto Mgmt", "Safe & Sound"],
    icon: Hotel,
    serviceIds: ["system-dev", "consulting", "backoffice"]
  },
  {
    id: "case-realestate-sim",
    industry: "Real Estate",
    title: "Land calculations finished in an instant",
    problem: "Calculating from land blueprints took hours, causing them to lose good deals to competitors.",
    solution: "AI Secretary calculates instantly. It proposes 'You can build this here,' allowing immediate decisions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    tags: ["Speed Up", "Seize Opportunities", "Auto Calc"],
    icon: Building,
    serviceIds: ["system-dev", "consulting"]
  },
  {
    id: "case-ses-billing",
    industry: "Staffing Agency",
    title: "Freedom from end-of-month billing stress",
    problem: "Checking messy timesheets and making invoices manually was painful every month.",
    solution: "AI Secretary reads any timesheet format and creates billing data. No more monthly blues, just smiles.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
    tags: ["Read PDF", "Zero Stress", "Admin Help"],
    icon: Database,
    serviceIds: ["backoffice", "system-dev"]
  }
];

export const NAV_ITEMS_EN: NavItem[] = [
  { label: 'Home', path: '/', hash: '#hero' },
  { label: 'Services', path: '/', hash: '#services' },
  { label: 'Case Studies', path: '/', hash: '#cases' },
  { label: 'Company', path: '/', hash: '#company' },
  { label: 'Consult', path: '/', hash: '#contact' },
];

// --- UI TEXT DICTIONARY ---

export const UI_TEXT = {
  ja: {
    hero: {
      badge: "守秘義務",
      badgeValue: "100%",
      badgeSuffix: "の安心",
      subtitle: "あなたの味方",
      title: "AI秘書",
      desc: "面倒なことは、全部まかせて。\nあなたのポケットに、最強の右腕を。",
      btnMain: "無料でAI秘書に相談",
      btnSub: "愚痴をこぼしてみる"
    },
    services: {
      label: "Our Services",
      title: "AI秘書ができること",
      desc: "「面倒なことは全部まかせて、やりたいことに集中したい」\nその願い、AIの力と私たちのサポートで叶えます。",
      moreDetails: "More Details",
      cta: "まずは気軽に相談する"
    },
    cases: {
      label: "Case Studies",
      title: "AI秘書との成功物語",
      desc: "「まさか、こんなに楽になるなんて」。\nITが苦手だった経営者様たちが、AI秘書を味方につけて\n「やりたいこと」に集中できるようになったお話です。",
      problem: "悩み",
      solution: "解決",
      nextTitle: "次はあなたの番です",
      nextSub: "無料でAI秘書に相談してみる",
      before: "Before",
      after: "After (AI秘書の効果)"
    },
    company: {
      label: "Company",
      title: "会社概要",
      items: {
        name: "商号",
        englishName: "英文商号",
        rep: "代表社員",
        est: "設立",
        addr: "本店所在地",
        biz: "事業目的"
      }
    },
    contact: {
      label: "Contact",
      title: "愚痴、こぼしてください。",
      desc: "「こんなこと聞いてもいいのかな？」\nそんな遠慮はいりません。\n\n私たちは、あなたの会社の「AI秘書」です。\n休憩室でコーヒーを飲むような感覚で、\n今の悩みや、やりたいことを教えてください。",
      addrLabel: "所在地",
      emailLabel: "メール",
      formTitle: "ご相談フォーム",
      nameLabel: "お名前（ニックネーム可）",
      namePlaceholder: "例：困っている経営者",
      emailLabelForm: "メールアドレス",
      msgLabel: "愚痴・お悩み（自由にどうぞ）",
      msgPlaceholder: "「とにかく事務作業が面倒くさい」「人が足りない」など、ご自由にお書きください。",
      submit: "無料で愚痴をこぼしてみる"
    },
    detail: {
      back: "できること一覧に戻る",
      serviceDetail: "Service Detail",
      features: "サービスの特徴",
      flow: "導入までの流れ",
      related: "関連する事例",
      consultBoxTitle: "このサービスについて相談する",
      consultBoxDesc: "について、「自分の会社でも使える？」と聞いてみませんか？",
      consultBtn: "相談フォームへ",
      ventTitle: "愚痴だけでもOK",
      ventDesc: "「まだ頼むかどうかわからないけど、とりあえず現状を聞いてほしい」\nそんな経営者様からのご連絡もお待ちしています。\n話すだけで頭が整理されることもありますよ。"
    },
    header: {
      cta: "相談する",
      langLabel: "Language:"
    },
    footer: {
      rights: "All Rights Reserved."
    }
  },
  en: {
    hero: {
      badge: "Confidentiality",
      badgeValue: "100%",
      badgeSuffix: "Assured",
      subtitle: "Your Ally",
      title: "AI Secretary",
      desc: "Leave the tedious tasks to us.\nThe strongest right-hand partner in your pocket.",
      btnMain: "Free AI Consultation",
      btnSub: "Vent Your Frustrations"
    },
    services: {
      label: "Our Services",
      title: "What AI Secretary Can Do",
      desc: "\"I want to leave the hassle to someone else and focus on what I want to do.\"\nWe make that wish come true with AI power and our support.",
      moreDetails: "More Details",
      cta: "Feel Free to Consult"
    },
    cases: {
      label: "Case Studies",
      title: "Success Stories",
      desc: "\"I never thought it could be this easy.\"\nStories of business owners who weren't tech-savvy\nbut used AI Secretaries to focus on their passions.",
      problem: "Problem",
      solution: "Solution",
      nextTitle: "You are next",
      nextSub: "Free AI Consultation",
      before: "Before",
      after: "After (Effect of AI Secretary)"
    },
    company: {
      label: "Company",
      title: "Company Profile",
      items: {
        name: "Name",
        englishName: "English Name",
        rep: "Representative",
        est: "Established",
        addr: "Address",
        biz: "Business Items"
      }
    },
    contact: {
      label: "Contact",
      title: "Tell Us Your Worries.",
      desc: "\"Is it okay to ask about this?\"\nDon't hesitate.\n\nWe are your company's \"AI Secretary.\"\nLike having coffee in the break room,\ntell us about your current worries and what you want to do.",
      addrLabel: "Address",
      emailLabel: "Email",
      formTitle: "Consultation Form",
      nameLabel: "Name (Nickname OK)",
      namePlaceholder: "Ex: Troubled CEO",
      emailLabelForm: "Email Address",
      msgLabel: "Worries / Complaints (Free text)",
      msgPlaceholder: "\"Paperwork is annoying,\" \"Not enough staff,\" etc. Please write freely.",
      submit: "Vent for Free"
    },
    detail: {
      back: "Back to Services",
      serviceDetail: "Service Detail",
      features: "Features",
      flow: "Flow to Introduction",
      related: "Related Cases",
      consultBoxTitle: "Consult about this service",
      consultBoxDesc: "Ask us \"Can I use this in my company?\" about ",
      consultBtn: "Go to Form",
      ventTitle: "Just venting is OK",
      ventDesc: "\"I don't know if I'll order yet, but I want you to hear my situation.\"\nWe welcome messages from such business owners.\nJust talking can help organize your thoughts."
    },
    header: {
      cta: "Consult",
      langLabel: "Language:"
    },
    footer: {
      rights: "All Rights Reserved."
    }
  }
};