import { BrowserRouter } from "react-router-dom";

import ArtistsProvider from "./ArtistsProvider";
import UserProfileProvider from "./UserProfileProvider";

export default function Providers({ children }) {
  return (
    <BrowserRouter>
      <ArtistsProvider>
        <UserProfileProvider>{children}</UserProfileProvider>
      </ArtistsProvider>
    </BrowserRouter>
  );
}
