const net = require("net");
const { setRobotCommand } = require("../utils/state");
const { io } = require("./socket");

const refereeBox = new net.Socket();

const robot1 = new net.Socket();
const robot2 = new net.Socket();
const robot3 = new net.Socket();

const sendMessageToAllRobot = (message) => {
  try {
    robot1.write(message, "utf8", () => {
      console.log(`Pesan terkirim ke server: ${message}`);
    });
    robot2.write(message, "utf8", () => {
      console.log(`Pesan terkirim ke server: ${message}`);
    });
    robot3.write(message, "utf8", () => {
      console.log(`Pesan terkirim ke server: ${message}`);
    });

    if (message.command != "") {
      setRobotCommand(message.command);
    }
  } catch (err) {
    console.log(err);
  }
};

const checkConnectionRefereeBox = () => {
  refereeBox.on("data", (data) => {
    const returnMessage = data.toString();

    const endPos = returnMessage.lastIndexOf("}") + 1;

    const jsonData = returnMessage.substring(0, endPos);

    try {
      const message = JSON.parse(jsonData);

      console.log("Command:", message.command);
      console.log("Target Team:", message.targetTeam);

      switch (message.command) {
        case "WELCOME": {
          console.log("Koneksi Telah Tersambung");
          io.emit("message", "Koneksi Telah Tersambung");
          break;
        }

        case "START": {
          console.log("Menerima perintah START dari Referee Box");
          io.emit("message", "START");
          setRobotCommand("START");
          break;
        }

        case "STOP": {
          console.log("Menerima perintah STOP dari Referee Box");
          io.emit("message", "STOP");
          setRobotCommand("STOP");
          break;
        }

        case "DROP_BALL": {
          console.log("Menerima perintah DROP_BALL dari Referee Box");
          io.emit("message", "DROP_BALL");
          setRobotCommand("DROP_BALL");
          break;
        }

        case "PARK": {
          console.log("Menerima perintah PARK dari Referee Box");
          io.emit("message", "PARK");
          setRobotCommand("PARK");
          break;
        }

        case "RESET": {
          console.log("Menerima perintah RESET dari Referee Box");
          io.emit("message", "RESET");
          setRobotCommand("RESET");
          break;
        }

        case "SUBSTITUTE": {
          console.log("Menerima perintah SUBSTITUTE dari Referee Box");
          io.emit("message", "SUBSTITUTE");
          setRobotCommand("SUBSTITUTE");
          break;
        }

        case "ENDPART": {
          console.log("Menerima perintah ENDPART dari Referee Box");
          io.emit("message", "ENDPART");
          setRobotCommand("ENDPART");
          break;
        }

        case "KICKOFF": {
          console.log("Menerima perintah KICKOFF dari Referee Box");
          io.emit("message", "KICKOFF");
          setRobotCommand("KICKOFF");
          break;
        }

        case "FREEKICK": {
          console.log("Menerima perintah FREEKICK dari Referee Box");
          io.emit("message", "FREEKICK");
          setRobotCommand("FREEKICK");
          break;
        }

        case "GOALKICK": {
          console.log("Menerima perintah GOALKICK dari Referee Box");
          io.emit("message", "GOALKICK");
          setRobotCommand("GOALKICK");
          break;
        }

        case "THROWIN": {
          console.log("Menerima perintah THROWIN dari Referee Box");
          io.emit("message", "THROWIN");
          setRobotCommand("THROWIN");
          break;
        }

        case "CORNER": {
          console.log("Menerima perintah CORNER dari Referee Box");
          io.emit("message", "CORNER");
          setRobotCommand("CORNER");
          break;
        }

        case "PENALTY": {
          console.log("Menerima perintah PENALTY dari Referee Box");
          io.emit("message", "PENALTY");
          setRobotCommand("PENALTY");
          break;
        }

        case "FIRST_HALF": {
          console.log("Menerima perintah FIRST_HALF dari Referee Box");
          io.emit("message", "FIRST_HALF");
          setRobotCommand("FIRST_HALF");
          break;
        }

        default: {
          console.log("Command tidak dikenal:", message.command);
        }
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  });

  refereeBox.on("error", (err) => {
    console.error("Error koneksi:", err.message);
  });

  refereeBox.on("close", () => {
    console.log("Koneksi ke Referee Box ditutup");
  });
};

const checkConnectionAllRobot = () => {
  robot1.on("error", (err) => {
    console.error("Error koneksi:", err.message);
  });

  robot1.on("close", () => {
    console.log("Koneksi ke Robot 1 ditutup");
  });

  robot2.on("error", (err) => {
    console.error("Error koneksi:", err.message);
  });

  robot2.on("close", () => {
    console.log("Koneksi ke Robot 2 ditutup");
  });

  robot3.on("error", (err) => {
    console.error("Error koneksi:", err.message);
  });

  robot3.on("close", () => {
    console.log("Koneksi ke Robot 3 ditutup");
  });
};

module.exports = {
  refereeBox,
  robot1,
  robot2,
  robot3,
  sendMessageToAllRobot,
  checkConnectionAllRobot,
  checkConnectionRefereeBox,
};
