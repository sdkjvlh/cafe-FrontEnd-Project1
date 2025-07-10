import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './Home.jsx'
import { About } from './About.jsx'
import { Product } from './Product.jsx'
import { CartProvider } from './CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Product' element={<Product/>} />
    </Routes>
    </BrowserRouter>
    </CartProvider>

    
  </StrictMode>
)
