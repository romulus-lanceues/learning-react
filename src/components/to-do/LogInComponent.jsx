import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function LogInComponent() {
  const [username, setUsername] = useState("glizzy");
  const [password, setPassword] = useState("");

  const [isSuccessfull, setIsSuccessfull] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  // useNavigate hook to programmatically navigate
  const navigate = useNavigate();

  const authContext = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (authContext.logIn(username, password)) {
      setIsSuccessfull(true);
      setIsFailed(false);
      navigate(`/welcome/${username}`);
    } else {
      setIsSuccessfull(false);
      setIsFailed(true);
    }
  }

  return (
    <div className="Login">
      {/* Common way of conditional rendering */}
      {isSuccessfull && (
        <div className="sucessMessage">Authenticated Successfully</div>
      )}
      {isFailed && <div className="errorMessage">Authentication Failed</div>}

      <h1>Log In Component</h1>
      <div className="LoginForm">
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={() => handleSubmit(username)}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default LogInComponent;
