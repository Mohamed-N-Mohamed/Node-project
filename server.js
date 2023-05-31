const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");

const app = express();

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("This is a test");
});

app.get("/products", async (req, res) => {
  try {
    const fetchedProducts = await Product.find({});
    handleSuccess(res, 200, fetchedProducts);
  } catch (error) {
    handleError(res, 500, error);
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const findProduct = await Product.findById(id);
    handleSuccess(res, 200, findProduct);
  } catch (error) {
    handleError(res, 500, error);
  }
});
app.post("/products", async (req, res) => {
  try {
    const addProducts = await Product.create(req.body);
    handleSuccess(res, 200, addProducts);
  } catch (error) {
    handleError(res, 500, error);
  }
});

//handle success
function handleSuccess(res, statusCode, product) {
  res.status(statusCode).json({ product });
}
//handle error
function handleError(res, statusCode, error) {
  res.status(statusCode).json({ message: error.message });
}
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
