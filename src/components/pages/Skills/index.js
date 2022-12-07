import React from 'react';
import Resume from '../../../assets/Resume_AlliBrodine.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faMobileScreenButton, faLock } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    return(
        <div className="skills-text">
            <h2 className="skills-h">Resume</h2>
            <p className="resume">My resume is available <a href={Resume} target="blank" id="resume-file">here</a></p> 

            <h2 className="skills-h">Front-End Proficiencies</h2>
            <ul className="skills-list">
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML5" className="devicon"/>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS3" className="devicon"/>
                </li>
                <li>
                    
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="devicon"/>
          
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" className="devicon"/>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Bootstrap" className="devicon"/>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" alt="Handlebars" className="devicon" />
                </li>
                <li className="devicon" id="response"><FontAwesomeIcon icon={faMobileScreenButton} size="3x" className="phone"></FontAwesomeIcon>Responsive Design</li>
                <li className="devicon" id="chakra"><FontAwesomeIcon icon={faBolt} size="3x" className="bolt"></FontAwesomeIcon>Chakra UI</li>
            </ul>

            <h2 className="skills-h" id="back">Back-End Proficiencies</h2>
            <ul className="skills-list">
                <li className="devicon" id="api">APIs</li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="devicon"/>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="devicon"/>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" className="devicon"/>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" alt="Sequelize" className="devicon"/>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="devicon"/>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" alt="GraphQL" className="devicon"/>
                </li>
                <li>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" alt="Heroku" className="devicon"/>
                </li>
                <li className="devicon" id="jwt"><FontAwesomeIcon icon={faLock} size="3x" className="lock"></FontAwesomeIcon>JSON Web Token</li>
            </ul>
        </div>
    );
}

export default Skills;