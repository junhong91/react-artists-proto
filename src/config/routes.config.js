import ArtistCardDetail from "../components/ArtistCardDetail";
import Artists from "../page/Artists.page";
import Home from "../page/Home.page";
import UserProfileRegistration from "../page/UserProfileRegistration.page";

export const ROUTES = [
  {
    name: "HOME",
    path: "/",
    element: <Home />,
    nav: false,
  },
  {
    name: "ARTISTS",
    path: "/artists",
    element: <Artists />,
    nav: true,
  },
  {
    name: "ARTIST DETAIL",
    path: "/details/:walletAddress",
    element: <ArtistCardDetail />,
    nav: false,
  },
  {
    name: "USER PROFILE REGI",
    path: "/registration",
    element: <UserProfileRegistration />,
    nav: false,
  },
];

export const NAV_ROUTES = ROUTES.filter((r) => r.nav);
