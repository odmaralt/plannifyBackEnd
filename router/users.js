const express = require("express");
const { authLoginWithJwt, authRegister } = require("../authentication/auth");
const {
  getTasks,
  createTask,
  deleteTask,
  getUserTasks,
} = require("../controller/tasks");
const { createUser, getUsers } = require("../controller/users");
const { checkToken } = require("../authentication/jwt");
const {
  createJournal,
  getJournals,
  getJournal,
  updateJournal,
  deleteJournal,
  getUserJournals,
  renewJournal,
} = require("../controller/journals");
const {
  createWater,
  getWaterValues,
  updateWater,
  getUserWaters,
} = require("../controller/water");
const {
  createSleep,
  getSleepValues,
  updateSleep,
  getUserSleeps,
} = require("../controller/sleep");

const router = express.Router();
router.get("/", getUsers);
router.post("/signUp", createUser, authRegister);
router.post("/login", authLoginWithJwt);

router.post("/tasks", createTask, checkToken);
router.get("/tasks", getTasks, checkToken);
router.get("/:userId/tasks", getUserTasks, checkToken);

router.delete("/tasks/:taskId", deleteTask, checkToken);

router.post("/journal", createJournal, checkToken);
// router.post("/newJournal", renewJournal,);
router.get("/journals/:journalId", getJournal, checkToken);
router.get("/:userId/journals", getUserJournals, checkToken);
router.put("/journals/:journalId", updateJournal, checkToken);
router.delete("/journals/:journalId", deleteJournal, checkToken);

router.post("/water", createWater, checkToken);
router.get("/water", getWaterValues, checkToken);
router.put("/water/:waterId", updateWater, checkToken);
router.get("/:userId/waters", getUserWaters, checkToken);

router.post("/sleep", createSleep, checkToken);
router.get("/sleep", getSleepValues, checkToken);
router.get("/:userId/sleeps", getUserSleeps, checkToken);
router.put("/sleep/:sleepId", updateSleep, checkToken);

module.exports = router;
