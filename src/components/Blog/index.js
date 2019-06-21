import React, { Component } from "react";
import "./styles.css";
import Image1 from "../../assets/images/post-1.jpg";
import Image2 from "../../assets/images/post-2.jpg";
import Image3 from "../../assets/images/post-3.jpg";
import Posts from "../Posts";

class Blog extends Component {
    render() {
        return (
            <>
                <section id="Blog">
                    <div className="title">
                        <h2>Blog</h2>
                    </div>

                    <div className="ListPosts">
                        <Posts Link="https://tableless.com.br/introducao-ao-electron/" Image={Image1} alt="Electron JS" title="Electron JS"
                            Subject="Desenvolvedor web também pode construir aplicações desktop. Com o Electron, você usa HTML, CSS e JavaScript."></Posts>

                        <Posts Link="https://tableless.com.br/graphql-a-nova-era-das-apis-web/" Image={Image2} alt="GraphQL" title="GraphQL"
                            Subject="Uma nova categoria de ferramentas tem ganhado mercado quando falamos sobre a construção de APIs Web: estamos falando do GraphQL."></Posts>

                        <Posts Link="https://medium.com/@renato.groffe/visual-studio-2019-e-net-core-3-primeiros-testes-cb2e4772c153" Image={Image3} alt=".NET Core 3"
                            title=".NET Core 3" Subject="Visual Studio 2019 e .NET Core 3: primeiros testes."></Posts>
                    </div>

                </section>
            </>
        )
    }
}

export default Blog;