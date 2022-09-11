

const express = require("express");
const config = require("config");
const API_Router = require("./Router");
const cors = require("./middleware")

const server = express();
const port = config.get('SERVER_PORT');

server.use(cors);
server.use("/api/", API_Router);
  
server.get("/", async(req, res) => {
    try{
        res.send("done")
    } catch(error) {
        console.log(error)
        res.send({massage : "Server error"})
    }
});

const start = async() => {
    try{
        server.listen(port, ()=>{
            console.log("Server started on port", port)
        })
    } catch(error){
        console.log(error)
    }
}

start();