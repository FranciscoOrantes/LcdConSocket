'use strict'

//const Lcd = require('lcd')
//const lcd = new Lcd({rs: 45, e:44, data: [66, 67, 68, 69], cols: 8, rows: 1});

//var five= require("johnny-five");
//var board = new five.Board();
var LCD = require('lcdi2c');
var lcd = new LCD( 1, 0X27, 16, 2 );

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
 onMessage (message){
 this.socket.broadcastToAll('message', message)
 console.log("Esto dijo el server lolololo")
this.show(message)
}
show(message){
lcd.clear();
lcd.print( message );
//lcd.print( 'Espero y funcione ' );
}

}

module.exports = ChatController
