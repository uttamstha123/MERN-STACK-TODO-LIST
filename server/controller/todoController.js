const Todo = require("../models/Todos");

const getTodos = (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(todos);
    }
  });
};
const createTodo = (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo
    .save()
    .then((todo) => {
      res.status(200).json({ todo: "Todo added successfully" });
    })
    .catch((err) => {
      res.status(400).json({ err: "Adding new Todo failed" });
    });
};

const getTodo = (req, res) => {
  let id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.status(200).json(todo);
  });
};

const updateTodo = (req, res) => {
  let id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(400).json("Data not found");
    } else {
      todo.description = req.body.description;
      todo.responsible = req.body.responsible;
      todo.priority = req.body.priority;
      todo.completed = req.body.completed;

      todo
        .save()
        .then((todo) => {
          res.json("Todo updated");
        })
        .catch((err) => {
          res.status(400).json("Update not possible");
        });
    }
  });
};

module.exports = { getTodo, createTodo, getTodos, updateTodo };
