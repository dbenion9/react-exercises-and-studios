import React from 'react';
import SaveButton from './SaveButton'; // Adjust the path as needed
import ClickedButton from './ClickedButton'; // Adjust the path as needed

function Button(props) {
  const saveButton = props.saveButton;

  return (
    saveButton ? <SaveButton /> : <ClickedButton />
  );
}

export default Button;

 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 