import React from "react";
import Slider from "react-slick";

export default class Client extends React.Component {
  
  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows:false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
                    Our Clients
                </h4>
                <Slider {...settings}>
                    <div>
                        <img src="https://techinventive.com/images/images/c-10.png" />
                    </div>
                    <div>
                        <img src="https://techinventive.com/images/images/c-11.png" />
                    </div>
                    <div>
                        <img src="https://techinventive.com/images/images/c-12.png" />
                    </div>
                    <div>
                        <img src="https://techinventive.com/images/images/c-13.png" />
                    </div>
                    <div>
                        <img src="https://techinventive.com/images/images/c-14.png" />
                    </div>
                    <div>
                         <img src="https://techinventive.com/images/images/c-15.png" />
                    </div>
                    <div>
                         <img src="https://techinventive.com/images/images/c-16.png" />
                    </div>
                    <div>
                         <img src="https://techinventive.com/images/images/c-17.png" />
                    </div>
                </Slider>
            </div>
        </section>
      </div>
    );
  }
}