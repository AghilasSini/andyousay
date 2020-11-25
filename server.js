var http = require('http');
var url =require('url');
var querystring=require('querystring');
var myFirstModule=require('./myFirstModule')
var EventEmitter=require('events').EventEmitter;
var game =new EventEmitter();


var server = http.createServer(function(req, res) {
	/**var page=url.parse(req.url).pathname;
	console.log(page)
	res.writeHead(200, {"Content-Type": "text/plain"});
	if (page == "/"){
		res.write("You are in the Home page, Can I help you")
}
	else if(page== '/SpeechSynthesis'){
		res.write('Road map to synthesis a voice?')
	}
	else if (page=='/SpeechUnderstanding'){
		res.write('Can Machine realy understand Speech Content')
	}**/

	res.writeHead(200,{'Content-Type':"text/plain"});
	var params =querystring.parse(url.parse(req.url).query);
	if ('firstname' in params && 'lastname' in params){
		res.write("Welcome "+params['firstname']+" "+ params['lastname']);
	}
	else{
		res.write('Please can I have your name');
	}

	res.end();

});

game.on('gameover',function(message){
		console.log(message)
});


game.emit('gameover','Parti is finished');

/*server.on("close", function(){
console.log("Bye bye !");
})*/


myFirstModule.sayHello()
myFirstModule.commit()
myFirstModule.sayBye()

server.listen(6060);
//server.close();
