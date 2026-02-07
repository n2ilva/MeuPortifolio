"use client";
import { useState } from "react";

import { tecnologias, categorias, Tecnologia } from "../../data/technologies";

export default function DevLinguagens() {
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);
    const [clickedTech, setClickedTech] = useState<string | null>(null);

    const getTecnologiasPorCategoria = (categoria: Tecnologia["categoria"]) => {
        return tecnologias.filter(tech => tech.categoria === categoria);
    };

    const handleTechClick = (techNome: string) => {
        setClickedTech(clickedTech === techNome ? null : techNome);
    };

    const isTechActive = (techNome: string) => {
        return hoveredTech === techNome || clickedTech === techNome;
    };

    return (
        <section className="linguagens-section">
            <h2 className="section-subtitle">
                <i className="bi bi-code-slash"></i>
                Linguagens & Tecnologias
            </h2>

            {(Object.keys(categorias) as Array<keyof typeof categorias>).map((categoriaKey) => (
                <div key={categoriaKey} className="categoria-section">
                    <h3 className="categoria-titulo">
                        <i className={`bi ${categorias[categoriaKey].icone} me-2`}></i>
                        {categorias[categoriaKey].titulo}
                    </h3>
                    
                    <div className="tech-grid">
                        {getTecnologiasPorCategoria(categoriaKey).map((tech) => (
                            <div
                                key={tech.nome}
                                className={`tech-card ${isTechActive(tech.nome) ? 'active' : ''}`}
                                onClick={() => handleTechClick(tech.nome)}
                                onMouseEnter={() => setHoveredTech(tech.nome)}
                                onMouseLeave={() => setHoveredTech(null)}
                                style={{ '--tech-color': tech.cor } as React.CSSProperties}
                            >
                                <div className="tech-icon-wrapper">
                                    <i className={`${tech.icone} tech-icon`} style={{ color: tech.cor }}></i>
                                </div>
                                <h4 className="tech-nome">{tech.nome}</h4>
                                
                                <div className={`tech-tooltip ${isTechActive(tech.nome) ? 'visible' : ''}`}>
                                    <div className="tooltip-content">
                                        <div className="tooltip-header">
                                            <i className={`${tech.icone}`} style={{ color: tech.cor }}></i>
                                            <span>{tech.nome}</span>
                                        </div>
                                        <p>{tech.descricao}</p>
                                    </div>
                                </div>

                                <div className={`tech-description-mobile ${clickedTech === tech.nome ? 'visible' : ''}`}>
                                    <p>{tech.descricao}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
