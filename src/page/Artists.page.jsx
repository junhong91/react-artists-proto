import React, { useState, useEffect } from "react";

import ArtistList from "../components/ArtistList";
import SearchBox from "../components/SearchBox";
import { useArtistsContext } from "../providers/ArtistsProvider";

const Artists = () => {
  const { artists, updateArtists } = useArtistsContext();
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    const filteredArtists = searchByName(searchValue);
    updateArtists(filteredArtists);
  }, [searchValue]);

  // Search artist by name
  function searchByName(searchValue) {
    const inputValue = searchValue.toString().trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? artists
      : artists.filter((a) => a.name.toLowerCase().slice(0, inputLength) === inputValue);
  }

  return (
    <>
      <SearchBox setSearchValue={setSearchValue} />
      <ArtistList artists={artists} />
    </>
  );
};

export default Artists;
