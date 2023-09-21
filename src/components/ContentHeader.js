import React from "react";
import { Link } from "react-router-dom";
const ContentHeader = ({titulo, breadCumb1, breadCumb2, ruta1, ruta2}) => {
  return (
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>{titulo}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <Link to={ruta1}>{breadCumb1}</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link to={ruta2}>{breadCumb2}</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentHeader;
