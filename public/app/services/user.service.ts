/*import 'zone.js';
import 'reflect-metadata';
*/
import { Injectable } from '@angular/core';

@Injectable()
export class userService
{
	private socket:Socket; 
	
	constructor(inputSocket:Socket)
	{
		this.socket = inputSocket;
	}
	
	find(query:any)
	{
		socket.emit('users::find', query, (err, users) =>
		{
			if(err) { return Promise.reject(err); }
			else	{ return Promise.resolve(users); }
		});
	}
}