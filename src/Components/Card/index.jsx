import { useContext } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';


const Card = ({category,  description, id, image, price, rating, title}) => {
  const context = useContext(ShoppingCartContext)
  const showProduct = (productDetail) =>{
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }
  const addProductsToCard = (event, productData) =>{
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts,productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
    console.log('CART',context.cartProducts)
  }
  return(
    <div 
      className='bg-white cursor-default w-56 h-60 rounded-lg'
      onClick={() => showProduct({category, description,id, image, price, rating, title})}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</span>
        <img className='w-full h-full object-cover rounded-lg' src={image} alt={description} />
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(event)=>addProductsToCard(event,{category,  description, id, image, price, rating, title})} 
          >  
          <PlusIcon
            className='h-6 w-6 text-black'
          >
          </PlusIcon>
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  )
}

export default Card