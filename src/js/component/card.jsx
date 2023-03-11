import React from "react";

function Card() {
  return (
    <div className="container col-xs-12 col-sm-6 col-md-4 col-lg-3 p-4">
      <div className="row d-flex">
        <div className=" col-sm-3"></div>
        <div className="card mx-auto col-sm-3" style={{ width: "18rem" }}>
          <img
            src="https://gossipvehiculo.com/wp-content/uploads/2021/04/1-2021_Mercedes_G63_001-source_Cropped.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              unde consequuntur reiciendis, nisi est dignissimos eos pariatur.
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"></li>
              <li className="list-group-item"></li>
            </ul>
            <div class="d-grid ">
              <a href="#" className="btn btn-primary  ">
                Find Out More!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
