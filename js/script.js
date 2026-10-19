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
const someStrange2 = {
    strokeWidth: 1.5,
    color: 'green',
    radiusMM: 140,
    isFilled: false,
    freinds: ['Ola', 'Petr']
};
const student = {
    age: 24,
    country: "Spain",
    name: "Dmitry",
    isAlive: true,
    someHz: someStrange2,
    myCities: cities
}

const cities2 = {
   city1: 'Barcelona',
   city2: "Moscow",
   city3: 'Rostov',
   city100: 'Rostov100',
};

console.log(cities2.city100)
const products = {
   1: 'Apple',
   2: 'Lemon',
   3: 'Mellon',
};

console.log(products)


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



/*
* Как научиться писать самостоятельно код на JS ("как решать задачи?"):
1) Самое простое - повторить выученное упражнение(задачу, задание) самостоятельно, желательно не подглядывая. Если подсматриваете, то повторить еще раз, чтобы без подсказок
2) Чуть сложнее - взять готовое задание из пункта 1 и придумать (да, самостоятельно придумать) усложнение. Сделать дополнительные условия/ограничения, сделать дополнительный функционал и т.д. Всё что угодно, что сделает ваш скрипт более мощным и функциональным
3) Самое сложное - придумать полностью своё задание и полностью его сделать
*
* */


// ДЗ - 1:
// 1) Дописать функцию function bigHello(???)
// ???
// }

// bigHello('Danil', 'Maxim') // должно выводить в консоли фразу "Привет Danil и Maxim!"





// 2) Дописать функцию, которая будет возвращать результат вычитания. function diff(???) { diff(10,3)
// function diff(???) {
// ???
// }
// diff(10,3)

function diff(a, b) {
    console.log('diff start');
    return a - b;
    console.log('not showed')
    // return null;
}

// Цель: вывести в консоль 
// 1. Результат диффа + 10 
// 2. этот же результат диффа * 10



// Цель: вывести в консоль
// 1. Результат диффа
// 2. этот же результат диффа

//
let res = diff(10, Math.random());
console.log(res)

console.log(res + 10);
console.log(res * 10);

// 736
// 736 + 10 = 746
// 736 * 10 = 7360







// Самостоятельное обучение - 1:
// 1) Прочитать про Return:
//     https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/return

