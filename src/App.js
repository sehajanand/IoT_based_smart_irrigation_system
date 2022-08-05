import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Datadisplay from './Components/Datadisplay';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main><Datadisplay /><About/><Contact/></main>
      <footer> Copyright &copy; Team NIT Srinagar </footer>
    </>
  );
}

export default App;
