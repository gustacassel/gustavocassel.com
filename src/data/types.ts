import type { IconName } from '../components/icons';

export type Lang = 'pt' | 'en';

export type ExperienceEntry = {
  company: string;
  location?: string;
  roles: { title: string; dates: string }[];
  note: string;
};

type SectionHead = {
  kicker: string;
  /** html: aceita <em> para o destaque em itálico */
  title: string;
  intro?: string;
};

/**
 * Tudo que muda entre idiomas. Campos marcados como `html` aceitam <br /> e <em>
 * e são renderizados com set:html, então só recebem texto escrito à mão aqui.
 */
export type SiteContent = {
  role: string;
  bio: string;
  seo: { title: string; description: string };
  nav: { services: string; experience: string; about: string; contact: string };
  ui: {
    skipLink: string;
    themeToDark: string;
    themeToLight: string;
    openNav: string;
    closeNav: string;
    primaryNav: string;
    switchLang: string;
    headerCta: string;
  };
  hero: {
    eyebrow: string;
    /** html */
    title: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
  };
  /** Propriedades da classe C# mostrada na janela de código do topo. */
  code: { file: string; props: [name: string, value: string][] };
  services: SectionHead & {
    items: { icon: IconName; title: string; description: string }[];
  };
  platforms: SectionHead & {
    items: { name: string; vendor: string; description: string }[];
  };
  process: SectionHead & {
    steps: { title: string; description: string }[];
  };
  experience: SectionHead & {
    link: string;
    items: ExperienceEntry[];
    certsTitle: string;
    certs: string[];
  };
  stack: SectionHead & {
    groups: { label: string; items: string[] }[];
  };
  about: SectionHead & {
    paragraphs: string[];
    facts: { emoji: string; label: string }[];
  };
  contact: SectionHead & {
    body: string;
    cta: string;
  };
  footer: {
    tagline: string;
    backToTop: string;
  };
};
