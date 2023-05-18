const { model, Schema } = require("mongoose");

const waterSchema = new Schema(
  {
    cupsDrank: {
      type: String,
      required: [true, "Cups drank is required"],
      minLength: [1, "Input must be at least 1 characters"],
      maxLength: [2, "Input must no more than 2 characters"],
    },
    cupsTotal: {
      type: String,
      required: [true, "Cups drank is required"],
      minLength: [1, "Input must be at least 1 characters"],
      maxLength: [2, "Input must no more than 2 characters"],
    },
    ownerId: { type: String, required: true },
  },
  { timestamps: true }
);

const waterModel = model("Water", waterSchema);

module.exports = waterModel;
