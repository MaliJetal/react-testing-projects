const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

//CORS for react app, assuming at port 3000
app.use(
  cors({
    origin: "https://localhost:3000",
    credentials: true,
  })
);

//read words from json file
const filecontents = fs.readFileSync("./five-letter-words.json", "utf-8");
const words = JSON.parse(filecontents);
const { fiveLetterWords } = words;

app.get("/", (req, res) => {
  //select a random word
  const selectWord =
    fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];

  //return it as the response
  res.send(selectWord);
});

app.listen(3030, () =>
  console.log("Random Word server listening at port 3030")
);

module.exports = app;
