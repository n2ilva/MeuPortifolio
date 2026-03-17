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
                    Analista de infraestrutura de TI com <strong>7 anos de experiência em redes e administração de ambientes corporativos</strong>,
                    com atuação em configuração e testes de equipamentos Cisco L2/L3, Fortinet, MikroTik, Ubiquiti e telefonia IP,
                    além de administração de servidores Windows e Linux, experiência prática com Microsoft Azure e Microsoft 365,
                    ampla vivência em virtualização com VMware e Hyper-V e atuação orientada por boas práticas de ITIL.
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
    infraestrutura: "7 anos",
  desenvolvimento: "1 ano",
  status: "Disponível"
};`}
                    </pre>
                </div>
            </div>
        </section>
    );
}
