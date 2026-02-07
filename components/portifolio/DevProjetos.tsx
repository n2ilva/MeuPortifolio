"use client";
import Image from "next/image";

import { getImagePath } from "../../utils/helpers";
import { projetos } from "../../data/projects";

export default function DevProjetos() {
    return (
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
    );
}
