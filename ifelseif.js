// write a js function that accept string as a input type:'tier 1';,'tier2'

function salary(input){
    if(input=="tier1"){
        console.log("i will get a packge of 10LPA");
    }
    else if(input=="tier2"){
        console.log("I will get the package of 7LPA");
    }
    else if(input=="tier3"){
        console.log("i will get the package of 5LPA");
    }
    else{
        console.log("no job")
    }
}
salary("tier1");