import React, { useState, useEffect } from "react";

import ArtistList from "./ArtistList";
import SearchBox from "./SearchBox";
import { useArtistsContext } from "../providers/ArtistsProvider";

const ArtistMain = () => {
  const { artists, updateArtists } = useArtistsContext();
  const [searchValue, setSearchValue] = useState([]);

  const search = (searchValue) => {
    const inputValue = searchValue.toString().trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? artists
      : artists.filter((a) => a.name.toLowerCase().slice(0, inputLength) === inputValue);
  };

  useEffect(() => {
    const filteredArtists = search(searchValue);
    updateArtists(filteredArtists);
  }, [searchValue]);

  return (
    <>
      <SearchBox setSearchValue={setSearchValue} />
      {artists ? <ArtistList artists={artists} /> : <div>Not found</div>}
    </>
  );
};

export default ArtistMain;
