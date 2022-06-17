import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Feeds } from "./pages/Feeds";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="feeds" element={<Feeds />} />
      </Routes>
    </div>
  );
}

export default App;
