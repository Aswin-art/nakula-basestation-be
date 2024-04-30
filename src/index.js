const express = require("express");
const cors = require("cors");
const rclnodejs = require("rclnodejs");
const net = require("net");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*", // Tentukan origin client
    methods: ["GET", "POST"],
  },
});

// Mulai server HTTP di port 5000
server.listen(4000, () => {
  console.log("Server soket berjalan di port 4000");
});

const refereeBoxIp = "192.168.201.85";
const refereeBoxPort = 28097;

const client = new net.Socket();

app.get("/", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Yeeayyy!!",
  });
});

io.on("connection", (socket) => {
  console.log("Client terhubung:", socket.id);
});

// Handle Koneksi RefereeBox
client.on("data", (data) => {
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
        break;
      }

      case "STOP": {
        console.log("Menerima perintah STOP dari Referee Box");
        io.emit("message", "STOP");
        break;
      }

      case "DROP_BALL": {
        console.log("Menerima perintah DROP_BALL dari Referee Box");
        io.emit("message", "DROP_BALL");
        break;
      }

      case "PARK": {
        console.log("Menerima perintah PARK dari Referee Box");
        io.emit("message", "PARK");
        break;
      }

      case "RESET": {
        console.log("Menerima perintah RESET dari Referee Box");
        io.emit("message", "RESET");
        break;
      }

      case "SUBSTITUTE": {
        console.log("Menerima perintah SUBSTITUTE dari Referee Box");
        io.emit("message", "SUBSTITUTE");
        break;
      }

      case "ENDPART": {
        console.log("Menerima perintah ENDPART dari Referee Box");
        io.emit("message", "ENDPART");
        break;
      }

      case "KICKOFF": {
        console.log("Menerima perintah KICKOFF dari Referee Box");
        io.emit("message", "KICKOFF");
        break;
      }

      case "FREEKICK": {
        console.log("Menerima perintah FREEKICK dari Referee Box");
        io.emit("message", "FREEKICK");
        break;
      }

      case "GOALKICK": {
        console.log("Menerima perintah GOALKICK dari Referee Box");
        io.emit("message", "GOALKICK");
        break;
      }

      case "THROWIN": {
        console.log("Menerima perintah THROWIN dari Referee Box");
        io.emit("message", "THROWIN");
        break;
      }

      case "CORNER": {
        console.log("Menerima perintah CORNER dari Referee Box");
        io.emit("message", "CORNER");
        break;
      }

      case "PENALTY": {
        console.log("Menerima perintah PENALTY dari Referee Box");
        io.emit("message", "PENALTY");
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

client.on("error", (err) => {
  console.error("Error koneksi:", err.message);
});

client.on("close", () => {
  console.log("Koneksi ke Referee Box ditutup");
});

// referee
// connect
app.get("/api/referee-command/connect", async (req, res) => {
  const { ipaddress, port } = req.query;
  client.connect(port, refereeBoxIp, () => {
    console.log("Menyambungkan ke Referee Box");
    io.emit("message", "Menyambungkan ke Referee Box");
  });
});

// disconnect
app.get("/api/referee-command/disconnect", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// start
app.get("/api/referee-command/start", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// stop
app.get("/api/referee-command/stop", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// switch
app.get("/api/referee-command/switch", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// drop-ball
app.get("/api/referee-command/drop-ball", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// park
app.get("/api/referee-command/park", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// reset
app.get("/api/referee-command/reset", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// robot
// kick-off
app.get("/api/robot-command/kick-off", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// free-kick
app.get("/api/robot-command/free-kick", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// goal-kick
app.get("/api/robot-command/goal-kick", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// throw-in
app.get("/api/robot-command/throw-in", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// corner-kick
app.get("/api/robot-command/corner-kick", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// penalty
app.get("/api/robot-command/penalty", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// repair
app.get("/api/robot-command/repair", async (req, res) => {
  let node = null;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("example_node");
    const publisher = node.createPublisher("std_msgs/msg/String", "chatter");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Hello from Express with ROS 2!";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

// go-to-goal
let node = null;
let publisher = null;
let intervalId = null;
app.get("/api/robot-command/go-to-goal", async (req, res) => {
  const { x, y, theta } = req.query;

  try {
    // Inisialisasi ROS 2
    await rclnodejs.init();

    // Buat node ROS 2 hanya jika belum dibuat
    if (!node) {
      node = rclnodejs.createNode("robot_node");
    }

    // Buat publisher jika belum dibuat
    if (!publisher) {
      publisher = node.createPublisher(
        "geometry_msgs/msg/Pose2D",
        "robot_pose_request"
      );
    }

    // Buat pesan geometry_msgs/Pose2D
    const message = rclnodejs.createMessageObject("geometry_msgs/msg/Pose2D");
    message.x = parseFloat(x);
    message.y = parseFloat(y);
    message.theta = parseFloat(theta);

    // Hentikan interval yang berjalan (jika ada)
    if (intervalId) {
      clearInterval(intervalId);
    }

    // Mulai interval baru untuk menerbitkan pesan setiap 100ms
    intervalId = setInterval(() => {
      publisher.publish(message);
    }, 100);

    res
      .status(200)
      .json({ success: true, message: "Publishing to ROS 2 every 100ms" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

app.get("/api/robot-command/mode-one", async (req, res) => {
  let node = null;
  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("mode1");
    const publisher = node.createPublisher("std_msgs/msg/String", "mode1");

    const message = rclnodejs.createMessageObject("std_msgs/msg/String");
    message.data = "Start";
    publisher.publish(message);

    res.status(200).json({ success: true, message: "Published to ROS 2" });
  } catch (error) {
    console.error("Error interacting with ROS 2:", error);
    res.status(500).json({
      success: false,
      error: `Failed to interact with ROS 2: ${error.message}`,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
