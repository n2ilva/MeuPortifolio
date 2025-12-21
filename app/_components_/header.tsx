export default function Header() {
    return (
        <header>
            <section className="container_menu">
                    <div className="foto">
                        <img src="#" alt="#" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <ul className="container_dropdown">Meus Projetos
                                <li><a href="https://www.agendafamiliar.app/" target="_blank">Agenda Familiar</a></li>
                                <li><a href="https://portifoliomaker.netlify.app/" target="_blank">Portifolio Maker</a></li>
                                <li><a href="https://www.sararamos.com.br/" target="_blank">Site Professora Sara Ramos</a></li>
                            </ul>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>
            </section>
            <section className="container_sobre_mim">
                <div className="sobre_mim">
                    <h2>Quem sou eu?</h2>
                    <p>Meu nome é <strong>Natanael Silva</strong>, atualmente focando nos estudos para desenvolvimento Full Stack Web e Mobile, sou analista de Infraestrutura de Redes de Computadores formado pela Uninove e apaixonado por criar coisas incríveis para facilitar a vida criando apps que resolvam nossos problemas.</p>
                </div>
            </section>           
        </header>
    );
}