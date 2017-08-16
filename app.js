const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/todolist";


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());