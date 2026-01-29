"use client";
import { useEffect, useState } from "react";
import "./home.css";

// Importações centralizadas
import { experience, roles, experiencias } from "../config/site.config";
import { techStackHome } from "../data/technologies";

export default function Home() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

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
                        agora focado nos estudos de desenvolvimento web e mobile para me tornar um 
                        <strong> desenvolvedor Full Stack</strong> completo.
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
                    {experiencias.map((exp, index) => (
                        <div 
                            key={index} 
                            className="experience-card"
                            style={{ "--card-color": exp.cor } as React.CSSProperties}
                        >
                            <div className="exp-icon">
                                <i className={`bi ${exp.icone}`}></i>
                            </div>
                            <div className="exp-content">
                                <h3 className="exp-area">{exp.area}</h3>
                                <span className="exp-tempo">{exp.tempo}</span>
                                <p className="exp-descricao">{exp.descricao}</p>
                                <div className="exp-tags">
                                    {exp.tags.map((tag) => (
                                        <span key={tag} className="exp-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="tech-section" id="tecnologias">
                <h2 className="section-title">
                    <i className="bi bi-cpu-fill"></i>
                    Tecnologias
                </h2>

                <div className="tech-carousel">
                    {techStackHome.map((tech, index) => (
                        <div 
                            key={index} 
                            className="tech-item"
                            style={{ "--tech-color": tech.cor } as React.CSSProperties}
                        >
                            <i className={tech.icone} style={{ color: tech.cor }}></i>
                            <span>{tech.nome}</span>
                        </div>
                    ))}
                </div>

                <div className="infra-badge">
                    <i className="bi bi-shield-check"></i>
                    <span>Infraestrutura: <strong>Cisco</strong> • <strong>Fortigate</strong> • <strong>Dell</strong></span>
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
                    <span className="stat-number">3</span>
                    <span className="stat-label">Projetos Publicados</span>
                </div>
            </section>
        </div>
    );
}
