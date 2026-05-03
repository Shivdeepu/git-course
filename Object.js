
let a;
a = {
    name : "Deepu",
    grade : "BE",
    age : 31,
    coding : function(){
        console.log("am a coder..");
    },
    singing : function(){
        console.log("am a singer..");
    },
    dancing : function(){
        console.log("am a dancer..");
    }
};

console.log(a.name);
//console.log(a.singing);

a.singing();

delete a.singing;