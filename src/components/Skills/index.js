import React, { Component } from "react";
import "./styles.css";


class Skills extends Component {
    render() {
        return (
            <>
                <section id="Skills">
                    <div className="title">
                        <h2>Habilidades</h2>
                    </div>

                    <div className="center">
                        <div className="SkillList">
                            <ul>
                                <li>C#</li>
                                <li>WinForms</li>
                                <li>SQL Server</li>
                                <li>MySQL</li>
                                <li>Java</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Node JS</li>
                                <li>Angular7</li>
                                <li>GIT</li>
                                <li>GitHub</li>
                                <li>Visual Studio Team Services</li>
                            </ul>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}


export default Skills;