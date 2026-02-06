"use client";

import { useEffect, useState } from "react";
import "./home.css";

// Importações centralizadas
import { experience, roles, experiencias } from "../config/site.config";
import { useNavigation, PageType } from "../context/NavigationContext";

export default function Home() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const { navigateTo } = useNavigation();

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentRole.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="greeting">
                        <span className="wave">👋</span>
                        <span>Olá, eu sou</span>
                    </div>

                    <h1 className="hero-name">
                        Natanael Santos
                        <span className="name-highlight">Da Silva Ramos</span>
                    </h1>

                    <div className="hero-role">
                        <span className="role-prefix">&lt;</span>
                        <span className="role-text">{displayText}</span>
                        <span className="cursor-blink">|</span>
                        <span className="role-suffix">/&gt;</span>
                    </div>

                    <p className="hero-description">
                        Experiência sólida em <strong>infraestrutura de TI com 6 anos de atuação</strong>, 
                        agora focado nos estudos de desenvolvimento web e mobile.
                    </p>
                </div>

                <div className="hero-visual">
                    <div className="code-block">
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                            <span className="filename">developer.ts</span>
                        </div>
                        <pre className="code-content">
{`const developer = {
  nome: "Natanael Santos Da Silva Ramos",
  idade: "30 anos",
  cidade: "Goiânia-GO",
  infraestrutura: "6 anos",
  desenvolvimento: "1 ano",
  status: "Disponível"
};`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="experience-section" id="experiencia">
                <h2 className="section-title">
                    <i className="bi bi-briefcase-fill"></i>
                    Experiência Profissional
                </h2>

                <div className="experience-grid">
                    {experiencias.map((exp, index) => {
                        const isClickable = 'clicavel' in exp && exp.clicavel;
                        const pagina = 'pagina' in exp ? exp.pagina as PageType : undefined;
                        
                        return (
                            <div 
                                key={index} 
                                className={`experience-card ${isClickable ? 'clickable' : ''}`}
                                style={{ "--card-color": exp.cor } as React.CSSProperties}
                                onClick={isClickable && pagina ? () => navigateTo(pagina) : undefined}
                                role={isClickable ? "button" : undefined}
                                tabIndex={isClickable ? 0 : undefined}
                            >
                                <div className="exp-icon">
                                    <i className={`bi ${exp.icone}`}></i>
                                </div>
                                <div className="exp-content">
                                    <h3 className="exp-area">
                                        {exp.area}
                                        {isClickable && <i className="bi bi-arrow-right-circle ms-2"></i>}
                                    </h3>
                                    <span className="exp-tempo">{exp.tempo}</span>
                                    <p className="exp-descricao">{exp.descricao}</p>
                                    <div className="exp-tags">
                                        {exp.tags.map((tag) => (
                                            <span key={tag} className="exp-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>



            {/* Stats Section */}
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
        </div>
    );
}
