import ArtistsProvider from "./providers/ArtistsProvider";
import CreaOnRoutes from "./components/Routes.comp";
import { ROUTES } from "./config/routes.config";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ArtistsProvider>
      <Navbar />
      <CreaOnRoutes routesElem={ROUTES} />
    </ArtistsProvider>
  );
}

export default App;
