import { useState, useEffect } from "react";
import './Cupcake.css'

const Cupcake = ({foto,color,sabor}) => {
  // se van a declarar dos variables que son devueltas por useState(devuelve un array)
  //primer parametro estado y segundo parametro funcion para modificar el estado
  // y es igual a lo que me devuelva useState 
  //  useState recibe como parametro el valor inicial o por defecto de mi componente
  const [vendido,setVendido] =  useState(false)
  const [reservado,setReservado] =  useState(false)
  // componente sin estado stateless
  //recibe el nuevo valor que tendra vendido
  const vender = () => {
    setVendido(true)
    setReservado(true)
  }
  
  const reservar = () => setReservado(true)
  // Se hace el llamado directo a useEffect
  // Recibe dos parametros un funcion y un valor opcional, la función se va ejecutar cada vez que mi componente se vaya a montar, actualizar, etc..
  //useEffect va a servir para traer información 
  //ejemplo traer datos de un backend desde bd mediante api
  useEffect(() =>{
    //el contenido de esta funcion o la funcion como tal se va ejecutar cada vez que mi componente necesite ser renderizado nuevamente
    //Desventaja si se quiere ejecutar alguna funcion por una vez no se podria
    // el [] recibe los valores del estado que pueden ir cambiando 
    //ose en useEffect la funcion se va a ejecutar si un valor del array se modifica 
    console.log('Estamos por iniciar el componente',Date.now())
  },[])
    
    
  
  return (
    <div className="cupcake" id="test">
      {/* {color === "azul" ? (
        <img src={foto} alt="azul" className="cake" />
      ) : (
        <img src={foto} alt="rosa" className="cakeRose" />
      )} */}
 <img src={foto} alt="cake" className="cake" />
      <h2 className="titulo">{color}</h2>

      <p className="titulo2">{`Sabor: ${sabor}`}</p>
      <p>
        <b>Estado: </b>
        {reservado ? "Reservado" : "Libre"}
      </p>
     
         {!reservado && (
        <button id="botonVender" onClick={reservar} className="botonVender">
         Reservar
        </button>
      )}
     <p>
        <b>Estado: </b>
        {vendido ? "Vendido" : "A la venta"}
      </p>
     
         {!vendido && (
        <button id="botonVender" onClick={vender} className="botonVender">
          Vender
        </button>
      )}
     
    </div>
  );
};

export default Cupcake