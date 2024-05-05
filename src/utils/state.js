let globalState = {
  position: "",
  gameStatus: "FIRST_HALF",
  teamColor: "",
  robotOneStatus: "",
  robotTwoStatus: "",
  robotThreeStatus: "",
  robotCommand: "",
  overRide: false,
};

const setPosition = (position) => {
  globalState.position = position;
};

const setGameStatus = (gameStatus) => {
  globalState.gameStatus = gameStatus;
};

const setTeamColor = (teamColor) => {
  globalState.teamColor = teamColor;
};

const setRobotOneStatus = (robotOneStatus) => {
  globalState.robotOneStatus = robotOneStatus;
};

const setRobotTwoStatus = (robotTwoStatus) => {
  globalState.robotTwoStatus = robotTwoStatus;
};

const setRobotThreeStatus = (robotThreeStatus) => {
  globalState.robotThreeStatus = robotThreeStatus;
};

const setRobotCommand = (robotCommand) => {
  globalState.robotCommand = robotCommand;
};

const setOverRide = () => {
  globalState.overRide = !globalState.overRide;
};

module.exports = {
  globalState,
  setPosition,
  setGameStatus,
  setTeamColor,
  setRobotOneStatus,
  setRobotTwoStatus,
  setRobotThreeStatus,
  setRobotCommand,
  setOverRide,
};
