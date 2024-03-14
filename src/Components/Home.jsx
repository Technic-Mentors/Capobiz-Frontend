import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import AboutPointOfSale from "../Assets/Images/about-point-of-sale.avif";
import punjabEstate from '../Assets/Images/punjab-estate.avif'
import sabirStore from '../Assets/Images/sabir-stores.avif'
import alMakkah from '../Assets/Images/al-makkah.avif'
import Engro from "../Assets/Images/Engro-fertilizers.png";
import FeaturesComponent from "./FeaturesComponent";
import RetailShop from "../Assets/Images/retail-shop-pos.avif";
import SuperMartPOS from '../Assets/Images/super-mart-pos.avif'
import RestaurantPOS from '../Assets/Images/restaurant-pos-software.avif'
import PharmacyPOS from '../Assets/Images/pharmacy-pos.avif'
import FertilizersPOS from '../Assets/Images/pos-for-fertilizers-shop.avif'
import TradingPOS from '../Assets/Images/pos-for-trading-business.avif'
import MobileShopPOS from '../Assets/Images/pos-for-mobile-shop.avif'
import Testimonials from "./Testimonials";
import mobilWhite from '../Assets/Images/mobilfiksern-white.avif'
import AOS from "aos";
import "aos/dist/aos.css";

import CTA from "./CTA";
import FAQs from "./FAQs";
import Transparent from "./Transparent";

function Home() {

  useEffect(() => {
    AOS.init();
  }, []);


  const [activeTab, setActiveTab] = useState("retail-shop");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

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
      <Transparent />

      <section className="about-section py-4" style={{ backgroundColor: '#fafafa' }}>
        <div className="container mt-3">
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
              <button className="site-buttons">
                <Link style={{ color: "var(--primary-color)" }}>
                  More Details <span>&rarr;</span>
                </Link>
              </button>
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

      <FeaturesComponent />

      <section className="new-section">
        <div >
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1200">
                <h6 className="subtitle">Meet the Innovators</h6>
                <h2 className="main-heading mb-4" style={{ color: '#fff', fontSize: '28px', fontWeight: 'lighter' }}>Technic Mentors, Pioneering <br /> POS Excellence</h2>
                <p className="text-light mb-5" style={{ fontSize: '15px', fontWeight: 'light' }}>Technic mentors is the best IT consulting company to look at when searching for extraordinary software and technology solutions. We provide value-added and quality products and services. Our team is specialized and experienced and provides our clients with the finest experience ever. We provide comprehensive IT solutions tailored to the unique needs of our diverse client base, which includes commercial clients, government agencies, educational institutions, and schools.</p>
                <button className="site-buttons"><a href="https://technicmentors.com" rel="noreferrer" target="_blank" className="text-light">Visit Site <span>&rarr;</span></a></button>
              </div>
              <div >
                {/* <img className="new-img" src={WhyPOS} alt="why-pos-software" /> */}
              </div>
              <div className="row d-flex justify-content-center align-items-center mt-5 mb-4">
                <div className="col-md-4 technic-mentors" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
                  <h4 className="">Innovative Solutions</h4>
                  <p>innovation is not just a trait; it's our DNA. We redefine solutions, setting the standard for Point-of-Sale excellence.</p>
                </div>
                <div className="col-md-4 technic-mentors" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <h4 className="">Collaborative Partnerships</h4>
                  <p>Fuel success through collaborative partnerships with Technic Mentors, where innovation meets seamless cooperation.</p>
                </div>
                <div className="col-md-4" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
                  <h4 className="" style={{ fontSize: '20px', color: '#fff' }}>Quality And Security</h4>
                  <p style={{ fontSize: '15px', color: '#fff' }}>Elevating businesses through unwavering commitment to quality and security, ensuring a seamless and secure experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="pills-tab-section py-4 "
        style={{ backgroundColor: "#FAFAFA" }}
      >

        <div className="container pt-5 pb-2">

          <div className="row">
            <div className="mb-5 text-center">
              <h6 className="subtitle">For One, For All</h6>
              <h2 className="main-heading">Industries Empowered by Our POS Software</h2>
            </div>
            <div
              className="col-md-12 jutify-content-center align-items-center" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"

            >
              <ul
                className="nav nav-tabs industries nav-justified mb-3"
                id="ex1"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link  mb-2 ${activeTab === "retail-shop" ? "active" : ""
                      }`}
                    id="retail-shop-tab"
                    data-mdb-toggle="pill"
                    href="#retail-shop"
                    role="tab"
                    onClick={() =>
                      handleTabChange("retail-shop")
                    }
                    aria-controls="retail-shop"
                    aria-selected={activeTab === "retail-shop"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      padding: '17px',
                      border: activeTab === "retail-shop" ? "none" : "1px solid var(--primary-color)",
                      color: activeTab === "retail-shop" ? "#fff" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "retail-shop" ? "var(--secondary-color)" : "white",
                    }}
                  >
                    Retail Shop{" "}
                  </a>
                </li>


                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link mb-2 ${activeTab === "super-mart" ? "active" : ""
                      }`}
                    id="super-mart-tab"
                    data-mdb-toggle="pill"
                    href="#super-mart"
                    role="tab"
                    onClick={() =>
                      handleTabChange("super-mart")
                    }
                    aria-controls="super-mart"
                    aria-selected={activeTab === "super-mart"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      padding: '17px',
                      border: activeTab === "super-mart" ? "none" : "1px solid var(--primary-color)",
                      color: activeTab === "super-mart" ? "#fff" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "super-mart" ? "var(--secondary-color)" : "white",
                    }}
                  >
                    Super Mart
                  </a>
                </li>


                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link mb-2 ${activeTab === "restaurants" ? "active" : ""
                      }`}
                    id="restaurants-tab"
                    data-mdb-toggle="pill"
                    href="#restaurants"
                    role="tab"
                    onClick={() => handleTabChange("restaurants")}
                    aria-controls="corporate-matters"
                    aria-selected={activeTab === "restaurants"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      padding: '17px',
                      border: activeTab === "restaurants" ? "none" : "1px solid var(--primary-color)",
                      color: activeTab === "restaurants" ? "#fff" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "restaurants" ? "var(--secondary-color)" : "white",
                    }}
                  >
                    Restaurant
                  </a>
                </li>


                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link mb-2 ${activeTab === "pharmacy" ? "active" : ""
                      }`}
                    id="pharmacy-tab"
                    data-mdb-toggle="pill"
                    href="#pharmacy"
                    role="tab"
                    onClick={() => handleTabChange("pharmacy")}
                    aria-controls="pharmacy"
                    aria-selected={activeTab === "pharmacy"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      padding: '17px',
                      border: activeTab === "pahrmacy" ? "none" : "1px solid var(--primary-color)",
                      color: activeTab === "pharmacy" ? "#fff" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "pharmacy" ? "var(--secondary-color)" : "white",
                    }}
                  >
                    Pharmacy
                  </a>
                </li>


                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link mb-2 ${activeTab === "fertilizers-shop" ? "active" : ""
                      }`}
                    id="fertilizers-shop-tab"
                    data-mdb-toggle="pill"
                    href="#fertilizers-shop"
                    role="tab"
                    onClick={() => handleTabChange("fertilizers-shop")}
                    aria-controls="fertilizers-shop"
                    aria-selected={activeTab === "fertilizers-shop"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      height: '60px',
                      paddingBottom: '14px',
                      border: activeTab === "fertilizers-shop" ? "none" : "1px solid var(--primary-color)",
                      color: activeTab === "fertilizers-shop" ? "#fff" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "fertilizers-shop" ? "var(--secondary-color)" : "white",
                    }}
                  >
                    Fertilizers Shop
                  </a>
                </li>


                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link mb-2 ${activeTab === "trading-pos" ? "active" : ""
                      }`}
                    id="trading-pos-tab"
                    data-mdb-toggle="pill"
                    href="#trading-pos"
                    role="tab"
                    onClick={() => handleTabChange("trading-pos")}
                    aria-controls="trading-pos"
                    aria-selected={activeTab === "trading-pos"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      padding: '17px',
                      border: activeTab === "trading-pos" ? "none" : "1px solid var(--primary-color)",
                      color: activeTab === "trading-pos" ? "#fff" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "trading-pos" ? "var(--secondary-color)" : "white",
                    }}
                  >
                    Trading
                  </a>
                </li>


                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link mb-2 ${activeTab === "mobile-shop-pos" ? "active" : ""
                      }`}
                    id="mobile-shop-pos-tab"
                    data-mdb-toggle="pill"
                    href="#mobile-shop-pos"
                    role="tab"
                    onClick={() => handleTabChange("mobile-shop-pos")}
                    aria-controls="mobile-shop-pos"
                    aria-selected={activeTab === "mobile-shop-pos"}
                    style={{
                      fontWeight: "bold",
                      display: 'block',
                      padding: '17px',
                      border: activeTab === "mobile-shop-pos" ? "none" : "1px solid var(--primary-color)",
                      color: activeTab === "mobile-shop-pos" ? "#fff" : "var(--primary-color)",
                      backgroundColor:
                        activeTab === "mobile-shop-pos" ? "var(--secondary-color)" : "white",
                    }}
                  >
                    Mobile Shop
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="col-lg-12 tab-detail"

            >
              {/* Tab content */}
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade show ${activeTab === "retail-shop" ? "active" : ""
                    }`}
                  id="retail-shop"
                  role="tabpanel"
                  aria-labelledby="retail-shop-tab"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
                        <p >
                          Point of Sale (POS) software plays a pivotal role in
                          enhancing the efficiency and productivity of retail
                          shops. It provides a centralized platform for managing
                          sales, inventory, and customer transactions,
                          streamlining operations and reducing the likelihood of
                          errors. With real-time tracking of stock levels, POS
                          software helps prevent stockouts and overstock
                          situations, ensuring that retailers can meet customer
                          demands effectively. Additionally, the integration of
                          POS systems with payment gateways facilitates smooth
                          and secure transactions, enhancing the overall
                          customer experience. Overall, POS software is an
                          indispensable tool for modern retail businesses,
                          offering a seamless and organized approach to sales
                          and inventory management.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
                        <img
                          src={RetailShop}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>
                </div>


                <div
                  className={`tab-pane fade show ${activeTab === "super-mart" ? "active" : ""
                    }`}
                  id="super-mart"
                  role="tabpanel"
                  aria-labelledby="super-mart-tab"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p >
                          For supermarts, reliable Point of Sale (POS) software is essential to efficiently manage vast product ranges, extensive inventory, and high transaction volumes. The system ensures optimal stock levels, minimizing the risks of stockouts or overstocking. With integrated features like secure payment processing and customer loyalty programs, POS software enhances the overall shopping experience.<br /> Providing quick access to sales reports and analytics, it empowers supermart owners with valuable insights for informed decision-making. In summary, POS software is a crucial tool for supermarts, streamlining operations and contributing to customer satisfaction.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={SuperMartPOS}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>
                </div>


                <div
                  className={`tab-pane fade show ${activeTab === "restaurants" ? "active" : ""
                    }`}
                  id="restaurants"
                  role="tabpanel"
                  aria-labelledby="restaurants-tab"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p >
                          In the dynamic environment of restaurants, Point of Sale (POS) software stands as a cornerstone, providing indispensable support in managing the intricacies of order processing, payment transactions, and inventory control. Beyond swift and accurate order execution, POS systems offer valuable insights into sales trends and menu performance, enabling informed decision-making. Features such as table management and seamlessly integrated payment processing contribute to the overall operational efficiency, fostering a smooth workflow between front-of-house and kitchen staff. As an essential tool for modern restaurants, POS software not only streamlines day-to-day operations but also elevates the dining experience for customers, ensuring timely service and reducing errors.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={RestaurantPOS}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${activeTab === "pharmacy" ? "active" : ""
                    }`}
                  id="pharmacy"
                  role="tabpanel"
                  aria-labelledby="pharmacy"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p


                        >
                          In the pharmaceutical realm, the role of Point of Sale (POS) software is paramount. It serves as a cornerstone for managing diverse product inventories, prescription transactions, and customer interactions. POS systems in pharmacies contribute significantly to the accuracy and efficiency of prescription processing, helping pharmacists keep track of medication stock levels and ensuring timely restocking to meet patient needs. Integrated features such as barcode scanning and secure payment processing streamline the checkout process, minimizing errors and enhancing customer service. Additionally, POS software in pharmacies often includes regulatory compliance tools, ensuring adherence to healthcare standards and facilitating accurate record-keeping.{" "}
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={PharmacyPOS}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>

                </div>

                <div
                  className={`tab-pane fade show ${activeTab === "fertilizers-shop" ? "active" : ""
                    }`}
                  id="fertilizers-shop"
                  role="tabpanel"
                  aria-labelledby="fertilizers-shop"
                >


                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p >
                          For fertilizer shops, Point of Sale (POS) software is crucial. It efficiently manages inventory, sales transactions, and customer interactions. POS systems help track fertilizer stock levels, prevent overstocking or stockouts, and streamline the checkout process with features like barcode scanning. The integration of secure payment processing enhances customer service, while sales reports provide valuable insights for informed decision-making. In summary, POS software is essential for fertilizer shops, optimizing inventory management and improving overall retail efficiency.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={FertilizersPOS}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>



                </div>

                <div
                  className={`tab-pane fade show ${activeTab === "trading-pos" ? "active" : ""
                    }`}
                  id="trading-pos"
                  role="tabpanel"
                  aria-labelledby="trading-pos"
                >



                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p >
                          In trading shops, the adoption of Point of Sale (POS) software is instrumental for optimizing various aspects of daily operations. This technology streamlines inventory management, automates sales transactions, and enhances overall efficiency in the trading business. POS systems provide real-time insights into stock levels, aiding traders in maintaining optimal inventory levels and preventing product shortages or excesses.<br /><br /> The integration of features such as secure payment processing and sales tracking contributes to accurate financial management and customer service improvement. With POS software, trading shops can streamline their processes, reduce errors in transactions, and gain valuable insights into product performance, ensuring a more organized and profitable trading environment.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={TradingPOS}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>



                </div>

                <div
                  className={`tab-pane fade show ${activeTab === "mobile-shop-pos" ? "active" : ""
                    }`}
                  id="mobile-shop-pos"
                  role="tabpanel"
                  aria-labelledby="mobile-shop-pos"
                >



                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          In mobile shops, Point of Sale (POS) software plays a pivotal role in simplifying daily operations. It efficiently manages inventory, automates sales transactions, and enhances customer service. POS systems in mobile shops provide real-time insights into stock levels, preventing shortages or excesses. With features like secure payment processing and sales tracking, POS software contributes to accurate financial management. The streamlined processes enabled by POS software improve efficiency, reduce errors, and ultimately enhance the overall customer experience in mobile shops.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={MobileShopPOS}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>



                </div>
              </div>
              {/* Tab content */}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <section className="multipurpose-pos py-5">
        <div className="bg-overlay">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-9 text-center">
                <h6 className="subtitle">Multipurpose Business Software</h6>
                <h2 className="main-heading">Elevating Your Business Beyond Simple POS</h2>
                <p>Enter a new era of operational excellence with our Point of Sale Software, transcending the limitations of traditional POS systems. Beyond a Simple POS, our innovation seamlessly integrates robust Stock & Inventory Management functionalities, ensuring impeccable control. Acting as a dynamic Inventory Management System, our solution transforms transactions into strategic business empowerment. Explore a realm where our POS becomes a catalyst for streamlined operations, strategic decision-making, and unparalleled growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQs />
      <CTA />
    </div>
  );
}

export default Home;
