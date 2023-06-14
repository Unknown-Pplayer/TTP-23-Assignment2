//forEach()
let number = [1, 2, 3, 4, 5];
function myEach(array, callBackFunction) {
    for (let i = 0; i < array.length; i++) {
        callBackFunction(array[i]);
    }
}
function printSquare(number) {
    console.log(number * number);
}
myEach(number, printSquare);
console.log("\n");

//map()
let mapped = [];
function myMap(array, callBackFunction) {
    for (let i = 0; i < array.length; i++) {
        mapped.push(callBackFunction(array[i]));
    }
}
console.log(myMap(number, printSquare));
console.log("\n");

//filter()
let filtered = [];
function myFilter(array, callbackFunction) {
    for (let i = 0; i < array.length; i++) {
        if (callbackFunction(array[i])) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}
function isEven(number) {
    return number % 2 === 0;
}
const printFiltered = myFilter(number, isEven);
console.log(printFiltered);
console.log("\n");

//some() (aka any())
function mySome(array, callBackFunction) {
    for (let i = 0; i < array.length; i++) {
        if (callBackFunction(array[i])) {
            return true;
        }
    }
    return false;
}
function hasOdd(number) {
    return number % 2 != 0;
}
console.log(mySome(number, hasOdd));
console.log("\n");

//every() 
function myEvery(array, callBackFunction) {
    if (callBackFunction(array)) {
        return true;
    } else {
        return false;
    }
}
function biggerThanThree(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 3) {
            return false;
        }
    }
    return true;
}
console.log(myEvery(number, biggerThanThree));
console.log("\n");

//reduce() 
function myReduce(array, callBackFunction) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += callBackFunction(array[i]);
    }
    return result;
}

function sum(element) {
    return element;
}
console.log(myReduce(number, sum));
console.log("\n");

//includes() 
function myIncludes(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            return true;
        }
    }
    return false;
}
console.log(myIncludes(number, 3));
console.log("\n");

//indexOf()
function myIndexOf(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            return i;
        }
    }
    return -1;
}
console.log(myIndexOf(number, 0));
console.log("\n");

//push()
function myPush(array, element) {
    array[array.length] = element;
    return array.length;
}
console.log(myPush(number, 6));
console.log("\n");

//myLastIndexOf()
function myLastIndexOf(array, element) {
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            index = i;
        }
    }
    return index;
}
console.log(myLastIndexOf(number, 5));
console.log("\n");

//object.keys()
const personHeight = {
    Andy: "160cm",
    Brian: "170cm",
    Cindy: "165cm"
}
function grabKeys(array) {
    const keys = [];
    for (let key in array) {
        if (array.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}
console.log(grabKeys(personHeight));

//object.values()
function grabValues(array) {
    const result = [];
    for (let key in array) {
        if (array.hasOwnProperty(key)) {
            result.push(array[key]);
        }
    }
    return result;
}
console.log(grabValues(personHeight));
console.log("\n");


//The sum of a range
let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function range(start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(numArr[i]);
    }
    return result;
}
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(range(1, 5));
console.log(sum(numArr));
console.log(sum(range(0, 11)));
console.log("\n");

//Reversing an Array
function reverseArray(numArr) {
    let result = [];
    for (let i = numArr.length - 1; i >= 0; i--) {
        result.push(numArr[i]);
    }
    return result;
}
function reverseArrayInPlace(numArr) {
    //takes n^2 times
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < numArr.length; j++) {
            if (numArr[i] > numArr[j]) {
                var temp = numArr[i];
                numArr[i] = numArr[j];
                numArr[j] = temp;
            }
        }
    }
    return numArr;
}
console.log(reverseArray(numArr));
console.log(reverseArrayInPlace(numArr));
console.log("\n");

//A list
function arrayToList(array) {
    let list = [];
    for (i = 0; i < array.length; i++) {
        list = { value: array[i], rest: list };
    }
    return list;
}
function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}
function prepend(value, rest) {
    return { value: value, rest: rest };
}

function nth(list, position) {
    if (position === 0)
        return list.value;
    else
        return nth(list.rest, position - 1);
}
console.log(arrayToList(numArr));
console.log(listToArray(arrayToList(numArr)));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log("\n");

//Deep Comparison
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a === "object" && a !== null &&
    typeof b === "object" && b !== null) {
        const key1 = Object.keys(a);
        const key2 = Object.keys(b);
        if (key1.length === key2.length) {
            for (let key of key1) {
                if (!deepEqual(a[key], b[key])) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
console.log("\n");

//moveZeros()
function moveZeros(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[i-count] = nums[i];
        } else  {
            count++;
        }
    }
    for (let i = 0; i < count; i++) {
        nums[nums.length-count] = 0;
        count--;
    }
    return nums;
}
console.log(moveZeros(numArr));