import React, { useState,  } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = ({setShowLogin}) => {
    const navigate = useNavigate()
    const [menu, setMenu] = useState('Home')
    return (
        <div className='navbardiv'>
            <div className="navbar">

                <div className="navimg">
                    <img src={assets.logo} alt="navlogo" onClick={ ()=> navigate('/')}/>
                </div>

                <div className="navlinks">
                    <ul>
                        <Link to={'/'} className={menu === 'Home' ? 'activenav' : '' } onClick={() => setMenu('Home')} >Home</Link>
                        <a href='#menu' className={menu ==='Menu' ? 'activenav' : '' } onClick={() => setMenu('Menu')} >Menu</a>
                        <a href='#mobile-app' className={menu === 'Mobile-App' ? 'activenav' : '' } onClick={() => setMenu('Mobile-App')} >Mobile-App</a>
                        <a href='#contact' className={menu === 'Contact' ? 'activenav' : '' } onClick={() => setMenu('Contact')} >Contact</a>
                    </ul>
                </div>

                <div className='navbtns'>
                    <div className="nav-search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="nav-basket-icon">
                        <Link to={'/cart'}><i className="fa-solid fa-basket-shopping"></i></Link>
                        <div className="dot"></div>
                    </div>
                    <button onClick={()=> setShowLogin(true)}>Create Account</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar