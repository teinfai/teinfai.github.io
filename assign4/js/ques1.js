function factorial(num){
    return (num != 1) ? num * factorial(num - 1) : 1;
}

const num= prompt('Enter a number: ');
const value = factorial(num);   
// console.log(value);

document.getElementById("demo").innerHTML =  value;
