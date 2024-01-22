const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");

const app = express();
require("dotenv").config();

// variables
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

// Middleware function for json
app.use(express.json());

// Middleware function for the Interation With frontend
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

// CRUD Operation
app.get("/", (req, res) => {
  res.send("Welcome To our Chat App APIs..");
});

// Listning the app on a port
app.listen(port, (req, res) => {
  console.log(`Server Running on port : ${port}`);
});

mongoose
  .connect(uri, {})
  .then(() => console.log(" MongoDB connection established "))
  .catch((error) => console.log("MongoDB connection failed: ", error.message));
