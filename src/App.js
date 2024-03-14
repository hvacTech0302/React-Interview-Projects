import "./App.css";
import Accordion from "./components/accordion/accordion.component";
import ImageSlider from "./components/imageSlider/image-slider.component";
import RandomColor from "./components/random-color/random-color.component";
import StarRating from "./components/star-rating/star-rating.component";

function App() {
  return (
    <div className="App">
      {/* Accordion Component (single and multi-select) */}
      <Accordion />
      {/* Random Color Component (hex and rbg) */}
      <RandomColor />
      {/* Star Rating Component (Enter number of starts you want to display for rating system) */}
      <StarRating numOfStars={10} />
      {/*Image Slider Component (Enter page number and amount of pics you want to scroll through.) */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </div>
  );
}

export default App;
