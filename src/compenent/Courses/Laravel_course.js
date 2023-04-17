import React from 'react'

function Laravel_course() {
  return (
   <>
   <div className="middle-section-1">
    <div className="container">
      <div className="middle-section-new">
          <div className="row">
               <div className="col-md-12">
                    <div className="breadcumgd"><a href="#" >Home</a> | <span>Courses</span></div>
               </div>
               <div className="row det-1">
                    <div className="col-md-6">
                         <h3>Carving your path <br/>to success with Laravel</h3>    
                    </div>
                    <div className="col-md-6">
                          <img src={process.env.PUBLIC_URL + "/assests/img/Group.png"}/>
                    </div>
               </div>
               <div className="row det-3">
                  <div className="col-md-2">

                  </div>
                  <div className="col-md-7">
                      <div className="banner-home-search">
                        <input type="search" className="banner-home-search-2" placeholder="Search for the software or skill you want to learn"/>
                        <button><img src={process.env.PUBLIC_URL + "/assests/img/Vector.png"}/> Search</button>  
                      </div>
                  </div>
                  <div className="col-md-3">
                  
                  </div>
               </div>
               <div className="row det-2">
                  <div className="col-md-12">
                     <h6>Language | Industrial Training | Digital Marketing | Web Technology | Testing+ | Database | Networking | Mobile Application |  ERP | Graphic | Big Data | Cloud Computing</h6>
                  </div>
               </div>
                
                
          </div>
           
      </div>
    </div>
  </div>
  <div className="banner-below det-4">
    <div className="container">

        <div className="row">
           <div className="col-md-8 pr-4 det-5">
              <img src={process.env.PUBLIC_URL + "/assests/img/laravel.png"}/>
              <div className="white-bg">
                    <h4>What you'll learn</h4>
                    <ul>
                      <li><span> you have completed this training course, you will be fully capable of installing, building, deploying, and maintaining your own customised Drupal websites. </span></li>
                      <li><span>Learn how to build a website using Drupal 8 </span></li>
                    </ul>
              </div> 
              <h6>What is Laravel?</h6>
              <p>Laravel is an open-source, robust, easy-to-understand PHP framework that follows the model-view-controller design pattern. With an expressive and elegant syntax, Laravel helps in creating a practical web application. </p>
              <h6>Prospects of Laravel</h6>
              <p>With the availability of numerous tools, Laravel has been gaining prominence in the developer community. Its simple features and guaranteed superior performance have set Laravel high on the demand scale. In the dynamic world of development, businesses are constantly looking for the best creative solutions that are adaptable, scalable, and secure, which is where Laravel comes into the picture. All the pluses have presented Laravel developers with ever-rising opportunities. 
                <br/>Let’s get learning then!
                </p>
              <h6>Benefits of Laravel</h6>
              <p>
                Let’s see what’s so unique about the Laravel platform.
              </p>
              <ul>
                <li>Two of the biggest strengths of Laravel are simplicity and conciseness. Laravel offers a superior caching system and a robust authentication process compared to other web development platforms.</li>
                <li>It can help create multilingual websites that can further help businesses to reach multiple markets simultaneously.</li>
                <li>From effortlessness to enhanced easiness, Laravel helps eliminate repetitiveness and redundancy during the entire development process.</li>
                <li>Laravel offers a distinctive edge as it is built to meet the specific requirements of a business, which puts it higher than other PHP infrastructures.</li>
                <li>Laravel is a beneficial platform for small- and medium-scale entrepreneurs as it is a cost-effective solution compared to other frameworks</li>                
              </ul>  
              <h6>Why choose Techinventive?</h6> 
              <ul className="last-ul">
                <li><span>Learned instructors - Learn from the best for an efficient learning experience.</span></li>
                <li><span>Choose your own level - Start learning from your own level of understanding.</span></li>
                <li><span>Flexibility in learning - Choose your learning schedule as per your comfort.</span></li>
              </ul>  
           </div>
           <div className="col-md-4">
              <div className="banner-home-right">
                <h4>Query Form</h4>
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
                  <input type="text" className="banner-home-search-right" placeholder="What is 10+5?"/>
                  <a href="/contact"><button>Submit</button></a>
                </form>
              </div>
              <div className="banner-home-right-2">
                <h4>Commencing New Batch</h4>
                <p>Sector 16, Noida</p>
                <p>Delhi </p>
                <p>Gurgaon</p>
                <p>Chandigarh </p>
                <p>Punjab</p>
              </div>
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
   <img src={process.env.PUBLIC_URL + "/assests/img/Ellipse 168-1.png"} className="pos-4"/>
    <img src={process.env.PUBLIC_URL + "/assests/img/Ellipse 167-1.png"} className="pos-5"/>
    <img src={process.env.PUBLIC_URL + "/assests/img/Ellipse 166-1.png"} className="pos-6"/>
  </div>
   </>
  )
}

export default Laravel_course
