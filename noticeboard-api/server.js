const express = require("express");
const cors = require("cors");
const _ = require("lodash");

const app = express();
app.use(cors());

const notices = [
  { id: 1, title: "Annual sports day", date: "2026-11-14", category: "event" },
  { id: 2, title: "Parent-teacher meeting", date: "2026-10-31", category: "meeting" },
  { id: 3, title: "Diwali holidays begin", date: "2026-11-07", category: "holiday" },
  { id: 4, title: "Science fair entries due", date: "2026-11-03", category: "event" },
];

// Health check
app.get("/", (req, res) => {
  res.send("Noticeboard API is running");
});

// All notices, soonest first
app.get("/api/notices", (req, res) => {
  res.json(_.sortBy(notices, "date"));
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Noticeboard API on http://localhost:${PORT}`);
});
