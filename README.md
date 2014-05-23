node-pushover-notify
====================

Author: Christopher Jazinski

Version: 0.0.4

Description: module for node. Implements pushover api

Currently only supports send(), sendUrgent(), sendSound();
All of these methods will allow you to specify a user-token as the first parameter

Usage:

var Pushover = require('node-pushover-notify');

var push = new Pushover({
	token: 'pushover-application-token',
	user: 'pushover-user-token' //optional
});

push.send(|user-token|, title, message);

push.sendToDevice([user-token], title, message, device);

push.sendUrgent(|user-token|, title, message, priority);

push.sendSound(|user-token|, title, message, sound);