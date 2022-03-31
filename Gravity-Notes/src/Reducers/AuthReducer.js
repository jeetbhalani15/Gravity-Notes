export const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case "SIGN_UP":
      return { ...state, token: payload };
    case "LOG_IN":
      return { ...state, token: payload };
    default:
      return state;
  }
};
