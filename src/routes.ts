import { Router } from "https://deno.land/x/oak/mod.ts";
import {getUsers,getUser,addUser,updateUser,removeUser} from "./Controller/User.ts";

const routes = new Router();

routes.get("/",(ctx)=>{
    ctx.response.body = "Hello Pedro!"
});

routes.get("/users",getUsers);

routes.get("/user/:id",getUser);

routes.post("/user",addUser);

routes.put("/user/:id",updateUser);

routes.delete("/user/:id",removeUser);


export default routes;



