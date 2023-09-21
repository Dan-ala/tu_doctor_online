import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import APIInvoke from "../../utils/APIInvoke";
// import { testingApi } from "./testingAPI";

const Login = () => {

  // Para redireccionar de un componente a otro

  const navigate = useNavigate()

  const [usuarios, setUsuario] = useState({
    email: "",
    password: ""
  });

  const { email, password } = usuarios;

  const onChange = (e) => {
    setUsuario({
      ...usuarios,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);


  const iniciarSesion = async () =>{
    if (password.length < 6){
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
            closeModal: true
          }
        }
      });
    } else {
      const data = {
        email: usuarios.email,
        password: usuarios.password
      };
      const response = await APIInvoke.invokeGET(`/usuarios`, data)
      console.log(response)


      // Define the user to search for
var expectedEmail = "daniel@gmail.com";
var expectedPassword = "123456";


if (usuarios.email !== expectedEmail || usuarios.password !== expectedPassword) {
  const msg = "No fue posible iniciar sesión, verifique los datos ingresados";
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
else {
        const jwt = response.token

        localStorage.setItem('token', jwt)

        navigate('/home')
      }
    }
  }


  const onSubmit = (e) => {
    e.preventDefault()
    iniciarSesion()
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
