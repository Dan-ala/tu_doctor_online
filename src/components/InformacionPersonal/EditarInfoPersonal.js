import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import Cookies from 'universal-cookie';

const EditarInfoPersonal = () => {
  const baseUrl = 'http://localhost:4000/usuarios';
  const cookies = new Cookies(); // Crear una instancia de Cookies

  const [usuario, setUsuario] = useState({
    id: "",
    nombre: "",
    email: "",
    password: "",
    confirmar: ""
  });

  const { id, nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    // Aquí debes cargar los datos del usuario actual desde las cookies
    const nombreUsuario = cookies.get('nombre');
    const emailUsuario = cookies.get('email');
    
    setUsuario({
      ...usuario,
      id: cookies.get('id'),
      nombre: nombreUsuario,
      email: emailUsuario
    });

    document.getElementById("nombre").focus();
  }, []);

  const EditarInfoPersonal = async (e) => {
    e.preventDefault();
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
      const msg = "La contraseña debe tener al menos 6 caracteres";
      swal({
        title: "Información",
        text: msg,
        icon: "info",
        buttons: {
          confirm: {
            text: "Ok",
            value: "true",
            visible: "btn btn-info",
            closeModal: true
          },
        },
      });
    } else {
      const data = {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password
      };
      try {
        const response = await axios.put(`${baseUrl}/${id}`, data);
        
        if (response.status === 200) {
          const msg = "Información actualizada correctamente";
          swal({
            title: "Éxito",
            text: msg,
            icon: "success",
            buttons: {
              confirm: {
                text: "Ok",
                value: "true",
                visible: "btn btn-success",
                closeModal: true
              }
            }
          });

          window.location.reload()

        } else {
          const msg = "No se pudo actualizar la información";
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
        }
      } catch (error) {
        console.error("Error al actualizar la información:", error);
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    EditarInfoPersonal(e);
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
              <b>Bienvenido, </b> {usuario.nombre}
            </Link>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Actualiza tu información personal</p>

              <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={onChange}
                    required
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
                    required
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
                    placeholder="Nueva Contraseña"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
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
                    placeholder="Confirmar Nueva Contraseña"
                    id="confirmar"
                    name="confirmar"
                    value={confirmar}
                    onChange={onChange}
                    required
                  />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>

                <div className="social-auth-links text-center mb-3">
                  <button type="submit" className="btn btn-block btn-success">
                    Actualizar
                  </button>

                  <Link to={"/home"} className="btn btn-block btn-danger">
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
};

export default EditarInfoPersonal;
