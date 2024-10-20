import React from 'react'
import './Header.css'
import { assets } from '../../assets/frontend_assets/assets'

const Header = () => {
  return (
    <div className='header'>
        <img src={assets.header_img} alt="" className='header-img'/>
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>loram</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
