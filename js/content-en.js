/* English content — single source of truth for the EN page.
   Strings may contain inline HTML (<b>, <a>). Keep the same shape as content-fr.js. */
window.CONTENT = window.CONTENT || {};
window.CONTENT.en = {
  code: "en",
  htmlTitle: "Zineb TAHIR — DevOps & Systems Engineer",
  metaDescription: "Zineb TAHIR — Junior DevOps / Systems engineer in France. Automation, containerisation (Docker, Kubernetes), CI/CD (Git, Jenkins), AWS cloud (EC2, Lambda, S3, API Gateway) and infrastructure supervision.",

  ui: {
    skip: "Skip to content",
    cv: "CV",
    cvTitle: "Download the CV (PDF)",
    theme: "Toggle dark mode",
    menu: "Menu",
    showDetails: "Show details",
    hideDetails: "Hide details",
    more: "Details",
    context: "Context:",
    constraints: "Constraints:",
    result: "Result:",
    gridAria: "Career timeline: employers as bars from 2021 to today",
    gridStudies: "Studies",
    filterAria: "Filter projects",
    backToTop: "Back to top"
  },

  nav: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "impact", label: "Impact" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ],

  hero: {
    ariaLabel: "Introduction",
    badge: "DevOps · Systems · Cloud (AWS)",
    kicker: "Hello, I'm",
    name: ["Zineb", "TAHIR"],
    typingPrefix: "Junior",
    typing: ["DevOps Engineer", "Cloud Engineer (AWS)", "Systems Administrator", "CI/CD Engineer", "Python Developer"],
    lede: "Junior IT engineer focused on <b>DevOps and Cloud</b>, with hands-on experience in automation, containerisation (Docker, Kubernetes) and deploying infrastructure on AWS. Comfortable with scripting (Python, PowerShell, Bash) and CI/CD (Git, Jenkins).",
    where: "France — IT Project Manager / Support Administrator (work-study) at <b>LNA Santé</b>, Paris, since 2024.",
    photoAlt: "Portrait of Zineb TAHIR",
    actions: [
      { label: "Let's connect", href: "#contact", icon: "rocket", style: "primary" },
      { label: "Download CV", href: "assets/cv/Zineb_TAHIR_CV.pdf", icon: "download", download: true, style: "secondary" },
      { label: "GitHub", href: "https://github.com/tahir-zineb", icon: "github", external: true, style: "tertiary" }
    ],
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/z-tahir", icon: "linkedin", external: true },
      { label: "GitHub", href: "https://github.com/tahir-zineb", icon: "github", external: true },
      { label: "Email", href: "mailto:zineb.tahirr@hotmail.com", icon: "mail" }
    ],
    facts: [
      { n: 2, suffix: "+", l: "years of work-study" },
      { n: 5000, suffix: "+", l: "workstations managed" },
      { n: 6, suffix: "", l: "certifications" },
      { n: 3, suffix: "", l: "multi-site environments" }
    ]
  },

  about: {
    title: "About",
    tagline: "Who I am and how I work",
    paragraphs: [
      "I am a <b>junior IT engineer</b> oriented towards <b>DevOps and Cloud</b>, with concrete experience in automation, containerisation (Docker, Kubernetes) and deploying infrastructure on AWS (EC2, Lambda, S3, API Gateway).",
      "Since 2024 I work as an <b>IT Project Manager / Support Administrator</b> on a work-study contract at <b>LNA Santé</b> in Paris, where I automate audit and compliance reporting over a fleet of about 5 000 workstations, set up multi-site supervision, and handle N2/N3 system administration.",
      "I am comfortable with scripting (Python, PowerShell, Bash) and CI/CD (Git, Jenkins), and I want to deepen my practice of building scalable cloud pipelines and infrastructure, with a focus on industrialising and hardening systems.",
      "I am currently completing a <b>Master's in Networks & Telecommunications</b> (application development and security) at Université de Reims Champagne-Ardenne."
    ],
    competencies: {
      title: "Core competencies",
      items: ["DevOps", "CI/CD", "Containerisation", "Cloud (AWS)", "Infrastructure automation", "System administration", "Virtualisation", "Supervision & monitoring", "Scripting", "Data & reporting", "Networking & security", "Agile / Scrum"]
    },
    soft: {
      title: "How I work",
      items: [
        { name: "Analytical thinking", desc: "Strong analytical mindset and a habit of proposing solutions." },
        { name: "Organised, structured, rigorous", desc: "Documented, reproducible work — from scripts to production." },
        { name: "Client empathy", desc: "Good relationship with users and support teams; I listen before I build." },
        { name: "Reactive, with a sense of priorities", desc: "Incidents handled first, then improvements and automation." },
        { name: "Fast learner", desc: "Quick adoption of new tools and technologies." },
        { name: "Communication & teamwork", desc: "Clear communication in French and English, in agile teams." }
      ]
    }
  },

  experience: {
    title: "Experience",
    tagline: "Three roles, two employers, France and Morocco",
    gridNote: "Career at a glance — bars are actual durations; click one to jump to the role.",
    studies: [
      { start: "2021-09", end: "2026-08", label: "BTS → Licence Pro → Master (Reims)" }
    ],
    roles: [
      {
        id: "lna-alt",
        color: "rmc",
        role: "IT Project Manager / Support Administrator",
        org: "LNA Santé",
        short: "IT PM / Support Admin",
        place: "Paris, France",
        start: "2024-09",
        end: null,
        period: "09/2024 – Present",
        open: true,
        summary: "Work-study contract combining system administration, infrastructure automation and IT project management across a multi-site healthcare environment.",
        groups: [
          { title: "Audit & compliance pipeline", items: [
            "Automated multi-source inventory collection (Active Directory, SCCM, GLPI API) over a fleet of about 5 000 workstations.",
            "Consolidated and normalised the data with Python/Pandas to make reporting reliable.",
            "Detected software-compliance, patching and obsolescence gaps across the fleet.",
            "Built security and fleet-renewal dashboards.",
            "Industrialised technical reporting, cutting the manual consolidation work.",
            "Environment: PowerShell, Python, SQL, Docker, SCCM, Active Directory, Azure AD, GLPI API, Windows."
          ] },
          { title: "Multi-site supervision & automation", items: [
            "Set up centralised supervision of multi-site equipment.",
            "Automated provisioning (DHCP, scripts, REST APIs).",
            "Deployed containerised monitoring services with Docker.",
            "Built Grafana dashboards to track key indicators.",
            "Configured email alerting to the support team; centralised logs and automated operational tasks.",
            "Environment: Linux (CentOS), Docker, VMware vSphere, Ansible, DHCP, REST API, VLAN, SSH, Grafana, Bash."
          ] },
          { title: "Support & system administration", items: [
            "Handled N2/N3 incidents and requests in GLPI (enterprise Windows environment).",
            "Industrialised system-administration tasks with PowerShell scripting.",
            "Administered identities and access in Active Directory.",
            "Provided remote support and troubleshooting through Bomgar.",
            "Managed the workstation lifecycle (deployment, mastering, maintenance) via SCCM."
          ] }
        ],
        env: ["PowerShell", "Python", "Docker", "Ansible", "Linux (CentOS)", "VMware vSphere", "Grafana", "SCCM", "Active Directory", "Azure AD", "GLPI", "Bomgar", "DHCP", "REST API", "SQL", "Windows Server"]
      },
      {
        id: "lna-stage",
        color: "bpce",
        role: "IT Project Manager (end-of-degree internship)",
        org: "LNA Santé",
        short: "IT Project Manager",
        place: "Paris, France",
        start: "2024-03",
        end: "2024-09",
        period: "03/2024 – 09/2024 (6 months)",
        groups: [
          { title: "Workstation renewal project", items: [
            "Led the workstation-renewal project (budget, planning, weekly follow-up).",
            "Deployed and prepared user workstations.",
            "Analysed multi-source data in Excel (pivot tables, consolidation).",
            "Administered and updated assets in GLPI.",
            "Ran steering committees and coordinated the stakeholders."
          ] }
        ],
        env: ["GLPI", "SCCM", "Excel", "Active Directory", "Windows", "Project management"]
      },
      {
        id: "nupsol",
        color: "imperium",
        role: ".NET Developer",
        org: "Nupsol",
        short: ".NET Developer",
        place: "Casablanca, Morocco",
        start: "2023-05",
        end: "2023-07",
        period: "05/2023 – 07/2023",
        context: "HR application — time and leave management.",
        groups: [
          { title: "Tasks", items: [
            "Designed the architecture and UML modelling of the application.",
            "Developed the Admin / Employee interfaces (WinForms, Guna UI).",
            "Developed the backend and business logic in VB.NET.",
            "Implemented time, leave and validation workflows.",
            "Ran the tests and acceptance before deployment."
          ] }
        ],
        env: ["VB.NET", "WinForms", "Guna UI", "SQL Server", "UML"]
      }
    ]
  },

  projects: {
    title: "Projects",
    tagline: "Professional and academic work",
    filters: [
      { id: "all", label: "All" },
      { id: "devops", label: "DevOps & CI/CD" },
      { id: "cloud", label: "Cloud" },
      { id: "sysadmin", label: "Systems & Infra" },
      { id: "data", label: "Data" }
    ],
    items: [
      {
        id: "cicd", cats: ["devops"],
        org: "Academic project",
        title: "End-to-end DevOps & CI/CD pipeline",
        summary: "Industrialised a complete CI/CD pipeline: automated build, containerised deployment and automated testing, with quality reporting.",
        stack: ["Git", "Jenkins", "Maven", "Docker", "Selenium", "Locust"],
        sections: [
          { title: "What it does", items: [
            "Industrialised a CI/CD pipeline from end to end.",
            "Automated build and packaging with Maven.",
            "Containerised deployment with Docker (staging / production).",
            "Automated testing: Selenium (end-to-end) and Locust (performance).",
            "Quality reporting and optimisation of the delivery cycle."
          ] }
        ]
      },
      {
        id: "bigdata", cats: ["data"],
        org: "Academic project",
        title: "Big Data streaming & ETL pipeline",
        summary: "Real-time log ingestion with Kafka, distributed storage in an HDFS data lake, and ETL processing with Spark, all orchestrated in containers.",
        stack: ["Apache Kafka", "HDFS", "Apache Spark", "Docker Compose"],
        sections: [
          { title: "What it does", items: [
            "Real-time log ingestion with Apache Kafka.",
            "Distributed storage in an HDFS data lake.",
            "ETL processing and data cleaning with Apache Spark.",
            "Orchestrated a containerised Big Data environment with Docker Compose."
          ] }
        ]
      },
      {
        id: "serverless-vote", cats: ["cloud"],
        org: "Academic project",
        title: "Serverless voting application — AWS",
        summary: "An event-driven serverless architecture on AWS for a voting application, handling the voting workflows and result consolidation.",
        stack: ["AWS Lambda", "API Gateway", "DynamoDB"],
        sections: [
          { title: "What it does", items: [
            "Designed an event-driven serverless architecture on AWS (Lambda, API Gateway, DynamoDB).",
            "Handled the voting workflows and the consolidation of results."
          ] }
        ]
      },
      {
        id: "fleet-audit", cats: ["devops", "sysadmin"],
        org: "LNA Santé · 2024 – 2026",
        title: "Fleet audit & compliance pipeline",
        summary: "Automated audit of a ~5 000-workstation fleet: multi-source inventory (AD, SCCM, GLPI API), Python/Pandas consolidation, and security & renewal dashboards.",
        stack: ["Python", "Pandas", "PowerShell", "SCCM", "Active Directory", "GLPI API", "SQL"],
        sections: [
          { title: "What it does", items: [
            "Collects inventory from Active Directory, SCCM and the GLPI API across ~5 000 workstations.",
            "Consolidates and normalises the data with Python/Pandas for reliable reporting.",
            "Flags software-compliance, patching and obsolescence gaps.",
            "Feeds security and fleet-renewal dashboards; replaces manual consolidation."
          ] }
        ],
        role: "Built and run in production at LNA Santé."
      },
      {
        id: "supervision", cats: ["sysadmin", "devops"],
        org: "LNA Santé · 2024 – 2026",
        title: "Multi-site supervision & automation",
        summary: "Centralised supervision of multi-site equipment: containerised monitoring, automated provisioning, Grafana dashboards and email alerting.",
        stack: ["Docker", "Grafana", "Ansible", "Linux (CentOS)", "VMware vSphere", "REST API", "Bash"],
        sections: [
          { title: "What it does", items: [
            "Centralised supervision of equipment across sites.",
            "Automated provisioning (DHCP, scripts, REST APIs).",
            "Deployed containerised monitoring services with Docker.",
            "Built Grafana dashboards; configured email alerting; centralised logs and automated operations."
          ] }
        ],
        role: "Built and run in production at LNA Santé."
      },
      {
        id: "rh-net", cats: ["data"],
        org: "Nupsol · 2023",
        title: "HR application (.NET)",
        summary: "A time-and-leave management application: UML design, Admin/Employee interfaces (WinForms, Guna UI) and VB.NET backend with validation workflows.",
        stack: ["VB.NET", "WinForms", "Guna UI", "SQL Server", "UML"],
        sections: [
          { title: "What it does", items: [
            "Architecture and UML modelling of the application.",
            "Admin / Employee interfaces (WinForms, Guna UI).",
            "Backend and business logic in VB.NET; time, leave and validation workflows.",
            "Tests and acceptance before deployment."
          ] }
        ]
      }
    ]
  },

  impact: {
    title: "Impact",
    tagline: "What I have delivered so far",
    metrics: [
      { n: "5 000+", l: "Workstations in the fleet", d: "Audited and supervised across a multi-site healthcare environment." },
      { n: "3", l: "Supervised environments", d: "Centralised multi-site supervision with containerised monitoring." },
      { n: "6", l: "Certifications", d: "Cisco (Linux, Python, Networks), Windows Server, AWS Cloud." },
      { n: "2", l: "Years of work-study", d: "IT project management and system administration at LNA Santé." }
    ],
    blocks: [
      { title: "What I bring", items: [
        "<b>Automation:</b> Python/PowerShell scripting to industrialise reporting and system-administration tasks.",
        "<b>Containers & CI/CD:</b> Docker, Docker Compose, Jenkins and Git-based pipelines.",
        "<b>Cloud (AWS):</b> EC2, Lambda, S3, API Gateway and serverless architectures.",
        "<b>Supervision:</b> Grafana and Zabbix dashboards with alerting."
      ] },
      { title: "Ways of working", items: [
        "<b>Rigour:</b> documented, reproducible work from scripts to production.",
        "<b>Project management:</b> budget, planning, steering committees and stakeholder coordination.",
        "<b>Support:</b> N2/N3 incident handling and remote troubleshooting.",
        "<b>Agile:</b> Scrum practice in multi-site teams."
      ] }
    ],
    yearsTitle: "Timeline",
    years: [
      { year: "2026", title: "LNA Santé — DevOps & automation (work-study)", items: [
        "Audit and compliance pipeline over ~5 000 workstations, industrialising the technical reporting.",
        "Multi-site supervision with containerised monitoring and Grafana dashboards.",
        "System administration in Active Directory, PowerShell automation, remote support."
      ] },
      { year: "2024", title: "LNA Santé — IT project management (internship)", items: [
        "Led the workstation-renewal project: budget, planning, weekly follow-up.",
        "Deployed and prepared user workstations; administered assets in GLPI.",
        "Ran steering committees and coordinated the stakeholders."
      ] },
      { year: "2023", title: "Nupsol — .NET development", items: [
        "Designed and developed an HR time-and-leave application (WinForms, VB.NET).",
        "UML modelling, validation workflows, tests and acceptance."
      ] }
    ]
  },

  skills: {
    title: "Skills",
    tagline: "My technical toolbox",
    proficiency: [
      { title: "Scripting & languages", items: [
        { name: "PowerShell", pct: 88 },
        { name: "Python", pct: 85 },
        { name: "Bash / Shell", pct: 85 },
        { name: "SQL / PL/SQL", pct: 78 },
        { name: "VB.NET", pct: 70 }
      ] },
      { title: "CI/CD & containers", items: [
        { name: "Docker & Docker Compose", detail: "Containerisation, monitoring services, Big Data orchestration", pct: 86 },
        { name: "Git & GitLab CI / GitHub", detail: "Version control and CI/CD pipelines", pct: 85 },
        { name: "Jenkins", detail: "Build automation and delivery pipelines", pct: 80 },
        { name: "Kubernetes", detail: "Container orchestration (fundamentals)", pct: 70 }
      ] },
      { title: "Cloud & infrastructure", items: [
        { name: "AWS", detail: "EC2, Lambda, S3, Athena, API Gateway, DynamoDB", pct: 76 },
        { name: "Linux", detail: "Debian, CentOS, Ubuntu, Kali, Alpine", pct: 85 },
        { name: "Windows Server", detail: "Active Directory, Azure AD, SCCM", pct: 82 },
        { name: "Virtualisation", detail: "Proxmox, VMware, VirtualBox, LXC", pct: 78 }
      ] },
      { title: "Automation & supervision", items: [
        { name: "Ansible", detail: "Provisioning and configuration", pct: 74 },
        { name: "Grafana", detail: "Monitoring dashboards", pct: 82 },
        { name: "Zabbix", detail: "Infrastructure supervision", pct: 75 },
        { name: "Power BI", detail: "Reporting and visualisation", pct: 70 }
      ] }
    ],
    groupsTitle: "Technologies by domain",
    groups: [
      { title: "CI/CD & containerisation", items: ["Git", "GitLab CI/CD", "GitHub", "Jenkins", "Docker", "Docker Compose", "Kubernetes"] },
      { title: "Virtualisation", items: ["Proxmox", "VMware", "VirtualBox", "LXC"] },
      { title: "Systems", items: ["Windows Server", "Linux (Debian)", "CentOS", "Ubuntu", "Kali", "Alpine"] },
      { title: "Scheduling", items: ["CronTab", "VTOM (Visual TOM)", "systemd"] },
      { title: "Cloud (AWS)", items: ["EC2", "Lambda", "S3", "Athena", "API Gateway", "DynamoDB"] },
      { title: "Supervision & visualisation", items: ["Grafana", "Zabbix", "Power BI", "Tableau"] },
      { title: "Languages & scripting", items: ["Python", "Bash", "Shell", "PowerShell", "VB.NET", "SQL", "PL/SQL"] },
      { title: "Databases", items: ["Oracle", "PostgreSQL", "MySQL", "SQL Server", "Neo4j", "MongoDB"] },
      { title: "Python libraries", items: ["Pandas", "Flask", "Requests", "Selenium", "Boto3", "PyPDF2"] },
      { title: "Automation & config", items: ["Ansible", "Active Directory", "Azure AD", "SCCM", "GLPI API", "DHCP"] },
      { title: "Methods & tools", items: ["Agile", "Scrum", "Jupyter", "VS Code", "Postman", "UML", "MERISE"] }
    ],
    expertise: {
      title: "Focus areas in depth",
      note: "A closer look at what I work with, by domain.",
      blocks: [
        { title: "DevOps & CI/CD", sub: [
          { title: "Pipelines", items: [
            "CI/CD pipelines with Git, GitLab CI/CD and Jenkins",
            "Automated build and packaging with Maven",
            "Automated testing: Selenium (end-to-end), Locust (performance)"
          ] },
          { title: "Containers", items: [
            "Docker images and Docker Compose for local and monitoring stacks",
            "Kubernetes fundamentals for orchestration",
            "Containerised deployment across staging and production"
          ] }
        ] },
        { title: "Cloud & infrastructure", sub: [
          { title: "AWS", items: [
            "EC2, S3 and Lambda for compute and storage",
            "API Gateway and DynamoDB for serverless, event-driven apps",
            "Athena for querying"
          ] },
          { title: "Virtualisation & systems", items: [
            "VMware vSphere, Proxmox, VirtualBox and LXC",
            "Windows Server with Active Directory, Azure AD and SCCM",
            "Linux administration (Debian, CentOS, Ubuntu, Kali, Alpine)"
          ] }
        ] },
        { title: "Automation & supervision", sub: [
          { title: "Automation", items: [
            "Python and PowerShell scripting to industrialise operations",
            "Ansible provisioning and configuration",
            "Multi-source data consolidation with Pandas"
          ] },
          { title: "Monitoring", items: [
            "Grafana and Zabbix dashboards",
            "Email alerting and log centralisation",
            "Power BI and Tableau reporting"
          ] }
        ] }
      ]
    }
  },

  education: {
    title: "Education",
    tagline: "Degrees, certifications and languages",
    items: [
      { year: "2024–2026", degree: "Master — Networks & Telecommunications, Application Development & Security", school: "Université de Reims Champagne-Ardenne — Reims, France", desc: "In progress. Application development, systems and network security." },
      { year: "2023–2024", degree: "Professional Bachelor — Systems & Networks Administration and Security", school: "Université de Perpignan Via Domitia — Perpignan, France", desc: "Administration and security of information systems and networks." },
      { year: "2021–2023", degree: "BTS — Information Systems Development", school: "Lycée technique Al Kendy — Casablanca, Morocco", desc: "Software and information-systems development." },
      { year: "2021", degree: "Baccalauréat — Physical Sciences", school: "Lycée Bir Anzaran — Casablanca, Morocco", desc: "High-school diploma, physical sciences." }
    ],
    certsTitle: "Certifications",
    certs: [
      { name: "AWS Academy — Introduction to Cloud", issuer: "Amazon Web Services", year: "2024" },
      { name: "Linux Essentials", issuer: "Cisco Networking Academy", year: "2024" },
      { name: "Python Essentials", issuer: "Cisco Networking Academy", year: "2024" },
      { name: "Introduction to Networks", issuer: "Cisco Networking Academy", year: "2024" },
      { name: "Windows Server 2019 & networking", issuer: "Udemy", year: "2024" },
      { name: "Ethical hacking — learning to program in Python", issuer: "Udemy", year: "2025" }
    ],
    langsTitle: "Languages",
    langs: [
      { name: "French", level: "Fluent" },
      { name: "English", level: "Professional" },
      { name: "Arabic", level: "Native" }
    ]
  },

  contact: {
    title: "Contact",
    tagline: "Let's work together",
    lead: "Open to DevOps, cloud and systems opportunities — write to me, or find me on LinkedIn and GitHub.",
    email: "zineb.tahirr@hotmail.com",
    items: [
      { label: "Location", value: "Paris, France", icon: "pin" },
      { label: "Email", value: "zineb.tahirr@hotmail.com", href: "mailto:zineb.tahirr@hotmail.com", icon: "mail" },
      { label: "Phone", value: "(+33) 7 61 89 27 01", href: "tel:+33761892701", icon: "phone" },
      { label: "LinkedIn", value: "linkedin.com/in/z-tahir", href: "https://www.linkedin.com/in/z-tahir", external: true, icon: "linkedin" },
      { label: "GitHub", value: "github.com/tahir-zineb", href: "https://github.com/tahir-zineb", external: true, icon: "github" },
      { label: "CV (PDF)", value: "Download", href: "assets/cv/Zineb_TAHIR_CV.pdf", icon: "file" }
    ]
  },

  footer: {
    blurb: "Junior DevOps & systems engineer — automation, containers and cloud infrastructure.",
    rights: "© 2026 Zineb TAHIR. All rights reserved.",
    made: "Built with plain HTML, CSS and JavaScript — no framework.",
    columns: [
      { title: "Navigation", links: [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Impact", href: "#impact" },
        { label: "Skills", href: "#skills" },
        { label: "Education", href: "#education" }
      ] },
      { title: "Connect", links: [
        { label: "Contact", href: "#contact" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/z-tahir", external: true },
        { label: "GitHub", href: "https://github.com/tahir-zineb", external: true },
        { label: "Email", href: "mailto:zineb.tahirr@hotmail.com" }
      ] },
      { title: "Resources", links: [
        { label: "CV (PDF)", href: "assets/cv/Zineb_TAHIR_CV.pdf", download: true },
        { label: "Certifications", href: "#education" }
      ] }
    ]
  }
};
