import React, { useState } from 'react'
import  './Nav.style.css'

const pages = ["home", "shop", "collections"];

const Nav = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  }
  return (
    <header id="header">
      <nav id="nav">
        <div className="nav container">
          <h1 className="nav-logo">Store logo</h1>
          <div className={ `nav__links ${toggle ? 'active' : ''}` }>
            <ul className="nav__links__menu">
              {pages.map(item => 
                  <li className="nav__links__menu-item">
                    <a href="/home">{item}</a>
                  </li>
              )
            }
            </ul>
            <div className="nav__links__search">
              <div className="nav__links__search__container">
                <input className="nav__links__search-input" placeholder="search" />
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8029 10.8565L9.53693 8.59723C10.268 7.66583 10.6647 6.51567 10.6632 5.33162C10.6632 4.27712 10.3505 3.24631 9.76469 2.36953C9.17885 1.49275 8.34616 0.809385 7.37194 0.405847C6.39771 0.00231009 5.3257 -0.103274 4.29147 0.102448C3.25724 0.308169 2.30724 0.815957 1.5616 1.5616C0.815957 2.30724 0.308169 3.25724 0.102448 4.29147C-0.103274 5.3257 0.00231009 6.39771 0.405847 7.37194C0.809385 8.34616 1.49275 9.17885 2.36953 9.76469C3.24631 10.3505 4.27712 10.6632 5.33162 10.6632C6.51567 10.6647 7.66583 10.268 8.59723 9.53693L10.8565 11.8029C10.9185 11.8653 10.9922 11.9149 11.0734 11.9487C11.1546 11.9826 11.2417 12 11.3297 12C11.4177 12 11.5048 11.9826 11.586 11.9487C11.6672 11.9149 11.7409 11.8653 11.8029 11.8029C11.8653 11.7409 11.9149 11.6672 11.9487 11.586C11.9826 11.5048 12 11.4177 12 11.3297C12 11.2417 11.9826 11.1546 11.9487 11.0734C11.9149 10.9922 11.8653 10.9185 11.8029 10.8565V10.8565ZM1.33291 5.33162C1.33291 4.54075 1.56743 3.76764 2.00681 3.11005C2.44619 2.45247 3.07071 1.93994 3.80138 1.63729C4.53205 1.33464 5.33605 1.25545 6.11173 1.40974C6.8874 1.56403 7.5999 1.94487 8.15913 2.5041C8.71836 3.06333 9.0992 3.77583 9.25349 4.55151C9.40779 5.32718 9.3286 6.13119 9.02594 6.86186C8.72329 7.59253 8.21077 8.21704 7.55318 8.65642C6.8956 9.09581 6.12249 9.33033 5.33162 9.33033C4.27109 9.33033 3.25401 8.90904 2.5041 8.15913C1.7542 7.40923 1.33291 6.39214 1.33291 5.33162Z" fill="black"/>
                </svg>
              </div>
            </div>
            <a href="#" className="nav__links-wishlist">
              <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4478 20L11.0438 19.6633C2.3569 12.5926 0 10.101 0 6.06061C0 2.6936 2.6936 0 6.06061 0C8.82155 0 10.3704 1.54882 11.4478 2.76094C12.5253 1.54882 14.0741 0 16.835 0C20.202 0 22.8956 2.6936 22.8956 6.06061C22.8956 10.101 20.5387 12.5926 11.8519 19.6633L11.4478 20ZM6.06061 1.3468C3.43434 1.3468 1.3468 3.43434 1.3468 6.06061C1.3468 9.49495 3.50168 11.7845 11.4478 18.2492C19.3939 11.7845 21.5488 9.49495 21.5488 6.06061C21.5488 3.43434 19.4613 1.3468 16.835 1.3468C14.4781 1.3468 13.1987 2.76094 12.1886 3.90572L11.4478 4.78114L10.7071 3.90572C9.69697 2.76094 8.41751 1.3468 6.06061 1.3468Z" fill="white"/>
              </svg>
            </a>
            <a href="#" className="nav__links-cart">
              <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4945 20C9.48756 20 10.2926 19.3153 10.2926 18.4706C10.2926 17.626 9.48756 16.9413 8.4945 16.9413C7.50144 16.9413 6.69641 17.626 6.69641 18.4706C6.69641 19.3153 7.50144 20 8.4945 20Z" fill="white"/>
                <path d="M19.4189 20C20.412 20 21.217 19.3153 21.217 18.4706C21.217 17.626 20.412 16.9413 19.4189 16.9413C18.4259 16.9413 17.6208 17.626 17.6208 18.4706C17.6208 19.3153 18.4259 20 19.4189 20Z" fill="white"/>
                <path d="M24.2776 1.89932C24.2033 1.82135 24.1095 1.75835 24.0031 1.71487C23.8967 1.67139 23.7803 1.64849 23.6623 1.64782H7.02398L7.54343 3.00725H22.6154L20.4817 11.1638H8.49442L4.8423 1.32836C4.8028 1.224 4.7342 1.12931 4.64235 1.05238C4.55051 0.975445 4.43815 0.918551 4.31486 0.886549L1.03834 0.0301134C0.937592 0.00378143 0.831733 -0.00541465 0.726806 0.0030501C0.62188 0.0115149 0.51994 0.0374747 0.426809 0.0794475C0.238723 0.164215 0.0979308 0.309061 0.0354061 0.482121C-0.0271185 0.655181 -0.00625409 0.842278 0.0934094 1.00225C0.193073 1.16223 0.363372 1.28198 0.566842 1.33516L3.43579 2.08284L7.1039 11.9386L5.79329 12.8495L5.6894 12.9378C5.36521 13.2556 5.18146 13.6595 5.16979 14.0801C5.15812 14.5007 5.31926 14.9116 5.62547 15.242C5.84328 15.4673 6.12007 15.6461 6.43368 15.7642C6.74729 15.8822 7.08903 15.9362 7.43155 15.9217H20.7694C20.9813 15.9217 21.1846 15.8501 21.3345 15.7227C21.4843 15.5952 21.5685 15.4223 21.5685 15.242C21.5685 15.0618 21.4843 14.8889 21.3345 14.7614C21.1846 14.6339 20.9813 14.5623 20.7694 14.5623H7.30368C7.21166 14.5597 7.122 14.5368 7.04337 14.4961C6.96473 14.4553 6.89979 14.398 6.8548 14.3297C6.80981 14.2614 6.78629 14.1843 6.78653 14.106C6.78677 14.0277 6.81075 13.9507 6.85616 13.8826L8.78211 12.5232H21.121C21.3057 12.527 21.4863 12.4763 21.632 12.3796C21.7777 12.283 21.8796 12.1464 21.9202 11.993L24.4535 2.47707C24.4778 2.37574 24.4746 2.27103 24.4441 2.17091C24.4136 2.07079 24.3567 1.9779 24.2776 1.89932Z" fill="white"/>
              </svg>
            </a>
          </div>
          <button className="nav__hamburger" onClick={handleClick}>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="20.5" stroke="#777777" stroke-opacity="0.1"/>
              <path d="M29 20H13C12.4 20 12 20.4 12 21C12 21.6 12.4 22 13 22H29C29.6 22 30 21.6 30 21C30 20.4 29.6 20 29 20ZM13 17H29C29.6 17 30 16.6 30 16C30 15.4 29.6 15 29 15H13C12.4 15 12 15.4 12 16C12 16.6 12.4 17 13 17ZM29 25H13C12.4 25 12 25.4 12 26C12 26.6 12.4 27 13 27H29C29.6 27 30 26.6 30 26C30 25.4 29.6 25 29 25Z" fill="#424242"/>
            </svg>
          </button>
        </div>
      </nav> 
    </header>
  )
}

export default Nav
