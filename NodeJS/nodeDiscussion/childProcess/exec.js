const {exec, execFile} = require("child_process");
const { stdout, stderr } = require("process");

// list files in current directory in long format with huma readable file sizes
// err -> if the command fails for any reason 
//stdout: o/p from the ls -lh command
//stderr: error o/p from command 
// exec('ls -lh', (error, stdout, stderr) => {
//     if(error){
//         console.error(`exec error: ${error}`);
//         return;
//     }
//     console.log(`stdout : ${stdout}`);
//     console.error(`stderr: ${stderr}`);
    
// })


const scriptPath = "./script.sh";

const args = ['arg1', 'arg2'];

execFile(scriptPath, args, (error, stdout, stderr) => {
    if(error){
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout : ${stdout}`);
    console.error(`stderr: ${stderr}`);
});

// before running the execFile function , give yoiur script the permission to execute using chmod +x script.sh