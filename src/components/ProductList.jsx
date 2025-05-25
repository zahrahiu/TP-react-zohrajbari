function ProductList({ products, onSelect }) {
  return (
    <div>
      <h2>Liste des Produits</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelect(product)}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              cursor: "pointer",
              width: "150px",
            }}
          >
            <img src={product.image} alt={product.name} width={120} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;