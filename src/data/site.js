// Single source of truth for everything shown on the site.
// Edit text/links here; components only render this data.

export const profile = {
  name: 'Anmol Ratan Tiwari',
  role: 'Freelance app & web developer',
  email: 'work.anmolratantiwari@gmail.com',
  whatsapp: '919717047583', // digits only, used for wa.me link
  whatsappDisplay: '+91 97170 47583',
  linkedin: 'https://www.linkedin.com/in/asliratan/',
  github: 'https://github.com/asliRatanCoder',
  location: 'Greater Noida, India (IST, UTC+5:30)',
  availability: 'Available for new projects',
}

export const hero = {
  eyebrow: 'Flutter · Laravel · FastAPI · React · Node.js',
  headline: 'Apps and websites for clinics, and overflow development for agencies.',
  sub:
    'I shipped a healthcare booking app to Google Play, built a WhatsApp booking bot, and launch clinic websites in under a week. Fixed prices, clear timelines, and replies within 24 hours in your time zone.',
  proof: [
    { value: '1', label: 'app live on Google Play' },
    { value: '3', label: 'Flutter apps built' },
    { value: '3', label: 'live sites and web apps' },
    { value: '3', label: 'Salesforce / MuleSoft certifications' },
  ],
}

export const services = [
  {
    id: 'agency',
    title: 'Overflow developer for agencies',
    price: '$25 / hour',
    priceNote: 'white-label, weekly invoice',
    for: 'Web and app agencies with more work than hands.',
    body:
      'You sell and manage the client, I build. Flutter apps, Laravel or FastAPI backends, React front-ends, MuleSoft integrations. Start with a paid 5-hour trial task from your backlog.',
    bullets: [
      'Store-ready Flutter builds, Play Console publishing included',
      'Backend APIs in Laravel, FastAPI or Node.js + TypeScript',
      'Works in your repo, your tickets, your Slack',
      'Paid 5-hour trial before any retainer',
    ],
    cta: 'Ask about a trial task',
  },
  {
    id: 'clinic',
    title: 'Clinic website in 7 days',
    price: 'from $600',
    priceNote: 'fixed price, 50% to start',
    for: 'Dentists, physios, chiropractors, vets and single-doctor practices.',
    body:
      'A fast, mobile-first site that gets patients to book. Built from your existing content, reviewed on a live preview link, and handed over with hosting you own.',
    bullets: [
      'Mobile-first design, loads in under 2 seconds',
      'Online booking or WhatsApp booking button',
      'Google Business Profile and local SEO basics',
      'Editable content, free hosting, no monthly platform fee',
    ],
    cta: 'Get a free homepage mockup',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp booking automation',
    price: 'from $600',
    priceNote: 'fixed price per bot',
    for: 'Clinics, labs, salons and service businesses in the UK, UAE and India.',
    body:
      'Let customers book, get reminders and track a visit inside WhatsApp. Built directly on the Meta WhatsApp Cloud API and connected to your existing booking system or a simple one I set up.',
    bullets: [
      'Menu-driven booking with confirmations and reminders',
      'Connects to your CRM, calendar or backend API',
      'Official Meta Cloud API, your own business number',
      'Handover with docs and 30 days of fixes',
    ],
    cta: 'Discuss a bot for your business',
  },
]

export const work = [
  {
    id: 'blc-customer',
    tag: 'Mobile app · Healthcare',
    title: 'Banj Life Care patient app',
    client: 'Banj Life Care, diagnostic lab, Dehradun',
    image: 'work/blc-customer-home.jpg',
    imageAlt: 'Banj Life Care app home screen showing test catalogue and booking',
    portrait: true,
    problem:
      'Patients booked blood tests by phone. There was no way to book home sample collection, see reports, or know when the collector would arrive.',
    built:
      'A Flutter app with OTP login, test catalogue and cart, home-collection booking with saved addresses, order tracking, report downloads and in-app account deletion. I handled the Play Console listing, policy declarations and Google review. A companion collector app (Microsoft 365 sign-in, job list, sample-collection workflow, report upload) runs on the same design system.',
    result: 'Live on Google Play in the Medical category. Listing, data-safety and policy declarations handled end to end.',
    stack: ['Flutter', 'Firebase Auth', 'Laravel API', '.NET API', 'Play Console'],
    links: [
      { label: 'View on Google Play', href: 'https://play.google.com/store/apps/details?id=com.banjlife.customer' },
    ],
  },
  {
    id: 'whatsapp-bot',
    tag: 'Automation · WhatsApp',
    title: 'WhatsApp booking and tracking bot',
    client: 'Banj Life Care',
    image: 'work/whatsapp-bot.svg',
    imageAlt: 'Illustration of a WhatsApp conversation booking a blood test',
    problem:
      'The lab wanted patients to book and track a home collection without installing an app.',
    built:
      'A Node.js + TypeScript webhook on the Meta WhatsApp Cloud API, no third-party BSP. Menu-driven booking, order tracking, live location sharing to the collector, and prescription photo upload with OCR matching against the test catalogue. A Firebase auth bridge turns the WhatsApp number into a trusted identity for the existing .NET API. Auto-deploys from git to a Linux server.',
    result: 'Booking, tracking and location flows verified end to end on a live number. Now being moved to the lab’s production number.',
    stack: ['Node.js', 'TypeScript', 'WhatsApp Cloud API', 'Firebase Admin', 'Google Vision OCR'],
    links: [{ label: 'Client site: banj.life', href: 'https://banj.life' }],
  },
  {
    id: 'leadhunt',
    tag: 'SaaS · Own product',
    title: 'LeadHunt, lead discovery and cold outreach',
    client: 'Own product',
    image: 'work/leadhunt-site.jpg',
    imageAlt: 'LeadHunt web app screenshot',
    problem:
      'Freelancers and small agencies pay per lead for local business data and then juggle a separate email tool.',
    built:
      'A multi-user SaaS: Google Places discovery, website email scraping, a CRM pipeline, sending from each user’s own mailbox, multi-step follow-up campaigns run by a background scheduler, open and click tracking, and unsubscribe handling built in. FastAPI + React + PostgreSQL, single-image Docker deploy.',
    result: 'Live in production, and the tool I use for my own client outreach.',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Render'],
    links: [{ label: 'Open LeadHunt', href: 'https://leadhunt-v6yu.onrender.com' }],
  },
  {
    id: 'kartik',
    tag: 'Website · Surgeon',
    title: 'Dr. Kartik Thurwal, surgical & gastro care',
    client: 'General, laparoscopic and GI surgeon, Dehradun',
    image: 'work/kartik-site.jpg',
    imageAlt: 'Homepage of Dr. Kartik Thurwal website',
    problem: 'A practising surgeon with no web presence and patients finding him only by word of mouth.',
    built:
      'A lean three-page site: home, about, contact. Plain HTML and CSS with no framework or build step, so it loads instantly and anyone can maintain it. Mobile-first, click-to-call and WhatsApp buttons, hosted free on GitHub Pages.',
    result: 'Live on GitHub Pages.',
    stack: ['HTML', 'CSS', 'GitHub Pages'],
    links: [{ label: 'Visit site', href: 'https://asliratancoder.github.io/kartik-gastro-care/' }],
  },
  {
    id: 'pawanindra',
    tag: 'Website · Rebuild',
    title: 'Dr. Pawanindra Lal, site rebuild',
    client: 'Robotic, laparoscopic and bariatric surgeon, Apollo Hospitals, New Delhi',
    image: 'work/pawanindra-site.jpg',
    imageAlt: 'Homepage of the rebuilt Dr. Pawanindra Lal website',
    problem:
      'The existing site had a template page still live, placeholder text on service pages, broken WhatsApp links, four different phone numbers and no analytics.',
    built:
      'A full rebuild on Eleventy with Decap CMS so the doctor’s team can edit pages without a developer. Content audit and cleanup, one verified phone number, working WhatsApp links, analytics, and a review build for sign-off before the domain cutover.',
    result: 'Review build live for client sign-off; domain cutover scheduled.',
    stack: ['Eleventy', 'Decap CMS', 'GitHub Pages'],
    links: [{ label: 'Preview build', href: 'https://asliratancoder.github.io/pawanindra-lal/' }],
  },
  {
    id: 'speakwise',
    tag: 'Mobile app · AI',
    title: 'SpeakWise, AI English coach',
    client: 'Own product',
    image: 'work/speakwise.svg',
    imageAlt: 'Illustration of the SpeakWise chat with grammar corrections',
    problem: 'Paid English-practice apps are out of reach for most learners in India.',
    built:
      'A Flutter chat app backed by a FastAPI service and a hosted LLM. The learner writes or speaks, the coach replies conversationally and marks grammar, vocabulary and spelling mistakes with a corrected rewrite and a fluency score.',
    result: 'Working prototype on Android; free-tier AI backend with no billing dependency.',
    stack: ['Flutter', 'FastAPI', 'Groq LLM'],
    links: [],
  },
]

export const process = [
  {
    step: '01',
    title: 'A short call or a few emails',
    body: 'You tell me what you need, the deadline and the budget. I tell you honestly whether I am the right fit.',
  },
  {
    step: '02',
    title: 'Fixed quote within 24 hours',
    body: 'Scope, price and timeline in one page. Half to start, half on handover. Hourly for agency retainers.',
  },
  {
    step: '03',
    title: 'Build with a live preview',
    body: 'You get a preview link from day one and a short update every working day. No surprises at the end.',
  },
  {
    step: '04',
    title: 'Handover you own',
    body: 'Source code, hosting and accounts in your name, a walkthrough, and 30 days of fixes included.',
  },
]

export const skills = [
  { group: 'Mobile', items: ['Flutter & Dart', 'Firebase (Auth, FCM)', 'Play Console publishing'] },
  { group: 'Backend', items: ['Laravel (PHP)', 'FastAPI (Python)', 'Node.js + TypeScript', '.NET APIs', 'PostgreSQL / MySQL'] },
  { group: 'Web', items: ['React + Vite', 'Eleventy', 'HTML / CSS', 'Decap CMS'] },
  { group: 'Integrations', items: ['Meta WhatsApp Cloud API', 'MuleSoft Anypoint', 'Salesforce (Apex, Flows)', 'Google Places & Vision'] },
  { group: 'Delivery', items: ['GitHub Actions', 'Docker', 'Render', 'GitHub Pages', 'CloudPanel / Linux'] },
]

export const experience = [
  {
    title: 'Software Engineer',
    company: 'Shineywise Technologies Pvt Ltd',
    period: 'May 2025 – present',
    body: 'Built the Banj Life Care mobile apps, WhatsApp bot and backend integrations end to end. Developed REST APIs and data integrations on MuleSoft Anypoint for real-estate clients and set up CI/CD with GitHub Actions.',
  },
]

export const education = {
  degree: 'B.Tech, Computer Science Engineering',
  institution: 'APJ Abdul Kalam Technical University',
  period: '2020 – 2025',
}

export const certifications = [
  { name: 'Salesforce Certified MuleSoft Developer I', id: '6938206', image: 'Data/Certified MuleSoft Developer- Level 1.png' },
  { name: 'Salesforce Certified MuleSoft Developer II', id: '6984240', image: 'Data/Certified MuleSoft Developer- Level 2.png' },
  { name: 'Salesforce Certified AI Associate', id: '5542616', image: 'Data/Salesforce Certified AI Associate.png' },
]

export const resume = 'Data/Anmol_Ratan_Tiwari_Resume_latest.pdf'
export const photo = 'Data/Profile Picture.jpeg'
