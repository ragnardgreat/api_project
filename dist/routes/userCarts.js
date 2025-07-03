import Express from "express";
const cartRouter = Express();
import mysql2 from "mysql2";
const connection = mysql2.createConnection({
    host: "WINDOWS-3PN1LIC",
    user: "new_user",
    password: "password",
    database: "users_api",
    port: 3306,
    keepAliveInitialDelay: 10000,
    enableKeepAlive: true,
});
cartRouter.get("/carts", (req, res) => {
    connection.query(`select * from carts`, (err, result) => {
        if (err)
            res.status(500).send("An error occured");
        res.send(result);
    });
});
cartRouter.put("/cart/:id", (req, res) => {
    const id = req.params.id;
    const cart = req.body;
    connection.query(`update carts 
                      set items = concat(${cart.itemId},",",items) 
                      where id = ${id}`, (err, result) => {
        if (err)
            res.status(500).send("An error occured");
        res.send(result);
    });
});
cartRouter.get("/carts/:id", (req, res) => {
    const id = req.params.id;
    connection.query(`select * from carts where id = ${id}`, (err, result) => {
        if (err)
            res.status(500).send("An error occured");
        res.send(result);
    });
});
export default cartRouter;
//# sourceMappingURL=userCarts.js.map