import React from 'react'
import { createContext, useContext, useState } from 'react';

const AuthenticationContext = createContext();

export const AuthenticationContextProvider=({children})=> {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
      };
    
      const logout = () => {
        setIsAuthenticated(false);
      };

  return (
    <AuthenticationContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuth = () => useContext(AuthenticationContext);