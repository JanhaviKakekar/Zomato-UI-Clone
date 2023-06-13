import React from 'react'
import "./header.css";

const Header = () => {
  return <div className='max-width header'>
  <img 
    src ='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' 
    alt='Zomato-logo'
    className='header-logo'
    />
    <div className='header-right'>
      <div className='header-location-search-container'>
        <div className='location-wrapper'>
          <div className='location-icon-name'>
          <i class="fi fi-rr-marker absolute-center location-icon"></i>
          <div>
            Banglore
          </div>

          </div>
          <i class="fi fi-rr-caret-down absolute-center"></i> 
        </div>
        <div className='location-search-separater'></div>
        <div className='header-search-bar'>
        <i class="fi fi-rr-search absolute-center search-icon"></i>
        <input placeholder='Seaarch for restuart, cuisine or a dish' className='search-input'/>
        </div>
      </div>
      <div className='profile-wrapper'>
        <img src ='https://images.unsplash.com/photo-1583638666708-5ba77a6f8bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=456&q=80'
        className='header-profile-image'/>
        <span className='header-username'>Janhavi</span>
        <i class="fi fi-rr-angle-small-down absolute-center profile-option-icon"></i>
       

      </div>
    </div>
    
  </div>
  
};

export default Header;