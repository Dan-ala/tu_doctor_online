import React from "react";
import { Link } from "react-router-dom";
const Dashboard2 = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>Info - Personal</h3>
              <p />
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <Link to={"/editarInfoPersonal"} className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
