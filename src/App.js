import React, { useState } from 'react';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Skills from './components/pages/Skills';
import Nav from './components/Nav';
import './App.css';
//import fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  document.title = 'Alli Brodine'

  //implement useState hook to display pages
  const [currentPage, setCurrentPage] = useState('About');

  //function to handle page changes
  const handlePageChange = (newPage) => setCurrentPage(newPage);

  //render pages according to what is selected
  const renderPage = () => {
      if (currentPage === 'Portfolio') {
          return <Portfolio />;
      }
      if (currentPage === 'Contact') {
          return <Contact />
      }
      if (currentPage === 'Skills') {
          return <Skills />
      }
      //default to About page
      return <About />
  };

  return (
    <div className="wrapper">
      <header className="d-flex">

        <h1 className="name-header">Alli Brodine</h1>

          <div>
            {/* set up props for Nav component */}
            <Nav currenPage={currentPage} handlePageChange={handlePageChange} />
          </div>

      </header>

          <main>
            {/* conditionally render the page selected */}
            {renderPage()}
          </main>
         
      
          <footer className="container-fluid">
            <div className="d-flex justify-content-center fixed-bottom">
              <a href="https://www.facebook.com/alli.brodine/" target="blank" className="d-inline-flex mx-2"><FontAwesomeIcon icon={faFacebook} size="4x" className="icon" /></a>
              <a href="https://www.instagram.com/allibrodine/?hl=en" target="blank" className="d-inline-flex mx-2"><FontAwesomeIcon icon={faInstagram} size="4x" className="icon" /></a>
              <a href="https://www.linkedin.com/in/alli-brodine-8826a6224/" target="blank" className="d-inline-flex mx-2"><FontAwesomeIcon icon={faLinkedin} size="4x" className="icon" /></a>
              <a href="https://github.com/allibrodine/" target="blank" className="d-inline-flex mx-2"><FontAwesomeIcon icon={faGithub} size="4x" className="icon" /></a>
            </div>
          </footer>
      </div>

  );
}

export default App;
