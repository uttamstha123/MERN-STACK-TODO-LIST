import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/todo")
      .then((res) => {
        setTodos(...todos, res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Todo List</h1>
      {todos.map((todo, i) => (
        <Todo todo={todo} key={i} />
      ))}
    </>
  );
}

function Todo({ todo }) {
  return (
    <>
      <p>{todo.description}</p>
      <p>{todo.responsible}</p>
      <p>{todo.priority}</p>
      <Link to={"/edit/" + todo._id}>Edit</Link>
      <hr />
    </>
  );
}
