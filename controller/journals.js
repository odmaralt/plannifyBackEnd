const jwt = require("jsonwebtoken");
const Journal = require("../models/journalSchema");
exports.createJournal = async (request, response, next) => {
  const body = request.body;
  try {
    const newJournal = await Journal.create({ ...body });
    return response.status(201).json(newJournal);
  } catch (err) {
    return response.status(500).json({ message: err });
  }
};
// exports.renewJournal = async (request, response, next) => {
//   try {
//     const newJournal = await Journal.create({ journal: " " });
//     return response.status(201).json(newJournal);
//   } catch (err) {
//     return response.status(500).json({ message: err });
//   }
// };
exports.getJournals = async (request, response, next) => {
  try {
    const journals = await Journal.find().exec();
    response.status(200).json(journals);
  } catch (error) {
    next(error);
  }
};
exports.getUserJournals = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const userJournals = await Journal.find({ ownerId: userId }).exec();
    res.status(200).json(userJournals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Can't retrieve the user journals" });
  }
};
exports.getJournal = async (request, response, next) => {
  const { journalId } = request.params;
  try {
    const journal = await await Journal.findById(journalId);
    response.status(200).json(journal);
  } catch (err) {
    response.status(500).json({ error: err });
  }
};
exports.updateJournal = async (request, response, next) => {
  const { journalId, userId } = request.params;
  try {
    await Journal.findOneAndUpdate({ _id: journalId }, request.body, {
      new: true,
    })
      .then((res) => {
        response.status(202).json({
          Journal: res,
          message: "You've succesfully updated the journal",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    response.status(500).json({ error: err });
  }
};
exports.deleteJournal = async (request, response, next) => {
  const { journalId } = request.params;
  try {
    await Journal.findOneAndRemove({ _id: journalId });
    response
      .status(202)
      .json({ message: "You've succesfully deleted the journal" });
  } catch (err) {
    response.status(500).json({ error: err });
  }
};
