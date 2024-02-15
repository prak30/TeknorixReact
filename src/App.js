import Header from "./components/Header";
import FilterMenu from "./components/FilterMenu";
import Jobs from "./components/Jobs";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  return (
    <div className="App">
      <Header setSearchQuery={setSearchQuery} />
      <FilterMenu />
      <Jobs searchQuery={searchQuery} />
    </div>
  );
}

export default App;
