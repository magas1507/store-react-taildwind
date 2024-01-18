// lo llamamos para poder crear el estado global
import { createContext, useState } from 'react'

// creanos el proveedor como si fuera una variable
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

  const [count, setCount] = useState(0)
  const [isProductDetailOpen,setIsProductDetailOpen ] = useState(false)

  const openProductDetail = ( ) => setIsProductDetailOpen(true)
  const closeProductDetail = ( ) => setIsProductDetailOpen(false)

  //product Detail . show product
  const [productToShow,setProductToShow ] = useState({})
  const [cartProducts,setCartProducts] = useState([])  



  return (
    //grapper que encapsula y provee la información del contexto
    <ShoppingCartContext.Provider value={{
      count, 
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen, 
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}