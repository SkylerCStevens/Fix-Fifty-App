import React from "react";
import "./jobs.css"



function Joblistings() {
    return (
        <div>
            <h1>JOBS</h1>
            <div className="product-box">
                <img
                  src="https://image.flaticon.com/icons/png/512/46/46405.png"
                  alt="Construction Company"
                  className="img card-img-top logo"
                ></img>
                <div className="card-body">
                  <h3 className="card-header">Paint a House</h3>
                  <p className="card-subtitle">Construction Company</p>
                  <p className="card-text ml-3">Tasked to paint the outside of a 3 story house in 5 days</p>
                  <p>$2000</p>
                  <p>5 day deadline</p>
                  <p>10 days left to apply</p>
                </div>
                <button>APPLY</button>
              </div>

              <div className="product-box">
                <img
                  src="https://image.flaticon.com/icons/png/512/46/46405.png"
                  alt="Construction Company"
                  className="img card-img-top logo"
                ></img>
                <div className="card-body">
                  <h3 className="card-header">Roof Repair</h3>
                  <p className="card-subtitle">Construction Company</p>
                  <p className="card-text ml-3">Tasked to repair one of our clients roofs within 3 days</p>
                  <p>$2000</p>
                  <p>3 day deadline</p>
                  <p>1 day left to apply</p>
                </div>
                <button>APPLY</button>
              </div>


              <div className="product-box">
                <img
                  src="https://image.flaticon.com/icons/png/512/48/48821.png"
                  alt="Realty Company"
                  className="img card-img-top logo"
                ></img>
                <div className="card-body">
                  <h3 className="card-header">Clean a House</h3>
                  <p className="card-subtitle">Realty Company</p>
                  <p className="card-text ml-3">Tasked to clean a 3 bedroom 1500 sq ft house in 2 days</p>
                  <p>$2000</p>
                  <p>2 day deadline</p>
                  <p>10 days left to apply</p>
                </div>
                <button>APPLY</button>
              </div>
        </div>
    )

}




export default Joblistings;
