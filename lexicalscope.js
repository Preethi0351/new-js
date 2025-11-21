// //global scope
// let name="Preethi";
// function outer(){
//     console.log(name)
// }
// console.log(name);
// outer();//globally available througout the file

// let name1="Preethi";//local scope
// function outer(){
//     console.log(name1)
//     let name2="Twinkle";
//     console.log(name2);
// }
// console.log(name1);
// console.log(name2);
// outer();

//nested scope
// let name="preethi";
// function outer(){
//     console.log(name);
//     let name2="twinkle";//block scope
//     console.log(name2);
//     function inner(){
//         let name3="Antony";
//         console.log(name3);
//     }
//     inner();
// }
// outer();


let name="preethi";
function outer(){
    let name2="Twinkle";
   
    function inner(){
        let name3="Antony";
        console.log(name);
        console.log(name2);
        console.log(name3);
    }
    inner();
}
outer();