function ProductList({ products, onSelect }) {
  return (
    <div
      style={{
        backgroundColor: "#ffe4e6",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(255, 182, 193, 0.4)",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#c2185b", fontWeight: "600" }}>
        🛍️ Liste des Produits
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelect(product)}
            style={{
              border: product.quantity < 10 ? "3px solid red" : "1px solid #f48fb1",
              borderRadius: "10px",
              padding: "15px",
              width: "180px",
              boxShadow: "0 4px 8px rgba(244, 143, 177, 0.5)",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(244, 143, 177, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(244, 143, 177, 0.5)";
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width={140}
              height={140}
              style={{ borderRadius: "8px", objectFit: "cover", marginBottom: "10px" }}
            />
            <h4 style={{ margin: "5px 0", color: "#ad1457" }}>{product.name}</h4>
            <p style={{ color: "#880e4f", fontWeight: "bold" }}>{product.price}</p>
            <p style={{ color: product.quantity < 10 ? "red" : "green", fontWeight: "600" }}>
              Quantité: {product.quantity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
