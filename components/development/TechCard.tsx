import { Tecnologia } from "../../data/technologies";

interface TechCardProps {
    tech: Tecnologia;
    isActive: boolean;
    isDescriptionVisible: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function TechCard({
    tech,
    isActive,
    isDescriptionVisible,
    onClick,
    onMouseEnter,
    onMouseLeave
}: TechCardProps) {
    const isWordmarkIcon = tech.icone.includes("wordmark");
    const techSlug = tech.nome
        .toLowerCase()
        .replace(/\./g, "")
        .replace(/\+/g, "plus")
        .replace(/\s+/g, "-");

    return (
        <div
            className={`tech-card tech-color-${techSlug} ${isActive ? "active" : ""}`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="tech-icon-wrapper">
                <i
                    className={`${tech.icone} tech-icon tech-icon-colored ${isWordmarkIcon ? "tech-icon-wordmark" : ""}`}
                ></i>
            </div>

            <h4 className="tech-nome">{tech.nome}</h4>

            <div className={`tech-tooltip ${isActive ? "visible" : ""}`}>
                <div className="tooltip-content">
                    <div className="tooltip-header">
                        <i
                            className={`${tech.icone} tooltip-icon-colored ${isWordmarkIcon ? "tooltip-icon-wordmark" : ""}`}
                        ></i>
                        <span>{tech.nome}</span>
                    </div>
                    <p>{tech.descricao}</p>
                </div>
            </div>

            <div className={`tech-description-mobile ${isDescriptionVisible ? "visible" : ""}`}>
                <p>{tech.descricao}</p>
            </div>
        </div>
    );
}
