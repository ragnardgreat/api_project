import * as fs from "fs";
import  Express  from "express";
import mysql2 from "mysql2";

const app = Express()

import router from "../routes/users.js";
import cartRouter from "../routes/userCarts.js";

app.set("view engine", "ejs")

const connection = mysql2.createConnection({
    host: "WINDOWS-3PN1LIC",
    user: "new_user",
    password: "password",
    database: "users_api",
    port: 3306,
    keepAliveInitialDelay: 10000,
    enableKeepAlive: true,
})

app.get("/", (req,res)=>{
    res.send("Homepage")
});

/*User router*/
app.use("/", router)

/*User shopping cart router */
app.use("/", cartRouter)

app.listen(5000)