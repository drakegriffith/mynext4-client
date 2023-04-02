import React, { useState, createContext } from "react"

const AuthContext = createContext({
    isAuthenticated: false,
    token: null,
    setAuth: () => {},
    setToken: () => {}
  });
  
  const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);
  
    const setAuth = (value) => {
      setIsAuthenticated(value);
    };
  
    return (
      <AuthContext.Provider
        value={{ setIsAuthenticated, isAuthenticated, token, setAuth, setToken }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  export { AuthContext, AuthProvider };