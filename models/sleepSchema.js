const { model, Schema } = require("mongoose");

const sleepSchema = new Schema(
  {
    hoursSlept: {
      type: String,
      required: [true, "Hours slept is required"],
      minLength: [1, "Input must be at least 1 characters"],
      maxLength: [2, "Input must no more than 2 characters"],
    },
    minutesSlept: {
      type: String,
      required: [true, "Minutes slept is required"],
      minLength: [1, "Input must be at least 1 characters"],
      maxLength: [2, "Input must no more than 2 characters"],
    },
    ownerId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const sleepModel = model("Sleep", sleepSchema);

module.exports = sleepModel;
