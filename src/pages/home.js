import React from 'react'
import ContentHeader from "../components/ContentHeader";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard2 from '../components/InformacionPersonal/Dashboard2';

const Home = () => {

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="content-wrapper">
         
        <ContentHeader
          titulo={"Dashboard"}
          breadCumb1={"Inicio"}
          breadCumb2={"Dashboard"}
          ruta1={"/home"}
          ruta2={"/citasMedicas"}
        />

        <section className="content">
          <Dashboard></Dashboard>
          <Dashboard2></Dashboard2>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
