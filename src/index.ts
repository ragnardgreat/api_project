import  express  from "express";
import mysql2 from "mysql2";
import router from "../routes/users.js";
import cartRouter from "../routes/userCarts.js";
import itemsRouter from "../routes/products.js";
import cors from "cors";
const app = express();

app.set("view engine", "ejs");
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

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

/*Items router */
app.use("/",itemsRouter)

app.listen(5000)