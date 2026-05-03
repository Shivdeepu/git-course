/*let arr = ["Deepu", "Megha","Soma", 77.1, true, 99, "Ramu"];
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr);*/

let arr = new Array(5);
arr[0]=10;
arr[1]=20;
arr[2]=30;
arr[3]=40;
arr[4]=50;

let i;
//for (i=0; i<5; i++)
for(i=5; i>=0; i--)
{
    console.log(arr[i]);
}
arr.push(50);
console.log(arr);

arr.unshift(50);
console.log(arr);

let x = arr.pop();
console.log(x);
console.log(arr);

let y = arr.shift();
console.log(y);
console.log(arr);

let remove = arr.splice(2,1);
console.log(remove);
console.log(arr);

let removee = arr.splice(2,1,60,70);
console.log(removee);
console.log(arr);

console.log(arr.indexOf(60));
console.log(arr.lastIndexOf(60));
console.log(arr.includes(60));