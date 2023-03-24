const express = require('express')
const app = express();

app.use(express.json())

// Route imports
const project = require("./routes/ProjectRoute")

app.use('/api/v1', project)

// middleware for errors

module.exports = app;