/*
Задан файл с данными в формате JS объекта. Нужно написать программу, которая:
    - распечатывает дерево файла на манер утилиты tree:
    - выводит содержимое файла до заданной вложенности, уровень вложенности задаётся из prompt
    - реализует поиск по файлу и проверяет каждое поле на вхождение заданной строки
*/


var taskObject = {
    firstLevelFirstField: {
        secondLevelFirstField: 1,
        secondLevelSecondField: {
            thirdLevelFirstField: 'a2',
            thirdLevelSecondField: {
                fourthLevelFirstField: {
                    fifthLevelFirstField: 'a2',
                    fifthLevelSecondField: 5,
                    fifthLevelThirdField: 'School'
                }
            },
            thirdLevelThirdField: {},
            thirdLevelFourthField: 500
        },
        secondLevelThirdField: {},
        secondLevelFourthField: {
                thirdLevelFirstField: 'JavaScript',
                thirdLevelSecondField: 'margin auto',
                thirdLevelThirdField: '!important is evel'
        },
        secondLevelFifthField: 'Async'
    },
    firstLevelSecondField: 'easy',
    firstLevelThirdField: 123,
    firstLevelFourthField: {
        secondLevelFirstField: 'React.js',
        secondLevelSecondField: {
                thirdLevelFirstField: 42
        }
    }
};

function isEmpty(taskObject) {
    for (var attribute in taskObject) {
        return false;
    };
    return true;
};

function isObject(object) {
    if ( (typeof object === "object" || typeof object === 'function') && (object !== null) ) {
        return true;
    };
    return false;
};

var varToString = varObj => Object.keys(varObj)[0];

function getName(object) {
    if ( isObject(object) ) {
        return varToString(object);
    };
    return object;
};

/*
    level добавил для отображения вложенности;
    Проверку на объект добавил, потому что программа пыталась пройтись по атрибутам string and number;
*/

function printObjectTree(taskObject, nesting, level=0) {
    // Печать можно в отдельную функцию выделить, но тут используются фишки рекурсии.
    let output = "";
    for (var i = 0; i < level; i++) {
        output += "|    ";
    };
    output +=  "|-" + getName(taskObject);
    console.log(output);

    if (nesting == 0) {
        return;
    }

    if ( !isEmpty(taskObject) && isObject(taskObject) ) {
        level++;
        output +=  " ";
        nesting--;
        for (var attribute in taskObject) {
            printObjectTree(taskObject[attribute], nesting, level);
        };
    };
};

function isString(elem) {
    if (typeof elem === 'string' || elem instanceof String) {
        return true;
    }
    return false;
};

function findSubstring(str, substr) {
    if ( str.search(substr) >= 0) {
        console.log("String " + str + " contain substring " + substr);
    };
};

// реализует поиск по файлу и проверяет каждое поле на вхождение заданной строки
function findInObjectTree(taskObject, substr) {
    var name = getName(taskObject);
    if ( isString(name) ) {
        findSubstring(name, substr);
    };
    
    if ( !isEmpty(taskObject) && isObject(taskObject) ) {
        for (var attribute in taskObject) {
            findInObjectTree(taskObject[attribute], substr);
        };
    };
};

var menu = {
    1: function() {
        var nesting = prompt('What is the level of nesting', 10);
        printObjectTree(taskObject, nesting);
    },
    2: function() {
        var word = prompt('Input word for finding', "f");
        findInObjectTree(taskObject, word);
    }
};

function runTask() {
    var task = prompt('Choose task: \n 1. Print object tree. \n 2. Find substring in object tree.', 1);
    menu[task]();
};

runTask();
// findInObjectTree(taskObject, "first");   // doesn't work correctly