const http = require('http');
const users = [                 // Users info
    {user:'Kris', age:67},
    {user:'Tommy', age:32},
    {user:'Alan', age:23},
    {user:'Peg', age:24},
    {user:'Rebecca', age:20},
    {user:'Indika', age:27}, 
];
 
const requestHandler = function(req, res){

    if (req.method === 'GET' && req.url == '/users') {          // Handles Get from /users
        res.writeHead(200);
        res.write(`<html><body>${JSON.stringify(users)}</body></html>`);
        res.end();

    }else if (req.method === 'POST' && req.url == '/') {        // Handles Post
        res.writeHead(200);
        let chunks = "";        // Initialize String 

        req.on('data', (chunk) => {
            chunks += chunk;
        });

        req.on('end', () => {
            const jsonData = JSON.parse(chunks);
            const namesOfJson = jsonData.user; // Getting the name form the array of objects
            res.write(`<h1>${nameOfJson}<h1>`);
            res.end();
        });
        
    }else{
        res.end('Welecome to the page');        // Welcoming on the home page
    }

}

const server = http.createServer(requestHandler);
server.listen(8080);            // http://localhost:8080/users
