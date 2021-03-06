var req = require('request');

function Pushover(args) {
	this.api = 'https://api.pushover.net/1/messages.json';
	this.token = ''; //this must be specified or we will throw an error
	this.users = []; //optional (to send to multiple recipents);
	this.priority = 0; //default
	this.sound = 'pushover'; //default

	if (!args.token) {
		throw new Error('No Application token defined');
		return;
	}
	this.token = args.token;
	
	//set the properties if are part of constructor
	if (args.priority)
		this.priority = args.priority;
	/*
	Lowest Priority (-2)
	When the priority parameter is specified with a value of -2, messages will be considered lowest priority and will not generate any notification. On iOS, the application badge number will be increased.

	Low Priority (-1)
	Messages with a priority parameter of -1 will be considered low priority and will not generate any sound or vibration, but will still generate a popup/scrolling notification depending on the client operating system. Messages delivered during a user's quiet hours are sent as though they had a priority of (-1).

	Normal Priority (0)
	Messages sent without a priority parameter, or sent with the parameter set to 0, will have the default priority. These messages trigger sound, vibration, and display an alert according to the user's device settings. On iOS, the message will display at the top of the screen or as a modal dialog, as well as in the notification center. On Android, the message will scroll at the top of the screen and appear in the notification center.

	If a user has quiet hours set and your message is received during those times, your message will be delivered as though it had a priority of -1.

	High Priority (1)
	Messages sent with a priority of 1 are high priority messages that bypass a user's quiet hours. These messages will always play a sound and vibrate (if the user's device is configured to) regardless of the delivery time. High-priority should only be used when necessary and appropriate.

	High-priority messages are highlighted in red in the device clients.
	*/

	if (args.sound)
		this.sound = args.sound;

	/*
		pushover - Pushover (default)
		bike - Bike
		bugle - Bugle
		cashregister - Cash Register
		classical - Classical
		cosmic - Cosmic
		falling - Falling
		gamelan - Gamelan
		incoming - Incoming
		intermission - Intermission
		magic - Magic
		mechanical - Mechanical
		pianobar - Piano Bar
		siren - Siren
		spacealarm - Space Alarm
		tugboat - Tug Boat
		alien - Alien Alarm (long)
		climb - Climb (long)
		persistent - Persistent (long)
		echo - Pushover Echo (long)
		updown - Up Down (long)
		none - None (silent)
	*/

	//this can be empty we will accept it on the sends as well
	if (args.users)
		this.users = args.users;

	return this;
}

Pushover.prototype.send = function(arg1, arg2, arg3) {
	if( arguments.length == 2 ){
		// (title, message)
		if(!this.users) {
			throw new Error('No user(s) token defined');
			return;
		}
		for (user in this.users) {
			var params = {
				token: this.token,
				user: this.users[user].user,
				title: arg1,
				message: arg2,
				priority: this.priority,
				sound: this.sound
			};
			req.post({
					headers: {'content-type' : 'application/x-www-form-urlencoded'},
					url:  this.api,
					form: params
				}, function(error, response, body) {
					if (response.statusCode != 200) {
						console.log('????? Error: ' + response.body);
					}					
			});
		}

	} else { //Specifiying usertoken

		var params = {
			token: this.token,
			user: arg1,
			title: arg2,
			message: arg3,
			priority: this.priority,
			sound: this.sound
		};

		req.post({
			headers: {'content-type' : 'application/x-www-form-urlencoded'},
			url:  this.api,
			form: params
		}, function(error, response, body) {
			if (response.statusCode != 200) {
				console.log('????? Error: ' + response.body);
			}					
		});
	}

 }

Pushover.prototype.sendToDevice = function(arg1, arg2, arg3, arg4) {

 	if( arguments.length == 3 ){
		// (title, message)
		if(!this.user) {
			throw new Error('No user token defined');
			return;
		}
		for (user in this.users) {
			var params = {
				token: this.token,
				user: this.users[user].user,
				title: arg1,
				message: arg2,
				priority: this.priority,
				sound: this.sound
			};

			req.post({
				headers: {'content-type' : 'application/x-www-form-urlencoded'},
				url:  this.api,
				form: params
			}, function(error, response, body) {
				if (response.statusCode != 200) {
					console.log('????? Error: ' + response.body);
				}					
			});
		}

	} else { //Specifiying usertoken

		var params = {
			token: this.token,
			user: arg1,
			title: arg2,
			message: arg3,
			device: arg4,
			priority: this.priority,
			sound: this.sound
		};

		req.post({
			headers: {'content-type' : 'application/x-www-form-urlencoded'},
			url:  this.api,
			form: params
		}, function(error, response, body) {
			if (response.statusCode != 200) {
				console.log('????? Error: ' + response.body);
			}					
		});
	}

 }

Pushover.prototype.sendSound = function(arg1, arg2, arg3, arg4) {

 	if( arguments.length == 3 ){
		// (title, message)
		if(!this.user) {
			throw new Error('No user token defined');
			return;
		}

		for (user in this.users) {
			var params = {
				token: this.token,
				user: this.users[user].user,
				title: arg1,
				message: arg2,
				priority: this.priority,
				sound: arg3
			};
			
			req.post({
				headers: {'content-type' : 'application/x-www-form-urlencoded'},
				url:  this.api,
				form: params
			}, function(error, response, body) {
				if (response.statusCode != 200) {
					console.log('????? Error: ' + response.body);
				}					
			});
		}

	} else { //Specify user key

		var params = {
			token: this.token,
			user: arg1,
			title: arg2,
			message: arg3,
			priority: this.priority,
			sound: arg4
		};

		req.post({
			headers: {'content-type' : 'application/x-www-form-urlencoded'},
			url:  this.api,
			form: params
		}, function(error, response, body) {
			if (response.statusCode != 200) {
				console.log('????? Error: ' + response.body);
			}					
		});
	}

 }

Pushover.prototype.sendUrgent = function(arg1, arg2, arg3, arg4) {

 	if( arguments.length == 3 ){
		// (title, message)
		if(!this.user) {
			throw new Error('No user token defined');
			return;
		}
		for (user in this.users) {
			var params = {
				token: this.token,
				user: this.users[user].user,
				title: arg1,
				message: arg2,
				priority: arg3,
				sound: this.sound
			};

			req.post({
				headers: {'content-type' : 'application/x-www-form-urlencoded'},
				url:  this.api,
				form: params
			}, function(error, response, body) {
				if (response.statusCode != 200) {
					console.log('????? Error: ' + response.body);
				}					
			});
		}

	} else { //Specify user key
		var params = {
			token: this.token,
			user: arg1,
			title: arg2,
			message: arg3,
			priority: arg4,
			sound: this.sound
		};

		req.post({
			headers: {'content-type' : 'application/x-www-form-urlencoded'},
			url:  this.api,
			form: params
		}, function(error, response, body) {
			if (response.statusCode != 200) {
				console.log('????? Error: ' + response.body);
			}					
		});
	}
 }

module.exports = exports = Pushover;