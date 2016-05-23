var express    = require('express');
var app        = express();
var port       = process.env.PORT || 3000;
var _          = require('underscore');

var customers = [
  {
    id: 0,
    name: "Obelix",
    job: "Freund von Asterix"
  },{
    id: 1,
    name: "Amnesix",
    job: "Druide"
  },{
    id: 2,
    name: "Archaeopterix",
    job: "Spitzendruide"
  },{
    id: 3,
    name: "Asterix",
    job: "Obelix Freund"
  },{
    id: 4,
    name: "Augenblix",
    job: "Häuptling"
  },{
    id: 5,
    name: "Automatix",
    job: "Fischhändler"
  },{
    id: 6,
    name: "Barometrix",
    job: "Mächtiger Druide"
  },{
    id: 7,
    name: "Berlix",
    job: "Lehrer"
  },{
    id: 8,
    name: "Bossix",
    job: "Schwarzhändler"
  },{
    id: 9,
    name: "Kneipix",
    job: "Wirt"
  },{
    id: 10,
    name: "Denkdirnix",
    job: "Tänzer"
  }
]

app.get('/customers', function(req, res) {
  res.json(customers);
});

app.get('/customer/:id', function(req, res) {
  item = _.findWhere(customers, {id: parseInt(req.params.id)});
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Not found');
  }
});

app.listen(port, function() {
  console.log('Hey! The server is running on port ' + port);
});

