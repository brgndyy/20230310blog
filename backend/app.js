const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const dotenv = require("dotenv");
const fs = require("fs");
const musicRoutes = require("./routes/music-routes");

const app = express();

app.set("port", process.env.PORT || 3002);

app.use("/api/music", musicRoutes);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
