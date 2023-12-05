function selectUniqueRandomValuesFromArray(array, count) {
    if (count > array.length) {
        throw new Error('Count is greater than the array length.');
    }

    let randomValues = [];
    const shuffledArray = array.slice(); // Create a copy of the original array

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * shuffledArray.length);
        const selectedValue = shuffledArray[randomIndex];
        randomValues.push(selectedValue);

        // Remove the selected value from the copy of the array
        shuffledArray.splice(randomIndex, 1);
    }

    return randomValues;
}

let originalArray = ['ds', 'ks', 'am', 'kd', 'rs'];
console.log(originalArray);

// Select 5 unique random values from the originalArray
let randomValues1 = selectUniqueRandomValuesFromArray(originalArray, 5);
console.log(randomValues1);


//-----------first row--------------------
let outputElement = document.getElementById("co1");
let message = randomValues1[0];
outputElement.textContent = message;
let outputElement1 = document.getElementById("co2");
let message1 = randomValues1[1];
outputElement1.textContent = message1;
let outputElement2 = document.getElementById("co3");
let message2 = randomValues1[2];
outputElement2.textContent = message2;
let outputElement3 = document.getElementById("co4");
let message3 = randomValues1[3];
outputElement3.textContent = message3;
let outputElement4 = document.getElementById("co5");
let message4 = randomValues1[4];
outputElement4.textContent = message4;
//--------------second row---------------
let randomValues2 = selectUniqueRandomValuesFromArray(originalArray, 5);
console.log(randomValues2);

outputElement = document.getElementById("co6");
message = randomValues2[0];
outputElement.textContent = message;
outputElement1 = document.getElementById("co7");
message1 = randomValues2[1];
outputElement1.textContent = message1;
outputElement2 = document.getElementById("co8");
message2 = randomValues2[2];
outputElement2.textContent = message2;
outputElement3 = document.getElementById("co9");
message3 = randomValues2[3];
outputElement3.textContent = message3;
outputElement4 = document.getElementById("co10");
message4 = randomValues2[4];
outputElement4.textContent = message4;

//---------------third row---------

let randomValues3 = selectUniqueRandomValuesFromArray(originalArray, 5);
console.log(randomValues3);

outputElement = document.getElementById("co11");
message = randomValues3[0];
outputElement.textContent = message;
outputElement1 = document.getElementById("co12");
message1 = randomValues3[1];
outputElement1.textContent = message1;
outputElement2 = document.getElementById("co13");
message2 = randomValues3[2];
outputElement2.textContent = message2;
outputElement3 = document.getElementById("co14");
message3 = randomValues3[3];
outputElement3.textContent = message3;
outputElement4 = document.getElementById("co15");
message4 = randomValues3[4];
outputElement4.textContent = message4;

//---------fourth row----------

let randomValues4 = selectUniqueRandomValuesFromArray(originalArray, 5);
console.log(randomValues4);

outputElement = document.getElementById("co16");
message = randomValues4[0];
outputElement.textContent = message;
outputElement1 = document.getElementById("co17");
message1 = randomValues4[1];
outputElement1.textContent = message1;
outputElement2 = document.getElementById("co18");
message2 = randomValues4[2];
outputElement2.textContent = message2;
outputElement3 = document.getElementById("co19");
message3 = randomValues4[3];
outputElement3.textContent = message3;
outputElement4 = document.getElementById("co20");
message4 = randomValues4[4];
outputElement4.textContent = message4;

//----------------fivth row-----------

let randomValues5 = selectUniqueRandomValuesFromArray(originalArray, 5);
console.log(randomValues5);

outputElement = document.getElementById("co21");
message = randomValues5[0];
outputElement.textContent = message;
outputElement1 = document.getElementById("co22");
message1 = randomValues5[1];
outputElement1.textContent = message1;
outputElement2 = document.getElementById("co23");
message2 = randomValues5[2];
outputElement2.textContent = message2;
outputElement3 = document.getElementById("co24");
message3 = randomValues5[3];
outputElement3.textContent = message3;
outputElement4 = document.getElementById("co25");
message4 = randomValues5[4];
outputElement4.textContent = message4;

//--------sixth row---------

let randomValues6 = selectUniqueRandomValuesFromArray(originalArray, 5);
console.log(randomValues6);

outputElement = document.getElementById("co26");
message = randomValues6[0];
outputElement.textContent = message;
outputElement1 = document.getElementById("co27");
message1 = randomValues6[1];
outputElement1.textContent = message1;
outputElement2 = document.getElementById("co28");
message2 = randomValues6[2];
outputElement2.textContent = message2;
outputElement3 = document.getElementById("co29");
message3 = randomValues6[3];
outputElement3.textContent = message3;
outputElement4 = document.getElementById("co30");
message4 = randomValues6[4];
outputElement4.textContent = message
//-------------------table2---------------
let originalArray2 = ['ps', 'as', 'am', 'ed', 'rs'];
function findDifferingValuesAtIndex(arrays, index) {
    var differingValues = [];

    for (var i = 1; i < arrays.length; i++) {
        if (arrays[0][index] !== arrays[i][index]) {
            differingValues.push(arrays[i][index]);

        }
        else
            differingValues.push(arrays[i][index] = undefined);


    }


    return differingValues;
}

var arraysToCompare = [randomValues1, originalArray2];
let differingValuesIndex = [];
console.log(differingValuesIndex);
// Example 1: Find differing values at index 0
differingValuesIndex[0] = findDifferingValuesAtIndex(arraysToCompare, 0);
console.log("Differing values at index 0: " + differingValuesIndex[0]);

// Example 2: Find differing values at index 1
differingValuesIndex[1] = findDifferingValuesAtIndex(arraysToCompare, 1);
console.log("Differing values at index 1: " + differingValuesIndex[1]);
differingValuesIndex[2] = findDifferingValuesAtIndex(arraysToCompare, 2);
console.log("Differing values at index 2: " + differingValuesIndex[2]);
differingValuesIndex[3] = findDifferingValuesAtIndex(arraysToCompare, 3);
console.log("Differing values at index 3: " + differingValuesIndex[3]);
differingValuesIndex[4] = findDifferingValuesAtIndex(arraysToCompare, 4);
console.log("Differing values at index 4: " + differingValuesIndex[4]);



//-----------first row--------------------
//let randomValuest1 = selectUniqueRandomValuesFromArray(differingValuesIndex[0], 1);
//console.log(randomValuest1);
function valcheck(array, originalArray) {

    array.forEach((i) => {
        // console.log(i);
        // console.log(originalArray);
        let a = originalArray.indexOf(i);
        // console.log(a);
        originalArray.splice(a, 1);
        // console.log(originalArray);
    })
    return originalArray;
}

let array = [randomValues1[0]];
let originalArray1 = originalArray;
let tabvalues = valcheck(array, originalArray1);
console.log(tabvalues);
function getRandomValueFromArray(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }
    
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
let randomValue = [];
randomValue[0] = getRandomValueFromArray(tabvalues);
array =[ randomValue[0]];
 originalArray = valcheck(array, originalArray);
console.log(randomValue);
outputElement = document.getElementById("c01");
message = randomValue[0];
outputElement.textContent = message;
console.log(originalArray);
//randomValuest1 = selectUniqueRandomValuesFromArray(differingValuesIndex[1], 1);
//console.log(randomValuest1);
array = [randomValues1[0]];
tabvalues = valcheck(array, originalArray);
randomValue[1] = getRandomValueFromArray(tabvalues);

outputElement1 = document.getElementById("c02");
message1 = randomValue[1];
console.log(randomValue[1]);
outputElement1.textContent = message1;
console.log(originalArray);
  array = [randomValue[1]];
tabvalues = valcheck(array11, originalArray);
console.log(originalArray);
//randomValuest1 = selectUniqueRandomValuesFromArray(differingValuesIndex[2], 1);
//console.log(randomValuest1);
array = [randomValues1[1]];
// tabvalues = valcheck(array, originalArray);
console.log(tabvalues);
randomValue[2] = getRandomValueFromArray(tabvalues);
console.log(randomValue[2]);
// array = [randomValue[2]];
// originalArray = valcheck(array, originalArray);
console.log(originalArray);
outputElement2 = document.getElementById("c03");
message2 = randomValue[2];
outputElement2.textContent = message2;
//randomValuest1 = selectUniqueRandomValuesFromArray(differingValuesIndex[3], 1);
//console.log(randomValuest1);
array = [randomValues1[2]];
tabvalues = valcheck(array, originalArray);
randomValue[3] = getRandomValueFromArray(tabvalues);
console.log(randomValue[3]);
outputElement3 = document.getElementById("c04");
message3 = randomValue[3];
outputElement3.textContent = message3;
randomValuest1 = selectUniqueRandomValuesFromArray(differingValuesIndex[4], 1);
console.log(randomValuest1);
outputElement4 = document.getElementById("c05");
message4 = randomValuest1[0];
outputElement4.textContent = message4;
// //--------------second row---------------
arraysToCompare = [randomValues2, originalArray2];
differingValuesIndex[0] = findDifferingValuesAtIndex(arraysToCompare, 0);
console.log("Differing values at index 0: " + differingValuesIndex[0]);

// Example 2: Find differing values at index 1
differingValuesIndex[1] = findDifferingValuesAtIndex(arraysToCompare, 1);
console.log("Differing values at index 1: " + differingValuesIndex[1]);
differingValuesIndex[2] = findDifferingValuesAtIndex(arraysToCompare, 2);
console.log("Differing values at index 2: " + differingValuesIndex[2]);
differingValuesIndex[3] = findDifferingValuesAtIndex(arraysToCompare, 3);
console.log("Differing values at index 3: " + differingValuesIndex[3]);
differingValuesIndex[4] = findDifferingValuesAtIndex(arraysToCompare, 4);
console.log("Differing values at index 4: " + differingValuesIndex[4]);
let randomValuest2 = selectUniqueRandomValuesFromArray(differingValuesIndex[0], 1);
console.log(randomValuest2);
outputElement = document.getElementById("c06");
message = randomValuest2[0];
outputElement.textContent = message;
randomValuest2 = selectUniqueRandomValuesFromArray(differingValuesIndex[1], 1);
console.log(randomValuest2);
outputElement1 = document.getElementById("c07");
message1 = randomValuest2[0];
outputElement1.textContent = message1;
randomValuest2 = selectUniqueRandomValuesFromArray(differingValuesIndex[2], 1);
console.log(randomValuest2);
outputElement2 = document.getElementById("c08");
message2 = randomValuest2[0];
outputElement2.textContent = message2;
randomValuest2 = selectUniqueRandomValuesFromArray(differingValuesIndex[3], 1);
console.log(randomValuest2);
outputElement3 = document.getElementById("c09");
message3 = randomValuest2[0];
outputElement3.textContent = message3;
randomValuest2 = selectUniqueRandomValuesFromArray(differingValuesIndex[4], 1);
console.log(randomValuest2);
outputElement4 = document.getElementById("c10");
message4 = randomValuest2[0];
// outputElement4.textContent = message4;



// randomValues = selectUniqueRandomValuesFromArray(originalArray, 5);
// console.log(randomValues);

// outputElement = document.getElementById("c06");
// message = randomValues[0];
// outputElement.textContent = message;
// outputElement1 = document.getElementById("c07");
// message1 = randomValues[1];
// outputElement1.textContent = message1;
// outputElement2 = document.getElementById("c08");
// message2 = randomValues[2];
// outputElement2.textContent = message2;
// outputElement3 = document.getElementById("c09");
// message3 = randomValues[3];
// outputElement3.textContent = message3;
// outputElement4 = document.getElementById("c010");
// message4 = randomValues[4]
// outputElement4.textContent = message4;

// //---------------third row---------

// randomValues = selectUniqueRandomValuesFromArray(originalArray, 5);
// console.log(randomValues);

// outputElement = document.getElementById("c011");
// message = randomValues[0];
// outputElement.textContent = message;
// outputElement1 = document.getElementById("c012");
// message1 = randomValues[1];
// outputElement1.textContent = message1;
// outputElement2 = document.getElementById("c013");
// message2 = randomValues[2];
// outputElement2.textContent = message2;
// outputElement3 = document.getElementById("c014");
// message3 = randomValues[3];
// outputElement3.textContent = message3;
// outputElement4 = document.getElementById("c015");
// message4 = randomValues[4];
// outputElement4.textContent = message4;

// //---------fourth row----------

// randomValues = selectUniqueRandomValuesFromArray(originalArray, 5);
// console.log(randomValues);

// outputElement = document.getElementById("c016");
// message = randomValues[0];
// outputElement.textContent = message;
// outputElement1 = document.getElementById("c017");
// message1 = randomValues[1];
// outputElement1.textContent = message1;
// outputElement2 = document.getElementById("c018");
// message2 = randomValues[2];
// outputElement2.textContent = message2;
// outputElement3 = document.getElementById("c019");
// message3 = randomValues[3];
// outputElement3.textContent = message3;
// outputElement4 = document.getElementById("c020");
// message4 = randomValues[4];
// outputElement4.textContent = message4;
// //--------------fivth row-----------

// randomValues = selectUniqueRandomValuesFromArray(originalArray, 5);
// console.log(randomValues);

// outputElement = document.getElementById("c021");
// message = randomValues[0];
// outputElement.textContent = message;
// outputElement1 = document.getElementById("c022");
// message1 = randomValues[1];
// outputElement1.textContent = message1;
// outputElement2 = document.getElementById("c023");
// message2 = randomValues[2];
// outputElement2.textContent = message2;
// outputElement3 = document.getElementById("c024");
// message3 = randomValues[3];
// outputElement3.textContent = message3;
// outputElement4 = document.getElementById("c025");
// message4 = randomValues[4];
// outputElement4.textContent = message4;

// //--------sixth row---------
// randomValues = selectUniqueRandomValuesFromArray(originalArray, 5);
// console.log(randomValues);

// outputElement = document.getElementById("c026");
// message = randomValues[0];
// outputElement.textContent = message;
// outputElement1 = document.getElementById("c027");
// message1 = randomValues[1];
// outputElement1.textContent = message1;
// outputElement2 = document.getElementById("c028");
// message2 = randomValues[2];
// outputElement2.textContent = message2;
// outputElement3 = document.getElementById("c029");
// message3 = randomValues[3];
// outputElement3.textContent = message3;
// outputElement4 = document.getElementById("c030");
// message4 = randomValues[4];
// outputElement4.textContent = message4;

//---------------table3--------------
//---------------first row-------------
function getUniqueValuesAtEachIndex(...arrays) {
    // Array to store unique values at each index
    let uniqueValuesArray = [];

    // Determine the length of the arrays (assuming they have the same length)
    let length = arrays[0].length;

    // Iterate through each index
    for (let i = 0; i < length; i++) {
        // Use Set to get unique values at the current index
        let uniqueSet = new Set(arrays.map(array => array[i]));

        // Convert Set back to an array
        let uniqueArray = Array.from(uniqueSet);

        // Add the unique values array to the result array
        uniqueValuesArray.push(uniqueArray);
    }

    return uniqueValuesArray;
}

// Sample arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 4, 3, 6, 7];
let array3 = [5, 6, 7, 8, 9];
let array4 = [7, 8, 9, 10, 11];
let array5 = [9, 10, 11, 12, 13];

// Call the function
// let result = getUniqueValuesAtEachIndex(array1, array2, array3, array4, array5);
let result = getUniqueValuesAtEachIndex(originalArray, randomValues1, randomValuest1);
// let re = result[0].concat(originalArray[0])
// console.log(re)
let result1 = getUniqueValuesAtEachIndex(originalArray, result);

console.log(result);


var arraysToCompare = [randomValues1, randomValuest1, originalArray];
// let randomValuest2 = selectUniqueRandomValuesFromArray(result, 5);


// Example 1: Find differing values at index 0
var differingValuesIndex0 = findDifferingValuesAtIndex(arraysToCompare, 0);

console.log("Differing values at index 0: " + differingValuesIndex0);

// Example 2: Find differing values at index 1
var differingValuesIndex1 = findDifferingValuesAtIndex(arraysToCompare, 1);
console.log("Differing values at index 1: " + differingValuesIndex1);
var differingValuesIndex2 = findDifferingValuesAtIndex(arraysToCompare, 2);
console.log("Differing values at index 2: " + differingValuesIndex2);
var differingValuesIndex3 = findDifferingValuesAtIndex(arraysToCompare, 3);
console.log("Differing values at index 3: " + differingValuesIndex3);
var differingValuesIndex4 = findDifferingValuesAtIndex(arraysToCompare, 4);
console.log("Differing values at index 4: " + differingValuesIndex4);
let randomValuest3 = selectUniqueRandomValuesFromArray(differingValuesIndex0, 1);
console.log(randomValuest3);
outputElement = document.getElementById("01");
message = randomValuest3[0];
outputElement.textContent = message;
randomValuest3 = selectUniqueRandomValuesFromArray(differingValuesIndex1, 1);
console.log(randomValuest3);
outputElement1 = document.getElementById("02");
message1 = randomValuest3[0];
outputElement1.textContent = message1;
randomValuest3 = selectUniqueRandomValuesFromArray(differingValuesIndex2, 1);
console.log(randomValuest3);
outputElement2 = document.getElementById("03");
message2 = randomValuest3[0];
outputElement2.textContent = message2;
randomValuest3 = selectUniqueRandomValuesFromArray(differingValuesIndex3, 1);
console.log(randomValuest3);
outputElement3 = document.getElementById("04");
message3 = randomValuest3[0];
outputElement3.textContent = message3;
randomValuest3 = selectUniqueRandomValuesFromArray(differingValuesIndex4, 1);
console.log(randomValuest3);
outputElement4 = document.getElementById("05");
message4 = randomValuest3[0];
outputElement4.textContent = message4;