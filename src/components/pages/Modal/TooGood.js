import React from 'react';
import './Modal.css';
//import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GoodModal = props => {
    // if (!props.show) {
    //     return null
    // }

    return (
        <div className={`modals ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className='modals-content d-flex-row' onClick={e => e.stopPropagation()}>
                
                <h1 className='d-inline-flex modal-head'>Too Good To Waste</h1>
                
                <FontAwesomeIcon icon={faXmark} size='md' className="close" onClick={props.onClose}></FontAwesomeIcon>
                    
                <p><span>Description: </span>A single-page MERN application that draws attention to the environmental impact of food waste in our 
                   country and offers users the ability to do their part in reducing their contribution to the on-going 
                   global crisis.</p>
                <p><span>My Role: </span>For the third and final project of the SMU Bootcamp, I headed up the front-end by creating the user interface 
                    in React and applying CSS and Chakra UI for a polished UI and mobile responsive design. Built the shopping cart that includes saving 
                    cart items to IndexedDB for data persistence. Created modals for sign up and login forms.</p>
                <p><span>Technologies Used: </span>React, Chakra UI, JavaScript, CSS, Node.js, Express.js, MongoDB, GoogleMap API,
                    GraphQL, JWT, Stripe, Heroku
                </p>
                <p className="d-inline-flex links">
                    Visit the site 
                    <a href="https://too-good-2-waste.herokuapp.com/" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" className="arrow"></FontAwesomeIcon></a></p>
                <p className="d-inline-flex links" id="git">
                    Github Repo
                    <a href="https://github.com/dmadon/too-good-to-waste" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faGithub} size="lg" className="hub"></FontAwesomeIcon>
                    </a>
                </p>
            </div>
        </div> 
    )
}

export default GoodModal;

