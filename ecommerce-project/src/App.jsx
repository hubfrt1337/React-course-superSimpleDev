import { Homepage } from './pages/Homepage'
import { Routes, Route} from 'react-router'
import {CheckoutPage } from './pages/checkout/CheckoutPage'
import { Orders } from './pages/Orders'
import { Tracking } from './pages/Tracking'
import { NotFound } from './pages/NotFound'
import './App.css'


function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="checkout" element={<CheckoutPage />}> </Route>
      <Route path="orders" element={<Orders />} />
      <Route path="tracking" element={<Tracking />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  )
}

export default App
