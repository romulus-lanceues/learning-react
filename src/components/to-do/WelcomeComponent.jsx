import { useParams, Link } from "react-router-dom";
function WelcomeComponent() {
  const { username } = useParams();

  return (
    <div className="Welcome">
      <h1>Welcome {username}</h1>
      {/* //This approach refreshes the page entirely which defeats the purpose of a single page application */}
      {/* <a href="/todos">View To-Do List</a> */}

      <Link to="/todos">View To-Do List</Link>
    </div>
  );
}

export default WelcomeComponent;
