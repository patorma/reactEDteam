import "./Cupcake.css";
import { Component } from "react";

class Cupcake extends Component {
  // el componente necesita constructor para utilizar el estado
  //El estado son valores independientes de cada componente que yo necesito que cambie. El estado es un objeto en el cual puedo generar los valores que yo quiera. Luego para poder modificar el estado puedo tener un boton y al hacerle click ejecute un método
  constructor(props) {
    super(props);
    this.state = {
      vendido: false, // *
    };
    // hay que hacer esto para que funcione los metodos que creamos
    this.vender = this.vender.bind(this);
  }

  vender() {
    // recibe un objeto que reemplaza a *
    this.setState({
      vendido: true,
    });
  }
  // los 4 métodos son para manejar la informacion antes que ocurra el render
  componentWillMount(){
    console.log('El componente se montará')
    let test = document.getElementById('test')
    console.log(test)
  }

  componentDidMount(){
    console.log('El componente se montó')
    let test = document.getElementById('test')
    console.log(test)
  }

  componentWillUpdate(){
    console.log('El componente se actualizará')
    let botonVender = document.getElementById('botonVender')
    console.log(botonVender)
  }

  componentDidUpdate(){
    console.log('El componente se actualizó')
    let botonVender = document.getElementById('botonVender')
    console.log(botonVender)
  }
  // cada vez que el componente camia el render vuelve a ejecutarse
  render() {
    console.log('MONTAJE!!')
    return (
      <div className="cupcake" id="test">
        {this.props.color === "azul" ? (
          <img src={this.props.foto} alt="azul" className="cake" />
        ) : (
          <img src={this.props.foto} alt="rosa" className="cakeRose" />
        )}

        <h2 className="titulo">{this.props.color}</h2>

        <p className="titulo2">{`Sabor: ${this.props.sabor}`}</p>
        <p>
          <b>Estado: </b>
          {this.state.vendido ? "Vendido" : "A la venta"}
        </p>
        {!this.state.vendido && <button id="botonVender" onClick={this.vender}>Vender</button>}
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

/**
 * Ciclo de vida
 * -Nacer,crecer, reproducirse y morir
 *
 * Lifecycle de los componentes
 *
 * El componente:
 * Se va a montar: componentWillMount()
 * Montaje: render() al montarse corre este metodo y esta en el DOM
 * Se ha montado: componentDidMount()
 *
 * Se va actualizar: componentWillUpdate()
 * Montaje: render()
 * Se ha actualiado:componentDidUpdate();
 *
 * Se desmontará: componentWillUnmount()
 *
 */
