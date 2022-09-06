import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useArtistsContext } from "../providers/ArtistsProvider";

const ArtistDetail = () => {
  const { artists } = useArtistsContext();
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setData(getPostByID(id));
    // eslint-disable-next-line
  }, []);

  const getPostByID = (id) => {
    const array = artists.filter((x) => x.id == id);
    if (array.length == 1) {
      return array[0];
    }
    return null;
  };

  return (
    <ul>
      <li>{data.name}</li>
      <li>{data.description}</li>
      <li>{data.age}</li>
    </ul>
  );
};

export default ArtistDetail;
