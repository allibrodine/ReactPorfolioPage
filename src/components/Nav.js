import React from 'react';
//import react animations
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

//create Nav component, pass in props from PortfolioContainer
function Nav({ currentPage, handlePageChange }) {
    const Zoom = styled.div`animation: 2s ${keyframes`${zoomIn}`}`;

    return(
        <div className="navbar d-flex p-2">
            <ul className="navbar flex-lg-row flex-sm-column flex-xs-column">
                <li className="d-inline-flex mx-2 link">
                    <Zoom><a href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'navActive' : 'nav-link'}>About Me</a></Zoom>
                </li>
                <li className="d-inline-flex mx-2 link">
                    <Zoom><a href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'navActive' : 'nav-link'}>Portfolio</a></Zoom>
                </li>
                {/* <li className="d-inline-flex mx-2 link">
                    <Zoom><a href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'navActive' : 'nav-link'}>Contact</a></Zoom>
                </li> */}
                <li className="d-inline-flex mx-2 link">
                    <Zoom><a href="#skills"
                        onClick={() => handlePageChange('Skills')}
                        className={currentPage === 'Skills' ? 'navActive' : 'nav-link'}>Skills</a></Zoom>
                </li>
            </ul>
        </div>

    )
}

export default Nav;