
import React from 'react';
import recipe from './recipe.json'; // Adjust the path as necessary

function RecipeImage() {
  return (
    <div>
      <img src={recipe.recipeImage} alt={recipe.recipeImage} className="recipeImage" />
    </div>
  );
}

export default RecipeImage;
 //import json file for the data
 //apply css for className recipeImage
 

 