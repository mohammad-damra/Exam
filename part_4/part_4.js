/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/

console.log('PART 4');

const isABalancedString = (str) => {
	// WRITE YOUR CODE BELOW THIS LINE
	strArr = str.split('');
	let arr1 = [];
	let arr2 = [];
	if (strArr.length % 2 !== 0) return 'NO';
	for (let i = 0; i < strArr.length; i++) {
		if (i < strArr.length / 2) arr1.push(strArr[i]);
		else arr2.push(strArr[i]);
	}
	console.log('arr1', arr1);
	console.log('arr2', arr2.reverse());
	console.log('object', arr1[0] == arr2[0]);
};

/*
console.log('arr2', arr2)

Examples:

isABalancedString( '[]' )
=> YES

isABalancedString( '[{()}]' )
=> YES

isABalancedString( '[()]{}{()()}' )
=> YES

isABalancedString( '[{()}])' )
=> NO

isABalancedString( '({()}])' )
=> NO

isABalancedString( '[{)]({()(})' )
=> NO

isABalancedString( '[(){([])[}]()]' )
=> NO

isABalancedString( '[(){([])}({){}}]' )
=> NO

isABalancedString( '[(){([])})' )
=> NO

*/
