import React from "react";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

//todo es un componente
// TODO COMPONENTE ES UNA FUNCION QUE INICIA EN MAYUSCULA
// LOS COMPONENTES SON FUNCIONES QUE RETORNAN HTML

function Cimiento() {
  return (
    <div>
      <div className="row">
        <Navbar />
        <Jumbotron />
        <Card />
        <Card />
        <Card />
        <Card />
		    <Footer/>
      </div>
    </div>
  );
}

//equivalente a module
export default Cimiento;
