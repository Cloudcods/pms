import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



const EditProduct = () => {
  const navigate=useNavigate()
    const{id}=useParams()
    const [product,setProduct]=useState({})


    const handleChange =(e)=>{
      const {name,value} = e.target
      setProduct({
        ...product,
        [name] : value
      })
      console.log(product)
    }

    // edit product
    const editProduct =async(e)=>{
      e.preventDefault()
      const response = await axios.put("https://653fe42e45bedb25bfc16911.mockapi.io/PMS/" + id, product)
    console.log(response)
    if(response.status=200){
      e.preventDefault()
    navigate("/ProductInfo/"+id)
    }else{
      alert("went someting wrong")
      
    }
  }


    //fetch products of id
    
  const fetchProduct=async()=>{
    const response =await axios.get("https://653fe42e45bedb25bfc16911.mockapi.io/PMS/"+ id)
    setProduct(response.data)
    console.log(product)

  

  }
  useEffect(()=>{
    fetchProduct()
  },[])
  
  return (
    <>
  <Navbar />

    <div id="product-form">
    <h2>EditProduct</h2>
    <form onSubmit={editProduct}>
      <label htmlFor="productImage">Product Image:</label>
      <input value={product.productImage} type="text" id="productImage" name="productImage" onChange={handleChange}/> 
      
      <label htmlFor="productName">Product Name:</label>
      <input value={product.productName} type="text" id="productName" name="productName" onChange={handleChange}/>
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea value={product.productDescription} id="productDescription" name="productDescription" rows="4" onChange={handleChange}></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input value={product.productMaterial} type="text" id="productMaterial" name="productMaterial" onChange={handleChange}/>
      

      <button type="submit">Update</button>
    </form>
  </div>
    </>
  )
  }
  


export default EditProduct