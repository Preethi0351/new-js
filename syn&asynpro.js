//synchronous programming
console.log("value one");
console.log("value two");
console.log("value three");


//asynchronous programming
setTimeout(()=>{
    console.log("value one");
},3000);
setTimeout(()=>{
    console.log("value two");
},2000);
setTimeout(()=>{
    console.log("value three");
},1000);
