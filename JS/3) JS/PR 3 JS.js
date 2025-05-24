// Задание 1
console.log("-----Задание 1-----")

let numbers = [5, 15, 23, 56, 35]
// [-5, 11, 3, 0, 2]

var sum1 = numbers.reduce(function(a, b) { return a + b; }, 0);
console.log(numbers)
console.log(sum1);  

for (let i = 0; i < numbers.length; i++) 
{
    if (numbers[i] % 2 === 0)
    {
        numbers[i] = numbers[i] + i
    }
    else
    {
        numbers[i] = numbers[i] - i
    }
}

var sum2 = numbers.reduce(function(a, b) { return a + b; }, 0);
console.log(numbers)
console.log(sum2);  



// Задание 2
console.log("-----Задание 2-----")

var mas1 = ['Hey', 'hello', 2, 4, 'Peter', 'e']
var mas2 = ['Petar', 10, 'hey', 4, 'hello', '2']

var mas3 = ['R', 'u', 's', 's', 'i', 'a']
var mas4 = ['R', 'u', 't']

for (let i = 0; i < mas1.length; i++) 
{
    if (mas2.includes(mas1[i]))
    {
        console.log(mas1[i])
    }
}

for (let i = 0; i < mas3.length; i++) 
{
    if (mas4.includes(mas3[i]))
    {
        console.log(mas3[i])
    }
}


// Задание 3
console.log("-----Задание 3-----")

function rotateMass(arr, digit) {

    if (arr.length === 0 || digit === 0) {
        return arr;
    }

    digit = digit % arr.length;

    return arr.slice(digit).concat(arr.slice(0, digit));
}

const Array = [51, 47, 32, 61, 21]
const digit = 2

const Array2 = [32, 21, 61, 1]
const digit2 = 4;

const Array3 = [2, 4, 15, 31]
const digit3 = 5

console.log(rotateMass(Array, digit))
console.log(rotateMass(Array2, digit2))
console.log(rotateMass(Array3, digit3))

// Задание 4
console.log("-----Задание 4-----")


function isMagic(matrix) {
    
    if (matrix.length === 0) return false

    const rows = matrix.length
    const cols = matrix[0].length

    if (rows !== cols) return false

    const summ_str = matrix[0].reduce((sum, num) => sum + num, 0)

    for (let i = 1; i < rows; i++) {
        const rowSumma = matrix[i].reduce((sum, num) => sum + num, 0)
        if (rowSumma !== summ_str) return false
    }

    for (let j = 0; j < cols; j++) {
        let colSum = 0
        for (let i = 0; i < rows; i++) {
            colSum += matrix[i][j]
        }
        if (colSum !== summ_str) return false
    }

    return true
}

let f = [[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]

let ff = [[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]

let fff = [[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]

console.log(isMagic(f))
console.log(isMagic(ff))
console.log(isMagic(fff))