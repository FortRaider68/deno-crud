import { Application } from "https://deno.land/x/oak/mod.ts";
import routes from "./routes.ts";

const app = new Application();

app.use(routes.routes());
app.use(routes.allowedMethods());



await app.listen("localhost:3333");