import { routes } from "@/api/routes";
import Koa from "koa";

export const start = () => {
  const app = new Koa();

  app.use(routes())

  app.listen(8777, () => { console.log(`Serve on 0.0.0.0:8777`) })
}
