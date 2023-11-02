import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AddProduct from './pages/Addproduct/AddProduct'
import { ProductInfo } from './pages/product info/ProductInfo'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addproduct" element={<AddProduct/>} />
        <Route path="/productInfo" element={<ProductInfo/> } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
