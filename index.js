const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Connect to mongodb database using mongoose
mongoose.connect("mongodb://127.0.0.1/my_database:27017"
|| process.env.MONGO_URI,{useNewUrlParser: true,
useUnifiedTopology: true});

//Setup body-parser middleware
app.use(bodyParser.urlencoded({extended:false}));

//Setup route for homepage url
app.route("/")
  .get((req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
  });

//Setup route that receives the original url 
//and sends back a short url
app.route("/api/shorturl/new/")
  .post((req,res)=>{

    const urlString = req.body.url;

    //Check if valid url string using regex
    if(/^http(s)?:\/\/(www.)?\w+\.\w{2,}(\/\w+)*/.test(urlString)){
      
      //Use dns module to lookup the address
    }

    //else return error message
    res.json({"error":"invalid URL"});
  });


app.listen(process.env.PORT || 3200);
