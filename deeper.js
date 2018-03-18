var express =require('express');

var app=express();

app.get('/',function(req,res){
	res.setHeader('Content-Type','text/plain');
	res.send('You are at home');
})
.get('/speech/:features/extraction',function(req,res){
	res.render('processing.ejs',{ speech: req.params.features  });
})
.get('/SpeechSynthesis',function(req,res){
	res.setHeader('Content-Type','text/plain');
	res.send('Road map to build your own Synthesis Voice');
})
.get('/SpeechUnderstanding',function(req,res){
	res.setHeader('Content-Type','text/plain');
	res.send('Machine can realy understand humane');
})
.use(function(req,res,next){
	res.setHeader('Content-Type','text/plain');
	res.status(404).send('Page introuvable!')
});
app.listen(8080);
