import { createContext, useContext, useState } from "react";

//Create a Context
export const AuthContext = createContext();

//Create a custom hook to use the context (preferred way)
export const useAuth = () => useContext(AuthContext);

//Put some state in the context

//Share the context with other components
export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);

  //Defining a function to log in
  function logIn(username, password) {
    if (username === "glizzy" && password === "1234") {
      setIsAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setIsAuthenticated(false);
      return false;
    }
  }

  function logOut() {
    setIsAuthenticated(false);
  }

  //Provide the context value to other components
  return (
    //Passing down the state and functions as context value
    <AuthContext.Provider value={{ isAuthenticated, logIn, logOut, username }}>
      {children}
    </AuthContext.Provider>
  );
}
