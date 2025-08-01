import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'

const Menu = ({category , setCategory}) => {
  return (
    <>
        <div className="menu-div">
            <div className="menu" id='menu'>
                <h1>Explore Our Menu</h1>
                <p className="menu-text">
                    Choose From a Diverse menu featuring a delectable array
                </p>
                <div className="menu-list">
                    {menu_list.map((item,index) => {
                        return (
                            <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)} key={index} className='menu-list-item'>
                                {console.log(category)}
                                <img src={item.menu_image} alt="" className={category === item.menu_name ? "active" : ""}/>
                                <p className='menu-list-item-name'>{item.menu_name}</p>
                            </div>
                        )
                        
                    })}
                </div>
            </div>
            <hr className='menu-hrline' />
        </div>
    </>
  )
}

export default Menu