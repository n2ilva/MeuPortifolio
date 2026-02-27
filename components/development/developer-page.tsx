"use client";
import PageContainer from "../PageContainer";
import SkillsSection from "./skills-section";
import ProjectsSection from "./projects-section";
import "./developer-page.css";
import "./skills-section.css";

export default function DeveloperPage() {
    return (
        <PageContainer title="Desenvolvedor">
            <p className="intro-text">
                Tecnologias que estou estudando há <strong>1 ano</strong> e projetos desenvolvidos com dedicação.
            </p>

            <SkillsSection />
            <ProjectsSection />
        </PageContainer>
    );
}
