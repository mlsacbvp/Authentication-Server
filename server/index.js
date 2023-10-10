const express = require("express");
const cookieParser = require("cookie-parser");
// const db = require("./config/mongoose");
const DBConnection = require("./database/db");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());
app.use("/", require("./routes"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded());
app.use(cookieParser());

DBConnection();
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server ${err}`);
  }
  console.log(`Server is up and running on port ${port}`);
});
