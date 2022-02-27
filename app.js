const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');

// create our express app
const app = express()
const port = process.env.PORT || "3002";
// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// route
const routes = require('./Routes/Route')
app.use('/', routes)

//start server
/*
app.listen(3002, ()=>{
    console.log("listeniing at port:3002")
}) 
*/
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });