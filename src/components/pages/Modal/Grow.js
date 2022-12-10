import React from 'react';
import './Modal.css';
//import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GrowModal = props => {
    // if (!props.show) {
    //     return null
    // }

    return (
        <div className={`modals ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className='modals-content d-flex-row' onClick={e => e.stopPropagation()}>
                
                <h1 className='d-inline-flex modal-head'>GrowTime</h1>
                
                <FontAwesomeIcon icon={faXmark} size='md' className="close" onClick={props.onClose}></FontAwesomeIcon>
                    
                <p><span>Description: </span>As an aspiring home gardener in North Texas, I need to learn the basics of gardening, so that I can build my own garden 
                    at home to grow my own food. When I visit the homepage, then I am presented with what vegetables are in season as well as a 
                    navigation menu with links to more detailed information. When I click on RECIPES, I am taken to a page with a recipe search so I can 
                    utilize my harvest. When I click on WEATHER, I am given the current local weather forecast. </p>
                <p><span>My Role: </span>For the first project of the SMU Bootcamp, I created all of the informational pages using HTML and CSS, as well as
                    overseeing the aestheitc of the entire project.</p>
                <p><span>Technologies Used: </span>HTML, CSS, Skeleton, JavaScript, Recipe Search and Diet API, OpenWeather API</p>

                <p className="d-inline-flex links">
                    Visit the site 
                    <a href="https://allibrodine.github.io/GrowTime/" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" className="arrow"></FontAwesomeIcon></a></p>
                <p className="d-inline-flex links" id="git">
                    Github Repo
                    <a href="https://github.com/allibrodine/GrowTime" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faGithub} size="lg" className="hub"></FontAwesomeIcon>
                    </a>
                </p>
            </div>
        </div> 
    )
}

export default GrowModal;