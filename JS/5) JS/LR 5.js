// Задание 1
console.log("-----Задание 1-----");

function createList(lst) {
    const employeeList = [];
    
    for (const i of lst) {
        const personalNum = i.length;
        employeeList.push({
            name: i,
            personalNum: personalNum
        });
    }
    
    for (const employee of employeeList) {
        console.log(`Name: ${employee.name} - Personal Number: ${employee.personalNum}`);
    }
    
    return employeeList; 
}


const listt = ['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']
createList(listt);

// Задание 2
console.log("-----Задание 2-----");

function parseCities(city) {
    return city.map(cityStr => {
        const [town, lat, lon] = cityStr.split('|').map(item => item.trim()); // trim пробелы
        
        const num1 = parseFloat(lat).toFixed(2);
        const num2 = parseFloat(lon).toFixed(2);
        
        return { town, latitude: num1, longitude: num2 };
    });
}

const input = ['Moscow | 55.7522 | 37.6156', 'Beijing | 39.913818 | 116.363625'];

const result = parseCities(input);
result.forEach(city => console.log(city));

// Задание 3
console.log("-----Задание 3-----");

function updateProducts(have, delivery) {
    const inventory = {};

    for (let i = 0; i < have.length; i += 2) {
        const product = have[i];
        const quantity = parseInt(have[i + 1]);
        inventory[product] = (inventory[product] || 0) + quantity;
    }

    for (let i = 0; i < delivery.length; i += 2) {
        const product = delivery[i];
        const quantity = parseInt(delivery[i + 1]);
        inventory[product] = (inventory[product] || 0) + quantity;
    }

    for (const [product, quantity] of Object.entries(inventory)) {
        console.log(`${product} -> ${quantity}`);
    }

    return inventory; 
}

const currentStock = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ];
const delivery = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'];

updateProducts(currentStock, delivery);

// Задание 4
console.log("-----Задание 4-----");

function movies(commands) {
    const movies = [];

    for (const i of commands) {
        if (i.startsWith('addMovie ')) {
            const movieName = i.substring('addMovie '.length);
            movies.push({ name: movieName });

        } else if (i.includes(' directedBy ')) {
            const [movieName, director] = i.split(' directedBy ');
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }

        } else if (i.includes(' onDate ')) {
            const [movieName, date] = i.split(' onDate ');
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    // Фильтрация
    const completeMovies = movies.filter(movie => 
        movie.name && movie.director && movie.date
    );
    
    completeMovies.forEach(movie => {
        console.log(JSON.stringify(movie));
    });
}

const commands = [ 
    'addMovie Fast and Furious', 
    'addMovie Godfather', 
    'Inception directedBy Christopher Nolan', 
    'Godfather directedBy Francis Ford Coppola', 
    'Godfather onDate 29.07.2018', 
    'Fast and Furious onDate 30.07.2018', 
    'Batman onDate 01.08.2018', 
    'Fast and Furious directedBy Rob Cohen' 
    ]

movies(commands);



