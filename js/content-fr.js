/* Contenu français — même structure que content-en.js.
   Les chaînes peuvent contenir du HTML inline (<b>, <a>). */
window.CONTENT = window.CONTENT || {};
window.CONTENT.fr = {
  code: "fr",
  htmlTitle: "Zineb TAHIR — Ingénieure DevOps & Systèmes",
  metaDescription: "Zineb TAHIR — Ingénieure DevOps / Systèmes junior en France. Automatisation, conteneurisation (Docker, Kubernetes), CI/CD (Git, Jenkins), cloud AWS (EC2, Lambda, S3, API Gateway) et supervision d'infrastructures.",

  ui: {
    skip: "Aller au contenu",
    cv: "CV",
    cvTitle: "Télécharger le CV (PDF)",
    theme: "Basculer le mode sombre",
    menu: "Menu",
    showDetails: "Voir le détail",
    hideDetails: "Masquer le détail",
    more: "Détails",
    context: "Contexte :",
    constraints: "Contraintes :",
    result: "Résultat :",
    gridAria: "Frise de carrière : employeurs sous forme de barres de 2021 à aujourd'hui",
    gridStudies: "Études",
    filterAria: "Filtrer les projets",
    backToTop: "Retour en haut"
  },

  nav: [
    { id: "about", label: "À propos" },
    { id: "experience", label: "Expérience" },
    { id: "projects", label: "Projets" },
    { id: "impact", label: "Impact" },
    { id: "skills", label: "Compétences" },
    { id: "education", label: "Formation" },
    { id: "contact", label: "Contact" }
  ],

  hero: {
    ariaLabel: "Introduction",
    badge: "DevOps · Systèmes · Cloud (AWS)",
    kicker: "Bonjour, je suis",
    name: ["Zineb", "TAHIR"],
    typingPrefix: "Junior",
    typing: ["Ingénieure DevOps", "Cloud Engineer (AWS)", "Administratrice systèmes", "Ingénieure CI/CD", "Développeuse Python"],
    lede: "Ingénieure IT junior orientée <b>DevOps et Cloud</b>, avec une expérience concrète en automatisation, conteneurisation (Docker, Kubernetes) et déploiement d'infrastructures sur AWS. À l'aise en scripting (Python, PowerShell, Bash) et en CI/CD (Git, Jenkins).",
    where: "France — Cheffe de projet IT / Administratrice support (alternance) chez <b>LNA Santé</b>, Nantes, depuis 2024.",
    photoAlt: "Portrait de Zineb TAHIR",
    actions: [
      { label: "Me contacter", href: "#contact", icon: "rocket", style: "primary" },
      { label: "Télécharger le CV", href: "assets/cv/Zineb_TAHIR_CV.pdf", icon: "download", download: true, style: "secondary" },
      { label: "GitHub", href: "https://github.com/tahir-zineb", icon: "github", external: true, style: "tertiary" }
    ],
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/z-tahir", icon: "linkedin", external: true },
      { label: "GitHub", href: "https://github.com/tahir-zineb", icon: "github", external: true },
      { label: "E-mail", href: "mailto:zineb.tahirr@hotmail.com", icon: "mail" }
    ],
    facts: [
      { n: 2, suffix: "+", l: "ans d'alternance / stage" },
      { n: 5000, suffix: "+", l: "postes gérés" },
      { n: 6, suffix: "", l: "certifications" },
      { n: 3, suffix: "", l: "environnements multi-sites" }
    ]
  },

  about: {
    title: "À propos",
    tagline: "Qui je suis et comment je travaille",
    paragraphs: [
      "Je suis une <b>ingénieure IT junior</b> orientée <b>DevOps et Cloud</b>, avec une expérience concrète en automatisation, conteneurisation (Docker, Kubernetes) et déploiement d'infrastructures sur AWS (EC2, Lambda, S3, API Gateway).",
      "Depuis 2024, je suis <b>Cheffe de projet IT / Administratrice support</b> en alternance chez <b>LNA Santé</b> à Nantes, où j'automatise l'audit et le reporting de conformité sur un parc d'environ 5 000 postes, je mets en place la supervision multi-sites et j'assure l'administration système N2/N3.",
      "À l'aise en scripting (Python, PowerShell, Bash) et en CI/CD (Git, Jenkins), je cherche à approfondir la mise en place de pipelines et d'infrastructures cloud scalables, dans une logique d'industrialisation et de fiabilisation des systèmes.",
      "Je prépare actuellement un <b>Master Réseaux & Télécommunications</b> (développement d'applications et sécurité) à l'Université de Reims Champagne-Ardenne."
    ],
    competencies: {
      title: "Compétences principales",
      items: ["DevOps", "CI/CD", "Conteneurisation", "Cloud (AWS)", "Automatisation d'infrastructure", "Administration système", "Virtualisation", "Supervision & monitoring", "Scripting", "Data & reporting", "Réseaux & sécurité", "Agile / Scrum"]
    },
    soft: {
      title: "Ma façon de travailler",
      items: [
        { name: "Esprit d'analyse", desc: "Analyse rigoureuse et force de proposition." },
        { name: "Organisée, structurée, rigoureuse", desc: "Un travail documenté et reproductible, du script à la production." },
        { name: "Empathie et bon relationnel client", desc: "Bonne relation avec les utilisateurs et les équipes support ; j'écoute avant de construire." },
        { name: "Réactive, avec un bon sens des priorités", desc: "Les incidents d'abord, puis les améliorations et l'automatisation." },
        { name: "Capacité d'apprentissage rapide", desc: "Adoption rapide de nouveaux outils et technologies." },
        { name: "Communication et travail en équipe", desc: "Communication claire en français et en anglais, en équipe agile." }
      ]
    }
  },

  experience: {
    title: "Expérience",
    tagline: "Trois postes, deux employeurs, France et Maroc",
    gridNote: "La carrière en un coup d'œil — les barres sont les durées réelles ; cliquer sur une barre ouvre le poste.",
    studies: [
      { start: "2021-09", end: "2026-08", label: "BTS → Licence Pro → Master (Reims)" }
    ],
    roles: [
      {
        id: "lna-alt",
        color: "rmc",
        role: "Cheffe de projet IT / Administratrice support",
        org: "LNA Santé",
        short: "Cheffe de projet / Admin support",
        place: "Nantes, France",
        start: "2024-09",
        end: null,
        period: "09/2024 – présent",
        open: true,
        summary: "Alternance combinant administration système, automatisation d'infrastructure et gestion de projet IT dans un environnement de santé multi-sites.",
        groups: [
          { title: "Pipeline d'audit & conformité des postes", items: [
            "Automatisé la collecte d'inventaire multi-sources (Active Directory, SCCM, GLPI API) sur un parc d'environ 5 000 postes.",
            "Consolidé et normalisé les données via Python/Pandas pour fiabiliser le reporting.",
            "Détecté les écarts de conformité logicielle, de patching et d'obsolescence du parc.",
            "Construit des dashboards de sécurité et de suivi du renouvellement du parc.",
            "Industrialisé le reporting technique, réduisant le travail de consolidation manuelle.",
            "Environnement : PowerShell, Python, SQL, Docker, SCCM, Active Directory, Azure AD, GLPI API, Windows."
          ] },
          { title: "Supervision & automatisation multi-sites", items: [
            "Mis en place la supervision centralisée des équipements multi-sites.",
            "Automatisé le provisioning (DHCP, scripts, API REST).",
            "Déployé des services de monitoring conteneurisés avec Docker.",
            "Construit des dashboards Grafana pour le suivi des indicateurs.",
            "Configuré un système d'alerting par e-mail vers l'équipe support ; centralisé les logs et automatisé les tâches d'exploitation.",
            "Environnement : Linux (CentOS), Docker, VMware vSphere, Ansible, DHCP, API REST, VLAN, SSH, Grafana, Bash."
          ] },
          { title: "Support & administration système", items: [
            "Géré les incidents et demandes techniques N2/N3 sous GLPI (environnement Windows d'entreprise).",
            "Industrialisé des tâches d'administration système par scripting PowerShell.",
            "Administré les identités et accès sous Active Directory.",
            "Assuré le support et le troubleshooting à distance via Bomgar.",
            "Géré le cycle de vie des postes (déploiement, masterisation, maintenance) via SCCM."
          ] }
        ],
        env: ["PowerShell", "Python", "Docker", "Ansible", "Linux (CentOS)", "VMware vSphere", "Grafana", "SCCM", "Active Directory", "Azure AD", "GLPI", "Bomgar", "DHCP", "API REST", "SQL", "Windows Server"]
      },
      {
        id: "lna-stage",
        color: "bpce",
        role: "Cheffe de projet IT (stage de fin d'études)",
        org: "LNA Santé",
        short: "Cheffe de projet IT",
        place: "Nantes, France",
        start: "2024-03",
        end: "2024-09",
        period: "03/2024 – 09/2024 (6 mois)",
        groups: [
          { title: "Projet de renouvellement des postes", items: [
            "Piloté le projet de renouvellement des postes informatiques (budget, planning, suivi hebdomadaire).",
            "Déployé et préparé les postes utilisateurs.",
            "Analysé des données multi-sources sous Excel (tableaux croisés dynamiques, consolidation).",
            "Administré et mis à jour les assets sous GLPI.",
            "Animé les COPIL et coordonné les parties prenantes."
          ] }
        ],
        env: ["GLPI", "SCCM", "Excel", "Active Directory", "Windows", "Gestion de projet"]
      },
      {
        id: "nupsol",
        color: "imperium",
        role: "Développeuse .NET",
        org: "Nupsol",
        short: "Développeuse .NET",
        place: "Casablanca, Maroc",
        start: "2023-05",
        end: "2023-07",
        period: "05/2023 – 07/2023",
        context: "Application RH — gestion des temps & congés.",
        groups: [
          { title: "Tâches", items: [
            "Conçu l'architecture et la modélisation UML de l'application.",
            "Développé les interfaces Admin / Employé (WinForms, Guna UI).",
            "Développé le backend et la logique métier en VB.NET.",
            "Implémenté la gestion des heures, congés et workflows de validation.",
            "Réalisé les tests et la recette avant déploiement."
          ] }
        ],
        env: ["VB.NET", "WinForms", "Guna UI", "SQL Server", "UML"]
      }
    ]
  },

  projects: {
    title: "Projets",
    tagline: "Travaux professionnels et académiques",
    filters: [
      { id: "all", label: "Tous" },
      { id: "devops", label: "DevOps & CI/CD" },
      { id: "cloud", label: "Cloud" },
      { id: "sysadmin", label: "Systèmes & Infra" },
      { id: "data", label: "Data" }
    ],
    items: [
      {
        id: "cicd", cats: ["devops"],
        org: "Projet académique",
        title: "Pipeline DevOps & CI/CD automatisé",
        summary: "Industrialisation d'un pipeline CI/CD complet : build automatisé, déploiement conteneurisé et tests automatisés, avec reporting qualité.",
        stack: ["Git", "Jenkins", "Maven", "Docker", "Selenium", "Locust"],
        sections: [
          { title: "Ce que ça fait", items: [
            "Industrialisé un pipeline CI/CD de bout en bout.",
            "Build et packaging automatisés avec Maven.",
            "Déploiement conteneurisé via Docker (staging / production).",
            "Tests automatisés : Selenium (E2E), Locust (performance).",
            "Reporting qualité et optimisation du cycle de livraison."
          ] }
        ]
      },
      {
        id: "bigdata", cats: ["data"],
        org: "Projet académique",
        title: "Big Data streaming & pipeline ETL",
        summary: "Ingestion temps réel de logs avec Kafka, stockage distribué dans un data lake HDFS et traitement ETL avec Spark, le tout orchestré en conteneurs.",
        stack: ["Apache Kafka", "HDFS", "Apache Spark", "Docker Compose"],
        sections: [
          { title: "Ce que ça fait", items: [
            "Ingestion temps réel de logs avec Apache Kafka.",
            "Stockage distribué dans un data lake HDFS.",
            "Traitement ETL et data cleaning avec Apache Spark.",
            "Orchestration d'un environnement Big Data conteneurisé via Docker Compose."
          ] }
        ]
      },
      {
        id: "serverless-vote", cats: ["cloud"],
        org: "Projet académique",
        title: "Application serverless de gestion de vote — AWS",
        summary: "Une architecture serverless événementielle sur AWS pour une application de vote, gérant les workflows de vote et la consolidation des résultats.",
        stack: ["AWS Lambda", "API Gateway", "DynamoDB"],
        sections: [
          { title: "Ce que ça fait", items: [
            "Conçu une architecture event-driven serverless sur AWS (Lambda, API Gateway, DynamoDB).",
            "Géré les workflows de vote et la consolidation des résultats."
          ] }
        ]
      },
      {
        id: "fleet-audit", cats: ["devops", "sysadmin"],
        org: "LNA Santé · 2024 – 2026",
        title: "Pipeline d'audit & conformité du parc",
        summary: "Audit automatisé d'un parc d'environ 5 000 postes : inventaire multi-sources (AD, SCCM, GLPI API), consolidation Python/Pandas et dashboards sécurité & renouvellement.",
        stack: ["Python", "Pandas", "PowerShell", "SCCM", "Active Directory", "GLPI API", "SQL"],
        sections: [
          { title: "Ce que ça fait", items: [
            "Collecte l'inventaire depuis Active Directory, SCCM et l'API GLPI sur environ 5 000 postes.",
            "Consolide et normalise les données via Python/Pandas pour un reporting fiable.",
            "Signale les écarts de conformité logicielle, de patching et d'obsolescence.",
            "Alimente des dashboards de sécurité et de renouvellement du parc ; remplace la consolidation manuelle."
          ] }
        ],
        role: "Conçu et exploité en production chez LNA Santé."
      },
      {
        id: "supervision", cats: ["sysadmin", "devops"],
        org: "LNA Santé · 2024 – 2026",
        title: "Supervision & automatisation multi-sites",
        summary: "Supervision centralisée des équipements multi-sites : monitoring conteneurisé, provisioning automatisé, dashboards Grafana et alerting par e-mail.",
        stack: ["Docker", "Grafana", "Ansible", "Linux (CentOS)", "VMware vSphere", "API REST", "Bash"],
        sections: [
          { title: "Ce que ça fait", items: [
            "Supervision centralisée des équipements sur plusieurs sites.",
            "Provisioning automatisé (DHCP, scripts, API REST).",
            "Déploiement de services de monitoring conteneurisés avec Docker.",
            "Construction de dashboards Grafana ; alerting par e-mail ; centralisation des logs et automatisation de l'exploitation."
          ] }
        ],
        role: "Conçu et exploité en production chez LNA Santé."
      },
      {
        id: "rh-net", cats: ["data"],
        org: "Nupsol · 2023",
        title: "Application RH (.NET)",
        summary: "Une application de gestion des temps et congés : conception UML, interfaces Admin/Employé (WinForms, Guna UI) et backend VB.NET avec workflows de validation.",
        stack: ["VB.NET", "WinForms", "Guna UI", "SQL Server", "UML"],
        sections: [
          { title: "Ce que ça fait", items: [
            "Architecture et modélisation UML de l'application.",
            "Interfaces Admin / Employé (WinForms, Guna UI).",
            "Backend et logique métier en VB.NET ; gestion des heures, congés et workflows de validation.",
            "Tests et recette avant déploiement."
          ] }
        ]
      }
    ]
  },

  impact: {
    title: "Impact",
    tagline: "Ce que j'ai livré jusqu'ici",
    metrics: [
      { n: "5 000+", l: "Postes dans le parc", d: "Audités et supervisés dans un environnement de santé multi-sites." },
      { n: "3", l: "Environnements supervisés", d: "Supervision centralisée multi-sites avec monitoring conteneurisé." },
      { n: "6", l: "Certifications", d: "Cisco (Linux, Python, Réseaux), Windows Server, AWS Cloud." },
      { n: "2", l: "Ans d'alternance / stage", d: "Gestion de projet IT et administration système chez LNA Santé." }
    ],
    blocks: [
      { title: "Ce que j'apporte", items: [
        "<b>Automatisation :</b> scripting Python/PowerShell pour industrialiser le reporting et les tâches d'administration.",
        "<b>Conteneurs & CI/CD :</b> Docker, Docker Compose, Jenkins et pipelines Git.",
        "<b>Cloud (AWS) :</b> EC2, Lambda, S3, API Gateway et architectures serverless.",
        "<b>Supervision :</b> dashboards Grafana et Zabbix avec alerting."
      ] },
      { title: "Ma façon de travailler", items: [
        "<b>Rigueur :</b> un travail documenté et reproductible, du script à la production.",
        "<b>Gestion de projet :</b> budget, planning, COPIL et coordination des parties prenantes.",
        "<b>Support :</b> gestion d'incidents N2/N3 et troubleshooting à distance.",
        "<b>Agile :</b> pratique Scrum en équipes multi-sites."
      ] }
    ],
    yearsTitle: "Chronologie",
    years: [
      { year: "2026", title: "LNA Santé — DevOps & automatisation (alternance)", items: [
        "Pipeline d'audit et de conformité sur environ 5 000 postes, industrialisation du reporting technique.",
        "Supervision multi-sites avec monitoring conteneurisé et dashboards Grafana.",
        "Administration système sous Active Directory, automatisation PowerShell, support à distance."
      ] },
      { year: "2024", title: "LNA Santé — Gestion de projet IT (stage)", items: [
        "Pilotage du projet de renouvellement des postes : budget, planning, suivi hebdomadaire.",
        "Déploiement et préparation des postes utilisateurs ; administration des assets sous GLPI.",
        "Animation des COPIL et coordination des parties prenantes."
      ] },
      { year: "2023", title: "Nupsol — Développement .NET", items: [
        "Conception et développement d'une application RH de gestion des temps et congés (WinForms, VB.NET).",
        "Modélisation UML, workflows de validation, tests et recette."
      ] }
    ]
  },

  skills: {
    title: "Compétences",
    tagline: "Ma boîte à outils technique",
    proficiency: [
      { title: "Scripting & langages", items: [
        { name: "PowerShell", pct: 88 },
        { name: "Python", pct: 85 },
        { name: "Bash / Shell", pct: 85 },
        { name: "SQL / PL/SQL", pct: 78 },
        { name: "VB.NET", pct: 70 }
      ] },
      { title: "CI/CD & conteneurs", items: [
        { name: "Docker & Docker Compose", detail: "Conteneurisation, services de monitoring, orchestration Big Data", pct: 86 },
        { name: "Git & GitLab CI / GitHub", detail: "Gestion de versions et pipelines CI/CD", pct: 85 },
        { name: "Jenkins", detail: "Automatisation de build et pipelines de livraison", pct: 80 },
        { name: "Kubernetes", detail: "Orchestration de conteneurs (fondamentaux)", pct: 70 }
      ] },
      { title: "Cloud & infrastructure", items: [
        { name: "AWS", detail: "EC2, Lambda, S3, Athena, API Gateway, DynamoDB", pct: 76 },
        { name: "Linux", detail: "Debian, CentOS, Ubuntu, Kali, Alpine", pct: 85 },
        { name: "Windows Server", detail: "Active Directory, Azure AD, SCCM", pct: 82 },
        { name: "Virtualisation", detail: "Proxmox, VMware, VirtualBox, LXC", pct: 78 }
      ] },
      { title: "Automatisation & supervision", items: [
        { name: "Ansible", detail: "Provisioning et configuration", pct: 74 },
        { name: "Grafana", detail: "Dashboards de monitoring", pct: 82 },
        { name: "Zabbix", detail: "Supervision d'infrastructure", pct: 75 },
        { name: "Power BI", detail: "Reporting et visualisation", pct: 70 }
      ] }
    ],
    groupsTitle: "Technologies par domaine",
    groups: [
      { title: "CI/CD & conteneurisation", items: ["Git", "GitLab CI/CD", "GitHub", "Jenkins", "Docker", "Docker Compose", "Kubernetes"] },
      { title: "Virtualisation", items: ["Proxmox", "VMware", "VirtualBox", "LXC"] },
      { title: "Systèmes", items: ["Windows Server", "Linux (Debian)", "CentOS", "Ubuntu", "Kali", "Alpine"] },
      { title: "Ordonnancement", items: ["CronTab", "VTOM (Visual TOM)", "systemd"] },
      { title: "Cloud (AWS)", items: ["EC2", "Lambda", "S3", "Athena", "API Gateway", "DynamoDB"] },
      { title: "Supervision & visualisation", items: ["Grafana", "Zabbix", "Power BI", "Tableau"] },
      { title: "Langages & scripting", items: ["Python", "Bash", "Shell", "PowerShell", "VB.NET", "SQL", "PL/SQL"] },
      { title: "Bases de données", items: ["Oracle", "PostgreSQL", "MySQL", "SQL Server", "Neo4j", "MongoDB"] },
      { title: "Bibliothèques Python", items: ["Pandas", "Flask", "Requests", "Selenium", "Boto3", "PyPDF2"] },
      { title: "Automatisation & config", items: ["Ansible", "Active Directory", "Azure AD", "SCCM", "GLPI API", "DHCP"] },
      { title: "Méthodologie & outils", items: ["Agile", "Scrum", "Jupyter", "VS Code", "Postman", "UML", "MERISE"] }
    ],
    expertise: {
      title: "Domaines de prédilection en détail",
      note: "Un regard plus précis sur ce avec quoi je travaille, par domaine.",
      blocks: [
        { title: "DevOps & CI/CD", sub: [
          { title: "Pipelines", items: [
            "Pipelines CI/CD avec Git, GitLab CI/CD et Jenkins",
            "Build et packaging automatisés avec Maven",
            "Tests automatisés : Selenium (E2E), Locust (performance)"
          ] },
          { title: "Conteneurs", items: [
            "Images Docker et Docker Compose pour les stacks locales et de monitoring",
            "Fondamentaux Kubernetes pour l'orchestration",
            "Déploiement conteneurisé en staging et production"
          ] }
        ] },
        { title: "Cloud & infrastructure", sub: [
          { title: "AWS", items: [
            "EC2, S3 et Lambda pour le calcul et le stockage",
            "API Gateway et DynamoDB pour les applications serverless événementielles",
            "Athena pour les requêtes"
          ] },
          { title: "Virtualisation & systèmes", items: [
            "VMware vSphere, Proxmox, VirtualBox et LXC",
            "Windows Server avec Active Directory, Azure AD et SCCM",
            "Administration Linux (Debian, CentOS, Ubuntu, Kali, Alpine)"
          ] }
        ] },
        { title: "Automatisation & supervision", sub: [
          { title: "Automatisation", items: [
            "Scripting Python et PowerShell pour industrialiser l'exploitation",
            "Provisioning et configuration avec Ansible",
            "Consolidation de données multi-sources avec Pandas"
          ] },
          { title: "Monitoring", items: [
            "Dashboards Grafana et Zabbix",
            "Alerting par e-mail et centralisation des logs",
            "Reporting Power BI et Tableau"
          ] }
        ] }
      ]
    }
  },

  education: {
    title: "Formation",
    tagline: "Diplômes, certifications et langues",
    items: [
      { year: "2024–2026", degree: "Master — Réseaux & Télécommunications, Développement d'applications & sécurité", school: "Université de Reims Champagne-Ardenne — Reims, France", desc: "En cours. Développement d'applications, sécurité des systèmes et des réseaux." },
      { year: "2023–2024", degree: "Licence professionnelle — Administration et sécurité des systèmes et réseaux", school: "Université de Perpignan Via Domitia — Perpignan, France", desc: "Administration et sécurité des systèmes d'information et des réseaux." },
      { year: "2021–2023", degree: "BTS — Développement des systèmes d'information", school: "Lycée technique Al Kendy — Casablanca, Maroc", desc: "Développement logiciel et systèmes d'information." },
      { year: "2021", degree: "Baccalauréat — Sciences Physiques", school: "Lycée Bir Anzaran — Casablanca, Maroc", desc: "Baccalauréat, sciences physiques." }
    ],
    certsTitle: "Certifications",
    certs: [
      { name: "AWS Academy — Introduction to Cloud", issuer: "Amazon Web Services", year: "2024" },
      { name: "Linux Essentials", issuer: "Cisco Networking Academy", year: "2024" },
      { name: "Python Essentials", issuer: "Cisco Networking Academy", year: "2024" },
      { name: "Introduction to Networks", issuer: "Cisco Networking Academy", year: "2024" },
      { name: "Windows Server 2019 et réseau", issuer: "Udemy", year: "2024" },
      { name: "Hacking éthique — apprendre à programmer en Python", issuer: "Udemy", year: "2025" }
    ],
    langsTitle: "Langues",
    langs: [
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "Professionnel" },
      { name: "Arabe", level: "Langue maternelle" }
    ]
  },

  contact: {
    title: "Contact",
    tagline: "Travaillons ensemble",
    lead: "Ouverte aux opportunités DevOps, cloud et systèmes — écrivez-moi, ou retrouvez-moi sur LinkedIn et GitHub.",
    email: "zineb.tahirr@hotmail.com",
    items: [
      { label: "Localisation", value: "Nantes, France", icon: "pin" },
      { label: "E-mail", value: "zineb.tahirr@hotmail.com", href: "mailto:zineb.tahirr@hotmail.com", icon: "mail" },
      { label: "Téléphone", value: "(+33) 7 61 89 27 01", href: "tel:+33761892701", icon: "phone" },
      { label: "LinkedIn", value: "linkedin.com/in/z-tahir", href: "https://www.linkedin.com/in/z-tahir", external: true, icon: "linkedin" },
      { label: "GitHub", value: "github.com/tahir-zineb", href: "https://github.com/tahir-zineb", external: true, icon: "github" },
      { label: "CV (PDF)", value: "Télécharger", href: "assets/cv/Zineb_TAHIR_CV.pdf", icon: "file" }
    ]
  },

  footer: {
    blurb: "Ingénieure DevOps & systèmes junior — automatisation, conteneurs et infrastructure cloud.",
    rights: "© 2026 Zineb TAHIR. Tous droits réservés.",
    made: "Construit en HTML, CSS et JavaScript purs — sans framework.",
    columns: [
      { title: "Navigation", links: [
        { label: "À propos", href: "#about" },
        { label: "Expérience", href: "#experience" },
        { label: "Projets", href: "#projects" },
        { label: "Impact", href: "#impact" },
        { label: "Compétences", href: "#skills" },
        { label: "Formation", href: "#education" }
      ] },
      { title: "Contact", links: [
        { label: "Me contacter", href: "#contact" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/z-tahir", external: true },
        { label: "GitHub", href: "https://github.com/tahir-zineb", external: true },
        { label: "E-mail", href: "mailto:zineb.tahirr@hotmail.com" }
      ] },
      { title: "Ressources", links: [
        { label: "CV (PDF)", href: "assets/cv/Zineb_TAHIR_CV.pdf", download: true },
        { label: "Certifications", href: "#education" }
      ] }
    ]
  }
};
