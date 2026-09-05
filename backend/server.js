const express = require("express");
const cors = require("cors");

const app = express();


app.use(
  cors({
    origin: "http://13.200.251.35",
    methods: ["GET", "POST"],
    credentials: true
  })
);

app.use(express.json());



app.get("/api/message", (req, res) => {
  res.json({
    success: true,
    message: "Backend API working properly"
  });
});



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
