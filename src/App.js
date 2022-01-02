import Home from "./views/Home";
import Feed from "./views/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <Navbar>
              <Home />
            </Navbar>
          }
        />
        <Route
          path="/feed"
          element={
            <Navbar>
              <Feed />
            </Navbar>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
