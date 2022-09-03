import React from "react";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();

  return (
    <ul onClick={() => navigate(`/details/${artist.id}`)}>
      <li>{artist.name}</li>
      <li>{artist.description}</li>
    </ul>
  );
};

export default ArtistCard;
