const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: ["https://example.com", "http://localhost:3000"], // Add your allowed origins here
};

app.use(cors(corsOptions));

app.get("/", function (req, res) {
  res.send("Hello from the API!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
