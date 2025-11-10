// script.js - shapes (PNG-aware), reveal, logo click, toast, form submit
(function(){
  /* ===== reveal on scroll (data-reveal) ===== */
  const reveals = document.querySelectorAll('[data-reveal]');
  function revealOnScroll(){
    const windowHeight = window.innerHeight;
    reveals.forEach(el=>{
      const top = el.getBoundingClientRect().top;
      if(top < windowHeight - 100) el.classList.add('active');
      else el.classList.remove('active');
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('resize', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  /* ===== logo click => smooth top (also keyboard) ===== */
  const logo = document.getElementById('logo');
  if(logo){
    logo.addEventListener('click', ()=>{ window.scrollTo({ top: 0, behavior: 'smooth' }); });
    logo.addEventListener('keydown', (e)=> { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }});
  }

  /* ===== mobile menu toggle (OPRAVENO) ===== */
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if(mobileMenuToggle && mainNav){
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.contains('mobile-open');

      if(isOpen){
        mainNav.classList.remove('mobile-open');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Otevřít menu');
      } else {
        mainNav.classList.add('mobile-open');
        mobileMenuToggle.classList.add('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        mobileMenuToggle.setAttribute('aria-label', 'Zavřít menu');
      }
    });

    // Close menu when clicking on nav links
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('mobile-open');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Otevřít menu');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if(!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target) && mainNav.classList.contains('mobile-open')){
        mainNav.classList.remove('mobile-open');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Otevřít menu');
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && mainNav.classList.contains('mobile-open')){
        mainNav.classList.remove('mobile-open');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Otevřít menu');
      }
    });
  }
  
  /* ===== shapes / logos animation (Nyní skryté přes CSS) ===== */
  const wrapper = document.getElementById('logoShapes');
  if(wrapper){
    const shapes = Array.from(wrapper.querySelectorAll('.logo-shape, .shape'));
    if(shapes.length){
      // initialize logos: if element has data-src, use it as background-image
      shapes.forEach((el)=>{
        const src = el.dataset ? el.dataset.src : null;
        const size = el.dataset && el.dataset.size ? parseInt(el.dataset.size,10) : null;
        if(src){
          el.style.backgroundImage = `url("${src}")`;
          el.style.backgroundSize = 'contain';
          el.style.backgroundRepeat = 'no-repeat';
          el.style.backgroundPosition = 'center';
          el.style.opacity = '0'; // will be animated in loop
        }
        if(size){
          el.style.width = `${size}px`;
          el.style.height = `${size}px`;
        }
        if(!el.style.left) el.style.left = `${5 + Math.random()*85}%`;
        if(!el.style.top) el.style.top = `${5 + Math.random()*65}%`;
      });

      const cfg = shapes.map((el, i) => {
        const cs = getComputedStyle(el);
        const left = parseFloat(el.style.left) || (5 + Math.random()*85);
        const top = parseFloat(el.style.top) || (5 + Math.random()*65);
        const width = parseFloat(cs.width) || 100;
        const floatAmp = 6 + Math.random()*18;
        const floatFreq = 0.4 + Math.random()*1.0;
        const speed = 0.2 + Math.random()*0.9;
        const rot = (Math.random()-0.5) * 12;
        return { el, left, top, width, floatAmp, floatFreq, speed, rot, idx: i };
      });

      let start = performance.now();
      function animate(now){
        const t = (now - start) / 1000;
        const scrollY = window.scrollY || window.pageYOffset;
        const vh = Math.max(window.innerHeight, 700);
        cfg.forEach((c, i)=>{
          const baseY = (c.top / 100) * vh;
          const floatY = Math.sin(t * c.floatFreq + i) * c.floatAmp;
          const parallaxY = scrollY * c.speed * 0.15;
          const swayX = Math.sin(t * (0.25 + i*0.05)) * (Math.min(12, c.width*0.06));
          const translateY = baseY + floatY + parallaxY;
          const translateX = swayX + ((c.left - 50) * 0.3);
          const rot = c.rot + Math.sin(t * (0.15 + i*0.02)) * 3;
          c.el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rot}deg)`;

          const visibleRatio = 1 - Math.min(Math.abs((baseY - scrollY) / (vh * 1.2)), 1);
          c.el.style.opacity = (0.35 + 0.65 * visibleRatio).toString();
        });
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    }
  }

// filtr + aktivní stav
const buttons = document.querySelectorAll('.btn, .filter-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-btn");
  let currentLang = "cs";

  const translations = {
    cs: {
      htmlLang: "cs",
      title: "SpecifAI",
      metaDescription: "Specifai - moderní řešení pro vaše podnikání.",
      headerNav: ["Služby", "Projekty", "O nás", "Reference", "Kontakt"],
      heroTitle: "Automatizace, která šetří váš čas a peníze",
      heroText: "Chytrá řešení pro vaši firmu – s AI i bez AI. Uvolněte své týmy, nechte rutinu na nás.",
      heroBtn: "Zjistit víc",
      servicesTitle: "Naše služby",
      serviceCards: [
        { title: "💡 Inovace", text: "Navrhujeme moderní a efektivní řešení přesně na míru. Každý projekt přizůsobujeme individuálním potřebám klienta." },
        { title: "🚀 Rychlost", text: "Implementace projektů probíhá rychle a efektivně, přičemž zachováváme vysokou kvalitu a spolehlivost řešení." },
        { title: "🔒 Bezpečnost", text: "Dbáme na bezpečnost a spolehlivost všech našich řešení, aby naši klienti mohli pracovat bez obav." }
      ],
      projects: {
        title: "Projekty",
        filters: ["Vše", "Make", "AI", "Skript / Non-AI"],
        emptyTitle: "Žádné projekty zatím nejsou",
        emptyText: "Jakmile sem přidáte případové studie, budou se tu krásně zobrazovat. Prozatím můžete nahrát vlastní.",
        emptyAdd: "Přidat ukázkový projekt",
        emptyConsult: "Chci konzultaci"
      },
      aboutTitle: "O nás",
      aboutCards: [
        { title: "Expertíza v automatizacích", text: "Optimalizujeme procesy a vytváříme chytré automatizace, které firmám šetří čas a peníze." },
        { title: "Kreativní tým", text: "Naši specialisté kombinují teoretické know-how s praktickými dovednostmi, aby dodali reálné výsledky." },
        { title: "Zodpovědnost", text: "Pracujeme důkladně a s důrazem na bezpečnost, kvalitu a dlouhodobou hodnotu pro klienty." }
      ],
      testimonialsTitle: "Co říkají naši klienti",
      contactTitle: "Kontakt", 
      contactForm: {
        heading: "Kontaktujte nás", 
        placeholders: { name: "Vaše jméno", email: "vas@email.cz", tel: "Tel. číslo", message: "Vaše zpráva" },
        consent: "Souhlasím se zpracováním údajů",
        submit: "Odeslat"
      },
      companyInfo: { 
        nameLabel: "SpecifAI s.r.o.", 
        addressValue: "Zatím žadná, ale v Brně",
        icoValue: "IČO: Taky není",
        dicValue: "DIČ: Taky není",
        phoneValue: "+420 773 952 636",
        emailValue: "kontakt@specifai.cz"
      },
      toast: "Vaše zpráva byla úspěšně odeslána",
      footer: { 
        about: "Chytrá řešení pro vaši firmu – s AI i bez AI. Uvolněte své týmy, nechte rutinu na nás.",
        techTitle: "Technologie",
        contactTitle: "Firemní údaje",
        copyright: "© 2025 SpecifAI.",
        privacy: "Zásady ochrany osobních údajů"
      },
      headerBtnText: "CZ/EN"
    },

    en: {
      htmlLang: "en",
      title: "SpecifAI",
      metaDescription: "Specifai - modern solutions for your business.",
      headerNav: ["Services", "Projects", "About", "Testimonials", "Contact"],
      heroTitle: "Automation that saves your time and money",
      heroText: "Smart solutions for your business – with or without AI. Free your teams, leave the routine to us.",
      heroBtn: "Learn more",
      servicesTitle: "Our Services",
      serviceCards: [
        { title: "💡 Innovation", text: "We design modern and efficient solutions tailored exactly to your needs." },
        { title: "🚀 Speed", text: "Projects are implemented quickly and efficiently while maintaining high quality and reliability." },
        { title: "🔒 Security", text: "We ensure security and reliability so you can work without worries." }
      ],
      projects: {
        title: "Projects",
        filters: ["All", "Make", "AI", "Script / Non-AI"],
        emptyTitle: "No projects yet",
        emptyText: "Once you add case studies they'll appear here. For now you can upload your own.",
        emptyAdd: "Add sample project",
        emptyConsult: "Request consultation"
      },
      aboutTitle: "About",
      aboutCards: [
        { title: "Expertise in automations", text: "We optimize processes and build smart automations that save companies time and money." },
        { title: "Creative team", text: "Our specialists combine theoretical know-how with practical skills to deliver real results." },
        { title: "Responsibility", text: "We work thoroughly with emphasis on security, quality and long-term value for clients." }
      ],
      testimonialsTitle: "What our clients say",
      contactTitle: "Contact", 
      contactForm: {
        heading: "Contact us", 
        placeholders: { name: "Your name", email: "your@email.com", tel: "Phone number", message: "Your message" },
        consent: "I consent to the processing of data",
        submit: "Send"
      },
      companyInfo: {
        nameLabel: "SpecifAI s.r.o.",
        addressValue: "Not yet, but in Brno",
        icoValue: "ID: not yet",
        dicValue: "VAT: not yet",
        phoneValue: "+420 773 952 636",
        emailValue: "kontakt@specifai.cz"
      },
      toast: "Your message has been sent successfully",
      footer: {
        about: "Smart solutions for your business – with or without AI. Free your teams, leave the routine to us.",
        techTitle: "Technologies",
        contactTitle: "Company details",
        copyright: "© 2025 SpecifAI.",
        privacy: "Privacy Policy"
      },
      headerBtnText: "EN/CZ"
    }
  };

  // funkce pro bezpečné nasazení textu (pokud element existuje)
  const safeSetText = (selector, text, useInnerHTML = false) => {
    const el = document.querySelector(selector);
    if (!el) return;
    if (useInnerHTML) el.innerHTML = text;
    else el.textContent = text;
  };
  
  // funkce pro bezpečné nasazení textu na více elementů
  const safeSetTextAll = (selector, texts) => {
    const els = document.querySelectorAll(selector);
    els.forEach((el, i) => {
      if(el && texts[i]) el.textContent = texts[i];
    });
  };

  function applyLanguage(lang) {
    const t = translations[lang];

    document.documentElement.lang = t.htmlLang;
    if (t.title) document.title = t.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t.metaDescription || "");

    // header nav
    safeSetTextAll("header nav ul li a", t.headerNav);

    // hero
    safeSetText(".hero-content h1", t.heroTitle);
    safeSetText(".hero-content p", t.heroText);
    safeSetText(".hero-btn", t.heroBtn);

    // services
    safeSetText("#services .section-title", t.servicesTitle);
    const serviceCards = document.querySelectorAll("#services .benefit-card");
    serviceCards.forEach((card, i) => {
      if (!t.serviceCards[i]) return;
      safeSetText(`#services .benefit-card:nth-of-type(${i+1}) h3`, t.serviceCards[i].title);
      safeSetText(`#services .benefit-card:nth-of-type(${i+1}) p`, t.serviceCards[i].text);
    });

    // projects
    safeSetText("#projects .section-title", t.projects.title);
    safeSetTextAll(".filter-bar .filter-btn", t.projects.filters);
    safeSetText("#projects-empty h3", t.projects.emptyTitle);
    safeSetText("#projects-empty .muted", t.projects.emptyText);
    safeSetText("#empty-add", t.projects.emptyAdd);
    safeSetText("#projects-empty .empty-ctas .btn-link", t.projects.emptyConsult);
    
    // about
    safeSetText("#about .section-title", t.aboutTitle);
    const aboutCards = document.querySelectorAll("#about .benefit-card");
    aboutCards.forEach((card, i) => {
        if (!t.aboutCards[i]) return;
        safeSetText(`#about .benefit-card:nth-of-type(${i+1}) h3`, t.aboutCards[i].title);
        safeSetText(`#about .benefit-card:nth-of-type(${i+1}) p`, t.aboutCards[i].text);
    });
    
    // Testimonials
    safeSetText("#testimonials .section-title", t.testimonialsTitle);

    // contact
    safeSetText("#contact .section-title", t.contactTitle);
    safeSetText("#contact-form h3", t.contactForm.heading);
    const inputName = document.getElementById("name");
    const inputEmail = document.getElementById("email");
    const inputTel = document.getElementById("tel");
    const textarea = document.getElementById("message");
    if (inputName) inputName.placeholder = t.contactForm.placeholders.name;
    if (inputEmail) inputEmail.placeholder = t.contactForm.placeholders.email;
    if (inputTel) inputTel.placeholder = t.contactForm.placeholders.tel;
    if (textarea) textarea.placeholder = t.contactForm.placeholders.message;
    safeSetText("label[for='consent']", t.contactForm.consent);
    safeSetText("#contact-form button[type='submit']", t.contactForm.submit);
    
    // Nová patička
    safeSetText(".footer-col.footer-about p", t.footer.about);
    safeSetText(".footer-col.footer-about h4", t.footer.techTitle);
    safeSetText(".footer-col.footer-contact h4", t.footer.contactTitle);
    
    const footerContactP = document.querySelector(".footer-col.footer-contact p:nth-of-type(1)");
    if(footerContactP) {
      footerContactP.innerHTML = `
        <strong>${t.companyInfo.nameLabel}</strong><br>
        ${t.companyInfo.addressValue}<br>
        ${t.companyInfo.icoValue}<br>
        ${t.companyInfo.dicValue}
      `;
    }
    const footerContactA = document.querySelector(".footer-col.footer-contact p:nth-of-type(2)");
    if(footerContactA) {
      footerContactA.innerHTML = `
        <a href="mailto:${t.companyInfo.emailValue}">${t.companyInfo.emailValue}</a><br>
        <a href="tel:${t.companyInfo.phoneValue}">${t.companyInfo.phoneValue}</a>
      `;
    }

    safeSetText(".footer-bottom", `${t.footer.copyright} <a href="#">${t.footer.privacy}</a>`, true);

    // toast
    safeSetText("#toast", t.toast);

    // aria labels
    const navElement = document.querySelector("nav[aria-label]");
    if (navElement) navElement.setAttribute("aria-label", lang === "cs" ? "Hlavní menu" : "Main menu");
    
    const filterBar = document.querySelector(".filter-bar");
    if (filterBar) filterBar.setAttribute("aria-label", lang === "cs" ? "Filtry projektů" : "Project filters");

    // header button text
    langBtn.textContent = t.headerBtnText;
  }

  // inicializace (nastavit výchozí české texty)
  applyLanguage(currentLang);

  // přepínání
  langBtn.addEventListener("click", () => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      currentLang = currentLang === "cs" ? "en" : "cs";
      applyLanguage(currentLang);
      document.body.classList.remove("fade-out");
      document.body.classList.add("fade-in");
      setTimeout(() => {
        document.body.classList.remove("fade-in");
      }, 500);
    }, 500);
  });

});

})();
