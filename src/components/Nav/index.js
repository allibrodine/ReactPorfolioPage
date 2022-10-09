import React from 'react';

//create Nav component
function Nav() {
    return(
        <div className="d-flex p-2">
            <ul className="d-flex justify-content-end">
                <li className="d-inline-flex mx-2">
                    <a href="#about">About Me</a>
                </li>
                <li className="d-inline-flex mx-2">
                    <span>Portfolio</span>
                </li>
                <li className="d-inline-flex mx-2">
                    <span>Contact</span>
                </li>
                <li className="d-inline-flex mx-2">
                    <span>Skills</span>
                </li>
            </ul>
        </div>

    )
}

export default Nav;