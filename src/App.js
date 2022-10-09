import './App.css';
import PortfolioContainer from './components/PortfolioContainer';
//import fontawesome for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  document.title = 'Alli Brodine'
  return (
    <div>
      <header className="d-inline-flex">
        <h1>Alli Brodine</h1>
      </header>

      <main>
        <PortfolioContainer />
      </main>
  
      <footer className="container-fluid">
        <div className="d-flex justify-content-center fixed-bottom">
          <a href="https://www.facebook.com/alli.brodine/" target="blank" className="d-inline-flex mx-2"><FontAwesomeIcon icon={faFacebook} size="2xl" /></a>
          <a href="https://www.instagram.com/allibrodine/?hl=en" target="blank" className="d-inline-flex mx-2"><FontAwesomeIcon icon={faInstagram} size="2xl" /></a>
          <a href="https://www.linkedin.com/in/alli-brodine-8826a6224/" target="blank" className="d-inline-flex mx-2"><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
          <a href="https://github.com/allibrodine/" target="blank" className="d-inline-flex mx-2"><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
