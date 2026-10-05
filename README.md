# gustavocassel.com

Site pessoal de Gustavo Cassel: desenvolvimento de software sob medida, integrações, automações e consultoria em TI.

Feito com [Astro](https://astro.build), estático, em português (`/`) e inglês (`/en`), com tema claro e escuro.

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

O `build` roda o `astro check` antes, então erros de tipo param o build.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos em português | `src/data/pt.ts` |
| Textos em inglês | `src/data/en.ts` |
| Formato dos textos (tipos) | `src/data/types.ts` |
| Nome e links das redes | `src/data/site.ts` |
| Seções da página | `src/components/Home.astro` |
| Cabeçalho e rodapé | `src/components/Header.astro`, `src/components/Footer.astro` |
| Janela de código do topo | `src/components/CodeWindow.astro` |
| Ícones | `src/components/icons.ts` |
| Cores, fontes e layout | `src/styles/global.css` |
| SEO, metadados e tema | `src/layouts/BaseLayout.astro` |
| Imagem de compartilhamento | `public/og-cover.svg` |

Campos marcados como `html` em `types.ts` aceitam `<em>` e `<br />`. O `<em>` vira o destaque em itálico roxo dos títulos.

Depois de editar `public/og-cover.svg`, gere o PNG de novo:

```bash
node -e "require('sharp')('public/og-cover.svg').png().toFile('public/og-cover.png')"
```

## Publicação

Hospedado na Cloudflare Workers & Pages, com deploy automático a cada `git push` na `main`.

1. No painel da Cloudflare: **Compute → Workers & Pages → Create → Import a repository**, e selecione este repositório. Build command `npm run build`, output directory `dist`.
2. No app criado: **Settings → Domains & Routes → Add → Custom domain**. Adicione `gustavocassel.com` e `www.gustavocassel.com`.
3. No painel do domínio: **Rules → Redirect Rules**, template **"Redirect from WWW to root"**, para que o endereço principal seja `https://gustavocassel.com`.

## Pendências

- [ ] Criar `contato@gustavocassel.com` no Cloudflare Email Routing e colocar no site
- [ ] Publicar na Cloudflare (passos acima)
- [ ] Seção de projetos, quando houver projetos públicos

## Licença

Todos os direitos reservados. Textos, imagens e o restante do conteúdo não podem ser reutilizados.

Partes da estrutura inicial (layout base, script de tema) vieram do template [LatentFolio Free](https://github.com/Dharani-Eswaramurthi/latentfolio), sob licença MIT:

<details>
<summary>MIT License, LatentFolio Free</summary>

```
MIT License

Copyright (c) 2026 Dharani Eswaramurthi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>

Fontes (Instrument Sans, Newsreader e JetBrains Mono) sob SIL Open Font License, via Fontsource. Ícones baseados no [Lucide](https://lucide.dev), sob ISC License.
