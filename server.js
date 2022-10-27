const http = require('http');

//create a server with the HTTP variable
const server = http.createServer(function(req, res){
    //Headers
    // res.writeHead(200, { 'Content-Type': 'text/plain'});
    // res.writeHead(200, { 'Content-Type': 'application/json'});
    res.writeHead(200, { 'Content-Type': 'text/html'});

    //Send back some information
    // res.end("Welcome to Zuri Internship");
    // res.end(`
    // {
    //     "name": "Ebuka",
    //     "College": "Unilag",
    //     "Occupation": "Software Developer"
    // }
    // `);
    res.end(`
    <html>
    <body style="background: black; text-align: center; color: white;">
    <h1>Welcome to this class </h1>
    <p>How are you all doing</p>
    </body>
    </html>
    `)
});

//create a port
server.listen(4000, '127.0.0.1');

console.log("Yes, you have created a server!!");
