let a = document.querySelector("h1");
let p =document.querySelector("p");

console.log(a);
//please remove the node from the tree
a.remove();
//i can still access it 
console.log(a);

a = null ; //automatically garbage collected
console.log(a);