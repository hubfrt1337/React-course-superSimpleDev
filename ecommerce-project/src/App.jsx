import { Homepage } from './pages/Homepage'
import { Routes, Route} from 'react-router'
import {CheckoutPage } from './pages/CheckoutPage'
import './App.css'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="checkout" element={<CheckoutPage />}> </Route>
    </Routes>
    
  )
}

export default App
