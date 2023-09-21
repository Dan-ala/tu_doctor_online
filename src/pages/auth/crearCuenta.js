import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import axios from "axios";

const CrearCuenta = () => {

  const baseUrl = 'http://localhost:4000/usuarios'

  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: ""
  });

  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const CrearCuenta = async () => {
    if (password !== confirmar) {
      const msg = "Las contraseñas no coinciden";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: "true",
            visible: "btn btn-danger",
            closeModal: true
          },
        },
      });
    } else if (password.length < 6) {
      const msg = "La contraseña al menos debe tener 6 carateres";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: "true",
            visible: "btn btn-danger",
            closeModal: true
          },
        },
      });
    } else {
      const data = {
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password
      };
      try {
        // Verificar si ya existe una cita con la misma fecha y hora
        const response = await axios.get(baseUrl, { params: { email: usuario.email } });
        const usuariosExisten = response.data.length > 0;
  
        if (!usuariosExisten) {
          // Si no existen usuarios en la API, registrar el nuevo usuario
          await APIInvoke.invokePOST(`/usuarios`, data);
          const msg = "Usuario creado";
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
  
          setUsuario({
            nombre: "",
            email: "",
            password: "",
            confirmar: ""
          });

        } else {
          // Si ya existe un usuario
          const msg = "El usuario ya existe";
        swal({
          title: "Atentención",
          text: msg,
          icon: "info",
          buttons: {
            confirm: {
              text: "Ok",
              value: "true",
              visible: "btn btn-info",
              closeModal: true
            }
          }
        });
        }
      } catch (error) {
        console.error(error);
      }
    }

  }

  const onSubmit = async (e) => {
    e.preventDefault()
    CrearCuenta()
  };

  return (
    <div className="hold-transition login-page">
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
              <b>Tu Doctor</b> Online
            </Link>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign up to start your session</p>

              <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="nombre"
                    className="form-control"
                    placeholder="Nombre"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={onChange}
                    require="true"
                  />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    require="true"
                  />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    require="true"
                  />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirmar"
                    id="confirmar"
                    name="confirmar"
                    value={confirmar}
                    onChange={onChange}
                    require="true"
                  />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>

                <div className="social-auth-links text-center mb-3">
                  <button type="submit" className="btn btn-block btn-primary">
                    Registrar
                  </button>

                  <Link to={"/"} className="btn btn-block btn-danger">
                    Regresar
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearCuenta;
