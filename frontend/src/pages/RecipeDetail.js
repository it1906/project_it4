import React from "react";
import { useParams } from "react-router-dom";

export default function Recipes() {
  const { id } = useParams();
  return (
    <div>
      <h2>Výpis článku s id={ id }</h2>
      <p>Tady budou zobrazeny podrobnosti o jednom článku</p>
    </div>
  );
}
