//introduced to handle integer values thaty exceed 2^63 -1 
// 64 bit representation in traditonal number type in jS 
// big int literals are suffixed with 'n' to distinguish them from regular number literals
// bigint is stored in heap 
// bigint makes sure that precision is not lost even with big numbers 

// 2 ways to create bigint 
const largeNumber = 12345678901234567890890n ; 
const largeNumber2 = BigInt("988378723847837484758374");

//bigInt operations 

const product = largeNumber*largeNumber2;
console.log("Product", product);
