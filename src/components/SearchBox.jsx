import React from "react";

import "./SearchBox.css";

const SearchBox = ({ setSearchValue }) => {
  function handleChange(event) {
    const input = event.target.value;
    setSearchValue(input);
  }

  return (
    <div>
      <input
        className="search-box__input"
        type="text"
        placeholder="Search by Artist name, title, and tag"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
