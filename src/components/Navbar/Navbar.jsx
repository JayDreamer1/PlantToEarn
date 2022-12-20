import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/leaficon.png';
import { RiMenu3Line , RiCloseLine} from "react-icons/ri";


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About Us</a></p>
    <p><a href="#marketplace">Marketplace</a></p>
    </>
  )

  return (
    <div className='pte_navbar'>
      <div className='pte_nav-links'>
        <div className='pte_nav-links-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='pte_navbar-links_container font-medium'>
          <Menu />
        </div>
      </div>
      <div className='pte_nav-sign font-medium'>
          <button>Sign In</button>
        </div>
      <div className='pte_nav-menu'>
        {toggleMenu 
        ?
        <RiCloseLine color="#000000" size={27} onClick={() => setToggleMenu(false)} />
        :  
        <RiMenu3Line color="#000000" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='pte_nav-menu_container scale-up-center'>
            <div className='pte_nav-menu_container-links'>
            <Menu />
            <div className='pte_nav-menu_container-links-sign'>
              <button type="button">Sign up</button>
            </div>
            </div>
          </div>
        )}
      </div>  
    </div>
  )
}

export default Navbar