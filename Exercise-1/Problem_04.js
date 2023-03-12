// Write a function that takes two numbers as arguments and returns the larger number.

function largeNumber(x, y){
    if(x > y){
        return x;
    }
    return y;
}

value = largeNumber(45, 80);
console.log("The Large Number is: ", value);