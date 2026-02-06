"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Tipos das páginas disponíveis
export type PageType = "home" | "linguagens" | "projetos" | "contato" | "infraestrutura";

interface NavigationContextType {
    currentPage: PageType;
    navigateTo: (page: PageType) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [currentPage, setCurrentPage] = useState<PageType>("home");

    const navigateTo = (page: PageType) => {
        setCurrentPage(page);
    };

    return (
        <NavigationContext.Provider value={{ currentPage, navigateTo }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error("useNavigation must be used within NavigationProvider");
    }
    return context;
}
