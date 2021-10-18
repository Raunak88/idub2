import "./App.css";
import CTA from "./components/CTA/CTA";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Products from "./components/Products/Products";
import Showcase from "./components/Showcase/Showcase";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Products />
      <Showcase />
      <CTA />
    </div>
  );
}

export default App;
