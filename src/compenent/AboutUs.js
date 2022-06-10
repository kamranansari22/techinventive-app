import React from "react";
import vgulashan  from "../assets/images/vgulashan.jpg";
import {Helmet} from "react-helmet";
export default class AboutUs extends React.Component {
  
  render() {
    
    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <section className="sub-banner parallax-bg" data-stellar-background-ratio="0.5">
            <div className="container">
            <div className="position-center-center">
                <h1>ABOUT US</h1>
                <h4 className="font-damion letter-space-1">We are Techinventive Technology &amp; Services</h4>
            </div>
            </div>
        </section>
        <section className="padding-bottom-0 padding-top-50">
            <div className="container">
                <div className="icon-style style-2 icon-fill">
                    <ul className="row">
                        <li className="col-md-3">
                            <article className="text-center margin-bottom-50">
                                <div className="icon icon-large animate fadeInUp animated animated" data-wow-delay="0.4s" >  <ion-icon name="color-wand-outline"></ion-icon>  </div>
                                <h5>Web Development</h5>
                                <p>We ensure to make the best web application by applying standard cutting edge technology.  </p>
                            </article>
                        </li>
                        
                        <li className="col-md-3">
                            <article className="text-center margin-bottom-50">
                                <div className="icon icon-large animate fadeInUp animated animated" data-wow-delay="0.4s" > <ion-icon name="rocket-outline"></ion-icon> </div>
                                <h5>Good Backend</h5>
                                <p>Our support team can also provide you with the server and the database if required to access the backend functionalities.</p>
                            </article>
                        </li>
                        
                        <li className="col-md-3">
                            <article className="text-center margin-bottom-50">
                                <div className="icon icon-large animate fadeInUp animated animated" data-wow-delay="0.4s" > <ion-icon name="train-outline"></ion-icon> </div>
                                <h5>Unique Design</h5>
                                <p>Only creative designing team only capable to cast a unique design to your business as per targeted audiences.</p>
                            </article>
                        </li>
                        
                        <li className="col-md-3">
                            <article className="text-center margin-bottom-50">
                                <div className="icon icon-large animate fadeInUp animated animated" data-wow-delay="0.4s" > <ion-icon name="apps-outline"></ion-icon> </div>
                                <h5>Mobile Friendly</h5>
                                <p>We have experts and designers who provide an easy to use app with full features.</p>
                            </article>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="padding-bottom-50 padding-bottom-50">
            <div className="container">
                <div className="row"> 
                    
                    <div className="col-md-6 no-padding" > <img className="about-use" data-wow-delay="0.4s" src={vgulashan} alt="" /> 
                    </div>
                    <div className="col-md-6 no-padding">
                    <div className="padding-left-50 padding-bottom-50 padding-top-60 beuti-craft"  id="beuti-craft"> 
                        
                        
                        <div className="heading-block margin-bottom-30">
                        <h2><span className="primary-color">Mr. Gulshan Verma</span><br />CEO-FOUNDER</h2>
                        </div>
                        
                        
                        <ul>
                        <li>
                            <p> Mr. Gulshan Verma with an experience of more than 11 years with his team members are successful enough to provide the full cycle service in the IT field of Web development, IOS / Android Development, Web / Mobile App Designing, Responsive Design.</p>
                        </li>
                            <li>
                            <p>The hardship and great efforts of Mr. Gulshan Verma – CEO of Techinventive have brought the company’s interest, grow rapidly on an ongoing development in IT sector. He made a success to advocate the opportunities in different innovations with the help of his team since 2014. His passion to seek out the practice by using the new technologies in making and bringing his client’s closer are clearly visible when Techinventive’s portfolio depicts the world className solutions to the IT market.</p>
                        </li>
                    

                        </ul>
                    </div>
                    </div>
                
                </div>
            </div>
        </section>
        <section className="about-last padding-top-50">
            <div className="container">
                <div className="row text-center text-white">
                    <div className="heading-block text-center">
                        <h2>Our Team</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <img src="https://techinventive.com/images/team/HR.jpg" />
                            <div className="team-content">
                                <h3 className="title">Diksha rajvansh</h3>
                                <span className="post">Human Resource Manager</span>
                                <ul className="social">
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <img src="https://techinventive.com/images/our-teams/saurabh-panchal.jpg" />
                            <div className="team-content">
                                <h3 className="title">Saurabh Panchal</h3>
                                <span className="post">Sr. Drupal Developer</span>
                                <ul className="social">
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <img src="https://techinventive.com/images/our-teams/ajay-solanki.jpg" />
                            <div className="team-content">
                                <h3 className="title">Ajay Solanki</h3>
                                <span className="post">Sr. Web Designer</span>
                                <ul className="social">
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <img src="https://techinventive.com/images/team/Jayanti-Shakya.jpg" />
                            <div className="team-content">
                                <h3 className="title">Jayanti Shakya</h3>
                                <span className="post">Bde cum business analyst</span>
                                <ul className="social">
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <img src="https://techinventive.com/images/team/Mirza-Gulfam.jpg" />
                            <div className="team-content">
                                <h3 className="title">Gulfam Mirza</h3>
                                <span className="post">Drupal Developer</span>
                                <ul className="social">
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <img src="https://techinventive.com/images/team/priyanka1.jpg" />
                            <div className="team-content">
                                <h3 className="title">Priyanka bisht</h3>
                                <span className="post">Digital Marketing Executive</span>
                                <ul className="social">
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <img src="https://techinventive.com/images/team/Sanjay-Chaudhary.jpg" />
                            <div className="team-content">
                                <h3 className="title">Sanjay Chaudhary</h3>
                                <span className="post">PHP Laravel Developer</span>
                                <ul className="social">
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <img src="https://techinventive.com/images/team/Surender-Rawat.jpeg" />
                            <div className="team-content">
                                <h3 className="title">Surender Rawat</h3>
                                <span className="post">Project Manager</span>
                                <ul className="social">
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <img src="https://techinventive.com/images/team/Zaira-Khan.jpg" />
                            <div className="team-content">
                                <h3 className="title">Zaira Khan</h3>
                                <span className="post">PHP Laravel Developer</span>
                                <ul className="social">
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <img src="https://techinventive.com/images/team/Vivek-Kumar.jpeg" />
                            <div className="team-content">
                                <h3 className="title">Vivek Kumar</h3>
                                <span className="post">Flutter Developer</span>
                                <ul className="social">
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <img src="https://techinventive.com/images/team/snap.jpg" />
                            <div className="team-content">
                                <h3 className="title">Jaindra Kumar</h3>
                                <span className="post">Drupal Developer</span>
                                <ul className="social">
                                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
      </div>
    );
  }
}