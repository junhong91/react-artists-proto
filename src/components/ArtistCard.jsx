import React from "react";
import { useNavigate } from "react-router-dom";

import "./ArtistCard.css";

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();

  const NONE = `${process.env.PUBLIC_URL}/none.PNG`;

  return (
    <div className="artist-card__menu" onClick={() => navigate(`/details/${artist.id}`)}>
      <img src={NONE}></img>
      <h3 className="item__title">{artist.name}</h3>
      <p className="item__description">{artist.description}</p>
    </div>
  );
};

export default ArtistCard;
