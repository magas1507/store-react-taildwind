import { BrowserRouter, useRoutes } from 'react-router-dom';
import   Home   from '../Home'
import  MyAccount  from '../MyAccount '
import  MyOrder  from '../MyOrder';
import  MyOrders  from "../MyOrders";
import  NotFound  from "../NotFound";
import  SingIn  from "../SingIn";
import Navbar from '../../Components/Navbar';
import './App.css';
import { ShoppingCartProvider } from '../../Context'

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/* ', element: <NotFound  /> },
    { path: '/sing-In ', element: <SingIn  /> },    
  ])
  return routes
}
function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App;
