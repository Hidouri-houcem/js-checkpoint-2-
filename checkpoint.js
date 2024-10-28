/*Reverse a String*/
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("houssem"));

/*Count Characters*/
function countCharacters(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

console.log(countCharacters("houssem"));


/*Capitalize Words*/

function capitalizeWords(word) {
    let result = '';
    let capitalize = true;
    for (let char of word) {
        if (capitalize && char !== ' ') {
            result += char.toUpperCase();
            capitalize = false;
        } else {
            result += char;
        }
        if (char === ' ') {
            capitalize = true;
        }
    }
    return result;
}

console.log(capitalizeWords("houssem"))

/*find Maximum and Minimum*/
function findMaximum(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

function findMinimum(arr) {
    let min = arr[0];
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}


let numbers = [3, 5, -5, -8, 4, -2, 7];

let maxNumber = findMaximum(numbers);
let minNumber = findMinimum(numbers);

console.log(`Le maximum dans le tableau est : ${maxNumber}`);
console.log(`Le minimum dans le tableau est : ${minNumber}`);


/* Sum of Array */
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num; 
    }
    return sum;
}

let nmbers = [1, 2, 3, 4, 5]; 
let totalSum = sumArray(nmbers); 

console.log(`La somme est : ${totalSum}`); 


/*Filter Array*/
function filterArray(arr, condition) {
    let result = [];
    for (let item of arr) {
        if (condition(item)) {
            result.push(item);
        }
    }
    return result;
}

const nombres = [1, 2, 3, 4, 5, 6];
const filteredNumbers = filterArray(nombres, num => num > 3);

console.log(`Les nombres supérieurs à 3 sont : ${filteredNumbers}`);




function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; 
    }
    return result; 
}

const number = 5;
const factorialResult = factorial(number); 

console.log(`Le facteur de ${number} est : ${factorialResult}`); 


/*Prime Number Check*/
function Prime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

const nummber = 7; 
const result = Prime(nummber); 

console.log(`${nummber} est un nombre premier : ${result}`); 



/*fibonacci*/
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}
