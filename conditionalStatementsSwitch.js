function getLetter(s) {
  let letter;
  let arrayOfString = s.split("")
  arrayOfString.map(eachLetter => {
      if(eachLetter[0] === a){
          return "A";
      } else if (eachLetter[0] === b){
          return "B";
      } else if (eachLetter[0] === h){
          return "C";
      } else if(eachLetter[0] === n){
          return "D";
      }
  })
  return letter;
}
