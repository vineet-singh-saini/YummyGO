import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import  StoreContextProvider  from './Context/StoreContext.jsx'
import DeliveryContextProvider from './Context/FormContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
    <DeliveryContextProvider>
    {/* <StrictMode> */}
      
      <App />
      
    {/* </StrictMode> */}
    </DeliveryContextProvider>
    </StoreContextProvider>
  </BrowserRouter>
)
