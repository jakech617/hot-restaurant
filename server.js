const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];
const waitlist = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/reserve", (req, res) => {
  const newReservation = req.body;

  newReservation.name = newReservation.name.replace(/\s+/g, "");
  console.log(newReservation);

  reservations.push(newReservation);
  console.log(reservations);
  res.json(newReservation);
});

app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.post("/tables", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
