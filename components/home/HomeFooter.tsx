"use client";

import { experience } from "../../config/site.config";

export default function HomeFooter() {
    return (
        <section className="stats-section">
            <div className="stat-card">
                <span className="stat-number">{experience.totalYears}+</span>
                <span className="stat-label">Anos em TI</span>
            </div>
            <div className="stat-card">
                <span className="stat-number">{experience.infraYears}</span>
                <span className="stat-label">Anos Infraestrutura</span>
            </div>
            <div className="stat-card">
                <span className="stat-number">{experience.devYears}</span>
                <span className="stat-label">Ano Desenvolvimento</span>
            </div>
            <div className="stat-card">
                <span className="stat-number">4</span>
                <span className="stat-label">Projetos Publicados</span>
            </div>
        </section>
    );
}
