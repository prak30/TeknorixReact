import Header from "./components/Header";
import FilterMenu from "./components/FilterMenu";
import Jobs from "./components/Jobs";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState();
  const [location, setLocation] = useState();
  const [jobFunction, setJobFunction] = useState();

  const clearFilters = (filterType) => {
    switch (filterType) {
      case "department":
        setDepartment("");
        break;
      case "location":
        setLocation("");
        break;
      case "jobFunction":
        setJobFunction("");
        break;
      default:
        setDepartment("");
        setLocation("");
        setJobFunction("");
        break;
    }
  };

  return (
    <div className="App">
      <Header
        setSearchQuery={setSearchQuery}
        setDepartment={setDepartment}
        setLocation={setLocation}
        setJobFunction={setJobFunction}
      />
      <FilterMenu
        department={department}
        location={location}
        jobFunction={jobFunction}
        clearFilters={clearFilters}
      />
      <Jobs searchQuery={searchQuery} />
    </div>
  );
}

export default App;
