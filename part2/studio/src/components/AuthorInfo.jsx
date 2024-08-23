import React from 'react';
import recipe from './recipe.json'; // Adjust the path as necessary

function AuthorInfo() {
  const recipeAuthor= ()=> {return <div key={recipe.author}>{recipe.author}</div>;
}
  const recipeAuthorImage= ()=> {return <img 
    src={recipe.authorImage} 
    alt={recipe.authorImage} 
    className="authorImage" 
  />
  }

  const recipeWebsite = (
    <a href={recipe.website}>{recipe.website}</a>
  );

  return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
}

export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 