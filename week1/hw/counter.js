// Create a counter in Javascript (counts down from 30 to 0)
let a = 30
function  counter(){
    console.log(a)
    a--;
    if(a <=0){
        clearInterval(timer);
    }
}
const  timer = setInterval(counter,1000)
// Can do this with a for loop wil take 1 sec to print 1 and following numbers ?(later to be dicussed)

