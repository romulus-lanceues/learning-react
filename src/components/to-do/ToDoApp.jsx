import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./ToDoApp.css";
import LogoutComponent from "./LogoutComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import ToDoListComponent from "./ToDoListComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import LogInComponent from "./LogInComponent.jsx";
import AuthProvider from "./security/AuthContext.jsx";
import { useAuth } from "./security/AuthContext.jsx";
import TodoComponent from "./TodoComponent.jsx";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) return children;

  return <Navigate to="/login" />;
}

export default function TodoApp() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LogInComponent />} />
            <Route path="/login" element={<LogInComponent />} />

            {/* Authenticated routes to protect certain components */}

            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ToDoListComponent />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/todo/:id"
              element={
                <AuthenticatedRoute>
                  <TodoComponent />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />

            {/* No matching path error message */}
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

/*

*/
