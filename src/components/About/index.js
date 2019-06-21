import React from 'react';
import "./styles.css";
import Profile from "../../assets/images/profile.jpg"
import Curriculo from "../../assets/images/Curriculo.pdf";

function About() {
    return (
        <>
            <section id="about">
                <div className="col1">
                    <img src={Profile} alt="Profile Pic" />
                    <p>Desenvolvedor .NET desde 2018 e graduando de Engenharia de Software pela UTFPR</p>

                </div>

                <div className="col2">
                    <h2>Interesses</h2>
                    <p>Code</p>
                    <p>Jogos</p>
                    <p>Seriados</p>

                    <h2>Idiomas</h2>
                    <p>Português - Nativo</p>
                    <p>Inglês - Avançado</p>

                    <h2>Formação</h2>
                    <p>Ensino Medio</p>
                    <p>Técnico em Informática</p>
                    <p>Técnico em Informática para Internet</p>
                    <p>Cursando Engenharia de Software</p>

                    <a href={Curriculo} download={Curriculo}><button>Baixar Curriculo</button></a>
                </div>

            </section>
        </>
    )
}


export default About;