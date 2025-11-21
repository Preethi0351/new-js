function outer(){
    let name="Ramesh";
    console.log(name);
    function inner(){
        let name2="suresh";
        console.log(name2);
        console.log("---------");

    }
    inner();
}
outer();
outer();