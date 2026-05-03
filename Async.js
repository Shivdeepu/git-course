

function fun1()
{
    console.log("Fun1 execution start..");
    console.log("Fun1 completed start..");

}
function fun2()
{
    console.log("Fun2 execution start..");
    let start = Date.now();
    let delay = 5000;
    let end = start+delay;
    while(Date.now() <= end)
    {

    }
    console.log("Fun2 completed start..");    
}
function fun3()
{
    console.log("Fun3 execution start..");
    console.log("Fun3 completed start..");    
}

fun1();
//fun2();
setTimeout(fun2,2000);

fun3();