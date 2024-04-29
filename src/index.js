const express = require("express");
const cors = require("cors");
const rclnodejs = require("rclnodejs");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Yeeayyy!!",
  });
});

// referee
// connect
app.get("/api/referee-command/connect", async (req, res) => {
  let node = null;
  const address = req.address;
  const port = req.port;

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
app.get("/api/robot-command/go-to-goal", async (req, res) => {
  let node = null;

  const { x, y, theta } = req.query;

  try {
    await rclnodejs.init();
    node = rclnodejs.createNode("robot_node");
    const publisher = node.createPublisher(
      "geometry_msgs/msg/Pose2D",
      "robot_pose_request"
    );

    const message = rclnodejs.createMessageObject("geometry_msgs/msg/Pose2D");
    message.x = parseFloat(x);
    message.y = parseFloat(y);
    message.theta = parseFloat(theta);
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
