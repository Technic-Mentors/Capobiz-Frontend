import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Admindata from "./Admindata";

export default function Admin() {
  return (
    <div className="ps-0">
      <section className="inner-page-header">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h2 className="slider-heading">
                  Capobiz : Admin Panel
                </h2>

              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <div className="row mt-3" style={{ backgroundColor: "rgb(246 249 255)" }}>
          <div className=" col-md-2">
            <div
              className="background-img5"
              style={{ backgroundImage: `url(${"img/b1.jpg"})` }}
            >
              <div
                className="color-overlay5 pb-3 pt-2 outlet"
              >
                <Admindata />
              </div>
            </div>
          </div>

          <div className="col-md-10 mt-5 mb-5" style={{ textAlign: "justify" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
