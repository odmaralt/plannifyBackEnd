const UserModel = require("../models/userSchema");
const Journal = require("../models/journalSchema");
const sleepModel = require("../models/sleepSchema");
const waterModel = require("../models/waterSchema");

exports.restart = async (id) => {
  try {
    await Journal.create({ journal: "", ownerId: id });
    console.log("creating empty journal");

    await sleepModel.create({
      hoursSlept: "0",
      ownerId: id,
      minutesSlept: "0",
    });
    console.log("creating empty sleep");

    await waterModel.create({
      cupsDrank: "0",
      ownerId: id,
      cupsTotal: "0",
    });
    console.log("creating empty water");
  } catch (err) {
    console.log(err);
  }
};
