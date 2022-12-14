import React from "react";
import { useNavigate } from "react-router-dom";

import "./ArtistCard.css";

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();
  const NONE = `${process.env.PUBLIC_URL}/none.PNG`;

  return (
    <div
      className="artist-card__menu"
      onClick={() => navigate(`/details/${artist?.walletAddress}`)}
    >
      <img src={NONE}></img>
      <h3 className="artist-card__menu__item__title">{artist?.name}</h3>
      <p className="artist-card__menu__item__description">{artist?.description}</p>
    </div>
  );
};

export default ArtistCard;
