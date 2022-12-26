const express = require("express");
const AuthRoutes = require("./Routes/AuthRoutes");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const fileupload = require("express-fileupload");
const PORT = process.env.BACKEND_PORT || 8080;
var cors = require("cors");

let URI = process.env.DATABASE_URL;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileupload());
app.use(express.static("files"));
mongoose.set("strictQuery", false);
// app.use(cors());
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

app.get("/", (req, res) => {
  //   res.send("hello");
});

app.use("/auth", AuthRoutes);

app.listen(PORT, () => {
  console.log(`The Backend is running on Port number ${PORT}`);
});
