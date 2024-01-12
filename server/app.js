import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("hello from node");
});

app.listen("4000", () => {
  console.log("server running on port 4000");
});
