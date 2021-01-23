let nums = [1, 2, 4, 7, 9]

function getSecondLargest(nums) {
  let secondLargestNumber = 0;
  nums.find(number => {
    if (number > secondLargestNumber && number < getHighestNumber(nums)){
      secondLargestNumber = number
    } 
  })
  return secondLargestNumber;
};

function getHighestNumber(nums) {
  let highestNumber = 0;
  nums.find(eachNumber => {
      if (eachNumber > highestNumber){
          highestNumber = eachNumber
      }
  })
  return highestNumber;
}

// console.log(getHighestNumber([2, 3, 4 ,7]))

console.log(getSecondLargest(nums))