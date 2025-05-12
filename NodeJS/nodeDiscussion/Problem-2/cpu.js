//fibonacci computation
const express = require("express");
const cors = require("cors");
const app = express();

function calculateFibonacci(number) {
    if(number<=1) return number;
    return calculateFibonacci(number-1) + calculateFibonacci(number-2);
}

app.use(cors());

app.get("/fib", (req, res) => {
    const {number, requestNumber} = req.query;
    if(!number || isNaN(number) || number<=0){
        return res.status(400).json({
            success: false,
            message: "please provide a valid positive number"
        })
    }

    const answer = calculateFibonacci(number);
    return res.status(200).json({
        success: true,
        message: "fibonacci calculated",
        data: answer
    })
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");  
})