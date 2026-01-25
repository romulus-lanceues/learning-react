import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  retrieveHelloWorldBean,
  retrieveHelloWorld,
  retrieveHelloWorldPathVariable,
} from "./api/HelloWorldAPIService";

function WelcomeComponent() {
  const { username } = useParams();

  const [message, setMessage] = useState(null);
  const [messageBean, setMessageBean] = useState(null);
  const [welcomeMessage, setWelcomeMessage] = useState();

  useEffect(() => {
    callHelloWorldPathVariableAPI(username);
  }, [username]);

  function callHelloWorldAPI() {
    console.log("callHelloWorldAPI");

    //Utilizing axios for making API calls
    retrieveHelloWorld()
      .then((response) => handleSuccess(response))
      .catch((error) => handleError(error))
      .finally(() => console.log("Cleanup actions if any"));
  }

  function callHelloWorldBeanAPI() {
    retrieveHelloWorldBean()
      .then((response) => setMessageBean(response.data.message))
      .catch((error) => handleError(error))
      .finally(() => console.log("Cleanup actions if any"));
  }

  function callHelloWorldPathVariableAPI(name) {
    retrieveHelloWorldPathVariable(name)
      .then((response) => setWelcomeMessage(response.data.message))
      .catch((error) => handleError(error))
      .finally(() => console.log("Cleanup actions if any"));
  }

  function handleSuccess(response) {
    console.log(response.data);
    setMessage(response.data);
  }

  function handleError(error) {
    console.log(error.response);
  }

  return (
    <div className="Welcome">
      <h1>{welcomeMessage}</h1>
      {/* //This approach refreshes the page entirely which defeats the purpose of a single page application */}
      {/* <a href="/todos">View To-Do List</a> */}

      <Link to="/todos">View To-Do List</Link>

      <div>
        <button className="btn btn-success" onClick={callHelloWorldAPI}>
          Call Hello World API
        </button>
        <button className="btn btn-success m-2" onClick={callHelloWorldBeanAPI}>
          Call Hello World Bean API
        </button>
      </div>

      <div className="resultDisplay">{message}</div>
      <div className="resultDisplay">{messageBean}</div>
    </div>
  );
}

export default WelcomeComponent;
