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


const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
        "userId": 1,
        "id": 7,
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
        "userId": 1,
        "id": 8,
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        "userId": 1,
        "id": 9,
        "title": "nesciunt iure omnis dolorem tempora et accusantium",
        "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
        "userId": 1,
        "id": 10,
        "title": "optio molestias id quia eum",
        "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
]

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

function myNewFn() {
    return 'I am cool!'
}


console.log(myNewFn());

const MIN_TIME_AGE_MS = 2400;