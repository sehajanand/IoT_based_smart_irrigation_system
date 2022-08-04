import React,{useState} from 'react';
import './Navbar.css';
import Hamburger from 'hamburger-react'

import logo from '../Assets/Logo2-removebg-preview.png';
// import SlideOutMenuContainer from './SlideOutMenuContainer';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);
  return (
    <>
    <nav ><img src={logo} alt="LOGO" /><p className='header-heading'>Irrygate</p><div onClick={()=>{
      setVisible(true);
    }}><Hamburger toggled={isOpen} toggle={setOpen}  /></div> <div>
                <ul id='slide_menu' style={{ display: (isOpen ? 'block' : 'none') }}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
          </div>
      </nav>
    </>
  )
}
