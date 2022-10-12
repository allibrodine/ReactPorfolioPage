import React from 'react';

function Skills() {
    return(
        <div className="skills-text">
            <h2 className="skills-h">Resume</h2>
            <p className="resume">A working resume will be available soon!</p>

            <h2 className="skills-h">Front-End Proficiencies</h2>
            <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <h2 className="skills-h">Back-End Proficiencies</h2>
            <ul className="skills-list">
                <li>API's</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
            </ul>
        </div>
    );
}

export default Skills;