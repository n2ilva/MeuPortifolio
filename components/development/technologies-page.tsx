"use client";
import { useState } from "react";
import PageContainer from "../PageContainer";
import "./technologies-page.css";

// Importações centralizadas
import { tecnologias, categorias, Tecnologia } from "../../data/technologies";

export default function TecnologiasPage() {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);
    const [clickedTech, setClickedTech] = useState<string | null>(null);

    const getTecnologiasPorCategoria = (categoria: Tecnologia["categoria"]) => {
        return tecnologias.filter(tech => tech.categoria === categoria);
    };

    const handleTechClick = (techNome: string) => {
        // Toggle para mobile: se já está clicado, desclica; senão, clica
        setClickedTech(clickedTech === techNome ? null : techNome);
    };

    // Verifica se a tech está ativa (por hover OU por clique)
    const isTechActive = (techNome: string) => {
        return hoveredTech === techNome || clickedTech === techNome;
    };

    const getTechSlug = (techNome: string) => {
        return techNome
            .toLowerCase()
            .replace(/\./g, "")
            .replace(/\+/g, "plus")
            .replace(/\s+/g, "-");
    };

    return (
        <PageContainer title="Linguagens & Tecnologias">
            <p className="intro-text">
                Tecnologias que estou estudando há <strong>1 ano</strong> e possuo experiência prática em desenvolvimento.
            </p>

            {(Object.keys(categorias) as Array<keyof typeof categorias>).map((categoriaKey) => (
                <div key={categoriaKey} className="categoria-section">
                    <h2 className="categoria-titulo">
                        <i className={`bi ${categorias[categoriaKey].icone} me-2`}></i>
                        {categorias[categoriaKey].titulo}
                    </h2>
                    
                    <div className="tech-grid">
                        {getTecnologiasPorCategoria(categoriaKey).map((tech) => (
                            <div
                                key={tech.nome}
                                className={`tech-card tech-color-${getTechSlug(tech.nome)} ${isTechActive(tech.nome) ? 'active' : ''}`}
                                onClick={() => handleTechClick(tech.nome)}
                                onMouseEnter={() => setHoveredTech(tech.nome)}
                                onMouseLeave={() => setHoveredTech(null)}
                            >
                                <div className="tech-icon-wrapper">
                                    <i className={`${tech.icone} tech-icon tech-icon-colored ${tech.icone.includes("wordmark") ? "tech-icon-wordmark" : ""}`}></i>
                                </div>
                                <h3 className="tech-nome">{tech.nome}</h3>
                                
                                {/* Tooltip para desktop (aparece acima) */}
                                <div className={`tech-tooltip ${isTechActive(tech.nome) ? 'visible' : ''}`}>
                                    <div className="tooltip-content">
                                        <div className="tooltip-header">
                                            <i className={`${tech.icone} tooltip-icon-colored ${tech.icone.includes("wordmark") ? "tooltip-icon-wordmark" : ""}`}></i>
                                            <span>{tech.nome}</span>
                                        </div>
                                        <p>{tech.descricao}</p>
                                    </div>
                                </div>

                                {/* Descrição inline para mobile (aparece dentro do card) */}
                                <div className={`tech-description-mobile ${clickedTech === tech.nome ? 'visible' : ''}`}>
                                    <p>{tech.descricao}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </PageContainer>
    );
}
