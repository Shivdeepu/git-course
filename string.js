let a = "my | name | is | deepu | deepu";

//split
let res = a.split("|");

console.log(res);


//trim
let res1 = res[0].trim();
console.log(res1);

let res2 = res[2].trim();
console.log(res2);

//Case Conversion
let upper = res1.toUpperCase();
console.log(upper);

let lower = upper.toLowerCase();
console.log(lower);

//includes
let include = a.includes("deepu");
console.log(include);

//indexOf
console.log(a.indexOf("deepu"));

//lastIndexOf
console.log(a.lastIndexOf("deepu"));

//replace
a = a.replace("deepu","shivu");
console.log(a);

a = a.replaceAll("deepu","shivu");
console.log(a);

//slice
let bio = "I am learning JS and automation deepu@gmail.com";
console.log(bio.slice(0, bio.indexOf("JS")).trim());

//length
console.log(bio.length);


//endsWith
let validEmail = bio.includes("@") && bio.endsWith(".com");
console.log(validEmail);