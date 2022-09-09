import React from "react";
import ArtistCard from "./ArtistCard";

import "./ArtistList.css";

const ArtistList = ({ artists }) => {
  return (
    <div className="artist-list__wrapper">
      {artists.map((artist) => {
        return <ArtistCard artist={artist} key={artist.id} />;
      })}
    </div>
  );
};

export default ArtistList;
