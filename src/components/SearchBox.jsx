import React from "react";

const SearchBox = ({ setSearchValue }) => {
  function handleChange(event) {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
