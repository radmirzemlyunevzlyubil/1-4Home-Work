import React from "react";
import { FiSearch } from 'react-icons/fi';

const Search = ({ searchProduct }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchProduct(e.target.value);
    }
  };

  return (
    <form>
      <div className="search-input">
        <input
          onChange={(e) => searchProduct(e.target.value)}
          onKeyPress={handleKeyPress}
          type="search"
          placeholder="Поиск по каталогу"
        />
        <div className="search-icon">
          <FiSearch/>
        </div>
      </div>
    </form>
  );
};

export default Search;
