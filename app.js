const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Kabanero Enterprise!");
});
 
module.exports.app = app;
