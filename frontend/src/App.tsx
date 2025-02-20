import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Productspage } from './pages/Productspage'
import { Cart } from './pages/Cart'




function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home placeholder="What are you looking for?"/>}/>
          <Route path="/products" element={<Productspage/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
