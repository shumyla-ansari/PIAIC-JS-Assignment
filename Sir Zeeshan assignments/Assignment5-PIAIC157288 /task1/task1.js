function factorial(n){
    if(n <= 1){
        //Recursion will stop
        return 1;
    } else {
        return n * factorial(n-1);
    }
};

console.log(factorial(8));
console.log(factorial(5));
console.log(factorial(9));
