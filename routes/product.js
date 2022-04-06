var express = require("express");
var bodyparser = require("body-parser");
const Product = require("../models/Product");
var jsonparser = bodyparser.json();
const router = express.Router();

router.post("/save", async(req, res) => {
    let body = req.body;
    let product = new Product();
    if (body.data.id != "") {
        product = await Product.findById(body.data.id);
    }
    product.title = body.data.title;
    product.save().then(result => {
        res.end(JSON.stringify(result));
    }, err => {
        res.end(JSON.stringify(err));
    });
});

router.post("/list", async(req, res) => {
    let products = await Product.find();
    res.json({ data: products });
});

router.post("/get", async(req, res) => {
    let body = req.body;
    let products = await Product.findById(body.data.id);
    res.json({ data: products });
});

router.post("/delete", async(req, res) => {
    let body = req.body;
    await Product.findByIdAndDelete(body.data.id);
    let data = {
        "data": {
            "status": "success"
        }
    }
    res.end(JSON.stringify(data));
});


module.exports = router;