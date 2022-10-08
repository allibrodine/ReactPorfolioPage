import React from 'react';
//import photos for cards
import TwistedRecipes from '../../assets/images/TwistedRecipes.jpg';
import GrowTime from '../../assets/images/GrowTime.jpg';
import TechBlog from '../../assets/images/TechBlog.jpg';
import ZooKeepr from '../../assets/images/ZooKeepr.jpg';
import Taskmaster from '../../assets/images/Taskmaster.jpg';
import WorkDay from '../../assets/images/WorkDay.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Portfolio() {
    return(
        <div className="container-fluid">
            <section id="portfolio" className="portfolio">
                <h2>Portfolio</h2>
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <h3 className="card-title">Twisted Recipes<FontAwesomeIcon icon={faGithub} /></h3>
                            <div id="recipes">
                                <a href="https://alli-twistedrecipes.herokuapp.com/">
                                    <img src={TwistedRecipes} alt="Twisted Recipes" className="img-fluid"/>
                                </a>
                            </div>
                        </div>
                    </div>        
                    <div className="col-6">
                        <div className="card">
                            <h3 className="card-title">Grow Time<FontAwesomeIcon icon={faGithub} /></h3>
                            <div id="grow-time">
                                <a href="https://allibrodine.github.io/GrowTime/">
                                    <img src={GrowTime} alt="GrowTime" className="img-fluid"/>
                                </a>
                            </div>
                        </div>        
                    </div> 
                    <div className="col-6">
                        <div className="card">
                            <h3 className="card-title">The Tech Blog<FontAwesomeIcon icon={faGithub} /></h3>
                            <div id="recipes">
                                <a href="https://alli-thetechblog.herokuapp.com/">
                                    <img src={TechBlog} alt="The Tech Blog" className="img-fluid"/>
                                </a>
                            </div>
                        </div>
                    </div>     
                    <div className="col-6">
                        <div className="card">
                            <h3 className="card-title">Zoo Keepr<FontAwesomeIcon icon={faGithub} /></h3>
                            <div id="recipes">
                                <a href="https://alli-zookeepr.herokuapp.com/">
                                    <img src={ZooKeepr} alt="Zoo Keepr" className="img-fluid"/>
                                </a>
                            </div>
                        </div>
                    </div>            
                    <div className="col-6">
                        <div className="card">
                            <h3 className="card-title">Taskmaster Pro<FontAwesomeIcon icon={faGithub} /></h3>
                            <div id="taskmaster">
                                <a href="https://allibrodine.github.io/TaskmasterPro/">
                                    <img src={Taskmaster} alt="Taskmaster Pro" className="img-fluid"/>
                                </a>
                            </div>
                        </div>        
                    </div>        
                    <div className="col-6">
                        <div className="card">
                            <h3 className="card-title">Work Day Scheduler<FontAwesomeIcon icon={faGithub} /></h3>
                            <div id="work-day">
                                <a href="https://allibrodine.github.io/WorkDayScheduler/">
                                    <img src={WorkDay} alt="Work Day Scheduler" className="img-fluid"/>
                                </a>
                            </div>
                        </div>
                    </div>          
                </div>
            </section>          
        </div>  
    )
}

export default Portfolio;