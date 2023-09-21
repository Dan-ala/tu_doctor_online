import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from 'axios'
import Cookies from 'universal-cookie'

const Login = () => {

  const baseUrl = 'http://localhost:4000/usuarios'
  const cookies = new Cookies()

  const [usuario, setUsuario] = useState({
    email:'',
    password:''
  });

  // Para redireccionar de un componente a otro

  const navigate = useNavigate();

  const { email, password } = usuario;

  const onChange = async (e) => {
    await setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  const iniciarSesion = async () => {

    await axios.get(baseUrl, {params: {email: usuario.email, password: usuario.password}})
    .then(response=>{
      return response.data
    })
    .then(response=>{
      if (response.length>0){
        let r = response[0]
        cookies.set('id',r.id, {path: "/"})
        cookies.set('nombre',r.nombre, {path: "/"})
        cookies.set('email',r.email, {path: "/"})
        cookies.set('password',r.password, {path: "/"})
        alert(`Bienvenido ${r.nombre}`)
        navigate("/home")

      }else{
      const msg = "Verifique el email o contraseña, puede ser de que no exista";
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
    })
    .catch(error=>{
      console.log(error)
    })

    if (password.length < 6) {
      const msg = "La contraseña debe tener al menos 6 caracteres";
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
  }

  const onSubmit = (e) => {
    e.preventDefault();
    iniciarSesion();
  };

  return (
    <div className="hold-transition login-page">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>AdminLTE 3 | Log in</title>
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
      <div className="login-box">
        <div className="login-logo">
          <Link to={"../../index2.html"}>
            <b>Log</b>In
          </Link>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={onSubmit}>
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

              <div className="social-auth-links text-center mb-3">
                {/* <Link to={"/home"}> */}
                <button type="submit" className="btn btn-block btn-primary">
                  Ingresar
                </button>
                {/* </Link> */}

                <br />

                <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
                  Crear Cuenta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
