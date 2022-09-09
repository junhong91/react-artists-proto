import { createContext, useContext } from "react";

import useArtists from "../hooks/use-artists.hook";

const ArtistsContext = createContext();

export default function ArtistsProvider({ children }) {
  const { data: artists, loading, error, updateArtists } = useArtists();

  return (
    <ArtistsContext.Provider
      value={{
        artists,
        loading,
        error,
        updateArtists,
      }}
    >
      {children}
    </ArtistsContext.Provider>
  );
}

export function useArtistsContext() {
  return useContext(ArtistsContext);
}
