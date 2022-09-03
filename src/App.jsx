import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ArtistDetail from "./components/ArtistDetail";
import ArtistMain from "./components/ArtistMain";
import Home from "./page/Home.page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/details/:id" element={<ArtistDetail />} />
          <Route exact path="/artists" element={<ArtistMain />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
