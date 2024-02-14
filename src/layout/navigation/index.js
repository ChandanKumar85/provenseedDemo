import React from 'react'
import { MeinWrapper } from "./NavigationStyled";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <MeinWrapper>
            <div className='container'>
                <nav>
                    <ul className="cmp-navigation">
                        <li>
                            <Link to="seed-selector">Seed Selector</Link>
                        </li>
                        <li>
                            <Link to="performance-trials">Performance Trials</Link>
                        </li>
                        <li>
                            <Link to="agronomic-insights">Agronomic Insights</Link>
                        </li>
                        <li>
                            <Link to="about-us">About</Link>
                        </li>
                        <li>
                            <Link to="find-a-location">Locations</Link>
                        </li>
                        <li>
                            <Link to="contact-us">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </MeinWrapper>
    )
}

export default Navigation
