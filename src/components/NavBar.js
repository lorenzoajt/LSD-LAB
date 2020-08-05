import React, {useEffect, useRef} from "react";
import "../App.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';

import arrow from '../images/arrow-right.svg'
import { NavLink } from "react-router-dom";

function NavBar() {
  



  return (    
  <h1 className="selected">
    <div className="hero-content-line">
      <div className="hero-content-line-inner">
        <NavLink className="link" to="/Light" activeClassName="selected" >Light</NavLink>
      </div>
    </div>
    <div className="hero-content-line">
      <div className="hero-content-line-inner">
        <NavLink className="link" to="/Sound" activeClassName="selected" >& Sound</NavLink>
      </div>  
    </div>
    <div className="hero-content-line">
      <div className="hero-content-line-inner">
        <NavLink className="link" to="/Disruptive" activeClassName="selected" >Disruptive</NavLink>
      </div>
    </div>
    <div className="hero-content-line">
      <div className="hero-content-line-inner">
        <NavLink className="link" to="/Lab" activeClassName="selected" >Lab</NavLink>
      </div>
    </div>
  </h1>                          
  );
}

export default NavBar;
