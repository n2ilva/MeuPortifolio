"use client";
import PageContainer from "./PageContainer";
import "./infraestrutura.css";

interface InfraItem {
    nome: string;
    destaque?: boolean;
}

interface InfraCategoria {
    titulo: string;
    icone: string;
    cor: string;
    itens: InfraItem[];
}

const infraCategorias: InfraCategoria[] = [
    {
        titulo: "Infraestrutura & Redes",
        icone: "bi-hdd-network-fill",
        cor: "#6366f1",
        itens: [
            { nome: "Cisco (L2/L3)", destaque: true },
            { nome: "Dell", destaque: true },
            { nome: "SD-WAN", destaque: true },
            { nome: "VLAN", destaque: true },
            { nome: "DHCP", destaque: true },
            { nome: "DNS", destaque: true },
            { nome: "VPN IPsec", destaque: true },
            { nome: "MPLS", destaque: true },
            { nome: "BGP", destaque: true },
            { nome: "OSPF", destaque: true },
            { nome: "Voz IP", destaque: true }
        ]
    },
    {
        titulo: "Servidores & Virtualização",
        icone: "bi-server",
        cor: "#8b5cf6",
        itens: [
            { nome: "Windows Server", destaque: true },
            { nome: "Unix/Linux", destaque: true },
            { nome: "Active Directory", destaque: true },
            { nome: "Azure AD", destaque: true },
            { nome: "GPO", destaque: true },
            { nome: "VMware", destaque: true },
            { nome: "Hyper-V", destaque: true }
        ]
    },
    {
        titulo: "Segurança & Monitoramento",
        icone: "bi-shield-lock-fill",
        cor: "#ec4899",
        itens: [
            { nome: "Firewall (PFsense)", destaque: true },
            { nome: "Firewall (Fortigate)", destaque: true },
            { nome: "SolarWinds", destaque: true },
            { nome: "Zabbix", destaque: true }
        ]
    },
    {
        titulo: "Cloud & Banco de Dados",
        icone: "bi-cloud-fill",
        cor: "#0ea5e9",
        itens: [
            { nome: "AWS" },
            { nome: "Azure", destaque: true },
            { nome: "GCP" },
            { nome: "MySQL" },
            { nome: "Oracle" }
        ]
    },
    {
        titulo: "Gestão & Automação",
        icone: "bi-gear-fill",
        cor: "#22c55e",
        itens: [
            { nome: "BMC Remedy", destaque: true },
            { nome: "ServiceNow" },
            { nome: "Jira" },
            { nome: "Scripts" },
            { nome: "ITIL", destaque: true },
            { nome: "COBIT", destaque: true }
        ]
    }
];

export default function Infraestrutura() {
    return (
        <PageContainer title="Infraestrutura de TI">
            <p className="intro-text">
                Com <strong>6 anos de experiência</strong> em infraestrutura de TI, atuei em diversos projetos e empresas, 
                desenvolvendo habilidades sólidas nas seguintes áreas:
            </p>

            <div className="infra-grid">
                {infraCategorias.map((categoria, index) => (
                    <div 
                        key={index} 
                        className="infra-card"
                        style={{ "--card-color": categoria.cor } as React.CSSProperties}
                    >
                        <div className="infra-card-header">
                            <div className="infra-icon">
                                <i className={`bi ${categoria.icone}`}></i>
                            </div>
                            <h3 className="infra-titulo">{categoria.titulo}</h3>
                        </div>
                        <div className="infra-itens">
                            {categoria.itens.map((item, idx) => (
                                <span 
                                    key={idx} 
                                    className={`infra-item ${item.destaque ? 'destaque' : ''}`}
                                >
                                    {item.destaque && <i className="bi bi-star-fill"></i>}
                                    {item.nome}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <section className="formacao-section">
                <h2 className="section-subtitle">
                    <i className="bi bi-book-fill"></i>
                    Formação Acadêmica
                </h2>
                
                <div className="formacao-grid">
                    <div className="formacao-card">
                        <div className="formacao-icon">
                            <i className="bi bi-mortarboard-fill"></i>
                        </div>
                        <div className="formacao-info">
                            <h4>Análise e Desenvolvimento de Sistemas</h4>
                            <span className="formacao-status em-andamento">Em Andamento</span>
                            <span className="formacao-periodo">2025 - Presente</span>
                            <span className="formacao-instituicao">Estácio de Sá</span>
                        </div>
                    </div>
                    <div className="formacao-card">
                        <div className="formacao-icon">
                            <i className="bi bi-hdd-network-fill"></i>
                        </div>
                        <div className="formacao-info">
                            <h4>Redes de Computadores</h4>
                            <span className="formacao-status concluido">Concluído</span>
                            <span className="formacao-periodo">2023 - 2025</span>
                            <span className="formacao-instituicao">Uninove</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cursos-section">
                <h2 className="section-subtitle">
                    <i className="bi bi-patch-check-fill"></i>
                    Cursos & Certificações
                </h2>
                
                <div className="cursos-grid">
                    <div className="curso-card">
                        <div className="curso-icon">
                            <i className="bi bi-cloud-fill" style={{ color: '#FF9900' }}></i>
                        </div>
                        <div className="curso-info">
                            <h4>Amazon AWS Certified Cloud</h4>
                            <span className="curso-duracao">80h - 2025</span>
                            <span className="curso-plataforma">Udemy</span>
                        </div>
                    </div>
                    <div className="curso-card">
                        <div className="curso-icon">
                            <i className="bi bi-microsoft" style={{ color: '#0078D4' }}></i>
                        </div>
                        <div className="curso-info">
                            <h4>Microsoft AZ-900</h4>
                            <span className="curso-duracao">5h - 2024</span>
                            <span className="curso-plataforma">Udemy</span>
                        </div>
                    </div>
                    <div className="curso-card">
                        <div className="curso-icon">
                            <i className="bi bi-google" style={{ color: '#4285F4' }}></i>
                        </div>
                        <div className="curso-info">
                            <h4>Google Associate Cloud Engineer</h4>
                            <span className="curso-duracao">9h - 2024</span>
                            <span className="curso-plataforma">Udemy</span>
                        </div>
                    </div>
                    <div className="curso-card">
                        <div className="curso-icon">
                            <i className="bi bi-shield-lock-fill" style={{ color: '#EE3124' }}></i>
                        </div>
                        <div className="curso-info">
                            <h4>Fortigate Firewall NSE4</h4>
                            <span className="curso-duracao">8h - 2024</span>
                            <span className="curso-plataforma">Udemy</span>
                        </div>
                    </div>
                    <div className="curso-card">
                        <div className="curso-icon">
                            <i className="bi bi-hdd-network-fill" style={{ color: '#1BA0D7' }}></i>
                        </div>
                        <div className="curso-info">
                            <h4>CCNA 200-301</h4>
                            <span className="curso-duracao">80h - 2024</span>
                            <span className="curso-plataforma">Udemy</span>
                        </div>
                    </div>
                </div>
            </section>
        </PageContainer>
    );
}
