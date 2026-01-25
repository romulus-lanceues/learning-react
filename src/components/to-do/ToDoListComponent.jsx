import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { retrieveTodoForUser, deleteTodoForUser } from "./api/TodoAPIService";
import { useAuth } from "./security/AuthContext";

function ToDoListComponent() {
  const today = new Date();

  const [todos, setTodos] = useState([]);

  const [deleteMessage, setDeleteMessage] = useState(null);

  const authContext = useAuth();

  const navigate = useNavigate();

  //best practice to use useEffect for side effects like data fetching
  useEffect(() => {
    fetchTodos();
  }, []);

  function fetchTodos() {
    retrieveTodoForUser(authContext.username)
      .then((response) => {
        console.log(response.data);
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  }

  // const todos = [
  //   // {
  //   //   id: 1,
  //   //   description: "Learn React",
  //   //   done: false,
  //   //   targetDate: new Date(
  //   //     today.getFullYear(),
  //   //     today.getMonth(),
  //   //     today.getDate(),
  //   //   ),
  //   // },
  //   // {
  //   //   id: 2,
  //   //   description: "Learn Spring Boot",
  //   //   done: false,
  //   //   targetDate: new Date(
  //   //     today.getFullYear(),
  //   //     today.getMonth(),
  //   //     today.getDate(),
  //   //   ),
  //   // },
  //   // {
  //   //   id: 3,
  //   //   description: "Learn Docker",
  //   //   done: false,
  //   //   targetDate: new Date(
  //   //     today.getFullYear(),
  //   //     today.getMonth(),
  //   //     today.getDate(),
  //   //   ),
  //   // },
  // ];

  function deleteTodo(id) {
    console.log("delete todo " + id);

    deleteTodoForUser(authContext.username, id)
      .then(() => {
        setDeleteMessage(`Delete of todo ${id} successful!`);
        fetchTodos();
      })
      .catch((error) => console.log(error));
  }

  function updateTodo(id) {
    console.log("update todo " + id);
    navigate(`/todo/${id}`);
  }

  return (
    <div className="ToDoListComponent">
      <h1>Things you want to do</h1>

      {deleteMessage && (
        <div className="alert alert-warning">{deleteMessage}</div>
      )}

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Status</th>
              <th>Target Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done ? "Completed" : "Pending"}</td>
                <td>{todo.targetDate}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ToDoListComponent;
