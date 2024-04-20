const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3001;
const URI = process.env.URI;

app.use(cors());

app.use(express.json())

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongoose");
} catch (error) {
  console.log("error : ", error);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const bookRoute = require("./route/book.route.js");
// const userRoute = require("./route/user.route.js");


// defining routes

app.use("/book", bookRoute);
// app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`port listening on port ${PORT}`);
});
