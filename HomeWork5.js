// 1. Given an array. Write a recursive function that removes the first element and returns the given array.

function removeFirstelement(arr, i = 0) {
	//debugger;
	if(i === arr.length - 1) {
		arr.length--;
		return arr;
	} else if(!arr.length) {
		return arr;
	} else {
		arr[i] = arr[i + 1];
		return removeFirstelement(arr, ++i);
	}
}

removeFirstelement([1,2,3,4,5]);

// 2.Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).


//let arr =[[1,5],3,[3,4,[1,2]],10,[11,12,13]];

let arr =[1,[3,4,[1,2]],10];

function flatArray (arr, res =[]){
	let temp = [];
	if (arr.length != 0){
		if (Array.isArray(arr[0])){
			temp= res.concat(arr[0])
			arr =arr.slice(1);
			arr =temp.concat(arr)
			return flatArray(arr,res =[])
			}else{
				res.push(arr[0]);

				return flatArray(arr.slice(1),res)
			}
	}else{
		return res;
	}
}
// 3. Given a number. Write a function that calculates its sum of the digits and
//if that sum has more than 1 digit find the sum of
//digits of that number. Repeat that process if needed and return
//the result.

function calcSumDig(number) {
	if(number < 10) return number;
	return calcSumDig( +Array.from(String(number)).reduce( (s, d) => +s + +d) );

}
calcSumDig(14);

//4. Given an array and a number N.  Write a recursive
//function that rotates an array N places to the left. (Hint: to
//add element to the beginning use arr.unshift())
function rotateArray(arr, n) {
		if(n != 0) {
			if(n > 0) {
				arr.push(arr.shift());
				return rotateArray(arr, --n);
			} else {
				arr.unshift(arr.pop());
				return rotateArray(arr, ++n);
			}
		}
		return arr;
	}

rotateArray(['a','b','c','d','e','f','g','h'],3);
//5. Given an object. Invert it (keys become values and values
//become keys). If there is more than key for that given value
//create an array.

function invertObj(obj) {
	for(let k in obj) {
		let key = k, val = obj[k];
		if( obj.hasOwnProperty(obj[k]) ) {
			delete obj[k];
			if( Array.isArray(obj[val]) ) {
					obj[val] = obj[val].concat(key);
				} else {
					obj[val] = Array.from(obj[val]).concat(key);
				}
		} else {
			delete obj[k];
			obj[val] = key;
		}
	}
	return obj;
}
invertObj({ a: '1', b: '2' });
//6. Given the list of the following readers:
//Output the books sorted by the percent in descending order which readStatus is true.
function bookFilter(arr) {
	let read = arr.filter(function(book) {
		return book.readStatus;
	})

	return read.sort(function(a, b) {
		return a.percent - b.percent;
	})
}
bookFilter([{ book: "Catcher in the Rye", readStatus: true, percent: 40},
{ book: "Animal Farm", readStatus: true, percent: 20},
{ book: "Solaris", readStatus: false, percent: 90 },
{ book: "The Fall", readStatus: true, percent: 50 },
{ book: "White Nights", readStatus: false, percent: 60 } ,
{ book: "After Dark", readStatus: true, percent: 70 }]);
