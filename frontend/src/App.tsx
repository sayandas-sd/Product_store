import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Productspage } from './pages/Productspage'
import { Cart } from './pages/Cart'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'




function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home placeholder="What are you looking for?"/>}/>
          <Route path="/products" element={<Productspage/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
