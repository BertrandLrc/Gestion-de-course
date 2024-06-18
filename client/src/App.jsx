import { useLoaderData } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

function App() {
  const data = useLoaderData();

  return (
    <>
      <h1 className="title">Ma liste de course</h1>
      <div className="header">
        <h2>Nom du produit</h2>
        <h2>Rayon</h2>
        <h2>Status</h2>
      </div>
      <ul className="product-list">
        {data.map((product) => (
          <li className="product-item" key={product.id}>
            <ProductDetails item={product} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
