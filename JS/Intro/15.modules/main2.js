import { increment, getCount } from "./counter.js";

console.log(getCount()); //2
increment(); 
console.log(getCount()); //3
increment();
console.log(getCount()); //4


import { getCount as abc } from "./counter.js";
console.log(abc()); //4