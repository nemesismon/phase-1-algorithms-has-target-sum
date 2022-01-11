const { consoleLog } = require("mocha/lib/reporters/base");

function hasTargetSum(array, target) {

for (i=0; i < array.length; i++) {
    for (j=i+1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }      
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime: 0(n^2)
*/

/* 
  Add your pseudocode here
  + Use quadratic programming to iterate element with others (nested for loops)
    + If statement for comparison to target
      + Return false outside of all loops to satisfy criteria was not met
*/

/*
  Add written explanation of your solution here
  + The first for loop is used to hold the index of the first item and slowly move through
    iteration as we check the trailing items for a match.  If none do we move one index unit
    and test again.  When conditions are met and the target is matched we return true.  
    Outside of all the loops we return false as we know no combinations could be reached
    to match the target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
