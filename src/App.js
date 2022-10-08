import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <header className="d-inline-flex">
        <h1>Alli Brodine</h1>
        <Nav></Nav>
      </header>

      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
  
      <footer>
        <a href="https://www.facebook.com/alli.brodine/" target="blank">Facebook</a>
        <a href="https://www.instagram.com/allibrodine/?hl=en" target="blank">Instagram</a>
        <a href="https://www.linkedin.com/in/alli-brodine-8826a6224/" target="blank">LinkedIn</a>
      </footer>
    </div>
  );
}

export default App;
