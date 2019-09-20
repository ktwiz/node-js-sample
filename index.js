var emplRouter = require('./routes/index');
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'));
app.get('/', (request, response) => {
  response.contentType("text/html");
  response.send('<b>Hello World! You at Home Page</b>')
});
app.use('/empl/',emplRouter);
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
