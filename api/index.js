const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog:6bMF6qt2LJtD9Vku@cluster0.urrfuto.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password,
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.listen(4000);

//6bMF6qt2LJtD9Vku
//mongodb+srv://blog:6bMF6qt2LJtD9Vku@cluster0.urrfuto.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp
