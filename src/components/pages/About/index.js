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
                <p>I am just getting started on my journey as a web developer. Learning is in progress but I am 
                    getting better every day. I have a good eye for design so I hope to focus my career on front 
                    end development to start and see where that takes me.
                    
                    <br/>
                    I began my coding adventure just a short time ago, when I enrolled in the Full Stack Coding Bootcamp 
                    at SMU in Dallas. It has been a short but extremely intense journey that I have managed to excell in 
                    while maintaining a full time job. It has been no easy feat but I have come out at the top of my class
                    and now I can't wait to make a much needed career change and continue on my journey in web development.
                    <br/>
                    My passions lie in food, music, gardening and art. I have always enjoyed the creative aspects of design
                    but also greatly appreciate logic and structure and, this is why I believe web development is an appropriate 
                    field for me.</p>
            </div>
        </section>
    );
}

export default About;