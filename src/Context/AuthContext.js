import React, { createContext } from "react";

export const userContext = createContext({});
const AuthContext = ({ children }) => {
  return (
    <userContext.Provider value={{ name: "Shihab" }}>
      {children}
    </userContext.Provider>
  );
};

export default AuthContext;
