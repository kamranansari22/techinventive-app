import React, { Component, useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class Capabilities extends React.Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        activeTab: '1'
      };
    }

    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  render() {
  return (
    <section  className=" rq-capabilities">
        <div className="fix-wrap">
            <h4 class="capabilities-title">Our Capabilities</h4>
           
            <div className="tab-content mt-5 mb-5" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="capability-content-container">
                    <h4 className="capability-title">
                        Web
                    </h4>
                    <div className="capability-content">
                        Leverage our expertise in building enterprise-grade web solutions for all your custom business requirements. We develop bespoke web applications with compelling user experiences, mostly with a 'cloud-first' approach.
                    </div>
                </div>
                <div className="capability-image">
                    <img src="https://rootquotient.com/assets/images/new-home-page/desktop-assets/capability/web.png" alt="" />
                </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile">
                <div className="capability-content-container">
                    <h4 className="capability-title">
                      Mobile
                    </h4>
                    <div className="capability-content">
                       We build mobile applications for any screen with rich features and solid security. Robust native applications or equally functional cross-platform apps, our experts ensure that it will be loved by its users.
                    </div>
                </div>
                <div className="capability-image">
                    <img src="https://rootquotient.com/assets/images/new-home-page/desktop-assets/capability/web.png" alt="" />
                </div>
              </div>
              <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact">
                <div className="capability-content-container">
                    <h4 className="capability-title">
                        Internet of things
                    </h4>
                    <div className="capability-content">
                       Crafting effective IoT solutions for every possible digital ecosystem with comprehensive data science in place. Get the power of controlling all your smart-enabled devices with the tap of a button.
                    </div>
                </div>
                <div className="capability-image">
                    <img src="https://rootquotient.com/assets/images/new-home-page/desktop-assets/capability/web.png" alt="" />
                </div>
              </div>
              <div className="tab-pane fade" id="data" role="tabpanel" aria-labelledby="data">
                <div className="capability-content-container">
                    <h4 className="capability-title">
                        Data Analytics
                    </h4>
                    <div className="capability-content">
                        Get smart with the data. We audit, consult and implement effective data strategies for your organization to gain an edge in this data-driven world. Digest the abstract data with attractive visualizations and insightful reports.
                    </div>
                </div>
                <div className="capability-image">
                    <img src="https://rootquotient.com/assets/images/new-home-page/desktop-assets/capability/web.png" alt="" />
                </div>
              </div>
              <div className="tab-pane fade" id="uiux" role="tabpanel" aria-labelledby="uiux">
                <div className="capability-content-container">
                    <h4 className="capability-title">
                       UI / UX
                    </h4>
                    <div className="capability-content">
                       Our designers have mastered the art of crafting appealing app designs by maintaining a critical balance in our design standards. The award-winning team focuses on providing smoother experience to the users by making it highly intuitive.
                    </div>
                </div>
                <div className="capability-image">
                    <img src="https://rootquotient.com/assets/images/new-home-page/desktop-assets/capability/web.png" alt="" />
                </div>
              </div>
              <div className="tab-pane fade" id="machine" role="tabpanel" aria-labelledby="machine">
                <div className="capability-content-container">
                    <h4 className="capability-title">
                       Machine Learning
                    </h4>
                    <div className="capability-content">
                       Our machine learning models & predictive analysis can help you with actionable insights in every aspect of a business. Our experts help you through building, training, tuning and deployment of the models into production at scale.
                    </div>
                </div>
                <div className="capability-image">
                    <img src="https://rootquotient.com/assets/images/new-home-page/desktop-assets/capability/web.png" alt="" />
                </div>
              </div>
              <div className="tab-pane fade" id="blockchain" role="tabpanel" aria-labelledby="blockchain">
                <div className="capability-content-container">
                    <h4 className="capability-title">
                       BlockChain
                    </h4>
                    <div className="capability-content">
                      This digital disruption helps organizations across verticals where data exchange takes place. Beyond cryptocurrency, blockchain helps in ensuring security and business efficiency. Reinforce your identity or asset management with reliable distributed ledger technology.
                    </div>
                </div>
                <div className="capability-image">
                    <img src="https://rootquotient.com/assets/images/new-home-page/desktop-assets/capability/web.png" alt="" />
                </div>
              </div>
              <div className="tab-pane fade" id="digital" role="tabpanel" aria-labelledby="digital">
                <div className="capability-content-container">
                    <h4 className="capability-title">
                       Digital Strategy
                    </h4>
                    <div className="capability-content">
                       We believe that there is digital solution for almost every business challenge. Our experts help you evaluate your legacy process systems and offer a custom digital roadmap to make your business future-ready. 
                    </div>
                </div>
                <div className="capability-image">
                    <img src="https://rootquotient.com/assets/images/new-home-page/desktop-assets/capability/web.png" alt="" />
                </div>
              </div>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                  aria-selected="true">
                     <div class="web-logo"></div>
                     <div class="capability-nav-title">Web</div>
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                  aria-selected="false">
                    <div class="mobile-logo"></div>
                    <div class="capability-nav-title">Mobile</div>
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="contact" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
                  aria-selected="false">
                    <div class="iot-logo"></div>
                    <div class="capability-nav-title">Internet of things</div>
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="data" data-toggle="tab" href="#data" role="tab" aria-controls="data"
                  aria-selected="false">
                    <div class="da-logo"></div>
                    <div class="capability-nav-title">Data Analyticss</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="uiux" data-toggle="tab" href="#uiux" role="tab" aria-controls="uiux"
                  aria-selected="false">
                    <div class="uiux-logo"></div>
                    <div class="capability-nav-title">UI / UX</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="machine" data-toggle="tab" href="#machine" role="tab" aria-controls="machine"
                  aria-selected="false">
                    <div class="ml-logo"></div>
                    <div class="capability-nav-title">Machine Learning</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="blockchain" data-toggle="tab" href="#blockchain" role="tab" aria-controls="blockchain"
                  aria-selected="false">
                    <div class="bc-logo"></div>
                    <div class="capability-nav-title">Blockchain</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="digital" data-toggle="tab" href="#digital" role="tab" aria-controls="digital"
                  aria-selected="false">
                    <div class="ds-logo"></div>
                    <div class="capability-nav-title">Digital Strategy</div>
                </a>
              </li>
            </ul>
            
        </div>    
      </section>
  );
  }
}
