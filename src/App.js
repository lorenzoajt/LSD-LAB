import React, {useEffect, useRef} from "react";
import "./App.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';

import arrow from './images/arrow-right.svg'

function App() {
  let app = useRef(null)
  let video = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .8});
  
  useEffect(() => {
   
    //video var
    
    
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const headlineFourth = headlineThird.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
  
    //video animation
    tl.from(video, 1.2, {y:1280, ease:Power3.easeOut}, 'Start')

    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children, headlineFourth.children ], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

    

  }, [tl])



  return (
    
    <div className="hero" ref={el => app = el}>
      
      <iframe 
              ref={el => video = el}
              onLoad={() => console.log("loaded")}
              title="vimeo-player" 
              src="https://player.vimeo.com/video/392310452?background=1" 
              style={{position: "fixed",
                      right: "0",
                      bottom: "0",
                      minWidth: "100%",
                      minHeight: "100%",}} 
                      width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                  
      
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Light</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">& Sound</div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Disruptive</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Lab</div>
                </div>
              </h1>
              <p>
                Retamos el sentido de lo establecido con propuestas innovadoras que involucran ciencia, arte y tecnología
              </p>
              <div className="btn-row">
                <button className="explore-button" style={{color: "white"}}>Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
