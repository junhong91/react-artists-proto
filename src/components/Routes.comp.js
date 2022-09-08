import { Routes, Route } from "react-router-dom";

import NotFound from "../page/NotFound.page";

const CreaOnRoutes = ({ routesElem }) => {
  const renderRoutes = routesElem.map((routeElem) => {
    const { path, element } = routeElem;
    return <Route path={path} element={element} key={path} exact />;
  });

  return (
    <Routes>
      {renderRoutes}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CreaOnRoutes;
