import React from "react";
import vgulashan  from "../assets/images/vgulashan.jpg";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class ContactUs extends React.Component {
  
  render() {
    
    return (
    <div>
        <section className="sub-banner contactus parallax-bg" data-stellar-background-ratio="0.5">
            <div className="container">
            <div className="position-center-center">
                
            </div>
            </div>
        </section>
        
        
        <section className="padding-bottom-0 padding-top-50">
            <div className="container">
                <div className="icon-style style-2 icon-fill">
                    <ul className="row">
                        
                        <li className="col-md-4">
                            <article className="text-center margin-bottom-50">
                                <div className="icon icon-large animate fadeInUp animated animated" data-wow-delay="0.4s" > <ion-icon name="navigate-circle-outline"></ion-icon> </div>
                                <h5>Address</h5>
                                <p>E-219,Sec-63,Noida</p>
                            </article>
                        </li>
                        
                        <li className="col-md-4">
                            <article className="text-center margin-bottom-50">
                                <div className="icon icon-large animate fadeInUp animated animated" data-wow-delay="0.4s" > <ion-icon name="phone-portrait-outline"></ion-icon> </div>
                                <h5>Phone</h5>
                                <p>(+91) 9873440363</p>
                            </article>
                        </li>
                        
                        <li className="col-md-4">
                            <article className="text-center margin-bottom-50">
                                <div className="icon icon-large animate fadeInUp animated animated" data-wow-delay="0.4s" > <ion-icon name="mail-outline"></ion-icon> </div>
                                <h5>Email</h5>
                                <p>sales@techinventive.com</p>
                            </article>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="portfolio" className="rq-portfolio">
            <div className="fix-wrap">
              <h4 className="portfolio-header mb-3"> Work with us</h4>
            </div>
        </section>

        <div className="container contact dark-contact padding-bottom-50">
            <div className="row"> 
                <div className="col-md-6 center-auto margin-top-50">
                    <div className="contact-form"> 
                        <Form id="contact_form" className="contact-form" method="post">
                            <ul className="row">
                                <li className="col-sm-12">
                                    <Label>Your Name *</Label>
                                    <Input type="text" className="form-control" name="name" id="name" placeholder="" required="" />
                                </li>
                                <li className="col-sm-12">
                                    <Label>Your Email *</Label>
                                    <Input type="text"  name="email" id="email" placeholder="" required="" />
                                </li>
                                <li className="col-sm-6">
                                    <Label>Website</Label>
                                    <Input type="text"  name="company" id="company" placeholder="" />
                                </li>
                                <li className="col-sm-6">
                                    <Label>Subject</Label>
                                    <Input type="text"  name="subject" id="subject" placeholder="" />
                                </li>
                                <li className="col-sm-12">
                                    <Label> Content </Label>
                                    <Input type="textarea" rows="5" className="form-textarea" name="text" id="exampleText" />
                                </li>
                                <li className="col-sm-12">
                                    <div className="text-center">
                                       <Button type="submit" className="btn width-100" value="submit" id="btn_submit">SEND YOUR QUOTE</Button>
                                    </div>
                                </li>
                            </ul>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact row m-0">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.751314164321!2d77.3871309!3d28.6241322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc049dbf2bdc43411!2sSR%20Infosystem%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1571134682288!5m2!1sen!2sin" allowfullscreen="" frameborder="0"></iframe>
        </div>
    </div>
    );
  }
}