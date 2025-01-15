//named exports
//import it with {} and put the same name as defined in export file 
import {greet, PI} from './utils.js';

greet("Pragnesh");

console.log("value of PI is ",PI);

//default exports
//import it with any name , no need of {} 

import abc from './utils.js'
console.log(abc(10,20));