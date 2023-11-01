import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
    <a href="/">Home</a>
    {/* <a href="/AddProduct">Add Product</a>*/}
    <Link to="/AddProduct">AddProduct</Link>

    
</div>

  )
}

export default Navbar