import express from "express";
import router from "./api/v1/router";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 8000;

const listening = (): void => {
  console.log(`Listening on port: `, PORT);
};
app.get("/", express.static("public"));

app.use(cors());
app.use(function (req, res, next) {
  // Website you wish to allow to connect cors
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", "true");
  // Pass to next layer of middleware
  next();
});

app.use("/api/v1", router);

app.listen(PORT, listening);
