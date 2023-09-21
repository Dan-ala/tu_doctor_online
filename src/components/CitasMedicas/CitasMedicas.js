import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import ContentHeader from "../ContentHeader";
import Footer from "../Footer";
import SolicitarCita from "./SolicitarCita";

const CitasMedicas = () => {
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
            <SolicitarCita></SolicitarCita>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CitasMedicas;
