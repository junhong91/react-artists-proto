import ArtistDetail from "../components/ArtistDetail";
import Artists from "../page/Artists.page";
import Home from "../page/Home.page";
import Login from "../page/Login.page";

export const ROUTES = [
  { name: "Home", path: "/", element: <Home />, nav: false },
  { name: "Artists", path: "/artists", element: <Artists />, nav: true },
  { name: "ArtistDetail", path: "/details/:id", element: <ArtistDetail />, nav: false },
  { name: "Login", path: "/login", element: <Login />, nav: true },
];

export const NAV_ROUTES = ROUTES.filter((r) => r.nav);
