//We will cover 
//  -variables 
//  -Data types - String,numbers,booleans 
//  -if/else 
//  -Loops

//Variables 
//  In variables -> var,let,const (let and const are most used)
//  let --> it store value which can be changed later on 
//  const --> its like constant  you cant change the value later 
//  let and var are similar (will look deep later on)
//  code:
    let name = "kane";
    console.log("The name variable stores: " + name)
    name = "loki"; 
    console.log("The name variable changed: " + name) 
    let age  = 19;
    const gender = "male"    
    // this will pop error gender = "female" 
// Now moving to DataTypes : String , Numbers,Booleans
// String --> "" or '' anything inbetween this two quotes will consider as string 
// Numbers --> we have integer(whole number value like 10 20)
//         --> Float -->(Decimal numbers like 1.2,3.10)
//Booleans --> True or False 
//if and else --> we call this as control statements 
//  if(condition){
//      this block of code will run(i mean the block code under parthness)
//  }
//  else{
//      this block of code will run
//  }
//  code:
    console.log("Find even or odd")
   let n = 10;
   if(n%2 == 0){
        console.log(n + " is even")
   }
   else{
       console.log(n + " is odd")
   } 
//Now loops - for loop 
//  let say we wanna count sum given n  number 
//      let say n = 10 
//       now i should do n = 1+2+3+4+5+6+7+8+9+10
//       but what if its 1000 i cant write 1000  sum of 1000 numbers 
//code:
    let N = 10;
    let sum = 0;
    for(i = 1;i<=N;i++){
        sum = sum + i;
    }
    console.log(sum);
