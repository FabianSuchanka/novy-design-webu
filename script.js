document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SLOVNÍK PŘEKLADŮ (beze změny) ---
    const translations = {
        cs: {
            // NAVIGACE
            nav_home: "Domů",
            nav_services: "Inovace",
            nav_projects: "Portfolio",
            nav_about: "O nás",
            nav_contact: "Kontakt",
            btn_inquire: "Poptat",
            
            // HERO
            hero_title: "Automatizace, která šetří váš čas",
            hero_subtitle: "Uvolněte své týmy, rutinu nechte na nás. Chcete vědět, jak na to?",
            btn_consultation: "Konzultace",
            btn_more: "Více",
            tech_label: "Technologie, kterým věříme",

            // SLUŽBY
            services_label: "Inovace",
            services_title: "Na míru šitá řešení",
            services_subtext: "Každý projekt je jiný. Budujeme to, co vám opravdu pomůže.",
            feat_1_label: "Rychlost",
            feat_1_title: "Rychlá implementace bez zbytečných průtahů",
            feat_1_desc: "Máme zkušenosti. Víme, jak to udělat efektivně a bez chyb.",
            feat_2_label: "Bezpečnost",
            feat_2_title: "Spolehlivá práce s vašimi daty",
            feat_2_desc: "Vaše informace jsou v bezpečí. Pracujeme podle nejpřísnějších standardů.",
            feat_3_label: "Kreativita",
            feat_3_title: "Neobvyklé přístupy k běžným problémům",
            feat_3_desc: "Někdy nejlepší řešení není to nejjednodušší. Hledáme to správné.",

            // PORTFOLIO
            portfolio_label: "Portfolio",
            portfolio_title: "Projekty, které jsme vytvořili",
            portfolio_subtext: "Podívejte se, jak jsme pomohli jiným firmám ušetřit čas a peníze.",
            proj_1_title: "Automatizace faktur",
            proj_1_desc: "Faktury se teď generují samy. Bez chyb, bez čekání.",
            tag_accounting: "Účetnictví",
            proj_2_title: "Třídění e-mailů AI",
            proj_2_desc: "Umělá inteligence teď zná rozdíl mezi důležitým a zbytečným.",
            proj_3_title: "Scraping dat",
            proj_3_desc: "Data se sbírají sama. Nic se neztratí, nic se nezmešká.",
            tag_scripts: "Skripty",

            // O NÁS (NOVÉ)
            about_title: "Dva nadšenci, jeden cíl",
            about_subtext: "Nejsme korporát. Jsme mladý tým, který baví technologie a efektivita.",
            about_desc_1: "SpecifAI tvoříme my dva. Máme energii, chuť pracovat a neustále se učit nové věci. Svět automatizace se mění každý den a my držíme krok.",
            about_desc_2: "Nehledáme složitá řešení. Chceme jediné: ušetřit vám peníze a zbavit vás nudné práce.",

            // KONTAKT - INFO
            contact_label: "Kontakt",
            contact_title: "Pojďme spolu",
            contact_subtext: "Máte otázku? Chcete vědět víc? Ozvěte se nám. Odpovíme rychle.",
            email_label: "E-mail",
            office_label: "Kancelář",

            // KONTAKT - FORMULÁŘ
            form_title: "Napište nám",
            label_fname: "Jméno",
            label_lname: "Příjmení",
            label_email: "E-mail",
            label_phone: "Telefonní číslo",
            label_topic: "Vyberte téma",
            label_company_type: "Jaký jste typ firmy?",
            label_msg: "Zpráva",
            label_consent: "Souhlasím se zpracováním údajů",
            btn_send: "Odeslat",
            ph_fname: "Jan",
            ph_lname: "Novák",
            ph_email: "jan@firma.cz",
            ph_phone: "+420 777 123 456",
            ph_msg: "Napište nám...",

            opt_select: "Zvolte...",
            opt_inquiry: "Poptávka",
            opt_consultation: "Konzultace",
            opt_career: "Kariéra",
            opt_other: "Jiné",

            company_small: "Malá firma",
            company_medium: "Střední podnik",
            company_corp: "Velká korporace",
            company_startup: "Startup",
            company_nonprofit: "Neziskovka",
            company_other: "Jiné",

            // PATIČKA
            footer_desc: "Pomáháme firmám růst pomocí chytré automatizace a umělé inteligence. Uvolněte ruce svému týmu.",
            footer_nav: "Navigace",
            footer_contact: "Kontakt",
            footer_stay_updated: "Zůstaňte v obraze",
            footer_newsletter_text: "Tipy a triky o automatizaci přímo do vašeho emailu.",
            placeholder_email: "Váš e-mail",
            all_rights: "Všechna práva vyhrazena.",
            privacy_policy: "Zásady ochrany osobních údajů",
            terms: "Obchodní podmínky"
        },
        en: {
            // NAV
            nav_home: "Home",
            nav_services: "Innovation",
            nav_projects: "Portfolio",
            nav_about: "About",
            nav_contact: "Contact",
            btn_inquire: "Inquire",
            
            // HERO
            hero_title: "Automation that saves your time",
            hero_subtitle: "Free your teams, leave the routine to us. Want to know how?",
            btn_consultation: "Consultation",
            btn_more: "More info",
            tech_label: "Technologies we believe in",

            // SERVICES
            services_label: "Innovation",
            services_title: "Tailor-made solutions",
            services_subtext: "Every project is different. We build what really helps you.",
            feat_1_label: "Speed",
            feat_1_title: "Fast implementation without delays",
            feat_1_desc: "We have experience. We know how to do it efficiently and without errors.",
            feat_2_label: "Security",
            feat_2_title: "Reliable data handling",
            feat_2_desc: "Your information is safe. We work according to the strictest standards.",
            feat_3_label: "Creativity",
            feat_3_title: "Unusual approaches to common problems",
            feat_3_desc: "Sometimes the best solution isn't the simplest one. We find the right one.",

            // PORTFOLIO
            portfolio_label: "Portfolio",
            portfolio_title: "Projects we created",
            portfolio_subtext: "See how we helped other companies save time and money.",
            proj_1_title: "Invoice Automation",
            proj_1_desc: "Invoices are now generated automatically. No errors, no waiting.",
            tag_accounting: "Accounting",
            proj_2_title: "AI Email Sorting",
            proj_2_desc: "Artificial intelligence now knows the difference between important and useless.",
            proj_3_title: "Data Scraping",
            proj_3_desc: "Data is collected automatically. Nothing gets lost, nothing gets missed.",
            tag_scripts: "Scripts",

            // ABOUT (NEW)
            about_title: "Two enthusiasts, one goal",
            about_subtext: "No corporate nonsense. We are a young team driven by technology and efficiency.",
            about_desc_1: "SpecifAI is just the two of us. We have energy, passion to work, and a constant drive to learn. The world of automation changes daily, and we keep up.",
            about_desc_2: "We don't seek complexity. We want one thing: to save you money and free you from boring tasks.",

            // CONTACT - INFO
            contact_label: "Contact",
            contact_title: "Let's work together",
            contact_subtext: "Have a question? Want to know more? Get in touch. We answer fast.",
            email_label: "Email",
            office_label: "Office",

            // CONTACT - FORM
            form_title: "Write to us",
            label_fname: "First Name",
            label_lname: "Last Name",
            label_email: "Email",
            label_phone: "Phone Number",
            label_topic: "Select Topic",
            label_company_type: "Company Type",
            label_msg: "Message",
            label_consent: "I agree to data processing",
            btn_send: "Send",
            ph_fname: "John",
            ph_lname: "Doe",
            ph_email: "john@company.com",
            ph_phone: "+1 234 567 890",
            ph_msg: "Write us something...",

            opt_select: "Choose...",
            opt_inquiry: "Inquiry",
            opt_consultation: "Consultation",
            opt_career: "Career",
            opt_other: "Other",

            company_small: "Small Business",
            company_medium: "Medium Enterprise",
            company_corp: "Corporation",
            company_startup: "Startup",
            company_nonprofit: "Non-profit",
            company_other: "Other",

            // FOOTER
            footer_desc: "Helping businesses grow with smart automation and AI. Free up your team's hands.",
            footer_nav: "Navigation",
            footer_contact: "Contact",
            footer_stay_updated: "Stay Updated",
            footer_newsletter_text: "Automation tips and tricks straight to your inbox.",
            placeholder_email: "Your email",
            all_rights: "All rights reserved.",
            privacy_policy: "Privacy Policy",
            terms: "Terms & Conditions"
        }
    };

    // --- 2. LOGIKA PŘEPÍNÁNÍ JAZYKA ---
    let currentLang = 'cs'; 
    const langBtn = document.getElementById('langBtn');

    function updateLanguage(lang) {
        // A) Obecné texty
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = translations[lang][key];
                else el.textContent = translations[lang][key];
            }
        });

        // B) Placeholdery
        const inputs = { 'fname': 'ph_fname', 'lname': 'ph_lname', 'email': 'ph_email', 'phone': 'ph_phone', 'msg': 'ph_msg' };
        for (const [id, key] of Object.entries(inputs)) {
            const el = document.getElementById(id);
            if(el) el.placeholder = translations[lang][key];
        }

        // C) Roletka 1 (Téma)
        const topicSelect = document.getElementById('topic');
        if (topicSelect) {
            topicSelect.options[0].text = translations[lang].opt_select;
            topicSelect.options[1].text = translations[lang].opt_inquiry;
            topicSelect.options[2].text = translations[lang].opt_consultation;
            topicSelect.options[3].text = translations[lang].opt_career;
            topicSelect.options[4].text = translations[lang].opt_other;
        }

        // D) Roletka 2 (Typ firmy) - NOVÉ
        const companySelect = document.getElementById('company-type');
        if (companySelect) {
            companySelect.options[0].text = translations[lang].opt_select;
            companySelect.options[1].text = translations[lang].company_small;
            companySelect.options[2].text = translations[lang].company_medium;
            companySelect.options[3].text = translations[lang].company_corp;
            companySelect.options[4].text = translations[lang].company_startup;
            companySelect.options[5].text = translations[lang].company_nonprofit;
            companySelect.options[6].text = translations[lang].company_other;
        }

        langBtn.textContent = lang === 'cs' ? 'EN' : 'CZ';
        currentLang = lang;
        document.documentElement.lang = lang;
    }

    langBtn.addEventListener('click', () => {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            const newLang = currentLang === 'cs' ? 'en' : 'cs';
            updateLanguage(newLang);
            document.body.classList.remove('fade-out');
        }, 300);
    });

    // --- 3. SCROLLOVÁNÍ & MENU ---
    function smoothScrollTo(targetId) {
        const target = document.querySelector(targetId);
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href');
            if (id !== '#') {
                smoothScrollTo(id);
                if(window.innerWidth <= 900) {
                    navLinks.style.display = 'none';
                    navLinks.style.removeProperty('flex-direction');
                    navLinks.style.removeProperty('position');
                }
            }
        });
    });

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                Object.assign(navLinks.style, {
                    flexDirection: 'column', position: 'absolute', top: '72px', left: '0', width: '100%',
                    background: 'white', padding: '24px', borderBottom: '1px solid #e5e7eb', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
                });
            }
        });
    }

    // --- 4. ODESLÁNÍ FORMULÁŘE (MAKE.COM) ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = currentLang === 'cs' ? "Odesílám..." : "Sending...";
            btn.disabled = true;
            
            // Sběr dat (upraveno pro novou roletku)
            const formData = {
                jmeno: document.getElementById('fname').value,
                prijmeni: document.getElementById('lname').value,
                email: document.getElementById('email').value,
                telefon: document.getElementById('phone').value,
                tema: document.getElementById('topic').value,
                
                // Zde čteme hodnotu z nové roletky
                typFirmy: document.getElementById('company-type').value || "Neuvedeno",
                
                zprava: document.getElementById('msg').value
            };

            try {
                // TVŮJ WEBHOOK URL
                const webhookUrl = 'https://hook.eu2.make.com/7g7ghz2u7b2w3cbqmkf21jjnvj64gasv';
                
                await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                btn.textContent = currentLang === 'cs' ? "Odesláno ✓" : "Sent ✓";
                btn.style.background = "#00B388";
                btn.style.borderColor = "#00B388";
                contactForm.reset();
            } catch (error) {
                console.error("Chyba:", error);
                btn.textContent = "Error";
                btn.style.background = "red";
            } finally {
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = "";
                    btn.style.borderColor = "";
                    btn.disabled = false;
                }, 3000);
            }
        });
    }
});
