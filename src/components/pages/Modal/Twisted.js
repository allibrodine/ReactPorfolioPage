import React from 'react';
import './Modal.css';
//import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const TwistModal = props => {
    // if (!props.show) {
    //     return null
    // }

    return (
        <div className={`modals ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className='modals-content d-flex-row' onClick={e => e.stopPropagation()}>
                
                <h1 className='d-inline-flex modal-head'>Twisted Recipes</h1>
                
                <FontAwesomeIcon icon={faXmark} size='md' className="close" onClick={props.onClose}></FontAwesomeIcon>
                    
                <p><span>Description: </span>A web application for home chefs to share their creativity with fellow members by posting their "twisted"
                    versions of classic, familiar recipes.</p>
                <p><span>My Role: </span>For the second group project of the SMU Bootcamp, I began by setting up the back end in MySQL, using Express.js and
                    Sequelize to establish the database connection. Users are authenticated using bcrypt. The front end was built using Handlebars,  
                    funtionality was created with JavaScript, and Bootstrap and basic CSS provided the styling.</p>
                <p><span>Technologies Used: </span>MySQL, Sequelize, Express.js, bcrypt, dotenv, Handlebars, Bootstrap, JavaScript, CSS</p>
                <p className="d-inline-flex links pt-5">
                    Visit the site 
                    <a href="https://alli-twistedrecipes.herokuapp.com/" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" className="arrow"></FontAwesomeIcon></a></p>
                <p className="d-inline-flex links pt-5" id="git">
                    Github Repo
                    <a href="https://github.com/allibrodine/TwistedRecipes" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faGithub} size="lg" className="hub"></FontAwesomeIcon>
                    </a>
                </p>
            </div>
        </div> 
    )
}

export default TwistModal;