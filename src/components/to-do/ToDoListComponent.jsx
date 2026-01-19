function ToDoListComponent() {
  const today = new Date();
  const todos = [
    {
      id: 1,
      description: "Learn React",
      done: false,
      targetDate: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      ),
    },
    {
      id: 2,
      description: "Learn Spring Boot",
      done: false,
      targetDate: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      ),
    },
    {
      id: 3,
      description: "Learn Docker",
      done: false,
      targetDate: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      ),
    },
  ];

  return (
    <div className="ToDoListComponent">
      <h1>Things you want to do</h1>

      <div>
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Description</td>
              <td>Status</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done ? "Completed" : "Pending"}</td>
                <td>{todo.targetDate.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ToDoListComponent;
