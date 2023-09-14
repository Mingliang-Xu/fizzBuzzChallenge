// Write your solution below this line:

for(let num = 1; num <= 50; num ++){
    if (num%3===0&&num%5===0){
        console.log("fizzBuzz");
    }else if(num%5 === 0){
        console.log("buzz");
    }else if(num%3===0){
        console.log("fizz")
    }else{
        console.log(num)
    }
}