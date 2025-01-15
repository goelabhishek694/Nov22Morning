import { increment, getCount } from "./counter.js";

console.log(getCount()); //0
increment(); 
console.log(getCount()); //1
increment();
console.log(getCount()); //2


import { getCount as abc } from "./counter.js";
console.log(abc());