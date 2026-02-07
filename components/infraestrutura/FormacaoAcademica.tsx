"use client";

export default function FormacaoAcademica() {
    return (
        <section className="formacao-section">
            <h2 className="section-subtitle">
                <i className="bi bi-book-fill"></i>
                Formação Acadêmica
            </h2>
            
            <div className="formacao-grid">
                <div className="formacao-card">
                    <div className="formacao-icon">
                        <i className="bi bi-mortarboard-fill"></i>
                    </div>
                    <div className="formacao-info">
                        <h4>Análise e Desenvolvimento de Sistemas</h4>
                        <span className="formacao-status em-andamento">Em Andamento</span>
                        <span className="formacao-periodo">2025 - Presente</span>
                        <span className="formacao-instituicao">Estácio de Sá</span>
                    </div>
                </div>
                <div className="formacao-card">
                    <div className="formacao-icon">
                        <i className="bi bi-hdd-network-fill"></i>
                    </div>
                    <div className="formacao-info">
                        <h4>Redes de Computadores</h4>
                        <span className="formacao-status concluido">Concluído</span>
                        <span className="formacao-periodo">2023 - 2025</span>
                        <span className="formacao-instituicao">Uninove</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
