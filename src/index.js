// Import pustaka yang diperlukan
const express = require("express");
const rclnodejs = require("rclnodejs");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Yeeayyy!!",
  });
});

app.get("/api/ros/start", async (req, res) => {
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
