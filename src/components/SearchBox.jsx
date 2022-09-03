import React from "react";

const SearchBox = ({ setSearchValue }) => {
  const handleKeyDown = (event) => {
    if (event.key !== "Enter") return;

    const inputValue = event.target.value;
    setSearchValue(inputValue);
  };

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  );
};

export default SearchBox;
