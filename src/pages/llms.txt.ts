import type { APIRoute } from 'astro';
import { getContent, profile, socialLinks } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const copy = getContent('en');
  const list = (items: string[]) => items.map((item) => `- ${item}`).join('\n');
  const services = list(copy.services.items.map((item) => `${item.title}: ${item.description}`));
  const platforms = list(copy.platforms.items.map((item) => `${item.name} (${item.vendor}): ${item.description}`));
  const profiles = list(socialLinks.map((link) => `[${link.label}](${link.href})`));
  const body = `# ${profile.name}\n\n> ${copy.bio}\n\n${profile.name} is a ${copy.role.toLowerCase()} based in ${profile.location}, Brazil, available for freelance projects worldwide.\n\nThe site is available in Portuguese (${new URL('/', site)}) and English (${new URL('/en', site)}).\n\n## Services\n\n${services}\n\n## Platforms\n\n${platforms}\n\n## Profiles\n\n${profiles}\n`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
