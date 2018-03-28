var express=require('express')
var morgan=require('morgan')
var favicon=require('serve-favicon')

var app=express()

app.use(morgan('combined'))
.use(express.static(__dirname +'/public'))
.use(favicon(__dirname +'/public/favicon.ico'))
.use(function(req,res){
	res.send('And You Say is Speech and Language Framework');
});


app.listen(8080)
