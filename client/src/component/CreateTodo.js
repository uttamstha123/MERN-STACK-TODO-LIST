import { useState } from "react";
import axios from "axios";
export default function CreateTodo() {
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState(false);

  function submitTodo(e) {
    e.preventDefault();
    console.log(`Form submitted:`);
    console.log(`Todo Description: ${description}`);
    console.log(`Todo Responsible: ${responsible}`);
    console.log(`Todo Priority: ${priority}`);
    console.log(`Todo Completed: ${completed}`);

    const newTodo = {
      description,
      responsible,
      priority,
      completed,
    };
    axios
      .post("http://localhost:5000/todo", newTodo)
      .then((res) => console.log(res.data));
  }
  return (
    <div>
      <h1>Create Todo List</h1>
      <form onSubmit={submitTodo} className="form-control">
        <div className="form-group">
          <label htmlFor="">Description</label>
          <input onChange={(e) => setDescription(e.target.value)} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="">Responsible</label>
          <input onChange={(e) => setResponsible(e.target.value)} type="text" />
        </div>
        <div className="form-group">
          <div className="priority">
            <input
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="low"
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            />
            <label htmlFor="">Low</label>
          </div>
          <div className="priority">
            <input
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="medium"
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            />
            <label htmlFor="">Medium</label>
          </div>
          <div className="priority">
            <input
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="high"
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            />
            <label htmlFor="">High</label>
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Create Todo" />
        </div>
      </form>
    </div>
  );
}
