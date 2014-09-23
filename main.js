var girl = {
	name: "Luisa",
	age: 25
};

var javascript = ["javascript", "is", "awesome"];
var question = ["what", "happened", "to", "my", "function"];

var getName = function(person) {
	return person.name;
};

var totalLetters = function(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		total = total + array[i].length;
	}
	return total;
};

var keyValue = function (key, value) {
	var obj = {};

	obj[key] = value;
	return obj;
};

var negativeIndex = function(array, num) {
	var index = array.length + num;
	return array[index];
};

var removeM = function(word) {
	var array = word.split("");
	for (var i = 0; i < array.length; i++) {
		if (array[i].toLowerCase() === "m") {
			array.splice(i,1);
		}
	}
	return array.join("");
};

var printObject = function(obj) {
	for (var key in obj) {
		console.log(key + " is " + obj[key]);
	}
};

var vowels = function(word) {
	var array = [];
	for (var i=0; i< word.length; i++) {
		if ((word[i] === "a") || (word[i] === "e") || (word[i] === "i") || (word[i] === "o") || (word[i] === "u")) {
			array.push(word[i]);
		}
	}
	return array;
}

var twins = function(array) {
	if (array % 2 === 0) {
		return false;
	}
	else {
		for (i=0; i < array.length; i += 2) {
			if (array[i] != array[i+1]) {
				return false;
			}
		}
		return true;
	}
}

var or = function(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i]) {
			return true;
		}
	}
	return false;
};


var unique = function(array) {
	for (var i = 0; i < array.length; i++) {
		for (var p = i + 1; p < array.length; p++) {
			if (array[i] === array[p]) {
				array.splice(p,1);
			}
		}
	}
	return array;
}



console.log(getName(girl));
console.log(totalLetters(javascript));
console.log(totalLetters(question));
console.log(keyValue("city", "Denver"));
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));
console.log(removeM('family'));
console.log(removeM('memory'));
printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });
console.log(vowels('alabama'));
console.log(vowels('What lets in youth?'));
console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'z']));
console.log(twins(['a', 'a', 'b']));
console.log(twins(['a', 'a', 'b', undefined]));
console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));
console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique((['todd', 'avery', 'maria', 'avery'])));

/*$(document).on('ready', function() {
  
});*/