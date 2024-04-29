const dgram = require("dgram");

// Membuat soket UDP
const socket = dgram.createSocket("udp4");

// Konfigurasi alamat dan port RefereeBox
const refereeBoxHost = "192.168.0.160";
const refereeBoxPort = 28097;

// Fungsi untuk mendengarkan pesan yang diterima dari RefereeBox
socket.on("message", (msg, rinfo) => {
  console.log("Received message from RefereeBox:", msg.toString());
  console.log("From:", rinfo);
});

// Fungsi untuk menangani kesalahan pada soket
socket.on("error", (error) => {
  console.error("Socket error:", error);
});

// Fungsi untuk menangani penutupan soket
socket.on("close", () => {
  console.log("Socket closed");
});

// Mengikat soket ke alamat dan port lokal untuk mendengarkan pesan
socket.bind(() => {
  console.log(
    `Listening for messages from RefereeBox on ${refereeBoxHost}:${refereeBoxPort}`
  );
});

// Mengirim pesan ke RefereeBox
socket.send("", 28097, "192.168.0.160");
