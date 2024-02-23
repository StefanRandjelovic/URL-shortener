// REACT ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Main from "@pages/Main";
import UnderConstruction from "@pages/UnderConstruction";

// COMPONENTS
import Navbar from "@components/Nav";

function App() {
  return (
    <>
      <main>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/under_construction" element={<UnderConstruction />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
