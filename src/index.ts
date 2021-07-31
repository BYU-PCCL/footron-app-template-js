import {Messaging} from "../../footron-messaging-js/src"
// (base: https://www.typescriptlang.org/play/)

var messaging = new Messaging();

function messageHandler(message: any){
  console.log(message);
}

async function mainLoop(){
  console.log("hello!");
  messaging.mount();
  messaging.addMessageListener(messageHandler);
  console.log("hello");
  setInterval(() => messaging.sendMessage(new Date().getTime()), 500);
}

window.addEventListener('load', () => mainLoop());