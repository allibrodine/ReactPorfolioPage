import React from 'react';
import BeachPhoto from '../../../assets/images/OntheBeach.jpg';

//create About section
function About() {
    return(
        <section>
            <h2 id="about">About Me</h2>
            {/* use imported photo as source for image tage */}
            <img src={BeachPhoto} style={{ height: 100, width: 100 }} alt="Alli on the beach" />
            <p>I am just getting started on my journey as a web developer. Learning is in progress but I am 
                getting better every day. I have a good eye for design so I hope to focus my career on front 
                end development to start and then see where that takes me.</p>
        </section>
    );
}

export default About;