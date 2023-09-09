import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <ul>
      {results.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default SearchResults;