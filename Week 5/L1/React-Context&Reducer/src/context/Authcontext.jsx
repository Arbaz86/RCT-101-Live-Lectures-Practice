import { createContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isAuth: false,
    token: null,
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
