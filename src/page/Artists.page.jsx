import React, { useState, useEffect } from "react";

import ArtistList from "../components/ArtistList";
import Header from "../components/common/Header";
import SearchBox from "../components/SearchBox";
import { useArtistsContext } from "../providers/ArtistsProvider";
import "./Artists.css";

const Artists = () => {
  const { artists, updateArtists } = useArtistsContext();
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    const filteredArtists = searchByName(searchValue);
    updateArtists(filteredArtists);
  }, [searchValue]);

  function searchByName(searchValue) {
    const inputValue = searchValue.toString().trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? artists
      : artists.filter((a) => a.name.toLowerCase().slice(0, inputLength) === inputValue);
  }

  return (
    <div className="artists__wrapper">
      <Header title="Artists" />
      <SearchBox
        placeHolder="Search by Artist name, title, and tag"
        setSearchValue={setSearchValue}
      />
      <ArtistList artists={artists} />
    </div>
  );
};

export default Artists;
