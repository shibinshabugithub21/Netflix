import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/netflix.png";
import search from "../../assets/search.png";
import dropdown from "../../assets/dropdown.png";
import bell from "../../assets/bell.png";
import user from "../../assets/user.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navRef=useRef()

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = (e) => {
    // Close the dropdown if the click is outside the profile area or dropdown icon
    if (
      e.target.closest('.navbar-profile') === null ||
      e.target.closest('.dropdown-icon') === null
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', closeDropdown);
    } else {
      document.removeEventListener('click', closeDropdown);
    }

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [isDropdownOpen]);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY >=600){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="Search" className="icon" />
        <p>Children</p>
        <img src={bell} alt="Notifications" className="icon" />
        <div className="navbar-profile">
          <img src={user} alt="User Profile" className="profile" />
          <img
            src={dropdown}
            alt="Dropdown Icon"
            className="dropdown-icon"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="#profile">Profile</a>
              <a href="#account">Account</a>
              <a href="#settings">Settings</a>
              <a href="#logout">Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
