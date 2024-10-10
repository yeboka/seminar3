console.log("Hello world!");

let accounts = [];

// let person = {
//     accountNumber number
//     name String
//     balance number
// }

function createAccount (accountNumber, name, amount) {
    for(let i = 0; i < accounts.length; i++) {
        if (accounts[i].accountNumber === accountNumber) {
            alert(`Пользователь с айди ${accountNumber} уже существоует`);
            return;
                console.log(`Пользоатель ${name} успешно добвлен`, account.balance);

            alert(`Пользователь с айди ${accountNumber} уже существоует`);
            return;
                console.log(`Пользоатель ${name} успешно добвлен`, account.balance);

        }
    }

    alert(`Пользователь с айди ${accountNumber} уже существоует`);
        return;

    let account = {
        accountNumber,
        name,
        balance: amount,
    }
    alert(`Пользователь с айди ${accountNumber} уже существоует`);

    accounts.push(account);
    console.log(`Пользоатель ${name} успешно добвлен`, account.balance);
    // 1. Проверить есть ли такой accountNumber уже в массиве
    // 2. Если он есть то вывдом alert("")
    // 3. Создаем польщователя добавляем в массиве
    // 4. Выводим что все успешно
}

function deposit (accountNumber, amount) {
    for (account of accounts) {
        if (account.accountNumber == accountNumber) {
            // account.balance = account.balance + amount;
            account.balance += amount;
            console.log("Успешно пополнили")
            return;
        }
    }

    alert(`Пользователь с айди ${accountNumber} не найден`);
    // 1.  Проверить существует ли такой аккаунт
    // 2.  Если нет то вывести что его нет
    // 3.  Иначе добавить деньги и вывести что операция прошла успешно
}


function transfer (fromAccountNumber, toAccountNumber, amount) {
    let from, to;  // undefined
    for (account of accounts) {
        if (account.accountNumber == fromAccountNumber) {
            from = account
            console.log("FROM", from)
        } else if (account.accountNumber == toAccountNumber) {
            to = account
        }
    }

    if (!from || !to) { //from === undefined || to === undefined
        alert("Один из айдишек не найден")
        return;
    }

    if (from.balance < amount) {
        alert("Недостатчно средств")
        return;
    }

    for (account of accounts) {
        if (account.accountNumber == fromAccountNumber) {
            account.balance -= amount
        } else if (account.accountNumber == toAccountNumber) {
            account.balance += amount
        }
    }

    console.log("Перевод прошел успешно",accounts)
    // 1. Существуют ли наши счета
    // 2. Если не то алерт
    // 3. хватает ли денег у фром акаунт намбер
    // 4. перводим деньги
}

createAccount(1, "Yerbolat", 500);
console.log('sdfgdfsgdf')
createAccount(2, "Adilbek", 1000);
// deposit(1, 500);
transfer(2, 1, 250);
console.log(accounts);
