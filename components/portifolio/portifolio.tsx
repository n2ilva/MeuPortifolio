"use client";
import PageContainer from "../PageContainer";
import DevLinguagens from "./DevLinguagens";
import DevProjetos from "./DevProjetos";
import "./portifolio.css";
import "./linguagens.css";

export default function Portifolio() {
    return (
        <PageContainer title="Desenvolvedor">
            <p className="intro-text">
                Tecnologias que estou estudando há <strong>1 ano</strong> e projetos desenvolvidos com dedicação.
            </p>

            <DevLinguagens />
            <DevProjetos />
        </PageContainer>
    );
}
