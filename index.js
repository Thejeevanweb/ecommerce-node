var express = require("express");
const mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost:27017/ecommerce")

const db = mongoose.connection;
db.on("error", error => console.log(console.error()));
db.on("open", () => console.log("connection is established"));


app.use(express.static("assets"));
app.use(express.json());
app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");

    if (req.method == "OPTION") {

        res.header("Access-Control-Allow-Origin", "POST", "GET", "PUSH", "PATCH", "DELETE");

        return res.status(200).json({})
    }
    next();
});

app.get("/", function(req, res) {

    res.send("hello welcome to ecommerce");
    res.end();
});
app.use("/product", require("./routes/product"));
//app.use("/user", require("./routes/user"));

app.listen(8081, function() {
    console.log("node server started");
});