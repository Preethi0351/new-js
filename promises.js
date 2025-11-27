// to handle asynchronous operations in a sychronour manner we will use A callback
// callback is a process of passing a function as a parameter to decide the order of execution of my program
// callback hell includes multiple nested callbacks which makes the code hard to read and maintain
// to overcome callback hell we will follow Promise
// promises is a javascript object it will either resole or reject

// let lifeline=new Promise((resolve,reject)=>
// {
//     let havejob=true;
//     if(havejob){
//         resolve("He/She accepted");
//     }else{
//         reject("He/she rejected");
//     }
// });
//  lifeline.then((message)=>
// {
//     console.log(message);
// }).catch((error)=>
// {
//     console.log(error);
// });


// example2
function fetchData(){
    return new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        let isTrue=false;
        if(isTrue){
        resolve("i am fetching the data");
    }else{
        reject("I am not able to fetch the data");
    }
    },4000);
});
}
    function arrangeData(){
        return new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve("i am arranging the data");

        
    },3000);
});
}
    function displayData(){
       return new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve("i am displaying the data");
        
    },2000);
});
}
fetchData()
.then((message)=> {
    console.log(message);
    return arrangeData();
})
.then ((message)=>{
    console.log(message);
    return displayData();
})
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
});