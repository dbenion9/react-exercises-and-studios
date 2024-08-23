function ClickedButton() {
  function handelClick() { 
    alert("pin is removed from board");
  }
  return(
    <button id="clickedButton" onClick={handelClick}>Saved</button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
