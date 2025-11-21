// write code to print 

// for(let i=1;i<=5;i++){
//     let text="*";
//     console.log(text.repeat(i));
// }

// for(let i=1;i<=5;i++){
//     let text="";
//     for(let j=1;j<=i;j++){
//         text=text+"*";
//     }
//     console.log(text);
// }

// write a program to find the possibilities of climbing stairs
function possibility(step){
    if(step<=2){
    return step
    }
    let array=[];
    array[1]=1;
    array[2]=2;
    for(let i=3;i<=step;i++){
        array[i]=array[i-1]+array[i-2];
    }
    return array[step];
}
let value=possibility(5);
console.log(value);






    
