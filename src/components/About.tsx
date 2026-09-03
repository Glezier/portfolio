export default function About(){
    return(
        <section id="sobre" className="section">
            <div className="container about-layout">
                <div className="section-heading">
                <p className="eyebrow">Sobre mim</p>
                <h2>Software para resolver problemas reais</h2>
                </div>

                <div className="about-content">
                <p>
                    Sou estudante de Ciência da Computação e desenvolvedor Full
                    Stack, com interesse na construção de aplicações web completas,
                    da interface ao banco de dados.
                </p>

                <p>
                    Busco transformar problemas em soluções organizadas, combinando
                    desenvolvimento frontend, APIs, regras de negócio e persistência
                    de dados.
                </p>

                <p>
                    Minha formação também inclui experiências acadêmicas, iniciação
                    científica e programação competitiva, que fortalecem meu
                    raciocínio lógico, minha colaboração em equipe e meu aprendizado
                    contínuo.
                </p>

                <ul className="about-highlights">
                    <li>Desenvolvimento Full Stack</li>
                    <li>Engenharia de software</li>
                    <li>Resolução de problemas</li>
                    <li>Aprendizado contínuo</li>
                </ul>
                </div>
            </div>
        </section>
    )
}