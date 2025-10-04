import { Homepage } from './pages/Homepage'
import { Routes, Route} from 'react-router'
import {CheckoutPage } from './pages/checkout/CheckoutPage'
import { Orders } from './pages/Orders'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Tracking } from './pages/Tracking'
import { NotFound } from './pages/NotFound'
import './App.css'



function App() {
  const [cart, setCart] = useState([])
  useEffect(() => {
    axios.get("/api/cart-items?expand=product")
        .then((response) => {
            setCart(response.data)
        })
  }, []);
  return (
    <Routes>
      <Route index element={<Homepage cart={cart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart}/>}> </Route>
      <Route path="orders" element={<Orders cart={cart}/>} />
      <Route path="tracking" element={<Tracking />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  )
}

export default App
