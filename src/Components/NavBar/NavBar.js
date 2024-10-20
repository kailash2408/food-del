import React from 'react'
import './NavBar.css'
import {assets} from '../../assets/frontend_assets/assets'

const NavBar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt=''/>
        <ul className='navbar-menu'>
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile App</li>
            <li>Contact us</li>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt=''/>
            <div className='navbar-cart-icon'>
                <img src={assets.basket_icon} alt=''/>
                <div className='dot'></div>
            </div>
            <button>sign in</button>
        </div>
    </div>
  )
}

export default NavBar
