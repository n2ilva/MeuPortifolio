"use client";
import { useEffect, useState } from "react";

import { roles } from "../../config/site.config";

export default function HomeHeader() {
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
    );
}
