import React from "react";
import Logo from '../assets/images/logo.png';

export default class Footer extends React.Component {
    
  render() {
    
    return (
      <div>
        <div className="rq-footer">
            <div className="fix-wrap">
                <section id="contact-us" className="rq-contact">
                    <div className="contact-container">
                        <div className="contact-header">
                            Let's build the next big thing!
                        </div>
                        <div className="contact-tag">
                        We'd be delighted to make your project a success.
                        </div>
                        <a href="#"><span className="contact-button">
                            Book a FREE Consultation!
                        </span></a>
                    </div>
                </section>
                <div className="footer-container">
                    <div className="row">
                       <div className="col-md-4 logo-container">
                            <div className="rq-logo desktop-footer-logo">
                                <img className="img-responsive" src={Logo} alt="" />
                                <p>Techinventive is a global leader in IT outsourcing, digital
                                    and business solution that connects its partners with
                                    the clients to perform the zero percent risk in minimum
                                    downtown for a meaningful automation of the businesses
                                    which has a great impact on the society’s growth.
                                </p>
                            </div>
                            <div className="social-logos">
                                <a href="https://www.facebook.com/techinventive" target="_blank" className="text-center"><div className="facebook-logo"></div></a>
                                <a href="https://www.linkedin.com/company/techinventive/" target="_blank" className="text-center"><div className="linkedin-logo"></div></a>
                                
                            </div>
                            <div className="social-logosd">
                                 <p>
                                    Location : E-219,Sec-63,Noida,uttar pradesh<br />
                                    Call :(+91) 9873440363<br />
                                    Email :sales@techinventive.com<br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 services-container">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="/app-developmen">App Development</a></li>
                                <li><a href="/web-development">Web Development</a></li>
                                <li><a href="/responsive-web-designing">Respopnsive Design</a></li>
                                <li><a href="/custom-application-development">Custom Development</a></li>
                                <li><a href="/drupal-development">Drupal Development</a></li>
                                <li><a href="/psd-to-html">PSD to HTML</a></li>
                                <li><a href="/web-design">Web Design</a></li>
                            </ul>
                        </div>
                        <div className="col-md-5 contact-container">
                            <h3>Contact</h3>
                            <p>Please feel free to fill our contact form and our business analyst would get in touch with you shortly with a quote.</p>
                            <div className="mobile-contact-container">
                                <p>GET IN TOUCH</p>
                                <div className="contact-phone-mail">
                                   <a href="#"><i class="fas fa-map"></i><span>E-219,Sec-63,Noida,uttar pradesh</span></a>
                                </div>
                                <div className="contact-phone-mail">
                                   <a href="tel:+919873440363"><i class="fas fa-phone-alt"></i><span>+91 9873440363</span></a>
                                </div>
                                <div className="contact-phone-mail">
                                   <a href="mailto:sales@techinventive.com" target="_top"><i className="fas fa-envelope" ></i><span>sales@techinventive.com</span></a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
        <div className=" footer-strip">
            <div className="text-center">
                <div className="rights-reserved-text">2017 - Present | All rights reserved</div>     
            </div>
        </div>
      </div>
    );
  }
}