import { useContext, useState } from 'react'
import './style.css'
import {XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'

const checkoutSiteMenu = () =>{
  const context = useContext(ShoppingCartContext) 
  console.log('Product to show', context.cartProducts)

  return(
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex': 'hidden'} checkout-side-menu flex flex-col fixed right-0 border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div 
          onClick={() =>{
            context.closeCheckoutSideMenu()
          }}
        > 
          <XMarkIcon  
            className="h-6 w-6 text-black-500 cursor-pointer" 
          />
        </div>
      </div>
      <div className='px-6'>
        {
          context.cartProducts.map( product =>(
            <OrderCard
              key={product.id} 
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        }  
      </div>
    </aside>
  )
}

export default checkoutSiteMenu  