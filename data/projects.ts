export interface Projeto {
    id: string;
    nome: string;
    descricao: string;
    imagem: string;
    link: string;
    tecnologias: string[];
    destaque?: boolean;
}

export const projetos: Projeto[] = [
    {
        id: "agenda-familiar",
        nome: "Agenda Familiar",
        descricao: "Aplicativo de agenda colaborativa em tempo real para famílias e grupos. Sincronização instantânea de tarefas entre todos os membros, com modo privado para anotações pessoais. Recursos avançados incluem: gestão de permissões Admin/Usuário, calendário integrado com feriados nacionais, tema escuro, suporte multilíngue e autenticação via Google.",
        imagem: "/agenda-familiar.png",
        link: "https://www.agendafamiliar.app/",
        tecnologias: ["TypeScript", "React Native", "Expo", "Firebase Auth", "Firebase Realtime DB"],
        destaque: true
    },
    {
        id: "portfolio-maker",
        nome: "Portfólio Maker",
        descricao: "Ferramenta web intuitiva inspirada no Canva e PowerPoint, projetada para automatizar a criação de portfólios e apresentações. Focado em educadores, oferece integração direta com Google Fotos e Google Drive, templates personalizáveis, interface drag-and-drop, e exportação versátil em MP4 (com trilha sonora) ou PDF.",
        imagem: "/portfolio-maker.png",
        link: "https://portifoliomaker.netlify.app/",
        tecnologias: ["TypeScript", "Firebase", "Google OAuth", "Google Photos API", "Google Drive API"]
    },
    {
        id: "sara-ramos",
        nome: "Sara Ramos - Professora Infantil",
        descricao: "Plataforma educacional completa desenvolvida para Sara Ramos, educadora infantil. Oferece uma loja virtual com atividades pedagógicas prontas para uso, e-books e videoaulas exclusivas. Integração com MercadoPago para pagamentos e autenticação via Google OAuth. Conta também com uma seção gratuita de jogos educativos interativos.",
        imagem: "/sara-ramos.svg",
        link: "https://sararamos.com.br/",
        tecnologias: ["TypeScript", "Next.js", "React", "Express", "MongoDB", "MercadoPago", "Stripe", "Google OAuth"]
    },
    {
        id: "controle-financeiro",
        nome: "Controle Financeiro",
        descricao: "Aplicativo Android para gestão financeira pessoal e em grupo. Controle de entradas (salário, 13º, férias, bonificações) e saídas com categorias personalizáveis. Funcionalidades de grupos compartilhados, controle de cartões de crédito com faturas mensais e análises gráficas detalhadas.",
        imagem: "/controlefinanceiro.png",
        link: "https://drive.google.com/drive/folders/1BwaKfJqufa45FIztm5So6KXLNCZfWiuC?usp=sharing",
        tecnologias: ["TypeScript", "React Native", "Expo", "Firebase Auth", "Firebase Realtime DB"]
    },
    {
        id: "motorista-inteligente",
        nome: "Motorista Inteligente",
        descricao: "Aplicativo inteligente para motoristas Uber e 99 que analisa se uma oferta de corrida é vantajosa, com base em parâmetros configuráveis pelo próprio motorista. Inclui mapa de demanda em tempo real das cidades e bairros próximos (dados reais captados de motoristas online), configuração do veículo com cálculo do melhor combustível, e análise semanal dos 7 dias com indicadores de performance por dia.",
        imagem: "/logo-motorista-comfundo.png",
        link: "https://github.com/n2ilva/MotoristaInteligente",
        tecnologias: ["Kotlin", "Firebase Auth", "Firebase Realtime DB", "Google OAuth"]
    }
];
