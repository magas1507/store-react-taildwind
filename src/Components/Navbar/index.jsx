import { NavLink } from "react-router-dom"

const Navbar = () =>{
  const activeStyle = 'underline underline-offset-4'
  return(
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 font-ligth'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li> 
        <li>
          <NavLink 
            to='/'
            className={({ isActive }) =>
             isActive ? activeStyle : undefined
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/clothes'
            className={({ isActive }) =>
             isActive ? activeStyle : undefined
            }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/electronis'
            className={({ isActive }) =>
             isActive ? activeStyle : undefined
            }
          >
            Electronis
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/furnitures'
            className={({ isActive }) =>
             isActive ? activeStyle : undefined
            }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/toys'
            className={({ isActive }) =>
             isActive ? activeStyle : undefined
            }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/others'
            className={({ isActive }) =>
             isActive ? activeStyle : undefined
            }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          <NavLink 
            to='/' 
            className={({ isActive }) =>
             isActive ? activeStyle : undefined
            }
          >
            magas@gmail.com
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
              }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/my-orders'
            className={({ isActive }) =>
             isActive ? activeStyle : undefined
            }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/sing-in'
            className={({ isActive }) =>
            isActive ? activeStyle : undefined
           } 
          >
            Sing In
          </NavLink>
        </li>
        <li>
          <NavLink >
            🛒0
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;  