
const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
const mysql = require('mysql');

const app = express();

const coreOptions = {
    origin: "http://localhost:8000"
}

app.use(cors(coreOptions))

app.use(express.json())
app.use(urlencoded({extended:true}))


// connection

const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "123456",
    DB: "testdb"
  };

  const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });  
  
  connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  

app.get('/', (req,res,next) => {
    res.send({
        message:"hello all"
    })
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server is signning on ${PORT}`)
})