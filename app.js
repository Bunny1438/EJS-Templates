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
   var currentDay = today.getDay();
//    console.log(currentDay)
   var day ="";
   switch (currentDay) {
       case 0:
       day="sunday";
           
           break;
        case 1:
       day="monday";
           
           break;
        case 2:
       day="tuesday";
           
           break;
        case 3:
       day="wdenesday";
           
           break;
        case 4:
       day="thursday";
           
           break;
        case 5:
       day="friday";
           
           break;
        case 6:
       day="saturday";
           
           break; 
       default:
        day="Error";
           break;
   }
//To render the content on web
res.render(("list"),{kindOfDay:day})
});


//App listen 
app.listen(3500,function (res) {
    console.log("Server is running");
});