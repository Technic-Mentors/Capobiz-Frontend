import { AddShoppingCartOutlined, BadgeOutlined, SupportAgent, DonutSmallOutlined, Inventory2Outlined, InventoryOutlined, Payments, Equalizer, GppGood, ReceiptLong } from '@mui/icons-material';
import { css } from '@mui/styled-engine';
import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import customFeatures from '../Assets/Images/pos-custom-features.avif'
import CTA from './CTA';

function FeaturesPage() {

  useEffect(() => {
    AOS.init();
  }, []);


  const Features = [
    {
      id: 1,
      icon: <Inventory2Outlined />,
      title: 'Inventory Management',
      description: 'Efficient tracking and management of inventory to avoid stockouts or overstock situations.',
    },
    {
      id: 2,
      icon: <AddShoppingCartOutlined />,
      title: 'E-commerce Integration',
      description: 'Integrate seamlessly with online platforms for synchronized inventory in hybrid businesses.',
    },
    {
      id: 3,
      icon: <DonutSmallOutlined />,
      title: 'Reporting and Analytics',
      description: 'Robust reporting tools that provide insights into sales trends, best-selling items, and other KPIs.',
    },
    {
      id: 4,
      icon: <InventoryOutlined />,
      title: 'Purchase Order Management',
      description: 'Tools for creating and managing purchase orders to streamline the supply chain.',
    },
    {
      id: 5,
      icon: <BadgeOutlined />,
      title: 'Employee Management',
      description: 'User roles and permissions to control access levels, track employee performance, and prevent misuse.',
    },
    {
      id: 6,
      icon: <SupportAgent />,
      title: '24/7 Support',
      description: 'We are here for you every hour of every day, ensuring uninterrupted assistance.',
    },
    {
        id: 7,
        icon: <SupportAgent />,
        title: 'Customer Relationship Management',
        description: 'Keep track of customer preferences, purchase history, and contact information.',
      },
      {
        id: 8,
        icon: <Payments />,
        title: 'Secure Payment Processing',
        description: 'Support for various payment methods, including credit cards, mobile payments, and contactless options.',
      },
      {
        id: 9,
        icon: <Equalizer />,
        title: 'Sales Forecasting',
        description: 'Assist in inventory planning, staffing decisions, and overall business strategy',
      },
      {
        id: 10,
        icon: <GppGood />,
        title: 'User Permissions and Access Control',
        description: 'The ability to continue processing transactions and collecting data even when the internet connection is temporarily lost',
      },
      {
        id: 11,
        icon: <ReceiptLong />,
        title: 'Customizable Receipts',
        description: 'Create personalized and branded receipts with your logo, promotions, or special messages.',
      },
      
  ];

  const [featuresData, setFeaturesData] = useState(Features);

  return (
    <div>
        <section className="inner-page-header" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1200">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading">
                  Explore Our{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    Features Showcase
                  </span>{" "}
                </h2>
                
              </div>
              
            </div>
          </div>
        </div>
      </section>




      <section className="features-intro" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center features-description">
              <div className="features-content">
                <h6 className="subtitle">Feature Fusion</h6>
                <h2 className="main-heading">Features That Ease Up Your Life As A Business Owner</h2>
                <p>Immerse yourself in a world of unparalleled business efficiency with CapoBiz. Our feature-packed system is meticulously crafted to be your ally in navigating the dynamic landscape of commerce. Experience the ease of managing transactions, inventory, and customer interactions seamlessly. Stay steps ahead of your competitors as you leverage the power of CapoBiz to streamline operations, gain valuable insights, and provide an unmatched customer experience. Elevate your business, stand out, and thrive with the innovative features that redefine the essence of convenience for business owners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section >
        <div className='container mt-5'>
          <div className='row d-flex  align-items-center'>
            {featuresData.map((curElem) => {
              const { id, icon, title, description } = curElem;
              return (
                <div key={id} className='col-md-4 col-12 features-col mb-4 d-flex align-items-stretch' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                  <div className='card features-card'>
                    <div className='card-content'>
                     {/* <span style={{color: 'var(--secondary-color)'}}> {icon}</span> */}
                     {React.cloneElement(icon, { style: { color: 'var(--secondary-color)', fontSize: '35px' } })}
                      <h2 className='mt-3'> {title}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      <section className="custom-features p-4" style={{backgroundColor: '#fafafa'}} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="custom mb-3 mt-4">
                <h6 className="subtitle">Need Custom Features?</h6>
                <h2 className="main-heading">Tailored Innovation: Your Business, Your Features</h2>
              </div>
              
              <p><p>Embrace tailored innovation with our point of sale software! Your business is unique, and so are its needs. Our system goes beyond the standard features, offering you the freedom to infuse custom functionalities that align perfectly with your operations. From specialized reporting tools to unique payment integrations, envision the features you need, and we'll bring them to life. This is your journey – let's customize success together!</p></p>
              <Link to='/contact'>
              <button className="site-buttons">Ask For Customization <span>&rarr;</span></button>
              </Link>
            </div>

            <div className="col-md-5 mt-4">
              <img src={customFeatures} alt="custom-pos-features" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <CTA />
      
    </div>
  );
}

export default FeaturesPage;
