const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/productModel')

const app = express();


app.use(express.json())

//routes
app.get("/", (req, res) => {
  res.send("This is a test");
});

app.post('/product', async (req, res) => {
  try {
    const addedProduct = await Product.create(req.body)
    res.status(200).json(addedProduct)

  } catch (error) {
    console.log(error)
    res.status(500).json({message: error.message})
  }

})
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
