import React,{useState, useEffect} from 'react'
import {Tabs, Tab} from 'react-bootstrap-tabs';
import Slider from 'react-slick'

function Training() {
    const[active, setactive]= useState(true)
    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        autoplay: false,
        autoplaySpeed: 4000,
        centerMode: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                    centerMode: false
                }
            }
        ]
    }
    const sliderSettings1 = {
        dots: true,
                arrows: false,
                infinite: true,
                slidesToScroll: 1,
                slidesToShow: 2,
                autoplay: false,
                autoplaySpeed: 4000,
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToScroll: 2,
                            slidesToShow: 2,
                            centerMode: false
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToScroll: 2,
                            slidesToShow: 2,
                            centerMode: false
                        }
                    }
                ]
    }
   
  return (
    <>
    <div id="wrap"> 
  
  {/* <!-- Header --> */}
  {/* <header className="header coporate-header">
    <div className="sticky">
      <div className="container">
        {/* <div className="logo"> <a href="index.html"><img src={process.env.PUBLIC_URL + "/assests/images/company-logo.png"} alt="" style={{width: "200px"}}/></a> </div> 
        
      
        <nav className="webimenu"> 
          
          <div className="menu-toggle"> <i className="fa fa-bars"> </i> </div>
          <ul className="ownmenu">
            <li className="active"><a href="index.html">HOME</a>
               <ul className="dropdown">
            
              
            </li>
             <li><a href="pricing.html">PRICING</a></li>
            <li><a href="about-us-2.html">ABOUT</a>
              
            </li>
            <li><a href="services-2.html">SERVICES</a>
              <ul className="dropdown">
                
                <li><a href="Web-design.html.html">Web Design</a></li>
                <li><a href="drupal-development.html">Drupal Development</a></li>
                 <li><a href="app-development.html">App Development</a></li>
                  <li><a href="web-development.html">Web Development</a></li>
                   <li><a href="custom-application-development.html">Custom Application Development</a></li>
                    <li><a href="psd-to-html.html">PSD to HTML</a></li>

              </ul>
            </li>
            <li><a href="portfolio-4.html">PORTFOLIO</a>
             
            </li>
            <li><a href="blog-1.html">Blog</a>
           
            </li>
            <li className="right"><a href="contact.html">CONTACT</a>
             
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header> */}
  {/* <!-- End Header --> 
  
  <!--======= HOME MAIN SLIDER =========--> */}
  <div className="banner-home">
       <div className="container">
            <div className="row">
                <div className="col-md-8 pr-4">
                     <button className="reg-button">Infinity is nothing but knowledge!</button>
                     <h5>Enhanced technical learning with online courses</h5>
                     <p>Half-knowledge is more destructive than complete ignorance.” To keep up with the global cues, you need to be in touch with the latest technological developments in the industry. We at Techinventive got that covered for you!</p>
                     <div className="banner-home-search">
                          <input type="search" className="banner-home-search-2" placeholder="Search for the software or skill you want to learn"/>
                          <button><img src={process.env.PUBLIC_URL + "/assests/img/Vector.png"}/> Search</button>  
                     </div>
                     <h6>Language | Industrial Training | Digital Marketing | Web Technology | Testing+ | Database | Networking | Mobile Application |  ERP | Graphic | Big Data | Cloud Computing</h6>
                </div>
                <div className="col-md-4">
                     <div className="banner-home-right">
                          <h4>Talk to OUR Expert</h4>
                          <h3>Enquire Now or Call-9876543210</h3>
                          <form>
                            <input type="name" className="banner-home-search-right" placeholder="Enter your full name..."/>
                            <input type="name" className="banner-home-search-right" placeholder="Contact Number"/>
                            <input type="name" className="banner-home-search-right" placeholder="Email"/>
                            <select className="banner-home-search-right">
                                  <option>Course Looking for</option>
                            </select>
                            <select className="banner-home-search-right">
                              <option>Select Branch</option>
                            </select>
                            <p>By clicking "Apply Now" you agree to the Privacy Policy , Terms of Use & Terms & Conditions.</p>
                            <a href="/contact"><button>Apply Now</button></a>
                          </form>
                     </div>
                </div>
            </div>
       </div> 
  </div>
  <div className="banner-below">
       <div className="container">
           <div className="row">
              <div className="col-md-12 text-center">
                <h2>Learning That Suits Your Methodology</h2>
                <p>When it comes to learning, the medium should never be the resistance. With high-quality video and audio live classes, choose your course and enjoy the best learning experience with Techinventive.</p>
                <a href="/contact"><button className="universe-button">Visit Courses</button> </a>
              </div>
           </div>
           <div className="row">
                <div className="col-md-10">
                     <div className="reg-box">
                          <img src={process.env.PUBLIC_URL + "/assests/img/Video call(1)(1).png"}/>
                     </div>
                     <div className="row">
                         <div className="col-md-4">
                              <div className="reg-box-1">
                                   <div className="reg-box-2"><img src={process.env.PUBLIC_URL + "/assests/img/speaker-filled-audio-tool 1.png"}/></div>
                                   Audio Classes
                              </div>
                         </div>
                         <div className="col-md-4">
                              <div className="reg-box-1">
                                <div className="reg-box-2 bg-22"><img src={process.env.PUBLIC_URL + "/assests/img/live-streaming 1.png"}/></div>
                                  Live Classes
                              </div>
                         </div>
                         <div className="col-md-4">
                            <div className="reg-box-1">
                              <div className="reg-box-2 bg-23"><img src={process.env.PUBLIC_URL + "/assests/img/play-button 1.png"}/></div>
                                Recorded Class
                            </div>
                         </div>
                     </div>
                </div>

           </div>
           <div className="row tbddss">
              <div className="col-md-12 text-center">
                <h2>Category to Suit Yourself </h2>
                <p>Who knows you better than yourself? Therefore, we let you choose your own category for the level you want to enroll in because You Know You!</p>
                <ul className="nav nav-tabs text-center">
                  <li ><a className="active" data-toggle="tab" href="#home2">Beginner</a></li>
                  <li><a data-toggle="tab" href="#menu3">Advance</a></li>
                </ul>
                
                <div className="tab-content">
                  <div id="home2" className="tab-pane fade in active show">
                       <div className="row">
                            <div className="col-md-3">
                            <div className="reg-box-4">
                                   <img src={process.env.PUBLIC_URL + "/assests/img/028-1.png"}/>
                                   <h6>Drupal</h6>
                                   <p>Drupal, an open-source web content management system (CMS) written in PHP and distributed under the..</p>
                                   <a href="/drupal-course">Class Details</a>
                              </div>
                            </div>
                            <div className="col-md-3">
                                <div className="reg-box-4">
                                    <img src={process.env.PUBLIC_URL + "/assests/img/029-2.png"}/>
                                    <h6>Laravel</h6>
                                    <p>Laravel is an open-source, robust, easy-to-understand PHP framework that follows the model-view-controller...</p>
                                    <a href="/laravel-course">Visit Class</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                              <div className="reg-box-4">
                                   <img src={process.env.PUBLIC_URL + "/assests/img/030-3.png"}/>
                                   <h6>React JS</h6>
                                   <p>React is a JavaScript library developed by Facebook, which was also used to build Instagram.com.</p>
                                   <a href="/react-course">Visit Class</a>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="reg-box-4">
                                   <img src={process.env.PUBLIC_URL + "/assests/img/031-4.png"}/>
                                   <h6>PHP</h6>
                                   <p>PHP (Hypertext Pre-processor) is an interpreted, object-oriented, and open-source scripting language.</p>
                                   <a href="/php-course">Class Details</a>
                              </div>
                            </div>
                            {/* <div className="col-md-12">
                              <button className="universe-button ">Visit Class</button> 
                            </div> */}
                       </div>
                  </div>
                  {/* <div id="menu2" className="tab-pane fade">
                    <div className="row">
                      <div className="col-md-3">
                           <div className="reg-box-4">
                                <img src={process.env.PUBLIC_URL + "/assests/img/028-1.png"}/>
                                <h6>Standard One</h6>
                                <p>Standard 1 is a foundation Standard that reflects 7 important concepts...</p>
                                <a href="#">Class Details</a>
                           </div>
                      </div>
                      <div className="col-md-3">
                          <div className="reg-box-4">
                              <img src={process.env.PUBLIC_URL + "/assests/img/029-2.png"}/>
                              <h6>Standard Two</h6>
                              <p>Standard 2 is a foundation Standard that reflects 7 important concepts...</p>
                              <a href="#">Class Details</a>
                          </div>
                      </div>
                      <div className="col-md-3">
                        <div className="reg-box-4">
                             <img src={process.env.PUBLIC_URL + "/assests/img/030-3.png"}/>
                             <h6>Standard Three</h6>
                             <p>Standard 3 is a foundation Standard that reflects 7 important concepts...</p>
                             <a href="#">Class Details</a>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="reg-box-4">
                             <img src={process.env.PUBLIC_URL + "/assests/img/031-4.png"}/>
                             <h6>Standard Four</h6>
                             <p>Standard 4 is a foundation Standard that reflects 7 important concepts...</p>
                             <a href="#">Class Details</a>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button className="universe-button ">Visit More Classes</button> 
                      </div>
                    </div>
                  </div> */}
                  <div id="menu3" className="tab-pane fade">
                    <div className="row">
                      <div className="col-md-3">
                           <div className="reg-box-4">
                                <img src={process.env.PUBLIC_URL + "/assests/img/028-1.png"}/>
                                <h6>Advanced Drupal</h6>
                                <p>Advanced Drupal is an accessible and user-friendly PHP-based web content management system (CMS).</p>
                                <a href="/advance-drupal-course">Visit Class</a>
                           </div>
                      </div>
                      <div className="col-md-3">
                          <div className="reg-box-4">
                              <img src={process.env.PUBLIC_URL + "/assests/img/029-2.png"}/>
                              <h6>Advanced PHP</h6>
                              <p>Advanced PHP Development course gives you the concepts, features, tools, and practical advice to use..</p>
                              {/* them together to build performant, secure, scalable, and reliable web applications */}
                              <a href="/advance-php-course">Visit Class</a>
                          </div>
                      </div>
                      {/* <div className="col-md-3">
                        <div className="reg-box-4">
                             <img src={process.env.PUBLIC_URL + "/assests/img/030-3.png"}/>
                             <h6>Standard Three</h6>
                             <p>Standard 3 is a foundation Standard that reflects 7 important concepts...</p>
                             <a href="#">Class Details</a>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="reg-box-4">
                             <img src={process.env.PUBLIC_URL + "/assests/img/031-4.png"}/>
                             <h6>Standard Four</h6>
                             <p>Standard 4 is a foundation Standard that reflects 7 important concepts...</p>
                             <a href="#">Class Details</a>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button className="universe-button ">Visit More Classes</button> 
                      </div> */}
                    </div>
                  </div>
                </div>
                
              </div>
          </div> 
       </div> 

  </div>
  <div className="middle-section-1">
    <div className="container">
      <div className="middle-section">
          <div className="row">
              <div className="col-md-6">
                <button className="middle-button">Entry Level</button> 
                <h3>Stay a step ahead to make your way through the regular tech developments</h3>
                <p>Keep yourself up to date with the ongoing tech developments and stay in the race to growth because “If the mountain won’t come to Muhammad, then Muhammad must go to the mountain.</p>
                <a href="/contact"><button className="universe-button mr-99">Registation Now</button></a>
              </div>
              <div className="col-md-6">
                  <img src={process.env.PUBLIC_URL + "/assests/img/man_sitting(1)(1).png"}/>
              </div>
          </div>
           
      </div>
    </div>
  </div>
  <div className="middle-section-3">
      <div className="container">
           <div className="row">
                <div className="col-md-6">
                      <img src={process.env.PUBLIC_URL + "/assests/img/Image(1).png"}/>
                </div>
                <div className="col-md-6">
                     <h3>Meet our mentors</h3>
                     <p>Mentors play an essential role in an institute, the level of education, development of student’s skills are based on their trainers. If you do not have a good mentor then you may lagin many things from others and that is why we at Ducat gives you the facility of skilled employees so that you do not feel unsecured about the academics.</p>
                     <a href="/contact"><button className="universe-button mr-99">Career Information</button></a>
                </div>
           </div>
      </div>
  </div>
  <div className="middle-section-stats">
    <div className="container">
         <div className="row">
              <div className="col-md-3">
                <h6>3,47,689</h6>
                <p>Our Students</p>
              </div>
              <div className="col-md-3">
                <h6>146</h6>
                <p>Our Consultants</p>
              </div>
              <div className="col-md-3">
                <h6>180</h6>
                <p>Our Courses</p>
              </div>
              <div className="col-md-3">
                <h6>884</h6>
                <p>Our Recruiters</p>
              </div>
         </div>
    </div>
</div>
  <div className="testomial-sec">
    <div className="container"> 
      <div className="row">
        <div className="col-md-12">
             <h3>Testimonial</h3>
        </div>
      </div>    
    </div>
    <ul className="nav nav-tabs text-center">
      <li >
        <a className="active" data-toggle="tab" href="#home">Students</a>
        </li>
      <li ><a data-toggle="tab" href="#menu1">Recruiters</a></li>
    </ul>
  
   
    
    <div className="tab-content">
      <div id="home" className="tab-pane fade in active show">
        <div className="slider-services-23">
        <Slider {...sliderSettings}>
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="smb-box-4">
                     <h3><img src={process.env.PUBLIC_URL + "/assests/img/Rectangle 124.png"}/><span>John Doe<br/> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span></h3>
                     <p>Got to know about it while I was surfing social media. Saw an ad and clicked on it immediately as I was looking for an agency that provides personal loan to its users, myself. Gone through the site and availed its service!</p>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="smb-box-4">
                     <h3><img src={process.env.PUBLIC_URL + "/assests/img/Rectangle 124.png"}/><span>John Doe<br/> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span></h3>
                     <p>Got to know about it while I was surfing social media. Saw an ad and clicked on it immediately as I was looking for an agency that provides personal loan to its users, myself. Gone through the site and availed its service!</p>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="smb-box-4">
                <h3><img src={process.env.PUBLIC_URL + "/assests/img/Rectangle 124.png"}/><span>John Doe<br/> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span></h3>
                <p>Got to know about it while I was surfing social media. Saw an ad and clicked on it immediately as I was looking for an agency that provides personal loan to its users, myself. Gone through the site and availed its service!</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="smb-box-4">
                <h3><img src={process.env.PUBLIC_URL + "/assests/img/Rectangle 124.png"}/><span>John Doe<br/> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span></h3>
                <p>Got to know about it while I was surfing social media. Saw an ad and clicked on it immediately as I was looking for an agency that provides personal loan to its users, myself. Gone through the site and availed its service!</p>
              </div>
            </div>
            </Slider>
        </div>
      </div>
      <div id="menu1" className="tab-pane fade">
        <div className="slider-services-24">
        <Slider {...sliderSettings1}>
          <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="smb-box-4">
                   <h3><img src={process.env.PUBLIC_URL + "/assests/img/Rectangle 124.png"}/><span>John Doe<br/> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span></h3>
                   <p>Got to know about it while I was surfing social media. Saw an ad and clicked on it immediately as I was looking for an agency that provides personal loan to its users, myself. Gone through the site and availed its service!</p>
              </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="smb-box-4">
                   <h3><img src={process.env.PUBLIC_URL + "/assests/img/Rectangle 124.png"}/><span>John Doe<br/> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span></h3>
                   <p>Got to know about it while I was surfing social media. Saw an ad and clicked on it immediately as I was looking for an agency that provides personal loan to its users, myself. Gone through the site and availed its service!</p>
              </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="smb-box-4">
              <h3><img src={process.env.PUBLIC_URL + "/assests/img/Rectangle 124.png"}/><span>John Doe<br/> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span></h3>
              <p>Got to know about it while I was surfing social media. Saw an ad and clicked on it immediately as I was looking for an agency that provides personal loan to its users, myself. Gone through the site and availed its service!</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="smb-box-4">
              <h3><img src={process.env.PUBLIC_URL + "/assests/img/Rectangle 124.png"}/><span>John Doe<br/> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span></h3>
              <p>Got to know about it while I was surfing social media. Saw an ad and clicked on it immediately as I was looking for an agency that provides personal loan to its users, myself. Gone through the site and availed its service!</p>
            </div>
          </div>
          </Slider>
      </div>
      </div>
    </div>
  </div>    
  <div className="footer-bottom-wrappers">
    <img src={process.env.PUBLIC_URL + "/assests/img/Ellipse 168.png"} className="pos-1"/>
    <img src={process.env.PUBLIC_URL + "/assests/img/Ellipse 167.png"} className="pos-2"/>
    <img src={process.env.PUBLIC_URL + "/assests/img/Ellipse 166.png"} className="pos-3"/>
    <div className="container"> 
      <div className="footer-bottom-last">
           <div className="row">
                <div className="col-md-12">
                      <h3>Stay in touch, Stay Connected!</h3>
                      <p>Learn more about our courses and the upcoming ones as well. <br/>Subscribe to our newsletter and blog to stay tuned for any further updates</p>
                      <div className="form-lasst-footer text-center">
                                <input placeholder="enter your email" className="footer-bottom-last-input"/>
                                <button className="footer-bottom-last-btn">Subscribe</button>
                      </div>
                </div>
           </div>
      </div>
   </div>
   <img src={process.env.PUBLIC_URL + "/assests/img/Ellipse 168-1.png" }className="pos-4"/>
    <img src={process.env.PUBLIC_URL + "/assests/img/Ellipse 167-1.png"} className="pos-5"/>
    <img src={process.env.PUBLIC_URL + "/assests/img/Ellipse 166-1.png"} className="pos-6"/>
  </div>
  

  
 
  
  
  <a href="#" className="cd-top"><i className="fa fa-angle-up"></i></a> 

</div>

    </>
      
    
  )
}

export default Training