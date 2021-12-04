import React, {useState} from 'react'
import './Nav.style.css'

import {Link} from 'react-router-dom'
import {pages} from '../../data'
import {HamburgerIcon, WishlistIcon, CartIcon, SearchIcon} from '../../ui'

const Nav = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  }

  const resetToggle = () => {
    setToggle(false);
  };

  return (
    <header id="header">
      <nav id="nav">
        <div className="nav container">
          <h1 className="nav-logo">
            <Link to="/" onClick={resetToggle}>
              Store logo
            </Link>
          </h1>
          <div className={ `nav__links ${toggle ? 'active' : ''}` }>
            <ul className="nav__links__menu">
              {pages.map(page =>
                <li className="nav__links__menu-item">
                    <Link to={page.path} onClick={resetToggle}>{page.name}</Link>
                  </li>
              )
            }
            </ul>
            <div className="nav__links__search">
              <div className="nav__links__search__container">
                <input className="nav__links__search-input" placeholder="search" />
                <SearchIcon />
              </div>
            </div>
            <Link to="/wishlist" className="nav__links-wishlist" onClick={resetToggle}>
                <WishlistIcon />
            </Link>
            <Link to="/cart" className="nav__links-cart" onClick={resetToggle}>
                <CartIcon />
            </Link>
          </div>
          <button className="nav__hamburger" onClick={handleClick}>
            <HamburgerIcon />
          </button>
        </div>
      </nav> 
    </header>
  )
}

export default Nav
