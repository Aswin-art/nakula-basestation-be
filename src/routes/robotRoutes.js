const express = require("express");
const {
  handleKickOff,
  handleFreeKick,
  handleGoalKick,
  handleThrowIn,
  handleCornerKick,
  handlePenalty,
  handleRepair,
  handleGoToGoal,
  handleModeOne,
} = require("../controllers/robotController");
const router = express.Router();

router.get("/kick-off", handleKickOff);
router.get("/free-kick", handleFreeKick);
router.get("/goal-kick", handleGoalKick);
router.get("/throw-in", handleThrowIn);
router.get("/corner-kick", handleCornerKick);
router.get("/penalty", handlePenalty);
router.get("/repair", handleRepair);
router.get("/go-to-goal", handleGoToGoal);
router.get("/mode-one", handleModeOne);

module.exports = router;
