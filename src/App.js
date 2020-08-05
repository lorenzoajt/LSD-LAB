import React, {useEffect, useRef} from "react";
import NavBar from './components/NavBar'
import Home from './components/Home'
import Light from './components/Light'
import Sound from './components/Sound'
import Disruptive from './components/Disruptive'
import Lab from './components/Lab'
import Header from './components/Header'
import Showreel from './components/ShowReel'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from "react-router-dom";
import { useHistory } from "react-router-dom";


import "./App.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';

import arrow from './images/arrow-right.svg'
function App() {
	
	let app = useRef(null)
	let content = useRef(null)
	let tl = new TimelineLite({ delay: .8});
	let history = useHistory();	
	
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
    <Router>
    	<Switch>
			<div className="hero" ref={el => app = el}>			  		 		             
			  <Header/>
			  <div className="container">
			    <div className="hero-inner">
			      <div className="hero-content">
			        <div className="hero-content-inner" ref={el => content = el}>
			          <NavBar />
			          
	                    <Route exact path="/">
	                      <Home />
	                    </Route>
	                    <Route path="/Light">
	                      <Light />
	                    </Route>
	                    <Route path="/Sound">
	                      <Sound />
	                    </Route>
	                    <Route path="/Disruptive">
	                      <Disruptive />
	                    </Route>
	                    <Route path="/Lab">
	                      <Lab />
	                    </Route>
	                    <Route path="/Showreel">
			              <Showreel />
			            </Route>
	                  
			          <div className="btn-row">
			            <button className="explore-button" style={{color: "white"}}>Explore
			              <div className="arrow-icon" >
			                <img src={arrow} alt="row"/>
			              </div>
			            </button>
			          </div>
			        </div>
			      </div>
			     
			    </div>
			  </div>
			</div>
			
		</Switch>
	</Router>
	);  
}

export default App;
