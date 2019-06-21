import React from "react";
import "./styles.css";
import Image1 from "../../assets/images/post-1.jpg";
import Image2 from "../../assets/images/post-2.jpg";
import Image3 from "../../assets/images/post-3.jpg";

function Blog() {
    return (
        <>
            <section id="Blog">
                <div className="title">
                    <h2>Blog</h2>
                </div>

                <div className="ListPosts">
                    <div className="post">
                        <a href="https://tableless.com.br/introducao-ao-electron/"><img src={Image1} alt="Electron JS" /></a>
                        <h4>Electron JS</h4>
                        <p>Desenvolvedor web também pode construir aplicações desktop. Com o Electron, você usa HTML, CSS e JavaScript.</p>
                    </div>

                    <div className="post">
                        <a href="https://tableless.com.br/graphql-a-nova-era-das-apis-web/"><img src={Image2} alt="GraphQL" /></a>
                        <h4>GraphQL</h4>
                        <p>Uma nova categoria de ferramentas tem ganhado mercado quando falamos sobre a construção de APIs Web: estamos falando do GraphQL.</p>
                    </div>

                    <div className="post">
                        <a href="https://medium.com/@renato.groffe/visual-studio-2019-e-net-core-3-primeiros-testes-cb2e4772c153"><img src={Image3} alt=".NET Core 3" /></a>
                        <h4>.NET Core 3</h4>
                        <p>Visual Studio 2019 e .NET Core 3: primeiros testes.</p>
                    </div>
                </div>

            </section>
        </>
    )
}


export default Blog;