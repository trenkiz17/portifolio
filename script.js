(() => {
  'use strict';

  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const languageButton = document.getElementById('lang-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const copyButton = document.getElementById('copy-email');
  const toast = document.getElementById('toast');
  let toastTimer;

  // All translations live here, so it's easy to edit text without touching HTML.
  const translations = {
    pt: {
      brandSubheading: "/ PORTFÓLIO DEV",
      portraitSide: "DEV / 2026 <span>·</span> PORTFÓLIO",
      codeFocus: "foco:",
      codeMindset: "mentalidade:",
      codeEvolve: "'evoluir'",
      mockWindowName: "agrorisk / painel",
      mockOnline: "● sistema online",
      mockDashboard: "visão geral do painel",
      mockProperties: "PROPRIEDADES",
      mockCrops: "SAFRAS",
      mockReports: "RELATÓRIOS",
      mockOverview: "Visão geral",
      mockTracking: "Acompanhamento",
      mockAnalysis: "Análise",
      mockHello: "OLÁ, MUNDO! ✳",
      mockElevator: "ELEVADOR / ESP32",
      mockFloor: "ANDAR ATUAL",
      mockStopped: "● PARADO",
      floorSuffix: "º",
      tagWebInterface: "Interface web",
      mockMonitoring: "VISÃO DE MONITORAMENTO <span>↗</span>",
      tagRestApi: "API REST",
      tileDesignCode: "Design<span>e</span><br>Código<span>.</span>",
      pillResponsive: "Design responsivo",
      pillPython: "Python · básico",
      pillDatabases: "Banco de Dados",
      pillRest: "APIs REST",
      pillHardware: "Hardware · intermediário",
      pillMicrosoft: "Microsoft 365 · intermediário",
      pillOffice: "Pacote Office · básico",
      pillElectricity: "Eletricidade · básico",
      decorLearn: "APRENDER",
      decorBuild: "CRIAR",
      decorRepeat: "REPETIR<span class=\"accent-dot\">.</span>",

      skip: 'Pular para o conteúdo', navHome: 'Início', navAbout: 'Sobre', navProjects: 'Projetos', navSkills: 'Habilidades', navEducation: 'Formação', navContact: 'Contato',
      availability: 'ABERTO A OPORTUNIDADES DE ESTÁGIO',
      heroKicker: 'OLÁ, PRAZER! EU SOU O LEONARDO <span class="wave">✳</span>',
      heroLine1: 'Criando o futuro,', heroLine2: 'uma linha de código', heroLine3: 'de cada vez.',
      heroDescription: 'Estudante de Informática no COTEMIG e desenvolvedor em formação. Transformo ideias em experiências digitais modernas, funcionais e feitas com atenção a cada detalhe.',
      heroProjects: 'Explorar projetos', heroLocation: 'Brasil · Desenvolvimento remoto', heroRole: 'FRONT-END & SISTEMAS WEB', portraitTag: 'Curioso por natureza.<br>Dev por escolha.', scroll: 'ROLE PARA EXPLORAR',
      aboutEyebrow: 'QUEM SOU EU', aboutTitle: 'Tecnologia é minha forma de <em>criar possibilidades.</em>',
      aboutLead: 'Mais do que escrever código, gosto de entender problemas e transformar ideias em soluções que façam sentido.',
      aboutP1: 'Sou Leonardo Barbosa, estudante do curso Técnico em Informática no COTEMIG, com formação concluída em Automação Industrial pelo SESI SENAI. Minha jornada une raciocínio lógico, criatividade e vontade de aprender.',
      aboutP2: 'Tenho interesse especial em desenvolvimento front-end, mas também exploro back-end, banco de dados e integração de sistemas. Meu objetivo é evoluir em projetos reais, colaborar com boas equipes e construir experiências digitais cada vez melhores.',
      aboutNoteTitle: 'Meu próximo passo', aboutNoteText: 'Uma oportunidade de estágio em tecnologia para aprender, contribuir e crescer.',
      projectsEyebrow: 'TRABALHOS SELECIONADOS', projectsTitle: 'Projetos que <em>contam histórias.</em>',
      projectsIntro: 'Da ideia à implementação. Um pouco do que venho construindo e aprendendo na prática.',
      illustration: 'Visualização conceitual do projeto', featuredLabel: 'PROJETO EM DESTAQUE', agroCategory: 'SISTEMA WEB · GESTÃO RURAL',
      agroDescription: 'Plataforma para organizar a rotina de propriedades rurais, com cadastro de usuários, gestão de propriedades e safras, monitoramento e relatórios. Um projeto que integra interfaces web, API e banco de dados.',
      viewCode: 'Ver código no GitHub', portfolioCategory: 'DESENVOLVIMENTO FRONT-END', portfolioTitle: 'Portfólio pessoal',
      portfolioDescription: 'Meu espaço na web, desenvolvido com HTML, CSS e JavaScript para compartilhar minha trajetória, habilidades e projetos.',
      labCategory: 'AUTOMAÇÃO · INTERFACE WEB', labTitle: 'Elevador ESP32', labDescription: 'Painel web para simular e acompanhar o funcionamento de um elevador, com indicação de andar, estado e chamadas. Interface preparada para integração com ESP32 via Wi-Fi.', practiceTag: 'Simulação',
      moreProjects: 'Sempre criando algo novo.', allProjects: 'Explorar todos os repositórios',
      languageLabel: 'LINGUAGENS, BANCO DE DADOS & FERRAMENTAS', languageTitle: 'Minhas tecnologias<span>.</span>', languageIntro: 'Linguagens, bancos de dados e ferramentas do meu portfólio original e dos meus projetos, organizados por área.',
      languageCategoryWeb: 'WEB / ESTRUTURA', languageCategoryStyle: 'WEB / ESTILIZAÇÃO', languageCategoryLogic: 'WEB / INTERATIVIDADE', languageCategoryBackend: 'LÓGICA / BACK-END',
      languageHtml: 'Estruturação semântica de páginas e conteúdo web.', languageCss: 'Layouts responsivos, estilização e apresentação visual.', languageJs: 'Funcionalidades dinâmicas e interações nas interfaces.', languagePy: 'Fundamentos de lógica, programação e desenvolvimento com Python.',
      languageProjects: 'Uso em projetos', languageBasic: 'Conhecimento básico', languageAcademic: 'Conhecimento acadêmico', languageStudies: 'Estudos e projetos',
      languageCategoryCompiled: 'PROGRAMAÇÃO / C#', languageCategoryDatabase: 'BANCO DE DADOS / SQL', languageCategorySystem: 'SISTEMA / LINUX', languageCategoryMicrosoft: 'PRODUTIVIDADE / OFFICE',
      languageCsharp: 'Linguagem presente no meu portfólio original e nos estudos de programação.', languageMysql: 'Banco de dados relacional para organizar e consultar informações.', languageUbuntu: 'Sistema Linux e ambiente de trabalho para estudos de TI.', languageMicrosoft: 'Word, Excel, PowerPoint e ferramentas de produtividade do Microsoft 365.', languageIntermediate: 'Intermediário',
      skillsEyebrow: 'MINHA CAIXA DE FERRAMENTAS', skillsTitle: 'Tecnologias que <em>movem minhas ideias.</em>', skillsIntro: 'Ferramentas que uso em projetos e estudos, sempre com espaço para aprender a próxima.',
      skillGroup1: 'Front-end', skillGroup1Desc: 'Construção de interfaces e experiências web.', skillGroup2: 'Back-end & dados', skillGroup2Desc: 'Programação, servidores e tecnologias de banco de dados.',
      skillGroup3: 'Ferramentas & sistemas', skillGroup3Desc: 'Sistemas operacionais e ferramentas para versionar e desenvolver.', skillGroup4: 'Conhecimentos técnicos', skillGroup4Desc: 'Habilidades complementares da minha formação técnica.',
      skillsNote: 'Não é sobre saber tudo. É sobre continuar aprendendo e aplicar o conhecimento para resolver problemas reais.',
      educationEyebrow: 'MINHA JORNADA', educationTitle: 'Aprendendo hoje.<br><em>Construindo amanhã.</em>',
      educationIntro: 'Minha trajetória reúne tecnologia, fundamentos de informática e conhecimentos de automação industrial.',
      statusProgress: 'EM ANDAMENTO', statusComplete: 'CONCLUÍDO', present: 'ATUAL',
      edu1: 'Técnico em Informática', edu1Desc: 'Programação, desenvolvimento de sistemas, banco de dados e fundamentos de redes.',
      edu2: 'Ensino Médio', edu2School: 'Formação escolar', edu2Desc: 'Formação geral integrada ao desenvolvimento de competências acadêmicas e profissionais.',
      edu3: 'Técnico em Automação Industrial', edu3Desc: 'Base técnica em automação, processos industriais e resolução de problemas.',
      contactEyebrow: 'VAMOS NOS CONECTAR?', contactTitle: 'Tem uma ideia?<br><em>Vamos conversar.</em>',
      contactDescription: 'Estou em busca de oportunidades para evoluir e colocar minhas habilidades em prática. Se quiser trocar uma ideia sobre tecnologia, projetos ou estágio, será um prazer conversar.',
      sendEmail: 'Enviar um e-mail', copyEmail: 'Copiar e-mail', footerRights: 'Feito com dedicação e código.', backToTop: 'Voltar ao topo',
      copied: 'E-mail copiado!', copyFailed: 'Selecione e copie o e-mail exibido.', openMenu: 'Abrir menu', closeMenu: 'Fechar menu', lightTheme: 'Ativar tema claro', darkTheme: 'Ativar tema escuro'
    },
    en: {
      brandSubheading: "/ DEV PORTFOLIO",
      portraitSide: "DEV / 2026 <span>·</span> PORTFOLIO",
      codeFocus: "focus:",
      codeMindset: "mindset:",
      codeEvolve: "'evolve'",
      mockWindowName: "agrorisk / dashboard",
      mockOnline: "● system online",
      mockDashboard: "dashboard overview",
      mockProperties: "PROPERTIES",
      mockCrops: "CROPS",
      mockReports: "REPORTS",
      mockOverview: "Overview",
      mockTracking: "Tracking",
      mockAnalysis: "Analysis",
      mockHello: "HELLO, WORLD! ✳",
      mockElevator: "ELEVATOR / ESP32",
      mockFloor: "CURRENT FLOOR",
      mockStopped: "● STOPPED",
      floorSuffix: "rd",
      tagWebInterface: "Web interface",
      mockMonitoring: "MONITORING OVERVIEW <span>↗</span>",
      tagRestApi: "REST API",
      tileDesignCode: "Design<span>&amp;</span><br>Code<span>.</span>",
      pillResponsive: "Responsive design",
      pillPython: "Python · basic",
      pillDatabases: "Databases",
      pillRest: "REST APIs",
      pillHardware: "Hardware · intermediate",
      pillMicrosoft: "Microsoft 365 · intermediate",
      pillOffice: "Office Suite · basic",
      pillElectricity: "Basic electricity",
      decorLearn: "LEARN",
      decorBuild: "BUILD",
      decorRepeat: "REPEAT<span class=\"accent-dot\">.</span>",

      skip: 'Skip to content', navHome: 'Home', navAbout: 'About', navProjects: 'Projects', navSkills: 'Skills', navEducation: 'Education', navContact: 'Contact',
      availability: 'OPEN TO INTERNSHIP OPPORTUNITIES',
      heroKicker: 'HEY THERE! I\'M LEONARDO <span class="wave">✳</span>',
      heroLine1: 'Building the future,', heroLine2: 'one line of code', heroLine3: 'at a time.',
      heroDescription: 'Computer Science technical student at COTEMIG and an aspiring developer. I turn ideas into modern, functional digital experiences, paying attention to every detail.',
      heroProjects: 'Explore projects', heroLocation: 'Brazil · Remote collaboration', heroRole: 'FRONT-END & WEB SYSTEMS', portraitTag: 'Curious by nature.<br>Developer by choice.', scroll: 'SCROLL TO EXPLORE',
      aboutEyebrow: 'ABOUT ME', aboutTitle: 'Technology is how I <em>create possibilities.</em>',
      aboutLead: 'More than writing code, I enjoy understanding problems and turning ideas into meaningful solutions.',
      aboutP1: 'I am Leonardo Barbosa, a Computer Science technical student at COTEMIG, and I completed technical studies in Industrial Automation at SESI SENAI. My path combines logical thinking, creativity, and a drive to learn.',
      aboutP2: 'My main interest is front-end development, but I also explore back-end technologies, databases, and system integration. My goal is to grow through real projects, work with great teams, and build better digital experiences.',
      aboutNoteTitle: 'My next step', aboutNoteText: 'A tech internship where I can learn, contribute, and grow.',
      projectsEyebrow: 'SELECTED WORK', projectsTitle: 'Projects that <em>tell a story.</em>',
      projectsIntro: 'From idea to implementation. A glimpse of what I have been building and learning by doing.',
      illustration: 'Concept illustration of the project', featuredLabel: 'FEATURED PROJECT', agroCategory: 'WEB PLATFORM · FARM MANAGEMENT',
      agroDescription: 'A platform to organize farm operations, featuring user accounts, properties and crop management, monitoring, and reports. It brings together a web interface, API, and database.',
      viewCode: 'View code on GitHub', portfolioCategory: 'FRONT-END DEVELOPMENT', portfolioTitle: 'Personal portfolio',
      portfolioDescription: 'My corner of the web, built with HTML, CSS, and JavaScript to share my journey, skills, and projects.',
      labCategory: 'AUTOMATION · WEB INTERFACE', labTitle: 'ESP32 Elevator', labDescription: 'Web dashboard to simulate and monitor an elevator, including floor indicators, status and floor calls. The interface is designed for future Wi-Fi integration with ESP32.', practiceTag: 'Simulation',
      moreProjects: 'Always building something new.', allProjects: 'Browse all repositories',
      languageLabel: 'LANGUAGES, DATABASES & TOOLS', languageTitle: 'My tech stack<span>.</span>', languageIntro: 'Languages, databases, and tools from my original portfolio and projects, clearly organized by category.',
      languageCategoryWeb: 'WEB / STRUCTURE', languageCategoryStyle: 'WEB / STYLING', languageCategoryLogic: 'WEB / INTERACTIVITY', languageCategoryBackend: 'LOGIC / BACK-END',
      languageHtml: 'Semantic structure for web pages and content.', languageCss: 'Responsive layouts, styling, and visual presentation.', languageJs: 'Dynamic features and interactive interfaces.', languagePy: 'Programming fundamentals, logic, and Python development.',
      languageProjects: 'Used in projects', languageBasic: 'Basic knowledge', languageAcademic: 'Academic experience', languageStudies: 'Studies and projects',
      languageCategoryCompiled: 'PROGRAMMING / C#', languageCategoryDatabase: 'DATABASE / SQL', languageCategorySystem: 'SYSTEM / LINUX', languageCategoryMicrosoft: 'PRODUCTIVITY / OFFICE',
      languageCsharp: 'A language featured in my original portfolio and programming studies.', languageMysql: 'A relational database for organizing and querying information.', languageUbuntu: 'A Linux system and work environment for IT studies.', languageMicrosoft: 'Word, Excel, PowerPoint, and Microsoft 365 productivity tools.', languageIntermediate: 'Intermediate',
      skillsEyebrow: 'MY TOOLKIT', skillsTitle: 'Technologies that <em>power my ideas.</em>', skillsIntro: 'Tools I use in projects and studies, always ready to learn the next one.',
      skillGroup1: 'Front-end', skillGroup1Desc: 'Building interfaces and web experiences.', skillGroup2: 'Back-end & data', skillGroup2Desc: 'Programming, servers, and database technologies.',
      skillGroup3: 'Tools & systems', skillGroup3Desc: 'Operating systems and tools for development and version control.', skillGroup4: 'Technical knowledge', skillGroup4Desc: 'Complementary skills from my technical education.',
      skillsNote: 'It is not about knowing everything. It is about never stopping learning and using knowledge to solve real problems.',
      educationEyebrow: 'MY JOURNEY', educationTitle: 'Learning today.<br><em>Building tomorrow.</em>',
      educationIntro: 'My path combines technology, computer science fundamentals, and industrial automation.',
      statusProgress: 'IN PROGRESS', statusComplete: 'COMPLETED', present: 'PRESENT',
      edu1: 'Computer Science Technical Program', edu1Desc: 'Programming, software development, databases, and computer networks.',
      edu2: 'High School', edu2School: 'General education', edu2Desc: 'Academic learning combined with the development of practical and professional skills.',
      edu3: 'Industrial Automation Technical Program', edu3Desc: 'Technical foundations in automation, industrial processes, and problem-solving.',
      contactEyebrow: 'LET\'S CONNECT', contactTitle: 'Have an idea?<br><em>Let\'s talk.</em>',
      contactDescription: 'I am looking for opportunities to grow and put my skills into practice. Whether it is technology, projects, or internships, I would love to hear from you.',
      sendEmail: 'Send an email', copyEmail: 'Copy email', footerRights: 'Made with care and code.', backToTop: 'Back to top',
      copied: 'Email copied!', copyFailed: 'Please select and copy the email shown.', openMenu: 'Open menu', closeMenu: 'Close menu', lightTheme: 'Switch to light theme', darkTheme: 'Switch to dark theme'
    }
  };

  // All visible translations now use explicit data-i18n keys in index.html.
  // This keeps language switching deterministic on repeated PT/EN toggles.
  function translateUnmarkedContent(language) {
    const translatedAttributes = [
      ['a.brand', 'aria-label', 'Leonardo Barbosa — início', 'Leonardo Barbosa — home'],
      ['#main-nav', 'aria-label', 'Navegação principal', 'Main navigation'],
      ['.hero-visual', 'aria-label', 'Fotografia de Leonardo Barbosa', 'Photo of Leonardo Barbosa'],
      ['.portrait-frame img', 'alt', 'Leonardo Barbosa em uma selfie no espelho', 'Leonardo Barbosa taking a mirror selfie'],
      ['.scroll-cue', 'aria-label', 'Rolar para a seção Sobre', 'Scroll to About section'],
      ['.project-showcase', 'aria-label', 'Representação ilustrativa do painel AgroRisk', 'Illustration of the AgroRisk dashboard'],
      ['.tile-link[href*="/portifolio/"]', 'aria-label', 'Abrir portfólio publicado', 'Open live portfolio'],
      ['.tile-link[href*="/trabaiolipe/"]', 'aria-label', 'Abrir projeto Elevador ESP32', 'Open ESP32 Elevator project'],
      ['.languages-feature', 'aria-label', 'Tecnologias em destaque', 'Featured technologies']
    ];
    translatedAttributes.forEach(([selector, attribute, pt, en]) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute(attribute, language === 'pt' ? pt : en);
    });
    const metas = {
      'meta[name="description"]': {
        pt: 'Portfólio de Leonardo Barbosa — estudante de Informática no COTEMIG, com foco em desenvolvimento front-end, sistemas web e projetos de tecnologia.',
        en: 'Portfolio of Leonardo Barbosa — IT technical student at COTEMIG, focused on front-end development, web systems and technology projects.'
      },
      'meta[property="og:locale"]': { pt: 'pt_BR', en: 'en_US' },
      'meta[property="og:title"]': { pt: 'Leonardo Barbosa | Desenvolvedor Front-end', en: 'Leonardo Barbosa | Front-end Developer' },
      'meta[property="og:description"]': {
        pt: 'Conheça meus projetos, minhas habilidades e minha jornada no desenvolvimento de software.',
        en: 'Discover my projects, skills, and journey in software development.'
      }
    };
    Object.entries(metas).forEach(([selector, values]) => {
      const meta = document.querySelector(selector);
      if (meta) meta.setAttribute('content', values[language]);
    });
  }

  function readSetting(key, fallback) {
    try { return localStorage.getItem(key) || fallback; } catch (_) { return fallback; }
  }
  function saveSetting(key, value) {
    try { localStorage.setItem(key, value); } catch (_) { /* privacy mode */ }
  }
  let currentLanguage = readSetting('portfolio-language', 'pt');
  if (!translations[currentLanguage]) currentLanguage = 'pt';
  let currentTheme = readSetting('portfolio-theme', 'dark');
  if (!['dark', 'light'].includes(currentTheme)) currentTheme = 'dark';

  function applyTheme(theme) {
    currentTheme = theme;
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-label', translations[currentLanguage][theme === 'dark' ? 'lightTheme' : 'darkTheme']);
    themeButton.title = themeButton.getAttribute('aria-label');
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.content = theme === 'dark' ? '#090d14' : '#f8fafc';
    saveSetting('portfolio-theme', theme);
  }

  function applyLanguage(language) {
    if (!Object.prototype.hasOwnProperty.call(translations, language)) language = 'pt';
    currentLanguage = language;
    root.lang = language === 'pt' ? 'pt-BR' : 'en';
    const dictionary = translations[language];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!Object.prototype.hasOwnProperty.call(dictionary, key)) {
        console.warn('Missing translation for:', key, language);
        return;
      }
      const translated = dictionary[key];
      // Skill pills contain a decorative colored dot; only update their text nodes.
      if (el.hasAttribute('data-i18n-text')) {
        const textNodes = Array.from(el.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
        if (textNodes.length) {
          textNodes[0].nodeValue = translated;
          textNodes.slice(1).forEach(node => { node.nodeValue = ''; });
        } else {
          el.appendChild(document.createTextNode(translated));
        }
      } else if (/<(?:span|em|br)\b/i.test(translated)) {
        // These translation values contain intentional formatting used by the design.
        el.innerHTML = translated;
      } else {
        el.textContent = translated;
      }
    });
    translateUnmarkedContent(language);
    languageButton.textContent = language === 'pt' ? 'EN' : 'PT';
    languageButton.setAttribute('aria-label', language === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese');
    languageButton.title = language === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese';
    document.title = language === 'pt' ? 'Leonardo Barbosa — Desenvolvedor Front-end' : 'Leonardo Barbosa — Front-end Developer';
    applyTheme(currentTheme);
    menuButton.setAttribute('aria-label', dictionary[menuButton.getAttribute('aria-expanded') === 'true' ? 'closeMenu' : 'openMenu']);
    saveSetting('portfolio-language', language);
  }

  function setMenu(open) {
    nav.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', translations[currentLanguage][open ? 'closeMenu' : 'openMenu']);
  }
  themeButton.addEventListener('click', () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark'));
  languageButton.addEventListener('click', () => applyLanguage(currentLanguage === 'pt' ? 'en' : 'pt'));
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) setMenu(false); });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 2700);
  }
  copyButton.addEventListener('click', async () => {
    const address = copyButton.dataset.email;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(address);
      showToast(translations[currentLanguage].copied);
    } catch (_) {
      const selectionInput = document.createElement('textarea');
      selectionInput.value = address;
      selectionInput.style.position = 'fixed';
      selectionInput.style.opacity = '0';
      document.body.appendChild(selectionInput);
      selectionInput.focus(); selectionInput.select();
      let success = false;
      try { success = document.execCommand('copy'); } catch (_) { /* unsupported */ }
      selectionInput.remove();
      showToast(translations[currentLanguage][success ? 'copied' : 'copyFailed']);
    }
  });

  // Progressive enhancement: content remains visible without IntersectionObserver.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .07, rootMargin: '0px 0px 20px 0px' });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  if ('IntersectionObserver' in window) {
    const navLinks = [...document.querySelectorAll('.main-nav a')];
    const sections = document.querySelectorAll('main section[id]');
    const activeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-18% 0px -65% 0px' });
    sections.forEach(section => activeObserver.observe(section));
  }
  document.getElementById('year').textContent = String(new Date().getFullYear());
  applyLanguage(currentLanguage);
})();
