import "./App.css";
import { Filters } from "./components/Filters";
import { Navbar } from "./components/Navbar";
import { Offers } from "./components/Offers";
import { Restaurants } from "./components/Restaurants";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Offers />
      <section class="near-you">
        <Restaurants />
        <Filters />
      </section>
    </div>
  );
}

export default App;
