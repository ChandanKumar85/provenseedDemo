import React from 'react';
import { FooterWrapper } from "./FooterStyled";
import { Link } from 'react-router-dom';
import nutrienasLogo from '../../assets/nutrienas-logo.svg';
import facebook from '../../assets/facebook-logo.svg';
import xLogo from '../../assets/x-logo.svg';
import youtube from '../../assets/youtube-logo.svg';
import logo from '../../assets/provenseed-logo.png';

const Footer = () => {
    return (
        <FooterWrapper>
            <div className='container'>
                <footer>
                    <figure className='foo-left'>
                        <img src={nutrienasLogo} width="109" height="44" alt="" />
                        <figcaption>© 2024, Nutrien Ag Solutions, Inc</figcaption>
                    </figure>
                    <figure className='middle-logo'>
                        <img src={logo} width="198" height="74" alt="" />
                    </figure>
                    <div className='foo-right'>
                        <nav>
                            <Link to="">Seed &amp; Forages Guide</Link>
                            <Link to="">Terms &amp; Conditions</Link>
                            <Link to="">Privacy Policy</Link>
                            <Link to="">Careers</Link>
                            <Link to="">Safety</Link>
                            <Link to="">Sustainability</Link>
                        </nav>
                        <div className="cmp-navigation__group">
                            <a href="https://www.youtube.com/channel/UCxx1uNDIxZgV5wmYnQ85IJQ" target="_blank" className="cmp-navigation__item-link">
                                <img src={youtube} alt="You Tube" className="cmp-image__image" />
                            </a>
                            <a href="https://twitter.com/home" target="_blank" className="cmp-navigation__item-link">
                                <img src={xLogo} alt="Twitter" className="cmp-image__image" />
                            </a>
                            <a href="https://www.facebook.com/people/Proven-Seed/61550968448145/" target="_blank" className="cmp-navigation__item-link">
                                <img src={facebook} alt="Facebook" className="cmp-image__image" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </FooterWrapper >
    )
}

export default Footer