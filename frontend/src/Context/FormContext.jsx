import React, { createContext, useState } from 'react'

export const DeliveryContext = createContext();

const DeliveryContextProvider = (props) => {

    const [deliverydata , setDeliveryData] = useState(null);

    const contextValue = {
      deliverydata,
        setDeliveryData,
    }

  return (
    <DeliveryContext.Provider value={contextValue}>
        {props.children}
    </DeliveryContext.Provider>
    
  )
}

export default DeliveryContextProvider