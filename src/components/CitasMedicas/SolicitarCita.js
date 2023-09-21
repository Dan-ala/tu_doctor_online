import React from "react";
import { Link } from "react-router-dom";
const SolicitarCita = () => {
  return (
    <div classname="container-fluid">
      <div classname="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>Solicitar Cita</h3>
              <p />
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <Link to={"/solicitandoCita"} className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
      </div>
      <div classname="container-fluid">
      <div classname="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>Cancelar Cita</h3>
              <p />
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <Link to={"/cancelarCita"} className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default SolicitarCita;
