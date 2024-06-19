import { useState } from "react";
import connexion from "../services/connexion";

const initialIngredient = {
  Nom: "",
  Rayon_id: null,
  Statut_id: null,
};

function AddItemForm() {
  const [ingredient, setIngredient] = useState(initialIngredient);

  const handleIngredient = (event) => {
    setIngredient((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleForm = async(e) => {
    e.preventDefault();
    try {
    await connexion.post("/api/products", ingredient);
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <form onSubmit={handleForm}>
      Ajouter un produit
      <label>
        Nom
        <input
          type="text"
          value={ingredient.Nom}
          name="Nom"
          onChange={(event) => handleIngredient(event)}
        />
      </label>
      <label>
        Rayon
        <input 
        type="text"
        value={ingredient.Rayon_id}
        name="Rayon_id"
        onChange={(event) => handleIngredient(event)} />
      </label>
      <label>
        Statut
        <input 
        type="text"
        value={ingredient.Statut_id}
        name="Statut_id"
        onChange={(event) => handleIngredient(event)} />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddItemForm;
