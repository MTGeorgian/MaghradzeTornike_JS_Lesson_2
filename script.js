// 1. შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
//        2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function positiveSum(...args) {
    let sum = 0;

    for (let t of args) {
        if (t > 0) {
            sum += t;
        }
    }
    return sum;
}

let result = positiveSum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
 console.log(result);
 
// 2. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
//    10, 50, 6, 7, 8, 11, 6, 3, 9

function sumAllNumbers(...allnumbers) {
    let numbersum = 0;

    for (let n of allnumbers) {
        numbersum += n;
    }
    console.log(numbersum);
}

sumAllNumbers (10, 50, 6, 7, 8, 11, 6, 3, 9)


// 3. შექმენით ფუნქცია სახელად printname რომელსაც პარამეტრად გადაეცემა ობიექტი. ობიექტს ექნება შემდეგი ფორმა:


function printname() {
    let person = {
        firstname: 'giorgi',
        lastname: 'saakadze',
        age: 32,
        isloggedin: 'true'
        }

        if (person.isloggedin === 'true') {
            return 'giorgi saakadze';
        }else{
            return 'false';
        }
    
}

let thing = printname();
console.log(thing);

// ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze')
//  თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

// 4. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და 
// ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

let array = [-1, -20, -300, -400, 0, 1, 20, 300, 400];

array.forEach( item => {
    if (item > 300) {
        console.log(item);
    }
})

// ||

function maxNumber() {
    let numberContainer = [-1, -20, -300, -400, 0, 1, 20, 300, 400];
    for (const i of numberContainer) {
        if (i > 300) {
            return i;   
        }   
    } 
}
 let sum = maxNumber();
 console.log(sum);
