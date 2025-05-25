import { useState } from "react";
import products from "./data/product";
import ProductList from "./components/ProductList";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Boutique de Parfums</h1>
      <ProductList products={products} onSelect={setSelectedProduct} />
    </div>
  );
}

export default App;