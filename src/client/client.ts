import Websocket from 'ws';

const ws = new Websocket("ws://127.0.0.1:8080/ws/one");

ws.on('open', () => {
  console.log("[Client] succ connect to server")
})

ws.on('message', (msg) => {
  console.log("msg:", msg.toString())
})
