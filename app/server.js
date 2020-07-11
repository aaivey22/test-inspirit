const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

app.use("/", express.static(_dirname + "/build"));
app.get("/", (req, res) => res.sendFile(_dirname + "/build/index.html"));

mongoose.connect(
    process.env.MONGODB_URL || "mongodb://localhost/app-db", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,  
});

const Product = mongoose.model("products", new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    image: String,
    title: String,
    description: String,
    options: [String],
    price: Number,
}));

app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.delete("/api/products/:id", async(req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));