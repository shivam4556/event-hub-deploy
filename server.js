const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const userRoute = require("./routes/users");
const organiserRoute = require("./routes/organisers.js");

const QuestionSet = require("./models/faq");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.static(path.join("public")));

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@eventhub.fwxo5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.use("/api/users", userRoute);
app.use("/api/organisers", organiserRoute);
app.get("/api/faq", (req, res) => {
  QuestionSet.find(function (err, faqContent) {
    if (err) {
      console.log(err);
    } else {
      res.send(faqContent);
    }
  });
});
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.listen(process.env.PORT || 5000, function () {
  console.log("Server is running");
});
