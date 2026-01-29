export interface Tecnologia {
    nome: string;
    icone: string;
    cor: string;
    descricao: string;
    categoria: "linguagem" | "framework" | "banco";
}

export const tecnologias: Tecnologia[] = [
    {
        nome: "JavaScript",
        icone: "devicon-javascript-plain",
        cor: "#F7DF1E",
        descricao: "Linguagem de programação versátil, essencial para desenvolvimento web. Permite criar interatividade em páginas e aplicações modernas.",
        categoria: "linguagem"
    },
    {
        nome: "TypeScript",
        icone: "devicon-typescript-plain",
        cor: "#3178C6",
        descricao: "Superset do JavaScript que adiciona tipagem estática. Melhora a manutenibilidade e reduz erros em projetos grandes.",
        categoria: "linguagem"
    },
    {
        nome: "Node.js",
        icone: "devicon-nodejs-plain",
        cor: "#339933",
        descricao: "Runtime JavaScript para server-side. Permite criar APIs, servidores e aplicações backend de alta performance.",
        categoria: "framework"
    },
    {
        nome: "Next.js",
        icone: "devicon-nextjs-plain",
        cor: "#ffffff",
        descricao: "Framework React para produção. Oferece SSR, SSG, rotas automáticas e otimizações de performance.",
        categoria: "framework"
    },
    {
        nome: "React",
        icone: "devicon-react-original",
        cor: "#61DAFB",
        descricao: "Biblioteca JavaScript para construir interfaces de usuário. Componentes reutilizáveis e estado reativo.",
        categoria: "framework"
    },
    {
        nome: "React Native",
        icone: "devicon-react-original",
        cor: "#61DAFB",
        descricao: "Framework para desenvolvimento mobile nativo usando React. Uma base de código para iOS e Android.",
        categoria: "framework"
    },
    {
        nome: "Tailwind CSS",
        icone: "devicon-tailwindcss-plain",
        cor: "#06B6D4",
        descricao: "Framework CSS utility-first para criação rápida de interfaces modernas e responsivas.",
        categoria: "framework"
    },
    {
        nome: "Bootstrap",
        icone: "devicon-bootstrap-plain",
        cor: "#563D7C",
        descricao: "Framework para desenvolvimento web. Permite criar interfaces de usuário modernas e responsivas.",
        categoria: "framework"
    },
    {
        nome: "Firebase",
        icone: "devicon-firebase-plain",
        cor: "#FFCA28",
        descricao: "Plataforma do Google para desenvolvimento de aplicativos. Oferece autenticação, banco de dados em tempo real, storage e hospedagem.",
        categoria: "banco"
    },
    {
        nome: "Supabase",
        icone: "devicon-supabase-plain",
        cor: "#3ECF8E",
        descricao: "Alternativa open-source ao Firebase. PostgreSQL com autenticação, storage e APIs em tempo real.",
        categoria: "banco"
    }
];

// Versão resumida para exibição na Home (stack principal)
export const techStackHome = tecnologias
    .filter(t => ["JavaScript", "TypeScript", "Node.js", "Next.js", "React", "React Native", "Tailwind CSS"].includes(t.nome))
    .map(({ nome, icone, cor }) => ({ nome, icone, cor }));

// Categorias para exibição
export const categorias = {
    linguagem: {
        titulo: "Linguagens",
        icone: "bi-code-slash"
    },
    framework: {
        titulo: "Frameworks & Libraries",
        icone: "bi-boxes"
    },
    banco: {
        titulo: "Bancos de Dados & BaaS",
        icone: "bi-database"
    }
} as const;
