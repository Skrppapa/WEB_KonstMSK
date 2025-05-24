console.log("-----Задание 1-----");

function sumDigits(number) {
    let sum = 0;
    const numStr = Math.abs(number).toString(); 
    
    for (const digit of numStr) {
      sum += parseInt(digit, 10); 
    }
    
    return sum;
  }
  
console.log(sumDigits(245678)); 
console.log(sumDigits(97561));  
console.log(sumDigits(543));   

console.log("-----Задание 2-----");

function sumChars(a, b, c) {
    return a + b + c;
  }
  
console.log(sumChars("a", "b", "c")); 
console.log(sumChars("%", "2", "o")); 
console.log(sumChars("1", "5", "p")); 

console.log("-----Задание 3-----");

function city(a, b, c) {
    return `Town ${a} has population of ${b} and area ${c} square km.`;
  }
  
console.log(city("Moscow", 12636312, 2561)); 


console.log("-----Задание 4-----");

function calculate(a, b, c) {
    if (b === "+") {return a + c}
    else if (b === "-") {return a - c}
    else if (b === "*") {return a * c}
    else if (b === "/") {return a / c}
    else { return "Неизвестный оператор"}
  }
  
console.log(calculate(6, "+", 5)); 
console.log(calculate(6, "-", 5)); 
console.log(calculate(6, "*", 5)); 
console.log(calculate(6, "/", 5)); 

console.log("-----Задание 5-----");

function toTen(a){
    return parseInt(a, 2);
}

console.log(toTen("00001001")); 
console.log(toTen("11110000")); 