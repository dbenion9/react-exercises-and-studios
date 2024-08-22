import './styles.css';

function Banner(){
      return(
      <h1 className="header">The Amazing Ocean</h1>
   );
}

function Button() {
   function onLearnMore() {
     alert("Splish Splash!");
   }
 
   return (
     <button onClick={onLearnMore}>
       Learn More
     </button>
   );
 }
 
export default Banner;