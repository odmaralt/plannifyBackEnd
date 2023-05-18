const cron = require("node-cron");
const {
  updateJournal,
  createJournal,
  renewJournal,
} = require("../controller/journals");
const { updateSleep } = require("../controller/sleep");
const { updateWater } = require("../controller/water");
// Schedule a task to run every minute
cron.schedule("* * * * *", () => {
  renewJournal();
  // updateJournal();
  // updateSleep();
  // updateWater();
});
