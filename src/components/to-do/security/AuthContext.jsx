import { createContext, useState } from "react";

//Create a Context
export const AuthContext = createContext();

//Put some state in the context

//Share the context with other components
export default function AuthProvider({ children }) {
  //Provide the context to other components
  const [number, setNumber] = useState(0);

  return (
    <AuthContext.Provider value={{ number }}>{children}</AuthContext.Provider>
  );
}
