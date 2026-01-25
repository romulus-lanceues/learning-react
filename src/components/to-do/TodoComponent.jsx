import { useParams } from "react-router-dom";
import { retrieveTodoForUserById } from "./api/TodoAPIService";
import { useAuth } from "./security/AuthContext";
import { useState, useEffect } from "react";

export default function TodoComponent() {
  const { id } = useParams();
  const authContext = useAuth();

  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState(null);

  useEffect(() => {
    retrieveTodoDetails(authContext.username, id);
  }, [id]); //oNLY re-run if id changes

  function retrieveTodoDetails(username, id) {
    retrieveTodoForUserById(username, id)
      .then((response) => {
        console.log(response.data);
        setDescription(response.data.description);
        setIsDone(response.data.done);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <h1>Todo Details</h1>
      <div>Description: {description}</div>
      <div>Completed: {isDone ? "Yes" : "No"}</div>
    </div>
  );
}
