//f1,f2,f3,f4 
// serial task ,async function -> nesting is done -> callback hell 

const fs = require("fs");

// let f1Content = fs.readFile("./f1.txt",(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data+"");
// })

// let f2Content = fs.readFile("./f2.txt",(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data+"");
// })

// let f3Content = fs.readFile("./f3.txt",(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data+"");
// })

// let f4Content = fs.readFile("./f4.txt",(err,data)=>{
//     if(err) console.log(err);
//     else console.log(data+"");
// })



console.log("Before");

fs.readFile("./f1.txt",(err,data) => {
    if(err) console.log(err);
    else{
        console.log(data+"");
        fs.readFile("./f2.txt",(err,data) => {
            if(err) console.log(err);
            else{
                console.log(data+"");
                fs.readFile("./f3.txt",(err,data) => {
                    if(err) console.log(err);
                    else{
                        console.log(data+"");
                        fs.readFile("./f4.txt",(err,data) => {
                            if(err) console.log(err);
                            else{
                                console.log(data+"");
                                console.log("i have read all 4 files");
                                
                            }
                            
                        })
                        
                    }
                    
                })
                
            }
            
        })
        
    }
    
})





console.log("After");
