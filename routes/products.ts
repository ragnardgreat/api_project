import express from "express";
const itemsRouter = express();
import mysql2 from "mysql2";


const connection = mysql2.createConnection({
    host: "WINDOWS-3PN1LIC",
    user: "new_user",
    password: "password",
    database: "users_api",
    port: 3306,
    keepAliveInitialDelay: 10000,
    enableKeepAlive: true,
})

itemsRouter.get("/items", (req,res)=>{
    connection.query(`select * from items`, (err,result)=> {
    if (err) res.status(500).send("An error occured");
    res.send(result)
  })
})


itemsRouter.put("/items/new", (req,res)=>{
    const item = req.body;
    connection.query(`insert into items values(null,"${item.name}","${item.price}","${item.description}","${item.imgLink}")`, (err,result)=> {
    if (err) res.status(500).send("An error occured");
    res.status(200);
    console.log("New item added!")
  })
})


itemsRouter.get("/items/:id", (req,res)=>{
    const id = req.params.id;
    connection.query(`select * from items where item_id = ${id}`, (err,result)=> {
    if (err) res.status(500).send("An error occured");
    res.send(result)
  })
})



export default itemsRouter