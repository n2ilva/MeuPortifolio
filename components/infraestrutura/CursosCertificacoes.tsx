"use client";

export default function CursosCertificacoes() {
    return (
        <section className="cursos-section">
            <h2 className="section-subtitle">
                <i className="bi bi-patch-check-fill"></i>
                Cursos & Certificações
            </h2>
            
            <div className="cursos-grid">
                <div className="curso-card">
                    <div className="curso-icon">
                        <i className="bi bi-cloud-fill" style={{ color: '#FF9900' }}></i>
                    </div>
                    <div className="curso-info">
                        <h4>Amazon AWS Certified Cloud</h4>
                        <span className="curso-duracao">80h - 2025</span>
                        <span className="curso-plataforma">Udemy</span>
                    </div>
                </div>
                <div className="curso-card">
                    <div className="curso-icon">
                        <i className="bi bi-microsoft" style={{ color: '#0078D4' }}></i>
                    </div>
                    <div className="curso-info">
                        <h4>Microsoft AZ-900</h4>
                        <span className="curso-duracao">5h - 2024</span>
                        <span className="curso-plataforma">Udemy</span>
                    </div>
                </div>
                <div className="curso-card">
                    <div className="curso-icon">
                        <i className="bi bi-google" style={{ color: '#4285F4' }}></i>
                    </div>
                    <div className="curso-info">
                        <h4>Google Associate Cloud Engineer</h4>
                        <span className="curso-duracao">9h - 2024</span>
                        <span className="curso-plataforma">Udemy</span>
                    </div>
                </div>
                <div className="curso-card">
                    <div className="curso-icon">
                        <i className="bi bi-shield-lock-fill" style={{ color: '#EE3124' }}></i>
                    </div>
                    <div className="curso-info">
                        <h4>Fortigate Firewall NSE4</h4>
                        <span className="curso-duracao">8h - 2024</span>
                        <span className="curso-plataforma">Udemy</span>
                    </div>
                </div>
                <div className="curso-card">
                    <div className="curso-icon">
                        <i className="bi bi-hdd-network-fill" style={{ color: '#1BA0D7' }}></i>
                    </div>
                    <div className="curso-info">
                        <h4>CCNA 200-301</h4>
                        <span className="curso-duracao">80h - 2024</span>
                        <span className="curso-plataforma">Udemy</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
