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
            <div className='modals-content-alexis d-flex-row' onClick={e => e.stopPropagation()}>
                
                <h1 className='d-inline-flex modal-head'>Schitt's Creek Counter</h1>
                
                <FontAwesomeIcon icon={faXmark} size='md' className="close" onClick={props.onClose}></FontAwesomeIcon>
                    
                <p><span>Description: </span>A simple JavaScript counting application that invites users to increment the counter each time Alexis says
                    "Ew, David" in each episode of Schitt's Creek. Values for each episode can be saved in a string that displays below the buttons.
                    A reset option is available to clear the saved values and restart the counter.</p>
                <p><span>My Role: </span>A simple exercise to practice my basic JavaScript skills. Built from a module on Scrimba.com</p>
                <p><span>Technologies Used: </span>JavaScript, HTML, CSS, Netlify</p>
                <p className="d-inline-flex links pt-3">
                    Visit the site 
                    <a href="https://clever-lolly-09ea9d.netlify.app" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" className="arrow"></FontAwesomeIcon></a></p>
                <p className="d-inline-flex links pt-3" id="git">
                    Github Repo
                    <a href="https://github.com/allibrodine/SchittsCounter" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faGithub} size="lg" className="hub"></FontAwesomeIcon>
                    </a>
                </p>
            </div>
        </div> 
    )
}

export default BlogModal;