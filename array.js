let color = ["black","white","blue","yellow","grey"];
console.log(color);
color.push("aqua");
console.log(color);
color.pop(); //it remove last element
console.log(color);
color.shift(); //it remove the first elent
console.log(color);
color.unshift("green"); //it add the elements in the first position
console.log(color);
console.log(color.indexOf("blue"));
console.log(color.sort());
console.log(color.sort().reverse());

let value=color.splice(1,2); //it will print the array index 1 and 2 splice is add or remove
console.log(value);
let value2=color.splice(1,2,"pink","cream"); 
console.log(value2);

let colors=["yellow"];
let key=["pink"];
let value3=colors.concat(key);
console.log(value3);

let color2=["brown","skyblue"];
console.log(color2[0]);
console.log(color[1]);
for (let i=0;i<color2.length;i++){
    console.log(color2[i]);
}

//find the largest word in the string
let string="I am attending class in Besant";
let str=string.split("  ");
let final=" ";
for(let i=0;i<str.length;i++){
    if(str[i].length>final.length){
        final=str[i];    
    }
}
console.log(final);
