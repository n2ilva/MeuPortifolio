"use client";
import { useEffect, useState } from "react";

// Importar os componentes de cada página
import Home from "../../components/home";
import Linguagens from "../../components/linguagens";
import Agenda from "../../components/agenda";
import Portifolio from "../../components/portifolio";
import Profsara from "../../components/profsara";
import Contato from "../../components/contato";

// Tipos das páginas disponíveis
type PageType = "home" | "linguagens" | "agenda" | "portifolio" | "profsara" | "contato";

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
            case "agenda":
                return <Agenda />;
            case "portifolio":
                return <Portifolio />;
            case "profsara":
                return <Profsara />;
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
        <div className="container-fluid">
            <div className="row flex-nowrap">
                {/* Sidebar / Menu Lateral */}
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a
                            href="/"
                            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                            onClick={(e) => handleNavigation("home", e)}
                        >
                            <span className="fs-5 d-none d-sm-inline">Natanael Silva</span>
                        </a>
                        <ul
                            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu"
                        >
                            {/* Início */}
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className={`nav-link align-middle px-0 ${currentPage === "home" ? "active" : ""}`}
                                    onClick={(e) => handleNavigation("home", e)}
                                >
                                    <i className="fs-4 bi-house"></i>{" "}
                                    <span className="ms-1 d-none d-sm-inline">Início</span>
                                </a>
                            </li>

                            {/* Linguagens */}
                            <li>
                                <a
                                    href="#"
                                    className={`nav-link px-0 align-middle ${currentPage === "linguagens" ? "active" : ""}`}
                                    onClick={(e) => handleNavigation("linguagens", e)}
                                >
                                    <i className="fs-4 bi-code-slash"></i>{" "}
                                    <span className="ms-1 d-none d-sm-inline">Linguagens</span>
                                </a>
                            </li>

                            {/* Projetos com submenu */}
                            <li>
                                <a
                                    href="#submenu3"
                                    data-bs-toggle="collapse"
                                    className="nav-link px-0 align-middle"
                                >
                                    <i className="fs-4 bi-grid"></i>{" "}
                                    <span className="ms-1 d-none d-sm-inline">Projetos</span>{" "}
                                </a>
                                <ul
                                    className="collapse nav flex-column ms-1"
                                    id="submenu3"
                                    data-bs-parent="#menu"
                                >
                                    <li className="w-100">
                                        <a
                                            href="#"
                                            className={`nav-link px-0 ${currentPage === "agenda" ? "active" : ""}`}
                                            onClick={(e) => handleNavigation("agenda", e)}
                                        >
                                            <span className="d-none d-sm-inline">Agenda Familiar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className={`nav-link px-0 ${currentPage === "portifolio" ? "active" : ""}`}
                                            onClick={(e) => handleNavigation("portifolio", e)}
                                        >
                                            <span className="d-none d-sm-inline">Portifólio Maker</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className={`nav-link px-0 ${currentPage === "profsara" ? "active" : ""}`}
                                            onClick={(e) => handleNavigation("profsara", e)}
                                        >
                                            <span className="d-none d-sm-inline">Site Professora Sara Ramos</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Contato */}
                            <li>
                                <a
                                    href="#"
                                    className={`nav-link px-0 align-middle ${currentPage === "contato" ? "active" : ""}`}
                                    onClick={(e) => handleNavigation("contato", e)}
                                >
                                    <i className="fs-4 bi-people"></i>{" "}
                                    <span className="ms-1 d-none d-sm-inline">Contato</span>
                                </a>
                            </li>
                        </ul>
                        <hr />
                    </div>
                </div>

                {/* Área de Conteúdo Principal */}
                <div className="col py-3">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
