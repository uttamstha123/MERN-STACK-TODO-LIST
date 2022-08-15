import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function EditTodo() {
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState(false);
  let { id } = useParams();
  // console.log(id);

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
      .post(`http://localhost:5000/todo/${id}`, newTodo)
      .then((res) => console.log(res.data));
  }
  return (
    <div>
      <h1>Edit Todo</h1>
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
          <div className="priority">
            <input
              type="radio"
              id="priorityCompleted"
              value="Completed"
              onChange={(e) => {
                setCompleted((prev) => !prev);
              }}
            />
            <label htmlFor="">Completed</label>
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Update Todo" />
        </div>
      </form>
    </div>
  );
}
