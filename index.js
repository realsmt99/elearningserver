require("dotenv").config();
//server packages
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// file packages
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
const xss = require("xss-clean");
const cors = require("cors");
const CookieParser = require("cookie-parser");
const { connectDB } = require("./initdb");

const authRoute = require("./src/routes/AuthRoute");


app.use(cors());
app.use(xss());
app.use(express.json());
app.use("/", authRoute);

const PORT = 3000;
connectDB();

server.listen(PORT, "0.0.0.0", () =>
    console.log(`Server connecting to port:${PORT}.`)
);

