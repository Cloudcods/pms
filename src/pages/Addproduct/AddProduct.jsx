import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './AddProduct.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// first approach
 const AddProduct = () => {
  const navigate=useNavigate()
// const[productImage,setProductImage]=useState("")
// const[productName,setProductName]=useState("")
// const[productDescription,setProductDescription]=useState("")
// const[productMaterial,setProductMaterial]=useState("")
 
// const addProduct = async (e) =>{
//     e.preventDefault()
   // const response = await axios.post("https://653fe42e45bedb25bfc16911.mockapi.io/PMS",{
//         productImage:productImage,
//         productDescription:productDescription,
//         productMaterial:productMaterial,
//         productName:productName

// })
// console.log(response)
// }

// second approach
// const addProduct =async (e) =>{{
//   e.preventDefault()
//   const formData=new FormData(e.currentTarget);
//   const data= Object.fromEntries(formData)
//   console.log(data)
//   // console.log(formData.get('productMaterial'))
  // const response= await axios.post("https://653fe42e45bedb25bfc16911.mockapi.io/PMS",data)
//   console.log(response)

// }

// Third approach
const [data,setData]=useState({

  productName:"",
  productDescription:"",
  productMaterial:"",
  productImage:"",
})
const handleChange=(e)=>{
const{name,value}=e.target
setData({
      ...data,
  [name]:value
})
}
console.log(data)





const addProduct=async (e)=>{
e.preventDefault()
 const response = await axios.post("https://653fe42e45bedb25bfc16911.mockapi.io/PMS",data)
if(response.status==201){
  alert("product is added succesfully")
  navigate("/")
}else{
  alert("something is wrong!")
}
  
}


  return (
    <>
    <Navbar />

    <div id="product-form">
    <h2>Product Information</h2>
    <form onSubmit={addProduct}>
      <label htmlFor="productImage">Product Image:</label>
      <input type="text" id="productImage" name="productImage" onChange={handleChange}/> 
      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName"onChange={handleChange}/>
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4" onChange={handleChange}></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial" onChange={handleChange}/>
      

      {/* <input type="text" id="productImage" name="productImage"/> 
      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName"/>
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4"></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial" />
       */}

      <button type="submit">Submit</button>
    </form>
  </div>
    </>
  )
  }

export default AddProduct