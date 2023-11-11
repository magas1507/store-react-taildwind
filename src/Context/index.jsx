import { createContext } from "react";

const shoppingCardContext = createContext()

export const shoppingCardProvider = ({children}) =>{
  return(
    <shoppingCardContext.Provider>
      {chidren}
    </shoppingCardContext.Provider>
  )
}