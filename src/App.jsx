
import { render } from '@testing-library/react';
import './App.css';
import ProductCard from './componentes/ProductCard/ProductCard';
import NavBar from './componentes/NavBar/NavBar';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';


function App() {

  const cliente = "Franco";
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting="Hola Mundo"/>
     <ProductCard />
    </div>
  );
}


export default App;
