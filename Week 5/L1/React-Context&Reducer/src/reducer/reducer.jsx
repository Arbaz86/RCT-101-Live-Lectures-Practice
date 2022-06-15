export const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_LOGIN": {
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
      };
    }
    case "HANDLE_LOGOUT": {
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    }
    default: {
      return state;
    }
  }
};
