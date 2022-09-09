import CreaOnRoutes from "./components/Routes.comp";
import { ROUTES } from "./config/routes.config";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CreaOnRoutes routesElem={ROUTES} />
    </>
  );
}

export default App;
