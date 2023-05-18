const { model, Schema, default: mongoose } = require("mongoose");

const journalSchema = new Schema(
  {
    journal: {
      type: String,
      // required: [true, "Journal  is required"],
    },
    ownerId: { type: String, required: true },
  },
  { timestamps: true }
);

const TaskModel = model("Journal", journalSchema);

module.exports = TaskModel;
