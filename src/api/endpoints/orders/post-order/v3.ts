import { Middleware } from "@koa/router";

export const postOrderV3Middleware: Middleware = (ctx, _) => {
  console.log("postOrderV3Middleware");
  ctx.body = {
    errorCode: 0,
    data: {
      message: "message",
    }
  };
}
