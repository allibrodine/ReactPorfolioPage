import React from 'react';

//create Nav component, pass in props from PortfolioContainer
function Nav({ currentPage, handlePageChange }) {
    return(
        <div className="d-flex p-2">
            <ul className="d-flex justify-content-end">
                <li className="d-inline-flex mx-2">
                    <a href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
                </li>
                <li className="d-inline-flex mx-2">
                    <a href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                </li>
                <li className="d-inline-flex mx-2">
                    <a href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                </li>
                <li className="d-inline-flex mx-2">
                    <a href="#skills"
                        onClick={() => handlePageChange('Skills')}
                        className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}>Skills</a>
                </li>
            </ul>
        </div>

    )
}

export default Nav;