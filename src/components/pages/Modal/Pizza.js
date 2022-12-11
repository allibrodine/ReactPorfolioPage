import React from 'react';
import './Modal.css';
//import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const PizzaModal = props => {
    // if (!props.show) {
    //     return null
    // }

    return (
        <div className={`modals ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className='modals-content d-flex-row' onClick={e => e.stopPropagation()}>
                
                <h1 className='d-inline-flex modal-head'>Pizza Hunt</h1>
                
                <FontAwesomeIcon icon={faXmark} size='md' className="close" onClick={props.onClose}></FontAwesomeIcon>
                    
                <p><span>Description: </span>A social-media application all about everybody's favorite food, pizza! Users can create all sorts of unique
                    pizza flavors, share their ideas with friends and comment on other people's flavor ideas. The dashboard displays all of your own pizza
                    creations with the option to see the discussion on particular pies. Date and time of comments are displayed as well.</p>
                <p><span>My Role: </span>This application was created for the SMU Bootcamp Module 18 on NoSQL databases, which are ideal for social-media sites
                    as the data is constantly changeing. I implemented MongoDB as the database and used Mongoose for CRUD operations on the back end, as well
                    as using Mongoose's middleware to automate functionality.</p>
                <p className='mb-0'><span>Technologies Used: </span>Express.js, MongoDB, Mongoose, JavaScript</p>

                <p className="d-inline-flex links">
                    Visit the site 
                    <a href="https://alli-pizzahunt.herokuapp.com/" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" className="arrow"></FontAwesomeIcon></a></p>
                <p className="d-inline-flex links" id="git">
                    Github Repo
                    <a href="https://github.com/allibrodine/PizzaHunt" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faGithub} size="lg" className="hub"></FontAwesomeIcon>
                    </a>
                </p>
            </div>
        </div> 
    )
}

export default PizzaModal;