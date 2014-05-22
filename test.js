var Pushover = require('./pushover');

var push = new Pushover({
	token:'', 
	user:''
});

// Sample Useage
// Note you can also send in a user token as the first parameter
push.send('title', 'message');
push.sendUrgent('title', 'message urgent', '-1');
push.sendSound('myTitle', 'message sound', 'gamelan');