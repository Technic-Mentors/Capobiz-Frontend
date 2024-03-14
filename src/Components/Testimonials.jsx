import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import TradingPOS from '../Assets/Images/pos-for-trading-business.avif'
import User from '../Assets/Images/user.avif'


function Testimonials() {

    var settingsTest = {
        dots: true,
        infinite: true,
        speed: 1300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 5000,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
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
        <section className="clients-testimonials">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-3 col-12 animation" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
              <div className="content">
                <h6 className="subtitle">Echoes of Delight </h6>
              <h2 className="main-heading" style={{fontSize: '26px'}}>Listen To The Whispers of Praise</h2>
              <p>Dive into compelling narratives that resonate with our commitment to excellence. Join the harmonious chorus of content clients, where success stories unfold with every testimonial.</p>
              </div>
              <div className="testimonials"></div>
            </div>
            <div className="col-md-9 col-12 py-7" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
            <Slider {...settingsTest}>
          <div className=''>
            <div className="card testimonial-cards">
              <div className="card-content testimonials-content ">
                <div className="p-3">
                <h4 className="test-heading">Flexible Services</h4>
                <p>The flexibility of this Point of Sale software is unmatched. It adapts seamlessly to our evolving business needs, providing a level of service flexibility that has become a cornerstone of our operations. This system is just amazing!</p>
                <div className="container-fluid">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-3 col-3">
                      <img src={User} className="img-fluid rounded-circle" alt="client-testimonials" style={{width: '50px ', height: '50px'}} />
                    </div>
                    <div className="col-md-9 col-9">
                      <h2 style={{fontSize: '13px'}}>Zaheer Ahmed</h2>
                      <p style={{fontSize: '9px'}}>CEO Go Green Fertilizers</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className=''>
          <div className="card testimonial-cards ">
              <div className="card-content testimonials-content">
                <div className="p-3">
                <h4 className="test-heading">Transaction Ease</h4>
                <p>The most impressive aspect is the effortless transaction experience. Our daily operations have become smoother, and the intuitive interface has significantly enhanced the overall efficiency of our transactions.</p>
                <div className="container-fluid">
                  <div className="row d-flex test-img justify-content-center align-items-center">
                    <div className="col-md-3 col-3">
                      <img src={User} className="img-fluid rounded-circle" alt="client-testimonials" style={{width: '50px ', height: '50px'}} />
                    </div>
                    <div className="col-md-9 col-9">
                      <h2 style={{fontSize: '13px'}}>Danish Janjua</h2>
                      <p style={{fontSize: '9px'}}>CEO DAnish Group Of Companies</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className=''>
          <div className="card testimonial-cards">
              <div className="card-content testimonials-content">
                <div className='p-3'>
                <h4 className="test-heading">Inventory Control</h4>
                <p>This Point of Sale software is a master in streamlined inventory management. The system’s ability to effortlessly control and optimize our inventory has revolutionized how we approach stock management, leading to a more efficient and profitable business.</p>
                <div className="container-fluid">
                  <div className="row d-flex">
                    <div className="col-md-3 col-3">
                      <img src={User} className="img-fluid rounded-circle" alt="client-testimonials" style={{width: '50px ', height: '50px'}} />
                    </div>
                    <div className="col-md-9 col-9">
                      <h2 style={{fontSize: '13px'}}>Haris Gulzar</h2>
                      <p style={{fontSize: '9px'}}>Director Sabir Stores</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div className=''>
          <div className="card testimonial-cards ">
              <div className="card-content testimonials-content">
                <div className='p-3'>
                <h4 className="test-heading">Growth Partner</h4>
                <p>A growth partner in every sense, this Point of Sale software empowers our business journey. It's not just a system; it's a strategic ally in achieving our growth objectives. Now we can have full control over every aspect of our business.</p>
                <div className="container-fluid">
                  <div className="row d-flex test-img justify-content-center align-items-center">
                    <div className="col-md-3 col-3">
                      <img src={User} className="img-fluid rounded-circle" alt="client-testimonials" style={{width: '50px ', height: '50px'}} />
                    </div>
                    <div className="col-md-9 col-9">
                      <h2 style={{fontSize: '13px'}}>Khan Muhammad</h2>
                      <p style={{fontSize: '9px'}}>CEO Mobilfiksern</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

          
          </Slider>
            </div>
            </div>        
            </div>
      </section>
    </div>
  )
}
export default Testimonials
