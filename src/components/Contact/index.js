import React from "react";
import "./styles.css";


function Contact() {
    return (
        <>
            <section id="Contact">
                <h2>Contate Me!</h2>

                <div className="formulario">
                    <form action="https://formspree.io/amauri.martins.jr@hotmail.com" method="POST">

                        <label for="name">Nome</label>
                        <input type="text" name="name" id="name" placeholder="Digite seu Nome"></input>

                        <label for="_replyto">E-mail</label>
                        <input type="email" name="_replyto" id="_replyto" placeholder="Digite seu Email"></input>

                        <label for="assunto">Assunto</label>
                        <input type="name" name="assunto" id="assunto" placeholder="Digite o Assunto da Mensagem"></input>

                        <label for="message">Mensagem</label>
                        <textarea name="message" id="message" rows="3" placeholder="Digite sua Mensagem"></textarea>

                        <input type="submit" className="btn" value="Enviar"></input>
                    </form>

                </div>


            </section>
        </>
    )
}


export default Contact;
