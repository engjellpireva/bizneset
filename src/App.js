import Home from "./views/Home";
import Feed from "./views/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./views/NotFound";
import Layout from "./components/Layout";
import Details from "./views/Details";
import NewBusiness from "./views/NewBusiness";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/feed"
          element={
            <Layout>
              <Feed />
            </Layout>
          }
        />
        <Route
          path="/details"
          element={
            <Layout>
              <Details />
            </Layout>
          }
        />
        <Route
          path="/newbusiness"
          element={
            <Layout>
              <NewBusiness />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
