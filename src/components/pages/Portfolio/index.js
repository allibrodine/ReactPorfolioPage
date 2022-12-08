import React, { useState } from 'react';
//import photos for cards
import TwistedRecipes from '../../../assets/images/TwistedRecipes.jpg';
import GrowTime from '../../../assets/images/GrowTime.jpg';
import TechBlog from '../../../assets/images/TechBlog.jpg';
import ZooKeepr from '../../../assets/images/ZooKeepr.jpg';
import Taskmaster from '../../../assets/images/Taskmaster.jpg';
import TooGood from '../../../assets/images/TooGood.jpg';
//import fontawesome for github icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
//import react animations
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
//modals
import Good from '../Modal/TooGood';


function Portfolio() {
    const Fade = styled.div`animation: 2s ${keyframes`${fadeInDown}`}`;

    //hooks for modals
    const [open, setOpen] = useState(false);

    return(
        <>
        <div className="container-fluid">
            <section id="portfolio" className="portfolio">
                <h2>Portfolio</h2>
                <div className="row">
                <div className="col-4">
                        <Fade><div className="card" onClick={() => setOpen(true)} >
                            <h3 className="card-title d-inline-flex" id="waste">Too Good To Waste<a href="https://github.com/dmadon/too-good-to-waste" target="blank" className="mx-2"><FontAwesomeIcon icon={faGithub} className="git" /></a></h3>
                            <div id="too-good">
                                <img src={TooGood} alt="Too Good To Waste" className="img-fluid"/>
                            </div>
                        </div></Fade>
                    </div>          
                    <div className="col-4">
                        <Fade><div className="card">
                            <h3 className="card-title d-inline-flex" id="twisted">Twisted Recipes<a href="https://github.com/allibrodine/TwistedRecipes" target="blank" className="mx-2"><FontAwesomeIcon icon={faGithub} className="git" /></a></h3>
                            <div id="recipes">
                                <a href="https://alli-twistedrecipes.herokuapp.com/">
                                    <img src={TwistedRecipes} alt="Twisted Recipes" className="img-fluid"/>
                                </a>
                            </div>
                        </div></Fade>
                    </div>        
                    <div className="col-4">
                        <Fade><div className="card">
                            <h3 className="card-title d-inline-flex" id="grow">Grow Time<a href="https://github.com/allibrodine/GrowTime" target="blank" className="mx-2"><FontAwesomeIcon icon={faGithub} className="git" /></a></h3>
                            <div id="grow-time">
                                <a href="https://allibrodine.github.io/GrowTime/">
                                    <img src={GrowTime} alt="GrowTime" className="img-fluid"/>
                                </a>
                            </div>
                        </div></Fade>        
                    </div> 
                    <div className="col-4">
                        <Fade><div className="card">
                            <h3 className="card-title d-inline-flex" id="blog">The Tech Blog<a href="https://github.com/allibrodine/TheTechBlog" target="blank" className="mx-2"><FontAwesomeIcon icon={faGithub} className="git" /></a></h3>
                            <div id="tech">
                                <a href="https://alli-thetechblog.herokuapp.com/">
                                    <img src={TechBlog} alt="The Tech Blog" className="img-fluid"/>
                                </a>
                            </div>
                        </div></Fade>
                    </div>     
                    <div className="col-4">
                        <Fade><div className="card">
                            <h3 className="card-title d-inline-flex" id="keepr">Zoo Keepr<a href="https://github.com/allibrodine/ZooKeepr" target="blank" className="mx-2"><FontAwesomeIcon icon={faGithub} className="git" /></a></h3>
                            <div id="zoo">
                                <a href="https://alli-zookeepr.herokuapp.com/">
                                    <img src={ZooKeepr} alt="Zoo Keepr" className="img-fluid"/>
                                </a>
                            </div>
                        </div></Fade>
                    </div>            
                    <div className="col-4">
                        <Fade><div className="card">
                            <h3 className="card-title d-inline-flex" id="task">Taskmaster Pro<a href="https://github.com/allibrodine/TaskmasterPro" target="blank" className="mx-2"><FontAwesomeIcon icon={faGithub} className="git" /></a></h3>
                            <div id="taskmaster">
                                <a href="https://allibrodine.github.io/TaskmasterPro/">
                                    <img src={Taskmaster} alt="Taskmaster Pro" className="img-fluid"/>
                                </a>
                            </div>
                        </div></Fade>        
                    </div>        
                </div>
            </section>        
        </div> 

        <Good onClose={() => setOpen(false)} show={open} />
        </> 
    )
}

export default Portfolio;