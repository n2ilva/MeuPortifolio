import { Tecnologia } from "../../data/technologies";
import TechCard from "./TechCard";

interface TechCategorySectionProps {
    titulo: string;
    icone: string;
    tecnologias: Tecnologia[];
    isTechActive: (techNome: string) => boolean;
    isDescriptionVisible: (techNome: string) => boolean;
    onTechClick: (techNome: string) => void;
    onTechMouseEnter: (techNome: string) => void;
    onTechMouseLeave: () => void;
}

export default function TechCategorySection({
    titulo,
    icone,
    tecnologias,
    isTechActive,
    isDescriptionVisible,
    onTechClick,
    onTechMouseEnter,
    onTechMouseLeave
}: TechCategorySectionProps) {
    return (
        <div className="categoria-section">
            <h3 className="categoria-titulo">
                <i className={`bi ${icone} me-2`}></i>
                {titulo}
            </h3>

            <div className="tech-grid">
                {tecnologias.map((tech) => (
                    <TechCard
                        key={tech.nome}
                        tech={tech}
                        isActive={isTechActive(tech.nome)}
                        isDescriptionVisible={isDescriptionVisible(tech.nome)}
                        onClick={() => onTechClick(tech.nome)}
                        onMouseEnter={() => onTechMouseEnter(tech.nome)}
                        onMouseLeave={onTechMouseLeave}
                    />
                ))}
            </div>
        </div>
    );
}
