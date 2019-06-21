import React, { Component } from "react";
import "./styles.css";
import Image1 from "../../assets/images/portfolio-1.PNG";
import Image2 from "../../assets/images/portfolio-2.PNG";
import Posts from "../Posts";

class Portfolio extends Component {
    render() {
        return (
            <>
                <section id="Portfolio">
                    <div className="title">
                        <h2>Projetos</h2>
                    </div>

                    <div className="ListProjects">
                        <Posts Link="https://github.com/maumauagain/WebClass/tree/master/T01" Image={Image1} alt="Electron JS" title="Geovanna Garcia"
                            Subject="Projeto de WEB de réplica de um site utilizando apenas HTML e CSS"></Posts>

                        <Posts Link="https://github.com/maumauagain/TreinamentoJS/tree/master/Projeto%20Final" Image={Image2} alt="GraphQL" title="Agenda"
                            Subject="Agenda desenvolvida em JS."></Posts>
                    </div>

                </section>
            </>
        )
    }
}


export default Portfolio;