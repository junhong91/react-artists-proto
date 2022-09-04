import ArtistsProvider from "./providers/ArtistsProvider";
import SocialNFTMarketRoutes from "./components/Routes.comp";
import { ROUTES } from "./config/routes.config";

function App() {
  return (
    <ArtistsProvider>
      <SocialNFTMarketRoutes routesElem={ROUTES} />
    </ArtistsProvider>
  );
}

export default App;
