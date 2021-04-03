const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];
const waitData = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/api/tables", (req, res) => {
  const newReservation = req.body;

  console.log(newReservation);

  waitData.push(newReservation);
  console.log(waitData);
  res.json(newReservation);
});

app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", (req, res) => {
  res.json(reservations);
});

app.get("/api/waitlist", (req, res) => {
  res.json(waitData);
});

// app.post("/tables", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
