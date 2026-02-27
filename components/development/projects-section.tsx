"use client";
import { projetos } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    return (
        <section className="projetos-section">
            <h2 className="section-subtitle">
                <i className="bi bi-folder-fill"></i>
                Meus Projetos
            </h2>
            <div className="projetos-grid">
                {projetos.map((projeto) => (
                    <ProjectCard key={projeto.id} projeto={projeto} />
                ))}
            </div>
        </section>
    );
}
