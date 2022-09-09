import { useEffect, useReducer, useState } from "react";

import { defaultReducer } from "../reducer/defaultReducer";
import { ARTISTS } from "../config/artists.config";

const generateArtists = (artists = ARTISTS) => {
  const generatedArtists = artists.map((a) => {
    return {
      id: a?.id,
      name: a?.name,
      description: a?.description,
      age: a?.age,
    };
  });
  return generatedArtists;
};

class ArtistClass {
  constructor(id, name, description, age) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.age = age;
  }
}

export default function useArtists() {
  const [artists, setArtists] = useState([]);
  const [state, dispatch] = useReducer(defaultReducer, { loading: false, error: false, data: [] });

  useEffect(() => {
    // TODO: Fetch artists from backend database...
    const fetchArtists = async () => {
      dispatch({ type: "PROCESSING" });
      try {
        const res = generateArtists();
        const mappedArtists = Object.values(res).map((a) => {
          return new ArtistClass(a?.id, a?.name, a?.description, a?.age);
        });
        dispatch({ type: "SUCCESS", payload: mappedArtists });
        setArtists(mappedArtists);
      } catch (err) {
        dispatch({ type: "ERROR" });
      }
    };
    fetchArtists();
  }, []);

  const updateArtists = (filteredArtists) => {
    dispatch({ type: "PROCESSING" });
    try {
      if (filteredArtists.length === 0) {
        dispatch({ type: "SUCCESS", payload: artists });
      } else {
        const mappedArtists = Object.values(filteredArtists).map((a) => {
          return new ArtistClass(a?.id, a?.name, a?.description, a?.age);
        });
        dispatch({ type: "SUCCESS", payload: mappedArtists });
      }
    } catch (err) {
      dispatch({ type: "ERROR" });
    }
  };

  return {
    ...state,
    updateArtists,
  };
}
