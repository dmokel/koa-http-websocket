import Router from '@koa/router';
import { createServer } from 'http';
import Koa from 'koa';
import { parse } from 'url';
import { WebSocketServer } from 'ws';

const app = new Koa();
const router = new Router();
// http路由可以和ws路由重复
router.get('/ws/one', (ctx, _) => {
  console.log("[Koa] in /ws/one")
})
app.use(router.routes())

const srv = createServer(app.callback());

const wssrvOne = new WebSocketServer({ noServer: true });
const wssrvTwo = new WebSocketServer({ noServer: true });

wssrvOne.on('connection', (ws, req) => {
  console.log("[wssrvOne] client connect")
});
wssrvTwo.on('connection', (ws, req) => {
  console.log("[wssrvTwo] client connect")
})

srv.on('upgrade', (req, socket, head) => {
  const { pathname } = parse(req.url!);
  if (pathname === '/ws/one') {
    wssrvOne.handleUpgrade(req, socket, head, (ws) => {
      wssrvOne.emit('connection', ws, req);
    })
  } else if (pathname === "/ws/two") {
    wssrvTwo.handleUpgrade(req, socket, head, (ws) => {
      wssrvTwo.emit('connection', ws, req);
    })
  } else {
    socket.destroy();
  }
})

srv.listen(8080, '127.0.0.1', () => {
  console.log("listen at 127.0.0.1:8080");
})
