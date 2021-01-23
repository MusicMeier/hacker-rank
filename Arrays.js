// function getSecondLargest(nums) {
//   let n = 0;
//   nums.map(number => {
//      if (number[i] > n){
//          n = number[i]
//      } 
//   })
  
// };

function getHighestNumber(nums) {
  let highestNumber = 0;
  nums.find(eachNumber => {
      if (eachNumber > highestNumber){
          highestNumber = eachNumber
      }
  })
  return highestNumber;
}

console.log(getHighestNumber([2, 3, 4 ,7]))