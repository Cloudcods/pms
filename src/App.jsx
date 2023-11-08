import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AddProduct from './pages/Addproduct/AddProduct'
import { ProductInfo } from './pages/ProductInfo/ProductInfo'
import EditProduct from './pages/Addproduct/EditProduct'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addproduct" element={<AddProduct/>} />
        <Route path="/productInfo/:id" element={<ProductInfo/> } />
        <Route path="/editProduct/:id" element={<EditProduct />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
