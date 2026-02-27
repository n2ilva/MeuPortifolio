export interface Tecnologia {
    nome: string;
    icone: string;
    cor: string;
    descricao: string;
    categoria: "linguagem" | "framework" | "banco" | "cloud";
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
    },
    {
        nome: "MongoDB",
        icone: "devicon-mongodb-plain",
        cor: "#47A248",
        descricao: "Banco de dados NoSQL orientado a documentos. Flexível, escalável e ideal para aplicações modernas.",
        categoria: "banco"
    },
    {
        nome: "PostgreSQL",
        icone: "devicon-postgresql-plain",
        cor: "#336791",
        descricao: "Banco de dados relacional robusto e open-source. Suporte avançado a JSON, extensões e alta performance.",
        categoria: "banco"
    },
    {
        nome: "Docker",
        icone: "devicon-docker-plain",
        cor: "#2496ED",
        descricao: "Plataforma de containerização para empacotar aplicações. Facilita deploy, escalabilidade e ambientes consistentes.",
        categoria: "framework"
    },
    {
        nome: "Git",
        icone: "devicon-git-plain",
        cor: "#F05032",
        descricao: "Sistema de controle de versão distribuído para rastrear mudanças no código, facilitar colaboração e manter histórico do projeto.",
        categoria: "framework"
    },
    {
        nome: "GitHub",
        icone: "devicon-github-original",
        cor: "#181717",
        descricao: "Plataforma para hospedagem de repositórios Git, revisão de código, colaboração em equipe e automações com workflows.",
        categoria: "framework"
    },
    {
        nome: "Stripe",
        icone: "bi bi-stripe",
        cor: "#635BFF",
        descricao: "Plataforma de pagamentos online para processar cobranças, assinaturas e checkout com segurança via APIs.",
        categoria: "framework"
    },
    {
        nome: "AWS EC2",
        icone: "devicon-amazonwebservices-plain-wordmark",
        cor: "#FF9900",
        descricao: "Serviço de computação em nuvem da AWS para provisionar e escalar servidores virtuais sob demanda.",
        categoria: "cloud"
    },
    {
        nome: "AWS S3",
        icone: "devicon-amazonwebservices-plain-wordmark",
        cor: "#FF9900",
        descricao: "Serviço de armazenamento de objetos da AWS para arquivos estáticos, backups e distribuição de conteúdo.",
        categoria: "cloud"
    },
    {
        nome: "AWS Aurora",
        icone: "devicon-amazonwebservices-plain-wordmark",
        cor: "#FF9900",
        descricao: "Banco de dados relacional gerenciado da AWS compatível com MySQL e PostgreSQL, com alta disponibilidade e performance.",
        categoria: "cloud"
    },
    {
        nome: "AWS DynamoDB",
        icone: "devicon-amazonwebservices-plain-wordmark",
        cor: "#FF9900",
        descricao: "Banco NoSQL gerenciado da AWS com baixa latência para aplicações escaláveis e orientadas a eventos.",
        categoria: "cloud"
    },
    {
        nome: "AWS Lambda",
        icone: "devicon-amazonwebservices-plain-wordmark",
        cor: "#FF9900",
        descricao: "Serviço serverless da AWS para executar funções em resposta a eventos sem gerenciar servidores.",
        categoria: "cloud"
    },
    {
        nome: "Express",
        icone: "devicon-express-original",
        cor: "#ffffff",
        descricao: "Framework minimalista para Node.js. Ideal para criar APIs RESTful e aplicações web de forma rápida e flexível.",
        categoria: "framework"
    },
    {
        nome: "Kotlin",
        icone: "devicon-kotlin-plain",
        cor: "#7F52FF",
        descricao: "Linguagem moderna para JVM e Android. Concisa, segura e interoperável com Java, ideal para apps mobile e backend.",
        categoria: "linguagem"
    },
    {
        nome: "Jetpack Compose",
        icone: "devicon-jetpackcompose-plain",
        cor: "#4285F4",
        descricao: "Toolkit moderno de UI declarativa para Android com Kotlin. Simplifica a criação de interfaces nativas e reativas.",
        categoria: "framework"
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
    },
    cloud: {
        titulo: "Cloud (AWS)",
        icone: "bi-cloud-fill"
    }
} as const;
