"use strict";
let nums = [2, 0, 2, 1, 1, 0];
let red = [];
let white = [];
let blue = [];
for (let n = 0; n < nums.length; n++){
if (nums[n] == 0){
red.push(0);
}
else if (nums[n] == 1){
white.push(1);
}
else {
blue.push(2);
}
}

let newNums = red.concat(white, blue);
console.log(red);
console.log(white);
console.log(blue);
console.log(newNums);
