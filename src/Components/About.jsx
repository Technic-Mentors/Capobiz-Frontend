import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
import AboutPointOfSale from "../Assets/Images/about-point-of-sale.avif";
import WhyChoosePOS from '../Assets/Images/why-choose-pos-software.avif';
// import Mobilfiksern from "../Assets/Images/Mobilfiksern-LOGO.png";
// import LetTech from "../Assets/Images/client-lettechnologies-logo.png";
// import Alahad from "../Assets/Images/client-alahadmarketing-logo.png";
// import GetWell from "../Assets/Images/client-getwell-logo.png";
// import SheikhLaw from "../Assets/Images/client-sheikhlaw-logo.png";
import Engro from "../Assets/Images/Engro-fertilizers.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from './Testimonials';
import mobilWhite from '../Assets/Images/mobilfiksern-white.avif'
// import AboutPointOfSale from "../Assets/Images/about-point-of-sale.avif";
import punjabEstate from '../Assets/Images/punjab-estate.avif'
// import Mobilfiksern from "../Assets/Images/Mobilfiksern-LOGO.png";
import sabirStore from '../Assets/Images/sabir-stores.avif'
import alMakkah from '../Assets/Images/al-makkah.avif'
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="inner-page-header" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1200">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading">
                  Get To Know{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    About CapoBiz
                  </span>{" "}
                  Software
                </h2>
                
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="about-section py-4">
        <div className="container mt-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-12" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
              <div className="section-heading">
                <h6 className="subtitle" style={{ color: "var(--secondary-color)" }}>
                  Smart POS, Your Business Ally
                </h6>
                <h1
                  style={{
                    fontSize: "32px",
                    color: "var(--primary-color)",
                    fontWeight: "bold",
                  }}
                >
                  Elevate Efficiency with Our Point of Sale Software
                </h1>
              </div>
              <p>
                Step into a new era of business management with our cutting-edge
                Point of Sale (POS) system. We're not just redefining
                transactions; we're revolutionizing the way you run your
                business. Say goodbye to complexity, and welcome streamlined
                operations and unmatched efficiency. Explore the future of POS
                solutions with us, where innovation meets seamless
                functionality, and success becomes your everyday companion.
              </p>
              <hr />

              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-12">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margi: "0",
                      lineHeight: "2.5",
                    }}
                  >
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Tailored POS adapting to your business needs.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Informed decisions with instant business insights.
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-12">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margi: "0",
                      lineHeight: "2.5",
                    }}
                  >
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Swift on-the-go business management with mobile access.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Grow confidently with a POS system that scales to your
                      business.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
              <img
                className="img-fluid"
                src={AboutPointOfSale}
                alt="about-pos"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="benefits-overlay">
        <div className="container p-5">
        <div className="row d-flex justify-content-center align-items-center mb-4" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
          <div className="col-md-3 col-6">
            <div className="icon-box text-center">
            <i className="fas fa-users mb-4"></i>
            <h6 className=''>Unlimited Account Openings</h6>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="icon-box text-center">
            <i className="fas fa-cogs mb-4"></i>
            <h6 className="">Customized Product Defining</h6>
            </div>
          </div>
          <div className="col-md-3 col-6 culprit">
            <div className="icon-box text-center">
            <i className="fas fa-box mb-4"></i>
            <h6 className="">Min Stock Management Feature</h6>
            </div>
          </div>
          <div className="col-md-3 col-6 culprit">
            <div className="icon-box text-center">
            <i className="fas fa-undo mb-4"></i>
            <h6 className="">Product Purchase Return Option</h6>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center mb-4" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
          <div className="col-md-3 col-6">
            <div className="icon-box text-center">
            <i className="fas  fa-arrow-circle-left mb-4"></i>
            <h6 className="">Requirements and Sale Return</h6>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="icon-box text-center">
            <i className="fas  fas fa-sync mb-4"></i>
            <h6 className="">Auto Stock Updating Feature</h6>
            </div>
          </div>

          <div className="col-md-3 col-6 culprit faster-billing">
            <div className="icon-box text-center">
            <i className="fas  fa-money-check-alt mb-4"></i>
            <h6 className="">Faster Retail Billing Functionality</h6>
            </div>
          </div>
          
          
          
        </div>

        <div className="row d-flex justify-content-center align-items-center mb-4" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
          <div className="col-md-3 col-6">
            <div className="icon-box text-center">
            <i className="fas  fa-chart-bar mb-4"></i>
            <h6 className="">Detailed Sales Reports</h6>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="icon-box text-center">
            <i className="fas  fa-lock mb-4"></i>
            <h6 className="">Secure Data Encryption</h6>
            </div>
          </div>
          
        </div>
        </div>
        </div>
      </section>

      <section className="why-choose-us pt-5" style={{backgroundColor: '#FAFAFA'}}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
              <div className='mt-4'>
                <h6 className="subtitle">Discover the Difference</h6>
                <h2 className="main-heading mb-4" style={{fontSize: "32px",
                    color: "var(--primary-color)",
                    fontWeight: "bold",
                  }}>Compelling Reasons to Choose CapoBiz For Your Business
                </h2>
                <p>choosing the right Point-of-Sale (POS) software is crucial for success. CapoBiz stands out as a game-changer, providing a host of innovative features that redefine your business transactions.</p>
                <div>
                <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margi: "0",
                      lineHeight: "2.5",
                    }}
                  >
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Effortless operation with a user-friendly interface for quick adoption.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Optimize stock levels with precision and prevent overstock or stockouts.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Access business data securely anytime, anywhere for enhanced flexibility.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Make informed decisions with customizable reports and analytics.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Effortlessly integrate with other applications for streamlined operations.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Consistent customer experience across various devices and platforms.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      State-of-the-art features to safeguard sensitive data and ensure compliance.
                    </li>
                    <li>
                      <i
                        className="fa-solid fa-caret-right"
                        style={{
                          fontSize: "20px",
                          color: "var(--secondary-color)",
                        }}
                      ></i>{" "}
                      Dedicated customer support team available round the clock for peace of mind.
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
                    <img src={WhyChoosePOS} alt="why-choose-pos-software" className="img-fluid" />
                  </div>
          </div>
        </div>
      </section>

      <section
        className="clients mt-4"
        style={{ backgroundColor: "var(--primary-color)", minHeight: "200px" }} data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1200"
      >
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-12 col-12 py-7">
            <Slider {...settings}>
                <div>
                  <img src={Engro} className="img-fluid" alt="pos-clients" />
                </div>
                <div>
                  <img src={sabirStore} className="img-fluid" alt="pos-clients" />
                </div>
                <div>
                  <img src={alMakkah} className="img-fluid" alt="pos-clients" />
                </div>
            
                <div>
                  <img
                    src={punjabEstate}
                    className="img-fluid"
                    alt="pos-clients"
                  />
                </div>
                <div>
                  <img
                    src={mobilWhite}
                    className="img-fluid"
                    alt="pos-clients"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  )
}

export default About
