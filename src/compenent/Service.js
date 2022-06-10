import React from "react";

export default class Service extends React.Component {
  
  render() {
    
    return (
      <div>
        <section id="services" className="rq-services">
            <div className="fix-wrap">
                <h4 className="services-title">
                    Our services
                </h4>
                <div className="services-card-container">
                    <div className="services-card">
                        <div className="digital-product-logo">
                           <i class="fas fa-laptop-code"></i>
                        </div>
                        <h4 className="card-title">
                            Web Development
                        </h4>
                        <div className="card-content">
                             We ensure to make the best web application by applying a standard cutting edge technology. 
                        </div>
                        <div className="card-know-more">
                            <a href="#"> Know more </a>
                        </div>
                    </div>
                    <div className="services-card">
                        <div className="data-analytics-logo">
                           <i class="fas fa-mobile-alt"></i>
                        </div>
                        <h4 className="card-title data-analytics-title">
                            Responsive Web design
                        </h4>
                        <div className="card-content">
                            Responsive web design makes your web page look good on all devices.its a combination of flexible grids.
                        </div>
                        <div className="card-know-more">
                            <a href="#">  Know more </a>
                        </div>
                    </div>
                    <div className="services-card">
                        <div className="staff-aug-logo">
                           <i class="fab fa-app-store"></i>
                        </div>
                        <h4 className="card-title">
                             App Development
                        </h4>
                        <div className="card-content">
                             We develop apps which function perfectly for both business owner and users. 
                        </div>
                        <div className="card-know-more">
                            <a href="#">  Know more </a>
                        </div>
                    </div>
                    <div className="services-card">
                        <div className="digital-strategy-logo">
                           <i class="fab fa-bootstrap"></i>
                        </div>
                        <h4 className="card-title">
                            Web Design
                        </h4>
                        <div className="card-content">
                            Our web designers, design and attach codes in such a way that could be easily found in the internet. 
                        </div>
                        <div className="card-know-more">
                            <a href="#"> Know more </a>
                        </div>
                    </div>
                </div>
                <div className="services-card-container">
                    <div className="services-card">
                        <div className="digital-product-logo">
                           <i class="fab fa-drupal"></i>
                        </div>
                        <h4 className="card-title">
                            Drupal development
                        </h4>
                        <div className="card-content">
                            Techinventive has a team of 
                            professional Drupal website 
                            developers and designers 
                            providing the precisely tailored 
                            range of Drupal website. 
                        </div>
                        <div className="card-know-more">
                            <a href="#"> Know more </a>
                        </div>
                    </div>
                    <div className="services-card">
                        <div className="data-analytics-logo">
                           <i class="fas fa-pencil-alt"></i>
                        </div>
                        <h4 className="card-title data-analytics-title">
                           PSD to HTML Conversion
                        </h4>
                        <div className="card-content">
                            We can develop fresh
                            websites from scratch and
                            optimize your current website 
                            with the mobile responsive
                            design guidelines. 
                        </div>
                        <div className="card-know-more">
                            <a href="#">  Know more </a>
                        </div>
                    </div>
                    <div className="services-card">
                        <div className="staff-aug-logo">
                           <i class="fab fa-adn"></i>
                        </div>
                        <h4 className="card-title">
                             Custom App Development
                        </h4>
                        <div className="card-content">
                            Our innovative website design
                            company offers A level of 
                            custom website development
                            services.
                        </div>
                        <div className="card-know-more">
                            <a href="#">Know more </a>
                        </div>
                    </div>
                    <div className="services-card">
                        <div className="digital-strategy-logo">
                           <i class="fas fa-cart-plus"></i>
                        </div>
                        <h4 className="card-title">
                             E-commerce development 
                        </h4>
                        <div className="card-content">
                            Techinventive is offering the
                            world’s best web development
                            services for a wide range of
                            industries in all over the world.
                        </div>
                        <div className="card-know-more">
                            <a href="#"> Know more </a>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
      </div>
    );
  }
}