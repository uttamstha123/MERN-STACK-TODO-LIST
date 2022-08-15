const router = require("express").Router();
const {
  getTodos,
  createTodo,
  getTodo,
  updateTodo,
} = require("../controller/todoController");
router.route("/").get(getTodos).post(createTodo);
router.route("/:id").get(getTodo).post(updateTodo);

module.exports = router;