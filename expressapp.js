var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var customers = require('./routes/customers');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/customers', customers.findAll);
app.get('/customers/:id', customers.findById);
app.post('/customers', customers.add);
app.put('/customers/:id', customers.update);  
app.delete('/customers/:id', customers.delete);

var server = app.listen(8001, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})