import React from 'react'
import { Link } from 'react-router-dom'
import Retailshop from '../Assets/Images/retail-shop-pos.avif'
import Supermart from '../Assets/Images/super-mart-pos.avif'
import Pharmacy from '../Assets/Images/pharmacy-pos.avif'
import Vector1 from '../Assets/Images/Vector 1.png'
import Vector2 from '../Assets/Images/Vector 2.png'
import Group94 from '../Assets/Images/Group 394.png'
import Group95 from '../Assets/Images/Group 395.png'
import Group96 from '../Assets/Images/Group 396.png'
import Group97 from '../Assets/Images/Group 397.png'

function Testheader() {
  return (
    <div>
      <section className="test-header header-mobile">
        <div className="container ">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-8 text-center text-dark">
                  <div className="content-wrapper">
                <h2 className="slider-heading mb-3" style={{color: '#000'}}>
                Have Total Control <br />And Maximum {" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                     Business Growth 
                  </span>{" "}
                  
                </h2>
                <p className="text-dark" style={{fontSize: '20px'}}>
                  Offer a seamless shopping experience with our Point of Sale
                  system, supporting a variety of payment options to boost your
                  revenue.
                </p>
                </div>
                <button className="site-buttons" style={{ color: "#fff", backgroundColor: 'var(--secondary-color)', zIndex: 100 }}>
                  <Link to='/pos-features' style={{ color: "#fff" }}>
                    View Features <span>&rarr;</span>
                  </Link>
                </button>
                </div>
            </div>
        </div>

        
            <img src={Retailshop} alt="header-img-1" className="img-fluid circle-1 head-img" />
            <img src={Supermart} alt="header-img-1" className="img-fluid circle-2 headimg" />
            <img src={Pharmacy} alt="header-img-1" className="img-fluid circle-3 headimg" />
            <img src={Vector1} alt="header-img-1" className="img-fluid wire-1" />
            <img src={Vector2} alt="header-img-1" className="img-fluid wire-2 headimg" />
            <img src={Group94} alt="header-img-1" className="img-fluid dot-1 headimg" />
            <img src={Group95} alt="header-img-1" className="img-fluid dot-2 headimg" />
            <img src={Group96} alt="header-img-1" className="img-fluid dot-3 headimg" />
            <img src={Group97} alt="header-img-1" className="img-fluid dot-4 headimg" />
        



            
      </section>
    </div>
  )
}

export default Testheader
