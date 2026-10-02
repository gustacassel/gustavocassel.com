import type { SiteContent } from './types';

const role = 'Desenvolvedor de software';

export const pt: SiteContent = {
  role,
  bio: 'Desenvolvedor de software que constrói sistemas sob medida, integrações e automações para empresas. Atendimento remoto, em português ou inglês.',
  seo: {
    title: `Gustavo Cassel | ${role}`,
    description: 'Sistemas sob medida, integração com ERP, automação de processos e consultoria em TI. Experiência com .NET, TOTVS Protheus, Autodesk Vault, Inventor e Microsoft 365. Atendimento remoto.',
  },
  nav: { services: 'Serviços', experience: 'Experiência', about: 'Sobre', contact: 'Contato' },
  ui: {
    skipLink: 'Pular para o conteúdo',
    themeToDark: 'Mudar para o tema escuro',
    themeToLight: 'Mudar para o tema claro',
    openNav: 'Abrir menu',
    closeNav: 'Fechar menu',
    primaryNav: 'Navegação principal',
    switchLang: 'Read in English',
    headerCta: 'Fale comigo',
  },
  hero: {
    eyebrow: 'desenvolvedor de software · remoto',
    title: 'Construo os sistemas que a sua empresa usa <em>todo dia.</em>',
    summary: 'Sistemas sob medida, integrações e automações para empresas que querem parar de depender de planilha e retrabalho. No navegador, no desktop ou dentro do seu ERP.',
    primaryCta: 'Conversar sobre um projeto',
    secondaryCta: 'Ver serviços',
  },
  code: {
    file: 'Gustavo.cs',
    props: [
      ['Stack', '.NET, SQL, Azure'],
      ['Atende', 'remoto'],
      ['Resolve', 'o que for software'],
    ],
  },
  services: {
    kicker: '01 / Serviços',
    title: 'O que eu <em>faço.</em>',
    intro: 'Do sistema novo ao ajuste no que já existe: se envolve software, dá para conversar.',
    items: [
      {
        icon: 'app',
        title: 'Sistemas sob medida',
        description: 'Aplicações web, desktop ou dentro de outro software, feitas para o processo da sua empresa, e não o contrário.',
      },
      {
        icon: 'link',
        title: 'Integração entre sistemas',
        description: 'Conecto ERP, PDM, Microsoft 365 e outras ferramentas para a informação circular sem cadastro duplicado nem planilha no meio.',
      },
      {
        icon: 'repeat',
        title: 'Automação de processos',
        description: 'Tarefas manuais e repetitivas viram rotinas automáticas, com registro de tudo que foi feito.',
      },
      {
        icon: 'file',
        title: 'Relatórios e documentos',
        description: 'Relatórios, etiquetas e documentos que o seu sistema atual não entrega, gerados direto dos dados.',
      },
      {
        icon: 'box',
        title: 'Automação para engenharia',
        description: 'Add-ins para Autodesk Inventor e Vault: validação de projeto, padronização e envio para o ERP.',
      },
      {
        icon: 'compass',
        title: 'Consultoria em TI',
        description: 'Ajudo a escolher, configurar, substituir ou unificar ferramentas, e a manter o Microsoft 365 organizado e seguro.',
      },
    ],
  },
  platforms: {
    kicker: '02 / Plataformas',
    title: 'Plataformas que conheço <em>por dentro.</em>',
    intro: 'Além de desenvolver, configuro e mantenho as ferramentas que a empresa já usa.',
    items: [
      {
        name: 'Protheus',
        vendor: 'TOTVS · ERP',
        description: 'Participei da implantação na migração do ERP anterior. Hoje parametrizo, customizo e integro.',
      },
      {
        name: 'Vault',
        vendor: 'Autodesk · PDM',
        description: 'Implantação, configuração e manutenção do PDM.',
      },
      {
        name: 'Inventor',
        vendor: 'Autodesk · CAD 3D',
        description: 'Configuração, padronização e add-ins.',
      },
      {
        name: 'Microsoft 365',
        vendor: 'Microsoft · Azure',
        description: 'Usuários, Entra ID, SharePoint, segurança e governança.',
      },
    ],
  },
  process: {
    kicker: '03 / Processo',
    title: 'Como eu <em>trabalho.</em>',
    steps: [
      { title: 'Entender', description: 'Converso com quem usa o processo no dia a dia, não só com quem pediu.' },
      { title: 'Propor', description: 'Você recebe uma proposta clara, com o que será feito, prazo e custo.' },
      { title: 'Construir', description: 'Entregas curtas e frequentes, para você ver funcionando cedo e ajustar no caminho.' },
      { title: 'Acompanhar', description: 'Depois da entrega, continuo dando suporte e evoluindo o que for preciso.' },
    ],
  },
  experience: {
    kicker: '04 / Experiência',
    title: 'Do desenho técnico ao <em>software.</em>',
    intro: 'Há quase cinco anos na RGO Máquinas, onde passei do desenho técnico a quem a empresa procura quando o assunto é software.',
    link: 'Perfil completo no LinkedIn',
    items: [
      {
        company: 'RGO Máquinas',
        location: 'Guaporé, RS',
        roles: [
          { title: 'Desenvolvedor Pleno', dates: 'jul 2023 até hoje' },
          { title: 'Desenvolvedor de TI Júnior', dates: 'nov 2022 a jul 2023' },
          { title: 'Desenhista técnico', dates: 'dez 2021 a nov 2022' },
        ],
        note: 'Sistemas internos, integrações com o ERP, automações para a engenharia e o ambiente Microsoft 365 da empresa.',
      },
      {
        company: 'Instituto Infnet',
        roles: [{ title: 'Engenharia de Software', dates: 'desde ago 2023' }],
        note: 'Bacharelado com foco em arquitetura, microsserviços e DevOps.',
      },
      {
        company: 'Universidade de Caxias do Sul',
        location: 'Caxias do Sul, RS',
        roles: [{ title: 'Engenharia Mecânica', dates: '2021 a 2022' }],
        note: 'Cursei dois anos antes de migrar para a área de software.',
      },
    ],
    certsTitle: 'Certificações',
    certs: [
      'Learning C#',
      'Learning SQL Programming',
      'Programming Foundations: Databases',
      'Become a RESTful API Developer',
      'Career Essentials in Software Development',
    ],
  },
  stack: {
    kicker: '05 / Tecnologias',
    title: 'Ferramentas do <em>dia a dia.</em>',
    groups: [
      { label: 'Linguagens', items: ['C#', 'SQL', 'ADVPL / TLPP', 'PowerShell', 'Java', 'TypeScript'] },
      { label: 'Frameworks', items: ['.NET', 'ASP.NET', 'Blazor', 'Entity Framework', 'Windows Forms', 'Spring Boot'] },
      { label: 'Bancos de dados', items: ['SQL Server', 'Oracle', 'PostgreSQL'] },
      { label: 'Nuvem', items: ['Azure', 'Microsoft 365', 'Entra ID'] },
    ],
  },
  about: {
    kicker: '06 / Sobre mim',
    title: 'Prazer, <em>Gustavo.</em>',
    paragraphs: [
      'Sou o Gustavo, de Serafina Corrêa (RS). Comecei na indústria fazendo desenho técnico, passei dois anos pela engenharia mecânica e encontrei o meu lugar no software. Hoje desenvolvo sistemas e cuido de TI. Gosto de estudar arquitetura e boas práticas, e de deixar sistemas mais simples de manter.',
      'Fora do código, sou músico. Toco trombone de vara há quase oito anos na banda municipal e na orquestra, e de vez em quando me chamam para tocar em eventos. E jogo videogame desde pequeno, um hobby que nunca larguei.',
    ],
    facts: [
      { emoji: '📍', label: 'Serafina Corrêa, RS' },
      { emoji: '💬', label: 'Português e inglês' },
      { emoji: '🎺', label: 'Músico' },
      { emoji: '🎮', label: 'Videogame' },
    ],
  },
  contact: {
    kicker: 'Contato',
    title: 'Tem um processo que dá <em>trabalho demais?</em>',
    body: 'Me conte o problema. Atendo remotamente, no Brasil e no exterior, em português ou inglês.',
    cta: 'Falar no LinkedIn',
  },
  footer: {
    tagline: 'Sistemas, integrações e automações sob medida.',
    backToTop: 'Voltar ao topo',
  },
};
