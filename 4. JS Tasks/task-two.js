/**
 * 
 * Задан массив объектов типа 

{
	name: 'Vasya',
	class: 6,
	mark: 3
}

Необходимо вывести в консоль:
Среднюю оценку всех учащихся
Средние оценки учащихся, сгруппированных по классу
Вывести TOP 5 лучших учащихся, отсортированных по полю name
* обратите внимание на метод reduce
 */


var student1 = {
	name: 'Vasya',
	class: 6,
	mark: 3
};
var student2 = {
	name: 'Lena',
	class: 6,
	mark: 2
};
var student3 = {
	name: 'Gasfasf',
	class: 5,
	mark: 4
};
var student4 = {
	name: 'AGFFfa',
	class: 5,
	mark: 4
};
var student5 = {
	name: 'jklnkl',
	class: 7,
	mark: 5
};
var student6 = {
	name: 'iovko',
	class: 7,
	mark: 3
};

var arr = [student1, student2, student3, student4, student5, student6];

var forAverage = {
	summ: 0,
	count: 0,
	average: function() {
		return this.summ / this.count
	}
	
};

var forAverageByClass = {
	class: null,
	forAverage
};

var arrSize = arr.length;

// вывести среднюю оценку всех учащихся
function averageMark(arr, forAverage) {
	arr.forEach(function(item) {
		forAverage.summ += item.mark;
		forAverage.count++;
	});
	return  forAverage.average();
};

// Средние оценки учащихся, сгруппированных по классу
function averageMarkByClass(arr) {
	var classes = [];

	// сгруппировал по классам
	arr.forEach(function(item) {
		var cls = classes[item.class];

		if (cls) {
			cls.push(item);
			return;
		};
		classes[item.class] = [item];
	});

	classes.forEach(function(item) {
		var average = Object.create(forAverage);

		averageMark(item, average);

		console.log("Average in class " + item[0].class + " = " + average.average());
	});
};

console.log("============================");
console.log("Average mark by all classes:");
console.log("");
var counter = Object.create(forAverage);
var average = averageMark(arr, counter);
console.log("Average mark: ", average);
console.log("============================");
console.log("Average mark by class:");
console.log("");
averageMarkByClass(arr);

