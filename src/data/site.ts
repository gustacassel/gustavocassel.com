/**
 * Dados compartilhados entre os idiomas e ponto de entrada do conteúdo.
 * Os textos de cada idioma ficam em pt.ts e en.ts.
 */

import type { Lang, SiteContent } from './types';
import { pt } from './pt';
import { en } from './en';

export type { Lang, SiteContent } from './types';

export const template = {
  name: 'LatentFolio',
  creator: 'Dharani Eswaramurthi',
  creatorUrl: 'https://github.com/Dharani-Eswaramurthi/latentfolio',
};

export const profile = {
  name: 'Gustavo Cassel',
  shortName: 'Gustavo',
  initials: 'GC',
  location: 'Serafina Corrêa, RS',
  company: 'RGO Máquinas',
  github: 'https://github.com/gustacassel',
  linkedin: 'https://www.linkedin.com/in/gustacassel/',
  instagram: 'https://www.instagram.com/gustacassel/',
};

export const socialLinks = [
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: profile.github, icon: 'github' },
  { label: 'Instagram', href: profile.instagram, icon: 'instagram' },
] as const;

export const languages: Record<Lang, { label: string; htmlLang: string; ogLocale: string }> = {
  pt: { label: 'PT', htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
  en: { label: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
};

export const langs = Object.keys(languages) as Lang[];

const content: Record<Lang, SiteContent> = { pt, en };

export const getContent = (lang: Lang) => content[lang];

export const routes = {
  home: (lang: Lang) => (lang === 'pt' ? '/' : '/en'),
  section: (lang: Lang, id: string) => `${lang === 'pt' ? '/' : '/en'}#${id}`,
};

/** Mapa idioma → caminho da mesma página em cada idioma, usado no hreflang e na troca de idioma. */
export type Alternates = Record<Lang, string>;

export const homeAlternates: Alternates = { pt: routes.home('pt'), en: routes.home('en') };
