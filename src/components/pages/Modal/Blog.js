import React from 'react';
import './Modal.css';
//import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const BlogModal = props => {
    // if (!props.show) {
    //     return null
    // }

    return (
        <div className={`modals ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className='modals-content-blog d-flex-row' onClick={e => e.stopPropagation()}>
                
                <h1 className='d-inline-flex modal-head'>The Tech Blog</h1>
                
                <FontAwesomeIcon icon={faXmark} size='md' className="close" onClick={props.onClose}></FontAwesomeIcon>
                    
                <p><span>Description: </span>Sign up for The Tech Blog and post all of your thoughts and ideas about tech related topics. 
                    See what others are saying about similar topics and comment freely on other people's posts. Keep track of your own posts on your 
                    own personal Dashboard and edit and delete as you please. Requires login with username, e-mail address and personal password.</p>
                <p><span>My Role: </span>This was an assignment for the SMU Bootcamp, Module 14: Model-View-Controller. MVC is an architectural pattern
                    that structures a codebase as three distinct sections known as a separation of concerns. The Model is the core data of the application, 
                    built in the MySQL database and executed through Sequelize. The View is the UI, built with Handlebars. And the Controller is the link
                    between the two that provides the functionality of the application which, in this case, is Express.js.</p>
                <p><span>Technologies Used: </span>Node.js, Handlebars, Express.js, express-sessions, MySQL, Sequelize, bcrypt, Jest, CSS, JavaScript
                </p>
                <p className="d-inline-flex links pt-3">
                    Visit the site 
                    <a href="https://alli-thetechblog.herokuapp.com/" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" className="arrow"></FontAwesomeIcon></a></p>
                <p className="d-inline-flex links pt-3" id="git">
                    Github Repo
                    <a href="https://github.com/allibrodine/TheTechBlog" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faGithub} size="lg" className="hub"></FontAwesomeIcon>
                    </a>
                </p>
            </div>
        </div> 
    )
}

export default BlogModal;