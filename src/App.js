import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  const [filteredResults, setFilteredResults] = useState(data);

  const handleSearch = (query) => {
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResults(filteredData);
  };

  return (
    <div className="App">
      <h1>Search Bar Example</h1>
      <SearchBar data={data} onSearch={handleSearch} />
      <SearchResults results={filteredResults} />
    </div>
  );
}

export default App;