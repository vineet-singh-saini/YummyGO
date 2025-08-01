import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'

import { useState } from 'react'
import Login from './Components/Login/Login'
import DeliveryInfo from './Pages/PlaceOrder/DeliveryInfo'
import LivePage from './Pages/LiveLocationPage/LivePage'

function App() {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
      <Navbar setShowLogin={setShowLogin} />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/delivery-info' element={<DeliveryInfo/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        
        <Route path='/delivery-agent-live-tracking' element={<LivePage/>} />
      </Routes>
    </div>
  )
}

export default App
