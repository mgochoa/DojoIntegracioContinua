var express = require('express');
var app = express();
var appmIc =require('./appempic');

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World: '+ appmIc.getName()+" "+appmIc.getLastName());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});