const app = require('express')()

app.get('/', (req, res) => {
  res.send("My first Node.js with Kabanero!");
});
 
module.exports.app = app;
