import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AddProduct from './pages/Addproduct/AddProduct'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addproduct" element={<AddProduct/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
