import React from "react";
import Slider from "react-slick";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Client from '../assets/images/Group1.png'
export default class Contact extends React.Component {

  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div>
        <section id="clients" className="container-fluid rq-clients">
            <div className="fix-wrap">
                <h4 className="clients-header mb-5">
                   Get in touch with us so easy
                </h4>
                <div className="row contactss">
                    <div className="col-md-6">
                       <h6>Our Location </h6>
                       <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1876720437394!2d77.38494221488622!3d28.624136891212153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8db2fb6471%3A0xc049dbf2bdc43411!2sTechinventive%20Software%20and%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1645768057687!5m2!1sen!2sin"  allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="col-md-5">
                        <h6>Drop Your Details here </h6>
                        <Form className="contact-home">
                            <FormGroup className="mb-4">
                                <Input type="text" className="contact-input" name="Name" id="exampleEmail" placeholder="Your Name" />
                            </FormGroup>
                            <FormGroup className="mb-4">
                                <Input type="email" className="contact-input" name="email" id="exampleEmail" placeholder="Your Email" />
                            </FormGroup>
                            <FormGroup className="mb-4">
                                <Input type="number" className="contact-input" name="phone" id="exampleEmail" placeholder="Your Phone" />
                            </FormGroup>
                            <FormGroup className="mb-4">
                                <Input type="textarea" className="contact-area" name="phone" id="exampleEmail" placeholder="Write your Message" />
                            </FormGroup>    
                            <Button className="btn-submit">Let’s Go</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
        <section id="portfolio" className="rq-portfolio testinommc">
          <div className="fix-wrap">
            <h4 className="portfolio-header">
               Our Testimonial 
            </h4>
            <Slider {...settings}>
                    <div>
                        <div className="test-slider">
                            <p>
                                “The team had a clear understanding of our rigid
                                schedule and ensured delivery was made on budget.”
                            </p>    
                            <div className="position">VP of Productions - Wild Bunch</div>
                            <div className="name-clie">Rob Moreno</div>
                            <div className="client-img">
                                <img src={Client} />
                            </div>
                        </div>
                    </div>
                    <div>
                       <div className="test-slider">
                            <p>
                                “The team had a clear understanding of our rigid
                                schedule and ensured delivery was made on budget.”
                            </p>    
                            <div className="position">VP of Productions - Wild Bunch</div>
                            <div className="name-clie">Rob Moreno</div>
                            <div className="client-img">
                                <img src={Client} />
                            </div>
                        </div>
                    </div>
                    <div>
                       <div className="test-slider">
                            <p>
                                “The team had a clear understanding of our rigid
                                schedule and ensured delivery was made on budget.”
                            </p>    
                            <div className="position">VP of Productions - Wild Bunch</div>
                            <div className="name-clie">Rob Moreno</div>
                            <div className="client-img">
                                <img src={Client} />
                            </div>
                        </div>
                    </div>
                    <div>
                       <div className="test-slider">
                            <p>
                                “The team had a clear understanding of our rigid
                                schedule and ensured delivery was made on budget.”
                            </p>    
                            <div className="position">VP of Productions - Wild Bunch</div>
                            <div className="name-clie">Rob Moreno</div>
                            <div className="client-img">
                                <img src={Client} />
                            </div>
                        </div>
                    </div>
                </Slider>

            
          </div>
        </section>
      </div>
    );
  }
}