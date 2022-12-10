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
import Twisted from '../Modal/Twisted';
import Grow from '../Modal/Grow';
import Blog from '../Modal/Blog';
// import Zoo from '../Modal/Zoo';
// import Task from '../Modal/Task';


function Portfolio() {
    const Fade = styled.div`animation: 2s ${keyframes`${fadeInDown}`}`;

    //hooks for modals
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [view, setView] = useState(false);
    const [value, setValue] = useState(false);
    // const [display, setDisplay] = useState(false);
    // const [drop, setDrop] = useState(false);

    return(
        <>
        <div className="container-fluid">
            <section id="portfolio" className="portfolio">
                <h2>Portfolio</h2>
                <div className="row">
                <div className="col-4">
                        <Fade><div className="card" onClick={() => setOpen(true)} >
                            <h3 className="card-title d-inline-flex" id="waste">Too Good To Waste</h3>
                            <div id="too-good">
                                <img src={TooGood} alt="Too Good To Waste" className="img-fluid"/>
                            </div>
                        </div></Fade>
                    </div>          
                    <div className="col-4">
                        <Fade><div className="card" onClick={() => setShow(true)}>
                            <h3 className="card-title d-inline-flex" id="twisted">Twisted Recipes</h3>
                            <div id="recipes">
                                <img src={TwistedRecipes} alt="Twisted Recipes" className="img-fluid"/>
                            </div>
                        </div></Fade>
                    </div>        
                    <div className="col-4">
                        <Fade><div className="card" onClick={() => setView(true)}>
                            <h3 className="card-title d-inline-flex" id="grow">GrowTime</h3>
                            <div id="grow-time">
                                <img src={GrowTime} alt="GrowTime" className="img-fluid"/>
                            </div>
                        </div></Fade>        
                    </div> 
                    <div className="col-4">
                        <Fade><div className="card" onClick={() => setValue(true)}>
                            <h3 className="card-title d-inline-flex" id="blog">The Tech Blog</h3>
                            <div id="tech">
                                <img src={TechBlog} alt="The Tech Blog" className="img-fluid"/>
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
        <Twisted onClose={() => setShow(false)} show={show} />
        <Grow onClose={() => setView(false)} show={view} />
        <Blog onClose={() => setValue(false)} show={value} />
        </> 
    )
}

export default Portfolio;

//<a href="https://github.com/dmadon/too-good-to-waste" target="blank" className="mx-2"><FontAwesomeIcon icon={faGithub} className="git" /></a>
//<a href="https://github.com/allibrodine/TwistedRecipes" target="blank" className="mx-2"><FontAwesomeIcon icon={faGithub} className="git" /></a>
//<a href="https://github.com/allibrodine/GrowTime" target="blank" className="mx-2"><FontAwesomeIcon icon={faGithub} className="git" /></a>
//<a href="https://github.com/allibrodine/TheTechBlog" target="blank" className="mx-2"><FontAwesomeIcon icon={faGithub} className="git" /></a>