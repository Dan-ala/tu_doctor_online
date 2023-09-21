import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //Estos son los componentes del ruteo
import Login from './pages/auth/login';
import CrearCuenta from './pages/auth/crearCuenta';
import Home  from './pages/home';
import CitasMedicas from './components/CitasMedicas/CitasMedicas';
import SolicitandoCita from './components/CitasMedicas/SolicitandoCita';
import CancelarCita from './components/CitasMedicas/CancelarCita';
import EditarInfoPersonal from './components/InformacionPersonal/EditarInfoPersonal';


function App() {

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path='/crear-cuenta' exact element={<CrearCuenta/>}/>
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/citasMedicas' exact element={<CitasMedicas/>}/>
          <Route path='/solicitandoCita' exact element={<SolicitandoCita/>}/>
          <Route path='/cancelarCita' exact element={<CancelarCita/>}/>
          <Route path='/editarInfoPersonal' exact element={<EditarInfoPersonal/>}/>

          </Routes>
      </Router>
    </Fragment>
  );
}

export default App;