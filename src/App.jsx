
import { render } from '@testing-library/react';
import './App.css';
import ProductCard from './componentes/ProductCard/ProductCard';
import NavBar from './componentes/NavBar/NavBar';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import Articulos from './componentes/Articulos/Articulos';
import Hooks from './componentes/Hooks/Hooks';

function App() {

  const cliente = "Franco";
  return (
    <>
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting="Hola Mundo"/>
     <ProductCard />
    </div>
    <h1> Ropa </h1>
    <Articulos titulo="Campera" img="https://d3ugyf2ht6aenh.cloudfront.net/stores/591/146/products/1-campera-hombre-cuero-clasica-rock-napon-liam-leather1-f49d90b85ba90d830d15506126397918-480-0.jpg">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio consequatur pariatur earum expedita ab? Doloribus alias voluptatum veritatis porro pariatur et cupiditate enim dolor tenetur qui! Ipsam, rerum totam?</p>
    </Articulos>
    <Articulos titulo="Pantalon" img="https://ae01.alicdn.com/kf/H8b27adf2a5964f708d991a603cd14582M/Pantalones-vaqueros-para-hombre-jeans-con-bordado-de-pies-delgados-moda-hip-hop-rock-tide-informales.jpg">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officia unde aut, ad ex vel. Ea odit nam rerum animi? Laudantium ab aliquam doloribus eligendi animi. Labore sunt dicta reiciendis.</p>
    </Articulos>

    <h1>Productos Nuevos</h1>
      <Articulos titulo="Cinturon" img="https://d3ugyf2ht6aenh.cloudfront.net/stores/096/971/products/cinto-more-tackles-11-c95a7b5a72f342257216650858295093-640-0.webp">
      </Articulos>
     
    }
    <Hooks/>
    
  </>

 

  );
}




export default App;
