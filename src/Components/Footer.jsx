
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()

  if (location.pathname === "/admin/addblog" || location.pathname === "/admin/allposts" || location.pathname === "/admin/allcategory" || location.pathname === "/admin/addcategory" || location.pathname === "/admin/board" || location.pathname === "/admin/demoUsers") {
      return null;
  }
  return (
    <div>
      <footer id="footer">
        <div className="footer-top">
          <div className="container footer-container">
            <div className="row d-flex justify-content-between">

              <div className="col-lg-4 col-md-4 footer-contact text-start">

                <h5 className="text-uppercase mb-3">Technic Mentors POS</h5>
                <p style={{ color: '#fff' }}>Say goodbye to complexity, and welcome streamlined operations and unmatched efficiency. Explore the future of POS solutions with us, where innovation meets seamless functionality, and success becomes your everyday companion.</p>
                <section className='social-icons'>
                  <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" to="https://www.facebook.com/TechnicMentors" role="button"
                  ><i className="fab fa-facebook-f"></i
                  ></Link>

                  <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" to="https://twitter.com/TechnicMentors" role="button"
                  ><i className="fab fa-twitter"></i
                  ></Link>

                  <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" to="https://www.youtube.com/c/TechnicMentors" role="button"
                  ><i className="fab fa-youtube"></i
                  ></Link>

                  <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" to="https://www.instagram.com/technicmentorsofficial" role="button"
                  ><i className="fab fa-instagram"></i
                  ></Link>

                  <Link data-mdb-ripple-init className="btn btn-outline btn-floating m-1" to="https://www.linkedin.com/in/TechnicMentors/" role="button"
                  ><i className="fab fa-linkedin-in"></i
                  ></Link>
                </section>
              </div>

              <div className="col-lg-4 col-md-4 footer-links text-start">

                <h5 className="text-uppercase">Quick Links</h5>

                <ul className="list-unstyled footer-listing ">
                  <li><i
                    className="fa-solid fa-caret-right"
                    style={{
                      fontSize: "15px",
                      color: "var(--secondary-color)",
                    }}
                  ></i>&nbsp;
                    <Link to="/" style={{ color: '#fff' }}>Home</Link>
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-caret-right"
                      style={{
                        fontSize: "15px",
                        color: "var(--secondary-color)",
                      }}
                    ></i>&nbsp;
                    <Link to="/about" style={{ color: '#fff' }}>About</Link>
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-caret-right"
                      style={{
                        fontSize: "15px",
                        color: "var(--secondary-color)",
                      }}
                    ></i>&nbsp;
                    <Link to="/pos-features" style={{ color: '#fff' }}>Features</Link>
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-caret-right"
                      style={{
                        fontSize: "15px",
                        color: "var(--secondary-color)",
                      }}
                    ></i>&nbsp;
                    <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-caret-right"
                      style={{
                        fontSize: "15px",
                        color: "var(--secondary-color)",
                      }}
                    ></i>&nbsp;
                    <Link to="/signin" style={{ color: '#fff' }}>Admin</Link>
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-caret-right"
                      style={{
                        fontSize: "15px",
                        color: "var(--secondary-color)",
                      }}
                    ></i>&nbsp;
                    <Link to="/pos-demo" style={{ color: '#fff' }}>Get Free POS Demo</Link>
                  </li>
                </ul>

              </div>

              <div className="col-lg-4 col-md-4 footer-links text-start">
                <h4>Let's Meet</h4>
                <p>
                  <i className="fas fa-location-dot" style={{
                    fontSize: "15px",
                    color: "var(--secondary-color)",
                  }}></i> <strong style={{ color: '#fff' }}>Address:</strong>  <br />
                  <p style={{ color: '#fff' }}>148, Mumtaz Market, Opposite ChaseUp, G.T. Road Gujranwala</p>
                </p>
                <p>
                  <i className="fas fa-phone" style={{
                    fontSize: "15px",
                    color: "var(--secondary-color)",
                  }}></i> <strong style={{ color: '#fff' }}>Phone:</strong>  <br />
                  <p style={{ color: '#fff' }}>+923 111 122 144</p>
                </p>
                <p>
                  <i className="fas fa-envelope" style={{
                    fontSize: "15px",
                    color: "var(--secondary-color)",
                  }}></i> <strong style={{ color: '#fff' }}>Email:</strong>  <br />
                  <a href='mailto:info@capobiz.com' style={{ color: '#fff' }}>info@capobiz.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="container-fluid bottom-footer text-center">
        <div className="copyright">
          &copy; Copyright <strong><span>CapoBiz</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Developed With Love By <a href="https://technicmentors.com" className='fw-bold' target='_blank' rel='noreferrer' style={{ color: 'var(--primary-color)' }}>Technic Mentors</a>
        </div>
      </div>
    </div>
  )
}

export default Footer

