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
import Training from "./compenent/Training";
import Advance_Drupal_Course from "./compenent/Courses/Advance_Drupal_Course";
import Advance_Php_Course from "./compenent/Courses/Advance_Php_Course";
import Drupal_course from "./compenent/Courses/Drupal_course";
import Laravel_course from "./compenent/Courses/Laravel_course";
import Php_course from "./compenent/Courses/Php_course";
import React_course from "./compenent/Courses/React_course";


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
              <Route exact path="/training" element={<Training/>} />
              <Route exact path="/advance-drupal-course" element={<Advance_Drupal_Course/>} />
              <Route exact path="/advance-php-course" element={<Advance_Php_Course/>} />
              <Route exact path="/drupal-course" element={<Drupal_course/>} />
              <Route exact path="/laravel-course" element={<Laravel_course/>} />
              <Route exact path="/php-course" element={<Php_course/>} />
              <Route exact path="/react-course" element={<React_course/>} />
            </Routes>
            <Footer />
        </Router> 
       
       
    </div>
  );
}

export default App;
