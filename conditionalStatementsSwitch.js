// function getLetter(s) {
//   let letter;
//   let arrayOfString = s.split("")
//   arrayOfString.map(eachLetter => {
//       if(eachLetter[0] === a){
//           return "A";
//       } else if (eachLetter[0] === b){
//           return "B";
//       } else if (eachLetter[0] === h){
//           return "C";
//       } else if(eachLetter[0] === n){
//           return "D";
//       }
//   })
//   return letter;
// }

// function getLetter(s) {
//     let letter;
//     let arrayOfString = s.split(" ")
//     arrayOfString.filter(eachLetter => {
//         if(eachLetter[0] === "a"){
//             return console.log("A");
//         } else if (eachLetter[0] === "b"){
//             return console.log("B");
//         } else if (eachLetter[0] === "h"){
//             return console.log("C");
//         } else if(eachLetter[0] === "n"){
//             return console.log("D");
//         }
//     })
//     return ""
// }

function getLetter(s) {
    if (s[0].includes('a')){
        return console.log('A')
    } else if (s[0].includes('b')){
        return console.log('B')
    } else if (s[0].includes('h')){
        return console.log('C')
    } else if (s[0].includes('n')){
        return console.log('D')
    }
    return letter;
}

getLetter("hey")

// function getLetter(s) {

//     if (s[0].includes('a')){
//         return "A"
//     } else if (s[0].includes('b')){
//         return "B"
//     } else if (s[0].includes('h')){
//         return "C"
//     } else if (s[0].includes('n')){
//         return "D"
//     }
// }
