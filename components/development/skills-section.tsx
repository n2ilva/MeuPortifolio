"use client";
import { useState } from "react";

import { tecnologias, categorias, Tecnologia } from "../../data/technologies";
import TechCategorySection from "./TechCategorySection";

export default function SkillsSection() {
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
        <section className="linguagens-section">
            <h2 className="section-subtitle">
                <i className="bi bi-code-slash"></i>
                Linguagens & Tecnologias
            </h2>

            {(Object.keys(categorias) as Array<keyof typeof categorias>).map((categoriaKey) => (
                <TechCategorySection
                    key={categoriaKey}
                    titulo={categorias[categoriaKey].titulo}
                    icone={categorias[categoriaKey].icone}
                    tecnologias={getTecnologiasPorCategoria(categoriaKey)}
                    isTechActive={isTechActive}
                    isDescriptionVisible={(techNome) => clickedTech === techNome}
                    onTechClick={handleTechClick}
                    onTechMouseEnter={setHoveredTech}
                    onTechMouseLeave={() => setHoveredTech(null)}
                />
            ))}
        </section>
    );
}
