import React from 'react';
import "./styles.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () =>
    <header id="main-header">
        <ul className="menu">
            <AnchorLink href="#about"><li>Inicio</li></AnchorLink>
            <AnchorLink href="#Skills"><li>Habilidades</li></AnchorLink>
            <AnchorLink href="#Blog"><li>Blog</li></AnchorLink>
            <AnchorLink href="#Portfolio"><li>Portfolio</li></AnchorLink>
            <AnchorLink href="#bio"><li>Detalhes</li></AnchorLink>
            <AnchorLink href="#Contact"><li>Contato</li></AnchorLink>
        </ul>
        <p className="hidden">Amauri Martins Junior</p>
    </header>;

export default Header;