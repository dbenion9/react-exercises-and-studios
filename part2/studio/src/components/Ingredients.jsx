import React from 'react';
import recipe from './recipe.json'; // Adjust the path as necessary

function IngredientsList() {
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((index, ingredients) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsList;
 
//import json file for the data
//use a nested map to get inside the inner array
 