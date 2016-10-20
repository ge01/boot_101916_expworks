// Import the express.js library (which we'll install locally later)
var express = require('express')
// Create an express.js app by instatiating
var app = express()
// Create our first route
app.get('/home', function(req, res) {
  res.end('Hello World!')
})
// run it on port 3000
app.listen(process.argv[2] || 3000)
