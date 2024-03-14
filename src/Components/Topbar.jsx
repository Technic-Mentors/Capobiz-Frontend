import React from 'react'
import { useLocation } from 'react-router-dom'

function Topbar() {
    const location = useLocation()

    if (location.pathname === "/admin/addblog" || location.pathname === "/admin/allposts" || location.pathname === "/admin/allcategory" || location.pathname === "/admin/addcategory" || location.pathname === "/admin/board" || location.pathname === "/admin/demoUsers") {
        return null;
    }
    return (
        <div>
            <div className="top-bar d-none d-md-block">
                <div className="container-fluid px-4">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="top-bar-left">
                                {/* <div className="text mt-2">
                                <i className="far fa-clock"></i>&nbsp;
                                <h2>9:00AM - 6:00PM</h2>
                                <p>Mon - Fri</p>
                            </div> */}
                                <div className="text mt-2">
                                    <i className="fa fa-phone-alt"></i>&nbsp;
                                    <h2 style={{ fontFamily: 'poppins' }}>Make Us A Call For Demo: +923 111 122 144</h2>
                                    {/* <p>For Appointment</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="top-bar-right">
                                <div className="social mt-2">
                                    <a href="/#"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/TechnicMentors"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/technicmentorsofficial"><i className="fab fa-instagram"></i></a>
                                    <a href="https://twitter.com/TechnicMentors"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.youtube.com/c/TechnicMentors"><i className="fab fa-youtube"></i></a>
                                    <a href="https://www.linkedin.com/in/TechnicMentors/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
