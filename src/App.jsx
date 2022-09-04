import ArtistsProvider from "./providers/ArtistsProvider";
import SocialNFTMarketRoutes from "./components/Routes.comp";
import { ROUTES } from "./config/routes.config";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ArtistsProvider>
      <Navbar />
      <SocialNFTMarketRoutes routesElem={ROUTES} />
    </ArtistsProvider>
  );
}

export default App;
