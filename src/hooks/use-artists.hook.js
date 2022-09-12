import { useEffect, useReducer, useState } from "react";

import { defaultReducer } from "../reducer/defaultReducer";
import { USERS } from "../config/database.config";
import UserProfile from "../utils/UserProfileClass";

export default function useArtists() {
  const [artists, setArtists] = useState([]);
  const [state, dispatch] = useReducer(defaultReducer, { loading: false, error: false, data: [] });

  useEffect(() => {
    const _fetchArtists = async () => {
      dispatch({ type: "PROCESSING" });
      try {
        const artists = _generateArtists();
        const mapped = Object.values(artists).map((artist) => {
          return new UserProfile(
            artist?.walletAddress,
            artist?.name,
            artist?.email,
            artist?.description
          );
        });
        dispatch({ type: "SUCCESS", payload: mapped });
        setArtists(mapped);
      } catch (err) {
        dispatch({ type: "ERROR" });
      }
    };
    _fetchArtists();
  }, []);

  // Generate artists whose 'isCreator' flag is true
  // TODO: Fetch artists from backend database...
  function _generateArtists(users = USERS) {
    const generatedArtists = users
      .filter((user) => user.isCreator === true)
      .map((user) => {
        return {
          walletAddress: user?.walletAddress,
          name: user?.name,
          email: user?.email,
          description: user?.description,
        };
      });
    return generatedArtists;
  }

  // Update react state to filtered artists
  function updateArtists(filteredArtists) {
    dispatch({ type: "PROCESSING" });
    try {
      let payload = artists;
      if (filteredArtists.length !== 0) {
        payload = Object.values(filteredArtists).map((artist) => {
          return new UserProfile(
            artist?.walletAddress,
            artist?.name,
            artist?.email,
            artist?.description
          );
        });
      }
      dispatch({ type: "SUCCESS", payload: payload });
    } catch (err) {
      dispatch({ type: "ERROR" });
    }
  }

  return {
    ...state,
    updateArtists,
  };
}
