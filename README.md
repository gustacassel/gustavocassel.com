# gustavocassel.com

Meu portfolio pessoal: projetos, experiência e contato. Feito com [Astro](https://astro.build), em português (`/`) e inglês (`/en`).

## Rodar localmente

Requer Node.js 22.12 ou mais recente.

```bash
npm install
npm run dev
```

Abra <http://localhost:4321>. A página recarrega sozinha a cada alteração salva.

Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos em português | `src/data/pt.ts` |
| Textos em inglês | `src/data/en.ts` |
| Nome, links e dados compartilhados | `src/data/site.ts` |
| Cores, fontes e layout | `src/styles/global.css` |
| Imagem de compartilhamento | `public/og-cover.svg` (gere o PNG com o comando abaixo) |

Para regenerar `public/og-cover.png` depois de editar o SVG:

```bash
node -e "require('sharp')('public/og-cover.svg').png().toFile('public/og-cover.png')"
```

## Licença

O conteúdo (textos, imagens e descrições de projetos) é de uso reservado. O layout foi derivado do template LatentFolio Free, sob licença MIT; veja [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
