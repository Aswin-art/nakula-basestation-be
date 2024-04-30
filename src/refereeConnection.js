const net = require("net");

// Alamat IP dan port Referee Box
const refereeBoxIp = "192.168.0.9"; // Ubah ini dengan alamat IP Referee Box
const refereeBoxPort = 28097; // Ubah ini dengan port Referee Box

// Membuat koneksi TCP ke Referee Box
const client = new net.Socket();

client.connect(refereeBoxPort, refereeBoxIp, () => {
  console.log("Terkoneksi ke Referee Box");
  // Anda dapat mengirim permintaan atau pesan ke Referee Box di sini
  // Misalnya, kirim pesan ke Referee Box untuk memulai permainan
  client.write("Start Game");
});

// Tangani data yang diterima dari Referee Box
client.on("data", (data) => {
  console.log("Data dari Referee Box:", data.toString());
  // Proses data yang diterima sesuai kebutuhan
  // Misalnya, Anda dapat memeriksa perintah yang diterima
  if (data.toString().trim() === "Start") {
    console.log("Memulai proses berdasarkan perintah Start");
    // Panggil fungsi yang diperlukan untuk menangani perintah Start
  }
});

// Tangani error koneksi
client.on("error", (err) => {
  console.error("Error koneksi:", err.message);
});

// Tangani koneksi yang ditutup
client.on("close", () => {
  console.log("Koneksi ke Referee Box ditutup");
});
