const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const dotenv = require("dotenv");
const fs = require("fs");
const musicRoutes = require("./routes/music-routes");
const movieRoutes = require("./routes/movie-routes");
const bookRoutes = require("./routes/book-routes");
const exhibitionRoutes = require("./routes/exhibition-routes");
const etcRoutes = require("./routes/etc-routes");
const loginRoutes = require("./routes/login-routes");
const singUpRoutes = require("./routes/signUp-routes");
const { sequelize } = require("./models");
const HttpError = require("./error/http-error");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.set("port", process.env.PORT || 3002);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("데이터 베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(helmet());

app.use("/api/login", loginRoutes);
app.use("/api/music", musicRoutes);
app.use("/api/movie", movieRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/exhibition", exhibitionRoutes);
app.use("/api/etc", etcRoutes);
app.use("api/signup", singUpRoutes);

// 에러 처리 미들웨어는 맨 밑에 두기

app.use((req, res, next) => {
  const error = new HttpError("해당 페이지를 찾을 수 없습니다!", 404);

  throw error;
});

app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "오류가 발생했습니다." });
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
