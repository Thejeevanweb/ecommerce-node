const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    name: {
        type: String
    },
    mrp: {
        type: Number
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    imagepath: {
        type: String
    },
});
const Product = mongoose.model("products", schema);
module.exports = Product;