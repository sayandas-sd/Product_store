import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'

function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home placeholder="What are you looking for?"/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
