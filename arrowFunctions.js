/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
// function modifyArray(nums) {
//   let evenArray = [];
//   let oddArray = [];
  
//   nums.filter(number => {
//       if(number % 2 === 0){
//           console.log(evenArray = number * 2)
//       } else {
//           console.log(oddArray = number * 3)
//       }
//   })
// }


function modifyArray(nums) {
  
  return nums.map(number => {
      if(number % 2 === 0){
          return number * 2
      } else {
          return number * 3
      }
    })
}

console.log(modifyArray([1, 2, 3, 4, 5, 6, 7]))