"use client";

export default function CoursesCertifications() {
    return (
        <section className="cursos-section">
            <h2 className="section-subtitle">
                <i className="bi bi-patch-check-fill"></i>
                Cursos & Certificações
            </h2>
            
            <div className="cursos-grid">
                <div className="curso-card">
                    <div className="curso-icon">
                        <i className="bi bi-cloud-fill course-icon-aws"></i>
                    </div>
                    <div className="curso-info">
                        <h4>Amazon AWS Certified Cloud</h4>
                        <span className="curso-duracao">80h - 2025</span>
                        <span className="curso-plataforma">Udemy</span>
                    </div>
                </div>
                <div className="curso-card">
                    <div className="curso-icon">
                        <i className="bi bi-microsoft course-icon-microsoft"></i>
                    </div>
                    <div className="curso-info">
                        <h4>Microsoft AZ-900</h4>
                        <span className="curso-duracao">5h - 2024</span>
                        <span className="curso-plataforma">Udemy</span>
                    </div>
                </div>
                <div className="curso-card">
                    <div className="curso-icon">
                        <i className="bi bi-google course-icon-google"></i>
                    </div>
                    <div className="curso-info">
                        <h4>Google Associate Cloud Engineer</h4>
                        <span className="curso-duracao">9h - 2024</span>
                        <span className="curso-plataforma">Udemy</span>
                    </div>
                </div>
                <div className="curso-card">
                    <div className="curso-icon">
                        <i className="bi bi-shield-lock-fill course-icon-fortigate"></i>
                    </div>
                    <div className="curso-info">
                        <h4>Fortigate Firewall NSE4</h4>
                        <span className="curso-duracao">8h - 2024</span>
                        <span className="curso-plataforma">Udemy</span>
                    </div>
                </div>
                <div className="curso-card">
                    <div className="curso-icon">
                        <i className="bi bi-hdd-network-fill course-icon-cisco"></i>
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
