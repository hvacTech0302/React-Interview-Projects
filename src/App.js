import "./App.css";
import Accordion from "./components/accordion/accordion.component";
import RandomColor from "./components/random-color/random-color.component";
import StarRating from "./components/star-rating/star-rating.component";

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      <Accordion />
      {/* Random Color Component */}
      <RandomColor />
      {/* Star Rating Component */}
      <StarRating numOfStars={10} />
    </div>
  );
}

export default App;
