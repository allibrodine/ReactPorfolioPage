import React from 'react';

//create Nav component, pass in props from PortfolioContainer
function Nav({ currentPage, handlePageChange }) {
    return(
        <div className="navbar d-flex p-2">
            <ul className="navbar fixed-top">
                <li className="d-inline-flex mx-2 link">
                    <a href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'navActive' : 'nav-link'}>About Me</a>
                </li>
                <li className="d-inline-flex mx-2 link">
                    <a href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'navActive' : 'nav-link'}>Portfolio</a>
                </li>
                <li className="d-inline-flex mx-2 link">
                    <a href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'navActive' : 'nav-link'}>Contact</a>
                </li>
                <li className="d-inline-flex mx-2 link">
                    <a href="#skills"
                        onClick={() => handlePageChange('Skills')}
                        className={currentPage === 'Skills' ? 'navActive' : 'nav-link'}>Skills</a>
                </li>
            </ul>
        </div>

    )
}

export default Nav;