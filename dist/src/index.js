import Express from "express";
import mysql2 from "mysql2";
const app = Express();
import router from "../routes/users.js";
app.set("view engine", "ejs");
const connection = mysql2.createConnection({
    host: "WINDOWS-3PN1LIC",
    user: "new_user",
    password: "password",
    database: "users_api",
    port: 3306,
    keepAliveInitialDelay: 10000,
    enableKeepAlive: true,
});
app.get("/", (req, res) => {
    res.send("Homepage");
});
app.use("/", router);
app.listen(5000);
//# sourceMappingURL=index.js.map