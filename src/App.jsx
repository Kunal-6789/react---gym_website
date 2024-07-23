

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Fitness from './components/Fitness';
import Prog from './components/Prog';
import Features from './components/features';
import Plan from "./components/plans";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import React from "react";
import Signup from './components/Signup';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Trainer from './components/Trainers';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";



AOS.init();




const App=() => {
  return (
  <>
         <Navbar/> 
         <Signup /> 
         <Hero />
         <Fitness />
         <Features />
         <Prog />
         <Trainer />   
         <Plan />  
         <Reviews />
         <Contact />
         <Footer />
        
    </>
  );
};

export default App;
