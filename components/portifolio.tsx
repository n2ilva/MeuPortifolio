"use client";
import { useState } from "react";
import Image from "next/image";
import PageContainer from "./PageContainer";
import "./portifolio.css";

// Importações centralizadas
import { getImagePath } from "../utils/helpers";
import { projetos } from "../data/projects";

export default function Portifolio() {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const handleCardClick = (e: React.MouseEvent, projetoId: string) => {
        // Verifica se é mobile (tela <= 768px)
        if (typeof window !== 'undefined' && window.innerWidth <= 768) {
            // Se o projeto não está selecionado, previne o link e mostra a descrição
            if (selectedProject !== projetoId) {
                e.preventDefault();
                setSelectedProject(projetoId);
            }
            // Se já está selecionado, permite o clique no link
        }
    };

    const handleMouseEnter = (projetoId: string) => {
        if (typeof window !== 'undefined' && window.innerWidth > 768) {
            setSelectedProject(projetoId);
        }
    };

    const handleMouseLeave = () => {
        if (typeof window !== 'undefined' && window.innerWidth > 768) {
            setSelectedProject(null);
        }
    };

    return (
        <PageContainer title="Meus Projetos">
            <p className="intro-text">
                Projetos que desenvolvi com dedicação e paixão.
                <span className="mobile-hint"> Toque para ver detalhes, toque novamente para visitar.</span>
            </p>

            <div className="projetos-grid">
                {projetos.map((projeto) => (
                    <article
                        key={projeto.id}
                        className={`projeto-card ${projeto.destaque ? 'destaque' : ''} ${selectedProject === projeto.id ? 'expanded' : ''}`}
                        onMouseEnter={() => handleMouseEnter(projeto.id)}
                        onMouseLeave={handleMouseLeave}
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
                            onClick={(e) => handleCardClick(e, projeto.id)}
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
                                        <i className="bi bi-box-arrow-up-right"></i>
                                        Visitar Projeto
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

                                {/* Botão visitar para mobile quando expandido */}
                                <div className="mobile-visit-btn">
                                    <span>
                                        <i className="bi bi-box-arrow-up-right"></i>
                                        Toque novamente para visitar
                                    </span>
                                </div>
                            </div>
                        </a>
                    </article>
                ))}
            </div>
        </PageContainer>
    );
}
