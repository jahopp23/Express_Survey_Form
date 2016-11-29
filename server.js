var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());

app.get('/', function(request, response) {
  response.send("<h1>Hello Express</h1>");
  })

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.listen(8000, function() { 
  console.log("listening on port 8000"); 
  })

app.get("/index", function(request, response){
  response.render('index', {title: 'Survey!'});
})


app.get("/result", function(request, response){
  
  //response.render('result', {name: request.body.name, location: request.body.location, language: request.body.language, comment: request.body.comment});
  response.render('result')
}) 

app.post("/result", function(request, response){
	response.render('result', {name: request.body.name, location: request.body.location, language: request.body.language, comment: request.body.comment});
	response.redirect('/result');
})


//app.post('/result', function(req, res){
 // console.log("POSTDATA \n\n", req.body)
  //res.redirect('/result');


