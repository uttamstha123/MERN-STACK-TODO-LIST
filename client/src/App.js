import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from "./component/TodoList";
import EditTodo from "./component/EditTodo";
import CreateTodo from "./component/CreateTodo";
const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>Todo App</h1>
        <div className="nav">
          <nav>
            <Link to="/">MERN-Stack Todo App</Link>
            <div>
              <ul>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/" exact element={<TodoList />} />
          <Route path="/edit/:id" element={<EditTodo />} />
          <Route path="/create"  element={<CreateTodo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
