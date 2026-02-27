import Image from "next/image";

import { Projeto } from "../../data/projects";
import { getImagePath } from "../../utils/helpers";

interface ProjectCardProps {
    projeto: Projeto;
}

export default function ProjectCard({ projeto }: ProjectCardProps) {
    const isDownloadProject = projeto.id === "controle-financeiro";

    return (
        <article className={`projeto-card ${projeto.destaque ? "destaque" : ""}`}>
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
                    />
                    <div className="projeto-overlay">
                        <span className="ver-projeto">
                            <i className={isDownloadProject ? "bi bi-download" : "bi bi-box-arrow-up-right"}></i>
                            {isDownloadProject ? "Baixar APK" : "Visitar Projeto"}
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
    );
}
