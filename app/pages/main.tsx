"use client";
import { useEffect } from "react";
import "./main.css";

// Configurações
import { menuItems, MenuItem } from "../../config/site.config";

// Componentes reutilizáveis
import ProfileCard from "../../components/ProfileCard";
import NavMenuItem from "../../components/NavMenuItem";

// Componentes de página
import Home from "../../components/home/home";
import TechnologiesPage from "../../components/development/technologies-page";
import DeveloperPage from "../../components/development/developer-page";
import ContactPage from "../../components/contact/contact";
import InfrastructurePage from "../../components/infrastructure/infrastructure";

// Contexto de navegação
import { NavigationProvider, useNavigation, PageType } from "../../context/NavigationContext";

// Mapeamento de páginas para componentes
const pageComponents: Record<PageType, React.ComponentType> = {
    home: Home,
    linguagens: TechnologiesPage,
    projetos: DeveloperPage,
    contato: ContactPage,
    infraestrutura: InfrastructurePage
};

function MainContent() {
    const { currentPage, navigateTo } = useNavigation();

    useEffect(() => {
        // Import bootstrap JS only on the client side
        const loadBootstrap = async () => {
            await import("bootstrap/dist/js/bootstrap.bundle.min.js");
        };
        loadBootstrap();
    }, []);

    // Função para renderizar o conteúdo baseado na página atual
    const renderContent = () => {
        const PageComponent = pageComponents[currentPage] || pageComponents.home;
        return <PageComponent />;
    };

    // Função para navegar entre páginas
    const handleNavigation = (page: PageType, e: React.MouseEvent) => {
        e.preventDefault();
        navigateTo(page);
    };

    return (
        <div className="main-wrapper">
            {/* Sidebar Desktop */}
            <div className="sidebar sidebar-desktop">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white sidebar-content">
                    {/* Perfil / Logo */}
                    <ProfileCard onClick={(e) => handleNavigation("home", e)} />

                    {/* Menu de Navegação */}
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 w-100" id="menu">
                        {menuItems.map((item) => (
                            <NavMenuItem
                                key={item.id}
                                item={item}
                                isActive={currentPage === item.page}
                                onClick={handleNavigation}
                            />
                        ))}
                    </ul>

                    {/* Botão Download Currículo (Desktop) */}
                    <div className="mt-auto w-100 pt-3 pb-4 download-desktop">
                        <a
                            href="https://drive.google.com/uc?export=download&id=1uth6Zmo4UthgDdlgoSnOHpcyLjBGPXQ9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 download-btn"
                        >
                            <i className="bi bi-download"></i>
                            <span className="d-none d-sm-inline">Baixar Currículo</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Área de Conteúdo Principal */}
            <div className="content-area">
                <div className="content-scroll">
                    <div className="rounded-4 p-4 content-card">
                        {renderContent()}
                    </div>
                </div>
            </div>

            {/* Menu Mobile (Rodapé) */}
            <div className="mobile-nav">
                <ul className="nav" id="mobile-menu">
                    {menuItems.map((item) => (
                        <NavMenuItem
                            key={item.id}
                            item={item}
                            isActive={currentPage === item.page}
                            onClick={handleNavigation}
                        />
                    ))}
                    {/* Botão Download para Mobile */}
                    <li className="nav-item nav-menu-item">
                        <a
                            href="https://drive.google.com/uc?export=download&id=1uth6Zmo4UthgDdlgoSnOHpcyLjBGPXQ9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link d-flex align-items-center rounded-3 px-3 py-2 nav-menu-link download-nav-link"
                        >
                            <i className="bi bi-file-earmark-arrow-down fs-5"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default function Main() {
    return (
        <NavigationProvider>
            <MainContent />
        </NavigationProvider>
    );
}
