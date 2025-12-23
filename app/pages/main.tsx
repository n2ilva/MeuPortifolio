"use client";
import { useEffect, useState } from "react";
import "./main.css";

// Importar os componentes de cada página
import Home from "../../components/home";
import Linguagens from "../../components/linguagens";
import Portifolio from "../../components/portifolio";
import Contato from "../../components/contato";

// Tipos das páginas disponíveis
type PageType = "home" | "linguagens" | "projetos" | "contato";

export default function Main() {
    const [currentPage, setCurrentPage] = useState<PageType>("home");

    useEffect(() => {
        // Import bootstrap JS only on the client side
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    // Função para renderizar o conteúdo baseado na página atual
    const renderContent = () => {
        switch (currentPage) {
            case "home":
                return <Home />;
            case "linguagens":
                return <Linguagens />;
            case "projetos":
                return <Portifolio />;
            case "contato":
                return <Contato />;
            default:
                return <Home />;
        }
    };

    // Função para navegar entre páginas
    const handleNavigation = (page: PageType, e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentPage(page);
    };

    return (
        <div className="container-fluid p-0 main-container">
            <div className="row g-0 flex-nowrap">
                {/* Sidebar / Menu Lateral */}
                <div className="col-auto col-md-3 col-xl-2 px-0 sidebar">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white sidebar-content">
                        {/* Perfil / Logo */}
                        <a
                            href="/"
                            className="d-flex flex-column align-items-center align-items-sm-start pb-4 mb-3 w-100 text-white text-decoration-none profile-section"
                            onClick={(e) => handleNavigation("home", e)}
                        >
                            <div className="rounded-3 mb-3 d-flex align-items-center justify-content-center overflow-hidden profile-photo">
                                <img
                                    src="/photo.jpg"
                                    alt="Foto de perfil - Natanael Silva"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                            <span className="fs-5 fw-bold d-none d-sm-inline profile-name">
                                Natanael Silva
                            </span>
                            <small className="d-none d-sm-inline profile-subtitle">Desenvolvedor Full Stack</small>
                        </a>

                        {/* Menu de Navegação */}
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 w-100" id="menu">
                            {/* Início */}
                            <li className="nav-item mb-2 nav-menu-item">
                                <a
                                    href="#"
                                    className={`nav-link d-flex align-items-center rounded-3 px-3 py-2 nav-menu-link ${currentPage === "home" ? "active" : ""}`}
                                    onClick={(e) => handleNavigation("home", e)}
                                >
                                    <i className="bi bi-house-fill fs-5"></i>
                                    <span className="ms-2 d-none d-sm-inline">Início</span>
                                </a>
                            </li>

                            {/* Linguagens */}
                            <li className="nav-item mb-2 nav-menu-item">
                                <a
                                    href="#"
                                    className={`nav-link d-flex align-items-center rounded-3 px-3 py-2 nav-menu-link ${currentPage === "linguagens" ? "active" : ""}`}
                                    onClick={(e) => handleNavigation("linguagens", e)}
                                >
                                    <i className="bi bi-code-slash fs-5"></i>
                                    <span className="ms-2 d-none d-sm-inline">Linguagens</span>
                                </a>
                            </li>

                            {/* Projetos */}
                            <li className="nav-item mb-2 nav-menu-item">
                                <a
                                    href="#"
                                    className={`nav-link d-flex align-items-center rounded-3 px-3 py-2 nav-menu-link ${currentPage === "projetos" ? "active" : ""}`}
                                    onClick={(e) => handleNavigation("projetos", e)}
                                >
                                    <i className="bi bi-folder-fill fs-5"></i>
                                    <span className="ms-2 d-none d-sm-inline">Projetos</span>
                                </a>
                            </li>

                            {/* Contato */}
                            <li className="nav-item mb-2 nav-menu-item">
                                <a
                                    href="#"
                                    className={`nav-link d-flex align-items-center rounded-3 px-3 py-2 nav-menu-link ${currentPage === "contato" ? "active" : ""}`}
                                    onClick={(e) => handleNavigation("contato", e)}
                                >
                                    <i className="bi bi-envelope-fill fs-5"></i>
                                    <span className="ms-2 d-none d-sm-inline">Contato</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Área de Conteúdo Principal */}
                <div className="col py-4 px-4 content-area">
                    <div className="rounded-4 p-4 content-card">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}
