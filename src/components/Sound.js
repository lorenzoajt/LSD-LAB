import React, {useEffect, useRef} from "react";
import "../App.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';

import arrow from '../images/arrow-right.svg'

function Sound() {

  return (
    <p className="selected">
      Consultoria y Diseño Acústico
      <br/>
      Musica Publicitaria 
      <br/>
      Diseño de Spots                
    </p>              
  );
}

export default Sound;
