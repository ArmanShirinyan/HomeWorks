//1.	Given an array of integers, find the pair of adjacent elements
//that has the largest product and return that product.
function  elementsProduct(arr) {
    let res = -Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] * arr[i + 1] >= res) {
            res = arr[i] * arr[i + 1];
        }
    }
    return res;
}
let arr = [1,3,5,6,8,13,45,62];
console.log(elementsProduct(arr));
//2.	Given an array of integers.All numbers are unique.
//Find the count of missing numbers between minimum and maximum
//elements to make integers sequence.
function  missingNumberCount(array) {
    array.sort((a, b) => a - b);
    let number = array[array.length - 1] + 1 - array[0] - array.length;
    return number;
}
let arr = [1,4,6,9,13];
console.log(missingNumberCount(arr))
//3.	Convert a long phrase to its acronym
function acronym(str) {
    let arr = str.split(' ');
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i][0].toUpperCase();
    }
    return result;
}
let string= "Prisoner of War";
console.log(acronym(string));
//4.	Given a string of digits, output all the contiguous substrings of length n in that string.
function  contiguousSubstrings(string, number) {
    let result = [];
    for (let i = 0; i <= string.length - number; i++) {
        result.push(string.slice(i, number + i));
    }
    return result;
  }
 contiguousSubstrings('495215', 3)
//5.	Create a function that builds a tree like object given an array
// with object which contains parent and id properties.
function buildingObjectTree(array, obj = {}) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].parent === null) {
            obj[array[i].id] = {};
            array.slice(i, 1);
            break;
        }
    }
    for (let i = 0; i < array.length; i++) {
        tree(array[i], obj);
    }
    return obj;
}

function tree(array, result) {
    for (let key in result) {
        if (array.parent == key) {
            result[key][array.id] = {};
            return result;
        } else {
            tree(array, result[key])
        }
    }
}

let treeNodes = [
    { parent: null, id: 0},
    { parent: 0, id: 2},
    { parent: 0, id: 1},
    { parent: 1, id: 4},
    { parent: 1, id: 3},
    { parent: 2, id: 5},
    { parent: 4, id: 6}
]

console.log(buildingObjectTree(treeNodes));
