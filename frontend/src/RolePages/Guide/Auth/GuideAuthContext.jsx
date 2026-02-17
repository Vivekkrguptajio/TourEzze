import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // CHECK TOKEN ON APP LOAD
  useEffect(() => {
    const token = localStorage.getItem("guide_token");
    setIsAuthenticated(!!token);
  }, []);

  // LOGIN FUNCTION → save token
  const login = (token) => {
    localStorage.setItem("guide_token", token);
    setIsAuthenticated(true);
  };

  // LOGOUT FUNCTION → remove token
  const logout = () => {
    localStorage.removeItem("guide_token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
