import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "../page/NotFound.page";

const SocialNFTMarketRoutes = ({ routesElem }) => {
  const renderRoutes = routesElem.map((routeElem) => {
    const { path, element } = routeElem;
    return <Route path={path} element={element} key={path} exact />;
  });

  return (
    <Router>
      <Routes>
        {renderRoutes}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default SocialNFTMarketRoutes;
