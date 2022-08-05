import React,{useState} from 'react';
import './Navbar.css';
import Hamburger from 'hamburger-react';
import logo from '../Assets/Logo2-removebg-preview.png';
// import SlideOutMenuContainer from './SlideOutMenuContainer';

export default function Navbar() {
  let [toggleValue,setToggleValue]=useState(false);
  const [isOpen, setOpen] = useState(false);
  const toggleShow=()=>{
    setToggleValue(!toggleValue);
    console.log(toggleValue);
  };
  return (
    <>
    <nav ><img src={logo} alt="LOGO" /><p className='header-heading'>Irrygate</p><div onClick={toggleShow} ><Hamburger toggled={isOpen} toggle={setOpen}  /></div> 
      </nav>
          <div className="hamburger-nav" style={(toggleValue)===true?{display:'block'}:{display:'none'}} ><ul><li><a href="/">Home</a></li><li><a href="/">About</a></li><li><a href="/">Contact</a></li></ul></div>
    </>
  )
}
