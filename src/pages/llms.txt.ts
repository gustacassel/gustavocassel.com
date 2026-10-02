import type { APIRoute } from 'astro';
import { getContent, profile, socialLinks } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const copy = getContent('en');
  const areas = copy.expertise.items
    .map((item) => `- ${item.title}: ${item.description}`)
    .join('\n');
  const profiles = socialLinks.map((link) => `- [${link.label}](${link.href})`).join('\n');
  const body = `# ${profile.name}\n\n> ${copy.bio}\n\n${profile.name} is a ${copy.role} at ${profile.company}, based in ${profile.location}, Brazil.\n\nThe site is available in Portuguese (${new URL('/', site)}) and English (${new URL('/en', site)}).\n\n## Areas\n\n${areas}\n\n## Profiles\n\n${profiles}\n`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
