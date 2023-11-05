import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './ProductInfo.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const ProductInfo = () => {
  const  {id} = useParams()
  const navigate=useNavigate()
  //store  product  data coming in object
  const[product,setProduct]=useState({})

const deleteProduct =async()=>{
    const response = await axios.delete("https://653fe42e45bedb25bfc16911.mockapi.io/PMS/"+id)
    if(response.status==200){
      navigate("/")
    }else{
      alert("something wrong while deleting the item")
    }
}



  const fetchProductInfo=async()=>{
    const response =await axios.get("https://653fe42e45bedb25bfc16911.mockapi.io/PMS/"+id)
    setProduct(response.data)
  }
  useEffect(()=>{
    fetchProductInfo()
  },[])
console.log(product)
  return (
<>
    <Navbar/>
      <div  className='card'>
     <img  src={product.productImage} alt="Product Image" />
    <h2 className="product-name">{product.productName}</h2>
    <p className="product-description">{product.productDescription}</p>
    <p>{product.productMaterial}</p>
    <button onClick={deleteProduct}>Delete</button>
    </div>
    </>
  )
}
export default ProductInfo