const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/gamekanban",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

app.listen(PORT, function () {
  console.log(`Serving app at: http://localhost:${PORT}`);
});
