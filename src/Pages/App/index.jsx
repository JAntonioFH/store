import { BrowserRouter } from 'react-router-dom'

import { ContextProvider } from '../../Context'

import {AppRoutes} from './Routes'
import {NavBar} from '../../Components/Navbar'




function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar/>
        <AppRoutes/>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
