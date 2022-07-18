import logo from "./logo.svg";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Filter from "./components/Filter";
import Newinternshipcard from "./components/Newinternshipcard";
import Internshipcard from "./components/Internshipcard";

function App() {


  return (
    <div className="App">
      <Newinternshipcard/>
      <h1 className="text-5xl font-bold ">Internship Tracker</h1>

      <div className="flex items-center justify-around mt-20">
        
        <label for="my-modal-3" class="btn modal-button">
          + New
        </label>

        
        
        <div className="flex items-center justify-center">
          <Searchbar />
          <Filter />
        </div>
        
      </div>

      <Internshipcard/>



      <div className="flex justify-center"></div>
    </div>
  );
}


export default App;
