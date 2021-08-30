const Cupcake = ({foto,color,sabor}) => {
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