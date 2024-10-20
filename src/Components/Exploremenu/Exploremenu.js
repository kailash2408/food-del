import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const Exploremenu = () => {
  return (
    <div className='explore-menu'>
        <h1>Explore our menu</h1>
        <p>lorum</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return (<div key={index} className='explore-menu-list-item'>
                    <img className='explore-menu-img' src={item.menu_image} alt=''/>
                    <p>{item.menu_name}</p>
                </div>)
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Exploremenu
