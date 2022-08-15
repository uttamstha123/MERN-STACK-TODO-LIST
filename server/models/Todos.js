const mongoose = require("mongoose");
const TodoSchema = mongoose.Schema({
  description: {
    type: String,
  },
  responsible: {
    type: String,
  },
  priority: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
