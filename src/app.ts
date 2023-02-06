import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), 'env', `${process.env.SERVER_ENV ?? ''}.env`) })

import { start } from "@/api/index";

process.on("unhandledRejection", (err) => {
  console.log(`unhandledRejection, err: ${err}`);

  // For now, just skip any unhandled errors
  // process.exit(1);
});

export const setup = async () => {
  console.log("setup");
}

setup().then(() => start())
