import React from "react";
import { useEffect, useState } from "react"

export default function Homepage() {

  const [recipe, setRecipe] = useState([]);

  useEffect(()=>{
    getRecipes();
  },[]);

  const getRecipes = async () => {
  const api = await fetch (`http://localhost:1337/api/recipes`);
  const data = await api.json();
  setRecipe(data.data);
  };

  return (
    <div key={recipe.id}>
      {recipe.map((recipe)=>{
        return(
          <ul>
            <li>
              <h5>{recipe.attributes.name}</h5>
              <p>{recipe.attributes.description}</p>
            </li>

          </ul>
        );
      })}
    </div>
  )
}