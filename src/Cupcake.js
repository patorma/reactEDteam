import "./Cupcake.css";

function Cupcake({ color, sabor, foto }) {
  console.log({ color, sabor, foto });
  return (
    <div className="cupcake">
      {color === "azul" ? (
        <img src={foto} alt="azul" className="cake" />
      ) : (
        <img src={foto} alt="rosa" className="cakeRose" />
      )}

      <h2 className="titulo">{color}</h2>

      <p className="titulo2">{`Sabor: ${sabor}`}</p>
    </div>
  );
}

export default Cupcake;
