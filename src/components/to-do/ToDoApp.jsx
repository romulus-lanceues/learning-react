import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";
import "./ToDoApp.css";
import LogoutComponent from "./LogoutComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import ToDoListComponent from "./ToDoListComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import LogInComponent from "./LogInComponent.jsx";
import AuthProvider from "./security/AuthContext.jsx";

export default function TodoApp() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LogInComponent />} />
            <Route path="/login" element={<LogInComponent />} />

            <Route path="/welcome/:username" element={<WelcomeComponent />} />

            <Route path="/todos" element={<ToDoListComponent />} />
            <Route path="/logout" element={<LogoutComponent />} />

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
