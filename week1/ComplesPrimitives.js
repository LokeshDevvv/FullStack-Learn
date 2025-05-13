//Complex primitives --> Arrays and Objects
//Arrays --> lets think as it stores n number variables value in single var 
//let say we a = 1,b=2,c=3 as you can see we are using so much space 
//this can written as let a = [1,2,3]
//now we can access this value by a[0] -> this will give 1 
//so the index value will start from 0 to n-1
//code:
    const arr = [1,2,3,4,5];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] % 2 == 0){
            console.log(arr[i])
        }
    }
console.log(arr)
//Objects 
//This same as array but this have key and value 
//key something which we can access the value 
//ex : key = "Lokesh" now obj["key"] give me lokes 
//code:
//  obj = {}
    const Person  = {
        name:'Loki',
        age :18
    }
    console.log(Person)
    console.log(Person.name)
    console.log(Person["name"])
//arrray can be numbers and string even objects as well 
//ex: arr[{}]
//
