import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <Link to="/"><h3 className='none'>&#127858;MadangPedia</h3></Link>
      <nav>
        <Link to="/" className='none'>Home</Link>
        <Link to="/meals" className='none'>Meals</Link>
      </nav>
    </div>
  )
}

export default Navbar