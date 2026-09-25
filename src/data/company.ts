import { ServicePackage, BroaderCapability, TeamMember, CaseStudy, ProcessStep, FAQItem } from '../types';

export const COMPANY_INFO = {
  legalName: 'Vanguard Tech Pty.(Ltd)',
  tradingName: 'Vanguard Tech Pty.(Ltd)',
  shortName: 'Vanguard Tech',
  registrationNumber: 'K2026516671',
  tagline: 'Build Beyond Limits',
  phone: '068 075 6718',
  internationalPhone: '+27680756718',
  email: 'info@vanguardtech.co.za',
  salesEmail: 'mpumelelo@vanguardtech.co.za',
  location: 'Johannesburg, Gauteng, South Africa',
  serviceArea: 'National South African Coverage & International Clients',
  officeHours: 'Monday – Friday: 08:00 – 17:00 (SAST GMT+2)',
  foundedYear: '2026',
  whatsappNumber: '27680756718',
  whatsappDirectUrl: 'https://wa.me/27680756718?text=Hello%20Vanguard%20Tech%20Pty.(Ltd),%20I%20would%20like%20to%20enquire%20about%20your%20digital%20solutions.',
};

export const PACKAGES: ServicePackage[] = [
  {
    id: 'starter-launch',
    tier: 'Basic',
    name: 'Starter Launch',
    tagline: 'Essential digital presence engineered with speed and professional finesse.',
    idealFor: 'Startups, sole proprietors, or small businesses needing a high-credibility online footprint.',
    onceOffPrice: 'R4,500 – R5,500',
    priceNote: 'Once-off investment',
    ongoingSupport: 'Includes monthly maintenance & technical support',
    highlight: 'Turn visitors into clients with an ultra-responsive launch site.',
    features: [
      'Single-page landing page or simple 3-page brochure site',
      'Modern, mobile-first responsive architecture',
      'Interactive contact form & Google Maps integration',
      'Monthly maintenance & technical support included',
      'Fast turnaround & SSL certificate configuration',
      'Direct WhatsApp and call-to-action click triggers',
      'Search engine indexing readiness'
    ],
    deliverables: [
      'Single-page landing page or 3-page brochure architecture',
      'Mobile & desktop responsive visual layout',
      'Contact lead capture form connected to email',
      'Google Maps SA location embed',
      'Monthly maintenance & uptime monitoring'
    ]
  },
  {
    id: 'growth-engine',
    tier: 'Standard',
    name: 'Growth Engine',
    tagline: 'Comprehensive multi-page digital platform built to acquire and convert high-intent customers.',
    idealFor: 'Growing businesses ready to scale their brand authority and organic search visibility.',
    onceOffPrice: 'R6,000 – R9,500',
    priceNote: 'Once-off investment',
    ongoingSupport: 'R750 – R1,200/month after month 3',
    badge: 'Most Popular',
    popular: true,
    highlight: 'Complete 6–8 page conversion ecosystem with 3 months included maintenance.',
    features: [
      '6–8 custom designed pages (Home, Services, About, Portfolio, Contact, etc.)',
      'Core SEO setup (meta data, open graph, sitemap, Google Search Console)',
      'Rigorous brand alignment tailored to your corporate visual identity',
      '3 Months of proactive maintenance & updates included',
      'High-speed CDN hosting architecture & asset compression',
      'Interactive lead-generation triggers & inquiry forms',
      'Google Analytics 4 & conversion tracking configuration'
    ],
    deliverables: [
      '6–8 bespoke content-optimized pages',
      'Comprehensive Core SEO structure & schema setup',
      'Brand style integration with polished typography & iconography',
      '3 Months complimentary technical maintenance & SLA support',
      'Performance audit ensuring sub-2-second load speeds'
    ]
  },
  {
    id: 'complete-vanguard',
    tier: 'Premium',
    name: 'Complete Vanguard Solution',
    tagline: 'Enterprise-grade custom web or e-commerce solution engineered for limitless business scale.',
    idealFor: 'Established enterprises and brands demanding bespoke web apps, e-commerce, or AI automation.',
    onceOffPrice: 'R12,000 – R20,000+',
    priceNote: 'Tailored once-off investment',
    ongoingSupport: 'R1,500 – R3,000/month after month 6',
    badge: 'Enterprise Grade',
    highlight: 'Custom web application or e-commerce store with 6 months included support & backups.',
    features: [
      'Custom website architecture or full-featured e-commerce store',
      'South African payment gateway integration (PayFast, Yoco, Ozow, Peach)',
      'Premium UI/UX engineering with micro-interactions & fluid animations',
      'Full digital branding toolkit and vector asset export package',
      '6 Months dedicated support, scheduled backups & vulnerability patching',
      'Advanced SEO, speed caching & database optimization',
      'AI automation readiness & third-party API webhooks integration'
    ],
    deliverables: [
      'Bespoke web application or high-converting e-commerce storefront',
      'SA payment gateways, courier shipping & invoice automation',
      'Complete digital branding kit and design system components',
      '6 Months premium SLA maintenance, continuous backups & security audits',
      'Priority technical support line with CTO oversight'
    ]
  }
];

export const BROADER_CAPABILITIES: BroaderCapability[] = [
  {
    title: 'Custom Website Engineering',
    description: 'High-speed, tailor-made digital experiences built without bloated templates. Every element is designed to convert visitors into lasting client accounts.',
    icon: 'Globe',
    benefits: ['Sub-2s page load speeds', '100% responsive across devices', 'Clean semantic code for top Google rankings'],
    useCases: ['Corporate portals', 'Professional service firms', 'Consulting & B2B brands']
  },
  {
    title: 'E-Commerce Infrastructure',
    description: 'Robust online storefronts built with seamless South African checkout integrations, automated inventory, and frictionless customer payment journeys.',
    icon: 'ShoppingCart',
    benefits: ['PayFast, Yoco, Ozow & Peach Payments ready', 'Automated shipping & Courier Guy / Fastway rates', 'Frictionless one-click mobile checkout'],
    useCases: ['D2C retail brands', 'B2B wholesale order portals', 'Digital subscription businesses']
  },
  {
    title: 'AI Automation Systems',
    description: 'Practical artificial intelligence pipelines that automate client lead triage, customer queries, proposal generation, and repetitive administrative workflows.',
    icon: 'Cpu',
    benefits: ['24/7 intelligent customer inquiry handling', 'Seamless WhatsApp & CRM webhook syncing', 'Drastic reduction in manual operating overhead'],
    useCases: ['Customer service automation', 'Lead qualification bots', 'Automated document processing']
  },
  {
    title: 'Technical Architecture & Cloud',
    description: 'Solid backend foundations, secure server configurations, database design, and high-availability cloud hosting tailored to prevent downtime.',
    icon: 'Layers',
    benefits: ['99.9% uptime reliability', 'Bank-grade SSL & data encryption', 'Scalable architecture ready for traffic surges'],
    useCases: ['High-traffic platforms', 'Data-sensitive business systems', 'Multi-tenant applications']
  },
  {
    title: 'Long-Term Maintenance & SLAs',
    description: 'Proactive software updates, automated off-site backups, security patching, and on-demand content updates so your digital assets remain protected.',
    icon: 'ShieldCheck',
    benefits: ['Zero-stress technical upkeep', 'Guaranteed response time SLAs', 'Regular performance and security audits'],
    useCases: ['Ongoing website retainers', 'E-commerce security compliance', 'Critical business systems']
  }
];

export const FOUNDERS: TeamMember[] = [
  {
    name: 'Mpumelelo Mabaso',
    role: 'Chief Executive Officer (CEO) & Co-Founder',
    title: 'Chief Executive Officer & Co-Founder',
    focus: 'Commercial Strategy, Client Partnerships & Corporate Compliance',
    responsibilities: [
      'Strategic leadership and corporate vision alignment',
      'Client acquisition, consultative scoping, and account management',
      'Contractual transparency, invoicing, and financial management',
      'Ensuring strict statutory compliance and client satisfaction'
    ],
    bio: 'Mpumelelo drives the commercial trajectory and strategic growth of Vanguard Tech Pty.(Ltd). With deep expertise in client acquisition and executive relationship management, he ensures every project aligns with tangible commercial objectives, transparent billing, and dedicated long-term partnership for South African businesses.',
    imageAlt: 'Mpumelelo Mabaso, CEO and Co-Founder of Vanguard Tech Pty.(Ltd)'
  },
  {
    name: 'Siphiwe Tlhapane',
    role: 'Chief Technology Officer (CTO) & Co-Founder',
    title: 'Chief Technology Officer & Co-Founder',
    focus: 'Technical Architecture, Systems Engineering & Product Delivery',
    responsibilities: [
      'End-to-end technical architecture and software engineering standards',
      'Spearheading website, e-commerce, and bespoke AI automation builds',
      'Infrastructure reliability, cloud security, and code quality assurance',
      'Technical delivery oversight and post-launch maintenance architecture'
    ],
    bio: 'Siphiwe leads the technical vision, systems engineering, and technological standards at Vanguard Tech Pty.(Ltd). He architects scalable web systems, high-converting e-commerce ecosystems, and AI automation pipelines that eliminate operational friction and deliver dependable, high-speed performance for our clients.',
    imageAlt: 'Siphiwe Tlhapane, CTO and Co-Founder of Vanguard Tech Pty.(Ltd)'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-aurora-logistics',
    title: 'Aurora Freight & Logistics',
    client: 'Aurora Supply Chain Group',
    category: 'Corporate Web',
    industry: 'Transport & Cross-Border Logistics (Gauteng / Durban)',
    summary: 'A high-credibility corporate website overhaul with real-time quote calculators and fleet showcase.',
    challenge: 'Aurora had an outdated, slow website that failed to reflect their 40-vehicle fleet and multi-million rand cross-border operations, leading to lost enterprise tenders.',
    solution: 'Engineered a modern 8-page corporate web portal featuring an instant freight estimation tool, WhatsApp dispatch integration, and core SEO targeting commercial freight terms.',
    metrics: [
      { label: 'Corporate Inquiries', value: '+140%' },
      { label: 'Page Load Speed', value: '1.2s' },
      { label: 'Tender Lead Conversions', value: '3.4x' }
    ],
    technologies: ['Next.js Architecture', 'Tailwind CSS', 'Google Maps Fleet API', 'Cloudflare CDN'],
    deliverables: ['Custom 8-Page Corporate Site', 'Freight Rate Estimator', 'Dispatch WhatsApp Integration', 'Core SEO & Analytics'],
    testimonial: {
      quote: 'Vanguard Tech transformed how corporate clients perceive our company. The freight estimation tool alone generates qualified leads every single week.',
      author: 'K. Naidoo',
      title: 'Operations Director, Aurora Freight'
    }
  },
  {
    id: 'case-vanguard-kalahari-artisans',
    title: 'Kalahari Crafted Apparel',
    client: 'Kalahari Goods SA',
    category: 'E-Commerce',
    industry: 'Premium South African Retail & Leatherwork',
    summary: 'Bespoke e-commerce storefront with local payment gateways (PayFast & Yoco) and automated courier dispatch.',
    challenge: 'The client was losing sales due to clunky overseas payment checkout flows, high cart abandonment rates on mobile devices, and manual invoice generation.',
    solution: 'Built a lightweight, ultra-responsive storefront with seamless South African checkout integrations, automated Courier Guy tracking, and one-tap mobile checkout.',
    metrics: [
      { label: 'Mobile Checkout Conversion', value: '+78%' },
      { label: 'Cart Abandonment Drop', value: '-35%' },
      { label: 'Avg Order Value (ZAR)', value: 'R1,850' }
    ],
    technologies: ['Modern E-Commerce Engine', 'PayFast & Yoco Gateways', 'Courier Guy API', 'Automated Invoicing'],
    deliverables: ['Custom E-Commerce Storefront', 'Multi-Gateway Checkout', 'Inventory & Shipping Sync', 'Customer Portal'],
    testimonial: {
      quote: 'Our online sales doubled within the first 60 days of launching. The local payment integration and mobile speed have been a total game-changer for our brand.',
      author: 'L. Van Der Merwe',
      title: 'Founder, Kalahari Crafted'
    }
  },
  {
    id: 'case-nexus-legal-advisory',
    title: 'Nexus Commercial Law Advisory',
    client: 'Nexus Legal (Pty) Ltd',
    category: 'Corporate Web',
    industry: 'Legal & Corporate Compliance (Sandton, JHB)',
    summary: 'Sophisticated corporate practice site highlighting legal services, retainer packages, and secure consultation intake.',
    challenge: 'Nexus required an authoritative, modern digital presence to attract high-net-worth commercial clients and convey their specialized regulatory expertise.',
    solution: 'Designed an elegant, dark-navy branded portal with structured practice area overviews, automated consultation booking, and downloadable compliance whitepapers.',
    metrics: [
      { label: 'Consultation Bookings', value: '+92%' },
      { label: 'Average Time on Site', value: '3m 45s' },
      { label: 'Google Search Rank', value: 'Page 1' }
    ],
    technologies: ['High-Performance TypeScript', 'Calendly Integration', 'Document Management', 'Enterprise Security'],
    deliverables: ['Bespoke 7-Page Law Firm Platform', 'Client Intake Workflow', 'Knowledge Base & Case Notes', 'SLA Maintenance Retainer'],
    testimonial: {
      quote: 'Vanguard delivered our website on time, exactly within budget, and with impeccable attention to our corporate branding guidelines. Truly professional partners.',
      author: 'Adv. S. Dlamini',
      title: 'Managing Partner, Nexus Advisory'
    }
  },
  {
    id: 'case-apex-ai-workflow',
    title: 'Apex Financial Lead AI Assistant',
    client: 'Apex Capital Partners',
    category: 'AI & Automation',
    industry: 'Financial Advisory & Wealth Planning',
    summary: 'Automated 24/7 client triage pipeline connecting inbound web inquiries directly to WhatsApp and CRM.',
    challenge: 'Advisors were overwhelmed with unqualified phone calls while high-intent after-hours leads went unanswered for 12+ hours.',
    solution: 'Deployed an intelligent AI inquiry routing assistant that pre-qualifies potential investment leads, checks initial budget brackets, and schedules verified appointments.',
    metrics: [
      { label: 'Response Time', value: '<30 secs' },
      { label: 'Qualified Lead Ratio', value: '+115%' },
      { label: 'Staff Hours Saved/Wk', value: '18 hrs' }
    ],
    technologies: ['Gemini AI Intelligence', 'WhatsApp Business API', 'CRM Webhook Automation', 'Cloud Security'],
    deliverables: ['Intelligent Lead Triage Bot', 'WhatsApp Webhook Connector', 'Automated Calendar Sync', 'Executive Analytics Dashboard'],
    testimonial: {
      quote: 'We now capture and qualify leads while we sleep. Siphiwe and Mpumelelo understood our exact operational problem and engineered the perfect technical remedy.',
      author: 'M. Botha',
      title: 'Head of Operations, Apex Capital'
    }
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Strategic Scoping',
    subtitle: 'Uncovering your commercial goals, audience, and functional requirements.',
    duration: 'Day 1 – 3',
    description: 'We meet via call or in-person to map your company objectives, target market, branding guidelines, and essential functional integrations (forms, e-commerce, or AI automation).',
    clientActions: 'Share brand assets, existing content, and answer our targeted discovery questionnaire.',
    vanguardDeliverables: [
      'Comprehensive Project Scope & Roadmap',
      'Technical Architecture Blueprint',
      'Fixed-Price Transparent Quotation & SLA Terms'
    ]
  },
  {
    number: '02',
    title: 'UI/UX Architecture & Prototyping',
    subtitle: 'Crafting modern, intuitive wireframes and pixel-perfect visual layouts.',
    duration: 'Day 4 – 8',
    description: 'Our team crafts clean, conversion-focused wireframes and polished interface mockups adhering strictly to Vanguard’s technical design standards and your brand identity.',
    clientActions: 'Review the interactive visual prototypes and provide consolidated feedback.',
    vanguardDeliverables: [
      'High-Fidelity Mobile & Desktop Designs',
      'Conversion Architecture & User Journey Map',
      'Asset Palette, Typography & Component Kit'
    ]
  },
  {
    number: '03',
    title: 'Agile Engineering & Development',
    subtitle: 'Writing clean, high-performance code with modern frameworks.',
    duration: 'Day 9 – 16',
    description: 'Led by our CTO Siphiwe Tlhapane, we translate approved layouts into production code. We implement responsive styling, lightning-fast navigation, database hooks, and local payment gateways.',
    clientActions: 'Access a private staging link to test live previews in real time.',
    vanguardDeliverables: [
      'Production-Grade TypeScript Web Platform',
      'Payment Gateway & API Integration',
      'Lead Capture & Notification Workflows'
    ]
  },
  {
    number: '04',
    title: 'Testing, Core SEO & Deployment',
    subtitle: 'Rigorous cross-device testing, security hardening, and live launch.',
    duration: 'Day 17 – 20',
    description: 'We execute speed optimization, cross-browser compatibility checks on mobile and desktop, SSL certification, Google Search Console registration, and DNS migration.',
    clientActions: 'Final sign-off and domain access coordination.',
    vanguardDeliverables: [
      'Live Production Deployment',
      'SSL Security Certificate & HTTPS Configuration',
      'Core SEO Audit & Google Indexing Setup',
      'Handover Documentation & Admin Walkthrough'
    ]
  },
  {
    number: '05',
    title: 'Proactive Maintenance & Growth',
    subtitle: 'Ensuring 99.9% uptime, regular updates, and long-term technical support.',
    duration: 'Ongoing',
    description: 'We do not abandon you after launch. We monitor uptime, execute offsite backups, apply security patches, and provide dedicated support retainers so you can focus on building your business.',
    clientActions: 'Submit content tweaks or feature requests to your dedicated Vanguard support line.',
    vanguardDeliverables: [
      'Monthly Maintenance & Performance Checks',
      'Offsite Backups & Security Patching',
      'Priority Support Line (Phone & WhatsApp)',
      'Quarterly Digital Growth Recommendations'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What are the exact costs for your website packages?',
    category: 'Pricing',
    answer: 'We believe in 100% transparent pricing for South African businesses. Our Starter Launch is R4,500 – R5,500 once-off. Our Growth Engine is R6,000 – R9,500 once-off (with 3 months included maintenance, then R750 – R1,200/month after month 3). Our Complete Vanguard Solution is R12,000 – R20,000+ once-off (with 6 months included support & backups, then R1,500 – R3,000/month after month 6).'
  },
  {
    question: 'How long does it take from discovery to live launch?',
    category: 'Process',
    answer: 'Starter Launch sites are typically delivered within 5 to 7 business days. The Standard Growth Engine takes 2 to 3 weeks. Custom web platforms, e-commerce stores, and AI automation systems take between 3 to 5 weeks depending on custom integrations.'
  },
  {
    question: 'Can you integrate South African payment gateways like PayFast, Yoco, or Ozow?',
    category: 'Hosting & Tech',
    answer: 'Yes, absolutely. We specialize in South African e-commerce infrastructure. We integrate PayFast, Yoco, Ozow (instant EFT), Peach Payments, and automated courier APIs such as The Courier Guy and Fastway.'
  },
  {
    question: 'What happens after the website goes live? Who manages updates?',
    category: 'Support',
    answer: 'All our packages include dedicated post-launch support. Starter Launch includes monthly maintenance. Growth Engine includes 3 months of maintenance, and Complete Vanguard Solution includes 6 months of comprehensive support & backups. After your included period, you can continue on our cost-effective monthly retainers or manage updates with our guidance.'
  },
  {
    question: 'Do I own my website and domain completely?',
    category: 'Hosting & Tech',
    answer: '100% yes. Vanguard Tech Pty.(Ltd) builds on open, modern standards. You retain full ownership of all source code, domain registrations, design assets, and content. We never lock clients into proprietary traps.'
  },
  {
    question: 'How do I get started with Vanguard Tech Pty.(Ltd)?',
    category: 'Process',
    answer: 'You can submit a quote request on this website, send us a direct message on WhatsApp at 068 075 6718, or call CEO Mpumelelo Mabaso directly. We will schedule a brief 15-minute discovery consultation to determine the ideal package for your business.'
  }
];
