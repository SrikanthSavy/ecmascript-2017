



































//async keyword can be used with => or regular function()

var return234 = async function(){
      return 234;
};
var return123 = async () =>{
    return 123;
}
//console.log(return123());
//console.log(return234());
//to get the result in a 
/*return123().then(result => {
    console.log("resulr:",result);
})*/

//await return123()

var executeFunction = async() => {
    let result = await return123();
    console.log(result);
}

executeFunction();