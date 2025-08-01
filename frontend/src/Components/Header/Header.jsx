import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <div className='headerdiv'>
        <div className="header">
            <div className="header-c1">
                <p>Order Your Favourite Food Here</p>
            </div>
            <div className="header-c2">
                <p>Choose From a Diverse Menu featuring a delectable array of dishes crafted with finest ingredients and culinary expertise.</p>
            </div>
            <div className="header-btn">
                <button>View Menu</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header