const express = require("express");
const find = require("./routes/find");
const cors = require("cors");

const sseRoute = require("./routes/stream");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use(sseRoute);
app.use("/find", find);

app.listen("5000", () => {
  console.log("Server is running...");
});
