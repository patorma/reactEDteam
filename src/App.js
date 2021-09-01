import Cupcake from "./Cupcake";

import blue from './img/blue2.jpg'
import rose from './img/rose2.jpg'
//import './App.css'


const App = () => (
    <div className="container">
      <Cupcake color="rosa" sabor="vainilla" foto={rose} />
      <Cupcake color="azul" sabor="chocolate" foto={blue} />
      <Cupcake color="rosa" sabor="vainilla"  foto={rose}/>
      <Cupcake color="azul" sabor="chocolate" foto={blue} />
      <Cupcake color="rosa" sabor="vainilla"  foto={rose} />
      <Cupcake color="azul" sabor="chocolate" foto={blue} />
      <Cupcake color="rosa" sabor="vainilla"  foto={rose} />
      <Cupcake color="azul" sabor="chocolate" foto={blue} />
      <Cupcake color="rosa" sabor="vainilla"  foto={rose}/>
      <Cupcake color="azul" sabor="chocolate" foto={blue} />
    </div>
  );


export default App;
