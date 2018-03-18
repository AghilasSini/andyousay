var markdown = require('markdown').markdown;
var sayHello= function(){
	console.log('Hello!')
}


var commit= function(){
	console.log(markdown.toHTML('Comment With **Markdown** !'))

}

var sayBye= function(){
	console.log('Bye bye!')
}

exports.sayHello=sayHello
exports.commit=commit
exports.sayBye=sayBye
