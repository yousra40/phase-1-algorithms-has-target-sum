function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complementNum = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complementNum) return true;
    }
  }
  return false;
}

function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (num of array) {
    const complementNum = target - num;
    if (complementNum in seenNumbers) return true; // this is syntax to check if a key exists in an object
    seenNumbers[num] = true; // here we just giving the numbers a boolean value, you can give it any value
  }
  return false;
}

function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    if (seenNumbers.has(complement)) return true;
    seenNumbers.add(number);
  }
  return false;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
