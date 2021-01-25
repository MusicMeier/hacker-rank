/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  try {
      if ( a > 0 ){
          return "YES"
      } else {
          throw new error()
      }
  } catch (error) {
      if ( a === 0 ){
          return "Zero Error"
      } else if (a < 0) {
          return "Negative Error"
      }
  }
}


console.log(isPositive(-1))