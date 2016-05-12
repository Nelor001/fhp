import 'zone.js';
import 'reflect-metadata';

import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'hp',
  providers: [Title],
  template:`
  <div>LOADED</div>
   `
})
class hp {
	constructor(titleService:Title)
	{
		titleService.setTitle('hp');
	}
}

export default function() {
  bootstrap(hp, [Title]);
}