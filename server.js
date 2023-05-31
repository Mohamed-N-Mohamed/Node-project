const express = require("express");
const mongoose = require("mongoose");

const app = express();

//routes
app.get("/", (req, res) => {
  res.send("This is a test");
});

mongoose
  .connect(
    "mongodb+srv://admin:mohamednasir@cluster0.ld7yk.mongodb.net/Node-Project?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => console.log("Erorr something went wrong"));
