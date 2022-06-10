import React from "react";
import Web  from "../assets/images/web.svg";
import search  from "../assets/images/search-engine.svg";
import rankling  from "../assets/images/rankling.svg";
import optimization  from "../assets/images/optimization.svg";
import line  from "../assets/images/line-graph.svg";
export default class About extends React.Component {
  
  render() {
    
    return (
      <div>
        <section id="about-us" className=" rq-about-us">
        <div className="fix-wrap">
            <div className="desktop-services-container">
                <div className="title-tag">About us</div>
                <div className="services-image-container">
                    <img src="https://techinventive.com/images/bg/work.jpeg" alt="" className=" lazyloaded" />
                </div>
                <div className="services-content-container">
                    <div className="services-header">
                        <h6 className="about-us-title">Who we are</h6>
                    </div>

                    <div className="services-content-text">
                    Techinventive is a group of highly talented  individuals in the
                    field of technology who came together with the dream of
                    building a great technology entity which would impact lives 
                    of millions positively. We design & develop applications that 
                    are innovative on the tech-front. 
                    </div>

                    <div className="services-stats-container">
                        <div className="services-stats projects-stats">
                            <div className="projects-logo">
                            <i class="fas  fa-rocket"></i>
                            </div>
                            <div className="services-stats-content projects-content">
                                <div className="services-stats-numeral">50+</div>
                                <div className="services-stats-text">Projects</div>
                            </div>
                        </div>
                        <div className="services-stats hours-billed">
                            <div className="projects-logo">
                               <i class="fas fa-clock"></i>
                            </div>
                            <div className="services-stats-content projects-content">
                                <div className="services-stats-numeral">32,000</div>
                                <div className="services-stats-text">Hours billed</div>
                            </div>
                        </div>
                        <div className="services-stats">
                            <div className="projects-logo">
                              <i class="fas fa-coffee"></i>
                            </div>
                            <div className="services-stats-content projects-content">
                                <div className="services-stats-numeral">10,800</div>
                                <div className="services-stats-text">Cups of coffee</div>
                            </div>
                        </div>
                    </div>
                    <div className="services-read-more">
                      <a href="/about-us.php"> Read more </a>
                    </div>
                </div>
            </div>
            
        </div>    
        </section>
        <section className="how-web-work-section">
          <div className="fix-wrap how-it-work-home-container">
              <div className="row">
                  <div className="col-md-12">
                      <h2>We are Best Digital Marketing Company</h2>
                  </div>
                  <div className="col-md-7">
                      <div className="row how-web-work-left-row">
                          <div className="col-md-2">
                              <img src={optimization} className="img-fluid" />
                          </div>
                          <div className="col-md-10">
                              <h4>Page Optimization</h4>
                              <p>Onpage optimization refers to all measures that can be taken directly within the website in order to improve its position in the search rankings.</p>
                          </div>
                      </div>
                      <div className="row how-web-work-left-row">
                          <div className="col-md-2">
                              <img src={Web} className="img-fluid" />
                          </div>
                          <div className="col-md-10">
                              <h4>Internal Site Audit</h4>
                              <p>For the purposes of an SEO audit, that means redistributing internal linking structures on your website to pass equity to the pages that need it.</p>
                          </div>
                      </div>
                      <div className="row how-web-work-left-row">
                          <div className="col-md-2">
                              <img src={search} className="img-fluid" />
                          </div>
                          <div className="col-md-10">
                              <h4>Local Search Optimization</h4>
                              <p>Local search engine optimization is similar to SEO in that it is also a process affecting the visibility of a website or a web page in a web search engine's unpaid results often referred to as "natural",</p>
                          </div>
                      </div>
                      <div className="row how-web-work-left-row">
                          <div className="col-md-2">
                              <img src={line} className="img-fluid" />
                          </div>
                          <div className="col-md-10">
                              <h4>Competitors Monitoring</h4>
                              <p>To beat the competition, you should spy on your competitors' every marketing move. Tracking competitors' search rankings, content, social mentions, emails, and anything else they do to boost business. .</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-5 right-side-web-work-col hidden-xs">
                      <img src={rankling} className="img-fluid" />
                  </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}