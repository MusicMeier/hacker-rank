// function vowelsAndConsonants(s) {
//   let vowels = [];
//   let consonants = [];
//   let arrayOfLetters = s.split(',')
//   arrayOfLetters.filter(letter => {
//       if(letter === ){
//         console.log(vowels.push(letter))
//       } else {
//         console.log(consonants.push(letter))
//       }
//   })
// }

function vowelsAndConsonants(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const arrayOfLetters = s.split('')
  const stringOfVowels = arrayOfLetters.filter(letter => vowels.includes(letter));
  const stringOfConsonants = arrayOfLetters.filter(letter => !vowels.includes(letter));
  console.log(stringOfVowels.join('\n') + '\n' + stringOfConsonants.join('\n'));
}

vowelsAndConsonants("javascriptloops")
