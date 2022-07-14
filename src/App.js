import logo from "./logo.svg";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Filter from "./components/Filter";
import Newinternshipcard from "./components/Newinternshipcard";

function App() {
  return (
    <div className="App">
      <h1 className="text-5xl font-bold ">Internship Tracker</h1>

      <div className="flex items-center justify-around mt-20">
        <button class="btn">+ New</button>
        <div className="flex items-center justify-center">
          <Searchbar />
          <Filter />
        </div>
      </div>
      <div className="flex justify-center">
      <Newinternshipcard/>
      </div>
    </div>
  );
}

export default App;
