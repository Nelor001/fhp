/*import 'zone.js';
import 'reflect-metadata';
*/
import { Component } from '@angular/core';
import userService from '../services/user.service.ts';

@Component({
  selector: 'hp',
  providers: [ userService ],
  template:'<div>LOADED</div>'/*`
  <ul>
	<li *ngFor="let user of _users" >{{user.login}}</li>
  </ul>
  <div *ngIf="error">ERROR!!!!!!</div>
  `*/
})
export class hp
{
	
	private _users:any[] = [];
	private socket:Socket;
	private _userService:userService;
	private error:boolean;
	
	constructor(inputSocket:Socket,titleService:Title, userService:userService)
	{
		this.socket = inputSocket;
		this._userService = userService;
		this.error = false;
		
		titleService.setTitle('hp');
		
		this._userService.find({})
		.then( (users) => { this._users = users; },
			(err) => { this.error = true; });
		
		socket.on('users created', function(user)
		{
			users.push(user);
		});
	}
}