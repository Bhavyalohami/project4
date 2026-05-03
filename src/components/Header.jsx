import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { FiMenu, FiSearch, FiShoppingBag, FiX } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import logo from "../assets/logo.svg";

const Header = () => {

  const {cartItems} = useSelector(state=>state.cart)
  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`siteHeader ${isMenuOpen ? "menuOpen" : ""}`}>
      <div className="topNotice">
        <p>Free shipping over $1,000</p>
        <span>Trade-in boosts and bundle drops are live this week</span>
      </div>
      <nav className="mainNav">
        <Link to='/' className="brandMark" aria-label="LumaGear home" onClick={closeMenu}>
          <img src={logo} alt="LumaGear" />
        </Link>

        <div className="navLinks">
            <NavLink to='/' end onClick={closeMenu}>Shop</NavLink>
            <NavLink to='/deals' onClick={closeMenu}>Deals</NavLink>
            <NavLink to='/collections' onClick={closeMenu}>Collections</NavLink>
            <NavLink to='/compare' onClick={closeMenu}>Compare</NavLink>
            <NavLink to='/services' onClick={closeMenu}>Services</NavLink>
            <NavLink to='/journal' onClick={closeMenu}>Journal</NavLink>
            <NavLink to='/trade-in' onClick={closeMenu}>Trade-In</NavLink>
        </div>

        <div className="headerActions">
        <Link to="/collections" className="searchPill" onClick={closeMenu}>
          <FiSearch />
          <span>Find gear</span>
        </Link>
        <Link to='/cart' className="cartLink" aria-label={`Cart with ${cartQuantity} items`} onClick={closeMenu}>
          <FiShoppingBag />
          <p>{cartQuantity}</p>
        </Link>
        <button
          className="menuToggle"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
