"use client";
import PageContainer from "../PageContainer";
import InfraTecnologias from "./InfraTecnologias";
import FormacaoAcademica from "./FormacaoAcademica";
import CursosCertificacoes from "./CursosCertificacoes";
import "./infraestrutura.css";

export default function Infraestrutura() {
    return (
        <PageContainer title="Infraestrutura de TI">
            <InfraTecnologias />
            <FormacaoAcademica />
            <CursosCertificacoes />
        </PageContainer>
    );
}
