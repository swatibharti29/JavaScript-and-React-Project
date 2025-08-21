let s = "135 + 89 - 54 * 32 / 4 ";

let Num = [];
let operators = [];
let currentNum = "";

const validOperators = "+-*/%";

for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (validOperators.includes(char)) {
        if (currentNum !== "") {
            Num.push(Number(currentNum));
            currentNum = "";
        }

        operators.push(char);
    } else if (char === ' ') {
       
    } else {
        currentNum += char;
    }
}


if (currentNum !== "") {
    Num.push(Number(currentNum));
}

console.log("Numbers:", Num);
console.log("Operators:", operators);


let result = Num[0];

for (let i = 0; i < operators.length; i++) {

    let op = operators[i];
    let nextNum = Num[i + 1];

    if (op === '+') {
        result += nextNum;
    } else if (op === '-') {
        result -= nextNum;
    } else if (op === '*') {
        result *= nextNum;
    } else if (op === '/') {
        result /= nextNum;
    } else if (op === '%') {
        result %= nextNum;
    } else {

        console.error("Invalid operator:", op);
    }
}

console.log("Final Result:", result);
