/**
 * Реализовать функцию сравнения 2 объектов. Функция выводит true, если 2 объекта равны и false, если нет

Пример:

var obj1 = {
	firstName: 'Vasya',
	lastName: 'Pupkin'
};

var obj2 = {
	firstName: 'Vasya',
	lastName: 'Pupkin'
};

isObjectsEqual(obj1, obj2) === true; // вызов вашей функции

obj2.lastName = 'Ivanov';

isObjectsEqual(obj1, obj2) === false; // вызов вашей функции

* модернизировать функцию для сравнения объектов со вложенными объектами

Пример:

var objNest1 = {
	firstName: 'Vasya',
	lastName: 'Pupkin',
	father: {
		firstName: 'Ivan',
		lastName: 'Pupkin'
	}
};

var objNest2 = {
	firstName: 'Vasya',
	lastName: 'Pupkin',
	father: {
		firstName: 'Ivan',
		lastName: 'Pupkin'
	}
};

isObjectsEqual(obj1, obj2) === true; // вызов вашей функции

obj2.father.lastName = 'Ivanov';

isObjectsEqual(obj1, obj2) === false; // вызов вашей функции

 */

// NOTE: не работает задание под звёздочкой

var obj1 = {
	firstName: 'Vasya',
	lastName: 'Pupkin'
};

var obj2 = {
	firstName: 'Vasya',
    lastName: 'Pupkin',
};

var objNest1 = {
	firstName: 'Vasya',
	lastName: 'Pupkin',
	father: {
		firstName: 'Ivan',
		lastName: 'Pupkin'
	},
    ffkther: {
		firstName: 'Ivan',
        lastName: 'Pupkin'
    }
};

var objNest2 = {
	firstName: 'Vasya',
	lastName: 'Pupkin',
	father: {
		firstName: 'Ivan',
        lastName: 'Pupkin'
    },
    ffkther: {
		firstName: 'Ivan',
        lastName: 'Pupkin'
    }
};


console.log("Tests:");
console.log("Part one:");

console.log("====================================");
console.log("");
console.log("Expected:");
console.log("isObjectsEqual(obj1, obj2) === true");
console.log("Received:");
console.log( isObjectsEqual(obj1, obj2) === true );
console.log("====================================");
console.log("");
obj2.father = 'Ivanov';
console.log("obj2.father = 'Ivanov';");
console.log("Expected:");
console.log("isObjectsEqual(obj1, obj2) === false");
console.log("Received:");
console.log( isObjectsEqual(obj1, obj2) === true );
delete obj2.father;
console.log("====================================");
console.log("");
console.log("Part two:");
console.log("====================================");
console.log("");

console.log("Expected:");
console.log("isObjectsEqual(objNest1, objNest2) === true");
console.log("Received:");
console.log( isObjectsEqual(objNest1, objNest2) === true );
console.log("====================================");
console.log("");
objNest2.father.firstName = 'Ivanov';
console.log("objNest2.father.firstName = 'Ivanov';");
console.log("Expected:");
console.log("isObjectsEqual(objNest1, objNest2) === false");
console.log("Received:");
console.log( isObjectsEqual(objNest1, objNest2) === true );


function isObjectsEqual(obj1, obj2) {
    var propArr1 = Object.getOwnPropertyNames(obj1);
    var propArr2 = Object.getOwnPropertyNames(obj2);
    if (propArr1.length != propArr2.length) {
        return false;
    };

    for (var prop in obj1) {
        
        if ( isObject(obj1[prop]) && isObject(obj2[prop])) {
            isObjectsEqual(obj1[prop], obj2[prop]);
            
        } else if (obj1[prop] !== obj2[prop]) {
            return false;
        };
    };

    return true;
};

function isObject(object) {
    if ( (typeof object === "object" || typeof object === 'function') && (object !== null) ) {
        return true;
    };
    return false;
};
