import React from "react";

import About from './About'
import Service from './Service'
import Client from './Client'
import Contact from './Contact'
import Capabilities from './Capabilities'
import Technologies from './Technologies'
export default class Home extends React.Component {
  
  render() {
    
    return (
      <div>
        <section id="mid-wrapper">
            <section class="home-banner" >
                <div class="fix-wrap">
                    <h1>We Design Unique <br/>Brand Identities</h1>
                    <p>Techinventive is fastest growing company which provides many services,<br/>
                      on page seo, off page seo, local seo services, enterprise seo, digital marketing services,<br/>
                      internet marketing smo serives, content writing, website designing, logo designing,<br/>
                      responsive web design, web development service etc.
                    </p>
                    <a href="tel:+919718736686"  class="btn btn-default btn-lg btn-call-lg-ban"><i class="fas fa-phone" ></i>&nbsp;<strong>Call us : +91 9718736686</strong></a>
                    <a href="#reachUs" class="btn btn-black btn-lg btn-call-lg-ban">Contact Us</a>
                </div>
            </section>
        </section>
        <About />
        <Service />
        <Client />
        <Capabilities />
        <Technologies />
        <Contact />    
      </div>
    );
  }
}