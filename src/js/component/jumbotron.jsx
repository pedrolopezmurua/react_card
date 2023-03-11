import React from "react";

function Jumbotron() {
  return (
    <div className="container text-center">
      <div className=" row justify-content-center ">
        <div className="col col-lg-11 text-center">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Custom jumbotron</h1>
              <p className="col-md-8 fs-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti labore quae at deserunt corporis velit quisquam iusto
                dignissimos sint ut numquam unde nostrum a blanditiis magnam
                nesciunt, nam est ab!
              </p>
              <button className="btn btn-primary btn-lg d-flex justify-content-around"  type="button">
                Call to Action!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
