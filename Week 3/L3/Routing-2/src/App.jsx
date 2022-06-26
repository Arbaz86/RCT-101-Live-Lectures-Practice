import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Feeds } from "./pages/Feeds";
import { RequireAuth } from "./hoc/RequireAuth";

import "./App.css";
import { Posts } from "./pages/Posts.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="feeds"
          element={
            <RequireAuth>
              <Feeds />
            </RequireAuth>
          }
        />
        <Route
          path="posts"
          element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
