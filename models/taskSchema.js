const { model, Schema } = require("mongoose");

const taskSchema = new Schema({
  task: {
    type: String,
    required: [true, "Task is required"],
    minLength: [2, "Task must be at least 2 characters"],
    maxLength: [50, "Task must be 2 to 50 characters"],
  },
  ownerId: { type: String, required: true },
});

const TaskModel = model("Task", taskSchema);

module.exports = TaskModel;
