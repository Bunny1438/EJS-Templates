//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

//Creating app
const app = express();

//setting ejs
app.set('view engine','ejs');

//Get 
app.get("/",function (req,res) {
   var today = new Date();
   var day ="";
if(today.getDay() === 6 || today.getDay() === 0 ){
    day="weekend";}
else{
    day = "weekday";
}
//To render the content on web
res.render(("list"),{kindOfDay:day})
});


//App listen 
app.listen(3500,function (res) {
    console.log("Server is running");
});