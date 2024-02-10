// lo llamamos para poder crear el estado global
import { createContext, useState } from 'react'

// creanos el proveedor como si fuera una variable
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

  //shopping cart . Increment quantity
  const [count, setCount] = useState(0)
  
  //Product Detail . Open/Close
  const [isProductDetailOpen,setIsProductDetailOpen ] = useState(false)
  const openProductDetail = ( ) => setIsProductDetailOpen(true)
  const closeProductDetail = ( ) => setIsProductDetailOpen(false)

   //checkou side Menu . Open/Close
   const [isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen ] = useState(false)
   const openCheckoutSideMenu = ( ) => setIsCheckoutSideMenuOpen(true)
   const closeCheckoutSideMenu = ( ) => setIsCheckoutSideMenuOpen(false)
 

  //product Detail . show product
  const [productToShow,setProductToShow ] = useState({})
  
  //shopping cart . add products to cart
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
      setCartProducts,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      isCheckoutSideMenuOpen,
      setIsCheckoutSideMenuOpen
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}