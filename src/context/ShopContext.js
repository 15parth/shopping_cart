import React, { createContext, useState } from "react";

export const shopContext = createContext(null);


{
    
}

export const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState()

  return <shopContext.Provider>{props.children}</shopContext.Provider>;
};
