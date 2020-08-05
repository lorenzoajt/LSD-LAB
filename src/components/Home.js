import React, {useEffect, useRef} from "react";
import "../App.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';

import arrow from '../images/arrow-right.svg'
import { useHistory } from "react-router-dom";

function Home() {

  return (
  <p className="selected">
    Retamos el sentido de lo establecido con propuestas innovadoras en ciencia, arte y tecnología
  </p>
              
  );
}

export default Home;
