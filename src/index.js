//return indexes
let numsObj = {};
let newIndexArr = [];
//numsObj={
// 17:0,
// 10:1,
// 6:2,
// 4:3,
// 15:4,
// 2:5,
// 6:6,
// 8:7
// }

// complementary object
// numsObj={
// -5:0,
// 2:1,
// 6:2 ,
// 8: 3,
// -3:4 ,
// 10: 5,
// 6: 6,
// 4: 7,
// }
function twoSum(numsArr, sum) {
  for (let i = 0; i < numsArr.length; i++) {
    let complement = sum - numsArr[i];
    if (numsObj[complement] !== undefined) {
      console.log(numsObj[complement], i);
      newIndexArr.push([numsObj[complement], i]);
    }
    numsObj[numsArr[i]] = i;
  }
  return newIndexArr;
}

console.log(twoSum([17, 10, 6, 4, 15, 2, 6, 8], 12));
