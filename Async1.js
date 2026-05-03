
function fun()
{
    console.log("fetching intervals..");
}

let intervalID = setInterval(fun,2000);

setTimeout(() => clearInterval(intervalID),10000);
