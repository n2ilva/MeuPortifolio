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
    infraYears: 6,
    devYears: 1,
    get totalYears() {
        return this.infraYears + this.devYears;
    }
};

// Roles para animação na Home
export const roles = [
    "Desenvolvedor Full Stack",
    "Desenvolvedor Web",
    "Desenvolvedor Mobile",
    "Analista de Infraestrutura"
];

// Experiências detalhadas
export const experiencias = [
    {
        area: "Infraestrutura de TI",
        tempo: `${experience.infraYears} anos`,
        icone: "bi-hdd-network-fill",
        cor: "#6366f1",
        descricao: "Redes & Segurança • Servidores & Virtualização • Cloud & Banco de Dados • Gestão & Automação",
        tags: ["Cisco", "Fortigate", "VMware", "Azure", "AWS"],
        clicavel: true,
        pagina: "infraestrutura" as const
    },
    {
        area: "Desenvolvimento",
        tempo: `${experience.devYears} ano`,
        icone: "bi-code-slash",
        cor: "#22c55e",
        descricao: "Desenvolvimento de aplicações Web e Mobile com React, React Native e Next.js • Integração com Firebase e Supabase • Implementação de autenticação e sincronização em tempo real • Criação de plataformas educacionais e ferramentas interativas",
        tags: ["React", "React Native", "Next.js", "Firebase", "TypeScript"]
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
