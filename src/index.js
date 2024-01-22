const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  console.log(process.env.DEBUG )
  return res.status(200).json({
    message: "Hello from root!",
    DEBUG: process.env.DEBUG === 1 ||  `${process.env.DEBUG}` === `1`,
    DATABASE_URL: process.env.DATABASE_URL ? process.env.DATABASE_URL : 
    'not here',
  });
});

app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

// server-full app
// app.listen(3000, ()=>{
// console.log("running at http://localhost:3000")
// })

module.exports.handler = serverless(app);
