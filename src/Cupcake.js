import { useState, useEffect } from "react";
import './Cupcake.css'

const Cupcake = ({foto,color,sabor}) => {
  // se van a declarar dos variables que son devueltas por useState(devuelve un array)
  //primer parametro estado y segundo parametro funcion para modificar el estado
  // y es igual a lo que me devuelva useState 
  //  useState recibe como parametro el valor inicial o por defecto de mi componente
  const [vendido,setVendido] =  useState(false)
  // componente sin estado stateless
  //recibe el nuevo valor que tendra vendido
  const vender = () => setVendido(true)
    
    
  
  return (
    <div className="cupcake" id="test">
      {color === "azul" ? (
        <img src={foto} alt="azul" className="cake" />
      ) : (
        <img src={foto} alt="rosa" className="cakeRose" />
      )}

      <h2 className="titulo">{color}</h2>

      <p className="titulo2">{`Sabor: ${sabor}`}</p>
      <p>
        <b>Estado: </b>
        {vendido ? "Vendido" : "A la venta"}
      </p>
      <p>
         {!vendido && (
        <button id="botonVender" onClick={vender} className="botonVender">
          Vender
        </button>
      )}
      </p>
     
    </div>
  );
};

export default Cupcake