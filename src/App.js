import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import News from "./components/News";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key={"general"}
                pageSize={9}
                country="id"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/Business"
            element={
              <News
                key={"business"}
                pageSize={9}
                country="id"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/Science"
            element={
              <News
                key={"science"}
                pageSize={9}
                country="id"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                key={"entertainment"}
                pageSize={9}
                country="id"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/Sports"
            element={
              <News
                key={"sports"}
                pageSize={9}
                country="id"
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/Technology"
            element={
              <News
                key={"technology"}
                pageSize={9}
                country="id"
                category="technology"
              />
            }
          ></Route>
          <Route
            exact
            path="/Health"
            element={
              <News
                key={"health"}
                pageSize={9}
                country="id"
                category="health"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
