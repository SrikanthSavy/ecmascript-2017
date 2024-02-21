




let numbers = [1,81,4,14,75];
let moreNumber = new Array(81,5,54,14,75,45);
/*
numbers.count = function(){
    return this.length;
}
*/
//Array.prototype.count - can be used with many arrays
Array.prototype.count1 = function(){
       return this.length;
};
//console.log(numbers.count1());
//console.log(moreNumber.count1());


let rides = ["THis is Srikanth","My Name SHoda","My name UMA"];

let selectedRide = "THis is Srikanth";

//Using Array.prototype.includes  (returns boolean)  // replacing indexOf() which return -1 or +ve 
//console.log(rides.includes(selectedRide));  // return true
//console.log(rides.includes("Srikanth"));   //return (false)


console.log(3*3*3*3);
//using exponentiation operator (**)
console.log(3**4);


