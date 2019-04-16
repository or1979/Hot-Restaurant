// API rooutes

var tableData = require("/data/table.js");
var reserveData = require("/data/table.js");


module.exports = function(app) {

  app.get('/api/tables', function(req, res) {
    res.json(tableData);
  });

  app.get('/api/reserve', function(req, res) {
    res.json(reserveData);
  });

  app.post('/api/tables', function(req, res) {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      reserveData.push(req.body);
      res.json(true);
    }
  });

};
