import * as ordersEndpoints from "@/api/endpoints/orders";
import Router from '@koa/router';

export const routes = () => {
  const router = new Router();

  router.get("/", (ctx) => { ctx.body = `HttpServer ${new Date()}` });
  router.post("/order/v3", ordersEndpoints.postOrderV3Middleware);

  return router.routes();
}
