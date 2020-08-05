import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <NavLink
        to='/'
        exact
        activeStyle={{
          fontWeight: "bold",
          color:"white"
        }}>
        Home
      </NavLink>
      <NavLink
        to='/Showreel'
        exact
        activeStyle={{
          fontWeight: "bold",  
          color:"white"
        }}>
        Showreel
      </NavLink>
    </div>
  );
};

export default Header;
