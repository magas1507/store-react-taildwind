import { useContext, useState } from 'react'
import './styles.css'
import {XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () =>{
  const context = useContext(ShoppingCartContext) 
  console.log('Product to show', context.productToShow)

  return(
    <aside className={`${context.isProductDetailOpen ? 'flex': 'hidden'} product-detail flex flex-col fixed right-0 border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Details</h2>
        <div 
          onClick={() =>{
            context.closeProductDetail()
          }}
        > 
          <XMarkIcon  className="h-6 w-6 text-black-500 cursor-pointer" />
        </div>
      </div>
      <figure className='px-6'>
        <img 
          className='w-full h-full rounded-lg'
          src={context.productToShow.image} 
          alt={context.productToShow.title} 
        />
      </figure>
      <p className='flex flex-col p-6 mb-2'>
        <span className='font-medium text-2xl'>{context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-ligth text-sm'>{context.productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail  