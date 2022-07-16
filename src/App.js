import './App.css';
import Datadisplay from './Components/Datadisplay';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main><Datadisplay /></main>
      <footer>&copy; Copyright NIT Srinagar </footer>
    </>
  );
}

export default App;
