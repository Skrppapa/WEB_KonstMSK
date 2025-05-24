// Задание 1
console.log("-----Задание №1-----");
console.log();

function findMin(a, b, c) {
    return Math.min(a, b, c);
}

console.log(findMin(5, 3, 8));
console.log(findMin(600, 342, 123));
console.log(findMin(25, 21, 4));

// Задание 2
console.log("-----Задание №2-----");
console.log();

function operation(a, b, c) {
    return (a + b) - c;
}

console.log(operation(23, 6, 10)); 
console.log(operation(1, 17, 30)); 
console.log(operation(42, 58, 100)); 


// Задание 3
console.log("-----Задание №3-----");
console.log();

function matrix(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(n + " ");
        }
        console.log();
    }
}


matrix(3);
matrix(7);


// Задание 4
console.log("-----Задание №4-----");
console.log();

function bar(num) {
    const first = num / 10;
    const empty = 10 - first;
    if (num !== 100){
        console.log(num + '% ' + '[' + '%'.repeat(first) + '.'.repeat(empty) + '] ');
        console.log("Still loading...");
    }
    else {
        console.log("100% Complete!");
        console.log('[' + '%'.repeat(first) + '.'.repeat(empty) + '] ');
    }
    
}

bar(30);
console.log();
bar(70);
console.log();
bar(100);

