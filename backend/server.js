const http =  require("http");
const express = require("express");
require("dotenv").config();
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res) => {
    res.send("<h1>Server is running</h1>");
});

app.use("/books",require("./routes/book.routes"));

server.listen(PORT,() => {
    console.log(`Server is running on port: ${PORT}`);
})