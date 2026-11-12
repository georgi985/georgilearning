const store = {
  get(k, d){ try{ const v = localStorage.getItem('campus:' + k); return v ? JSON.parse(v) : d; }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem('campus:' + k, JSON.stringify(v)); }catch(e){} }
};
let LANG = store.get('lang', null) || ((navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en');

/* ===== Contenu bilingue. Pour mettre à jour le CV : modifier CV.fr et CV.en ci-dessous. ===== */
const T = {
  fr:{ nav:{accueil:"Accueil",cv:"CV",services:"Services",learning:"Learning",outils:"Outils",contact:"Contact"},
    title:"Georges Alain Cabo · Audit IT et sécurité de l'information",
    eyebrow:"AUDIT IT · SÉCURITÉ DE L'INFORMATION · GOUVERNANCE",
    h1:"Rendre la sécurité de l'information mesurable, auditable et utile au métier.",
    lead:"Auditeur des systèmes d'information, je travaille sur la gouvernance IT, les contrôles généraux informatiques et les systèmes de management de la sécurité (ISO/IEC 27001). Ce site réunit mon CV, mes cours de certification et des outils pratiques.",
    seeCv:"Voir mon CV", goLearning:"Accéder aux cours",
    modules:"Sur ce site",
    m:[
      ["cv","CV","Parcours, compétences et certifications, en français et en anglais.",""],
      ["services","Compétences et services","Ce que je sais faire et ce que je propose : audit IT, ISO 27001, surveillance de sécurité avec Wazuh, formation.",""],
      ["learning","Learning","Cours et QCM corrigés : ISO 27001 Lead Implementer, Security+, CISA, CISM, CISSP. Tous les cours et QCM existent en français et en anglais.",""],
      ["outils","Outils","Calculatrice de risque (ALE) et glossaire bilingue de l'audit et de la sécurité.",""],
      ["contact","Contact","Me joindre pour une mission d'audit, un accompagnement ISO 27001 ou une formation.",""],
      [null,"Portfolio d'audit","Cas d'audit anonymisés : contexte, démarche, constats et recommandations.","soon"],
      [null,"Boîte à outils","Modèles téléchargeables : DdA, matrice de risques, check-list ITGC.","soon"],
      [null,"Blog et veille","Notes sur les normes, la réglementation et l'actualité cyber.","soon"]
    ],
    svc:{ title:"Compétences et services", eyebrow:"COMPÉTENCES · OFFRES DE SERVICE",
      lead:"J'aide les organisations à prouver que leurs systèmes sont maîtrisés : audit des contrôles informatiques, mise en place d'un système de management de la sécurité, et surveillance de sécurité avec des outils open source comme Wazuh.",
      skillsTitle:"Compétences",
      skills:[
        ["Audit des systèmes d'information","Contrôles généraux informatiques (ITGC) : accès, changements, exploitation. Contrôles applicatifs (ITAC) et fiabilité des rapports (IPE). Analyse de données d'audit."],
        ["Gouvernance et ISO/IEC 27001","Analyse d'écart, appréciation des risques, Déclaration d'applicabilité, politiques, préparation à l'audit de certification."],
        ["Surveillance de sécurité (SOC) avec Wazuh","Collecte et analyse des journaux, règles de détection sur mesure, intégrité des fichiers, conformité CIS, vulnérabilités, réponse active, tableaux de bord MITRE ATT&CK et PCI DSS."],
        ["Environnements Windows et Active Directory","Stratégies de groupe (GPO), stratégie d'audit avancée, déploiement d'agents, durcissement."],
        ["Connaissance des secteurs","Banque (UMOA), monnaie électronique, assurance (CIMA), télécoms, pétrole et gaz, entreprises commerciales et industrielles."]],
      offersTitle:"Offres de service",
      offers:[
        ["Audit IT (ITGC et ITAC)","Pour les directions, les cabinets d'audit et les commissaires aux comptes.",["Cartographie des applications qui alimentent les comptes","Tests des accès, des changements et de l'exploitation","Tests des contrôles automatiques et des rapports","Rapport de constats classés par risque, avec recommandations"]],
        ["Accompagnement ISO/IEC 27001","Pour les organisations qui visent la certification ou veulent structurer leur sécurité.",["Analyse d'écart par rapport à la norme","Méthode et appréciation des risques","Déclaration d'applicabilité et plan de traitement","Préparation de l'audit interne et de la revue de direction"]],
        ["Mise en place d'une surveillance de sécurité avec Wazuh","Pour les PME, banques, microfinances et émetteurs de monnaie électronique qui veulent un SOC sans licence coûteuse.",["Installation et déploiement des agents (y compris par GPO)","Règles de détection adaptées aux applications métier","Surveillance des fichiers sensibles : qui a modifié quoi","Réduction du bruit pour ne garder que les alertes utiles","Tableaux de bord pour la direction et preuves pour les auditeurs"]],
        ["Diagnostic de conformité des postes et serveurs","Mesure du niveau de configuration par rapport aux recommandations CIS, avec plan de correction.",["Score de conformité initial","Corrections par stratégies de groupe","Suivi dans le temps et alerte en cas de recul"]],
        ["Formation et sensibilisation","Pour les équipes d'audit, informatiques et métiers.",["Audit IT pour auditeurs financiers","Préparation aux certifications (ISO 27001, CISA, Security+)","Sensibilisation des utilisateurs aux risques"]]],
      demoTitle:"Démonstration : mon laboratoire Wazuh",
      demoLead:"Pour montrer concrètement ma maîtrise de l'outil, j'ai monté un laboratoire complet (contrôleur de domaine Samba AD, serveur Wazuh 4.14, poste Windows 11) et documenté chaque étape dans un cahier de 105 pages. Ce que chaque lab démontre :",
      labs:[
        ["Lab 1 · Comment Wazuh lit un journal","Décodeurs, règles, niveaux d'alerte et règles de corrélation (détection de force brute SSH)."],
        ["Lab 2 · Règles sur mesure","Écriture d'un décodeur et de règles pour une application métier dont Wazuh ne connaît pas les journaux."],
        ["Lab 3 · Stratégies de groupe","Création de GPO d'audit avancé et déploiement automatique de l'agent Wazuh sur le domaine."],
        ["Lab 4 · Conformité CIS (SCA)","Score de conformité d'un poste Windows 11, corrections par GPO et alerte quand la conformité recule."],
        ["Lab 5 · Intégrité des fichiers","Savoir qui a modifié un fichier sensible, avec quel programme et ce qui a changé."],
        ["Bonus · Réduction du bruit","Règles enfants pour supprimer environ 90 alertes critiques inutiles par jour sans perdre de détection."],
        ["Lab 6 · Inventaire et vulnérabilités","Inventaire logiciel, vulnérabilités connues (CVE, CVSS), correction et vérification."],
        ["Lab 7 · Réponse active","Blocage automatique d'un attaquant par le pare-feu après une force brute."],
        ["Lab 8 · MITRE, conformité, tableaux de bord","Lecture de la couverture MITRE ATT&CK, preuves PCI DSS et NIS2, vues pour la direction et l'analyste, plan d'amélioration."]],
      demoNote:"Ce laboratoire est un environnement de test personnel : aucune donnée de client n'y est utilisée.",
      ctaTitle:"Un projet ?", cta:"Me contacter", ctaText:"Décrivez votre besoin : je vous réponds avec une proposition adaptée à votre taille et à votre secteur." },
    soon:"Bientôt", open:"Ouvrir",
    cvTitle:"Curriculum vitæ", print:"Imprimer / PDF",
    cvNote:"",
    toolsTitle:"Outils",
    aleTitle:"Calculatrice de perte annuelle attendue (ALE)",
    aleLead:"SLE = valeur de l'actif × facteur d'exposition ; ALE = SLE × ARO (fréquence annuelle). Utile pour comparer le coût d'une mesure à la perte qu'elle évite.",
    av:"Valeur de l'actif", ef:"Facteur d'exposition (%)", aro:"Occurrences par an (ARO)", cost:"Coût annuel de la mesure (facultatif)", cur:"FCFA",
    sle:"SLE", ale:"ALE", worth:"La mesure coûte moins que la perte annuelle attendue : elle se justifie financièrement.", notWorth:"La mesure coûte plus que la perte annuelle attendue : à justifier autrement (exigence légale, image…).",
    gloTitle:"Glossaire bilingue",
    contactTitle:"Contact",
    contactLead:"Pour une mission d'audit, un accompagnement à la mise en œuvre d'un SMSI ou une session de formation.",
    contactNote:"Coordonnées à compléter : indique-moi l'adresse électronique et le profil LinkedIn que tu veux afficher publiquement.",
    foot:"© 2026 Georges Alain Cabo · georgilearning.academy" },
  en:{ nav:{accueil:"Home",cv:"Resume",services:"Services",learning:"Learning",outils:"Tools",contact:"Contact"},
    title:"Georges Alain Cabo · IT audit and information security",
    eyebrow:"IT AUDIT · INFORMATION SECURITY · GOVERNANCE",
    h1:"Making information security measurable, auditable and useful to the business.",
    lead:"As an information systems auditor, I work on IT governance, IT general controls and information security management systems (ISO/IEC 27001). This site brings together my resume, my certification courses and practical tools.",
    seeCv:"View my resume", goLearning:"Go to the courses",
    modules:"On this site",
    m:[
      ["cv","Resume","Background, skills and certifications, in English and French.",""],
      ["services","Skills and services","What I do and what I offer: IT audit, ISO 27001, security monitoring with Wazuh, training.",""],
      ["learning","Learning","Courses and practice questions: ISO 27001 Lead Implementer, Security+, CISA, CISM, CISSP. All courses and practice questions are available in English and French.",""],
      ["outils","Tools","Risk calculator (ALE) and bilingual audit and security glossary.",""],
      ["contact","Contact","Reach me for an audit engagement, ISO 27001 support or training.",""],
      [null,"Audit portfolio","Anonymized audit cases: context, approach, findings and recommendations.","soon"],
      [null,"Toolkit","Downloadable templates: SoA, risk matrix, ITGC checklist.","soon"],
      [null,"Blog and news","Notes on standards, regulation and cyber news.","soon"]
    ],
    svc:{ title:"Skills and services", eyebrow:"SKILLS · SERVICES",
      lead:"I help organizations prove that their systems are under control: IT controls audit, information security management systems, and security monitoring with open source tools such as Wazuh.",
      skillsTitle:"Skills",
      skills:[
        ["Information systems audit","IT general controls (ITGC): access, change, operations. Application controls (ITAC) and report reliability (IPE). Audit data analytics."],
        ["Governance and ISO/IEC 27001","Gap analysis, risk assessment, Statement of Applicability, policies, certification audit readiness."],
        ["Security monitoring (SOC) with Wazuh","Log collection and analysis, custom detection rules, file integrity, CIS compliance, vulnerabilities, active response, MITRE ATT&CK and PCI DSS dashboards."],
        ["Windows and Active Directory","Group Policy (GPO), advanced audit policy, agent deployment, hardening."],
        ["Industry knowledge","Banking (WAMU), e-money, insurance (CIMA), telecoms, oil and gas, trading and industrial companies."]],
      offersTitle:"Services",
      offers:[
        ["IT audit (ITGC and ITAC)","For management, audit firms and statutory auditors.",["Map the applications that feed the financial statements","Test access, change and operations controls","Test automated controls and system reports","Findings report ranked by risk, with recommendations"]],
        ["ISO/IEC 27001 support","For organizations aiming at certification or structuring their security.",["Gap analysis against the standard","Risk method and risk assessment","Statement of Applicability and treatment plan","Internal audit and management review readiness"]],
        ["Security monitoring with Wazuh","For SMEs, banks, microfinance institutions and e-money issuers that want a SOC without costly licenses.",["Installation and agent deployment (including through GPO)","Detection rules tailored to business applications","Monitoring of sensitive files: who changed what","Noise reduction to keep only useful alerts","Dashboards for management and evidence for auditors"]],
        ["Endpoint and server compliance assessment","Measure configuration against CIS recommendations, with a remediation plan.",["Baseline compliance score","Fixes through Group Policy","Tracking over time and alert when compliance drops"]],
        ["Training and awareness","For audit, IT and business teams.",["IT audit for financial auditors","Certification preparation (ISO 27001, CISA, Security+)","User security awareness"]]],
      demoTitle:"Showcase: my Wazuh lab",
      demoLead:"To show hands-on command of the tool, I built a complete lab (Samba AD domain controller, Wazuh 4.14 server, Windows 11 endpoint) and documented every step in a 105-page lab book. What each lab demonstrates:",
      labs:[
        ["Lab 1 · How Wazuh reads a log","Decoders, rules, alert levels and correlation rules (SSH brute force detection)."],
        ["Lab 2 · Custom rules","Writing a decoder and rules for a business application whose logs Wazuh does not know."],
        ["Lab 3 · Group Policy","Building advanced audit GPOs and deploying the Wazuh agent automatically across the domain."],
        ["Lab 4 · CIS compliance (SCA)","Compliance score of a Windows 11 endpoint, fixes through GPO and an alert when compliance drops."],
        ["Lab 5 · File integrity","Knowing who changed a sensitive file, with which program, and what changed."],
        ["Bonus · Noise reduction","Child rules that remove about 90 useless critical alerts a day without losing detection."],
        ["Lab 6 · Inventory and vulnerabilities","Software inventory, known vulnerabilities (CVE, CVSS), remediation and verification."],
        ["Lab 7 · Active response","Automatic firewall block of an attacker after a brute force."],
        ["Lab 8 · MITRE, compliance, dashboards","Reading MITRE ATT&CK coverage, PCI DSS and NIS2 evidence, views for management and analysts, improvement plan."]],
      demoNote:"This lab is a personal test environment: no client data is used in it.",
      ctaTitle:"A project?", cta:"Contact me", ctaText:"Describe your needs: I will reply with a proposal suited to your size and industry." },
    soon:"Coming soon", open:"Open",
    cvTitle:"Resume", print:"Print / PDF",
    cvNote:"",
    toolsTitle:"Tools",
    aleTitle:"Annualized loss expectancy (ALE) calculator",
    aleLead:"SLE = asset value × exposure factor; ALE = SLE × ARO (annual rate of occurrence). Useful to compare the cost of a control with the loss it prevents.",
    av:"Asset value", ef:"Exposure factor (%)", aro:"Occurrences per year (ARO)", cost:"Annual cost of the control (optional)", cur:"XOF",
    sle:"SLE", ale:"ALE", worth:"The control costs less than the expected annual loss: it is financially justified.", notWorth:"The control costs more than the expected annual loss: justify it otherwise (legal requirement, reputation…).",
    gloTitle:"Bilingual glossary",
    contactTitle:"Contact",
    contactLead:"For an audit engagement, support implementing an ISMS or a training session.",
    contactNote:"Contact details to be added.",
    foot:"© 2026 Georges Alain Cabo · georgilearning.academy" }
};

const CV = {
  fr:{ name:"Georges Alain Cabo", role:"Auditeur senior · Audit IT et risques", place:"Dakar, Sénégal",
    summary:"Ingénieur de conception en télécommunications et réseaux devenu auditeur IT. Depuis octobre 2023, d'abord chez EY puis chez Eritedge Sénégal (auditeur senior depuis juillet 2026), j'interviens sur le volet informatique des missions de commissariat aux comptes : contrôle interne, contrôles généraux informatiques, revue des accès et analyse de données, pour des banques, des opérateurs télécoms, des émetteurs de monnaie électronique et des industriels en Afrique de l'Ouest. Je prépare la certification ISO/IEC 27001 Lead Implementer.",
    side:[
      ["Contact",["<a href=\"tel:+221771567940\">+221 77 156 79 40</a>","<a href=\"mailto:georgesalain985" + String.fromCharCode(64) + "gmail.com\">georgesalain985" + String.fromCharCode(64) + "gmail.com</a>","<a href=\"mailto:georginho985" + String.fromCharCode(64) + "icloud.com\">georginho985" + String.fromCharCode(64) + "icloud.com</a>","<a href=\"https://www.linkedin.com/in/georges-alain-gracien-cabo-445189183\" rel=\"noopener\" target=\"_blank\">LinkedIn</a>","Dakar, Sénégal"]],
      ["Compétences",["Audit informatique selon ISO/IEC 27001, COBIT 5 et ITIL","Gouvernance et gestion des risques IT","Contrôles généraux informatiques et contrôles applicatifs","Séparation des tâches (SoD)","Revue des accès et gestion des habilitations, PAM","Conformité réglementaire et audits"]],
      ["Outils",["Analyse de données : Excel, Alteryx, Python, ACL","Bases de données : Oracle, SQL Server, Informix","Systèmes : Windows Server, Red Hat, AIX","Réseaux : TCP/IP, VLAN, VPN, pare-feu, routage","VoIP : Asterisk, FreePBX, 3CX"]],
      ["Points forts",["Badges EY Bronze : cybersécurité et cloud (2024)","TryHackMe : Cyber Security 101 (2025)","Cisco : CCNAv7 et DevNet Associate","ISO/IEC 27001 Lead Implementer (PECB) : en préparation"]],
      ["Langues",["Français : courant","Wolof : courant","Anglais : intermédiaire"]],
      ["Musique",["Autodidacte : piano, guitare, flûte à bec, flûte traversière, harmonica","Lecture et déchiffrage de partitions"]]
    ],
    expTitle:"Expérience",
    jobs:[
      ["Depuis juillet 2026","Auditeur senior · Eritedge Sénégal, Dakar",[
        "Évaluation de la conception (test of design) et de l'efficacité (test of effectiveness) du contrôle interne dans le cadre du commissariat aux comptes.",
        "Revue des contrôles généraux informatiques et des contrôles applicatifs ; analyse des processus finance, achats, ventes et stocks.",
        "Analyse de données avec des outils CAAT (ACL) et des requêtes sur Oracle et SQL Server ; évaluation des risques opérationnels.",
        "Revue des accès et des habilitations : cycle de vie des comptes, moindre privilège, revues périodiques, comptes orphelins ou excessifs, comptes à privilèges (PAM), matrices de séparation des tâches.",
        "Secteurs : banques commerciales et banques centrales, télécommunications, monnaie électronique, pétrole et industrie."]],
      ["Mai – juillet 2026","Auditeur assistant · Eritedge Sénégal, Dakar",[
        "Missions d'audit IT dans les secteurs bancaire, télécoms et monnaie électronique."]],
      ["Juillet 2024 – avril 2026","Assistant · EY, Sénégal",[
        "Audit IT des missions de commissariat aux comptes : contrôles généraux informatiques, contrôles applicatifs, revue des accès et analyse de données.",
        "Formation interne EY et pratique professionnelle de l'anglais."]],
      ["Octobre 2023 – septembre 2024","Staff (stage) · EY, Dakar",[
        "Intégration à l'équipe d'audit IT : tests de contrôles, revue des accès et préparation des dossiers de travail ; formation interne EY."]],
      ["Septembre 2022 – février 2023","Responsable VoIP · INTERSIP International, Dakar",[
        "Mise en place d'un serveur de téléphonie et d'un serveur vocal interactif (IVR) qui diffuse des messages programmés et enregistre les réponses en base de données.",
        "Serveur FTP pour sauvegarder et récupérer les fichiers de configuration et les enregistrements audio.",
        "Sécurité et supervision : VPN, proxy, pare-feu, ELK, NGINX, Zabbix, Bind9 ; travail avec l'équipe de développement."]],
      ["Mars – juin 2022","Stage de fin d'études d'ingénieur · INTERSIP International, Dakar",[
        "Mémoire : mise en place d'un serveur vocal interactif (Asterisk) pour la formation des habitants en zone rurale."]],
      ["Juin – juillet 2019","Stage de technicien supérieur · INFOCONSUL, Dakar",[
        "Mémoire : mise en place d'un service 3CX permettant aux employés d'utiliser le même numéro sur le fixe, le mobile et l'ordinateur."]],
      ["Juillet – septembre 2018","Consultant · INFOCONSUL, Dakar",[
        "Câblage et réfection de réseaux pour l'hôpital Aristide Le Dantec, l'Administration pénitentiaire et la caserne Samba Diéry Diallo."]]
    ],
    certTitle:"Certifications, badges et formations",
    certs:[
      ["Badges EY",["Cybersecurity, niveau Bronze (2024)","Cloud Computing, niveau Bronze (2024)"],["ey-cybersecurity-bronze-learning-2024","ey-cloud-bronze-learning-2024"]],
      ["TryHackMe",["Cyber Security 101, parcours complet de 45 h (décembre 2025), certificat THM-DTWGQPKC5T","Advent of Cyber 2025 : 24 défis de cybersécurité (décembre 2025)","Pre Security, parcours complet de 19 h (septembre 2026), certificat THM-SXI3U9GYSR"]],
      ["Cisco Networking Academy",["CCNAv7 : Introduction aux réseaux (2023)","DevNet Associate (2021)"]],
      ["Formations EY en cybersécurité",["Cybersecurity : Introduction (2023)","Identity and Access Management (2024)","Data Protection and Privacy (2024)","Cybersecurity Program Assessment (2024)","Next Generation Security Operations and Response (2024)"]],
      ["Formations en ligne (Udemy)",["CompTIA Security+ SY0-701, cours complet et examen blanc, Jason Dion, 31 h (2025)","TOTAL : CompTIA Security+ SY0-701, Mike Meyers, 20,5 h (2024)","AWS Certified Cloud Practitioner CLF-C02, Stéphane Maarek, 15 h (2024)","A Practical Introduction to Cloud Computing (2024)","The Absolute Beginners Guide to Cyber Security 2024, parties 1 et 2 (2024)","Computer Forensics Fundamentals (2023)","Introduction to Security Awareness Campaigns (2023)","Cybersecurity for HR Professionals (2024)","Marketing Fundamentals : Small Business Marketing Success (2024)"]],
      ["Déontologie, qualité et conformité (EY)",["Global Code of Conduct, Conflicts of Interest, Independence Basics et Independence Update 2024","Financial Crime Fundamentals, Data Protection Fundamentals","Annual Data Protection and Information Security Update FY24, Security Awareness","Assurance Advisory Quality & Risk Management (2026), QRM Annual Update FY26","Inclusive Leadership for All (cours et podcasts), Transformation Realized"]]
    ],
    eduTitle:"Formation",
    edu:[["2019 – 2022","Diplôme d'ingénieur de conception en télécommunications et réseaux · École supérieure polytechnique (UCAD), Dakar"],
         ["2017 – 2019","Diplôme supérieur de technologie en télécommunications et réseaux · École supérieure polytechnique (UCAD), Dakar"],
         ["2017","Baccalauréat S2 · Collège Cardinal Hyacinthe Thiandoum, Dakar"]] },
  en:{ name:"Georges Alain Cabo", role:"Senior auditor · IT audit and risk", place:"Dakar, Senegal",
    summary:"Telecommunications and network design engineer turned IT auditor. Since October 2023, first at EY and then at Eritedge Senegal (senior auditor since July 2026), I have worked on the IT side of statutory audit engagements: internal control, IT general controls, access reviews and data analytics, for banks, telecom operators, e-money issuers and industrial companies in West Africa. I am preparing for the ISO/IEC 27001 Lead Implementer certification.",
    side:[
      ["Contact",["<a href=\"tel:+221771567940\">+221 77 156 79 40</a>","<a href=\"mailto:georgesalain985" + String.fromCharCode(64) + "gmail.com\">georgesalain985" + String.fromCharCode(64) + "gmail.com</a>","<a href=\"mailto:georginho985" + String.fromCharCode(64) + "icloud.com\">georginho985" + String.fromCharCode(64) + "icloud.com</a>","<a href=\"https://www.linkedin.com/in/georges-alain-gracien-cabo-445189183\" rel=\"noopener\" target=\"_blank\">LinkedIn</a>","Dakar, Senegal"]],
      ["Skills",["IT audit based on ISO/IEC 27001, COBIT 5 and ITIL","IT governance and risk management","IT general controls and application controls","Segregation of duties (SoD)","Access reviews and entitlement management, PAM","Regulatory compliance and audits"]],
      ["Tools",["Data analytics: Excel, Alteryx, Python, ACL","Databases: Oracle, SQL Server, Informix","Systems: Windows Server, Red Hat, AIX","Networking: TCP/IP, VLAN, VPN, firewalls, routing","VoIP: Asterisk, FreePBX, 3CX"]],
      ["Highlights",["EY Bronze badges: cybersecurity and cloud (2024)","TryHackMe: Cyber Security 101 (2025)","Cisco: CCNAv7 and DevNet Associate","ISO/IEC 27001 Lead Implementer (PECB): in preparation"]],
      ["Languages",["French: fluent","Wolof: fluent","English: intermediate"]],
      ["Music",["Self-taught: piano, guitar, recorder, transverse flute, harmonica","Reading and sight-reading sheet music"]]
    ],
    expTitle:"Experience",
    jobs:[
      ["Since July 2026","Senior auditor · Eritedge Senegal, Dakar",[
        "Assessing the design (test of design) and operating effectiveness (test of effectiveness) of internal control as part of statutory audits.",
        "Reviewing IT general controls and application controls; analyzing finance, procurement, sales and inventory processes.",
        "Data analytics with CAAT tools (ACL) and queries on Oracle and SQL Server; operational risk assessment.",
        "Access and entitlement reviews: account life cycle, least privilege, periodic reviews, orphaned or excessive accounts, privileged accounts (PAM), segregation of duties matrices.",
        "Sectors: commercial and central banks, telecommunications, e-money, oil and industry."]],
      ["May – July 2026","Assistant auditor · Eritedge Senegal, Dakar",[
        "IT audit engagements in banking, telecoms and e-money."]],
      ["July 2024 – April 2026","Assistant · EY, Senegal",[
        "IT audit for statutory audit engagements: IT general controls, application controls, access reviews and data analytics.",
        "EY internal training and professional use of English."]],
      ["October 2023 – September 2024","Staff (internship) · EY, Dakar",[
        "Joined the IT audit team: control testing, access reviews and preparation of working papers; EY internal training."]],
      ["September 2022 – February 2023","VoIP lead · INTERSIP International, Dakar",[
        "Deployed a telephony server and an interactive voice response (IVR) system that plays scheduled messages and stores answers in a database.",
        "FTP server to back up and retrieve configuration files and audio recordings.",
        "Security and monitoring: VPN, proxy, firewall, ELK, NGINX, Zabbix, Bind9; worked with the development team."]],
      ["March – June 2022","Engineering degree internship · INTERSIP International, Dakar",[
        "Thesis: deploying an interactive voice server (Asterisk) to train residents of rural areas."]],
      ["June – July 2019","Technician degree internship · INFOCONSUL, Dakar",[
        "Thesis: deploying a 3CX service so employees can use the same number on desk phone, mobile and computer."]],
      ["July – September 2018","Consultant · INFOCONSUL, Dakar",[
        "Network cabling and refurbishment for Aristide Le Dantec hospital, the Prison Administration and the Samba Diéry Diallo barracks."]]
    ],
    certTitle:"Certifications, badges and training",
    certs:[
      ["EY Badges",["Cybersecurity, Bronze level (2024)","Cloud Computing, Bronze level (2024)"],["ey-cybersecurity-bronze-learning-2024","ey-cloud-bronze-learning-2024"]],
      ["TryHackMe",["Cyber Security 101, full 45-hour learning path (December 2025), certificate THM-DTWGQPKC5T","Advent of Cyber 2025: 24 cybersecurity challenges (December 2025)","Pre Security, full 19-hour learning path (September 2026), certificate THM-SXI3U9GYSR"]],
      ["Cisco Networking Academy",["CCNAv7: Introduction to Networks (2023)","DevNet Associate (2021)"]],
      ["EY cybersecurity training",["Cybersecurity: Introduction (2023)","Identity and Access Management (2024)","Data Protection and Privacy (2024)","Cybersecurity Program Assessment (2024)","Next Generation Security Operations and Response (2024)"]],
      ["Online courses (Udemy)",["CompTIA Security+ SY0-701 Complete Course & Practice Exam, Jason Dion, 31 h (2025)","TOTAL: CompTIA Security+ SY0-701, Mike Meyers, 20.5 h (2024)","AWS Certified Cloud Practitioner CLF-C02, Stéphane Maarek, 15 h (2024)","A Practical Introduction to Cloud Computing (2024)","The Absolute Beginners Guide to Cyber Security 2024, parts 1 and 2 (2024)","Computer Forensics Fundamentals (2023)","Introduction to Security Awareness Campaigns (2023)","Cybersecurity for HR Professionals (2024)","Marketing Fundamentals: Small Business Marketing Success (2024)"]],
      ["Ethics, quality and compliance (EY)",["Global Code of Conduct, Conflicts of Interest, Independence Basics and Independence Update 2024","Financial Crime Fundamentals, Data Protection Fundamentals","Annual Data Protection and Information Security Update FY24, Security Awareness","Assurance Advisory Quality & Risk Management (2026), QRM Annual Update FY26","Inclusive Leadership for All (courses and podcasts), Transformation Realized"]]
    ],
    eduTitle:"Education",
    edu:[["2019 – 2022","Telecommunications and network design engineering degree · École supérieure polytechnique (UCAD), Dakar"],
         ["2017 – 2019","Higher technology diploma in telecommunications and networks · École supérieure polytechnique (UCAD), Dakar"],
         ["2017","Science baccalaureate (S2) · Collège Cardinal Hyacinthe Thiandoum, Dakar"]] }
};

const GLOSSARY = [
  ["SMSI","ISMS","Système de management de la sécurité de l'information.","Information security management system."],
  ["DdA (Déclaration d'applicabilité)","SoA (Statement of Applicability)","Liste des mesures retenues ou exclues, avec justification.","List of controls included or excluded, with justification."],
  ["Propriétaire du risque","Risk owner","Personne ayant l'autorité pour gérer un risque.","Person with the authority to manage a risk."],
  ["Risque résiduel","Residual risk","Risque qui subsiste après traitement.","Risk remaining after treatment."],
  ["Non-conformité","Nonconformity","Non-satisfaction d'une exigence.","Non-fulfilment of a requirement."],
  ["Action corrective","Corrective action","Action qui élimine la cause d'une non-conformité.","Action to eliminate the cause of a nonconformity."],
  ["Contrôles généraux informatiques","IT general controls (ITGC)","Contrôles sur les accès, les changements, l'exploitation et le développement.","Controls over access, change, operations and development."],
  ["Séparation des tâches","Segregation of duties","Répartir les tâches incompatibles entre plusieurs personnes.","Splitting conflicting duties among several people."],
  ["Constat d'audit","Audit finding","Résultat de l'évaluation des preuves par rapport aux critères.","Result of evaluating evidence against audit criteria."],
  ["Revue de direction","Management review","Examen périodique du SMSI par la direction (clause 9.3).","Periodic review of the ISMS by top management (clause 9.3)."],
  ["Plan de continuité d'activité","Business continuity plan","Procédures pour maintenir les activités critiques pendant une perturbation.","Procedures to keep critical activities running during a disruption."],
  ["Moindre privilège","Least privilege","N'accorder que les droits strictement nécessaires.","Grant only the rights strictly needed."]
];

const SECTIONS = ['accueil','cv','services','learning','outils','contact'];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt = n => isFinite(n) ? Math.round(n).toLocaleString(LANG === 'fr' ? 'fr-FR' : 'en-US') : '–';

/* ===== Icônes (traits simples) ===== */
const ICON = (() => { const p = {
  audit:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2M8.5 11l1.8 1.8 3.4-3.6"/>',
  shield:'<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z"/><path d="M8.8 12l2.2 2.2 4.2-4.4"/>',
  radar:'<path d="M3 12h3l2.5-6 4 13 3-9 1.8 2H21"/>',
  grad:'<path d="M2.5 9L12 4.5 21.5 9 12 13.5z"/><path d="M6.5 11v4.5c1.6 1.6 3.4 2.4 5.5 2.4s3.9-.8 5.5-2.4V11M21.5 9v5"/>',
  bank:'<path d="M3 9.5L12 4l9 5.5M4.5 10v8M9 10v8M15 10v8M19.5 10v8M3 20h18"/>',
  phone:'<path d="M5 3.5h3.5l1.7 4.5-2.2 1.4a11 11 0 005.6 5.6l1.4-2.2 4.5 1.7V18a2.5 2.5 0 01-2.7 2.5C9.6 20 4 14.4 3.5 6.2A2.5 2.5 0 015 3.5z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5L12 13l8.5-6.5"/>',
  in:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10.5v6M7.5 7.5v.01M11.5 16.5v-6M11.5 13c0-1.6 1-2.6 2.4-2.6s2.1 1 2.1 2.6v3.5"/>',
  pin:'<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0113 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  doc:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
  mobile:'<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
  umbrella:'<path d="M3 12a9 9 0 0118 0z"/><path d="M12 12v6.5a2 2 0 01-4 0"/>',
  signal:'<path d="M12 20v-7M8.5 9.5a5 5 0 017 0M5.5 6.5a9.2 9.2 0 0113 0"/><circle cx="12" cy="12.5" r="1"/>',
  drop:'<path d="M12 3.5s6 6.6 6 11a6 6 0 01-12 0c0-4.4 6-11 6-11z"/>',
  factory:'<path d="M3 20V10l5 3V10l5 3V6h4l1 14z"/><path d="M3 20h18"/>',
  building:'<path d="M4 20V7l8-4 8 4v13M9 20v-5h6v5M8 10h.01M12 10h.01M16 10h.01"/>',
  book:'<path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5z"/><path d="M4 20.5A2.5 2.5 0 016.5 18H20v3H6.5"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  download:'<path d="M12 4v11M7 10.5l5 5 5-5M5 20h14"/>'};
  return n => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (p[n] || '') + '</svg>'; })();

/* ===== Page d'accueil : textes ===== */
const HOME = {
  fr:{ eyebrow:"Audit IT · Sécurité de l'information · Gouvernance",
    h1:"Des systèmes d'information <em>maîtrisés</em>, et des preuves pour le démontrer.",
    lead:"Auditeur senior des systèmes d'information basé à Dakar, j'aide les banques, émetteurs de monnaie électronique, opérateurs télécoms et entreprises à fiabiliser leurs contrôles informatiques, à se préparer à ISO/IEC 27001 et à surveiller leur sécurité.",
    ctaMain:"Discutons de votre projet", ctaSvc:"Voir mes services", cv:"CV (PDF)",
    trust:["Auditeur senior chez Eritedge","Ancien d'EY (audit IT)","Ingénieur télécoms et réseaux"],
    f1:["Auditeur senior","Audit IT · Risques"], f2:["ISO/IEC 27001","Lead Implementer en préparation"],
    stats:[["3 ans","d'audit IT en cabinet (EY puis Eritedge)"],["6 secteurs","banque, monnaie électronique, télécoms, pétrole…"],["105 pages","de laboratoire Wazuh documenté"],["13 cours","bilingues publiés sur mon campus"]],
    svcEyebrow:"Services", svcTitle:"Ce que je fais pour vous", svcLead:"Des missions concrètes, avec des livrables clairs et des constats classés par risque.",
    svc:[["audit","Audit IT (ITGC et ITAC)","Accès, changements, exploitation, contrôles automatiques et fiabilité des rapports, pour la direction et les commissaires aux comptes."],
      ["shield","Accompagnement ISO/IEC 27001","Analyse d'écart, appréciation des risques, Déclaration d'applicabilité et préparation à la certification."],
      ["radar","Surveillance de sécurité avec Wazuh","Un SOC open source, sans licence coûteuse : détection, intégrité des fichiers, conformité CIS, vulnérabilités."],
      ["grad","Formation et sensibilisation","Audit IT pour auditeurs financiers, préparation aux certifications, sensibilisation des utilisateurs."]],
    more:"En savoir plus",
    howEyebrow:"Démarche", howTitle:"Une méthode claire, du cadrage au rapport",
    how:[["Comprendre","Vos processus, vos applications critiques et ce qui alimente vos états financiers."],["Évaluer les risques","Identifier ce qui peut mal tourner et prioriser selon l'impact métier."],["Tester","Contrôles testés sur pièces et sur données, avec des preuves documentées."],["Restituer","Constats classés par risque, recommandations réalistes et plan d'action suivi."]],
    secEyebrow:"Secteurs", secTitle:"Une expérience des secteurs régulés", secLead:"Des missions menées dans des environnements où le contrôle interne et la conformité sont exigés.",
    sectors:[["bank","Banques commerciales"],["building","Banques centrales"],["mobile","Monnaie électronique"],["signal","Télécommunications"],["umbrella","Assurance (CIMA)"],["drop","Pétrole et gaz"],["factory","Industrie et commerce"]],
    proofEyebrow:"Preuves", proofTitle:"Des compétences démontrées, pas seulement déclarées",
    lab:["Laboratoire Wazuh complet","Contrôleur de domaine, serveur Wazuh 4.14 et poste Windows 11 : 8 labs documentés, des règles sur mesure à la réponse active et aux tableaux de bord MITRE ATT&CK.",["Détection sur mesure","Conformité CIS","Intégrité des fichiers","Réponse active"],"Voir le laboratoire"],
    campus:["Campus de formation bilingue","Des cours pas à pas, en français et en anglais : ISO 27001, Security+, CISA, CISM, CISSP, comptabilité, finance et 6 secteurs, avec QCM corrigés et programmes de travail ITAC.",["13 cours","QCM expliqués","Sigles définis","FR · EN"],"Visiter le campus"],
    ctaTitle:"Un audit, une certification, un SOC à mettre en place ?", ctaText:"Décrivez votre besoin : je vous réponds rapidement avec une proposition adaptée à votre taille et à votre secteur.", ctaMail:"M'écrire", ctaCall:"Appeler",
    hire:"Me contacter", menu:"Menu",
    foot:{about:"Audit des systèmes d'information, ISO/IEC 27001 et surveillance de sécurité. Basé à Dakar, disponible en Afrique de l'Ouest et à distance.", nav:"Navigation", contact:"Contact", legal:"© 2026 Georges Alain Cabo · georgilearning.academy"},
    contactLabels:{tel:"Téléphone", mail:"E-mail", in:"LinkedIn", pin:"Localisation"}, mailSubject:"Demande de mission" },
  en:{ eyebrow:"IT audit · Information security · Governance",
    h1:"Information systems <em>under control</em>, with the evidence to prove it.",
    lead:"A Dakar-based senior information systems auditor, I help banks, e-money issuers, telecom operators and companies strengthen their IT controls, prepare for ISO/IEC 27001 and monitor their security.",
    ctaMain:"Let's discuss your project", ctaSvc:"See my services", cv:"Resume (PDF)",
    trust:["Senior auditor at Eritedge","Former EY IT auditor","Telecoms and network engineer"],
    f1:["Senior auditor","IT audit · Risk"], f2:["ISO/IEC 27001","Lead Implementer in progress"],
    stats:[["3 years","of IT audit at firms (EY, then Eritedge)"],["6 sectors","banking, e-money, telecoms, oil…"],["105 pages","of documented Wazuh lab work"],["13 courses","published in two languages on my campus"]],
    svcEyebrow:"Services", svcTitle:"What I do for you", svcLead:"Practical engagements with clear deliverables and findings ranked by risk.",
    svc:[["audit","IT audit (ITGC and ITAC)","Access, change, operations, automated controls and report reliability, for management and statutory auditors."],
      ["shield","ISO/IEC 27001 support","Gap analysis, risk assessment, Statement of Applicability and certification readiness."],
      ["radar","Security monitoring with Wazuh","An open source SOC with no costly licenses: detection, file integrity, CIS compliance, vulnerabilities."],
      ["grad","Training and awareness","IT audit for financial auditors, certification preparation, user awareness."]],
    more:"Learn more",
    howEyebrow:"Approach", howTitle:"A clear method, from scoping to report",
    how:[["Understand","Your processes, your critical applications and what feeds your financial statements."],["Assess risk","Identify what can go wrong and prioritize by business impact."],["Test","Controls tested on documents and data, with documented evidence."],["Report","Findings ranked by risk, realistic recommendations and a tracked action plan."]],
    secEyebrow:"Sectors", secTitle:"Experience in regulated industries", secLead:"Engagements in environments where internal control and compliance are required.",
    sectors:[["bank","Commercial banks"],["building","Central banks"],["mobile","E-money"],["signal","Telecommunications"],["umbrella","Insurance (CIMA)"],["drop","Oil and gas"],["factory","Industry and trade"]],
    proofEyebrow:"Proof", proofTitle:"Skills demonstrated, not just claimed",
    lab:["A complete Wazuh lab","Domain controller, Wazuh 4.14 server and Windows 11 endpoint: 8 documented labs, from custom rules to active response and MITRE ATT&CK dashboards.",["Custom detection","CIS compliance","File integrity","Active response"],"See the lab"],
    campus:["A bilingual learning campus","Step-by-step courses in English and French: ISO 27001, Security+, CISA, CISM, CISSP, accounting, finance and 6 sectors, with explained quizzes and ITAC work programs.",["13 courses","Explained quizzes","Acronyms defined","EN · FR"],"Visit the campus"],
    ctaTitle:"An audit, a certification, a SOC to set up?", ctaText:"Describe your needs: I will get back to you quickly with a proposal suited to your size and industry.", ctaMail:"Email me", ctaCall:"Call",
    hire:"Contact me", menu:"Menu",
    foot:{about:"Information systems audit, ISO/IEC 27001 and security monitoring. Based in Dakar, available across West Africa and remotely.", nav:"Navigation", contact:"Contact", legal:"© 2026 Georges Alain Cabo · georgilearning.academy"},
    contactLabels:{tel:"Phone", mail:"Email", in:"LinkedIn", pin:"Location"}, mailSubject:"Engagement request" }
};
/* Coordonnées tirées du CV : [type, libellé, lien]. */
function contactItems(){
  return CV[LANG].side[0][1].map(x => { const m = x.match(/href="([^"]+)"[^>]*>([^<]+)</), href = m ? m[1] : '', label = m ? m[2] : x.replace(/<[^>]+>/g, '');
    const type = href.startsWith('tel:') ? 'tel' : href.startsWith('mailto:') ? 'mail' : /linkedin/.test(href) ? 'in' : 'pin';
    return {type, label: type === 'in' ? 'georges-alain-gracien-cabo' : label, href}; });
}
const cvPdf = () => 'assets/cv/' + (LANG === 'en' ? 'Georges-Alain-Cabo-CV-EN.pdf' : 'Georges-Alain-Cabo-CV-FR.pdf');
const mailHref = () => { const m = contactItems().find(c => c.type === 'mail'); return m ? m.href + '?subject=' + encodeURIComponent(HOME[LANG].mailSubject) : '#contact'; };
const telHref = () => { const m = contactItems().find(c => c.type === 'tel'); return m ? m.href : '#contact'; };

function pHome(t){
  const H = HOME[LANG];
  let h = '<section class="hero"><div class="wrap"><div><p class="eyebrow">' + H.eyebrow + '</p><h1>' + H.h1 + '</h1><p class="lead">' + H.lead + '</p>'
    + '<div class="actions"><a class="btn" href="#contact">' + H.ctaMain + ICON('arrow') + '</a><a class="btn outline-light" href="#services">' + H.ctaSvc + '</a><a class="btn outline-light" href="' + cvPdf() + '" download>' + ICON('download') + H.cv + '</a></div>'
    + '<div class="trust">' + H.trust.map(x => '<span>' + ICON('check') + x + '</span>').join('') + '</div></div>'
    + '<div class="portrait"><div class="frame"><img src="assets/photo.jpg" alt="Georges Alain Cabo" width="312" height="274"></div>'
    + '<div class="float f1"><span class="ic">' + ICON('audit') + '</span><span><b>' + H.f1[0] + '</b>' + H.f1[1] + '</span></div>'
    + '<div class="float f2"><span class="ic">' + ICON('shield') + '</span><span><b>' + H.f2[0] + '</b>' + H.f2[1] + '</span></div></div></div></section>';
  h += '<div class="stats"><div class="wrap"><div class="grid4">' + H.stats.map(([b, s]) => '<div class="stat"><b>' + b + '</b><span>' + s + '</span></div>').join('') + '</div></div></div>';
  h += '<section class="band"><div class="wrap"><div class="head rv"><p class="eyebrow">' + H.svcEyebrow + '</p><h2>' + H.svcTitle + '</h2><p>' + H.svcLead + '</p></div><div class="grid">'
    + H.svc.map(([ic, n, d]) => '<a class="card rv" href="#services"><span class="ic">' + ICON(ic) + '</span><h3>' + n + '</h3><span class="d">' + d + '</span><span class="more">' + H.more + ICON('arrow') + '</span></a>').join('') + '</div></div></section>';
  h += '<section class="band alt"><div class="wrap"><div class="head rv"><p class="eyebrow">' + H.howEyebrow + '</p><h2>' + H.howTitle + '</h2></div><div class="steps">'
    + H.how.map(([n, d]) => '<div class="step rv"><h3>' + n + '</h3><p>' + d + '</p></div>').join('') + '</div></div></section>';
  h += '<section class="band"><div class="wrap"><div class="head rv"><p class="eyebrow">' + H.secEyebrow + '</p><h2>' + H.secTitle + '</h2><p>' + H.secLead + '</p></div><div class="sectors rv">'
    + H.sectors.map(([ic, n]) => '<span class="sector">' + ICON(ic) + n + '</span>').join('') + '</div></div></section>';
  const feat = (f, href, cls) => '<div class="feature rv' + cls + '"><h3>' + f[0] + '</h3><p>' + f[1] + '</p><div class="kpis">' + f[2].map(k => '<span>' + k + '</span>').join('') + '</div><a class="btn light" href="' + href + '">' + f[3] + ICON('arrow') + '</a></div>';
  h += '<section class="band alt"><div class="wrap"><div class="head rv"><p class="eyebrow">' + H.proofEyebrow + '</p><h2>' + H.proofTitle + '</h2></div><div class="features">'
    + feat(H.lab, '#services', '') + feat(H.campus, 'learning/', ' gold') + '</div></div></section>';
  h += '<section class="band"><div class="wrap"><div class="cta rv"><div><h2>' + H.ctaTitle + '</h2><p>' + H.ctaText + '</p></div><div class="actions"><a class="btn light" href="' + mailHref() + '">' + ICON('mail') + H.ctaMail + '</a><a class="btn outline-light" href="' + telHref() + '">' + ICON('phone') + H.ctaCall + '</a></div></div></div></section>';
  return h;
}
function pageHead(eyebrow, title, lead, actions){
  return '<section class="pagehead"><div class="wrap"><p class="eyebrow">' + eyebrow + '</p><h1>' + title + '</h1>' + (lead ? '<p class="lead">' + lead + '</p>' : '') + (actions ? '<div class="actions">' + actions + '</div>' : '') + '</div></section>';
}
function footerHtml(t){
  const H = HOME[LANG];
  return '<div class="fgrid"><div><p class="brand">Georges Alain Cabo</p><p style="margin:0;max-width:44ch">' + H.foot.about + '</p></div>'
    + '<div><h4>' + H.foot.nav + '</h4><ul>' + SECTIONS.map(k => '<li><a href="' + (k === 'learning' ? 'learning/' : '#' + k) + '">' + t.nav[k] + '</a></li>').join('') + '</ul></div>'
    + '<div><h4>' + H.foot.contact + '</h4><ul>' + contactItems().map(c => '<li>' + (c.href ? '<a href="' + c.href + '"' + (c.type === 'in' ? ' target="_blank" rel="noopener"' : '') + '>' + esc(c.label) + '</a>' : esc(c.label)) + '</li>').join('') + '</ul></div></div>'
    + '<div class="legal">' + H.foot.legal + '</div>';
}
function reveal(){
  const els = document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){ els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }), {rootMargin:'0px 0px -40px 0px', threshold:.08});
  els.forEach(e => io.observe(e));
}

function pCv(t){
  const c = CV[LANG];
  let h = '<section class="pagehead"><div class="wrap"><div class="cvhead"><img src="assets/photo.jpg" alt="' + c.name + '" width="128" height="128"><div><p class="eyebrow">' + t.cvTitle + '</p><h1>' + c.name + '</h1><p class="lead">' + c.role + ' · ' + c.place + '</p></div></div>';
  h += '<div class="actions"><a class="btn light" href="' + cvPdf() + '" download>' + ICON('download') + (LANG === 'en' ? 'Download resume (PDF)' : 'Télécharger le CV (PDF)') + '</a><button class="btn outline-light" type="button" id="printBtn">' + t.print + '</button><a class="btn outline-light" href="#contact">' + HOME[LANG].hire + '</a></div></div></section><div class="page">';
  if(t.cvNote) h += '<div class="note">' + t.cvNote + '</div>';
  h += '<div class="cv"><aside>' + c.side.map(([k, items]) => '<h3>' + k + '</h3><ul>' + items.map(i => '<li>' + i + '</li>').join('') + '</ul>').join('') + '</aside><div>';
  h += '<p class="summary">' + c.summary + '</p><h2>' + c.expTitle + '</h2>';
  c.jobs.forEach(([when, what, items]) => { h += '<div class="job"><div class="when">' + when + '</div><h3>' + what + '</h3><ul>' + items.map(i => '<li>' + i + '</li>').join('') + '</ul></div>'; });
  h += '<h2>' + c.certTitle + '</h2>';
  c.certs.forEach(([g, items, imgs]) => {
    h += '<div class="job"><h3>' + g + '</h3>';
    if(imgs) h += '<div style="display:flex;gap:12px;margin:8px 0">' + imgs.map(n => '<img src="assets/badges/' + n + '.png" alt="" width="88" height="88">').join('') + '</div>';
    h += '<ul>' + items.map(i => '<li>' + i + '</li>').join('') + '</ul></div>';
  });
  h += '<h2>' + c.eduTitle + '</h2>';
  c.edu.forEach(([when, what]) => { h += '<div class="job"><div class="when">' + when + '</div><h3>' + what + '</h3></div>'; });
  return h + '</div></div></div>';
}
function pTools(t){
  let h = pageHead(t.toolsTitle, t.toolsTitle, LANG === 'en' ? 'Practical tools for risk analysis and audit vocabulary.' : "Des outils pratiques pour l'analyse de risque et le vocabulaire de l'audit.") + '<div class="page">';
  h += '<h2 style="margin-top:0">' + t.aleTitle + '</h2><p>' + t.aleLead + '</p>';
  h += '<form class="calc" id="ale">'
     + '<label>' + t.av + ' (' + t.cur + ')<input type="number" min="0" id="av" value="40000000"></label>'
     + '<label>' + t.ef + '<input type="number" min="0" max="100" id="ef" value="25"></label>'
     + '<label>' + t.aro + '<input type="number" min="0" step="0.01" id="aro" value="0.1"></label>'
     + '<label>' + t.cost + '<input type="number" min="0" id="cost" value=""></label>'
     + '<div class="out" id="aleOut" aria-live="polite"></div></form>';
  h += '<h2>' + t.gloTitle + '</h2>';
  GLOSSARY.forEach(([fr, en, dfr, den]) => {
    const [a, b, d] = LANG === 'fr' ? [fr, en, dfr] : [en, fr, den];
    h += '<details><summary>' + a + ' <span style="color:var(--muted);font-weight:400">· ' + b + '</span></summary><p>' + d + '</p></details>';
  });
  return h + '</div>';
}
function calcAle(){
  const t = T[LANG], v = id => parseFloat(document.getElementById(id).value);
  const sle = v('av') * v('ef') / 100, ale = sle * v('aro'), cost = v('cost');
  let h = t.sle + ' = ' + fmt(sle) + ' ' + t.cur + '<br>' + t.ale + ' = <strong>' + fmt(ale) + '</strong> ' + t.cur + ' / an';
  if(LANG === 'en') h = h.replace(' / an', ' / year');
  if(isFinite(cost) && isFinite(ale)) h += '<br><span style="font-family:var(--body);font-size:.9rem">' + (cost <= ale ? t.worth : t.notWorth) + '</span>';
  document.getElementById('aleOut').innerHTML = h;
}
function pSvc(t){
  const v = t.svc, H = HOME[LANG], icons = ['audit','shield','radar','building','bank'], oic = ['audit','shield','radar','doc','grad'];
  let h = pageHead(v.eyebrow, v.title, v.lead, '<a class="btn light" href="' + mailHref() + '">' + ICON('mail') + v.cta + '</a><a class="btn outline-light" href="#cv">' + t.seeCv + '</a>') + '<div class="page">';
  h += '<h2 style="margin-top:0">' + v.offersTitle + '</h2><div class="grid g3">' + v.offers.map(([n, d, items], i) => '<div class="card offer lift rv"><span class="ic">' + ICON(oic[i] || 'check') + '</span><span class="n">0' + (i + 1) + '</span><h3>' + n + '</h3><span class="d">' + d + '</span><ul class="svc">' + items.map(x => '<li>' + x + '</li>').join('') + '</ul></div>').join('') + '</div>';
  h += '<h2>' + v.skillsTitle + '</h2><div class="grid">' + v.skills.map(([n, d], i) => '<div class="card rv"><span class="ic">' + ICON(icons[i] || 'check') + '</span><h3>' + n + '</h3><span class="d">' + d + '</span></div>').join('') + '</div>';
  h += '<h2>' + v.demoTitle + '</h2><p class="lead">' + v.demoLead + '</p><div class="grid g3">' + v.labs.map(([n, d]) => '<div class="card lift rv"><span class="tag">Wazuh</span><h3>' + n + '</h3><span class="d">' + d + '</span></div>').join('') + '</div><p style="color:var(--muted);font-size:.9rem">' + v.demoNote + '</p>';
  h += '<div class="cta rv" style="margin-top:56px"><div><h2>' + v.ctaTitle + '</h2><p>' + v.ctaText + '</p></div><div class="actions"><a class="btn light" href="' + mailHref() + '">' + ICON('mail') + H.ctaMail + '</a><a class="btn outline-light" href="' + telHref() + '">' + ICON('phone') + H.ctaCall + '</a></div></div>';
  return h + '</div>';
}
function pContact(t){
  const H = HOME[LANG];
  return pageHead(t.contactTitle, t.contactTitle, t.contactLead) + '<div class="page"><div class="contacts">'
    + contactItems().map(c => (c.href ? '<a class="contact rv" href="' + c.href + '"' + (c.type === 'in' ? ' target="_blank" rel="noopener"' : '') + '>' : '<div class="contact rv">') + '<span class="ic">' + ICON(c.type === 'tel' ? 'phone' : c.type) + '</span><span><small>' + H.contactLabels[c.type] + '</small><b>' + esc(c.label) + '</b></span>' + (c.href ? '</a>' : '</div>')).join('')
    + '</div><div class="cta rv"><div><h2>' + H.ctaTitle + '</h2><p>' + H.ctaText + '</p></div><div class="actions"><a class="btn light" href="' + mailHref() + '">' + ICON('mail') + H.ctaMail + '</a><a class="btn outline-light" href="' + cvPdf() + '" download>' + ICON('download') + H.cv + '</a></div></div></div>';
}
function route(){
  const t = T[LANG];
  let s = location.hash.slice(1) || 'accueil';
  if(s === 'learning'){ location.href = 'learning/'; return; }
  if(!SECTIONS.includes(s)){ location.replace('learning/#' + s); return; }
  document.documentElement.lang = LANG;
  document.title = t.title;
  document.getElementById('nav').innerHTML = SECTIONS.map(k => '<a href="' + (k === 'learning' ? 'learning/' : '#' + k) + '"' + (k === s ? ' class="active" aria-current="page"' : '') + '>' + t.nav[k] + '</a>').join('');
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === LANG));
  const page = document.getElementById('page');
  page.innerHTML = s === 'cv' ? pCv(t) : s === 'services' ? pSvc(t) : s === 'outils' ? pTools(t) : s === 'contact' ? pContact(t) : pHome(t);
  document.getElementById('foot').innerHTML = footerHtml(t);
  document.getElementById('hire').textContent = HOME[LANG].hire;
  const top = document.getElementById('top'), mb = document.getElementById('menuBtn');
  top.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); mb.innerHTML = ICON('menu');
  reveal();
  if(s === 'outils'){ const f = document.getElementById('ale'); f.addEventListener('input', calcAle); f.addEventListener('submit', ev => ev.preventDefault()); calcAle(); }
  const pb = document.getElementById('printBtn'); if(pb) pb.addEventListener('click', () => window.print());
  window.scrollTo(0, 0);
}
document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => { LANG = b.dataset.lang; store.set('lang', LANG); route(); }));
window.addEventListener('hashchange', route);
document.getElementById('menuBtn').addEventListener('click', () => { const top = document.getElementById('top'), o = top.classList.toggle('open'), mb = document.getElementById('menuBtn'); mb.setAttribute('aria-expanded', o); mb.innerHTML = ICON(o ? 'close' : 'menu'); });
route();
