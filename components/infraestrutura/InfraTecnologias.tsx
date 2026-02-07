"use client";

interface InfraItem {
    nome: string;
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
            { nome: "Cisco (L2/L3)" },
            { nome: "Dell" },
            { nome: "SD-WAN" },
            { nome: "VLAN" },
            { nome: "DHCP" },
            { nome: "DNS" },
            { nome: "VPN IPsec" },
            { nome: "MPLS" },
            { nome: "BGP" },
            { nome: "OSPF" },
            { nome: "Voz IP" }
        ]
    },
    {
        titulo: "Servidores & Virtualização",
        icone: "bi-server",
        cor: "#8b5cf6",
        itens: [
            { nome: "Windows Server" },
            { nome: "Unix/Linux" },
            { nome: "Active Directory" },
            { nome: "Azure AD" },
            { nome: "GPO" },
            { nome: "VMware" },
            { nome: "Hyper-V" }
        ]
    },
    {
        titulo: "Segurança & Monitoramento",
        icone: "bi-shield-lock-fill",
        cor: "#ec4899",
        itens: [
            { nome: "Firewall (PFsense)" },
            { nome: "Firewall (Fortigate)" },
            { nome: "SolarWinds" },
            { nome: "Zabbix" }
        ]
    },
    {
        titulo: "Cloud & Banco de Dados",
        icone: "bi-cloud-fill",
        cor: "#0ea5e9",
        itens: [
            { nome: "AWS" },
            { nome: "Azure" },
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
            { nome: "BMC Remedy" },
            { nome: "ServiceNow" },
            { nome: "Jira" },
            { nome: "Scripts" },
            { nome: "ITIL" },
            { nome: "COBIT" }
        ]
    }
];

export default function InfraTecnologias() {
    return (
        <>
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
                                    className="infra-item"
                                >
                                    {item.nome}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
