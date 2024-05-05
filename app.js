const express = require("express");
const cors = require("cors");

const refereeRoutes = require("./src/routes/refereeRoutes");
const robotRoutes = require("./src/routes/robotRoutes");
const {
  checkConnectionRefereeBox,
  checkConnectionAllRobot,
} = require("./src/services/TCP");
const { io } = require("./src/services/socket");

const app = express();
app.use(cors());

checkConnectionRefereeBox();
checkConnectionAllRobot();

io.on("connection", (socket) => {
  console.log("Client terhubung:", socket.id);
});

app.get("/", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Yeeayyy!!",
  });
});

app.use("/api/referee-command", refereeRoutes);
app.use("/api/robot-command", robotRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
