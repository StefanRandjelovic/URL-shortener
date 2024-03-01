// REACT ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Main from "@pages/Main";
import UnderConstruction from "@pages/UnderConstruction";

// COMPONENTS
import Navbar from "@components/Nav";
import Footer from "@components/Footer";

// STYLES
import "@styles/media-queries.scss";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/under_construction" element={<UnderConstruction />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
