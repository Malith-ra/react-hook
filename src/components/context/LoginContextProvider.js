import React, { createContext } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  return <LoginContext.Provider value={true}>{children}</LoginContext.Provider>;
};

export default LoginContextProvider;
