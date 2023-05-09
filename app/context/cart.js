import { createContext, useState } from "react"

export const CartData = createContext(null)

function Context({ children }) {
  const [cart, setCart] = useState([])

  return (
    <CartData.Provider value={{ cart, setCart }}>
      {children}
    </CartData.Provider>
  )
}

export default Context
