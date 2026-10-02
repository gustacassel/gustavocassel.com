import type { SiteContent } from './types';

const role = 'Software developer';

export const en: SiteContent = {
  role,
  bio: 'Software developer building custom systems, integrations and automations for businesses. Working remotely, in English or Portuguese.',
  seo: {
    title: `Gustavo Cassel | ${role}`,
    description: 'Custom software, ERP integration, process automation and IT consulting. Experience with .NET, TOTVS Protheus, Autodesk Vault, Inventor and Microsoft 365. Working remotely.',
  },
  nav: { services: 'Services', experience: 'Experience', about: 'About', contact: 'Contact' },
  ui: {
    skipLink: 'Skip to content',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    openNav: 'Open menu',
    closeNav: 'Close menu',
    primaryNav: 'Primary navigation',
    switchLang: 'Ler em português',
    headerCta: 'Get in touch',
  },
  hero: {
    eyebrow: 'software developer · remote',
    title: 'I build the systems your company runs on <em>every day.</em>',
    summary: 'Custom software, integrations and automations for companies that want to stop depending on spreadsheets and rework. In the browser, on the desktop or inside your ERP.',
    primaryCta: 'Talk about a project',
    secondaryCta: 'See services',
  },
  code: {
    file: 'Gustavo.cs',
    props: [
      ['Stack', '.NET, SQL, Azure'],
      ['WorksFrom', 'anywhere'],
      ['Solves', 'anything software'],
    ],
  },
  services: {
    kicker: '01 / Services',
    title: 'What I <em>do.</em>',
    intro: 'From a brand-new system to fixing the one you already have: if it involves software, let’s talk.',
    items: [
      {
        icon: 'app',
        title: 'Custom software',
        description: 'Web, desktop or in-app solutions built around your company’s process, not the other way around.',
      },
      {
        icon: 'link',
        title: 'System integration',
        description: 'I connect your ERP, PDM, Microsoft 365 and other tools so information flows without duplicate records or spreadsheets in between.',
      },
      {
        icon: 'repeat',
        title: 'Process automation',
        description: 'Manual, repetitive tasks become automatic routines, with a record of everything that was done.',
      },
      {
        icon: 'file',
        title: 'Reports and documents',
        description: 'Reports, labels and documents your current system doesn’t deliver, generated straight from the data.',
      },
      {
        icon: 'box',
        title: 'Engineering automation',
        description: 'Add-ins for Autodesk Inventor and Vault: design validation, standardization and hand-off to the ERP.',
      },
      {
        icon: 'compass',
        title: 'IT consulting',
        description: 'I help you choose, configure, replace or consolidate tools, and keep Microsoft 365 organized and secure.',
      },
    ],
  },
  platforms: {
    kicker: '02 / Platforms',
    title: 'Platforms I know <em>inside out.</em>',
    intro: 'Beyond building software, I configure and maintain the tools your company already uses.',
    items: [
      {
        name: 'Protheus',
        vendor: 'TOTVS · ERP',
        description: 'Took part in rolling it out when migrating from the previous ERP. Today I configure, customize and integrate it.',
      },
      {
        name: 'Vault',
        vendor: 'Autodesk · PDM',
        description: 'PDM rollout, configuration and maintenance.',
      },
      {
        name: 'Inventor',
        vendor: 'Autodesk · 3D CAD',
        description: 'Configuration, standards and add-ins.',
      },
      {
        name: 'Microsoft 365',
        vendor: 'Microsoft · Azure',
        description: 'Users, Entra ID, SharePoint, security and governance.',
      },
    ],
  },
  process: {
    kicker: '03 / Process',
    title: 'How I <em>work.</em>',
    steps: [
      { title: 'Understand', description: 'I talk to the people who run the process every day, not just whoever asked for it.' },
      { title: 'Propose', description: 'You get a clear proposal: what will be done, the timeline and the cost.' },
      { title: 'Build', description: 'Short, frequent deliveries, so you see it working early and can adjust along the way.' },
      { title: 'Support', description: 'After delivery, I keep supporting and improving whatever is needed.' },
    ],
  },
  experience: {
    kicker: '04 / Experience',
    title: 'From technical drawing to <em>software.</em>',
    intro: 'Almost five years at RGO Máquinas, where I went from technical drawing to the person the company calls when it comes to software.',
    link: 'Full profile on LinkedIn',
    items: [
      {
        company: 'RGO Máquinas',
        location: 'Guaporé, Brazil',
        roles: [
          { title: 'Mid-level Developer', dates: 'Jul 2023 to present' },
          { title: 'Junior IT Developer', dates: 'Nov 2022 to Jul 2023' },
          { title: 'Technical Drafter', dates: 'Dec 2021 to Nov 2022' },
        ],
        note: 'Internal systems, ERP integrations, engineering automation and the company’s Microsoft 365 environment.',
      },
      {
        company: 'Instituto Infnet',
        roles: [{ title: 'B.Eng. Software Engineering', dates: 'Since Aug 2023' }],
        note: 'A degree focused on architecture, microservices and DevOps.',
      },
      {
        company: 'University of Caxias do Sul',
        location: 'Caxias do Sul, Brazil',
        roles: [{ title: 'Mechanical Engineering', dates: '2021 to 2022' }],
        note: 'Two years of coursework before moving into software.',
      },
    ],
    certsTitle: 'Certifications',
    certs: [
      'Learning C#',
      'Learning SQL Programming',
      'Programming Foundations: Databases',
      'Become a RESTful API Developer',
      'Career Essentials in Software Development',
    ],
  },
  stack: {
    kicker: '05 / Stack',
    title: 'Everyday <em>tools.</em>',
    groups: [
      { label: 'Languages', items: ['C#', 'SQL', 'ADVPL / TLPP', 'PowerShell', 'Java', 'TypeScript'] },
      { label: 'Frameworks', items: ['.NET', 'ASP.NET', 'Blazor', 'Entity Framework', 'Windows Forms', 'Spring Boot'] },
      { label: 'Databases', items: ['SQL Server', 'Oracle', 'PostgreSQL'] },
      { label: 'Cloud', items: ['Azure', 'Microsoft 365', 'Entra ID'] },
    ],
  },
  about: {
    kicker: '06 / About me',
    title: 'Nice to meet you, <em>I’m Gustavo.</em>',
    paragraphs: [
      'I’m from Serafina Corrêa, in southern Brazil. I started out in manufacturing doing technical drawing, spent two years in mechanical engineering and found my place in software. Today I build systems and take care of IT. I enjoy studying architecture and good practices, and making systems simpler to maintain.',
      'Outside of code, I’m a musician. I’ve played slide trombone for almost eight years in the municipal band and the orchestra, and every now and then I get called to play at events. I’ve also been a gamer since I was a kid, a hobby I never dropped.',
    ],
    facts: [
      { emoji: '📍', label: 'Serafina Corrêa, Brazil' },
      { emoji: '💬', label: 'English and Portuguese' },
      { emoji: '🎺', label: 'Musician' },
      { emoji: '🎮', label: 'Gamer' },
    ],
  },
  contact: {
    kicker: 'Contact',
    title: 'Got a process that takes <em>too much work?</em>',
    body: 'Tell me about the problem. I work remotely, in Brazil and abroad, in English or Portuguese.',
    cta: 'Message me on LinkedIn',
  },
  footer: {
    tagline: 'Custom systems, integrations and automations.',
    backToTop: 'Back to top',
  },
};
