import React from "react";
import useFetch from "../hooks/useFetch";
import {Link} from 'react-router-dom';

export default function Homepage() {
  const {loading, error, data} = useFetch('http://localhost:1337/api/recipes')

  if(loading) return <p>Načítání...</p>
  if(error) return <p>Chyba</p>

  console.log(data)

  return (
    <div>
      {data.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <p>{recipe.description.substring(0, 200)}...</p>
          <Link to={`/recipes/${recipe.id}`}>Vice...</Link>
        </div>
      ))}
    </div>
  )
}
