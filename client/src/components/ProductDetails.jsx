function ProductDetails({ item }) {
  return (
    <div className="product">
      <h3 className="product-name">{item.Nom}</h3>
      <h3 className="product-rayon">{item.Rayon_Nom}</h3>
      <h3 className="product-status">{item.Statut_Nom}</h3>
    </div>
  );
}

export default ProductDetails;
