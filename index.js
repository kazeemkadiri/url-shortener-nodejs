const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Connect to mongodb database using mongoose
mongoose.connect("mongodb://127.0.0.1/my_database:27017
|| process.env.MONGO_URI,{useNewUrlParser: true,
useUnifiedTopology: true});

//Setup body-parser middleware
app.use(bodyParser.urlencoded({extended:false});

app.listen(process.env.PORT || 3000);
