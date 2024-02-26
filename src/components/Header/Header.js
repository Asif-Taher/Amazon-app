import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
export default function Header() {
  return (
   <nav className='header'>
      <img src={logo} alt="" />
      <div>
      <a href="/Shop">Shop</a>
      <a href="/Order">Order</a>
      <a href="/Inventory">Inventory</a>
      <a href="/About">About</a>
      </div>
   </nav>
  )
}
