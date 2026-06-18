document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", toggle.checked);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle1");

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", toggle.checked);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const heroImg = document.querySelector(".hero-img img");
  
  // adiciona a classe de animação
  heroImg.classList.add("float");
});



document.addEventListener("DOMContentLoaded", () => {
  const fallText = document.querySelector(".fall-text");
  const text = fallText.textContent;
  fallText.textContent = "";

  [...text].forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.1}s`; // atraso entre as letras
    fallText.appendChild(span);
  });
});



const translations = {
  pt: {
    navHome: "Início",
    navAbout: "Sobre",
    navSkills: "Habilidades",
    navProjects: "Projetos",
    navEducation: "Formação",
    navContact: "Contato",
    heroTitle: "Oi, eu sou <span>Leonardo Barbosa</span>",
    heroSubtitle: "Desenvolvedor-de-Front-end",
    seeProjects: "Ver Projetos",
    contactBtn: "Contato",
    aboutTitle: "Sobre Mim",
    aboutText: "Sou apaixonado por tecnologia e estudando Informática pelo Cotemig. Tenho experiência em projetos de sistemas e bancos de dados, mas meu foco atual é no desenvolvimento front-end, criando interfaces modernas, responsivas e funcionais. Busco sempre evoluir como profissional e contribuir em soluções que gerem impacto real.",
    skillsTitle: "Habilidades",
    projectsTitle: "Projetos",
    projDesc: "Descrição breve do projeto.",
    educationTitle: "Formação",
    edu1: "Curso Técnico automação industrial - sesi senai",
    edu2: "Curso Técnico em Informática - Cotemig",
    edu3: "Ensino Médio",
    contactTitle: "Contato",
    email: "Email",
    phone: "Telefone",
    linkedin: "LinkedIn",
    github: "GitHub",
    footer: "© 2025 Leonardo Barbosa — Todos os direitos reservados"
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navEducation: "Education",
    navContact: "Contact",
    heroTitle: "Hi, I'm <span>Leonardo Barbosa</span>",
    heroSubtitle: "Front-End Developer",
    seeProjects: "View Projects",
    contactBtn: "Contact",
    aboutTitle: "About Me",
    aboutText: "I am passionate about technology and currently studying Computer Science at Cotemig. I have experience in systems and database projects, but my current focus is on front-end development, creating modern, responsive, and functional interfaces. I always strive to grow as a professional and contribute to solutions that make a real impact.",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    projDesc: "Brief project description.",
    educationTitle: "Education",
    edu1: "Technical Course in Industrial Automation - SESI SENAI",
    edu2: "Technical Course in Computer Science - Cotemig",
    edu3: "High School",
    contactTitle: "Contact",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    github: "GitHub",
    footer: "© 2025 Leonardo Barbosa — All rights reserved"
  }
};

let currentLang = "pt";

const btnIdioma = document.getElementById("btnIdioma");

btnIdioma.addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  changeLanguage(currentLang);
});

function changeLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      // Se tiver HTML dentro (como <span>), usa innerHTML
      el.innerHTML = translations[lang][key];
    }
  });
}