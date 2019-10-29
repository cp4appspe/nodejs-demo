const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Kabanero Enterprise version 0.1.2 & CP4A!");
});
 
module.exports.app = app;
