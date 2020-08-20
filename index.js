const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Setup body-parser middleware
app.use(bodyParser.urlencoded({extended:false});

