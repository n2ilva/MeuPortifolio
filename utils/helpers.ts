/**
 * Helper para corrigir caminho de imagens no GitHub Pages
 * Adiciona o basePath em produção
 */
export const getImagePath = (path: string): string => {
    const basePath = process.env.NODE_ENV === 'production' ? '/MeuPortifolio' : '';
    return `${basePath}${path}`;
};
