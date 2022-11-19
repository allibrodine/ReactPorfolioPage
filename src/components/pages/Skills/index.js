import React from 'react';
import Resume from '../../../assets/Resume_AlliBrodine.pdf'

function Skills() {
    return(
        <div className="skills-text">
            <h2 className="skills-h">Resume</h2>
            <p className="resume">My resume is available <a href={Resume} id="resume-file">here</a></p> 

            <h2 className="skills-h">Front-End Proficiencies</h2>
            <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Chakra UI</li>
                <li>Handlebars</li>
            </ul>

            <h2 className="skills-h">Back-End Proficiencies</h2>
            <ul className="skills-list">
                <li>API's</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>GraphQL</li>
                <li>JWT</li>
            </ul>
        </div>
    );
}

export default Skills;