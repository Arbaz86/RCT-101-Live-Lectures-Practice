import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";

export const Login = () => {
  const { state, dispatch } = useContext(AuthContext);

  const handleToggle = () => {
    if (!state.isAuth) {
      dispatch({
        type: "HANDLE_LOGIN",
        payload: {
          isAuth: true,
          token: Date.now() * Math.random() * 1000000,
        },
      });
    } else {
      dispatch({
        type: "HANDLE_LOGOUT",
      });
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {state.isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};
