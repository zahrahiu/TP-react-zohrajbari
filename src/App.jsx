import { useState } from "react";
import products from "./data/product";
import ProductList from "./components/ProductList";


function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#c2185b",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        fontWeight: "700",
        fontSize: "20px",
        borderRadius: "0 0 12px 12px",
        boxShadow: "0 4px 10px rgba(194, 24, 91, 0.6)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ cursor: "pointer" }}>🌸 Ma Boutique de Parfums</div>
      <div style={{ display: "flex", gap: "20px", fontWeight: "500", fontSize: "16px" }}>
        <div style={{ cursor: "pointer" }}>Accueil</div>
        <div style={{ cursor: "pointer" }}>Produits</div>
        <div style={{ cursor: "pointer" }}>Contact</div>
      </div>
    </nav>
  );
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Navbar /> 
      <h1>Boutique de Parfums</h1>
      <ProductList products={products} onSelect={setSelectedProduct} />
    </div>
  );
}

export default App;
