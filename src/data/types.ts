export type Lang = 'pt' | 'en';

export type ExperienceEntry = {
  company: string;
  location?: string;
  marker: string;
  roles: { title: string; dates: string }[];
  note: string;
};

export type ExpertiseEntry = {
  number: string;
  title: string;
  description: string;
  tools: string[];
};

/**
 * Tudo que muda entre idiomas. Campos marcados como `html` aceitam <br /> e <em>
 * e são renderizados com set:html, então só recebem texto escrito à mão aqui.
 */
export type SiteContent = {
  role: string;
  bio: string;
  seo: { title: string; description: string };
  nav: { expertise: string; about: string; contact: string };
  ui: {
    skipLink: string;
    themeToDark: string;
    themeToLight: string;
    openNav: string;
    closeNav: string;
    primaryNav: string;
    mobileNav: string;
    switchLang: string;
    headerCta: string;
    mobileContact: string;
  };
  hero: {
    eyebrow: string;
    location: string;
    lead: string;
    middle: string;
    accent: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    stamp: string;
  };
  demo: {
    file: string;
    live: string;
    run: string;
    runAria: string;
    pipelineAria: string;
    outputTitle: string;
    ready: string;
    statLabels: [string, string, string];
    steps: { title: string; detail: string }[];
    runs: { query: string; values: [string, string, string] }[];
    statusRunning: string;
    statusDone: string;
    orbits: [string, string];
  };
  techStrip: { value: string; label: string }[];
  techStripAria: string;
  expertise: {
    kicker: string;
    /** html */
    title: string;
    intro: string;
    items: ExpertiseEntry[];
  };
  journey: {
    kicker: string;
    /** html */
    title: string;
    intro: string;
    link: string;
    items: ExperienceEntry[];
  };
  builder: {
    kicker: string;
    /** html */
    title: string;
    lead: string;
    body: string;
    spotlight: { label: string; title: string; href: string; cta: string };
    certs: { label: string; title: string; subtitle: string; items: string[] };
    portrait: { label: string; /** html */ title: string; caption: string };
  };
  contact: {
    kicker: string;
    /** html */
    title: string;
    body: string;
    cta: string;
  };
  footer: {
    /** html */
    tagline: string;
    findMe: string;
    credit: string;
    backToTop: string;
  };
};
