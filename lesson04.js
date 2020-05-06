let testArray = [];
let arr1 = [];
let arr2 = [];
let arr3 = [];
let i = 0;
let j = 0;
let k = 0;
let sum = 0;


function task1() {
    while (testArray.length < 100) { // создали новый массив с числами от 0 до 100
        testArray[i] = i;
        i++;
    }
    arr1 = testArray.sort(function () {
        return Math.random() - 0.5;
    });
    return arr1;
}
console.log(task1());


while (k < 100) {
    arr2[k] = arr1[arr1.length - 1 - k];
    k++;
}
console.log(arr2);


while (j < 100) {
    arr3[j] = arr1[j] - arr2[j];
    j++;
}
console.log(arr3);


function average(arr) {
    while (k < 100) {
        sum += arr[k];
        k++;
    }
    return sum / arr.length;
}
console.log(average(arr3));

