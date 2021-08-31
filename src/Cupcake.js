import { useState } from "react";

const Cupcake = ({foto,color,sabor}) => {
  // se van a declarar dos variables que son devueltas por useState(devuelve un array)
  //primer parametro estado y segundo parametro funcion para modificar el estado
  // y es igual a lo que me devuelva useState 
  //  useState recibe como parametro el valor inicial o por defecto de mi componente
  const [vendido,setVendido] =  useState(false)
  // componente sin estado stateless
  const vender = () => console.log('Vendido!!')
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
      {!vendido && (
        <button id="botonVender" onClick={vender}>
          Vender
        </button>
      )}
    </div>
  );
};

export default Cupcake