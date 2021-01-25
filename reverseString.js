function reverseString(s) {
  try {
      const stringArray = s.split('');
      const reversedArray = stringArray.reverse();
      const newString = reversedArray.join('');
      console.log(newString);
  } catch {
      console.log('s.split is not a function')
      console.log(s)
  }
}
