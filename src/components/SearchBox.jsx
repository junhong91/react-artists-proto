import React from "react";

import "./SearchBox.css";

const SearchBox = ({ placeHolder, setSearchValue }) => {
  function handleChange(event) {
    const input = event.target.value;
    setSearchValue(input);
  }

  return (
    <div className="search-box__wrapper">
      <input
        className="search-box__input"
        type="text"
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
