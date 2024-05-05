const http = require("http");
const { Server } = require("socket.io");

const socketServer = http.createServer();
const io = new Server(socketServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

socketServer.listen(4000, () => {
  console.log("Socket server berjalan di port 4000");
});

module.exports = {
  io,
};
