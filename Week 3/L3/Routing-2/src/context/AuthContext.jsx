import { useLocation, useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const { state } = useLocation();
  console.log(state);

  const Login = () => {
    setIsAuth(true);
    if (state.from) {
      navigate(state.from, { replace: true });
    } else {
      navigate("/");
    }
  };
  const Logout = () => {
    setIsAuth(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuth, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
