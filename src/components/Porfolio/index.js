import React from "react";
import "./styles.css";
import Image1 from "../../assets/images/portfolio-1.PNG";
import Image2 from "../../assets/images/portfolio-2.PNG";

function Portfolio() {
    return (
        <>
            <section id="Portfolio">
                <div className="title">
                    <h2>Projetos</h2>
                </div>

                <div className="ListProjects">
                    <div className="post">
                        <a href="https://github.com/maumauagain/WebClass/tree/master/T01"><img src={Image1} alt="Electron JS" /></a>
                        <h4>Geovanna Garcia</h4>
                        <p>Projeto de WEB de réplica de um site utilizando apenas HTML e CSS</p>
                    </div>

                    <div className="post">
                        <a href="https://github.com/maumauagain/TreinamentoJS/tree/master/Projeto%20Final"><img src={Image2} alt="GraphQL" /></a>
                        <h4>Agenda</h4>
                        <p>Agenda desenvolvida em JS.</p>
                    </div>
                </div>

            </section>
        </>
    )
}


export default Portfolio;