import React, { useState } from 'react';
//import helper for email validation
import { validateEmail } from '../../../utils/helpers';
//import fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    //set up hook to manage form data..clear forms by setting the initial state to an empty string
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    //hook for error message...initial state is empty to signify no errors
    const [errorMessage, setErrorMessage] = useState('');

    //destructure formState object
    const { name, email, message } = formState;

    //function in place to handle submit for back end functionality
    function handleSubmit(e) {
        e.preventDefault();
        //console.log(formState);
    }

    //sync internal state of formState with the user input from the DOM
    function handleChange(e) {
        //validate email input
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            //console.log(isValid);

            //conditional statement to validate email
            if (!isValid) {
                setErrorMessage('Email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        //will only update the state if there are no errors
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

        //console.log('errorMessage', errorMessage);
    }

    return(
        <section>
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={ name } onBlur={ handleChange } />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={ email } onBlur={ handleChange } />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="3" defaultValue={ message } onBlur={ handleChange } />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-msg"><FontAwesomeIcon icon={faXmark} /> {errorMessage}</p>
                    </div>
                )}
                <button type="submit">Send It!</button>
            </form>
        </section>
    );
}

export default Contact;