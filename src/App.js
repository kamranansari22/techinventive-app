import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './compenent/Header'
import Footer from './compenent/Footer'
import Home from './compenent/Home'
import AboutUs from './compenent/AboutUs'
import Pricing from './compenent/Pricing'
import ContactUs from './compenent/ContactUs'
import Ios from './compenent/Ios'
import Android from './compenent/Android'
import Design from './compenent/Design'
import Drupal from './compenent/Drupal'
import Apps from './compenent/Apps'
import Web from './compenent/Web'
import Custom from './compenent/Custom'
import Psd from './compenent/Psd'
import Responsive from './compenent/Responsive'
import Portfolio from './compenent/Portfolio'


function App() {
  return (
    <div className="App">
       <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={< Home/>} />
              <Route exact path="/about" element={< AboutUs/>} />
              <Route exact path="/pricing" element={<Pricing/>} />
              <Route exact path="/contact" element={<ContactUs/>} />
              <Route exact path="/ios-app" element={<Ios/>} />
              <Route exact path="/android" element={<Android/>} />
              <Route exact path="/web-design" element={<Design/>} />
              <Route exact path="/drupal-development" element={<Drupal/>} />
              <Route exact path="/app-development" element={<Apps/>} />
              <Route exact path="/web-development" element={<Web/>} />
              <Route exact path="/custom-application-development" element={<Custom/>} />
              <Route exact path="/responsive-web-designing" element={<Responsive/>} />
              <Route exact path="/psd-to-html" element={<Psd/>} />
              <Route exact path="/portfolio" element={<Portfolio/>} />
            </Routes>
            <Footer />
        </Router> 
       
       
    </div>
  );
}

export default App;
