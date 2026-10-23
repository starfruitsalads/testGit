// 1) Дописать функцию function bigHello(???)
// bigHello('Danil', 'Maxim') // должно выводить в консоли фразу "Привет Danil и Maxim!"


// a - string - word - name - userName - "Danil"
function bigHello(name1,name2) {
    console.log("Привет " + name1 + " и " + name2 + "!")
}
bigHello("Danil", "Maxim");
bigHello("Onix", "Maxim");

// 1) Дописать функцию function bigHello(???)
// bigHello('Danil', 'Maxim') // должно выводить в консоли фразу "Привет Danil и Maxim!"

const isRegistrated = ["Danil", "Ivan", "Dima", "Maxim", "Denis"];
function bigHello(a, b) {

    if (isRegistrated.includes(a) && isRegistrated.includes(b)) {
        console.log("Привет " + a + " и " + b + "!")
    } else {
        console.log("юзера/ов не существует")
    }
}

bigHello("Ivan", "Katya");


let userOne = {
    name: "Ivan",
    password: "123trw1",
}
let userTwo = {
    name: "Dima",
    password: "143w1",
}
let userThree = {
    name: "Elena",
    password: "1231",
}
const registrationList = [userOne, userTwo, userThree]

registrationList[0];

function bigHello(username, password) {
    for (let i = 0; i < registrationList.length; i++) {
        const res = registrationList[i]
        console.log(res)

    }
    // if (registrationList[username] === password) {
    //     console.log("Hello " + username)
    // } else {
    //     console.log("Prohibited for " + username)
    // }
}

bigHello("Ivan", "123trw1");
bigHello("Carl", "12wewwww1");
bigHello("Danya", "12w1");

// 2) Дописать функцию, которая будет возвращать результат вычитания. function diff(???) { diff(10,3)

function diff(a, b) {
    let res = a - b;
    console.log(res);
    return res
}
console.log(diff(10, Math.random()));


function getSearchByKey(key) {
    return state.searches.find(item => item.key === key) || null;
}

function validateRows(search, rows) {
    const minRows = Number(search.min_rows_per_order || DEFAULT_MIN_ROWS);
    const maxRows = Math.min(Number(search.max_rows_per_order || DEFAULT_MAX_ROWS), Number(search.remaining || 0));
    const step = Number(search.download_step || DEFAULT_STEP);

    if (!rows || rows <= 0) {
        throw new Error('Укажи количество строк');
    }

    if (search.remaining <= 0) {
        throw new Error('Для этого поиска уже нечего загружать');
    }

    if (rows > maxRows) {
        throw new Error(`Максимум для этого поиска сейчас ${formatNum(maxRows)}`);
    }

    if (search.remaining < minRows) {
        if (rows !== search.remaining) {
            throw new Error(`Последний остаток меньше минимума нужно заказывать целиком: ${formatNum(search.remaining)}`);
        }
        return rows;
    }

    if (rows < minRows) {
        throw new Error(`Минимум ${formatNum(minRows)} строк`);
    }

    const yavliaetsaKratnim = true;
    if ((rows % step) !== 0) {
        throw new Error(`Количество должно быть кратно ${formatNum(step)}`);
    }

    return rows;
}

function getLoadInputValue(key) {
    const escaped = (window.CSS && CSS.escape) ? CSS.escape(key) : key.replace(/"/g, '\\"');
    const input = els.searchesBox.querySelector(`[data-load-input="${escaped}"]`);
    return input ? Number(input.value || 0) : 0;
}


function logoutToken() {
    els.bearerToken.value = '';
    localStorage.removeItem('rawsearch_bearer_token');
    setApiStatus('Токен очищен', 'warn');
    logBlock('AUTH LOGOUT', { message: 'Bearer token cleared' });
}

// 2) Дописать функцию, которая будет возвращать результат вычитания. function diff(???) { diff(10,3)

function diff(simbols) {
    let result;
    switch (simbols[2]) {
        case "+":
            result = simbols[0] + simbols[1]
            console.log(result)
            break
        case "-":
            result = simbols[0] - simbols[1]
            console.log(result)
            break
        case "/":
            if (simbols[1] != 0) {
                result = simbols[0] / simbols[1]
                console.log(result)
            } else {
                console.error("Нельзя делить на ноль")
            }
            break
        case "*":
            result = simbols[0] * simbols[1]
            console.log(result)
            break
    }

}

diff([4 , 6, "/"]);
