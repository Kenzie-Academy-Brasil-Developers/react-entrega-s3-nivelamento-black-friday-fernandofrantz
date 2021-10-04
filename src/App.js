import "./App.css";
import { useState } from "react";
import GeneratePromos from "./components/GeneratePromos";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [product, setProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);

  const [promo, setPromo] = useState(0);
  const [randomProduct, setRandomProduct] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  console.log("currentSale", currentSale);

  return (
    <div className="App">
      <header className="App-header">
        <GeneratePromos
          setPromo={setPromo}
          setRandomProduct={setRandomProduct}
          product={product}
          randomProduct={randomProduct}
          promo={promo}
        />
        <div className="containerProducts">
          <ProductList
            randomProduct={randomProduct}
            promo={promo}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
          />
          <div className="cart">
            <Cart currentSale={currentSale} promo={promo} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
