import "./Cupcake.css";
import { Component } from "react";

class Cupcake extends Component {
  render() {
    return (
      <div className="cupcake">
        {this.props.color === "azul" ? (
          <img src={this.props.foto} alt="azul" className="cake" />
        ) : (
          <img src={this.props.foto} alt="rosa" className="cakeRose" />
        )}

        <h2 className="titulo">{this.props.color}</h2>

        <p className="titulo2">{`Sabor: ${this.props.sabor}`}</p>
      </div>
    );
  }
}
// function Cupcake({ color, sabor, foto }) {
//   console.log({ color, sabor, foto });
//   return (
//     <div className="cupcake">
//       {color === "azul" ? (
//         <img src={foto} alt="azul" className="cake" />
//       ) : (
//         <img src={foto} alt="rosa" className="cakeRose" />
//       )}

//       <h2 className="titulo">{color}</h2>

//       <p className="titulo2">{`Sabor: ${sabor}`}</p>
//     </div>
//   );
// }

export default Cupcake;
