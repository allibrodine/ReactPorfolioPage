import React from 'react';
import './Modal.css';
//import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const NoteModal = props => {
    // if (!props.show) {
    //     return null
    // }

    return (
        <div className={`modals ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className='modals-content d-flex-row' onClick={e => e.stopPropagation()}>
                
                <h1 className='d-inline-flex modal-head'>Express Note Taker</h1>
                
                <FontAwesomeIcon icon={faXmark} size='md' className="close" onClick={props.onClose}></FontAwesomeIcon>
                    
                <p><span>Description: </span>An easy-to-use note taking application that allows you to write and save notes. The application uses the 
                    Express.js back end and will save and retrieve note data from a JSON file.</p>
                <p><span>My Role: </span>This application was created for the SMU Bootcamp Module 11 on Express.js, the most widely used Node.js server
                    framework. Using Express, I am able to configure a back end to serve static HTML files as well as to create an API to handle GET, 
                    POST and DELETE requests, parse parameters in server-side routes, and submit form data to a server.</p>
                <p className='mb-5'><span>Technologies Used: </span>HTML, CSS, JavaScript, Node.js, Express.js, Heroku</p>

                <p className="d-inline-flex links">
                    Visit the site 
                    <a href="https://alli-expressnotetaker.herokuapp.com/" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" className="arrow"></FontAwesomeIcon></a></p>
                <p className="d-inline-flex links" id="git">
                    Github Repo
                    <a href="https://github.com/allibrodine/ExpressNoteTaker" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faGithub} size="lg" className="hub"></FontAwesomeIcon>
                    </a>
                </p>
            </div>
        </div> 
    )
}

export default NoteModal;