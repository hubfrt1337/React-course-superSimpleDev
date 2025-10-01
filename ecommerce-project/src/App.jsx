import { Homepage } from './pages/Homepage'
import { Routes, Route} from 'react-router'
import {CheckoutPage } from './pages/CheckoutPage'
import { Orders } from './pages/Orders'
import './App.css'


function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="checkout" element={<CheckoutPage />}> </Route>
      <Route path="orders" element={<Orders />} />
    </Routes>
    
  )
}

export default App
