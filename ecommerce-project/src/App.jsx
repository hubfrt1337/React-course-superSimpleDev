import { Homepage } from './pages/Homepage'
import { Routes, Route} from 'react-router'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="checkout" element={<div>Test checkout page</div>}> </Route>
    </Routes>
    
  )
}

export default App
