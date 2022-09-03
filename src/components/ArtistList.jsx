import React from "react";
import ArtistCard from "./ArtistCard";

import "./ArtistList.css";

const ArtistList = ({ artists }) => {
  return (
    <>
      {artists.map((artist) => {
        return <ArtistCard artist={artist} />;
      })}
    </>
  );
};

export default ArtistList;
