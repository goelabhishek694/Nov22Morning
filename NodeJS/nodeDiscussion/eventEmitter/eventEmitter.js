const eventEmitter = require("events");
const myEmitter = new eventEmitter();

//listeners
myEmitter.on('myevent', (...args) => {
    console.log("there is a new event ", args);
});

const secondCb = (...args) => {
    console.log("another listener for the new event ", args);
    console.log("______________");
}
myEmitter.on('myevent', secondCb);


myEmitter.emit('myevent')
myEmitter.emit('myevent', 1,2)
myEmitter.emit('myevent', [1,2,3]);