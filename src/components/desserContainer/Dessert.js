import React from "react";
import { Link } from "react-router-dom";


function Dessert({ mealThumb, mealId, mealName }) {
  return (
    <div className="card" style={{ width: 15 + "rem" }}>
      <img src={mealThumb} className="card-img-top" alt={mealName} />
      <div className="card-body">
        <h6 className="card-title">{mealName}</h6>
        <Link to={`/item/${mealId}`} className="btn btn-primary">
          Get Recipe
        </Link>
      </div>
    </div>
  );
}

export default Dessert;
