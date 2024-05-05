const express = require("express");
const {
  handleConnect,
  handleDisconnect,
  handleStart,
  handleStop,
  handleSwitch,
  handleDropBall,
  handlePark,
  handleReset,
} = require("../controllers/refereeController");
const router = express.Router();

router.get("/connect", handleConnect);
router.get("/disconnect", handleDisconnect);
router.get("/start", handleStart);
router.get("/stop", handleStop);
router.get("/switch", handleSwitch);
router.get("/drop-ball", handleDropBall);
router.get("/park", handlePark);
router.get("/reset", handleReset);

module.exports = router;
