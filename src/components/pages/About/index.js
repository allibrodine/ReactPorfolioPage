import React from 'react';
import BeachPhoto from '../../../assets/images/OntheBeach.jpg';
import '../About/about.css'
//import react animations
import styled, { keyframes } from 'styled-components';
import { bounceInLeft } from 'react-animations';

//create About section
function About() {
    const Bounce = styled.div`animation: 2s ${keyframes`${bounceInLeft}`}`;

    return(
        <section>
            <h2 id="about">About Me</h2>
            
            {/* use imported photo as source for image tage */}
            <Bounce><img src={BeachPhoto} className="beach" style={{ height: 200, width: 200 }} alt="Alli on the beach" /></Bounce>

            <div className="about-text">
                <p>Front-end web developer with a background in management, marketing and graphic design aspiring to create 
                    polished, user-friendly websites and applications.
                    <br/>
                    I began my coding adventure just a short time ago, when I enrolled in the Full Stack Coding Bootcamp 
                    at SMU in Dallas. It was a short but extremely intense journey that I managed to excell in 
                    while maintaining a full time job. It was no easy feat but I came out at the top of my cohort
                    with newly developed skills in CSS, JavaScript and responsive design, as well as the MERN stack.
                    <br/>
                    My passions lie in food, music, gardening and art. I have a keen eye for design, strong attention to detail,
                    excellent time management skills, and an easy-going attitude that is ideal for team work. While I am a 
                    hard worker, I value my free time to explore my hobbies and spend time with friends and family. 
                </p>
            </div>
        </section>
    );
}

export default About;