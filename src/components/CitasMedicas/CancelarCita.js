import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import ContentHeader from "../ContentHeader";
import Footer from "../Footer";
import { testingApi, testingApi3 } from "../../pages/auth/testingAPI";
import swal from "sweetalert";
import axios from "axios";

const CancelarCita = () => {
  const baseUrl = "http://localhost:4000/citas";

  const [cita, setCita] = useState([]);
  const [medico, setMedico] = useState([]);

  useEffect(() => {
    testingApi(setCita);
  }, []);

  useEffect(() => {
    testingApi3(setMedico);
  }, []);

  const eliminarCita = async (idCita) => {

    try {
      // Llamar a la API para eliminar la cita por su ID
      const response = await axios.delete(`${baseUrl}/${idCita}`);

      if (response.status === 200) {
        const msg = "La cita fue eliminada correctamente";
        swal({
          title: "Éxito",
          text: msg,
          icon: "success",
          buttons: {
            confirm: {
              text: "Ok",
              value: "true",
              visible: "btn btn-primary",
              closeModal: true,
            },
          },
        });
        window.location.reload()
      } else {
        const msg = "La cita no ha sido eliminada";
        swal({
          title: "Error",
          text: msg,
          icon: "error",
          buttons: {
            confirm: {
              text: "Ok",
              value: "true",
              visible: "btn btn-danger",
              closeModal: true,
            },
          },
        });
      }
    } catch (error) {
      console.error("Error al eliminar la cita:", error);
    }
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Listado de citas"}
          breadCumb1={"Inicio"}
          breadCumb2={"Dashboard"}
          ruta1={"/home"}
          ruta2={"/citasMedicas"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Title</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "5%" }}>Id</th>
                    <th style={{ width: "20%" }}>Día</th>
                    <th style={{ width: "20%" }}>Hora</th>
                    <th style={{ width: "20%" }}>Número de Autorización</th>
                    <th style={{ width: "20%" }}>Médico</th>
                    <th style={{ width: "15%" }}>Cancelar Cita</th>
                  </tr>
                </thead>
                <tbody>
                  {cita !== 0 ? (
                    cita.map((cita) => (
                      <tr key={cita.id}>
                        <td>{cita.id}</td>
                        <td>{cita.dia}</td>
                        <td>{cita.hora}</td>
                        <th>{cita.numAutorizacion}</th>
                        {medico !== 0 ? (
                    medico.map((medico) => (
                      <tr key={medico.id}>
                        <th>{medico.nombre}</th>
                        <th>{medico.apellido}</th>
                        <th>{medico.especialidad}</th>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No hay medico</td>
                    </tr>
                  )}
                        <td>
                          <button
                            onClick={() => eliminarCita(cita.id)}
                            className="btn btn-sm btn-danger"
                          >
                            Cancelar Cita
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No hay citas</td>
                    </tr>
                  )}

                  
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CancelarCita;
