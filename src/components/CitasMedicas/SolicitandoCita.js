import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import ContentHeader from "../ContentHeader";
import Solici from "./Solici";
import Footer from "../Footer";

const SolicitandoCita = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="content-wrapper">
        <ContentHeader></ContentHeader>
        <section className="content">
          <Solici></Solici>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SolicitandoCita;
