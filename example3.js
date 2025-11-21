function outer(){
    let count=0;//2
    function inner(){
        count++;//4
        console.log("I have counter",count);//5
        console.log("---------");//6

    }
    inner();//3
}
outer();//1
outer();

