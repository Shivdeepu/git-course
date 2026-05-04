//map
/*let a = [1,4,9,16];

function callback (x)
{
    return (Math.sqrt(x));
}


let result = a.map(callback);

console.log(a);
console.log(result);*/




//filter



/*let a = [12, 32, 18, 42];

function ageCheck(x)
{
    if(x>=18)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let result = a.filter(ageCheck);

console.log(result);*/


//Reduce
/*let a = [1,10, 20, 30];

let result = a.reduce((total,x) => total+x, 0 );
console.log(result);*/


//Some & Every
/*let a = [65, 50, 85, 92];

let Grater = a.some((x) => x>85);  // atleaast some value should be satisfied
console.log(Grater);

let pass = a.every((x) => x>50); // every value should be satisfied
console.log(pass);*/



//find & findIndex
let a = [50, 11, 85, 90,100];
let check = a.find((x) => x>70);
console.log(check);

let checkIndex = a.findIndex((x) => x>70);
console.log(checkIndex);
console.log(checkIndex);
console.log(checkIndex);
console.log(checkIndex);