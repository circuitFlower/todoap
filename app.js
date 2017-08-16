const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/todolist";
const port = 3000;
const c = console.log;


// app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.get("/",function(req,res){
	res.sendFile(__dirname + '/views/index.html');
})



// api below:
app.get("/tasks",function(req,res){
	//get route for all tasks
	MongoClient.connect(url,(err,db)=>{

		db.close();
	})
})

app.post("/tasks/new",function(req,res){
	//post route to create a new task
})

app.put("/tasks/update/:id",function(req,res){
	//update route to update task with id of req.params.id
})

app.delete("/tasks/delete:id",function(req,res){
	//delete route to delete task with id of req.params.id
})


app.listen(port,function(err){
	err?c("err",err):c("listening on port",port);
})