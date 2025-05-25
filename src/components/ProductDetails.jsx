function ProductDetails({ product, onBack }) {
  return (
    <div
      style={{
        backgroundColor: "#fff0f5",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(255, 182, 193, 0.4)",
        marginTop: "20px",
        position: "relative",
      }}
    >
      <button
        onClick={onBack}
        style={{
          backgroundColor: "#c2185b",
          color: "white",
          border: "none",
          padding: "6px 10px",
          borderRadius: "8px",
          cursor: "pointer",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        ❌ Fermer
      </button>

      <h2 style={{ color: "#c2185b", marginTop: "30px" }}>{product.name}</h2>

      <img
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        style={{
          borderRadius: "10px",
          objectFit: "cover",
          margin: "20px 0",
        }}
      />

      <p style={{ fontWeight: "bold", color: "#880e4f" }}>
        Prix: {product.price}
      </p>

      <p
        style={{
          color: product.quantity < 10 ? "red" : "green",
          fontWeight: "600",
        }}
      >
        Quantité: {product.quantity}
      </p>

      <p style={{ marginTop: "10px" }}>
        🌸 Ceci est un parfum de qualité supérieure qui vous fera sentir magnifique !
      </p>
    </div>
  );
}

export default ProductDetails;
