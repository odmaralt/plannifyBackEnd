const Task = require("../models/taskSchema");

exports.getTasks = async (request, response, next) => {
  try {
    const tasks = await Task.find().exec();
    response.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};
exports.getUserTasks = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const userTasks = await Task.find({ ownerId: userId }).exec();
    res.status(200).json(userTasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Can't retrieve the user tasks" });
  }
};
exports.createTask = async (request, response, next) => {
  const body = request.body;
  try {
    const newTask = await Task.create({ ...body });

    return response.status(201).json(newTask);
  } catch (err) {
    return response.status(500).json({ message: err });
  }
};
exports.deleteTask = async (request, response, next) => {
  const { taskId } = request.params;
  try {
    await Task.findOneAndRemove({ _id: taskId });
    response
      .status(202)
      .json({ message: "You've succesfully deleted the task" });
  } catch (err) {
    response.status(500).json({ error: err });
  }
};
