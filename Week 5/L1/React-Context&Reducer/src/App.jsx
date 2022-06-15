import { useContext, useState } from "react";
import "./App.css";
import { Login } from "./components/Login";
import { AuthContext } from "./context/Authcontext";

function App() {
  const { state } = useContext(AuthContext);
  return (
    <div className="App">
      <h1>User Auth Status : {state.isAuth ? "TRUE" : "FALSE"}</h1>
      <h1>token : {state.token}</h1>
      <Login />
    </div>
  );
}

export default App;
