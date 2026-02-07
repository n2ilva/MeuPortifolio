"use client";

import { experiencias } from "../../config/site.config";
import { useNavigation, PageType } from "../../context/NavigationContext";

export default function HomeExperiencias() {
    const { navigateTo } = useNavigation();

    return (
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
    );
}
