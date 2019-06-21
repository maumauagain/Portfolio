import React from 'react';
import "./styles.css";

const Header = () =>
    <header id="main-header">
        <ul className="menu">
            <a href="#about"><li>Inicio</li></a>
            <a href="#Skills"><li>Habilidades</li></a>
            <a href="#Blog"><li>Blog</li></a>
            <a href="#Portfolio"><li>Portfolio</li></a>
            <a href="#bio"><li>Detalhes</li></a>
            <a href="#Contact"><li>Contato</li></a>
        </ul>
        <p className="hidden">Amauri Martins Junior</p>
    </header>;

export default Header;