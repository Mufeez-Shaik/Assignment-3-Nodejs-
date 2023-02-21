let http = require("http");
let fs = require("fs");
let YourName = process.argv[2];
fs.writeFileSync("index.html","<h1> Hello World </h1> <p>This is "+YourName+"... </p>")



let server = http.createServer((req,res) =>{
     res.statusCode = 200;
    res.write(fs.readFileSync("index.html"))
    res.end()
})

server.listen(5000,()=>{
    console.log("we are live now")
})
