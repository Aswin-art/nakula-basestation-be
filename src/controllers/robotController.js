const { io } = require("../services/socket");
const { sendMessageToAllRobot } = require("../services/TCP");
const { setRobotCommand } = require("../utils/state");

const handleKickOff = async (req, res) => {
  const message = {
    command: "KICK_OFF",
    x: null,
    y: null,
    theta: null,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "KICK_OFF");
  setRobotCommand(message.command);
};
const handleFreeKick = async (req, res) => {
  const message = {
    command: "FREE_KICK",
    x: null,
    y: null,
    theta: null,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "FREE_KICK");
  setRobotCommand(message.command);
};
const handleGoalKick = async (req, res) => {
  const message = {
    command: "GOAL_KICK",
    x: null,
    y: null,
    theta: null,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "GOAL_KICK");
  setRobotCommand(message.command);
};
const handleThrowIn = async (req, res) => {
  const message = {
    command: "THROW_IN",
    x: null,
    y: null,
    theta: null,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "THROW_IN");
  setRobotCommand(message.command);
};
const handleCornerKick = async (req, res) => {
  const message = {
    command: "CORNER_KICK",
    x: null,
    y: null,
    theta: null,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "CORNER_KICK");
  setRobotCommand(message.command);
};
const handlePenalty = async (req, res) => {
  const message = {
    command: "PENALTY",
    x: null,
    y: null,
    theta: null,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "PENALTY");
  setRobotCommand(message.command);
};
const handleRepair = async (req, res) => {
  const message = {
    command: "REPAIR",
    x: null,
    y: null,
    theta: null,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "REPAIR");
  setRobotCommand(message.command);
};
const handleGoToGoal = async (req, res) => {
  const { x, y, theta } = req.query;
  const message = {
    command: "GO_TO_GOAL",
    x: x,
    y: y,
    theta: theta,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "GO_TO_GOAL");
  setRobotCommand(message.command);
};
const handleModeOne = async (req, res) => {
  const message = {
    command: "MODE_ONE",
    x: null,
    y: null,
    theta: null,
  };
  sendMessageToAllRobot(message);
  io.emit("message", "MODE_ONE");
  setRobotCommand(message.command);
};

module.exports = {
  handleKickOff,
  handleFreeKick,
  handleGoalKick,
  handleThrowIn,
  handleCornerKick,
  handlePenalty,
  handleRepair,
  handleGoToGoal,
  handleModeOne,
};
