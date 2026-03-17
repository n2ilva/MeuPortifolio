// Configurações do Perfil
export const profile = {
    name: "Natanael Ramos",
    role: "Analista de Infraestrutura",
    role2: "Desenvolvedor WEB | Mobile",
    photo: "/photo.jpeg",
    photoAlt: "Foto de perfil - Natanael Ramos"
};

// Configurações de Experiência
export const experience = {
    infraYears: 7,
    devYears: 1,
    get totalYears() {
        return this.infraYears + this.devYears;
    }
};

// Roles para animação na Home
export const roles = [
    "Analista de Infraestrutura e Redes",
    "Desenvolvedor Web",
    "Desenvolvedor Mobile",
];

// Experiências detalhadas
export const experiencias = [
    {
        area: "Infraestrutura de TI",
        tempo: `${experience.infraYears} anos`,
        icone: "bi-hdd-network-fill",
        cor: "#6366f1",
        descricao: "Tecnologias com experiência real em ambientes corporativos.",
        tags: ["Cisco L2/L3", "Controller Cisco", "Voz IP", "Troubleshooting Avançado", "Linux", "Windows Server", "AD", "GPO", "Azure AD", "VMware", "Hyper-V", "Banco de Dados", "BMC Remedy", "ServiceNow", "Zabbix", "SolarWinds", "Fortinet", "pfSense"],
        clicavel: true,
        pagina: "infraestrutura" as const
    },
    {
        area: "Desenvolvimento",
        tempo: `${experience.devYears} ano`,
        icone: "bi-code-slash",
        cor: "#22c55e",
        descricao: "Tecnologias estudadas no ultimo 1 ano.",
        tags: ["Node.js", "TypeScript", "JavaScript", "Kotlin", "React", "React Native", "Bootstrap", "Tailwind", "Next.js", "Express", "Prisma", "Firebase", "Google Auth", "Spring Initializr", "AWS EC2", "Docker", "MongoDB", "PostgreSQL", "Git", "GitHub"],
        clicavel: true,
        pagina: "projetos" as const
    }
];

// Configurações do Menu de Navegação
export interface MenuItem {
    id: string;
    label: string;
    icon: string;
    page: "home" | "linguagens" | "projetos" | "contato" | "infraestrutura";
}

export const menuItems: MenuItem[] = [
    {
        id: "home",
        label: "Início",
        icon: "bi-house-fill",
        page: "home"
    },
    {
        id: "infraestrutura",
        label: "Infraestrutura",
        icon: "bi-hdd-network-fill",
        page: "infraestrutura"
    },
    {
        id: "projetos",
        label: "Desenvolvedor",
        icon: "bi-phone-fill",
        page: "projetos"
    },
    {
        id: "contato",
        label: "Contato",
        icon: "bi-envelope-fill",
        page: "contato"
    }
];

// Configurações de Redes Sociais (para uso futuro)
export const socialLinks = {
    github: "https://github.com/n2ilva",
    linkedin: "https://www.linkedin.com/in/natanael2ilva",
    email: "natanaelsantos_silva@outlook.com"
};
