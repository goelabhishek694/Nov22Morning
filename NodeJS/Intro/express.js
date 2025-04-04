const express = require("express");

//create an express application
const app = express();

//define a route 
app.get('/logout', (req, res) => {
    res.send("Hello, Express")
})
app.post('/logout', (req, res) => {
    //
})

app.get('/login', (req, res) => {

})

app.get('/signup', (req, res) => {

})

//start the server
const port = 3000;
app.listen(port, () => {
    console.log("server is listening on port", port);
});