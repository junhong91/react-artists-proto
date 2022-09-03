import React, { useState, useEffect } from "react";

import ArtistList from "./ArtistList";
import SearchBox from "./SearchBox";

const datas = [
  { id: 1, name: "이영우", description: "Description", age: 8 },
  { id: 2, name: "강기재", description: "Description", age: 10 },
  { id: 3, name: "정상헌", description: "Description", age: 9 },
  { id: 4, name: "송예린", description: "Description", age: 8 },
  { id: 5, name: "이준홍", description: "Description", age: 15 },
];

const ArtistMain = () => {
  const [artists, setArtists] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const search = (searchValue) => {
    const inputValue = searchValue.toString().trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? datas
      : datas.filter((movie) => movie.name.toLowerCase().slice(0, inputLength) === inputValue);
  };

  const getArtists = (searchValue) => {
    const matched = search(searchValue);
    setArtists(matched);
  };

  useEffect(() => {
    getArtists(searchValue);
  }, [searchValue]);

  return (
    <>
      <SearchBox setSearchValue={setSearchValue} />
      {artists ? <ArtistList artists={artists} /> : <div>Not found</div>}
    </>
  );
};

export default ArtistMain;
