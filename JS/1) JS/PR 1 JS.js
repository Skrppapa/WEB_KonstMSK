// Задание 1
console.log("-----Задание 1-----")
function grade(num){
    if(num <= 2){
        console.log("Младенец");
    }
    else if (3 <= num & num <= 13){
        console.log("Ребенок")
    }
    else if (14 <= num & num <= 19){
        console.log("Подросток")
    }
    else if (20 <= num & num <= 65){
        console.log("Взрослый")
    }
    else{
        console.log("Пожилой")
    }
}

grade(1)
grade(20)
grade(100)


// Задание 2
console.log("-----Задание 2-----")
function roundd(number, i) {
    const First = Math.min(i, 15);
    const Second = Number(number.toFixed(First));
    const result = parseFloat(Second.toString());
    
    return result;
}

console.log(roundd(3.141592653589793, 2)); 
console.log(roundd(10.5,3, 1)); 
console.log(roundd(626433832795,2, 0)); 


// Задание 3
console.log("-----Задание 3-----")
function checkDel(number) {
    
    if (number % 6 === 0) return "Число делится на 6";
    if (number % 10 === 0) return "Число делится на 10";
    if (number % 3 === 0) return "Число делится на 3";
    if (number % 2 === 0) return "Число делится на 2";
    if (number % 7 === 0) return "Число делится на 7";
    return "Не делится";
}

console.log(checkDel(30));
console.log(checkDel(15));
console.log(checkDel(12));
console.log(checkDel(1643));

// Задание 4 
console.log("-----Задание 4-----")
function calculateTotalPrice(groupType, day, numberOfPeople) {
    const prices = {
        'Студенты': { 'Пятница': 8.45, 'Суббота': 9.80, 'Воскресенье': 10.46 },
        'Корпоративная': { 'Пятница': 10.90, 'Суббота': 15.60, 'Воскресенье': 16 },
        'Обычная': { 'Пятница': 15, 'Суббота': 20, 'Воскресенье': 22.50 }
    };

    // Цена за одного человека
    const pricePerPerson = prices[groupType][day];
    let totalPrice = pricePerPerson * numberOfPeople;

    // Скилки
    if (groupType === 'Студенты' && numberOfPeople >= 30) {
        totalPrice *= 0.85; 
    } else if (groupType === 'Корпоративная' && numberOfPeople >= 100) {
        totalPrice -= 10 * pricePerPerson; 
    } else if (groupType === 'Обычная' && numberOfPeople >= 10 && numberOfPeople <= 20) {
        totalPrice *= 0.95; 
    }

    return `Total Price: ${totalPrice.toFixed(2)}`;
}

console.log(calculateTotalPrice('Студенты', 'Пятница', 40)); 
console.log(calculateTotalPrice('Корпоративная', 'Суббота', 100)); 
console.log(calculateTotalPrice('Обычная', 'Воскресенье', 15)); 
console.log(calculateTotalPrice('Обычная', 'Пятница', 5));


// Задание 5
console.log("-----Задание 5-----")
function year(a) {
    if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
        return `yes`;
    } else {
        return `no`;
    }
}

console.log(year(1984)); 
console.log(year(2003)); 
console.log(year(4)); 
 