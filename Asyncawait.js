
function prm()
{
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("Task completed");
            //resolve();
            reject();

        },3000);

    });
}

/*async function run()
{
    await prm();
    console.log("promisos successfull..");
}

run();*/

//async function run()
//{
    try
    {
        await prm()
        console.log("promisos fullfilled");

    }
    catch(cerror)
    {
        console.log("promisos unfullfilled");

    }

//}

//run();