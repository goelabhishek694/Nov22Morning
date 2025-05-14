const http = require("http");

const server = http.createServer((req, res) => {
    //handle the incoming requests
    //req object contains information about the request made by client
    console.log(req.method);
    console.log(req.url);
    if(req.url == '/logout'){
        if(req.method == "GET"){
            res.setHeader("Content-Type", 'text/plain');
            res.write("Bye World ! I am Logging out ");
        }else if(req.method == "POST"){
            // get the data and process it and save it to db 
        }
    }
    else if(req.url == '/{login'){
        res.setHeader("Content-Type", 'text/html');
        // res.write("Hello World ! I am Logging in ");
        res.write(`<html><head><title>Node.js HTTP Server</title></head><body>`)
        res.write('<h1>Hello, World! How are you ? </h1>');
        res.write('</body></html>');

        //2nd option - have a html file ready , read it using fs module and then send it in repsonse .

    }else if(req.url == '/signup'){
        res.setHeader("Content-Type", 'application/json');
        const jsonData = {
            message: "I am Signing up",
            date:  new Date()
        }
        const jsonResponse = JSON.stringify(jsonData);

        res.write(jsonResponse);
    }
    else{
        res.setHeader("Content-Type", 'text/html');
        // res.write("Hello World ! I am Logging in ");
        res.statusCode = 404
        res.write(`<html><head><title>Node.js HTTP Server</title></head><body>`)
        res.write('<h1>Page Not Found 404 </h1>');
        res.write('</body></html>');
        
    }
    // //res object is sued to send response back to the client
    // //set response header
    // res.setHeader("Content-Type", 'text/plain');

    // //write response content
    // res.write("Hello World ! How are you ");

    // // end the response
    res.end();
    
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log("server is listening on port", port);
});

