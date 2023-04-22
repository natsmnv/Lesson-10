// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. 
// Все це із замиканнями, наприклад:

// sum(3) = 3
// sum(5) = 8
// sum(20) = 28


function calc(start) {
    let value = start;

    return function(step) {
        value += step;
        console.log(value);
    }
}

let sum = calc(0);

sum(3);
sum(5);
sum(20);