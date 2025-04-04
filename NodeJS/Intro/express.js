const express = require("express");
//create an express application
const app = express();
//middleware to parse json requests to bodies
app.use(express.json());
//serves statix files such as html, css, js , image etc
// often used to serve client side assets
//express.static(root, [options]):
//root parameter specifie the firectory from where to serve static files 
//options allows us to configure caching , file handling 
app.use(express.static('public'))
//parses in coming url-encoded data fro forms 
app.use(express.urlencoded)
//sample user data (in-memory storage)
let users = [
    {id:1, name: 'User1'},
    {id:2, name: 'User2'}
]

//custom middleware function
const loggerMiddleware = (req, res ,next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}
//this middleware is going to be called before processing happens for each endpoint
app.use(loggerMiddleware);

//specific middleware
function santizeData(req, res, next){
    console.log("i am sanitizing data");
    next();
}
//define a route 
app.get('/users', (req,res) => {
    res.send(users)
})
app.post('/users', santizeData, (req,res) => {
    const newUser = req.body;
    console.log(newUser);
    const lastUserObj = users[users.length-1];
    const id = ++lastUserObj.id;
    console.log(id);
    users.push({id,...newUser});
    res.status(201).json({ message: 'User created', user: newUser });
})
app.delete("/users/:id", (req, res) => {
      //accessing path params 
      const userId = parseInt(req.params.id);
      console.log(userId);
      //find the user index by id 
      const userIndex = users.findIndex(user => user.id == userId);
      if(userIndex == -1){
        res.status(400).json({ message: 'User no found' });
      }
      console.log(userIndex);
      users.splice(userIndex,1);
      res.json({ message: 'User deleted' });
      
      
})


//start the server
const port = 3000;
app.listen(port, () => {
    console.log("server is listening on port", port);
});