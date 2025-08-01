import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)

    return (
        <>
            <div className='food-display-div'>
                <div className="food-display">
                    <h2 className='food-display-txt'>Top {category === 'All' ? "Dishes" : category} Near You</h2>
                    <div className="food-display-list">
                        {food_list.map((item, index) => {
                            if (category === 'All' || category === item.category) {
                                return <FoodItem key={index} id={item.id} name={item.name} price={item.price} description={item.description} image={item.image} />

                            }


                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodDisplay