var express= require('express');

var app=express();


app.get('/todo/:name',function(req,res){
	var  list=['Extend the introduction' ,'Complet the result table','Give more explanation related to prosodic features'];
	res.render('todo.ejs',{name:req.params.name,list:list   });
})
.use(function(req,res,next){
	res.setHeader('Content-Type','text/plain');
	res.status(404).send('Page introuvable')
});
app.listen(8080);
