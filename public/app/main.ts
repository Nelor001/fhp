import 'zone.js';
import 'reflect-metadata';

import hp from './components/user.component.ts';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Title } from '@angular/platform-browser';

//import io from 'socket.io-client';
//const Socket = io(/*'http://localhost:3030'*/);
export default function(Socket) {
  bootstrap(hp, [Title, Socket]);
}