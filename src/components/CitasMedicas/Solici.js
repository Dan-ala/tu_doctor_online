import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import APIInvoke from "../../utils/APIInvoke";

const Solici = () => {

  const baseUrl = 'http://localhost:4000/citas'

  const [cita, setCita] = useState({
    dia: "",
    hora: "",
    numAutorizacion: ""
  });

  const { dia, hora, numAutorizacion } = cita;

  const onChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const CrearCuenta = async () => {

    if (dia.trim() === "") {
      const msg = "Debe ingresar una fecha";
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
    }else if (hora.trim() === "") {
      const msg = "Debe ingresar una hora";
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
    } else {
      const data = {
        dia: cita.dia,
        hora: cita.hora,
        numAutorizacion: cita.numAutorizacion
      };
  
      try {
        // Verificar si ya existe una cita con la misma fecha y hora
        const response = await axios.get(baseUrl, { params: { dia: cita.dia, hora: cita.hora } });
        const citasExisten = response.data.length > 0;
  
        if (!citasExisten) {
          // Si no existen citas en ese horario, registrar la nueva cita
          await APIInvoke.invokePOST(`/citas`, data);
          const msg = "La cita fue agendada";
          swal({
            title: "Successful",
            text: msg,
            icon: "success",
            buttons: {
              confirm: {
                text: "Ok",
                value: "true",
                visible: "btn btn-primary",
                closeModal: true
              }
            }
          });
  
          setCita({
            dia: "",
            hora: "",
            numAutorizacion: ""
          });

        } else {
          // Si ya existe una cita en ese horario, mostrar una alerta
          const msg = "Cita no disponible";
        swal({
          title: "Atentención",
          text: msg,
          icon: "info",
          buttons: {
            confirm: {
              text: "Ok",
              value: "true",
              visible: "btn btn-primary",
              closeModal: true
            }
          }
        });
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    CrearCuenta();
  };

  return (
    <div className="hold-transition">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Google Font: Source Sans Pro */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
      />
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="../../plugins/fontawesome-free/css/all.min.css"
      />
      {/* icheck bootstrap */}
      <link
        rel="stylesheet"
        href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css"
      />
      {/* Theme style */}
      <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
      <div>
        <div className="login-box">
          <div className="login-logo">
            <Link to={"../../index2.html"}>
              <b>Agenda tu</b> Cita
            </Link>
          </div>

          <div className="card">
            <div className="card-body login-card-body" style={{ width: "88%" }}>
              <p className="login-box-msg">Agenda tu cita ahora!</p>

              <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="date"
                    className="form-control"
                    // placeholder="Nombre"
                    id="dia"
                    name="dia"
                    value={dia}
                    onChange={onChange}
                    require="true"
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    type="time"
                    className="form-control"
                    // placeholder="Email"
                    id="hora"
                    name="hora"
                    value={hora}
                    onChange={onChange}
                    require="true"
                  />
                </div>

                <div className="input-group mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Nuúmero de Autorización"
                    id="numAutorizacion"
                    name="numAutorizacion"
                    value={numAutorizacion}
                    onChange={onChange}
                    require="true"
                  />
                </div>

                <div className="social-auth-links text-center mb-3">
                  <button type="submit" className="btn btn-block btn-success">
                    Agendar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solici;
