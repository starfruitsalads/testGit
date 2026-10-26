console.log('lesson 1')

// Data types

// *** Primitives ***

// Number
const age = 20;

// String
const name = 'Denis';

// Boolean (true - false, yes - no, 1 - 0)
const isAlive = true;
const isNotAdmin = false;

// *** Special *** (служебные типы)

// NaN
const myAge = NaN;

// Undefined (значение не определено, но может быть будет определено в будущем)
let score;
console.log(score)

// Null (определеный результат - отсутствие значения)
score = null;


// *** Комплексные типы данных ***

// Array (Массив, набор, группа, список, множество)
// Важны порядок и длина. не важны имена ключей
const cities = ['Barcelona', "Moscow", 'Rostov'];

console.log(cities)
// Object (Объект - важны имена ключей. Не важны порядок и количество  ключей)

const someStrangeExmaple = ['green', 140, 1.5, false];
console.log(someStrangeExmaple)


const someStrange1 = {
    color: 'green',
    horsePower: 140,
    engine: 1.5,
    isBroken: false
};

// Function

// 1. Объявлять
// 2. Вызывать (1. Написать имя функции. 2. поставить скобки)
// 3. Передаём как аргумент

function sum(a, b) {
    console.log('work sum!');
    const res = a + b;
}

// Параметры (абстракция)
// Названия параметров
// Максимальная абстракция -------------->>-- Максимальная конкретика
// a ---> number --->   age | money | valume   --> 10
function sum2(num1, num2) {
    console.log('work sum!');
    const res = num1 + num2;
}

// Аргументы (конкретное значение)
sum2(10, 5);
sum2(12, 1);
let a = 15;
let bb = 7;
sum2(a, bb);

/*
 1. Что возвращает функция?
 Answer: то, что стоит справа ключевого слова return
 2. Куда функция возвращает результат?
 Answer: туда где функция была вызвана, в место вызова
*  */




function deletePosts(number) {
    let deletedPosts = 0;
    for (let i = 0; i < number; i++) {
        deletedPosts = deletedPosts + 1;
    }

    return deletedPosts;
}


console.log("Quantity of deleted posts: " + deletePosts(20))

function someAction(type, number) {
    let name = type.slice(0,3);

    if(type == "delete") {
        return number
    }
}

const resFromAction = someAction('delete', 20);

console.log(resFromAction)
