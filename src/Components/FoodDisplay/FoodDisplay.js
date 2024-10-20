import React from 'react'
import './FoodDisplay.css'
import { food_list } from '../../assets/frontend_assets/assets'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = () => {
  return (
    <div className='food-display'>
      <h2>Top Dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item,index)=>{
            return <FoodItem key={index} name={item.name} image={item.image} price={item.price} description={item.description} />
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
