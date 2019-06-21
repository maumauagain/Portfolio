import React, { Component } from "react";
import "./styles.css";

class Bio extends Component {
    render() {
        return (
            <>
                <section id="bio">
                    <div className="title">
                        <h2>Mais Informações</h2>
                    </div>

                    <div className="container">
                        <div className="row1">
                            <p>Me chamo Amauri Martins Júnior, tenho 21 anos e moro em Cornélio Procópio, no Paraná.
                                Meu primeiro contato com computador foi por volta dos 10 anos e não demorou muito
                                para perceber que o que eu queria trabalhar, era com isso. Aos 15 iniciei meu curso
                                técnico técnico de informática na escola ETEC Polivalente de Americana, no qual eu
                                estudava a tarde e de noite eu fazia outro curso técnico de Informática para Internet.
                                No decorrer dos cursos aprendi a desenvolver e descobri que era aquilo que eu gostaria
                                de trabalhar ♥.
                        </p>
                        </div>
                        <div className="row2">
                            <p>
                                Em 2016 fui aprovado na faculdade UTFPR no curso de Engenharia de Software que está ajudando muito
                                no meu desenvolvimento profissional. Em 2018 consegui meu primeiro emprego na area do desenvolvimento
                                e continuo nele até então. Quando comecei a trabalhar, percebi muitas coisas, uma delas é que é muito
                                diferente quando se lida com um cliente, você adquire muitas responsabilidades e não é nada comparado à
                                um trabalho de faculdade, principalmente quando se trabalha em um software que é crítico e qualquer erro
                                pode colocar em risco a vida de pessoas. Desde então eu aprendi muitas coisas e uma delas foi ser mais curioso,
                                que pra essa área, eu considero importantíssimo, levando em consideração o tanto de tecnologias que lançam hoje.
                        </p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}


export default Bio;