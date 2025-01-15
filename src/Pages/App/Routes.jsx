import { useRoutes} from 'react-router-dom'
import {Home} from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { SignIn } from '../Signin'
import { NotFound } from '../NotFound'

function AppRoutes() { 
    let routes = useRoutes([
      {path: '/',element: <Home/>},
      {path: '/myaccount',element: <MyAccount/>},
      {path: '/myorder',element: <MyOrder/>},
      {path: '/myorders',element: <MyOrders/>},
      {path: '/signin',element: <SignIn/>},
      {path: '*',element: <NotFound/>}
    ])
    return routes
  }

  export {AppRoutes};