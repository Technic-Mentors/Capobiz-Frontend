import { AddShoppingCartOutlined, BadgeOutlined, DonutSmallOutlined, SupportAgent, FilterListOffOutlined, Inventory2Outlined, InventoryOutlined } from '@mui/icons-material';
import { css } from '@mui/styled-engine';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import {
//   Inventory2Outlined,
//   AddShoppingCartOutlined,
//   DonutSmallOutlined,
//   InventoryOutlined,
//   BadgeOutlined,
//   FilterListOffOutlined,
// } from '@mui/icons-material';

function FeaturesComponent() {
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
  ];

  const [featuresData, setFeaturesData] = useState(Features);

  return (
    <div>
      <section >
        <div className='container mt-5'>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='p-2 mt-4 mb-4 text-center' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <h6 className="subtitle">Features Showcase</h6>
              <h2 className="main-heading">Harmonizing Brilliance In Our POS Software</h2>
            </div>
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

            <div className='mb-5 mt-4 text-center' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <Link to='/pos-features'>
              <button className="site-buttons">View All Features <span>&rarr;</span></button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesComponent;
