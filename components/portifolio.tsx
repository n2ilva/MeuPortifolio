"use client";
import { useState } from "react";
import Image from "next/image";
import PageContainer from "./PageContainer";
import "./portifolio.css";
import "./linguagens.css";

// Importações centralizadas
import { getImagePath } from "../utils/helpers";
import { projetos } from "../data/projects";
import { tecnologias, categorias, Tecnologia } from "../data/technologies";

export default function Portifolio() {
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
        <PageContainer title="Desenvolvedor">
            <p className="intro-text">
                Tecnologias que estou estudando há <strong>1 ano</strong> e projetos desenvolvidos com dedicação.
            </p>

            {/* Seção de Linguagens */}
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

            {/* Seção de Projetos */}
            <section className="projetos-section">
                <h2 className="section-subtitle">
                    <i className="bi bi-folder-fill"></i>
                    Meus Projetos
                </h2>
            <div className="projetos-grid">
                {projetos.map((projeto) => (
                    <article
                        key={projeto.id}
                        className={`projeto-card ${projeto.destaque ? 'destaque' : ''}`}
                    >
                        {projeto.destaque && (
                            <div className="destaque-badge">
                                <i className="bi bi-star-fill"></i>
                                <span>Destaque</span>
                            </div>
                        )}

                        <a
                            href={projeto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projeto-link"
                        >
                            <div className="projeto-imagem-wrapper">
                                <Image
                                    src={getImagePath(projeto.imagem)}
                                    alt={`Preview do projeto ${projeto.nome}`}
                                    className="projeto-imagem"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="projeto-overlay">
                                    <span className="ver-projeto">
                                        <i className={projeto.id === "controle-financeiro" ? "bi bi-download" : "bi bi-box-arrow-up-right"}></i>
                                        {projeto.id === "controle-financeiro" ? "Baixar APK" : "Visitar Projeto"}
                                    </span>
                                </div>
                            </div>

                            <div className="projeto-conteudo">
                                <h3 className="projeto-nome">{projeto.nome}</h3>
                                <p className="projeto-descricao">{projeto.descricao}</p>

                                <div className="projeto-tecnologias">
                                    {projeto.tecnologias.map((tech) => (
                                        <span key={tech} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
            </section>
        </PageContainer>
    );
}
