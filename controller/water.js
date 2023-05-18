const Water = require("../models/waterSchema");
exports.createWater = async (request, response, next) => {
  const body = request.body;
  try {
    const newWater = await Water.create({
      ...body,
      cupsDrank: body.cupsDrank,
      cupsTotal: body.cupsTotal,
    });
    return response.status(201).json(newWater);
  } catch (err) {
    return response.status(500).json({ message: err });
  }
};
exports.getUserWaters = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const userWater = await Water.find({ ownerId: userId }).exec();
    res.status(200).json(userWater);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Can't retrieve the user waters" });
  }
};
exports.getWaterValues = async (request, response, next) => {
  try {
    const waterValues = await Water.find().exec();
    response.status(200).json(waterValues);
  } catch (error) {
    next(error);
  }
};
exports.updateWater = async (request, response, next) => {
  const { waterId } = request.params;
  try {
    await Water.findOneAndUpdate({ _id: waterId }, request.body, {
      new: true,
    })
      .then((res) => {
        response.status(202).json({
          water: res,
          message: "You've succesfully updated water",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    response.status(500).json({ error: err });
  }
};
