

// 1. constant time - O(1).  For second part - linear O(n) - because it is looping through an array
// 2. constant time - O(1)
// 3. 
// 4. linear because it is looping through an array
// 5. linear because it is looping thru an array
// 6. polynomial O(n^2) because it has a nested for loop but isn't growing
// 7. linear
// 8. log
// 9. constant
// 10. Linear, as the integer (n) increase, the number of operations grows linearly 

// 11.

//towerOfHanoi
const towerOfHanoi = function(n, source, dest, temp){
  if(n===1){
    console.log(source + ' -> ' + dest);
  } 
  else {
    towerOfHanoi(n-1,source, temp, dest);
    console.log(source + ' -> ' + dest);
    towerOfHanoi(n-1, temp, dest, source);
  }
};
  
towerOfHanoi(4, 'A', 'C', 'B');


//12-1
function countSheep(num) {
  for(let i = 0; i < num; i++) {
    console.log('another sheep jumps over the fence');
  }
  console.log('All sheep jumped over the fence');
}


//12-2
function powerCalculator(num, expo) {
  let result = num;
  if (expo < 0) {
    return 'exponent should be >= 0';
  }
  if (expo === 0) {
    return 1;
  }
  for(let i = 1; i < expo; i++) {
    result *= num;
  }
  console.log(result);
}

//12-3
function reverse(str) {
  return str.split('').reverse().join('');
}

//12-4
//12-5
//12-6
//12-7