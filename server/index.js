const express = require("express"); //imports the framework
const app = express(); // creats server object
const cors = require("cors"); //CORS allows your frontend (React / browser) to call this backend.
                            // Without this, browser will block API calls.
const pool = require("./database.js"); //imp psql connection pool, so the server can talk to db.
//middle ware
app.use(cors());
app.use(express.json()); //Allows Express to read JSON data sent in request body.
app.listen(5000,() => {
    console.log("Server Running on 5000");
});

//routes//

//create todo
app.post("/todos",async(req,res) => {
    try{
        
        const {descrp} = req.body;
        const newtodo = await pool.query("INSERT INTO todo (descrp) VALUES($1) RETURNING *",[descrp]); 
        res.json(newtodo.rows[0]);

    }
    catch(err){
        console.error(err.message);
    }
});
//get all todo 
app.get("/todos",async(req,res) => {
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }
    catch(err){
        console.error(err.message);
    }
});
//get a todo
app.get("/todos/:id",async(req,res) => {
    try{
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE id = $1",[id]);
        res.json(todo.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }
});
//update a todo
app.put("/todos/:id",async(req,res) => {
    try{
        const {id} = req.params;
        const {descrp} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET descrp =$1 WHERE id = $2 ",[descrp,id]);
        res.json("todo was updated!");
    }
    catch(err){
        console.error(err.message);
    }
});
//delete a todo
app.delete("/todos/:id",async(req,res) => {
    try{
        const {id} = req.params;
        const todo = await pool.query("DELETE FROM todo WHERE id = $1",[id]);
        res.json("deleted the todo!");
    }
    catch(err){
        console.error(err.message);
    }
});