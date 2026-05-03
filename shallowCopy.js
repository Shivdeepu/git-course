let ar1 = [[20,30],[40,50]];
console.log(ar1);

//let ar2 = [...ar1];
let ar2 = ar1.slice();
console.log(ar2);

ar1[1].push(90);
console.log(ar1);
console.log(ar2);

