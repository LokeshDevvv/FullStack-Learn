//Calculate the time it takes between a setTimeout call and the inner function actually running
//SO lets understand the proble here
//i need to calculate the time taken ton call the inner function in the setTimeout 
//So console as function that calculate the time for when the line runs 
function foo(){
    console.time("Time");
    console.timeEnd("Time"); 
}


setTimeout(foo,1000)
