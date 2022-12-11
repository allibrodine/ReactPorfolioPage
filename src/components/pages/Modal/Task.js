import React from 'react';
import './Modal.css';
//import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const TaskModal = props => {
    // if (!props.show) {
    //     return null
    // }

    return (
        <div className={`modals ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className='modals-content d-flex-row' onClick={e => e.stopPropagation()}>
                
                <h1 className='d-inline-flex modal-head'>Taskmaster Pro</h1>
                
                <FontAwesomeIcon icon={faXmark} size='md' className="close" onClick={props.onClose}></FontAwesomeIcon>
                    
                <p><span>Description: </span>A task management application that allows the user to create a to-do list and manage tasks. Tasks can 
                    fall under any of these four categories: To Do, In Progress, In Review, or Done. Tasks are added with a due date attached and can be
                    moved from one category to the next using the drag and drop function or edited simply by selecting the task from a list. 
                    Delete a task by dragging it to the bottom of the page to a pop-up delete bar.</p>
                <p><span>My Role: </span>This application was created for the SMU Bootcamp Module 5 on Third-Party API's. We were introduced to tools such
                    as JQuery, Moment.js, Bootstrap and GoogleFonts and learned how to implement them in our application.</p>
                <p className='mb-0'><span>Technologies Used: </span>HTML, CSS, JavaScript, Bootstrap, JQuery, Moment.js</p>

                <p className="d-inline-flex links ">
                    Visit the site 
                    <a href="https://allibrodine.github.io/TaskmasterPro/" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" className="arrow"></FontAwesomeIcon></a></p>
                <p className="d-inline-flex links" id="git">
                    Github Repo
                    <a href="https://github.com/allibrodine/TaskmasterPro" target="blank" className="mx-2">
                    <FontAwesomeIcon icon={faGithub} size="lg" className="hub"></FontAwesomeIcon>
                    </a>
                </p>
            </div>
        </div> 
    )
}

export default TaskModal;