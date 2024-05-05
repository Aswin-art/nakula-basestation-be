const { io } = require("../services/socket");
const { refereeBox, sendMessageToAllRobot } = require("../services/TCP");
const { setRefereeCommand } = require("../utils/state");

const handleConnect = async (req, res) => {
  const { ip, port } = req.query;

  if (!ip || !port) {
    return res.status(400).json({ error: "Parameter IP dan port diperlukan" });
  }

  refereeBox.connect(port, ip, () => {
    console.log("Menyambungkan ke Referee Box");
    io.emit("message", "Menyambungkan ke Referee Box");
  });

  return res.status(200).json({ message: "success" });
};
const handleDisconnect = async (req, res) => {
  refereeBox.end(() => {
    console.log("Terputus dari Referee Box");
    io.emit("message", "Terputus dari Referee Box");
  });

  return res.status(200).json({ message: "success" });
};
const handleStart = async (req, res) => {
  const message = {
    command: "START",
    x: x,
    y: y,
    theta: theta,
  };
  sendMessageToAllRobot(message);
  io.emit("message");
  setRefereeCommand("START");
  return res.status(200).json({ message: "success" });
};
const handleStop = async (req, res) => {
  const message = {
    command: "STOP",
    x: x,
    y: y,
    theta: theta,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "STOP");
  setRefereeCommand("STOP");
  return res.status(200).json({ message: "success" });
};
const handleSwitch = async (req, res) => {
  const message = {
    command: "SWITCH",
    x: x,
    y: y,
    theta: theta,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "SWITCH");
  setRefereeCommand("SWITCH");
  return res.status(200).json({ message: "success" });
};
const handleDropBall = async (req, res) => {
  const message = {
    command: "DROP_BALL",
    x: x,
    y: y,
    theta: theta,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "DROP_BALL");
  setRefereeCommand("DROP_BALL");
  return res.status(200).json({ message: "success" });
};
const handlePark = async (req, res) => {
  const message = {
    command: "PARK",
    x: x,
    y: y,
    theta: theta,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "PARK");
  setRefereeCommand("PARK");
  return res.status(200).json({ message: "success" });
};
const handleReset = async (req, res) => {
  const message = {
    command: "RESET",
    x: x,
    y: y,
    theta: theta,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "RESET");
  setRefereeCommand("RESET");
  return res.status(200).json({ message: "success" });
};

module.exports = {
  handleConnect,
  handleDisconnect,
  handleStart,
  handleStop,
  handleSwitch,
  handleDropBall,
  handlePark,
  handleReset,
};
