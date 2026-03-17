export type ProjectStatus = "new" | "in progress";

export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    status?: ProjectStatus;
}

interface PortfolioConfig {
    name: string;
    title: string;
    description: string;
    location: string;
    email: string;
    socialLinks: any;
    seo: any;
    about: any;
    apprenticeship: any;
    skills: any;
    education: any;
    projects: Project[];
}

export const portfolioConfig: PortfolioConfig = {
    name: "Meven DESBOIS",
    title: "Student B2 Systems, Networks, Cloud & Cybersecurity",
    description: "Passionate about CTF, DevOps and cybersecurity.",
    location: "France",

    email: "meven.desbois@icloud.com",

    socialLinks: {

        linkedin: "https://www.linkedin.com/in/mevendesbois",
        github: "https://github.com/MevenLeVrai",
    },


    // SEO Information
    seo: {
        ogImage: "/meven-portfolio.png",
        url: "https://mevenlevrai.github.io/portfolio",
        twitterHandle: "",
        keywords: [
            "Meven Desbois",
            "portfolio Meven Desbois",
            "alternant cybersécurité",
            "alternance cybersécurité Nantes",
            "alternance cybersécurité Paris",
            "Bachelor Systèmes Réseaux Cloud Cybersécurité",
            "Sup De Vinci Nantes",
            "administrateur système junior",
            "admin système Linux junior",
            "DevOps junior",
            "étudiant cybersécurité",
            "cybersecurity student",
            "CTF player",
            "CTF cybersécurité",
            "homelab",
            "self-hosting",
            "Forgejo self-hosted",
            "virtualisation VMware",
            "réseau d’entreprise",
            "network monitoring",
            "Grafana Prometheus Loki",
            "Wazuh GLPI",
            "Linux Debian",
            "scripting Bash",
            "scripting Python",
            "Git GitHub",
            "Azure cloud",
            "Next.js portfolio",
            "IT student France",
        ],
        authors: [
            {
                name: "Meven DESBOIS",
                url: "https://github.com/MevenLeVrai",
            },
        ],
    },

    // About Information
    about: {
        bio: "I am a second-year student in Systems, Networks, Cloud and Cybersecurity at Sup De Vinci. I am passionate about CTFs, system administration and DevOps, and I build projects around automation, security and observability. I enjoy understanding how systems really work under the hood and designing reliable, well-documented and reproducible solutions.",
        hobbies: [
            "CTF and security challenges",
            "Homelab and self-hosting",
            "Scripting (Bash, Python)",
            "Tech and cybersecurity watch",
            "Gaming and hardware tinkering",
        ],
        personalInfo: {
            language: ["French", "English"],
            nationality: "French",
            gender: "Male",
        },

    },

    apprenticeship: {
        enabled: true,
        text: "Currently looking for a one-year apprenticeship in system administration, DevOps or cybersecurity starting in May 2026, in Paris or Nantes."
    },


    skills: {
        roles: [
            "CTF Player",
            "Powerlifter",
            "Junior Sysadmin",
            "Traveller",
            "Network & Cloud Enthusiast",
            "Security Explorer",
        ],



        // Langages de programmation / Scripting
        programmingLanguages: [
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
            { name: "PowerShell", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg" },
        ],


        // DevOps & Cloud
        devops: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "Azure DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
            { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
        ],

        // Systèmes & Virtualisation
        sysadmin: [
            { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
            { name: "Windows", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
            { name: "VMware", icon: "https://www.svgrepo.com/show/473827/vmware.svg" },
            { name: "VirtualBox", icon: "https://www.vectorlogo.zone/logos/virtualbox/virtualbox-icon.svg" },
            { name: "SSH", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg" },
            { name: "PfSense", icon: "https://cdn.simpleicons.org/pfsense" },
        ],

        // Monitoring & ITSM
        monitoring: [
            { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
            { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
            { name: "Loki", icon: "https://cdn.simpleicons.org/grafana" },
            { name: "Wazuh", icon: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/wazuh.svg" },
            { name: "GLPI", icon: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/glpi.svg" },
        ],

        // Cybersécurité & Pentest
        cybersecurity: [
            { name: "Wireshark", icon: "https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg" },
            { name: "Nmap", icon: "https://nmap.org/images/sitelogo-nmap.svg" },
            { name: "Burp Suite", icon: "https://cdn.simpleicons.org/burpsuite" },
            { name: "Metasploit", icon: "https://cdn.simpleicons.org/metasploit" },
            { name: "Hydra", icon: "https://www.kali.org/tools/hydra/images/hydra-logo.svg" },
            { name: "Feroxbuster", icon: "https://www.kali.org/tools/feroxbuster/images/feroxbuster-logo.svg" },
            { name: "John the Ripper", icon: "https://www.kali.org/tools/john/images/john-logo.svg" },
        ],

        // CTF & Entraînement
        ctf: [
            { name: "HackTheBox", icon: "https://cdn.simpleicons.org/hackthebox/9FEF00" },
            { name: "TryHackMe", icon: "https://tryhackme.com/img/favicon.png" },
            { name: "HackMyVM", icon: "https://cdn.simpleicons.org/virtualbox/183A61" },
        ],

        // Productivité
        productivity: [
            { name: "Obsidian", icon: "https://obsidian.md/images/obsidian-logo-gradient.svg" },
            { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
            { name: "Microsoft Office", icon: "https://img.icons8.com/color/48/microsoft-office-2019.png" },
        ],
    },



    // Education Information
    education: [
        {
            degree: "Bachelor - Systems, Networks, Cloud & Cybersecurity (B2)",
            institution: "Sup De Vinci",
            location: "Nantes, France",
            period: "2024 - 2027 (currently in B2)",
            description:
                "I am currently studying in the Systems, Networks, Cloud and Cybersecurity track at Sup De Vinci. I am building strong foundations in system administration, networking, virtualization, cloud infrastructures and cybersecurity, while developing scripting skills and a DevOps mindset through hands-on projects and labs.",
        },
        {
            degree: "Baccalaureate - Mathematics and Digital Science Computer Science",
            institution: "Group Dom Sortais ",
            location: "Beaupréau, France",
            period: "2021 - 2024",
            description:
                "",
        },
    ],


    // Projects Information
    projects: [
        {
            title: "Azure PHP App – CI/CD, Containers & MySQL",
            description:
                "Hands-on lab where I deployed a simple PHP/MySQL web application on Azure using a full cloud-native pipeline. I set up a bastion VM, containerized the app with Docker, built and pushed images to Azure Container Registry, configured an Azure DevOps pipeline with a self-hosted agent, and deployed the container to Azure Container Apps with a managed MySQL database. The goal was to automate the build and deployment process end-to-end and document the infrastructure.",
            tags: [
                "Azure",
                "Azure DevOps",
                "Docker",
                "Container Apps",
                "MySQL",
                "CI/CD",
            ],
            link: "",
            status: "new", // "new" | "in progress" | undefined
        },
        {
            title: "Network Infrastructure – TacTic Brother BUILD",
            description:
                "Design and deployment of a full enterprise network infrastructure from scratch. We virtualized an OPNsense firewall and router on VMware, configured DHCP, VLANs and firewall rules to segment and secure the network. I also configured a legacy HP ProCurve 2810 switch via Telnet, applying port-based VLAN assignments and access rules. The goal was to deliver a production-ready, segmented and documented network before handing it off to the RUN team.",
            tags: [
                "OPNsense",
                "VMware",
                "Firewall",
                "VLAN",
                "DHCP",
                "HP ProCurve",
                "Telnet",
                "Networking",
            ],
            link: "",

        },
        {
            title: "Network Supervision & Operations – TacTic Brother RUN",
            description:
                "Follow-up of the TacTic Brother enterprise network project, focused on operations and monitoring. We designed and deployed a full RUN stack: Grafana + Prometheus for NOC dashboards, Loki for firewall log centralization, GLPI for ITSM (assets, incidents and changes) and Wazuh as a SOC-lite. I worked on turning network and security metrics into actionable dashboards, configuring alerting, and documenting runbooks so another team could operate and troubleshoot the infrastructure.",
            tags: [
                "Grafana",
                "Prometheus",
                "Loki",
                "Wazuh",
                "GLPI",
                "Monitoring",
                "ITSM",
                "SOC-lite",
            ],
            link: "",
        },
        {
            title: "Pokerix – Turn-based Multiplayer Battle Game",
            description:
                "End-of-year team project: design and deployment of the backend, infrastructure and CI/CD for a turn-based creature battle web application (multi-user, secure and scalable). I focus on the network, deployment, security and automation aspects. My scope: network architecture, secure exposure, GitHub Actions pipelines, monitoring (Prometheus/Grafana) and deployment on the school lab infrastructure.",
            tags: [
                "Java Spring",
                "Angular",
                "MongoDB",
                "Redis",
                "GitHub Actions",
                "CI/CD",
                "Networking",
            ],
            link: "https://github.com/BaptouK/PokeRixe",
            status: "in progress"
        },
        {
            title: "CTF & Security Labs",
            description:
                "Regularly solving CTF challenges and security labs focused on web exploitation, reverse engineering and basic crypto. I document each challenge in a private Obsidian knowledge base with methodology, tooling and remediation, and use these notes to improve my attack paths and detection mindset.",
            tags: ["CTF", "HackTheBox", "TryHackMe", "Web Exploitation", "Reverse Engineering"],
            link: "",
            status: "in progress"
        },

        {
            title: "ESP32 Wi‑Fi Sniffer – Advanced Packet Analysis",
            description:
                "Development of an advanced ESP32‑based Wi‑Fi sniffer able to capture 802.11 frames, rotate channels, track unique devices and compute live statistics (RSSI, channel, packet type). Includes configurable modes to log all packets, only management frames or unique MACs, with console reporting and basic filtering for signal strength and specific targets.",
            tags: [
                "ESP32",
                "Wi‑Fi",
                "Packet Sniffing",
                "C/C++",
                "Embedded",
                "Cybersecurity",
            ],
            link: "", // à remplir but mettre le code sur Github.
        },
        {
            title: "Self‑Hosted Git Forge – Forgejo on Debian",
            description:
                "Deployment of a self‑hosted Git forge (Forgejo) on a Debian Trixie VM running on VMware, without Docker. I installed and configured Forgejo as a system service, handled reverse proxy and HTTPS, set up repositories, users and access keys, and documented backup and update procedures so the platform can be maintained over time.",
            tags: [
                "Forgejo",
                "Git",
                "Debian",
                "VMware",
                "Self‑Hosted",
                "DevOps",
            ],
            link: "",
        },
    ],
};
