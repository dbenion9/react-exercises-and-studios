import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    const authorLink = "https://example.com"; // Replace with the actual link
    const authorPhoto = "https://example.com/photo.jpg"; // Replace with the actual photo URL
    const authorName = "John Doe"; // Replace with the actual author's name

    return (
        <div className={styles.recipeAuthorBlock}>
            <img 
                src={authorPhoto} 
                alt="Reasonable alt text" 
                className={styles.imageUpdates} 
            />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>
    );
}

export default RecipeAuthor;