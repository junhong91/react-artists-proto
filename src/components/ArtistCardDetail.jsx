import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useArtistsContext } from "../providers/ArtistsProvider";

const ArtistCardDetail = () => {
  const { artists } = useArtistsContext();
  const [artist, setArtist] = useState({});
  const { walletAddress } = useParams();

  useEffect(() => {
    setArtist(getArtistByWalletAddress(walletAddress));
  }, []);

  function getArtistByWalletAddress(walletAddress) {
    const matched = artists.filter((artist) => artist.walletAddress == walletAddress);
    return matched.length === 1 ? matched[0] : null;
  }

  return (
    <ul>
      <li>{artist?.name}</li>
      <li>{artist?.email}</li>
      <li>{artist?.walletAddress}</li>
      <li>{artist?.description}</li>
    </ul>
  );
};

export default ArtistCardDetail;
