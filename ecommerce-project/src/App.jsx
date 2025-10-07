import { Homepage } from './pages/home/Homepage'
import { Routes, Route} from 'react-router'
import {CheckoutPage } from './pages/checkout/CheckoutPage'
import { Orders } from './pages/orders/Orders'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Tracking } from './pages/Tracking'
import { NotFound } from './pages/NotFound'
import './App.css'



function App() {
  const [cart, setCart] = useState([])

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product")
            setCart(response.data)
    }

  useEffect(() => {
    
    loadCart();
  }, []);
  return (
    <Routes>
      <Route index element={<Homepage cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>}> </Route>
      <Route path="orders" element={<Orders cart={cart}/>} />
      <Route path="tracking/:orderId/:productId" element={<Tracking cart={cart}/>} />
      <Route path="*" element={<NotFound cart={cart}/>} />
    </Routes>
    
  )
}

export default App
