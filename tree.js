// let array=[1,0,0,0,0,0,1];
// let array=[0,0,1,0,0,0,0,0,1];
let array=[0,0,0,0,1,0,0,0,0,0,1];
let tree =3;let count=0;
for(let i=0;i<array.length;i++){
    if(array[i]==0){
        let prevalue=(i==0)?0:array[i-1];
        // let prevalue=array[i-1];
        let nextvalue=array[i+1];
        if(prevalue==0 && nextvalue==0)
            {
                array[i]=1;
            count++;
        }
    }
}
console.log(tree==count);

const abc=()=>{//arrow function
    console.log("function");

}
abc();

const sum=(a,b)=>{
    return a+b;
}
// let value=sum(5,10);
// console.log(value);

// const sum1=(a,b)=>a+b;//if it single line we can skip return and curly braces
// let value1=sum1(5,10);
// console.log(value1);

// setTimeout(()=>{
//     console.log("I have a data");
// },5000);
// setInterval(()=>{
//     console.log("I have a data");
// },100000);//execute between interval

//20-10-2025
console.log(+true);

console.log(Math.max(1,2,10,20));
console.log(Math.min(1,2,10,20));
console.log(Math.pow(2,2));
console.log(Math.sqrt(144));
console.log(Math.round(4.9));
console.log(Math.floor(4.9));